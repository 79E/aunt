// 定义接受到的参数 类型
export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /**
     * @name 层级
     * @default ''
     */
    tabIndex?: number;
    /**
     * @name 背景颜色
     * @default ''
     */
    color?: string;
    /**
     * @name 图标大小
     * @default '24px'
     */
    size?: string | number;
    /**
     * @name 是否开启旋转动画
     * @default false
     */
    spin?: boolean;
    /**
     * @name 图标旋转角度
     * @default 0
     */
    rotate?: number;
    /**
     * @name 自定义图标名
     * @default ''
     */
    name?: string;
    style?: React.CSSProperties;
    className?: string;
}