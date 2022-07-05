import { isDef } from './base'
import { isNumeric } from './number';

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


export function joinTrim(arr: Array<string | number>): string{
  return arr.join(' ').trim();
}