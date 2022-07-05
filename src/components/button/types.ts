import React from "react"
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
export interface ButtonProps {
    className?: string;
    // 颜色
    color?: string;
    // 形状
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
    // 样式
    style?: React.CSSProperties;
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
    children: any;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>;
}