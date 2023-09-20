const { join } = require('path');
const { env } = require('../../../../tools/utils');

const getUnbarreledFilePath = (pkgName) => `src/${pkgName}.ts`;

const getUnbarreledFileFullPath = (pkgName) =>
  join(env.CORE_PATH, getUnbarreledFilePath(pkgName));

module.exports = {
  getUnbarreledFilePath,
  getUnbarreledFileFullPath,
};
