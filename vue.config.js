const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/master.scss";`,
      },
    },
  },

  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      definitions[0] = Object.assign(definitions[0], {
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery',
        _: 'lodash'
      })
      return definitions
    })
  }
};

