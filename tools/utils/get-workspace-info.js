const path = require('path');
const { PACKAGE_STATUS_CONFIG, PACKAGES_PATH } = require('./env');

const getPurePkgName = (pkgName) => pkgName.replace('@futil/', '');

const parseJsonList = (data) =>
  JSON.parse(data)
    .filter(
      ({ name, path }) =>
        name !== 'futil' && path.includes('/frontend-utils/packages')
    )
    .reduce((a, b) => ({ ...a, [b.name]: b }), {});

const getWorkspaceData = (data, pureName) => ({
  workspaceInfo: data,
  pkgJson: require(`${__dirname}/../../packages/${pureName}/package.json`),
});

const DEFAULT_CONFIG = { withCore: false };

/**
 *
 * @param {object} config Configuration object for getWorkspacesInfo.
 * @param {boolean} config.hasProdStatus Will return workspaces (packages) that are production-ready.
 * @param {boolean} config.withCore Will return the `core` workspace (packages).
 */
const getWorkspacesInfo = async (config = DEFAULT_CONFIG) => {
  const command = (await import('execa')).execaCommand;
  let data = await command('pnpm m ls --json --depth=-1');

  return new Promise((resolve, reject) => {
    try {
      data = parseJsonList(data.stdout);
    } catch (err) {
      reject(err);
    }

    const coreDependencies = {};
    const purePkgNames = [];
    const pkgCache = [];
    const workspaceNames = Object.keys(data)
      .filter((name) => (config.withCore ? true : !name.includes('core')))
      .filter((name) => {
        const pureName = getPurePkgName(name);
        const { pkgJson } = getWorkspaceData(data[name], pureName);
        const isProductionReady = PACKAGE_STATUS_CONFIG[pkgJson.status];
        if (config.hasProdStatus === false) {
          return !isProductionReady;
        } else if (config.hasProdStatus) {
          return isProductionReady;
        }
        return true;
      })
      .sort();

    const pkgList = workspaceNames.map((name) => {
      const pureName = getPurePkgName(name);

      const { workspaceInfo, pkgJson } = getWorkspaceData(data[name], pureName);

      // push pure name
      purePkgNames.push(pureName);
      // push to coreDependencies if package is productionized (ready for release)
      if (PACKAGE_STATUS_CONFIG[pkgJson.status]) {
        coreDependencies[name] = `^${pkgJson.version}`;
      }

      const pkg = {
        name,
        pureName,
        relativeLocationFromCore: path.resolve(
          __dirname,
          `${PACKAGES_PATH}/${pureName}`
        ),
        version: pkgJson.version,
        ...workspaceInfo,
      };

      // push to pkgCache
      pkgCache.push({
        name,
        version: pkgJson.version,
        private: false,
        location: path.resolve(__dirname, '../../packages', pureName),
      });

      return pkg;
    });

    resolve({
      pkgCache,
      pkgList,
      pkgNames: workspaceNames,
      purePkgNames: purePkgNames,
      data,
      coreDependencies,
    });
  });
};

module.exports = {
  getPurePkgName,
  getWorkspacesInfo,
};
