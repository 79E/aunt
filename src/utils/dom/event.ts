import { TouchEvent } from 'react';

export function stopPropagation(event: TouchEvent | Event): void {
  event.stopPropagation();
}

export function preventDefault(event: TouchEvent | Event): void {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }
}
