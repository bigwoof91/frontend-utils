const { join } = require('path');
const { env } = require('../../../../tools/utils');

const CORE_PATH = join(env.PACKAGES_PATH, 'core');
const CORE_INDEX_PATH = join(CORE_PATH, 'src/index.ts');
const CORE_PACKAGE_JSON_PATH = join(CORE_PATH, 'package.json');
const CORE_OUTPUT_PATH = join(CORE_PATH, 'dist/');

module.exports = {
  CORE_PATH,
  CORE_INDEX_PATH,
  CORE_PACKAGE_JSON_PATH,
  CORE_OUTPUT_PATH,
};
