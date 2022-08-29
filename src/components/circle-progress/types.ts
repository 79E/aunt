import React from "react";
import { BaseTypeProps } from '../../utils';

// 定义接受到的参数 类型
export interface CircleProgressProps extends BaseTypeProps {
    /**
     * 是否显示圆环内部文字
     * @en Whether to display the text inside the ring
     * @default true
     */
     showPercent?: boolean;
     /**
      * 进度环百分比
      * @en Progress ring Percentage
      */
     percentage: number;
     /**
      * 进度条背景填充颜色
      * @en Progress bar background fill color
      */
     fill?:string;
     /**
      * 轨道颜色
      * @en Track color
      */
     trackColor?: string;
     /**
      * 进度环颜色
      * @en progress ring color
      */
     progressColor?: string | Record<string, string>;
     /**
      * 进度环宽度
      * @en Progress ring width
      * @default 40
      */
      strokeWidth?: number;
     /**
      * 每增加所需的毫秒数
      * @en Number of milliseconds required for each increment
      * @default 300
      */
     duration?: number;
     /**
      * 是否逆时针增加
      * @en Whether to increase counterclockwise
      * @default false
      */
     clockwise?: boolean;
     /**
      * 圆环直径
      * @en Ring diameter
      */
      diameter?: number;
     /**
      * 进度条两端是否圆角样式
      * @en Whether the ends of the progress bar are rounded
      * @default round
      */
      strokeLinecap?: React.CSSProperties['strokeLinecap'];
}