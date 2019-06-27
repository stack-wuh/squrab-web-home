const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  lintOnSave: false,
  outputDir: process.env.outputDir,
  assetsDir: 'static',
  publicPath: '/',

  productionSourceMap: false,

  devServer: {
    open: true,
    host: '0.0.0.0',
    port: '19020',
    proxy: {
      '/geomantic': {
        target: process.env.VUE_APP_HTTP,
        changeOrigin: true,
        pathRewrite: {
          '^/geomantic': '/'
        }
      }
    }
  },

  configureWebpack: config => {
    if(process.env.NODE_ENV === 'production'){
      return {
        plugins: [new CompressionWebpackPlugin({
          test: /\.js$|\.html|\.css|\.scss/,
          threshold: 10240,
          deleteOriginalAssets: false
        })]
      }
    }
  }
}
