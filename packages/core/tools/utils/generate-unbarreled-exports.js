const {
  writeToFile,
  logger,
  getWorkspacesInfo,
} = require('../../../../tools/utils');
const { getUnbarreledFileFullPath } = require('./sub-package-utils');

const generateUnbarreledExports = async () => {
  const { pkgNames, purePkgNames } = await getWorkspacesInfo({
    hasProdStatus: true,
  });

  logger.gray('\nGenerating unbarreled exports');
  return pkgNames.forEach(async (pkg, i) => {
    await writeToFile(
      getUnbarreledFileFullPath(purePkgNames[i]),
      `export * from '${pkg}';\n`,
      {
        successMessage: `[@futils/core/${pkg}] Generated unbarreled exports.`,
        errorMessage: `[@futils/core/${pkg}] Failed to generate exports.`,
      }
    );
  });
};

module.exports = generateUnbarreledExports;
