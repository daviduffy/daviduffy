const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CreateFileWebpack = require('create-file-webpack');
const html = require('./html.config.js').default;

const devMode = process.env.NODE_ENV !== 'production';

console.log('='.repeat(100), { devMode }, '='.repeat(100));

const htmlOptions = {
  // path to folder in which the file will be created
  path: './dist',
  // file name
  fileName: 'index.html',
  // content of the file
  content: html,
}

const plugins = [
  // new CleanWebpackPlugin(),
  new CreateFileWebpack(htmlOptions),
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
    filename: '../css/[name].css',
  }),
];

// if (!devMode) {
  // enable in production only
  // plugins.push(
      // chunkFilename: '../css/[id].css',
      // ignoreOrder: false, // Enable to remove warnings about conflicting order
// }

module.exports = {
  entry: {
    main: './src/js/main.js',
    critical: './src/scss/critical.scss',
  },
  // mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist', 'js'),
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
    // resolve: {
    //   extensions: ['.js', '.scss']
    // },
  },
};