import React from "react";
import { BaseTypeProps } from '../../utils';

export type StatusOptions = {
    [key: string]: string;
};

// 定义接受到的参数 类型
export interface EmptyProps extends BaseTypeProps{
    image?: 'default' | 'error' | 'network' | 'search' | string | React.ReactNode; 
    imageSize?: number | string;
    description?: string | React.ReactNode;
}