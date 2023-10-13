import type { AnyFunc } from './types';

function isFunction<T extends AnyFunc = AnyFunc>(value: any): value is T {
  return typeof value === 'function';
}

export { isFunction };
