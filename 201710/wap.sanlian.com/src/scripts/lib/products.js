define(['debug', 'loadmore'], function (debug, loadmore) {
  var initModule, products_show, products_list, products_show, debug = debug.initModule,
    loadmore = loadmore.initModule,
    products_list, banner;
  banner = function () {
    var bigswiper = new Swiper('.products .er-banner.swiper-container', {
      autoplay: 1500,
      speed: 1000,
      loop: true,
      effect: 'fade'
    });
  };
  products_list = function () {
    debug('产品列表加载完毕');
    require(['photo'], function (photo) {
      photo('.demo-gallery');
    });
  }
  products_show = function () {
    debug('产品内容加载完毕');
    require(['photo'], function (photo) {
      photo('.demo-gallery');
    });
  }
  initModule = function (callbak) {
    callbak(2);
    require(["swiper"], function (swiper) {
      banner();
    });
  };
  return {
    initModule: initModule,
    products_list: products_list,
    products_show: products_show
  };
})