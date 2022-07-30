import { BaseTypeProps } from '../../utils';

export type TagType = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export type TagSize = 'medium' | 'large' | 'small';
export type TagShape = 'round' | 'mark-left' | 'mark-right';

// 定义接受到的参数 类型
export interface TagProps extends BaseTypeProps {
    /**
     * @name 标签类型
     * @default 'default'
     * @param TagType 'default' | 'primary' | 'success' | 'warning' | 'danger'
     */
    type?: TagType;
    // 图标
    icon?: React.ReactElement;
    // 大小
    size?: TagSize;
    // 背景色 和边框色
    color?: string;
    // 是否为空心
    plain?: boolean;
    // 是否为圆角
    shape?: TagShape;
    // 文字颜色
    textColor?: string;
    // 是否展示关闭按钮
    closeable?: boolean;
    /**
     * 点击关闭按钮回调
     * @en Callback when clicking the close button
     */
     onClose?: (e: React.MouseEvent<Element, MouseEvent>) => void;
    /**
     * 点击标签回调
     * @en Callback when clicking the tag
     */
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};