import React from "react";
import { BaseTypeProps } from '../../utils';

export type StatusOptions = {
    [key: string]: string;
};

// 定义接受到的参数 类型
export interface EmptyProps extends BaseTypeProps{
    /**
     * @name 图片链接
     * @default 'default'
     */
    image?: 'default' | 'error' | 'network' | 'search' | string | React.ReactNode; 
    /**
     * @name 图片大小
     * @default ''
     */
    imageSize?: number | string;
    /**
     * @name 描述内容
     * @default ''
     */
    description?: string | React.ReactNode;
}