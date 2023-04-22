// webpack.electron.config.js
const path = require('path');

module.exports = {
  entry: {
    main: './src/main.ts',
    preload: './src/preload.js',
  },
  mode: 'production',
  target: 'electron-main',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
