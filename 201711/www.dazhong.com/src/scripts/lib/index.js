
  var indexModule, banner;
  //首页banner
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


  indexModule = function () {
    banner();
  };

  indexModule();
