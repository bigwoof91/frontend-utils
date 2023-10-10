import { runIfFn } from '../run-if-fn';

describe('runIfFn', () => {
  describe('when a function is passed', () => {
    it('calls the function', () => {
      const mockFn = vi.fn();
      runIfFn(mockFn);

      expect(mockFn).toHaveBeenCalled();
    });
  });

  describe('when anything besides a function is passed', () => {
    it('returns the value', () => {
      const res1 = runIfFn(false);
      const res2 = runIfFn(true);
      const res3 = runIfFn('true');
      const res4 = runIfFn('');
      const res5 = runIfFn([]);
      const res6 = runIfFn({});
      const res7 = runIfFn(undefined);
      const res8 = runIfFn(null);

      expect(res1).toBe(false);
      expect(res2).toBe(true);
      expect(res3).toBe('true');
      expect(res4).toBe('');
      expect(res5).toEqual([]);
      expect(res6).toEqual({});
      expect(res7).toBeUndefined();
      expect(res8).toBeNull();
    });
  });
});
