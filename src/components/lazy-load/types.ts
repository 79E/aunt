import React from "react"
import { BaseTypeProps } from '../../utils';

// 定义接受到的参数 类型
export interface LazyLoadProps extends BaseTypeProps {
    /** 占位容器高度 */
    height?: number | string;
    /** 自定义占位符 */
    placeholder?: React.ReactNode;
    children?: React.ReactNode;
}