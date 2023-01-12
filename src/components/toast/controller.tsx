import React, { useEffect, useState, useCallback } from 'react';
import type { ToastType, ToastOptions, ToastProps, ToastInstance, ToastReturnType } from './types';
import Transition from '../transition';
import { Toast as BaseToast } from './toast';
import { isObject } from '../../utils';
import { render, unmount } from '../../utils/dom/render';
import { resolveContainer } from '../../utils/dom/getContainer';

const currentOptions: { [key: string]: ToastOptions } = {};

function parseOptions(message: string | ToastOptions): ToastOptions {
  return isObject(message) ? message : { message };
}

const toastArray: (() => void)[] = [];

// 同步的销毁
function syncClear() {
  let fn = toastArray.pop();
  while (fn) {
    fn();
    fn = toastArray.pop();
  }
}

// 针对 toast 还没弹出来就立刻销毁的情况，将销毁放到下一个 event loop 中，避免销毁失败。
function nextTickClear() {
  setTimeout(syncClear);
}

const show = (p: ToastProps | string) => {
  const props = parseOptions(p);
  const update: ToastReturnType = {
    config: () => {},
    clear: () => null,
  };
  // 创建父亲节点
  const userContainer = resolveContainer(props.teleport);
  const container = document.createElement('div');
  userContainer.appendChild(container);

  // 定时器
  let timer = 0;

  const TempNotify = () => {
    const options = {
      ...props,
    };
    const [state, setState] = useState<ToastProps>({ ...options });
    const [visible, setVisible] = useState(false);

    const destroy = useCallback(() => {
      setVisible(false);
      if (props.onClose) props.onClose();
      setTimeout(internalOnClosed, 1000);
    }, []);

    const internalOnClosed = useCallback(() => {
      const unmountResult = unmount(container);
      if (unmountResult && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }, [container]);

    update.clear = destroy;

    update.config = useCallback(
      nextState => {
        setState(prev =>
          typeof nextState === 'function'
            ? { ...prev, ...nextState(prev) }
            : { ...prev, ...nextState }
        );
      },
      [setState]
    );

    useEffect(() => {
      setVisible(true);
      !state.allowMultipleToast && syncClear();
      toastArray.push(destroy);

      if (state.duration && +state.duration > 0) {
        timer = window.setTimeout(destroy, state.duration);
      }

      return () => {
        if (timer !== 0) {
          window.clearTimeout(timer);
        }
      };
    }, []);

    return (
      <Transition in={visible} onEntered={props.onOpened} onExited={props.onClose}>
        <BaseToast {...state} />
      </Transition>
    );
  };

  render(<TempNotify />, container);

  return update;
};

const defaultOptions: ToastOptions = {
  message: '',
  duration: 3000,
  direction: 'vertical',
  loadingType: 'oval',
  position: 'center',
  allowMultipleToast: false,
};

['info', 'loading', 'success', 'fail'].forEach(method => {
  currentOptions[method] = defaultOptions;
});

const setDefaultOptions = (type: ToastType, options: ToastOptions) => {
  currentOptions[type] = Object.assign(currentOptions[type], options);
};

// 重置配置
const resetDefaultOptions = (type: ToastType) => {
  currentOptions[type] = { ...defaultOptions };
};

const clear = nextTickClear;

const ToastDefault = (options: ToastProps | string) => {
  let type: ToastType = 'info';
  if (typeof options !== 'string') {
    type = options.type || 'info';
  }
  return show({
    type: type,
    ...currentOptions[type],
    ...parseOptions(options),
  });
};

const info = (options: ToastOptions | string) =>
  show({
    ...currentOptions['info'],
    ...parseOptions(options),
    type: 'info',
  });

const fail = (options: ToastOptions | string) =>
  show({
    ...currentOptions['fail'],
    ...parseOptions(options),
    type: 'fail',
  });

const success = (options: ToastOptions | string) =>
  show({
    ...currentOptions['success'],
    ...parseOptions(options),
    type: 'success',
  });

const loading = (options: ToastOptions | string) =>
  show({
    ...currentOptions['loading'],
    ...parseOptions(options),
    type: 'loading',
  });

const ToastController: ToastInstance = Object.assign(ToastDefault, {
  setDefaultOptions,
  resetDefaultOptions,
  clear,
  info,
  fail,
  loading,
  success,
});

export default ToastController;
