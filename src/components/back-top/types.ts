import React from "react";
import { BaseTypeProps } from '../../utils';

export interface BackTopProps extends BaseTypeProps {
    /**
     * 绑定需要监听其滚动事件的元素
     */
    target?: HTMLElement | Window | Document;
    /**
     * 图标元素
     * @default <AuntIconArrowUp />
     */
    icon?: React.ReactNode;
    /**
     * 形状可选 'round'
     * @default 'square'
     */
    shape?: 'square' | 'round';
    /**
     * 滚动高度达到此参数值才出现 BackTop
     * @default 400
     */
    visibilityHeight?: number;
    /**
     * 回到顶部所需时间（ms）
     * @default 400
     */
    duration?: number;
    /**
     * BackTop 按钮偏移量
     * @default [20,40]
     */
    offset?: number | string | [number | string, number | string];
    /**
     * 设置动画样式 可参考 transition 组件
     */
    transitionType?: string,
    /**
     * 点击按钮的回调函数
     */
    onClick?:(event: React.MouseEvent) => void;
}