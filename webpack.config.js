const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

const wpTheme = 'cinemavalley'

const buildDefault = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, 'bedrock', 'web', 'app', 'themes', wpTheme)
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i, 
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ], 
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      }
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js', '.json'
    ]
  },
  watchOptions: {
    ignored: ['**/node_modules', './package.json']
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      open: false,
      proxy: 'http://cinemavalley.local'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/img', to: 'img' },
        { from: 'src/templates', to: '' }
      ],
    }),
    new ImageMinimizerPlugin({
      test: /\.(png|jpe?g)$/i,
      minimizer: {
        implementation: ImageMinimizerPlugin.squooshMinify,
        options: {
          encodeOptions: {
            mozjpeg: {
              quality: 85,
            },
            oxipng: {
              level: 3,
              interlace: false,
            }
          },
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    })
  ]
}

module.exports = buildDefault;