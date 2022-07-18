import React from "react"
import { BaseTypeProps } from '../../utils'

// 定义接受到的参数 类型
export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export interface AvatarProps extends BaseTypeProps {
    // 大小
    size?: 'small' | 'normal' | 'large';
    // 形状
    shape?: 'square' | 'round';
    // 图片链接
    url?: string;
    // 图标
    icon?: React.ReactElement;
    // 文字颜色
    color?: string;
    // 背景颜色
    background?: string;
    // 图片占位模式
    fit?: ImageFit,
    onClick?: () => void
}