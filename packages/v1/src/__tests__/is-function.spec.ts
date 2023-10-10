import { isFunction } from '../is-function';

describe('isFunction', () => {
  const mockFn = vi.fn();

  describe('when a function is passed', () => {
    it('returns true', () => {
      const res = isFunction(mockFn);
      expect(res).toBe(true);
    });
  });

  describe('when anything besides a function is passed', () => {
    it('returns false', () => {
      const res1 = isFunction(false);
      const res2 = isFunction(true);
      const res3 = isFunction('true');
      const res4 = isFunction('');
      const res5 = isFunction([]);
      const res6 = isFunction({});
      const res7 = isFunction(undefined);
      const res8 = isFunction(null);

      expect(res1).toBe(false);
      expect(res2).toBe(false);
      expect(res3).toBe(false);
      expect(res4).toBe(false);
      expect(res5).toBe(false);
      expect(res6).toBe(false);
      expect(res7).toBe(false);
      expect(res8).toBe(false);
    });
  });
});
