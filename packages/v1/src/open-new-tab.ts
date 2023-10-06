const openNewTab = (url: string) => window.open(url, '_blank');
openNewTab.curry = (url: string) => () => openNewTab(url);

export { openNewTab };
