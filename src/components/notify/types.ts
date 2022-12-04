import React from 'react';
import { BaseTypeProps, TeleportType } from '../../utils';

export interface NotifyProps extends BaseTypeProps {
  /** 开关 */
  visible?: boolean;
  /** 持续时间 */
  duration?: number;
  /** 需要展示的内容 */
  content?: string | React.ReactNode;
  /** 通知类型 */
  type?: 'success' | 'danger' | 'warning' | 'primary';
  /** 字体颜色 */
  color?: string;
  /** 背景颜色 */
  background?: string;
  /** 弹出时的的父容器 */
  teleport?: TeleportType;
  /** 点击时的回调函数	 */
  onClick?: (event: React.MouseEvent) => void;
  /** 完全展示后的回调函数	 */
  onEntered?: () => void;
  /** 完全关闭后的回调函数 */
  onExited?: () => void;
}

export interface NotifyOptions extends Omit<NotifyProps, 'visible'> {
  /** 关闭时的回调函数	 */
  onClose?: () => void;
}

export interface NotifyCardProps extends BaseTypeProps {
  title?: string;
  describe?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: (event: React.MouseEvent) => void;
}
