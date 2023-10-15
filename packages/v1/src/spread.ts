import type { AnyArr, AnyObj, Nil } from './types';

/**
 * @summary Safely spread a collection and easily set its default value,
 * without losing its type inference.
 *
 * @description A helper that accepts an optional collection (e.g. array or object)
 * and if the collection is nil (`undefined`, `null`),
 * it will return `{}` or a `defaultValue` which is provided via the
 * second argument.
 */
const spread = <T extends AnyObj | AnyArr = AnyObj>(
  collection?: T | Nil,
  defaultValue?: AnyObj | AnyArr
): T => {
  if (!collection) return (defaultValue || {}) as T;
  return collection;
};

export { spread };
