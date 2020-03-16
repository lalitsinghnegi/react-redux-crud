
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const utils = require('./utils');

module.exports = {
  resolve: {
    extensions: ['.js','.json'],
    alias: {
      assets: utils.resolve('assets'),
      components: utils.resolve('src/components')
    }
  },

  module: {
    rules: [
     
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('images/[name].[ext]')
          }
        }
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true
    }),
    new CopyWebpackPlugin([
      { from: 'nginx', to: 'nginx' },
      { from: 'Staticfile' }
    ])
  ]
};
