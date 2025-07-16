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
              name: '[path][name].[ext]', // Output file name structure (if image is too large)
              limit: 10000, // Convert images smaller than this size (in bytes) to Data URIs
              fallback: 'file-loader', // Use file-loader if the image is larger than the limit
              context: path.resolve(__dirname, 'src'),
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
  ],
  devServer: {
    static: {
      directory: __dirname + '/dist',
    },
    open: true,
  },
};