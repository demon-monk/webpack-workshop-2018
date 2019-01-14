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
        {
          test: /\.(jpe?g)|(png)/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
              },
            },
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
