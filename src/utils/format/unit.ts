/**
 * 单位操作
 */
import { isDef } from '../base';
import { isNumeric } from '../validate/number';

export function addUnit(value?: string | number): string | undefined {
    if (!isDef(value)) {
      return undefined;
    }
    
    value = String(value);
    return isNumeric(value) ? `${value}px` : value;
}


export function kebabCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

export function getSizeStyle(originSize?: string | number) {
  if (isDef(originSize)) {
    const size = addUnit(originSize);
    return {
      width: size,
      height: size,
    };
  }
  return {};
}

export function getZIndexStyle(zIndex?: string | number) {
  const style: React.CSSProperties = {};
  if (zIndex !== undefined) {
    style.zIndex = +zIndex;
  }
  return style;
}

