const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const CompressionPlugin = require("compression-webpack-plugin")


module.exports = merge(common, {
 entry: {
  app: ['./src/index.js']
 },
 plugins: [
  new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
  new UglifyJSPlugin({}),
  new webpack.DefinePlugin({
   'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new CompressionPlugin({
   asset: "[path].gz[query]",
   algorithm: "gzip",
   test: /\.js$|\.css$|\.html$/,
  })
 ]
});
