define(['debug'], function (debug) {
  var initModule, technology_index, debug = debug.initModule,
    technology_rongyu,banner;

  banner = function () {
    var bigswiper = new Swiper('.technology .er-banner.swiper-container', {
      autoplay: 1500,
      speed: 1000,
      loop: true,
      effect: 'fade'
    });
  };
  technology_index = function (callbak) {
    debug('研发中心已加载');
    callbak(0);
  }
  technology_rongyu = function (callbak) {
    debug('专利及成果已加载');
    callbak(1);
  }
  initModule = function (callbak) {
    callbak(3);
    require(["swiper"], function (swiper) {
      banner();
    });
  };
  return {
    initModule: initModule,
    technology_index: technology_index,
    technology_rongyu: technology_rongyu
  };
})