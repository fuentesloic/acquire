module.exports = {
  runtimeCompiler: true,
  pwa: {
    name: 'Acquire - WOW checkout',
    themeColor: '#6028FF',
    manifestOptions: {
      orientation: 'portrait',
      start_url: './index.html'
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/style/variables.scss";
          @import "@/assets/style/mixins.scss";
        `
      }
    }
  }
}
