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
     */
    color?: string;
    /**
     * @name 按钮形状
     * @default 'default'
     */
    shape?: ButtonShape;
    /**
     * @name 镂空状态
     * @default false
     */
    plain?: boolean;
    /**
     * @name 细边样式
     * @default false
     */
    hairline?: boolean;
    /**
     * @name 加载状态
     * @default false
     */
    loading?: boolean;
    /**
     * @name 加载文案
     * @desc 在加载状态是所显示的文案
     * @default ''
     */
    loadingText?: string;
    /**
     * @name 加载文案大小
     * @default ''
     */
    loadingSize?: string | number;
    /**
     * @name 加载图标类型
     * @default ''
     */
    loadingType?: LoadingType;
    /**
     * @name 禁用状态
     * @default false
     */
    disabled?: boolean;
    /**
     * @name 按钮类型
     * @default 'default'
     */
    type?: ButtonType;
    /**
     * @name 按钮大小
     * @default 'normal'
     */
    size?: ButtonSize;
    /**
     * @name 按钮块元素
     * @default false
     */
    block?: boolean;
    /**
     * @name 按钮图标
     * @default ''
     */
    icon?: React.ReactElement;
    /**
     * @name 按钮图标位置
     * @default 'left'
     */
    iconPosition: IconPosition;
    /**
     * @name 按钮文字
     * @default ''
     */
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