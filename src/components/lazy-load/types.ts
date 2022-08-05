import React from "react";
import { BaseTypeProps } from '../../utils';

// 定义接受到的参数 类型
export interface LazyLoadProps extends BaseTypeProps {
    /**
     * @name 占位容器高度
     * @default ''
     */
    height?: number | string;
    /**
     * @name 自定义占位符
     * @default ''
     */
    placeholder?: React.ReactNode;
}