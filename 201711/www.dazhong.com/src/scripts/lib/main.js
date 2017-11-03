var initModule, animated_contents, minheight, alertinfo, exists, backtotop, fenleishow, loadtemp;
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
      $.get("./" + a + ".html",
        function(tempdata) {
          $('#' + a).html(tempdata);
          var myeval = eval;
          myeval(callback + '();');
        });
    });

  }
}
initModule = function() {
  var $ww = $(window).width();
  $('.scroller').scrollbar({
    '_callback':function(){ console.log(2);}
  });
  minheight();
  backtotop();
  loadtemp();
  animated_contents();
  $('.scroller-inner').scroll(function(event) {
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
