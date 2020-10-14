module.exports = {
  // 基本路径
  // 当我们采用绝对路径引入一些东西时，一定要注意webpack的publicpath设置，当我们的项目不是在域名的根目录下，我们需要动态的给所有src加上路径（通过设置{publicPath}）
  // 举例子：publicPath: process.env.NODE_ENV === 'production' ? '/html' : '/c',
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // chainWebpack: config => {
  //   /**
  //    * 删除懒加载模块的 prefetch preload，降低带宽压力
  //    * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
  //    * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
  //    * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
  //    */
  //   config.plugins.delete("prefetch").delete("preload");
  //   // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
  //   config.resolve.symlinks(true);
  //   return config;
  // },
  configureWebpack: () => {},
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {
    name: 'blog',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestPath: './manifest.json',

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW'
    //   workboxOptions: {
    //     // swSrc is required in InjectManifest mode.
    //     swSrc: 'dev/sw.js'
    //     // ...other Workbox options...
    //   }
  },
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // 配置跨域
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          // path重写
          '^/api': ''
        }
      }
    },
    // proxy: 'http://localhost:3000', // 设置代理
    before: app => {},
    open: true,
    hot: true
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
