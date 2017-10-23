define(['domReady'], function (domReady) {
  var initModule, environment_change;
  environment_change = function () {
    var environmentbigswiper = new Swiper('.big-pic > .swiper-container', {
      autoplay: 2000,
      speed: 2000,
      nextButton: '.big-pic .i-pro-r',
      prevButton: '.big-pic .i-pro-l',
      autoplayDisableOnInteraction : false,
      onSlideChangeStart: function(swiper){
       var i = swiper.activeIndex;
       $('.about .enviro .big-pic .small-pic .inner .swiper-slide').removeClass('on');
       $('.about .enviro .big-pic .small-pic .inner .swiper-slide').eq(i).addClass('on');
      }
    });
    var environmentswiper = new Swiper('.big-pic .small-pic .swiper-container', {
      slidesPerView: 7,
      spaceBetween: 11,
      autoplayDisableOnInteraction : false,
      onSlideChangeStart: function(swiper){
        var i = $('.about .enviro .big-pic .small-pic .inner .swiper-slide.on').index();
        var n = parseInt((i+1)/7);
        if((i+1)%7>0){
          n = n+1;
        }
        environmentswiper.slideTo(n, 1000, false);
       }
    });
    $('.about .enviro .big-pic .small-pic .inner .swiper-slide img').click(function () {
      var src = $(this).attr('data-src');
      $('.about .enviro .big-pic .small-pic .inner .swiper-slide').removeClass('on');
      $(this).parent().addClass('on');
      var index = $(this).parent().index();
      // $('.big-pic>img').attr('src',src); 
      environmentbigswiper.slideTo(index, 1000, false);
    });
  };
  initModule = function (callbak) {
    domReady(function () {
      callbak(4);
      require(["swiper"], function (swiper) {
        environment_change();
      });
    });
  };
  return {
    initModule: initModule
  };
})