
const outdent = require('outdent').default;
const findPkgs = require('find-packages').findPackages;
const { env } = require('../tools/utils');

/** @see https://github.com/changesets/changesets/blob/c1401716cf5ee839aaa02ea7ff8f23f8af8bf5b0/packages/cli/src/commit/index.ts */
const getVersionMessage = async ({ releases, changesets }, _options) => {
  let pkgs = await findPkgs(env.PACKAGES_PATH);
  pkgs = pkgs.map((pkg) => pkg.manifest.name);

  const publishableReleases = releases.filter(
    (release) => release.type !== 'none'
  );
  const pkgsVersioned = publishableReleases
    .filter((release) => pkgs.includes(release.name))
    .map((release) => release.name?.split('/')[1])
      .join(',');
  const subject = changesets[0].summary;

  const commitMsg = outdent`📜 docs(${pkgsVersioned}): ${subject}`;

  return commitMsg;
};

module.exports = {
  getVersionMessage,
};
