/**
 * 延时操作
 * @param time 
 * @returns 
 */
export const sleep = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));