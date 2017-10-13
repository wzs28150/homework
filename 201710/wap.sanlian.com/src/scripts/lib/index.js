define(['domReady', 'debouncedresize'], function (domReady, debouncedresize) {
  var initModule, banner, headerh = $('header').height(),
    bannerpic, news;
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
  bannerpic = function () {
   
  }

  initModule = function (callbak) {
    domReady(function () {
      callbak(0);
      require(["swiper"], function (swiper) {
        banner();
      });
      bannerpic();
      $(window).on('debouncedresize', function () {
        bannerpic();
      });
    });
  };
  return {
    initModule: initModule
  };
})