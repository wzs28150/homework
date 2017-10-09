define(['domReady'], function (domReady) {
  var initModule, environment_change;
  environment_change = function () {
    var environmentswiper = new Swiper('.big-pic .small-pic .swiper-container', {
      slidesPerView: '3',
      spaceBetween: 11,
      nextButton: '.big-pic .i-pro-r',
      prevButton: '.big-pic .i-pro-l',
    });
    $('.about .big-pic .small-pic .inner .swiper-slide img').click(function () {
      var src = $(this).attr('data-src');
      $('.about .enviro .big-pic .small-pic .inner .swiper-slide').removeClass('on');
      $(this).parent().addClass('on');
      $('.big-pic>img').attr('src', src);
    });
  };
  initModule = function (callbak) {
    domReady(function () {
      require(["swiper"], function (swiper) {
        environment_change();
      });
    });
  };
  return {
    initModule: initModule
  };
})