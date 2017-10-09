require.config({
  urlArgs: "bust=" + (new Date()).getTime(),

  shim: {
    'pajax': ['pjax'],
    //'laydate': ['laydate'],
    //'progress': ['swiper'],
    'BMap': {
      exports: 'BMap'
    },
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
    async: './package/async/async',
    'BMap': ['http://api.map.baidu.com/api?key=&v=1.1&services=true'],
  }
});
require(["domReady", 'main', './lib/index'], function(domReady, main) {
  domReady(function() {
    main.initModule();
  });
});
