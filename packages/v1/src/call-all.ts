import type { AnyFunc, FuncArgs } from './types';

type CallAllOptions = {
  /** Setting this to `true` will ignore passing any arguments to the callback. **/
  ignoreArgs?: boolean;
};

/**
 * @summary A helper that calls all callback functions passed to it.
 *
 * @description A utility like this is extremely helpful
 * in cases when you want to trigger multiple actions as a result of an event like,
 * `onAnimationComplete`, `onChange`, `onBlur`, etc.
 *
 * @example
 * ```tsx
 * const CustomButtom = (props) => {
 *  const onChange = (e: React.ChangeEvent<HTMLButtonElement>) => {
 *    // ...
 *  }
 * return <button onChange={callAll([onChange, props.onChange])} />
 * }
 * ```
 */
const callAll = <T extends AnyFunc>(
  fns: (T | undefined)[],
  opts?: CallAllOptions
) => {
  return (...args: FuncArgs<T>) => {
    const passedArgs = opts?.ignoreArgs ? [] : args;
    fns.forEach((fn) => {
      fn?.(...passedArgs);
    });
  };
};
export { callAll };
