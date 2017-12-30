var indexModule, bannerpicchange, banner, pro;
//首页banner
banner = function() {
  var bigswiper = new Swiper('.banner', {
    autoplay: 3000,
    speed: 1000,
    loop: true,
    pagination: '.banner .swiper-pagination',
    paginationClickable: true,
    onInit: function(swiper) {
      //Swiper初始化了
      //alert(swiper.activeIndex);提示Swiper的当前索引
      if ($(window).width() < 980) {
        bannerpicchange('wap');
      } else {
        bannerpicchange('pc');
      }
    }
  });
};

bannerpicchange = function(type) {
  $('.banner .swiper-slide').each(function(index, el) {
    if (type == 'wap') {
      $(this).css('background-image', 'url(' + $(this).attr('data-wap-img') + ')');
    } else {
      $(this).css('background-image', 'url(' + $(this).attr('data-pc-img') + ')');
    }
  });
}
pro = function() {
  var procontentswiper = new Swiper('.pro-content', {
    //autoplay: 3000,
    speed: 1000,
    effect: 'fade',
    prevButton: '.pro-nav .swiper-button-prev',
    nextButton: '.pro-nav .swiper-button-next',
    onSlideChangeStart: function() {

      updateNavPosition()
    }

  });
  var pronavswiper = new Swiper('.pro-nav .swiper-container', {
    //autoplay: 3000,
    speed: 1000,
    slidesPerView: 6,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    onTap: function() {
      procontentswiper.slideTo(pronavswiper.clickedIndex)
    }

  });

  function updateNavPosition() {
    $('.pro-nav .active-nav').removeClass('active-nav')
    var activeNav = $('.pro-nav .swiper-slide').eq(procontentswiper.activeIndex).addClass('active-nav');
    if (!activeNav.hasClass('swiper-slide-visible')) {
      if (activeNav.index() > procontentswiper.activeIndex) {
        var thumbsPerNav = Math.floor(procontentswiper.width / activeNav.width()) - 1
        procontentswiper.slideTo(activeNav.index() - thumbsPerNav)
      } else {
        procontentswiper.slideTo(activeNav.index())
      }
    }
  }

}
indexModule = function() {
  //设置导航选中
  navactive(0);
  //banner切换
  banner();

  $(window).off("debouncedresize").on("debouncedresize", function(event) {
    // Your event handler code goes here.
    if ($(window).width() < 980) {
      bannerpicchange('wap');
    } else {
      bannerpicchange('pc');
    }
  });
  if ($(window).width() < 980) {
    bannerpicchange('wap');
  } else {
    bannerpicchange('pc');
  }
  pro();

};

indexModule();