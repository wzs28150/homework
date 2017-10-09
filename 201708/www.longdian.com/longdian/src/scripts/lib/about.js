define(['domReady', 'loadmore'], function (domReady, loadmore) {
  var initModule, timer, about_index, about_honor, about_culture, about_manager, loadmore = loadmore.initModule;

  timer = function () {
    var timerswiper = new Swiper('.timer .swiper-container', {
      slidesPerView: 3,
      spaceBetween: 0,
      slideToClickedSlide: true,
      nextButton: '.swiper-next',
      prevButton: '.swiper-prev',
    });
    $('.timer .swiper-slide').click(function () {
      $('.timer .swiper-slide').removeClass('on');
      $(this).addClass('on');
      var url = $(this).find('.text').attr('data-url');
      $('.timer-content').load(url);
    });
  }

  about_index = function () {
    require(["swiper"], function (swiper) {
      timer();
    });
  }
  about_honor = function(){
    //console.log('honor is load')
    //点击加载更多  d 默认显示几个 l 每次加载几个  f 循环的item m 点击更多按钮
    loadmore(12, 3, '.about .honor-list .list .item', '.loadmore');
    require(["litebox"], function (litebox) {
      $('.litebox').liteBox();
    });
    

  }
  about_culture = function(){
    //console.log('culture is load')
  }
  about_manager = function(){
    //console.log('manager is load')
  }
  initModule = function (callbak) {
    domReady(function () {
      callbak(0);

    });
  };
  return {
    initModule: initModule,
    about_index: about_index,
    about_honor:about_honor,
    about_culture:about_culture,
    about_manager:about_manager
  };
})