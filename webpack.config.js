const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
});

const html = new HtmlWebpackPlugin({
  title: 'Jose\'s Website',
  filename: 'index.html',
  template: 'index.ejs'
});

const sourceFolder = path.resolve(__dirname, 'src');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  context: path.join(__dirname, 'src'),
  resolve: {
    extensions: ['.js'],
    modules: ['src', 'node_modules'],
  },
  plugins: [
    extractSass,
    html
  ],


  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
            options: {
              context: sourceFolder
            }
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: [sourceFolder]
            }
          }],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
};
