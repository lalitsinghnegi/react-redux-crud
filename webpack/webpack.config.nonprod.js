
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[hash].bundle.js',
    chunkFilename: '[hash].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(['REACT_APP_NODE_ENV', 'REACT_APP_API_URL', 'REACT_APP_BASE_URL', 'REACT_APP_ROWPERPAGE']),
    new MiniCssExtractPlugin({
      filename: '[hash].main.css',
      chunkFilename: '[hash].main.css'
    })
  ]
});
