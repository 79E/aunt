import React from "react";
import { BaseTypeProps } from '../../utils';

export interface SpaceProps extends BaseTypeProps {
  /** 
   * @name 间距方向
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  /** 
   * @name 交叉轴对齐方式
   * @default ''	 
   */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /** 
   * @name 主轴对齐方式
   * @default ''	 
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  /** 
   * @name 是否自动换行
   * @desc 仅在 horizontal 时有效
   * @default false
   */
  wrap?: boolean;
  /** 
   * @name 是否渲染为块级元素
   * @default false
   */
  block?: boolean;
  /**
   * @name 间距大小
   * @desc 设为数组时则分别设置垂直方向和水平方向的间距大小
   * @default 8px
   */
  gap?: number | string | [number | string, number | string];
  /**
   * @name 点击事件 
   * @param e React.MouseEvent<HTMLDivElement, MouseEvent>
   * @return void
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
