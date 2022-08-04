/**
 * 基础Type类型
 */
import React from 'react';

export interface BaseTypeProps {
  /**
  * 自定义样式
  * @en Custom stylesheet
  */
  style?: React.CSSProperties | any;
  /**
  * 自定义类名
  * @en Custom classname
  */
  className?: string;
  /**
  * 自定义内容
  * @en Custom content
  */
  children?: React.ReactNode;
}

/** 指定挂载的节点 */
export type TeleportType = HTMLElement | (() => HTMLElement) | null;

export type WithDisplayNameReactElement = React.ReactElement & { type: { displayName: string } };
