import { createLogger, format, transports } from 'winston';

const { combine, printf, json, colorize } = format;

const getSrc = (src?: string) => (src ? `.${src}` : '');

/**
 * Internal logger for futil packages
 * @todo strongly type `meta`
 *
 * @example
 * ```ts
 *
 * log.error('Something is wrong', { src: 'windowRedirect' })
 * // output: '[@futil/v1.windowRedirect] error: Something is wrong'
 *
 * log.info('Information about something', { src: 'windowRedirect' })
 * // output: '[@futil/v1.windowRedirect] info: Information about something'
 *
 * log.info('Information about something', { pkg: 'v2', src: 'windowRedirect' })
 * // output: '[@futil/v2.windowRedirect] info: Information about something'
 * ```
 */
const log = createLogger({
  level: 'info',
  defaultMeta: { pkg: 'v1', src: '' },
  format: combine(
    colorize(),
    json(),
    printf(
      (info) =>
        `[${info.pkg}${getSrc(info.src)}] ${info.level}: ${info.message}`
    )
  ),
  transports: [new transports.Console()],
});

export { log };
