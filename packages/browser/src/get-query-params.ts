const getQueryParam = <T = string>(name: string, fallback?: T) => {
  const url = window.location.href;
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);

  if (!results) return fallback;

  const value = results[2];
  if (!value) return;

  return decodeURIComponent(value.replace(/\+/g, ' '));
};

export { getQueryParam };
