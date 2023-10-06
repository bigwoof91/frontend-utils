/**
 * @todo add description/docs
 * @todo add exceptions and logger
 */
const windowRedirect = (url: string) => {
  if (window?.location) {
    window.location.assign(url);
  }
};
windowRedirect.curry = (url: string) => () => windowRedirect(url);

export { windowRedirect };
