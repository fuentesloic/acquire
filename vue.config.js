module.exports = {
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
