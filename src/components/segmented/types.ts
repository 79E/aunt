import { BaseTypeProps } from "../../utils";

type Size = 'large' | 'middle' | 'small'

// 定义接受到的参数 类型
export interface SegmentedProps extends BaseTypeProps {
    value: string;
    disabled?: boolean;
    index?:number
}

export interface SegmentedGroupProps extends BaseTypeProps {
    size?: Size;
    disabled?: boolean;
    value?: string;
    defaultValue?: string;
    color?: string;
    activeColor?: string;
    onChange?: (value: string) => void;
}



