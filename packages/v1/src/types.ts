type AnyFunc<T extends any[] = [], R = any> = (...args: T) => R;

type Booleanish = boolean | 'true' | 'false';

export type { AnyFunc, Booleanish };
