define(['domReady', 'loadmore'], function (domReady, loadmore) {
  var initModule, products_show, products_list, loadmore = loadmore.initModule;
  tab_show = function () {
    var proswiper = new Swiper('.tab-inner .swiper-container', {
      slidesPerView: 2,
      spaceBetween: 12,
      nextButton: '.i-pro-r',
      prevButton: '.i-pro-l',
    });
  };
  initModule = function (callbak) {
    domReady(function () {
      require(["swiper"], function (swiper) {
        tab_show();
      });
    });
  };
  return {
    initModule: initModule
  };
})