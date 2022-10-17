import { getScroll, isWindow } from '../utils';

interface ScrollToOptions {
  /** Scroll container, default as window */
  container?: HTMLElement | Window | Document;
  /** Scroll end callback */
  callback?: () => any;
  /** Animation duration, default as 450 */
  duration?: number;
}

export function easeInOutCubic(t: number, b: number, c: number, d: number) {
  const cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return (cc / 2) * t * t * t + b;
  }
  return (cc / 2) * ((t -= 2) * t * t + 2) + b;
}

export default function useScrollTo(y: number, options: ScrollToOptions = {}) {
    const { container = window, callback, duration = 450 } = options;
    const scrollTop = getScroll(container, true);
    const startTime = Date.now();
  
    const frameFunc = () => {
      const timestamp = Date.now();
      const time = timestamp - startTime;
      const nextScrollTop = easeInOutCubic(time > duration ? duration : time, scrollTop, y, duration);
      if (isWindow(container)) {
        (container as Window).scrollTo(window.pageXOffset, nextScrollTop);
      } else if (container instanceof Document || container.constructor.name === 'HTMLDocument') {
        (container as Document).documentElement.scrollTop = nextScrollTop;
      } else {
        (container as HTMLElement).scrollTop = nextScrollTop;
      }
      if (time < duration) {
        requestAnimationFrame(frameFunc);
      } else if (typeof callback === 'function') {
        callback();
      }
    };
    requestAnimationFrame(frameFunc);
  }