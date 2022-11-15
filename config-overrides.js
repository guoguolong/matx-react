const path = require('path');
const webpack = require('webpack');

const {
  override,
  addLessLoader,
  overrideDevServer,
  addWebpackAlias,
  setWebpackPublicPath,
} = require('customize-cra');

let publicPath = '/';
module.exports = {
  webpack: override(
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
      },
    }),
    setWebpackPublicPath(publicPath),
    addWebpackAlias({ ['@']: path.resolve(__dirname, './src') }),
    (config, env) => {
      config.resolve.alias.process = 'process/browser.js';
      config.resolve.alias.stream = 'readable-stream';

      config.resolve.fallback = {
        // util: false,
        // buffer: false,
        // stream: false,
        // stream: require.resolve('stream-browserify'),
        // buffer: require.resolve('buffer'),
        crypto: require.resolve('crypto-browserify'),
        // net: false,
        // path: false,
        // zlib: false,
        // crypto: false,
        // process: false,
        // assert: false,
        // http: false,
        // https: false,
        // process: require.resolve('process'),
      };

      config.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        })
      );

      return config;
    }
  ),
  jest: function (config) {
    return config;
  },
  devServer: overrideDevServer((config) => {
    return {
      ...config,
      historyApiFallback: {
        disableDotRule: true,
        rewrites: [
          // { from: /^\//, to: '/index.html' }
        ],
      },
    };
  }),
};
