import React from "react";
import { CurrentTime } from '../../hooks/use-count-down';
import {BaseTypeProps} from '../../utils';

export type CountDownInstance = {
    /**
     * @name 开始倒计时
     * @default () => void
     * @return void
     */
    start: () => void;
    /**
     * @name 暂停倒计时
     * @default () => void
     * @return void
     */
    pause: () => void;
    /**
     * @name 重设倒计时
     * @decs 重设倒计时，若 autoStart 为 true，重设后会自动开始倒计时	 
     * @default () => void
     * @return void
     */
    reset: () => void;
};

// 定义接受到的参数 类型
export interface CountDownProps extends Omit<BaseTypeProps, 'children'> {
    /**
     * @name 倒计时时长，单位毫秒
     * @default 0
     */
    time: number;
    /**
     * @name 时间格式
     * @default 'HH:mm:ss'
     */
    format?: string;
    /**
     * @name 是否开启毫秒级渲染
     * @default false
     */
    millisecond?: boolean;
    /**
     * @name 是否自动开始倒计时
     * @default true
     */
    autoStart?: boolean;
    /**
     * @name 倒计时变化时触发
     * @default (currentTime: CurrentTime) => void
     * @return void
     */
    onChange?: (currentTime: CurrentTime) => void;
    /**
     * @name 倒计时结束时触发
     * @default () => void
     * @return void
     */
    onFinish?: () => void;
    children?: (currentTime: CurrentTime) => React.ReactNode;
}