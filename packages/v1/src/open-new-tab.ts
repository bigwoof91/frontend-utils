import { logger } from '@futil/internal';

/**
 * @todo add description/docs
 * @todo add exceptions and logger
 */
const openNewTab = (url: string) => {
  if (!window?.open) {
    logger.warn(
      '"window" is undefined and is required in order to open a new tab.',
      'openNewTab'
    );
  }

  window.open(url, '_blank');
};

openNewTab.curry = (url: string) => () => openNewTab(url);

export { openNewTab };
