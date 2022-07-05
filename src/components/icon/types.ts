// 定义接受到的参数 类型
export interface IconProps extends React.SVGProps<SVGSVGElement> {
    // 层级
    tabIndex?: number;
    // 背景颜色
    color?: string;
    // 大小
    size?: string | number;
    // 是否开启旋转动画
    spin?: boolean;
    // 图标旋转角度
    rotate?: number;
    // 自定义图标名
    name?: string;
    // 自定义样式
    style?: React.CSSProperties;
    // clss 名
    className?: string;
}