export function isDef<T>(val: T): val is NonNullable<T> {
    return val !== undefined && val !== null;
}

export const inBrowser = typeof window !== 'undefined';