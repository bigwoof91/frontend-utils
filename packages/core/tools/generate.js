const generateGitIgnore = require('./utils/generate-gitignore');
const generateIndex = require('./utils/generate-index');
const generatePkgJson = require('./utils/generate-pkg-json');
const generateUnbarreledExports = require('./utils/generate-unbarreled-exports');

/**
 * @description script to generate generate core bundle from `@futil` package workspaces
 */
(async function generate() {
  /*
   * Write index file
   */
  await generateIndex();
  /*
   * Write each unbarreled file
   */
  await generateUnbarreledExports();
  /*
   * Generate package.json for each unbarreled export
   */
  await generatePkgJson();
  /*
   * Generate a .gitignore file to prevent committing built files
   */
  await generateGitIgnore();
})();
