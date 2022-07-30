import React from "react";
import { BaseTypeProps } from '../../utils';
import { LoadingType } from '../loading/types';

// 定义按钮的Ref类型
export type ButtonRef = {
    nativeElement: HTMLButtonElement | null;
}
export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';
export type ButtonShape = 'default' | 'square' | 'round';
export type IconPosition = 'left' | 'right';

// 定义接受到的参数 类型
export interface ButtonProps extends BaseTypeProps {
    /**
     * @name 按钮颜色
     * @default ''
     * @param String
     */
    color?: string;
    /**
     * @name 按钮形状
     * @default 'default'
     * @param ButtonShape 'default' | 'square' | 'round'
     */
    shape?: ButtonShape;
    // 镂空
    plain?: boolean;
    // 细边
    hairline?: boolean;
    // 加载
    loading?: boolean;
    // 加载文案
    loadingText?: string;
    loadingSize?: string | number;
    loadingType?: LoadingType;
    // 禁用
    disabled?: boolean;
    // 类型
    type?: ButtonType;
    // 大小
    size?: ButtonSize;
    // 块
    block?: boolean;
    // 图标
    icon?: React.ReactElement;
    // 图标位置
    iconPosition: IconPosition;
    // 按钮文字
    text?: string;
    /**
     * @name 按钮点击事件
     * @desc 用户点击按钮后触发此方法
     * @default ''
     * @param event React.MouseEvent<HTMLButtonElement, MouseEvent>
     * @return void | Promise<void>
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>;
}