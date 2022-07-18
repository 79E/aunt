import { BaseTypeProps } from '../../utils'

// 定义接受到的参数 类型
export interface DividerProps extends BaseTypeProps {
    contentPosition?: 'left' | 'right' | 'center';
    direction?: 'horizontal' | 'vertical';
    dashed?: boolean;
    hairline?: boolean;
}