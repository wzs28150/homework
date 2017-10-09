define(['domReady'], function(domReady) {
  var initModule, headerh = $('header').height(),ernavfix;
  ernavfix = function() {
    $(window).scroll(function() {
      var navH = $("#about-nav").offset().top;
      //获取滚动条的滑动距离
      var scroH = $(this).scrollTop();
      //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
      if (scroH >= navH) {
        $(".about").addClass('on');
      } else if (scroH < navH) {
        $(".about").removeClass('on');
      }
    })
  }
  initModule = function(callbak) {
    domReady(function() {
      callbak(0);
      ernavfix()
    });
  };
  return {
    initModule: initModule
  };
})
