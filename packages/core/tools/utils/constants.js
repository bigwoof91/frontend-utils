const { join } = require('path');
const { env } = require('../../../../tools/utils');

const CORE_INDEX_PATH = join(env.CORE_PATH, 'src/index.ts');
const CORE_PACKAGE_JSON_PATH = join(env.CORE_PATH, 'package.json');
const CORE_OUTPUT_PATH = join(env.CORE_PATH, 'dist/');

module.exports = {
  CORE_INDEX_PATH,
  CORE_PACKAGE_JSON_PATH,
  CORE_OUTPUT_PATH,
};
