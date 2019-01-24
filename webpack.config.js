const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loadPresets = require('./build-utils/loadPreset');

console.log(loadPresets({ presets: 'ts' }));


module.exports = ({ mode, presets }) => {
  return webpackMerge(
    {
      mode: 'none',
      devtool: "source-map",
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
    },
    loadPresets({ mode, presets })
  );
};
