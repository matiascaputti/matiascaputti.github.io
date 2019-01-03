const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  // Default configurations
  {
    distDir: 'build',
    publicRuntimeConfig: {
      staticFolder: '/static'
    },
    exportPathMap: function() {
      return {
        "/": { page: "/" },
        "/projects": { page: "/projects" },
        "/work": { page: "/work" }
      };
    },
  },

  // Image optimizations
  [optimizedImages, {
    inlineImageLimit: 1, // default: 8192
    imagesFolder: 'images',
    imagesName: '[name]-[hash:8].[ext]',
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75,
    }
  }]
]);
