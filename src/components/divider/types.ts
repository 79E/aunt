import { BaseTypeProps } from '../../utils';

// 定义接受到的参数 类型
export interface DividerProps extends BaseTypeProps {
    /**
     * @name 内容位置
     * @default 'center'
     */
    contentPosition?: 'left' | 'right' | 'center';
    /**
     * @name 分割线方向
     * @default 'horizontal'
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * @name 虚线样式
     * @default false
     */
    dashed?: boolean;
    /**
     * @name 细线样式
     * @default false
     */
    hairline?: boolean;
}