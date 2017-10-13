define(['domReady', 'loadmore'], function (domReady, loadmore) {
  var initModule, bigpic, about_index, about_zhaopin;
  bigpic = function () {
    var smallswiper = new Swiper('.small-pic', {
      spaceBetween: 2,
      slidesPerView: 'auto',
      loopedSlides: 17,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    });
    $('.small-pic .swiper-slide').click(function () {
      if ($(this).hasClass("on"))
        return false;
      var index = $(this).index();
      $(this).addClass("on").siblings().removeClass("on");
      var title = $(this).attr('data-title');
      var img = $(this).attr('data-img');
      $('.pic-change .title .container_1200').html(title);
      $('.pic-change .big-pic').css('background-image', 'url(' + img + ')');
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
  about_zhaopin = function () {
    $('.zp-tab a').click(function(){
      if ($(this).hasClass("on"))
        return false;
      var index = $(this).index();
      $(this).addClass("on").siblings().removeClass("on");
      $(this).parent().parent().find('.zp-content').hide();
      $(this).parent().parent().find('.zp-content').eq(index).fadeIn();
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
    about_index: about_index,
    about_zhaopin: about_zhaopin
  };
})