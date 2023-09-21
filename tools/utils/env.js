const { join } = require('path');
/**
 * environment utilities
 */
const ENV = process.env.NODE_ENV;
const isProduction = ENV === 'production';
const BUNDLE_OUTPUT_DIR = 'dist';

const ROOT_PATH = join(__dirname, '../..');
const PACKAGES_PATH = join(ROOT_PATH, 'packages');

const PRODUCTION = 'production';
const DEVELOPMENT = 'development';
const EXPERIMENTAL = 'experimental';
const PACKAGE_STATUS_CONFIG = {
  // released or ready for release
  [PRODUCTION]: true,
  // under development, not ready for release
  [DEVELOPMENT]: false,
};

global.__basedir = ROOT_PATH;

module.exports = {
  ENV,
  isProduction,
  BUNDLE_OUTPUT_DIR,
  PACKAGES_PATH,
  PACKAGE_STATUS_CONFIG,
  PRODUCTION,
  DEVELOPMENT,
  EXPERIMENTAL,
  ROOT_PATH,
};
