import React from 'react';
import { BaseTypeProps } from '../../utils';
import { CheckerProps,Direction ,Shape, IconRenderParams} from '../checkbox/types';

export type RadioValueType = number | string;

export interface RadioGroupProps<T = RadioValueType> extends BaseTypeProps {
  /** 是否为禁用状态	 */
  disabled?: boolean;
  /** 图标大小，默认单位为px	 */
  iconSize?: number | string;
  /** 排列方向，可选值为horizontal	 */
  direction?: Direction;
  /** 选中状态颜色	 */
  checkedColor?: string;
  /** 
   * 形状，可选值为 square	 
   */
   shape?: Shape;
   /** 
   * 自定义图标	 
   */
  iconRender?: (params: IconRenderParams) => React.ReactNode;
  /** 当前值 */
  value?: T;
  /** 默认值 */
  defaultValue?: T;
  /** 当绑定值变化时触发的事件	 */
  onChange?: (name: T) => void;
  children?: React.ReactNode;
}

export interface RadioProps<T = RadioValueType> extends CheckerProps<RadioGroupProps<T>> {
  value?: T;
}
