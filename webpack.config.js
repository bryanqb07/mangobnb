const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/mangobnb.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        }
    },
    {
          test: /\.css?$/,
          include: /node_modules/,
          loaders: ['style-loader','css-loader', 'sass-loader']
        }
    ]
  },
  devtool: 'source-map'
};
