/* eslint-disable no-unused-vars */
const fs = require('fs');
const {
  logger,
  writeToFile,
  getWorkspacesInfo,
} = require('../../../../tools/utils');

/**
 * @todo refactor to use pnpm commands? maybe?
 */
const writePkgJson = async (pkg) => {
  const pkgJson = {
    name: `@futils/${pkg}`,
    version: '0.0.0',
    private: true,
    sideEffects: false,
    main: `../dist/${pkg}.js`,
    types: `../dist/${pkg}.d.ts`,
  };

  const dir = `${__dirname}/../../${pkg}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  return await writeToFile(`${dir}/package.json`, pkgJson, {
    successMessage: `[@futils/core/${pkg}]: Generated "package.json".`,
    errorMessage: `[@futils/core/${pkg}]: Failed to generate "package.json".`,
    formatJson: true,
  });
};

/**
 * @function generatePkgJson bundle esm & cjs package for unbarreled exports
 */
const generatePkgJson = async () => {
  const { pkgList } = await getWorkspacesInfo({ hasProdStatus: true });

  logger.gray("\nGenerating package.json's for unbarreled exports");
  return pkgList.forEach(async (pkg) => {
    const pureName = pkg.pureName;
    await writePkgJson(pureName);
  });
};

module.exports = generatePkgJson;
