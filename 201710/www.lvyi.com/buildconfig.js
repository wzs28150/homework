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
    'scroll': ['scrollbar'],
    'litebox': ['css!./package/litebox/css/litebox.css', 'imagesloaded'],
  },
  paths: {
    domReady: './domReady',
    main: './lib/main',
    jquery:'./package/jquery/jquery-1.9.1.min',
    pjax: './package/pajax/jquery.pjax',
    pajax: './package/pajax/pajax',
    router: './package/router/router',
    viewport: './package/viewport/jquery.viewport',
    alertinfo: './package/alertinfo/alertinfo',
    css: './package/css/css',
    async: './package/async/async',
    debug: './package/debug/debug',
    smoothscroll: './package/scroll/jquery.smooth-scroll.min',
    scrollbar: './package/scroll/scrollbar',
    scroll: './package/scroll/scroll',
    aspectratio_responsive: './package/media/aspectratio_responsive',
    swiper: './package/swiper/v3/swiper.min',
    debouncedresize: './package/compat/jquery.debouncedresize',
    litebox: './package/litebox/js/litebox.min',
    loadmore: './package/loadmore/loadmore',
    timeline: './package/timeline/jquery.timelinr-0.9.53'
  }
})
