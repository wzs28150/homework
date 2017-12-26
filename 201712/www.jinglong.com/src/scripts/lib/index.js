var indexModule, notice, newshuadong, newspic;
//首页banner
notice = function() {
  var bigswiper = new Swiper('.index .notice .swiper-container', {
    autoplay: 3000,
    speed: 1000,
    loop: true,
    slidesPerView: 'auto'
  });
};

newshuadong = function() {
  var newshuadongswiper = new Swiper('.index .news .news-huadong .swiper-container', {
    speed: 1000
  });
  $('body').off('click', '.index .news .news-huadong .news-huadong-nav a').on('click', '.index .news .news-huadong .news-huadong-nav a', function(e) {
    var i = $(this).index();
    $('.index .news .news-huadong .news-huadong-nav a').removeClass('on');
    $(this).addClass('on');
    newshuadongswiper.slideTo(i, 1000, false);
  });
}
newspic = function() {
  var newspicswiper = new Swiper('.index .news .pic', {
    autoplay: 3000,
    speed: 1000,
    loop: true,
    pagination: '.index .news .pic .swiper-pagination',
    paginationClickable: true,
  });
}
indexModule = function() {
  //设置导航选中
  navactive(0);
  //banner切换
  notice();
  newshuadong();
  newspic();
};

indexModule();
