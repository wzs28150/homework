var indexModule, banner, jijieqiehuan, floorqiehuan;
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
jijieqiehuan = function() {
  var swiper = new Swiper('.jijie-pro .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbarHide: false,
    scrollbar: '.jijie-pro .swiper-scrollbar',
    mousewheel: true,
  });

}

floorqiehuan = function() {
  $('.floor').each(function(index, el) {
    var i = index + 1;
    var floorswiper = new Swiper('.floor_' + i + ' .swiper-container', {
      autoplay: 3000,
      speed: 1000,
      loop: true,
      pagination: '.floor_' + i + ' .swiper-pagination',
      paginationClickable: true,
    });
  });
}

indexModule = function() {
  //设置底部导航选中
  navactive(0);
  //banner切换
  banner();
  //季节滚动
  jijieqiehuan();
  //楼层滚动
  floorqiehuan();

};

indexModule();