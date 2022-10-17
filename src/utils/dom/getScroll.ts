import { isWindow, inBrowser } from '../base';

export function getScroll(
    target: HTMLElement | Window | Document | null,
    top: boolean,
  ): number {
    if (!inBrowser) return 0;
    const method = top ? 'scrollTop' : 'scrollLeft';
    const offset = top ? 'pageYOffset' : 'pageXOffset';
    let result = 0;

    if (isWindow(target)) {
      result = target[offset];
    } else if (target instanceof Document) {
      result = target.documentElement[method];
    } else if (target instanceof HTMLElement) {
      result = target[method];
    } else if (target) {
      result = target[method];
    }
  
    if (target && !isWindow(target) && typeof result !== 'number') {
      result = (target.ownerDocument ?? target).documentElement?.[method];
    }
    
    return result;
  }