const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    clean: true,
  },
  mode: 'development', // or 'production'
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Match image file types
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'img/[name].[ext]', // Output images to dist/img/
              limit: 10000,
              fallback: 'file-loader',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new HtmlWebpackPlugin({
    template: './cSharpe.html',
    filename: 'cSharpe.html',
  }),
  ],
  devServer: {
    static: {
      directory: __dirname + '/dist',
    },
    open: true,
  },
};