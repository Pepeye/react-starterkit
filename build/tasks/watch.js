import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import config from '../config'
import webpackConfig from '../webpack.config'

const compiler = webpack(webpackConfig)
let devServerConfig = {
  // webpack-dev-server options
  // "dev": "webpack-dev-server --devtool --history-api-fallback --hot --inline --progress --colors",
  // contentBase: config.DIST_PATH,
  contentBase: config.APP_PATH,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  hot: true,
  inline: true,
  progress: true,
  stats: { colors: true }
}

const server = new WebpackDevServer(compiler, devServerConfig)

server.listen(config.PORT, config.HOST)
