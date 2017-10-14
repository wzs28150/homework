define(['domReady', 'debug'], function (domReady, debug) {
  var initModule, banner, headerh = $('header').height(),
    pro, debug = debug.initModule;
  banner = function () {
    var bigswiper = new Swiper('.index .banner.swiper-container', {
      autoplay: 3000,
      speed: 1000,
      loop: true,
      pagination: '.index .banner .swiper-pagination',
      paginationClickable: true,
      nextButton: '.index .banner .swiper-button-next',
      prevButton: '.index .banner .swiper-button-prev',
    });
  };

  pro = function () {
    var proswiper = new Swiper('.i-pro .swiper-container', {
      speed: 1000,
      //loop: true,
      pagination: '.i-pro .swiper-pagination',
      paginationClickable: true,
    });
  }

  initModule = function (callbak) {
    domReady(function () {
      callbak(0);
      require(["swiper"], function (swiper) {
        banner();
        pro();
      });
      require(['photo'], function (photo) {
        photo('.demo-gallery');
      });
    });
  };
  return {
    initModule: initModule
  };
})