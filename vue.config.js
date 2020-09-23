const path = require('path');

module.exports = {
  pages: {
    app: {
      entry: './src/plugins/button/index.js',
      // template: 'client/public/index.html',
    },
  },
  // entry: {
  //   app: './src/plugins/button/index.js'
  // },
  outputDir: path.resolve(__dirname, 'dist'),
  publicPath: '/dist/',
  // output: {
  //   path: path.resolve(__dirname, '../dist'),
  //   publicPath: '/dist/',
  //   // filename: 'vueAjaxUpload.js',
  //   // library: 'vueAjaxUpload', // library指定的就是你使用require时的模块名，这里便是require("vueAjaxUpload")
  //   // libraryTarget: 'umd', //libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。
  //   // umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
  // },
  configureWebpack: {
  },

  // webpack 链接 API，用于生成和修改 webapck 配置
  // https://github.com/mozilla-neutrino/webpack-chain
  chainWebpack: (config) => {
    // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
    // config.optimization
    //     .splitChunks({
    //       cacheGroups: {}
    //     });

    // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
    config.module
        .rule('eslint')
        .exclude
        .add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
        .end()
  },
};
