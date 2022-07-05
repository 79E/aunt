export type LoadingType = 'oval' | 'rings' | 'ball' | 'bars' | 'circles' | 'puff' | 'spinning' | 'three' | 'gap';

// 定义接受到的参数 类型
export interface LoadingProps {
    className?: string;
    // loading 颜色
    color?: string;
    // 选择图形
    type: LoadingType;
    // 大小
    size?: string | number;
    // 字体大小
    textSize?: string | number;
    // 字体颜色
    textColor?: string;
    vertical?: boolean;
}