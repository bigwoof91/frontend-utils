import { getQueryParam } from '../src/get-query-params';

describe('getQueryParam', () => {
  beforeEach(() => {
    const newUrl = '/list?limit=25&offset=2&filterQuery=';
    window.history.pushState({}, 'Test Title', newUrl);
  });

  it('returns the query param value if it exists', () => {
    const result = getQueryParam('limit');
    expect(result).toBe('25');
  });

  it('returns "undefined" if the query param is falsey', () => {
    expect(getQueryParam('lose')).toBeUndefined();
    expect(getQueryParam('filterQuery')).toBeUndefined();
  });
});
