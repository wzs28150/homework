({
  appDir: './',
  baseUrl: './src/scripts/',
  dir: './dist',
  modules: [{
    name: 'me'
  }],
  fileExclusionRegExp: /^(r|buildconfig)\.js|.*\.scss|.*\.bat|.*\.svg$/,
  optimizeCss: 'standard',
  removeCombined: true,
  shim: {
    'pajax': ['pjax'],
  },
  paths: {
    nicescroll: './package/scroll/jquery.nicescroll',
    smoothscroll: './package/scroll/jquery.smooth-scroll.min',
    scroll: './package/scroll/scroll',
    viewport: './package/viewport/jquery.viewport',
    pjax: './package/pajax/jquery.pjax',
    pajax: './package/pajax/pajax',
    swiper: './package/swiper/v3/swiper.min',
    debouncedresize: './package/compat/jquery.debouncedresize',
    aspectratio_responsive: './package/media/aspectratio_responsive',
    router: './package/router/router',
    masonry: './package/pubu/masonry.pkgd.min',
    main: './lib/main',
    css: './package/css/css',
    'async': './package/async/async',
    alertinfo: './package/alertinfo/alertinfo',
  }
})
