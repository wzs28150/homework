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
    //'laydate': ['laydate'],
    //'progress': ['swiper'],
  },
  paths: {
    domReady: './domReady',
    smoothscroll: './package/scroll/jquery.smooth-scroll.min',
    scroll: './package/scroll/scroll',
    viewport: './package/viewport/jquery.viewport',
    pjax: './package/pajax/jquery.pjax',
    pajax: './package/pajax/pajax',
    swiper: './package/swiper/v3/swiper.min',
    debouncedresize: './package/compat/jquery.debouncedresize',
    //  progress:'./package/swiper/v2/idangerous.swiper.progress',
    masonry: './package/pubu/masonry.pkgd.min',
    aspectratio_responsive: './package/media/aspectratio_responsive',
    router: './package/router/router',
    main: './lib/main',
    css: './package/css/css',
    idcode: './package/idcode/jquery.idcode',
    form: './package/form/form',
    debug: './package/debug/debug',
    alertinfo: './package/alertinfo/alertinfo',
    laydate: './package/laydate/laydate',
    async: './package/async/async'
  }
})
