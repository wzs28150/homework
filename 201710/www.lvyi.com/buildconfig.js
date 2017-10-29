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

    'scroll': ['scrollbar']
  },
  paths: {
    domReady: './domReady',
    main: './lib/main',
    pjax: './package/core/pajax/jquery.pjax',
    pajax: './package/core/pajax/pajax',
    router: './package/core/router/router',
    debug: './package/core/debug/debug',
    alertinfo: './package/core/alertinfo/alertinfo',
    css: './package/core/css/css',
    async: './package/core/async/async',
    viewport: './package/viewport/jquery.viewport',
    smoothscroll: './package/scroll/jquery.smooth-scroll.min',
    scrollbar: './package/scroll/scrollbar',
    scroll: './package/scroll/scroll',
    aspectratio_responsive: './package/media/aspectratio_responsive',
    swiper: './package/swiper/v3/swiper.min',
    debouncedresize: './package/compat/jquery.debouncedresize',
    litebox: './package/litebox/js/litebox.min',
    loadmore: './package/loadmore/loadmore',
    
  }
})
