import { BaseTypeProps } from '../../utils';
export type LoadingType = 'oval' | 'rings' | 'ball' | 'bars' | 'circles' | 'puff' | 'spinning' | 'three' | 'gap';

// 定义接受到的参数 类型
export interface LoadingProps extends BaseTypeProps{
    className?: string;
    /**
     * @name 颜色
     * @default ''
     */
    color?: string;
    /**
     * @name 选择加载类型
     * @default 'gap'
     */
    type: LoadingType;
    /**
     * @name 图标大小
     * @default ''
     */
    size?: string | number;
    /**
     * @name 字体大小
     * @default '14px'
     */
    textSize?: string | number;
    /**
     * @name 字体颜色
     * @default ''
     */
    textColor?: string;
    /**
     * @name 是否垂直排列图标和文字内容
     * @default false
     */
    vertical?: boolean;
}