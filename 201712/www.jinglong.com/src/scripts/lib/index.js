var indexModule, bannerpicchange, banner;
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

};

indexModule();
