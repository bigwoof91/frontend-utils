const getValue = <T = string>(name: string, fallback?: T) => {
  if (!window || !window?.location) return fallback;

  const url = window.location.href;
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);

  if (!results) return fallback;

  const value = results[2];
  if (!value) return fallback;

  return decodeURIComponent(value.replace(/\+/g, ' '));
};

const getQueryParams = <T = string>(names: string[], fallback?: T) => {
  return names.map((name) => getValue(name, fallback));
};

export { getQueryParams };
