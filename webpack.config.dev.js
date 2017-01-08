const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './test'
  ],
  output: {
    path: path.join(__dirname, 'tmp'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client/interfaces/web/app')
    }, {
      test: /\.scss$/,
      loaders: [
        'style',
        'css',
        'sass'
      ]
    }]
  }
};
