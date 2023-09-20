const { join } = require('path');
const {
  writeToFile,
  logger,
  getWorkspacesInfo,
} = require('../../../../tools/utils');

const generateGitIgnore = async () => {
  const { purePkgNames } = await getWorkspacesInfo({ hasProdStatus: true });
  const ignoreList = purePkgNames.map((name) => `/${name}`);

  const content = `# Automatically generated from "pnpm generate-packages"
/dist
${ignoreList.join('\n')}`;

  logger.gray('\nGenerating .gitignore');
  return writeToFile(join(__dirname, '../../.gitignore'), content, {
    successMessage: '[@futils/core] Generated ".gitignore".\n',
    errorMessage: '[@futils/core] Failed to generate ".gitignore".\n',
  });
};

module.exports = generateGitIgnore;
