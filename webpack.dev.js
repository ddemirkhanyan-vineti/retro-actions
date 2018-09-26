const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    port: 3001
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
  ],  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },  
});