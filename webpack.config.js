const path = require('path');

const port = process.env.PORT || 8080;

let entryPoint = './src/Loader.jsx';

if (path.basename(require.main.filename).match(/^webpack-dev-server\.js$/)) {
  entryPoint = './demo/demo.jsx';
}


module.exports = {
  entry: {
    app: entryPoint,
  },
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'loader.js',
    publicPath: `//0.0.0.0:${port}/dist/`,
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
