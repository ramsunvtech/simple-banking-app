const webpack = require('webpack');
const path = require('path');

// WebPack Plugins.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      '@bankingApp/ui-components': path.resolve(__dirname, 'src', 'ui-components'),
      '@bankingApp/domain-components': path.resolve(__dirname, 'src', 'domain-components'),
      '@bankingApp/services': path.resolve(__dirname, 'src', 'services')
    },
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app-bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    // Take Reference of HTML File.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'static/index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './static',
    hot: true,
    proxy: {
      '/bankingApi': 'http://localhost:3000/'
    }
  }
};