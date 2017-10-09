define(['domReady'], function(domReady) {
  var initModule, headerh = $('header').height(),
    room_change, room_change_tab;

  room_change = function($i) {
    var section1 = new Swiper('.section' + $i + ' .swiper-container', {
      loop: true,
      autoplay: 3000,
      speed: 1000,
      onTransitionStart: function(swiper) {
        //console.log(swiper.realIndex);
        $('.section' + $i + ' .room_pic_list .item').removeClass('on');
        $('.section' + $i + ' .room_pic_list .item').eq(swiper.realIndex).addClass('on');
      }
    });
    $('.section' + $i + ' .room_pic_list .item').click(function(event) {
      $('.section' + $i + ' .room_pic_list .item').removeClass('on');
      $(this).addClass('on');
      var id = $(this).index() + 1;
      section1.slideTo(id, 1000, false);
    });
  }
  room_change_tab = function() {
    $('.change-nav a').click(function(event) {
      var $i = $(this).index();
      $('.room_pic_content').hide();
      $('.change-nav a').removeClass('on');
      $(this).addClass('on');
      $('.room_pic_content').eq($i).fadeIn('fast', function() {
        room_change($i + 1);
      });
    });
  }


  initModule = function(callbak) {
    domReady(function() {
      callbak(1);
      require(["swiper"], function(swiper) {
        room_change(1);
        room_change_tab();
      });
      require(["laydate"], function(laydate) {
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
    initModule: initModule
  };
})
