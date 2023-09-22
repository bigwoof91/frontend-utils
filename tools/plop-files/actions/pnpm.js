const { spawn } = require('child_process');
const { env } = require('../../utils');

function pnpmInstall() {
  return new Promise((resolve, reject) => {
    const pnpmInstall = spawn('pnpm', ['i'], { cwd: env.ROOT_PATH });
    pnpmInstall.on('close', (code) => {
      // did succeed
      if (code === 0) {
        resolve('✅');
      } else {
        reject(`exited with exit code${code}`);
      }
    });
  });
}

module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plop.setDefaultInclude({ actionTypes: true });
  plop.setActionType('pnpm i', pnpmInstall);
};
