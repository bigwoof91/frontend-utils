import { logger } from '@futil/internal';

/**
 * @todo add description/docs
 * @todo add exceptions and logger
 */
const windowRedirect = (url: string) => {
  if (!window?.location) {
    logger.warn({
      src: 'windowRedirect',
      message:
        '"window" is undefined and is required in order to assign a new location.',
    });
  }

  window.location.assign(url);
};
windowRedirect.curry = (url: string) => () => windowRedirect(url);

export { windowRedirect };
