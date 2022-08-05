import React from "react";
import { BaseTypeProps } from '../../utils';

// 定义接受到的参数 类型
export interface BadgeProps extends BaseTypeProps {
     /**
      * 徽标内容
      * @en badge content
      */
      content?: string | number | React.ReactNode;
      visible?: boolean;
      timeout?: number | { appear?: number; enter?: number; exit?: number; };
     /**
      * 显示为一个小红点
      * @en show as a red dot
      * @default false
      */
     dot?: boolean;
     /**
      * 最大完整展示数字，超出后将展示 +
      * @en Maximum full impression number, it will be displayed "+" beyond the number
      * @default 99
      */
      maxCount?: number;
     /**
      * 徽标位置偏移量
      * @en 
      * 
      */
    offset?: [number | string, number | string];
     /**
      * 是否有白色边框
      * @en Whether the badge has a white border
      * @default false
      */
     bordered?: boolean;
     /**
      * 背景颜色
      * @en Background color
      */
     color?: string;
 }