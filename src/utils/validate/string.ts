
export function isString(str: any): boolean {
    return (typeof str == 'string') && str.constructor == String;
}