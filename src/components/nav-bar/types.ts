import React from "react";
import { BaseTypeProps } from "../../utils";

export interface NavBarProps extends BaseTypeProps{
  /** 
   * 标题	 
   */
  title?: React.ReactNode;
  /** 
   * 是否固定在顶部	 
   */
  fixed?: boolean;
  /** 
   * 自定义左侧按钮
   */
  leftContent?: React.ReactNode;
  /** 
   * 自定义由侧按钮
   */
  rightContent?: React.ReactNode;
  /** 
   * 是否开启顶部安全区适配 
   */
  safeAreaInsetTop?: boolean;
  /** 
   * 设置沉浸式状态栏高度（安卓都懂的）
   */
  statusBarHeight?: number | string;
  /** 
   * 是否显示下边框	 
   */
  bottomLine?: boolean;
  /** 
   * 固定在顶部时，是否在标签位置生成一个等高的占位元素 
   */
  placeholder?: boolean;
  onClickLeft?: (e: React.MouseEvent) => void;
  onClickRight?: (e: React.MouseEvent) => void;
}