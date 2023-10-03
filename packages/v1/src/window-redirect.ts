const windowRedirect = (url: string) => {
  if (window?.location) {
    window.location.assign(url);
  }
};
windowRedirect.curry = (url: string) => () => windowRedirect(url);

const openNewTab = (url: string) => window.open(url, '_blank');
openNewTab.curry = (url: string) => () => openNewTab(url);

export { openNewTab, windowRedirect };
