require.config({
  urlArgs: "bust=" + (new Date()).getTime(),

  shim: {
    'pajax': ['pjax'],
    //'laydate': ['laydate'],
    //'progress': ['swiper'],
    'BMap': {
      exports: 'BMap'
    },
    'photoswipe': ['css!./package/photoswiper/photoswipe.css', 'css!./package/photoswiper/default-skin/default-skin.css'],
    'photoswipeui': ['photoswipe'],
  },
  paths: {
    domReady: './domReady',
    main: './lib/main',
    pjax: './package/pajax/jquery.pjax',
    pajax: './package/pajax/pajax',
    router: './package/router/router',
    viewport: './package/viewport/jquery.viewport',
    alertinfo: './package/alertinfo/alertinfo',
    css: './package/css/css',
    async: './package/async/async',
    debug: './package/debug/debug',
    smoothscroll: './package/scroll/jquery.smooth-scroll.min',
    scroll: './package/scroll/scroll',
    aspectratio_responsive: './package/media/aspectratio_responsive',
    swiper: './package/swiper/v3/swiper.min',
    debouncedresize: './package/compat/jquery.debouncedresize',
    //  progress:'./package/swiper/v2/idangerous.swiper.progress',
    photoswipe: './package/photoswiper/photoswipe.min',
    photoswipeui: './package/photoswiper/photoswipe-ui-default.min',
    loadmore: './package/loadmore/loadmore',
    'BMap': ['http://api.map.baidu.com/api?key=&v=1.1&services=true'],
  }
});
require(["domReady", 'main', './lib/index'], function (domReady, main) {
  domReady(function () {
    main.initModule();
  });
});