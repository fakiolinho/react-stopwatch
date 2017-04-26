const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssnano = require('cssnano');

module.exports = {
  entry: ['webpack-hot-middleware/client?reload=true', './index.jsx'],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  context: resolve(__dirname, 'client'),

  devtool: 'inline-source-map',

  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins() {
              return [
                cssnano({
                  autoprefixer: {
                    add: true,
                    remove: true,
                    browsers: ['last 2 versions'],
                  },
                  discardComments: {
                    removeAll: true,
                  },
                  discardDuplicates: true,
                  discardUnused: false,
                  mergeIdents: false,
                  reduceIdents: false,
                  safe: true,
                  sourcemap: true,
                }),
              ];
            },
          },
        },
        'sass-loader',
      ],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: 'file-loader',
    }, {
      test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/,
      use: 'file-loader',
    }],
  },
  resolve: {
    modules: [resolve(__dirname, 'client'), 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: '../dist/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
