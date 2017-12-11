var indexModule, notice;
//首页banner
notice = function() {
  var bigswiper = new Swiper('.index .notice .swiper-container', {
    autoplay: 3000,
    speed: 1000,
    loop: true,
    slidesPerView: 'auto'
  });
};


indexModule = function() {
  //设置导航选中
  navactive(0);
  //banner切换
  notice();
};

indexModule();