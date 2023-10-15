import { logger } from '@futil/internal';

import { callWith } from './call-with';

const MESSAGE =
  '"window" is undefined and is required in order to assign a new location.';

/**
 * @todo add description/docs
 * @todo add exceptions and logger
 */
const windowRedirect = (url: string) => {
  if (!window?.location) {
    logger.warn(MESSAGE, 'windowRedirect');
  }

  window.location.assign(url);
};

windowRedirect.curry = (url: string) => callWith(windowRedirect, url);

export { windowRedirect };
