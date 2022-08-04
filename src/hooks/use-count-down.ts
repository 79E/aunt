import { useEffect, useMemo, useState, useRef } from 'react';
import { inBrowser } from '../utils';

const root = (inBrowser ? window : global) as unknown as Window;

let prev = Date.now();

// 清除倒计时ID
export function cancelRaf(id: number) {
  const cancelAnimationFrame = root.cancelAnimationFrame || root.clearTimeout;
  cancelAnimationFrame.call(root, id);
}

// 倒计时
function rafPolyfill(fn: FrameRequestCallback) {
  const curr = Date.now();
  const ms = Math.max(0, 16 - (curr - prev));
  const id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}

// 调用倒计时 返回倒计时ID
export function raf(fn: FrameRequestCallback): number {
  const requestAnimationFrame = root.requestAnimationFrame || rafPolyfill;
  return requestAnimationFrame.call(root, fn);
}

export type CurrentTime = {
  /** 剩余总时间,单位毫秒 */
  total: number;
  /** 剩余天数	 */
  days: number;
  /** 剩余小时	 */
  hours: number;
  /** 剩余分钟	 */
  minutes: number;
  /** 剩余秒数	 */
  seconds: number;
  /** 剩余毫秒	 */
  milliseconds: number;
};

export type UseCountDownOptions = {
  /** 倒计时时长，单位毫秒 */
  time: number;
  /** 是否开启毫秒级渲染 */
  millisecond?: boolean;
  /** 是否自动开始倒计时 */
  autostart?: boolean;
  /** 倒计时改变时触发的回调函数 */
  onChange?: (current: CurrentTime) => void;
  /** 倒计时结束时触发的回调函数 */
  onFinish?: () => void;
};

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

// 整理时间
function parseTime(time: number): CurrentTime {
  const days = Math.floor(time / DAY);
  const hours = Math.floor((time % DAY) / HOUR);
  const minutes = Math.floor((time % HOUR) / MINUTE);
  const seconds = Math.floor((time % MINUTE) / SECOND);
  const milliseconds = Math.floor(time % SECOND);

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
}

// 两个时间是否相等(秒)/1000
function isSameSecond(time1: number, time2: number): boolean {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}

export default function useCountDown(options: UseCountDownOptions) {
  // 倒计时ID
  const rafId = useRef(0);
  // 结束时间
  const endTime = useRef(0);
  // 控制是否开始执行倒计时
  const counting = useRef(false);

  const [remain, updateRemain] = useState(() => options.time);
  const remainRef = useRef(0);
  const currentRef = useRef<any>({});
  const current = useMemo(() => parseTime(remain), [remain]);

  currentRef.current = current;

  remainRef.current = remain;

  // 暂停倒计时
  const pause = () => {
    counting.current = false;
    cancelRaf(rafId.current);
  };

  // 获取当前剩余的秒数
  const getCurrentRemain = () => Math.max(endTime.current - Date.now(), 0);

  // 设置相关变量
  const setRemain = (value: number) => {
    // 更新剩余时长
    remainRef.current = value;
    updateRemain(value);
    // 调用更改回调
    options.onChange?.(currentRef.current);
    // 执行到最后
    if (value === 0) {
      // 调用暂停
      pause();
      // 调用回调
      options.onFinish?.();
    }
  };

  // 毫秒级
  const microTick = () => {
    rafId.current = raf(() => {
      if (counting.current) {
        setRemain(getCurrentRemain());
        if (remainRef.current > 0) {
          microTick();
        }
      }
    });
  };

  // 秒
  const macroTick = () => {
    rafId.current = raf(() => {
      if (counting.current) {
        const remainRemain = getCurrentRemain();
        // 判断是两个时间是否相等
        if (!isSameSecond(remainRemain, remainRef.current) || remainRemain === 0) {
          // 判断了秒级 是否相等如果相等则不进入 继续调用如果不想等则 执行
          setRemain(remainRemain);
        }
        if (remainRef.current > 0) {
          macroTick();
        }
      }
    });
  };

  const tick = () => {
    // 如果inBrowser不存在 不应该开始执行倒计时
    if (!inBrowser) return;
    // 判断是秒还是毫秒 然后分别运行 对应的方法
    if(options.millisecond){
      microTick();
    }else{
      macroTick();
    }
  };

  // 开始
  const start = () => {
    // counting 控制是否开始了
    if (!counting.current) {
      // 结束时间
      endTime.current = Date.now() + remainRef.current;
      // 修改状态
      counting.current = true;
      tick();
    }
  };

  // 重制
  const reset = (totalTime: number = options.time) => {
    // 先暂停
    pause();
    // 设置新的时间
    remainRef.current = totalTime;
    // 更新
    updateRemain(totalTime);
  };

  useEffect(() => {
    // 是否自定开始
    if (options.autostart) {
      start();
    }
  }, []);

  return {
    start,
    pause,
    reset,
    current,
  } as const;
}
