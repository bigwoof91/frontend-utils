import { logger } from '@futil/internal';

/**
 * @todo add description/docs
 * @todo add exceptions and logger
 */
const getValue = <T = string>(name: string, fallback?: T) => {
  const url = window.location.href;
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);

  if (!results) return fallback;

  const value = results[2];
  if (!value) return fallback;

  return decodeURIComponent(value.replace(/\+/g, ' '));
};

const getQueryParams = <T = string>(paramNames: string[], fallback?: T) => {
  if (!window?.location) {
    logger.warn(
      '"window" is undefined and is required in order to get params.',
      'getQueryParams'
    );
    return fallback;
  }
  return paramNames.map((param) => getValue(param, fallback));
};

export { getQueryParams };
