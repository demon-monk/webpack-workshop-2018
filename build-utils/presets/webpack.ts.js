module.exports = ({ mode, presets }) => {
  return {
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
      ],
    },
  };
};
