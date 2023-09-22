const { env } = require('../utils');

const PATH_TO_TEMPLATE = `${env.ROOT_PATH}/tools/plop-files/templates/package`;
const PATH_TO_PKG = `${env.ROOT_PATH}/packages/{{kebabCase packageName}}`;

const PackageGenerator = {
  name: 'package',
  /** @type {import('plop').PlopGeneratorConfig} */
  config: {
    description: 'Creates a new package',
    prompts: [
      {
        type: 'input',
        name: 'packageName',
        message: 'Package Name:',
      },
      {
        type: 'input',
        name: 'packageDescription',
        message: 'Package Description:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${PATH_TO_PKG}/package.json`,
        templateFile: `${PATH_TO_TEMPLATE}/package-json.hbs`,
      },
      {
        type: 'add',
        path: `${PATH_TO_PKG}/tsconfig.json`,
        templateFile: `${PATH_TO_TEMPLATE}/tsconfig.hbs`,
      },
      {
        type: 'add',
        path: `${PATH_TO_PKG}/readme.md`,
        templateFile: `${PATH_TO_TEMPLATE}/readme.hbs`,
      },
      {
        type: 'add',
        path: `${PATH_TO_PKG}/.npmignore`,
        templateFile: `${PATH_TO_TEMPLATE}/.npmignore.hbs`,
      },
      {
        type: 'add',
        path: `${PATH_TO_PKG}/tsup.config.ts`,
        templateFile: `${PATH_TO_TEMPLATE}/tsup.config.hbs`,
      },
      {
        type: 'add',
        path: `${PATH_TO_PKG}/src/index.ts`,
        templateFile: `${PATH_TO_TEMPLATE}/index.hbs`,
      },
      {
        type: 'pnpm i',
      },
    ],
  },
};

module.exports = { PackageGenerator };
