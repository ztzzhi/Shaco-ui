const CubeStyleStylusPlugin = require('@xhs/cube-style/stylus-plugin')
const CubeStylePostcssPlugin = require('@xhs/cube-style/postcss-plugin')
const CubeStyleWebpackPlugin = require('@xhs/cube-style/webpack-plugin')

module.exports = {
  title: '小红书',
  entry: './src/index.ts',
  category: 'vue-app',
  stylus: {
    use: [
      CubeStyleStylusPlugin,
    ],
  },
  postcss: [
    CubeStylePostcssPlugin(),
  ],
  plugins: [
    new CubeStyleWebpackPlugin(),
  ],
  errorTracker: {
    dsn: '', // https://xiaohongshu.quip.com/z9TfA1iwR46Y#GJIACA6rKbo
  },
  experimental: {
    'svg-loader': true,
  },
  resolve: {
    alias: {
      // 使用 @vue/composition-api 编写的模块会自动转换为 vue3，比如 onix 组件
      '@vue/composition-api': 'vue',
      '@xhs/yam-beer': '@xhs/yam-beer',
    },
  },
  
}
