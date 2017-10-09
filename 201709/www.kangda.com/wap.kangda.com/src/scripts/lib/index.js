define(['domReady'], function (domReady) {
  var initModule, banner, headerh = $('header').height(),
    pro, youshi, news;
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
      nextButton: '.i-pro .swiper-button-next',
      prevButton: '.i-pro .swiper-button-prev',
      slidesPerView: 2,
      spaceBetween: 10
    });
  }

  youshi = function () {
    $('.i-youshi-nav a').click(function (e) {
      e.preventDefault();
      $i = $(this).index();
      $('.youshi-content').hide();
      $('.youshi-content').eq($i).show();
      var src = $('.youshi-content').eq($i).attr('data-img')
      $('.i-youshi-nav img').attr('src', src)
    });
  }

  news = function () {
    var newsswiper = new Swiper('.i-news .swiper-container', {
      pagination: '.i-news .swiper-pagination',
      paginationClickable: true,
    });
  }

  initModule = function (callbak) {
    domReady(function () {
      callbak(99);
      require(["swiper"], function (swiper) {
        banner();
        pro();
        news();
      });
      youshi();
    });
  };
  return {
    initModule: initModule
  };
})