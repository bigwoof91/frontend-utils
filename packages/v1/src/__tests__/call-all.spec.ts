import { callAll } from '../call-all';

describe('callAll', () => {
  const mockFn1 = vi.fn();
  const mockFn2 = vi.fn();

  afterEach(() => {
    mockFn1.mockClear();
    mockFn2.mockClear();
  });

  it('calls all functions and passes arguments', () => {
    const caller = callAll([mockFn1, mockFn2]);
    caller(1);

    expect(mockFn1).toHaveBeenCalledWith(1);
    expect(mockFn2).toHaveBeenCalledWith(1);
  });

  describe('Given falsey values', () => {
    it('gracefully fails', () => {
      const args = [5, 6, {}, () => 2];
      const caller = callAll([undefined, mockFn1]);
      const caller2 = callAll([undefined, mockFn1]);
      const caller3 = callAll([undefined, undefined, mockFn2]);

      caller2();
      caller();
      caller3(args);

      expect(mockFn1).toHaveBeenCalledTimes(2);
      expect(mockFn2).toHaveBeenCalledTimes(1);
      expect(mockFn2).toHaveBeenCalledWith(args);
    });
  });

  describe('Options', () => {
    describe('ignoreArgs', () => {
      it('calls all functions without arguments', () => {
        const caller = callAll([mockFn1, mockFn2], { ignoreArgs: true });
        caller(1);

        expect(mockFn1).toHaveBeenCalledWith();
        expect(mockFn2).toHaveBeenCalledWith();
      });
    });
  });
});
