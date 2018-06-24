import webpack from 'webpack'
import path from 'path'
import qs from 'querystring'

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const config: webpack.Configuration = {
  mode: mode,
  devtool: 'source-map',
  entry: ['webpack-hot-middleware/client', './client/app.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(false),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      request: 'browser-request',
    },
  },
  module: {
    rules: [
      // Javascript
      {
        test: /\.js|tsx?$/,
        include: path.join(__dirname, 'client'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: ['react-hot-loader/babel'],
            },
          },
          'ts-loader'
        ],
      },

      // CSS
      {
        test: /\.css$/,
        include: path.join(__dirname, 'client'),
        loader:
          'style-loader!css-loader?' +
          qs.stringify({
            modules: true,
            importLoaders: 1,
            localIdentName: '[path][name]-[local]',
          }),
      },
    ],
  },
}

export default config
