import React from 'react';
import type { BaseTypeProps } from '../../utils';

export interface NoticeBarProps extends BaseTypeProps {
  /**
   * 是否可关闭
   * @default false
   */
  closeable?: boolean;
  /**
   * 自定义关闭图标
   * @default <AuntIconXCircle />
   */
  closeIcon?: React.ReactNode;
  /**
   * 通知文本内容
   */
  content?: string | React.ReactNode;
  /**
   * 通知文本颜色
   * @default #ff7d00
   */
  color?: string;
  /**
   * 通知背景颜色
   * @default #fff7e8
   */
  background?: string;
  /**
   * 动画延迟时间 (ms)
   * @default 0
   */
  delay?: number;
  /**
   * 滚动速率 (px/s)
   * @default 1
   */
  speed?: number;
  /**
   * 是否开启滚动播放，内容长度溢出时默认开启
   */
  scrollable?: boolean;
  /**
   * 是否开启文本换行，只在禁用滚动时生效
   * @default false
   */
  wrapable?: boolean;
  /**
   * 自定义左侧图标
   */
  leftIcon?: React.ReactNode;
  /**
   * 自定义右侧图标
   */
  rightIcon?: React.ReactNode;
  /**
   * 关闭通知栏时触发
   */
  onClose?: (event: React.MouseEvent) => void;
  /**
   * 点击通知栏时触发
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * 每当滚动栏重新开始滚动时触发
   */
  onReplay?: () => void;
}
