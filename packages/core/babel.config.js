module.exports = {
  env: {
    release: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              ie: '11',
              edge: '18',
              firefox: '60',
              chrome: '67',
              safari: '11.1',
            },
          },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: ['macros', '@babel/plugin-transform-runtime'],
    },
  },
};
