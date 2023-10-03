import { windowRedirect } from '../window-redirect';

describe('windowRedirect', () => {
  const originalWindowLocation = window.location;

  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      enumerable: true,
      value: new URL(window.location.href),
    });
  });

  afterEach(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      enumerable: true,
      value: originalWindowLocation,
    });
  });

  it('test that redirection URL is correct', () => {
    const expectedUrl = 'https://www.example.com/mypath';
    windowRedirect(expectedUrl);
    expect(window.location.href).toBe(expectedUrl);
  });
});
