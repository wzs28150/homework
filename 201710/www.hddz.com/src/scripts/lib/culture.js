define(['debug'], function(debug) {
  var initModule, culture_index, debug = debug.initModule,
    linian_qiehuan,
    culture_linian, culture_xingwei;
  culture_index = function(callbak) {
    debug('视觉识别已加载');
    callbak(0);
  };
  culture_linian = function(callbak) {
    debug('理念识别已加载');
    callbak(1);
    require(["swiper"], function(swiper) {
      linian_qiehuan();
    });
  };
  culture_xingwei = function(callbak) {
    debug('行为识别已加载');
    callbak(2);
    $('.xingzheng-item .left a').click(function() {
      var index = $(this).index();
      $(this).parent('.left').find('a').removeClass('on');
      $(this).addClass('on');
      $(this).parent('.left').parent('.xingzheng-content').find('.right').hide();
      $(this).parent('.left').parent('.xingzheng-content').find('.right').eq(index).show();
    });

  };
  culture_jianshe = function(callbak) {
    debug('文化建设已加载');
    callbak(3);
  };

  linian_qiehuan = function() {
    var mySwiper2 = new Swiper('#swiper-container2', {
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slidesPerView: 'auto',
      spaceBetween: 10,

      onTap: function() {
        mySwiper3.slideTo(mySwiper2.clickedIndex)
      }
    })
    var mySwiper3 = new Swiper('#swiper-container3', {
      nextButton: '.linian-r',
      prevButton: '.linian-l',
      onSlideChangeStart: function() {
        updateNavPosition()
      }

    })

    function updateNavPosition() {
      $('#swiper-container2 .active-nav').removeClass('active-nav')
      var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');


      if (!activeNav.hasClass('swiper-slide-visible')) {
        console.log(1);
        if (activeNav.index() > mySwiper2.activeIndex) {
          console.log(2);
          var thumbsPerNav = Math.floor(mySwiper2.width / activeNav.width()) - 1
          mySwiper2.slideTo(activeNav.index() - thumbsPerNav)
        } else {
          console.log(3);
          mySwiper2.slideTo(activeNav.index())
        }
      }
    }

  }
  initModule = function(callbak) {
    callbak(2);
  };
  return {
    initModule: initModule,
    culture_index: culture_index,
    culture_linian: culture_linian,
    culture_xingwei: culture_xingwei,
    culture_jianshe: culture_jianshe
  };
})
