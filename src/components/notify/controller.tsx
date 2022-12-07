import React, { useState, useEffect } from 'react';
import Notify from './notify';
import { NotifyOptions } from './types';
import { isObject } from '../../utils';
import { render, unmount } from '../../utils/dom/render';
import { resolveContainer } from '../../utils/dom/getContainer';

function parseOptions(content: string | NotifyOptions): NotifyOptions {
  return isObject(content) ? content : { content };
}

let currentOptions: NotifyOptions = {};

const notifyArray: (() => void)[] = [];

// 同步的销毁
function syncClear() {
  let fn = notifyArray.pop();
  while (fn) {
    fn();
    fn = notifyArray.pop();
  }
}

// 针对 toast 还没弹出来就立刻销毁的情况，将销毁放到下一个 event loop 中，避免销毁失败。
function nextTickClear() {
  setTimeout(syncClear);
}

const show = (p: string | NotifyOptions) => {
  const props = parseOptions(p);
  const interProps = { ...currentOptions, ...props };
  const { onClose, duration, ...restProps } = interProps;

  // 创建父亲节点
  const userContainer = resolveContainer(props.teleport);
  const container = document.createElement('div');
  userContainer.appendChild(container);

  // 定时器
  let timer = 0;

  // 清理方法
  let destroy = () => {};

  const TempNotify = () => {
    const [visible, setVisible] = useState(false);

    destroy = () => {
      setVisible(false);
      if (props.onClose) props.onClose();
    };

    const internalOnClosed = () => {
      const unmountResult = unmount(container);
      if (unmountResult && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };

    useEffect(() => {
      setVisible(true);
      notifyArray.push(internalOnClosed);

      if (duration && +duration > 0) {
        timer = window.setTimeout(destroy, duration);
      }
      return () => {
        if (timer !== 0) {
          window.clearTimeout(timer);
        }
      };
    }, []);

    return (
      <Notify
        visible={visible}
        type={interProps.type}
        content={interProps.content}
        className={interProps.className}
        color={interProps.color}
        background={interProps.background}
        teleport={userContainer}
      />
    );
  };

  render(<TempNotify />, container);
};

// 默认配置
function defaultOptions() {
  return {
    type: 'danger',
    content: '',
    duration: 3000,
  } as NotifyOptions;
}

currentOptions = defaultOptions();

const setDefaultOptions = (options: NotifyOptions) => {
  Object.assign(currentOptions, options);
};

// 重置配置
const resetDefaultOptions = () => {
  currentOptions = defaultOptions();
};

const clear = nextTickClear;

export { show, setDefaultOptions, resetDefaultOptions, clear };
