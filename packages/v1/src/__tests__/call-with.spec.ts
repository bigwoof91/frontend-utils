import { callWith } from '../call-with';

describe('callWith', () => {
  const mockFn1 = vi.fn();
  const mockFn2 = vi.fn();
  const mockFn3 = vi.fn();

  afterEach(() => {
    mockFn1.mockClear();
    mockFn2.mockClear();
    mockFn3.mockClear();
  });

  it('Calls the function with arguments', () => {
    const messyArgs = [null, {}, 3, [], [null, undefined, 5, '6']];
    const caller = callWith(mockFn1, 2);
    const caller2 = callWith(mockFn2, ...messyArgs);
    const caller3 = callWith(mockFn3, []);

    caller();
    caller2();
    caller3();

    expect(mockFn1).toHaveBeenCalledWith(2);
    expect(mockFn2).toHaveBeenCalledWith(...messyArgs);
    expect(mockFn3).toHaveBeenCalledWith([]);
  });

  describe('Given no arguments', () => {
    it('calls the function without any arguments', () => {
      const caller = callWith(mockFn1);
      caller();

      expect(mockFn1).toHaveBeenCalledWith();
    });
  });
});
