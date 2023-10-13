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
    const falseyArgs = [false, true, 'true', '', [], {}, undefined, null];

    for (const arg of falseyArgs) {
      it('returns the value', () => {
        const result = runIfFn(arg);
        expect(result).toBe(arg);
      });
    }
  });
});
