/* eslint-disable no-console */

type ConsoleMethods = 'warn' | 'error' | 'log' | 'info';

type LoggerMethodOptions = {
  /** the name of the module/helper/function the message is logged from.  */
  src?: string;
  /** the name of the package the message is logged from.  */
  pkg?: string;
};

type LoggerMethod = (
  message: string,
  /** Options that can be passed to logger. If a `string` is passed, it will be used as the `src` option. */
  opts: LoggerMethodOptions | string
) => void;

type Logger = {
  (opts: LoggerMethodOptions): void;
  /**
   * @param src name of the module/helper the message is logged from
   * @param any the log message
   * @returns {void}
   */
  error: LoggerMethod;
  /** @callback {LoggerMethod} */
  warn: LoggerMethod;
  info: LoggerMethod;
  log: LoggerMethod;
};

const makeMessage = (
  message: string,
  { src, pkg }: Partial<LoggerMethodOptions> = {}
) => `@futil/${pkg || 'core'}${src ? `[${src}]` : ''}: ${message}`;

const loggerMethod =
  (method: ConsoleMethods = 'log'): LoggerMethod =>
  (message, optsOrSrc = {}) => {
    if (typeof optsOrSrc === 'string') {
      return console[method](makeMessage(message, { src: optsOrSrc }));
    }
    console[method](makeMessage(message, optsOrSrc));
  };

/**
 * A light wrapper around `console` for logging within futil packages...
 * but it only exposes a handful of `console` methods. More can be added as needed.
 */
// @ts-ignore
const logger: Logger = loggerMethod();
logger.info = loggerMethod('info');
logger.warn = loggerMethod('warn');
logger.error = loggerMethod('error');

export type { Logger };
export { logger };
