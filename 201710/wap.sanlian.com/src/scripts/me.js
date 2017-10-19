require.config({
  urlArgs: "bust=" + (new Date()).getTime(),

  shim: {
    'pajax': ['pjax'],
    //'laydate': ['laydate'],
    //'progress': ['swiper'],
    'photoswipe': ['css!./package/photoswiper/photoswipe.css', 'css!./package/photoswiper/default-skin/default-skin.css'],
    'slide':['css!./package/slide/less/index.css', 'css!./package/slide/less/slide.css'],
    'page': ['pagination'],
  },
  paths: {
    domReady: './domReady',
    main: './lib/main',
    pjax: './package/pajax/jquery.pjax',
    pajax: './package/pajax/pajax',
    router: './package/router/router',
    page: './package/pagination/page',
    pagination: './package/pagination/pagination.min',
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
    photo: './package/photoswiper/index',
    loadmore: './package/loadmore/loadmore',
    slide:'./package/slide/js/slide.min'
  }
});
require(["domReady", 'main', './lib/index'], function (domReady, main) {
  domReady(function () {
    main.initModule();
  });
});