var webpack = require('webpack');
var path = require('path');


var config = {
    entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.json']
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js/,
        use: [
          { loader: 'babel-loader', 
          query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-object-rest-spread']
        }}
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader', options: {
              includePaths: ['./node_modules']
            }
          }
        ]
      },
    ]
  }
};

module.exports = config;