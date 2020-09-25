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
  //   output: {
  //     filename: 'vue-ns-ui.common.js',
  //     chunkFilename: '[id].js',
  //     libraryTarget: 'umd',
  //     umdNamedDefine: true
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.(jsx?|babel|es6)$/,
  //         include: process.cwd(),
  //         exclude: /node_modules|utils\/popper\.js|utils\/date.\js/,
  //         loader: 'babel-loader'
  //       },
  //       {
  //         test: /\.vue$/,
  //         loader: 'vue-loader',
  //         options: {
  //           preserveWhitespace: false
  //         }
  //       },
  //       {
  //         test: /\.json$/,
  //         loader: 'json-loader'
  //       },
  //       {
  //         test: /\.css$/,
  //         loaders: ['style-loader', 'css-loader', 'postcss-loader']
  //       },
  //       {
  //         test: /\.scss$/,
  //         loaders: ['style-loader', 'css-loader', 'sass-loader']
  //       },
  //       // {
  //       //   test: /\.html$/,
  //       //   loader: 'html-loader?minimize=false'
  //       // },
  //       {
  //         test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
  //         loader: 'url-loader',
  //         query: {
  //           limit: 10000,
  //           name: path.posix.join('static', '[name].[hash:7].[ext]')
  //         }
  //       },
  //       {
  //         test: /\.svg(\?\S*)?$/,
  //         loader: 'url-loader',
  //         query: {
  //           limit: 10000,
  //           name: path.posix.join('static', '[name].[hash:7].[ext]')
  //         }
  //       },
  //       {
  //         test: /\.(gif|png|jpe?g)(\?\S*)?$/,
  //         loader: 'url-loader',
  //         query: {
  //           limit: 10000,
  //           name: path.posix.join('static', '[name].[hash:7].[ext]')
  //         }
  //       }
  //     ]
  //   }
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
