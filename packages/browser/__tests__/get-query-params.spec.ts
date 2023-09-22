import { getQueryParams } from '../src/get-query-params';

describe('getQueryParams', () => {
  beforeEach(() => {
    const newUrl = '/list?limit=25&offset=2&filterQuery=';
    window.history.pushState({}, 'Test Title', newUrl);
  });

  it('returns the query param value if it exists', () => {
    const result = getQueryParams(['limit']);
    expect(result).toEqual(['25']);
  });

  it('returns "undefined" if the query param is falsey', () => {
    expect(getQueryParams(['lose'])).toEqual([undefined]);
    expect(getQueryParams(['filterQuery'])).toEqual([undefined]);
  });
  it('returns fallback if the query param is falsey and fallback is provided', () => {
    expect(getQueryParams(['lose', ''])).toEqual([undefined, undefined]);
    expect(getQueryParams(['filterQuery'], false)).toEqual([false]);
  });
});
