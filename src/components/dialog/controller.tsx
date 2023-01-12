import React, { useEffect, useState, useCallback } from 'react';
import { Dialog } from './dialog';
import type { DialogOptions, DialogUpdate, DialogAlertOptions, DialogConfirmOptions } from './types';
import { render, unmount } from '../../utils/dom/render';
import { resolveContainer } from '../../utils/dom/getContainer';

// 存储相关对话框的关闭函数
const dialogArray: (() => void)[] = [];
// 同步的销毁
function syncClear() {
  let fn = dialogArray.pop();
  while (fn) {
    fn();
    fn = dialogArray.pop();
  }
}
function nextTickClear() {
  setTimeout(syncClear);
}

const defaultOptions: DialogOptions = {}

const controller = (p: DialogOptions): DialogUpdate => {
  const props = { ...defaultOptions, ...p };

  // 创建父亲节点
  const userContainer = resolveContainer(props.teleport);
  const container = document.createElement('div');
  userContainer.appendChild(container);

  const update: DialogUpdate = {
    config: () => {},
    clear: () => {}
  };

  const TempNotify = () => {

    const [state, setState] = useState({ ...props });
    const [visible, setVisible] = useState(false);

    const internalOnClosed = useCallback(() => {
      const unmountResult = unmount(container);
      if (unmountResult && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }, [container]);

    const destroy = useCallback(() => {
      setVisible(false);
      if (state.onClose) state.onClose();
      setTimeout(internalOnClosed, 1000)
    }, []);

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
      dialogArray.push(destroy);
      return () => {};
    }, []);

    return <Dialog 
        visible={visible}
        {...state}
        onClose={()=>{
          destroy();
        }}
    />;
  };

  render(<TempNotify />, container);

  return update;
};

const show = (props: DialogOptions) => {
  return controller(props);
}

const alert = (props: DialogAlertOptions ) => {
  const text = props.confirmText || '我知道了'
  return new Promise<void>(resolve => {
    controller({
      ...props,
      actions:[{
        key:'confirm',
        text,
        onClick: props.onConfirm
      }],
      closeOnAction: true,
      onClose: () => {
        props.onClose?.()
        resolve()
      },
    });
  })
}

const confirm = (props: DialogConfirmOptions) => {
  const cancelText = props.cancelText || '取消';
  const confirmText = props.confirmText || '确定';
  return new Promise<boolean>(resolve =>{
    controller({
      ...props,
      actions:[
        {
          key:'cancel',
          text: cancelText,
          onClick: async (e)=>{
            props.onCancel?.(e);
            resolve(false);
          }
        },
        {
          key:'confirm',
          text: confirmText,
          bold: true,
          onClick: async (e)=>{
            props.onConfirm?.(e);
            resolve(true);
          }
        }
      ],
      closeOnAction: true,
      onClose: () => {
        props.onClose?.();
        resolve(false);
      },
    });
  });
}

const DialogController = Object.assign(Dialog, {
  clear: nextTickClear,
  show,
  alert,
  confirm,
});

export default DialogController;
