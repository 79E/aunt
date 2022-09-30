import React from 'react';
import { BaseTypeProps } from '../../utils';
import {Gap} from '../grid';
export type FieldNames = {
    /**
     * 描述信息
     */
    description: string,
    /**
     * 是否禁用
     */
    disabled: string,
    /**
     * 标题显示
     */
    label: string,
    /**
     * 所选择值
     */
    value: string
}

export interface SelectorProps<T = {
    description?: React.ReactNode,
    disabled?: boolean,
    label?: React.ReactNode,
    value?: any
} & {[key:string]:any}> extends BaseTypeProps {
    /**
     * 自定义Options字段
     * @default { description: 'description', label: 'label', value: 'value', disabled: 'disabled' }
     */
    fieldNames?: FieldNames,
    /**
     * 可选项
     */
    options: Array<T>,
    /**
     * 默认选择值
     */
    defaultValue?: Array<string | number>,
    /**
     * 选择值
     */
    value?: Array<string | number>,
    /**
     * 全部禁用
     */
    disabled?: boolean,
    /**
     * 是否开启多选
     */
    multiple?: boolean,
    /**
     * 元素间距
     * @default 10
     */
    gap?: Gap,
    /**
     * 元素列数
     * @default 3
     */
    column?: number,
    /**
     * 是否展示选中标记
     * @default true
     */
    showCheckMark?: boolean,
    /**
     * 选中标记
     * @default <CheckMark />
     */
    checkMark?: React.ReactNode,
    /**
     * 值改变回调
     */
    onChange?: (value:Array<string | number>, extend:Array<T>) => void
}