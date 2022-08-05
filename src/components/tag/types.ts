import { BaseTypeProps } from '../../utils';

export type TagType = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export type TagSize = 'medium' | 'large' | 'small';
export type TagShape = 'round' | 'mark-left' | 'mark-right';

// 定义接受到的参数 类型
export interface TagProps extends BaseTypeProps {
    /**
     * @name 标签类型
     * @default 'default'
     */
    type?: TagType;
    /**
     * @name 图标
     * @default ''
     */
    icon?: React.ReactElement;
    /**
     * @name 大小
     * @default 'small'
     */
    size?: TagSize;
    /**
     * @name 背景色和边框色
     * @default ''
     */
    color?: string;
    /**
     * @name 是否为镂空
     * @default false
     */
    plain?: boolean;
    /**
     * @name 是否为圆角
     * @default false
     */
    shape?: TagShape;
    /**
     * @name 文字颜色
     * @default ''
     */
    textColor?: string;
    /**
     * @name 是否展示关闭按钮
     * @default false
     */
    closeable?: boolean;
    /**
     * @name 点击关闭按钮回调
     * @param e React.MouseEvent<Element, MouseEvent>
     * @return void
     */
     onClose?: (e: React.MouseEvent<Element, MouseEvent>) => void;
    /**
     * @name 点击标签回调
     * @param e React.MouseEvent<Element, MouseEvent>
     * @return void
     */
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};