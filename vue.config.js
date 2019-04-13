const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'
const target = TARGET_NODE ? 'server' : 'client'

module.exports = {
  configureWebpack: {
    entry: `./src/${target}-entry`,
    target: TARGET_NODE ? 'node' : 'web',
    output: {
      libraryTarget: TARGET_NODE ? 'commonjs2' : void 0
    },
    externals: TARGET_NODE ? nodeExternals({
      // 不要外置化 webpack 需要处理的依赖模块。
      // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
      // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
      whitelist: /\.css$/
    }) : void 0,
    optimization: {
      splitChunks: undefined
    },
    plugins: [
      TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()
    ]
  }
}
