const path = require('path');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',
  context: path.join(__dirname, '../server'),
  devtool: 'source-map',
  entry: [
    './routes/index.js',
  ],
  target: 'node',
  output: {
    path: path.join(__dirname, '../server/bin'),
    filename: './server.js',
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              emitFile: false,
            }
          }
        ]
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.svg$/,
        use: 'svg-url-loader'
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.join(__dirname, '../.env'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../favicon.ico'),
          to: path.resolve(__dirname, '../server/public/images')
        },
      ]
    }),
    new MiniCssExtractPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
