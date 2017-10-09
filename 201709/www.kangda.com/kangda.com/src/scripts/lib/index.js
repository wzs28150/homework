define(['domReady'], function (domReady) {
  var initModule, banner, headerh = $('header').height(),
    pro, youshi;
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

  pro = function () {
    var proswiper = new Swiper('.i-pro .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 27,
      nextButton: '.i-pro-r',
      prevButton: '.i-pro-l',
    });
  }

  youshi = function(){
    $('.index .i-youshi .inner .list .item .num').click(function (e) { 
      e.preventDefault();
      var item = $(this).parent();
      $('.index .i-youshi .inner .list .item').removeClass('on');
      item.addClass('on');
    });
  }

  initModule = function (callbak) {
    domReady(function () {
      callbak(0);
      require(["swiper"], function (swiper) {
        banner(); pro();
      });
      youshi();
    });
  };
  return {
    initModule: initModule
  };
})