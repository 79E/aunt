import React from "react"
import { CurrentTime } from '../../hooks/use-count-down';
import {BaseTypeProps} from '../../utils'

export type CountDownInstance = {
    /** 
     * 开始倒计时	 
     */
    start: () => void;
    /** 
     * 暂停倒计时	 
     */
    pause: () => void;
    /** 
     * 重设倒计时，若 autoStart 为 true，重设后会自动开始倒计时	 
     */
    reset: () => void;
};

// 定义接受到的参数 类型
export interface CountDownProps extends Omit<BaseTypeProps, 'children'> {
    // 倒计时时长，单位毫秒
    time: number;
    // 时间格式
    format?: string;
    // 是否开启毫秒级渲染
    millisecond?: boolean;
    // 是否自动开始倒计时
    autoStart?: boolean;
    /** 
     * 倒计时变化时触发	 
     */
    onChange?: (currentTime: CurrentTime) => void;
    /** 
     * 倒计时结束时触发	
     */
    onFinish?: () => void;
    children?: (currentTime: CurrentTime) => React.ReactNode;
}