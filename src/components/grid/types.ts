import { BaseTypeProps } from '../../utils'

export type GridDirection = 'horizontal' | 'vertical';

export interface GridProps extends BaseTypeProps {
    // 格子之间的间距
    gap?: number | string | [number | string, number | string];
    // 列数
    column?: number;
    // 行数
    row? : number;
}

export interface GridItemProps extends BaseTypeProps {
    // 横向跨度跨度
    column?: number;
    // 竖向跨度 （注意）
    row?: number;
}


