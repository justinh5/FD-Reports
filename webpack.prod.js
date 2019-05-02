const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {

  entry: resolve(__dirname, "src", "index.jsx"),

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          configFile: "./.eslintrc"
        }
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["es2015", {"modules": false}],
            "react",
          ]
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|gif|jp(e*)g|svg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template:'template.ejs',
      appMountId: 'react-app-root',
      title: 'FD Reports',
      filename: resolve(__dirname, "dist", "index.html"),
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new CleanWebpackPlugin(),
  ]
};
