import React from "react";
import { BaseTypeProps } from '../../utils';

export type PercentPosition = 'left' | 'innerLeft' | 'right' | 'follow';
export type BezierType = [number, number, number, number];

// 定义接受到的参数 类型
export interface ProgressProps extends BaseTypeProps {
 /**
  * 文字显示位置
  * @en Text display position
  * @default "center"
  */
 percentPosition?: PercentPosition;
 /**
  * 是否显示进度条内部文字
  * @en Whether to display the text inside the progress bar
  * @default true
  */
 showPercent?: boolean;
 /**
  * 进度环百分比
  * @en Progress percentage
  */
 percentage: number;
 /**
  * 进度条内部文字显示（一个函数，返回ReactNode类型，回调参数为当前进度百分比）
  * @en The text display inside the progress bar (a function that returns the ReactNode type, and the callback parameter is the current progress percentage)
  */
 renderPercent?: (percentage: number) => React.ReactNode;
 /**
  * 轨道颜色
  * @en Track color
  */
 trackColor?: string;
 /**
  * 进度条颜色
  * @en Progress bar color
  */
 progressColor?: string;
 /**
  * 进度条粗细
  * @en Track thickness
  * @default 一般默认为4，percentPosition=innerLeft 时为18
  * @default_en Generally the default is 4, when percentPosition=innerLeft is 18, when mode=nav is 2
  */
  stroke?: number | string;
 /**
  * 每增加所需的毫秒数
  * @en The number of milliseconds required to increase the step size
  * @default 300
  */
 duration?: number;
 /**
  * 进度条是否两端圆角
  * @en Whether the progress bar has rounded corners at both ends
  * @default 9999px
  */
 filleted?: number | string;

}