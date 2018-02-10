 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const webpack = require('webpack');

 module.exports = merge(common, {
     entry: {
         app: ['webpack-hot-middleware/client', './src/index.js']
     },
     devServer: {
         contentBase: './dist'
     },
     plugins: [
         new webpack.HotModuleReplacementPlugin(),
         new webpack.NoEmitOnErrorsPlugin(),
     ],
     module: {
         rules: [{
             test: /\.js$/,
             use: ['react-hot-loader/webpack'],
         }, ],
     }
 });
 