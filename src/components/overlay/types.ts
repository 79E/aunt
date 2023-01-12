import React from 'react';
import { BaseTypeProps } from '../../utils';
import { TransitionStyles } from '../transition';

// 定义接受到的参数 类型
export interface OverlayProps extends BaseTypeProps {
  /**
   * 是否可见
   */
  visible?: boolean;
  /**
   * 设置`z-index`
   */
  zIndex?: number;
  /**
   * 动画时长，单位`ms`，设置为 0 可以禁用动画
   */
  duration?: number;
  /**
   * 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动
   */
  lockScroll?: boolean;
  /**
   * 自定义动画
   */
  transitionStyles?: TransitionStyles;
  /**
   * 点击时触发
   */
  onClick?: (e: React.MouseEvent) => void;
  /**
   * 出现时候触发
   */
  onEnter?: () => void;
  /**
   * 出现后动画执行完触发
   */
  onEntered?: () => void;
  /**
   * 退出时候触发
   */
  onExit?: () => void;
  /**
   * 退出后动画执行完触发
   */
  onExited?: () => void;
}
