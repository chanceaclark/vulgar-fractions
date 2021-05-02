const BABEL_ENV = process.env.BABEL_ENV;

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: ['cjs', 'test'].includes(BABEL_ENV) ? 'commonjs' : false,
        targets: BABEL_ENV === 'test' ? { node: 'current' } : { browsers: 'defaults' },
      },
    ],
    '@babel/preset-typescript',
  ],
  env: {
    cjs: {
      plugins: [['@babel/plugin-transform-runtime', { useESModules: false }]],
    },
    es: {
      plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
    },
  },
};
