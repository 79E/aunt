import { BaseTypeProps } from '../../utils';

export type GridDirection = 'horizontal' | 'vertical';

export interface GridProps extends BaseTypeProps {
    /**
     * @name 格子之间的间距
     * @default 0
     */
    gap?: number | string | [number | string, number | string];
    /**
     * @name 格子列数
     * @default 4
     */
    column?: number;
    /**
     * @name 格子行数
     * @default ''
     */
    row? : number;
    
}

export interface GridItemProps extends BaseTypeProps {
    /**
     * @name 横向跨度
     * @default ''
     */
    column?: number;
    /**
     * @name 竖向跨度
     * @default ''
     */
    row?: number;
}


