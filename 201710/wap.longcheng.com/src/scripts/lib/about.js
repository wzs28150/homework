define(['domReady', 'loadmore'], function (domReady, loadmore) {
  var initModule,bigpic,about_index;
  bigpic = function () {
    var bigswiper = new Swiper('.big-pic', {
      lazyLoading: true,
      preloadImages: false,
    });
    var smallswiper = new Swiper('.small-pic', {
      spaceBetween: 1,
      slidesPerView: 'auto',
      loopedSlides: 17,
      nextButton: '.small-r',
      prevButton: '.small-l'
    });
    $('.small-pic .swiper-slide').click(function () {
      if ($(this).hasClass("on"))
        return false;
      var index = $(this).index();
      bigswiper.slideTo(index, 1000, false);
      $(this).addClass("on").siblings().removeClass("on");
      var title = $(this).attr('data-title');
      $('.pannel .inner .middle .middle-bar .title').html(title);
    });
  }


  about_index = function () {
    require(["scroll"], function (scroll) {
      scroll.initModule('.right-inner')
    });
    require(["swiper"], function (swiper) {
      bigpic();
    });
  }

  initModule = function (callbak) {
    domReady(function () {
      callbak(1);
      require(["laydate"], function (laydate) {
        laydate.path = './src/scripts/package/laydate/';
        laydate.render({
          elem: '#starttime',
          format: 'yyyy/MM/dd'
        });
        laydate.render({
          elem: '#endtime',
          format: 'yyyy/MM/dd'
        });
      });
    });
  };
  return {
    initModule: initModule,
    about_index:about_index
  };
})