import { useRef, useCallback } from 'react';

interface IUseTimeoutReturn {
  /** 启动计时器，入参为延时到期的回调函数 */
  startTimer: (callback: () => void, delay?: number) => void;
  /** 清楚计时器 */
  clearTimer: {};
}

/**
 * 延迟调用
 * @returns 返回开始定时器和清楚定时器的方法
 */
const useTimeout = (): IUseTimeoutReturn => {
  const timerRef = useRef<any>(null);

  const clearTimer = useCallback(() => {
    timerRef.current && clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  const startTimer = useCallback(
    (callback: () => void, delay: number = 0) => {
      clearTimer();
      timerRef.current = setTimeout(() => {
        callback();
        clearTimer();
      }, delay);
    },
    [clearTimer]
  );

  return {
    startTimer,
    clearTimer,
  };
};

export default useTimeout;
