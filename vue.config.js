module.exports = {
  // head: {
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  //     { rel: 'apple-touch-icon', sizes: '180*180', href: '/favicon.ico' },
  //     { rel: 'shortcut icon', type: 'image/svg', href: '/favicon.ico' },
  //
  //     { href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css", rel: "stylesheet" },
  //     { href: "https://fonts.googleapis.com/css?family=Material+Icons", rel: "stylesheet"}
  //   ],
  // },
  lintOnSave: false,

  transpileDependencies: [
    'vuetify',
  ],
  chainWebpack: config => {
    config.performance
        .maxEntrypointSize(400000)
        .maxAssetSize(400000)
  }
};
