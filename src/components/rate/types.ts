import React from "react";
import { BaseTypeProps } from '../../utils';

export interface RateProps extends BaseTypeProps {
  /**
   * 选中时的颜色
   */
  color?: string;
  /**
   * 图标间距，默认单位为px
   * @default 4
   */
  gutter?: number | string;
  /** 
   * 是否为只读状态，只读状态下无法修改评分	 
   */
  readonly?: boolean;
  /** 
   * 是否禁用评分	 
   */
  disabled?: boolean;
  /** 
   * 是否可以清除所选择分数 
   */
  allowClear?: boolean;
  /** 
   * 是否允许半选	 
   */
  allowHalf?: boolean;
  /** 
   * 未选中时的颜色	 
   */
  voidColor?: string;
  /** 
   * 当前分值 
   */
  value?: number;
  /** 
   * 默认分值 
   */
  defaultValue?: number;
  /** 
   * 当前分值变化时触发的事件	 
   */
  onChange?: (value: number) => void;
  /**
   * 选中时的图标或图片
   */
  icon?: React.ReactNode;
  /**
   * 未选中时的图标或图片
   */
  voidIcon?: React.ReactNode;
  /**
   * 图标总数
   * @default 5
   */
  count?: number | string;
}
