const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextPlugin('styles.css'),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/dist')
  },  
});