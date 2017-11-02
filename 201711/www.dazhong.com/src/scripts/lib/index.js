var indexModule, banner, new_pro,hot_pro;
//首页banner
banner = function() {
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
//最新产品滚动
new_pro = function() {
  var new_proswiper = new Swiper('.new_pro .swiper-container', {
    slidesPerView: 4,
    nextButton: '.new_pro .button-next',
    prevButton: '.new_pro .button-prev',
  });
}

hot_pro = function() {
  var new_proswiper = new Swiper('.hot_pro .swiper-container', {
    slidesPerView: 'auto',
    nextButton: '.hot_pro .button-next',
    prevButton: '.hot_pro .button-prev',
  });
}

indexModule = function() {
  banner();
  new_pro();
  hot_pro();
};

indexModule();
