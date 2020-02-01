const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, 'app/index.tsx'),
  output: {
    filename: 'home.js',
    library: 'home',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: [path.resolve(__dirname, 'node_modules')],
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      test: /\.js(\?.*)?$/i,
      sourceMap: false,
    })],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, `./environment/.env.${process.env.ENV_FILE}`)
    }),
  ],
  devtool: 'source-map',
  externals: [
    /^@application\/*/,
    /^@library\/*/,
    /^@material-ui\/core$/,
    /^@material-ui\/styles$/,
    /^single-spa$/,
    /^react$/,
    /^react\/lib.*/,
    /^react-router-dom$/,
    /^react-dom$/,
    /.*react-dom.*/,
    /^history$/,
  ],
}
