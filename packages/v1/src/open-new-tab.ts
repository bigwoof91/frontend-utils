/**
 * @todo add description/docs
 * @todo add exceptions and logger
 */
const openNewTab = (url: string) => {
  if (window?.open) {
    window.open(url, '_blank');
  }
};

openNewTab.curry = (url: string) => () => openNewTab(url);

export { openNewTab };
