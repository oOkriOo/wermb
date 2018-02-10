 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 module.exports = {

  plugins: [
   new CleanWebpackPlugin(['dist']),
   new HtmlWebpackPlugin({
    template: "./src/index.html",
    inject: 'body'
   })
  ],
  module: {
   rules: [{
     test: /\.css$/,
     use: ['style-loader', 'css-loader']
    },
    {
     test: /\.js$/,
     exclude: /node_modules/,
     use: {
      loader: "babel-loader"
     }
    },
    {
     test: /\.html$/,
     use: [{
      loader: "html-loader"
     }]
    }
   ]

  },
  output: {
   filename: '[name].bundle.js',
   path: path.resolve(__dirname, 'dist'),
   publicPath: '/'
  }
 };
 