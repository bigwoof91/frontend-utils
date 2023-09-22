const { PackageGenerator } = require('./tools/plop-files/plop-package');

module.exports = async function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  await plop.load('./tools/plop-files/actions/pnpm.js');
  plop.setGenerator(PackageGenerator.name, PackageGenerator.config);
};
