import React from "react";
import { BaseTypeProps } from '../../utils';

export interface FlexProps extends BaseTypeProps {
    /** 列元素之间的间距。可以使用数组形式同时设置 */
    gutter?: number | [number, number];
    /**
     * @name 项目定位方向
     * @default 'row'
     */
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    /**
     * @name 子元素的换行方式
     * @default 'nowrap'
     */
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    /**
     * @name 水平排列方式
     * @default 'start'
     */
    justify?: 'start' | 'end' | 'center' | 'between' | 'around';
    /**
     * @name 垂直对齐方式
     * @default 'start'
     */
    align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  }



  export type FlexType = number | 'none' | 'auto' | string;

  export interface FlexItemProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>,
      BaseTypeProps {
    /**
     * @name 栅格占位格数
     * @default ''
     */
    span?: number | string;
    /**
     * @name 布局属性
     * @default ''
     */
    flex?: FlexType;
  }
  