const windowRedirect = (url: string) => {
  if (window?.location) {
    window.location.assign(url);
  }
};
windowRedirect.curry = (url: string) => () => windowRedirect(url);

export { windowRedirect };
