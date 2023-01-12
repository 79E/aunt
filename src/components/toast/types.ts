import React from 'react';
import type { BaseTypeProps } from '../../utils';
import type { LoadingType } from '../loading';

export type ToastType = 'loading' | 'success' | 'fail' | 'info';

export type ToastPosition = 'top' | 'center' | 'bottom';

export type ToastDirection = 'vertical' | 'horizontal';

export type ToastIconSizeFunction = (direction: ToastDirection) => number | string;

export interface ToastProps extends BaseTypeProps {
  /** 提示类型 */
  type?: ToastType;
  /** 文本内容，支持通过\n换行 */
  message?: number | string;
  /** 展示时长(ms)，值为 0 时，toast 不会消失	 */
  duration?: number;
  /** 自定义图标 */
  icon?: React.ReactNode;
  /** 图标大小，如 20px 2em，默认单位为 px	 */
  iconSize?: number | string | ToastIconSizeFunction;
  /** 加载图标类型, 可选值为 spinner */
  loadingType?: LoadingType;
  /** 图标和文字的排列方式 */
  direction?: ToastDirection;
  /** 是否禁止背景点击	 */
  forbidClick?: boolean;
  /** 位置，可选值为 top bottom	 */
  position?: ToastPosition;
  /** 轻提示弹出时的的父容器 */
  teleport?: HTMLElement | (() => HTMLElement);
  /** 允许同时存在多个 Toast */
  allowMultipleToast?: boolean;
  /** 关闭时的回调函数 */
  onClose?: () => void;
  /** 完全展示后的回调函数 */
  onOpened?: () => void;
}

export type ToastOptions = Omit<ToastProps, 'type'>;

export type ToastReturnType = {
  /** 动态更新方法 */
  config: React.Dispatch<React.SetStateAction<ToastProps>>;
  /** 清除单例toast */
  clear: () => void;
};

export interface ToastInstance {
  (opts: ToastProps | string): ToastReturnType;
  /** 文本提示	 */
  info(opts: ToastOptions | string): ToastReturnType;
  /** 展示加载提示	 */
  loading(opts: ToastOptions | string): ToastReturnType;
  /** 展示成功提示	 */
  success(opts: ToastOptions | string): ToastReturnType;
  /** 展示失败提示	 */
  fail(opts: ToastOptions | string): ToastReturnType;
  /**
   * 修改默认配置，对所有 Toast 生效。
   */
  setDefaultOptions(type: ToastType, options: ToastProps): void;
  /**
   * 重置默认配置，对所有 Toast 生效。
   */
  resetDefaultOptions(type: ToastType): void;
  /** 关闭提示	 */
  clear(): void;
}
