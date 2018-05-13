const path = require('path');

const port = process.env.PORT || 8080;
module.exports = {
  entry: {
    app: ['./demo/demo.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'demo', 'public'),
    filename: 'bundle.js',
    publicPath: `//0.0.0.0:${port}/public/`,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: './demo/public',
  },
};
