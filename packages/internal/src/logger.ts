/* eslint-disable no-console */

type LoggerMethodOptions = {
  src: string;
  pkg?: string;
  message: string;
};

type LoggerMethod = (opts: LoggerMethodOptions) => void;

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
  table: LoggerMethod;
};

const makeMessage = (message: string, src: string, pkg?: string) =>
  `@futil/${pkg ? pkg : '*'}[${src}]: ${message}`;

const loggerMethod =
  (method: keyof Logger | 'log' = 'log') =>
  ({ src, pkg, message }: LoggerMethodOptions) =>
    console[method](makeMessage(message, src, pkg));

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
