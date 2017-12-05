var initModule, animated_contents, minheight, alertinfo, exists, backtotop, fenleishow, loadtemp, navactive, scrollto, numselect,search;
/**
 * 判断dom是否存在
 * @param  {[type]} selector [description]
 * @return {[type]}          [description]
 */
exists = function(selector) {
  "use strict";
  return (jQuery(selector).length > 0);
};

/**
 * 动画设置
 * @return {[type]} [description]
 */
animated_contents = function() {
  "use strict";
  if (exists('.animate-element')) {

    $(".animate-element:in-viewport").each(function(i) {

      var $this = $(this);
      if (!$this.hasClass('in-viewport')) {
        setTimeout(function() {
          $this.addClass('in-viewport');
        }, 100 * i);
      }
    });
  }
}

/**
 * 导航选中状态
 * @param  {[type]} i [description]
 * @return {[type]}   [description]
 */
navactive = function(i) {
  $('footer > ul > li').removeClass('on');
  $('footer > ul > li').eq(i).addClass('on');
  $('body').off('click','footer > ul > li').on('click','footer > ul > li',function(){
      if($(this).find('ul').length>0){
        $(this).find('ul').fadeToggle();
        $(this).toggleClass('on');
      }
  })
};


/**
 * 弹窗
 * @param  {[type]} info [description]
 * @param  {[type]} aurl [description]
 * @return {[type]}      [description]
 */
alertinfo = function(info, aurl) {
  $('.alert_player').fadeIn();
  $('.alert_player .info').html(info);
  if (aurl === undefined) {} else {
    $('.alert_player .queren_btn,.alert_player .bg').click(function() {
      location.href = aurl;
    })
  }

};

backtotop = function() {
  $("#backtotop").on("click", function() {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
}

numselect = function() {

  $('.num-select .jia').click(function(event) {
    /* Act on the event */
    var val = Number($(this).prev('.number').val());
    $(this).prev('.number').val(val + 1);
  });
  $('.num-select .jian').click(function(event) {
    /* Act on the event */
    var val = Number($(this).next('.number').val());
    if (val > 1) {
      $(this).next('.number').val(val - 1);
    }
  });
}
minheight = function() {
  var hh = $('header').height();
  var fh = $('footer').height();
  var fqh = $('.footer-quick').height();
  var wh = $(window).height();
  var nh = $('nav').height();
  var mh;
  mh = $(window).height() - fh - hh - fqh;
  if (mh < 458) {
    mh = 458;
  }
  $('article').css('min-height', mh + 'px');
}
search = function(){
  $('body').off('focus','.search input').on('focus','.search input',function(){
    $('.search').addClass('on');
  }).on('blur','.search input',function(){
    $('.search').removeClass('on');
  })
}
fenleishow = function() {
  $('.fenlei>ul').css({
    "display": "block"
  })
}
loadtemp = function() {
  if (exists('.jiazai')) {
    $('.jiazai').each(function(index, el) {
      var a = $(this).attr('id');
      var callback = $(this).attr('data-callback');
      if (callback) {
        var result = callback.split(",");
      }


      $.get("./" + a + ".html",
        function(tempdata) {
          $('#' + a).html(tempdata);
          if (callback) {
            var myeval = eval;
            for (var i = 0; i < result.length; i++) {
              var r = result[i].split(":");
              if (r[1]) {
                myeval(r[0] + '(' + r[1] + ');');
              } else {
                myeval(r[0] + '();');
              }

            }
          }
        });
    });

  }
}
//滚动到指定位置
scrollto = function() {
  $('.scrollto').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    var id = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(id).offset().top
    }, 800);
  });

}
initModule = function() {
  var $ww = $(window).width();
  minheight();
  backtotop();
  loadtemp();
  scrollto();
  numselect();
  animated_contents();
  search();
  $(window).scroll(function(event) {
    animated_contents();
  });
  $(window).on('debouncedresize', function() {
    minheight();
  });

  $('.alert_player .bg,.alert_player .queren_btn').click(function() {
    $('.alert_player').fadeOut();
  });
};
$(document).ready(function() {
  initModule();
});
