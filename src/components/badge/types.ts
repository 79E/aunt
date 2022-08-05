import React from "react";
import { BaseTypeProps } from '../../utils';

// 定义接受到的参数 类型
export interface BadgeProps extends BaseTypeProps {
      /**
       * @name 徽标内容
       * @default ''
       */
      content?: string | number | React.ReactNode;
      /**
       * @name 显隐状态
       * @desc 控制徽标显示或隐藏
       * @default true
       */
      visible?: boolean;
      /**
       * @name 动画持续时间
       * @desc 徽标显示或隐藏动画持续时间
       * @default 300
       */
      timeout?: number | { appear?: number; enter?: number; exit?: number; };
     /**
      * @name 是否为红点
      * @desc 徽标将显示为一个小红点样式
      * @default false
      */
     dot?: boolean;
     /**
      * @name 最大数
      * @desc 最大完整展示数字，超出后将展示 +
      * @default 99
      */
      maxCount?: number;
     /**
      * @name 偏移量
      * @desc 用来设置徽标所在的位置
      * @default [0,0]
      */
    offset?: [number | string, number | string];
     /**
      * @name 是否有白色边框
      * @default false
      */
     bordered?: boolean;
     /**
      * @name 背景颜色
      * @default ''
      */
     color?: string;
 }