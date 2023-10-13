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
    const falseyArgs = [false, true, 'true', '', [], {}, undefined, null];

    for (const arg of falseyArgs) {
      it('returns false', () => {
        const result = isFunction(arg);
        expect(result).toBe(false);
      });
    }
  });
});
