// @vitest-environment happy-dom
import { openNewTab } from '../open-new-tab';

describe('openNewTab', () => {
  const spyWindowOpen = vi.spyOn(window, 'open');

  it('calls window.open with the given url', () => {
    const expectedUrl = 'https://www.example.com/mypath';
    openNewTab(expectedUrl);
    expect(spyWindowOpen).toHaveBeenCalledWith(expectedUrl, '_blank');
  });

  describe('openNewTab.curry', () => {
    it('properly curries and calls window.open with the given url', () => {
      const expectedUrl = 'https://www.example.com/mypath';
      const open = openNewTab.curry(expectedUrl);
      open();
      expect(spyWindowOpen).toHaveBeenCalledWith(expectedUrl, '_blank');
    });
  });
});
