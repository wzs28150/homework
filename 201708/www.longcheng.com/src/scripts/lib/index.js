define(['domReady'], function(domReady) {
  var initModule, banner, headerh = $('header').height();
  banner = function() {
    $('.big-pic,.banner').height($(window).height() - headerh);
    var bigswiper = new Swiper('.big-pic', {
      autoplay: 3000,
      speed: 1000,
      loop: true,
      // effect: 'fade',
      nextButton: '.i_l',
      prevButton: '.i_r',
      onTransitionStart: function(swiper) {
        //console.log(swiper.realIndex);
        $('.index .banner .samill-pic .slide').removeClass('on');
        $('.index .banner .samill-pic .slide').eq(swiper.realIndex).addClass('on');
      }
    });
    $('.index .banner .samill-pic .slide').click(function(event) {
      /* Act on the event */
      $('.index .banner .samill-pic .slide').removeClass('on');
      $(this).addClass('on');
      var id = $(this).index()+1;
      bigswiper.slideTo(id, 1000, false);
    });
  };

  initModule = function(callbak) {
    domReady(function() {
      callbak(99);
      require(["swiper"], function(swiper) {
        banner();
      });
    });
  };
  return {
    initModule: initModule
  };
})
