const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const BundleAnalyzer = new BundleAnalyzerPlugin({
  openAnalyzer: false,
});

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') {
      config.plugins.push(BundleAnalyzer)
    }
  },

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/imports.scss";`,
      }
    }
  },

  pwa: {
    workboxOptions: {
      exclude: [/index.html$/],
    }
  },

  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
};
