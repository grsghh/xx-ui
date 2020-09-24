const path = require('path');

module.exports = {
  // 修改默认的入口
  pages: {
    index: {
      entry: './examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  outputDir: path.resolve(__dirname, 'dist'),
  publicPath: './',
  // configureWebpack: {
  //
  // },

  chainWebpack: config => {
    config.resolve.alias
        .set('~', path.resolve('packages'))
        .set('@', path.resolve('examples'));
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
};
