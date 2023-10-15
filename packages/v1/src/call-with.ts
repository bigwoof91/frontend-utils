import { spread } from './spread';
import type { AnyFunc } from './types';

/**
 * @summary A helper that calls a function that calls the provided callback and arguments.
 *
 * @description A utility like this is extremely helpful in cases when you
 * want to call a function with instantiating a new constant. This helps
 * eliminate verbosity in your code.
 *
 * @example
 * ```tsx
 * const Component = (props) => {
 *  const ref = useRef(null);
 *
 * return (
 *  <div
 *    ref={ref}
 *    onAnimationComplete={callWith(props.handleOnAnimationComplete, ref)}
 *  />
 * );
 * }
 * ```
 */
const callWith = <T extends AnyFunc>(fn: T, ...args: any[]) => {
  return (..._: any[]): ReturnType<T> => fn?.(...spread(args, []));
};

export { callWith };
