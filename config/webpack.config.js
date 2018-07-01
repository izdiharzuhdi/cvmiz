const path = require('path');
const webpack = require('webpack');
const sharedPlugins = require('./sharedPlugins');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
];

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, '/../app/src/main.js'),
  ],
  output: {
    path: path.join(__dirname, '/../public/'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: plugins.concat(sharedPlugins),
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
        },
      }],
    }],
  },
};
