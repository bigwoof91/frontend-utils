// @vitest-environment happy-dom
import { windowRedirect } from '../window-redirect';

describe('windowRedirect', () => {
  /** https://runthatline.com/how-to-mock-window-with-vitest/ */
  const originalWindowLocation = window.location;
  vi.spyOn(window.location, 'reload');
  beforeEach(() => {
    window.location = originalWindowLocation;
  });

  it('redirects to the correct URL', () => {
    const expectedUrl = 'https://www.example.com/mypath';
    windowRedirect(expectedUrl);
    expect(window.location.href).toBe(expectedUrl);
  });

  describe('windowRedirect.curry', () => {
    it('properly curries and redirects to the correct URL', () => {
      const expectedUrl = 'https://www.example.com/mypath';
      const redirect = windowRedirect.curry(expectedUrl);
      redirect();
      expect(window.location.href).toBe(expectedUrl);
    });
  });
});
