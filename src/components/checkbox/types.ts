import React from 'react';
import { BaseTypeProps } from '../../utils';

export type Shape = 'round' | 'square';
export type Direction = 'horizontal' | 'vertical';

export type IconRenderParams = {
    /** 
     * 是否选中 
     */
    checked: boolean;
    /** 
     * 是否禁用 
     */
    disabled: boolean;
};

export interface CheckboxGroupProps extends BaseTypeProps {
  /**
   * 最大可选数，0 为无限制
   * @default 0
   */
  max?: number | string;
  /** 
   * 所有选中项的标识符	 
   */
  value?: any[];
  /** 
   * 默认选中项 
   */
  defaultValue?: any[];
  /** 
   * 是否禁用所有复选框	 
   */
  disabled?: boolean;
  /** 
   * 所有复选框的图标大小，默认单位为 px	 
   */
  iconSize?: number | string;
  /** 
   * 自定义图标	 
   */
  iconRender?: (params: IconRenderParams) => React.ReactNode;
  /** 
   * 排列方向，可选值为 horizontal	 
   */
  direction?: Direction;
  /** 
   * 所有复选框的选中状态颜色	 
   */
  checkedColor?: string;
  /** 
   * 当绑定值变化时触发的事件	 
   */
  onChange?: (name: any[]) => void;
  /** 
   * 形状，可选值为 square	 
   */
   shape?: Shape;
}



export interface CheckerProps<T> extends BaseTypeProps {
  /** 
   * 标识符 
   */
  name?: number | string;
  /**  
   * 是否禁用复选框	 
   */
  disabled?: boolean;
  /** 
   * 图标大小，默认单位为 px	 
   */
  iconSize?: number | string;
  /** 
   * 自定义图标	 
   */
  iconRender?: (params: IconRenderParams) => React.ReactNode;
  /** 
   * 所有复选框的选中状态颜色	 
   */
  checkedColor?: string;
  /** 
   * 形状，可选值为 square	 
   */
  shape?: Shape;
  role?: string;
  /**
   * 是否与复选框组绑定
   * @default true
   */
  bindGroup?: boolean;
  /** 
   * 勾选状态 
   */
  checked?: boolean;
  /** 
   * 默认勾选状态 
   */
  defaultChecked?: boolean;
  /** 
   * 当绑定值变化时触发的事件	 
   */
  onChange?: (checked: boolean) => void;
   /** 切换选择状态时触发 */
   onToggle?: () => void;
  /** 
   * @private  
   */
  parent?: { props: T };
}

export type CheckboxProps = CheckerProps<CheckboxGroupProps>;

export type CheckboxInstance = {
  toggle: (newValue?: boolean) => void;
  /**
   * @private
   */
  props: CheckboxProps;
  /**
   * @private
   */
  checked: boolean;
};

