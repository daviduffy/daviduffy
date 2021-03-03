const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const html = require('./html.config.js');

// const devMode = process.env.NODE_ENV !== 'production';

const plugins = [
  new CopyPlugin({
    patterns: [
      {
        from: 'img/**',
        to: path.resolve(__dirname, 'dist'),
        context: 'src/',
      },
      ...[
        'robots.txt',
        'sitemap.xml'
      ].map((filename) => ({
        from: filename,
        to: path.resolve(__dirname, 'dist'),
        context: 'src/',
      })),
    ],
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
  }),
  new HtmlWebpackPlugin({
    Offcanvas: html.Offcanvas,
    Header: html.Header,
    Portfolio: html.Portfolio,
    Contact: html.Contact,
    Splash: html.Splash,
    template: './index.html' // uses templating based on lodash https://lodash.com/docs/#template
  }),
];

module.exports = {
  entry: {
    main: './src/js/main.js',
    critical: './src/scss/critical.scss',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins,
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};