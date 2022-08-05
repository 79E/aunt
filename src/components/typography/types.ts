import React from 'react';
import { BaseTypeProps } from '../../utils';

export type TypographyType = 'danger' | 'secondary' | 'light' | 'primary' | 'success' | 'warning';
export type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type TypographyTitleLevel = 1 | 2 | 3 | 4 | 5;

export interface TypographyProps extends BaseTypeProps {
  /**
   * @name 文本类型
   * @default ''
   */
  type?: TypographyType;
  /**
   * @name 文本大小
   * @default 'md'
   */
  size?: TypographySize;
  /**
   * @name 标题级别
   * @default 4
   */
  level?: TypographyTitleLevel;
  /**
   * @name 禁用文本
   * @default false
   */
  disabled?: boolean;
  /**
   * @name 添加删除线样式
   * @default false
   */
  delete?: boolean;
  /**
   * @name 添加下划线样式
   * @default false
   */
  underline?: boolean;
  /**
   * @name 文本居中
   * @default false
   */
  center?: boolean;
  /**
   * @name 文本加粗
   * @default false
   */
  strong?: boolean;
  /**
   * @name 文本省略
   * @default false
   */
  ellipsis?: boolean | number;
  /**
   * @name 主题配置
   * @param event React.MouseEvent
   * @return void
   */
  onClick?: (event: React.MouseEvent) => void;
}

export type TypographyTextProps = Omit<TypographyProps, 'level'>;
export type TypographyTitleProps = TypographyProps;
export type TypographyLinkProps = Omit<TypographyProps, 'level'>;
