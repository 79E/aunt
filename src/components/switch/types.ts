import React from "react";
import { BaseTypeProps } from '../../utils';

export interface SwitchProps extends BaseTypeProps {
  /** 
   * @name 开关尺寸，默认单位为px
   */
  size?: number | string;
  /** 
   * @name 是否为加载状态	 
   * @default false
   */
  loading?: boolean;
  /** 
   * @name 是否为禁用状态	 
   * @default false
   */
  disabled?: boolean;
  /** 
   * @name 开关选中状态	 
   */
  checked?: boolean;
  /** 
   * @name 开关默认选中状态	 
   */
  defaultChecked?: boolean;
  /** 
   * @name 开关形状	 
   * @default round
   */
  shape?: 'square' | 'round';
  /** 
   * @name 打开时的背景色	 
   */
  activeColor?: string;
  /** 
   * @name 关闭时的背景色	 
   */
  inactiveColor?: string;
  /** 
   * @name 打开时对应的值	 
   */
  activeValue?: any;
  /** 
   * @name 关闭时对应的值	 
   */
  inactiveValue?: any;
  /** 
   * @name 开关状态切换时触发	 
   */
  onChange?: (val: any) => void;
  onClick?: (e: React.MouseEvent) => void;
}
