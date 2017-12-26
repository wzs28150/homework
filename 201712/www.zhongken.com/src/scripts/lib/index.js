var indexModule, first_swiper, p1, p3;
//首页banner
first_swiper = function() {
  var firstswiper = new Swiper('article.swiper-container', {
    direction: 'vertical',
    mousewheelControl: true,
    speed: 1000,
    hashnav: true,
    hashnavWatchState: true,
    simulateTouch: false,
    onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
      swiperAnimateCache(swiper); //隐藏动画元素
      swiperAnimate(swiper); //初始化完成开始动画
      $('.article-nav .item').removeClass('on');
      console.log(swiper.realIndex);
      $('.article-nav .item').eq(swiper.realIndex).addClass('on');
    },
    onSlideChangeEnd: function(swiper) {
      swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
      $('.article-nav .item').removeClass('on');
      console.log(swiper.realIndex);
      $('.article-nav .item').eq(swiper.realIndex).addClass('on');
    }
  });
};

p1 = function() {
  var firstswiper = new Swiper('.p1.swiper-container', {
    autoplay: 2500,
    speed: 1500,
    loop: true,
    pagination: '.p1 .swiper-pagination',
    paginationClickable: true,
    parallax: true,

  });
};
p3 = function() {
  var firstswiper = new Swiper('.p3.swiper-container', {
    speed: 1500,
    pagination: '.p1 .swiper-pagination',
    paginationClickable: true,
    parallax: true,
  });
  $('body').off('click', 'article.swiper-container .swiper-slide .about-nav .item.click').on('click', 'article.swiper-container .swiper-slide .about-nav .item.click', function() {
    var i = ($(this).index() + 1) / 2;
    console.log(i);
    firstswiper.slideTo(i, 1000, false);
  })
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
  first_swiper();
  p1();
  p3();
};

indexModule();