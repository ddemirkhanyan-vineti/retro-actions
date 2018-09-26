const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './client/application.js'
  },
  plugins: [
    new CleanWebpackPlugin(['public/index.html', 'public/app.js']),
    new HtmlWebpackPlugin(
      {
        title: 'Retro Actions',
        template: 'app/views/client/template.html.erb',
        filename: 'index.html'
      }
    )
  ],
  output: {
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.html.erb$/,
        use: 'html-loader'
      }      
    ]
  }  
};