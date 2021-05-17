const { merge } = require('webpack-merge')
const baseConfig = require('./build/webpack.base.config')
const devConfig = require('./build/webpack.dev.config')
const proConfig = require('./build/webpack.pro.config')

module.exports = (env, argv) => {
  let config = argv.mode === 'development' ? devConfig : proConfig;
  return merge(baseConfig, config);
};
