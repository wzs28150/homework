define(['domReady'], function (domReady) {
  var initModule, banner, headerh = $('header').height(),project;
  banner = function () {
    var bigswiper = new Swiper('.index .banner .swiper-container', {
      autoplay: 3000,
      speed: 1000,
      loop: true,
      pagination: '.index .banner .swiper-pagination',
      paginationClickable: true,
      nextButton: '.index .banner .swiper-button-next',
      prevButton: '.index .banner .swiper-button-prev',
    });
  };
  project = function(){
    var swiper = new Swiper('.i-project .swiper-container', {
      nextButton: '.i-project .swiper-button-next',
      prevButton: '.i-project .swiper-button-prev',
    });
  }

  initModule = function (callbak) {
    domReady(function () {
      callbak(99);
      require(["swiper"], function (swiper) {
        banner();
        project();
      });
    });
  };
  return {
    initModule: initModule
  };
})