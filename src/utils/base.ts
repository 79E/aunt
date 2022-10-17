export function isDef<T>(val: T): val is NonNullable<T> {
    return val !== undefined && val !== null;
}
export function isObject(val: unknown): val is Record<any, any> {
    return val !== null && typeof val === 'object';
}

export const inBrowser = typeof window !== 'undefined';

export function isWindow(obj: any): obj is Window {
    return obj !== null && obj !== undefined && obj === obj.window;
}