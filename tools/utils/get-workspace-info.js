const { env } = require('./env');

const getPurePkgName = (pkgName) => pkgName.replace('@futil/', '');
const isPublicPackage = (path) => path.includes('/frontend-utils/packages');
const isNotMainRepo = (name) => name !== 'futil';

const parseJsonList = (data) =>
  JSON.parse(data)
    .filter(({ name, path }) => isNotMainRepo(name) && isPublicPackage(path))
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
    const pkgNames = Object.keys(data)
      .filter((name) => {
        if (!config.withCore && name.includes('core')) {
          return false;
        }
        const pureName = getPurePkgName(name);
        const { pkgJson } = getWorkspaceData(data[name], pureName);
        const isProductionReady = env.PACKAGE_STATUS_CONFIG[pkgJson.status];
        if (config.hasProdStatus === false) {
          return !isProductionReady;
        } else if (config.hasProdStatus) {
          return isProductionReady;
        }
        return true;
      })
      .sort();

    const pkgList = pkgNames.map((name) => {
      const pureName = getPurePkgName(name);

      const { workspaceInfo, pkgJson } = getWorkspaceData(data[name], pureName);

      // push pure name
      purePkgNames.push(pureName);
      // push to coreDependencies if package is productionized (ready for release)
      if (env.PACKAGE_STATUS_CONFIG[pkgJson.status]) {
        coreDependencies[name] = `^${pkgJson.version}`;
      }

      return {
        name,
        pureName,
        version: pkgJson.version,
        ...workspaceInfo,
      };
    });

    resolve({
      pkgList,
      pkgNames,
      purePkgNames,
      coreDependencies,
    });
  });
};

module.exports = {
  getPurePkgName,
  getWorkspacesInfo,
};
