const path = require('path');
import { resolve } from 'path';
const rootResolve = pathname => resolve(__dirname, pathname)

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  devServer: {
    contentBase: rootResolve('dist'),
    publicPath: '/',
    hot: true,
    host: '0.0.0.0'
  }
}
