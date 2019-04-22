const path = require('path');
const perfectionist = require('perfectionist');
const discardComments = require('postcss-discard-comments');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    styles: path.join(__dirname, 'static', 'styles'),
  },
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.js', '.scss'],
  },
  output: {
    path: path.join(__dirname, 'static', 'dist'),
    filename: '[name].css'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new OptimizeCssAssetsPlugin({
      cssProcessor: discardComments,
      canPrint: false
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: perfectionist,
      cssProcessorOptions: {
        format: 'compact'
      },
      canPrint: false
    })
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
      }
    ]
  }
};

