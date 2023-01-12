import React from 'react';
import type { BaseTypeProps } from '../../utils';

export interface DialogAction extends BaseTypeProps {
    /**
     * 动作的唯一标记
     */
    key: string | number;
    /**
     * 动作的标题
     */
    text: string;
    /**
     * 文字是否加粗
     */
    bold?: boolean;
     /**
     * 是否为危险操作
     */
    danger?: boolean;
     /**
     * 是否为禁用状态
     */
    disabled?: boolean;
     /**
     * 点击时候触发
     */
    onClick?: (event: React.MouseEvent) => void | Promise<void>;
}
export type Direction = 'horizontal' | 'vertical';

export interface DialogProps extends BaseTypeProps {
    /**
     * 显示隐藏开关
     */
    visible?: boolean;
    /**
     * 自定义头部
     */
    header?: React.ReactNode;
    /**
     * 显示头部图片（优先级低于 header）
     */
    headerImage?: string;
    /**
     * 对话框标题
     */
    title?: string | React.ReactNode;
    /**
     * 对话框内容
     */
    content?: string | React.ReactNode;
    /**
     * 定义对话框内容的 ClassName
     */
    contentClass?: string;
    /**
     * 定义对话框内容的 Style 样式
     */
    contentStyle?: React.CSSProperties;
    /**
     * 操作按钮列表
     */
    actions?: DialogAction[];
    /**
     * 自定义操作按钮
     */
    renderAction?: React.ReactNode;
    /**
     * 操作按钮 排布方向可选 'vertical'
     * @default 'horizontal'
     */
    direction?: Direction;
    /**
     * 是否允许点击操作按钮后触发关闭
     */
    closeOnAction?: boolean;
    /**
     * 是否允许点击遮罩层 触发关闭操作
     */
    closeOnOverlay?: boolean;
    /**
     * 自定义遮罩层ClassName
     */
    overlayClass?: string;
    /**
     * 自定义遮罩层 style 样式
     */
    overlayStyle?: React.CSSProperties;
    /**
     * 点击操作按钮时触发（禁用状态也会触发）
     */
    onAction?: (action: DialogAction, index: number) => void;
    /**
     * 在需要关闭时触发
     */
    onClose?: () => void;
    /**
     * 完全关闭后的触发
     */
    afterClose?: () => void;
    /**
     * 完全展示后触发
     */
    afterShow?: () => void;
}

export interface DialogOptions extends Omit<DialogProps, 'visible'>{
    /** 弹出时的的父容器 */
    teleport?: HTMLElement | (() => HTMLElement);
}

export type DialogUpdate = {
    /** 动态更新方法 */
    config: React.Dispatch<React.SetStateAction<Omit<DialogProps, 'visible'>>>;
    /** 清除单例toast */
    clear: () => void;
};

export interface DialogAlertOptions extends Omit<DialogOptions, 'actions' | 'closeOnAction'>{
    /**
     * 按钮名称
     */
    confirmText?: string;
    /**
     * 按钮点击时候触发
     * @param event 
     * @returns void;
     */
    onConfirm?: (event: React.MouseEvent) => void;
}


export interface DialogConfirmOptions extends DialogAlertOptions{
    /**
     * 失败按钮名称
     */
    cancelText?: string;
    /**
     * 点击失败按钮时候触发
     * @param event 
     * @returns void;
     */
    onCancel?: (event: React.MouseEvent) => void;
}