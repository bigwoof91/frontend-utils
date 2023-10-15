import { spread } from '../spread';

describe('spread', () => {
  it('Returns the given value', () => {
    const obj = { 2: 2, '5': [5, 6, 'foo', 'bar'] };
    const obj2 = { foo: 'bar' };
    const value1 = spread(obj, {});
    const value2 = spread(obj2, {});

    expect(value1).toEqual(obj);
    expect(value2).toBe(obj2);
  });

  describe('Given a nil value', () => {
    it('Returns the default value', () => {
      const value1 = spread(null);
      const value2 = spread(undefined, []);

      expect(value1).toEqual({});
      expect(value2).toEqual([]);
    });
  });
});
