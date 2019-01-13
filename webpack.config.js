const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode }) => {
  return {
    mode,
    plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
  };
};
