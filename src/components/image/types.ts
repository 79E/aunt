import React from "react";
import { BaseTypeProps } from '../../utils';
import { LazyLoadProps } from '../lazy-load/types';


export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export interface ImageProps extends BaseTypeProps {
  /**
   * @name 图片链接
   * @default ''
   */
  src?: string;
  /**
   * @name 替代文本
   * @default 'img'
   */
  alt?: string;
  /**
   * @name 图片填充模式
   * @default 'fill'
   */
  fit?: ImageFit;
  /**
   * @name 是否显示为圆形
   * @default false
   */
  round?: boolean;
  /**
   * @name 是否为块级元素
   * @default true
   */
  block?: boolean;
  /**
   * @name 宽度
   * @default auto
   */
  width?: number | string;
  /**
   * @name 高度
   * @default auto
   */
  height?: number | string;
  /**
   * @name 圆角大小
   * @default ''
   */
  radius?: number | string;
  /**
   * @name 加载图标和失败图标的大小
   * @default ''
   */
  iconSize?: number | string;
  /**
   * @name 是否展示图片加载失败提示
   * @default true
   */
  showError?: boolean;
  /**
   * @name 是否展示图片加载中提示
   * @default true
   */
  showLoading?: boolean;
  /**
   * @name 失败时提示的图标名称或图片链接
   * @default <AuntIconAlertCircle />
   */
  errorIcon?: React.ReactNode;
  /**
   * @name 加载时提示的图标名称或图片链接
   * @default <Loading type="oval" />
   */
  loadingIcon?: React.ReactNode;
  /**
   * @name 图片加载完毕时触发
   * @param e React.MouseEvent<HTMLImageElement>
   * @return void
   */
  onLoad?: (e: React.MouseEvent<HTMLImageElement>) => void;
  /**
   * @name 图片加载完毕时触发
   * @param e React.MouseEvent<HTMLImageElement>
   * @return void
   */
  onError?: (e: React.MouseEvent<HTMLImageElement>) => void;
   /**
   * @name 点击图片时触发
   * @param e React.MouseEvent<HTMLImageElement>
   * @return void
   */
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}


export type LazyImageType = boolean | Pick<LazyLoadProps, 'placeholder'>;

export interface LazyImageProps extends ImageProps {
  /**
   * @name 是否开启图片懒加载
   * @default false
   */
  lazyload?: LazyImageType;
}