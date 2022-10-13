import React from 'react';
import { BaseTypeProps } from '../../utils';

export type StepsDirection = 'horizontal' | 'vertical';

export interface StepsProps extends BaseTypeProps {
    /** 
     * 已完成步骤对应的图标
     */
    finishIcon?: React.ReactNode;
    /** 
     * 当前步骤和已完成步骤的颜色	 
     */
    activeColor?: string;
    /** 
     * 当前步骤对应的图标
     */
    activeIcon?: React.ReactNode;
    /** 
     * 非当前步骤对应的图标
     */
    inactiveIcon?: React.ReactNode;
    /** 
     * 未激活步骤的颜色	 
     */
    inactiveColor?: string;
    /** 
     * 当前步骤对应的索引值	 
     */
    active?: number;
    /** 
     * 步骤条方向 
     */
    direction?: StepsDirection;
    /** 
     * 点击步骤的标题或图标时触发	 
     */
    onClickStep?: (index: number) => void;
}

export interface StepsItemProps extends BaseTypeProps {
    parent?: StepsProps;
    index?: number;
    /** 
     * 步骤标题
     */
    title?:React.ReactNode,
    /** 
     * 步骤描述内容
     */
    description?:React.ReactNode;
    /** 
     * 自定义步骤内容
     */
    renderContent?:React.ReactNode;
    /** 
     * 已完成步骤对应的图标，优先级高于父级 
     */
    finishIcon?: React.ReactNode;
    /** 
     * 非当前步骤对应的图标，优先级高于父级 
     */
    inactiveIcon?: React.ReactNode;
    /** 
     * 当前步骤对应的底部图标，优先级高于父级  
     */
    activeIcon?: React.ReactNode;
    /** 
     * 未激活步骤的颜色	 
     */
    inactiveColor?: string;
    /** 
     * 当前步骤和已完成步骤的颜色	 
     */
    activeColor?: string;
}
