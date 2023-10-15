import { logger } from '@futil/internal';

import { callWith } from './call-with';

const MESSAGE =
  '"window" is undefined and is required in order to open a new tab.';

/**
 * @todo add description/docs
 * @todo add exceptions and logger
 */
const openNewTab = (url: string) => {
  if (!window?.open) {
    logger.warn(MESSAGE, 'openNewTab');
  }

  window.open(url, '_blank');
};

openNewTab.curry = (url: string) => callWith(openNewTab, url);

export { openNewTab };
