import React from "react";
import { BaseTypeProps } from '../../utils';

export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export interface AvatarProps extends BaseTypeProps {
    /**
     * @name 头像大小尺寸
     * @default 'normal'
     */
    size?: 'small' | 'normal' | 'large';
    /**
     * @name 头像形状
     * @default 'square'
     */
    shape?: 'square' | 'round';
    /**
     * @name 头像链接
     * @default ''
     */
    url?: string;
    /**
     * @name 图标
     * @default <AuntIconUser />
     */
    icon?: React.ReactElement;
    /**
     * @name 文字颜色
     * @default '#666666'
     */
    color?: string;
    /**
     * @name 背景颜色
     * @default '#eeeeee'
     */
    background?: string;
    /**
     * @name 图片占位模式
     * @default 'cover'
     */
    fit?: ImageFit,
    /**
     * @name 头像点击事件
     * @default () => void
     * @return void
     */
    onClick?: () => void
}