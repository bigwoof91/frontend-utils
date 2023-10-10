/** https://developer.mozilla.org/en-US/docs/Glossary/Primitive */
type Primitive = null | undefined | string | number | boolean | symbol | bigint;

/**
 * A workaround for [Microsoft/TypeScript#29729](https://github.com/Microsoft/TypeScript/issues/29729).
 * Hoping we can remove this sometime... soon!
 */
type Union<LiteralType, BaseType extends Primitive> =
  | LiteralType
  | (BaseType & Record<never, never>);

type AnyFunc<T = any, R = any> = (...args: T[]) => R;

export type { AnyFunc, Primitive, Union };
