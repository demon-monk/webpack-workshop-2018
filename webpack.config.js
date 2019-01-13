const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ mode }) => {
  return {
    mode,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin(),
    ],
  };
};
