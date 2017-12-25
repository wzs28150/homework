var initModule, animated_contents, minheight, alertinfo, exists, backtotop, fenleishow, loadtemp, navactive, scrollto, html_overflow, scroll, AddFavorite, SetHome;
/**
 * 判断dom是否存在
 * @param  {[type]} selector [description]
 * @return {[type]}          [description]
 */
exists = function(selector) {
  "use strict";
  return (jQuery(selector).length > 0);
};

html_overflow = function(boolen) {
  if (boolen) {
    $('html').css('overflow-y', 'scroll');
  } else {
    $('html').css('overflow', 'hidden');
  }
}

//设为首页
SetHome = function(obj, url) {
  try {
    obj.style.behavior = 'url(#default#homepage)';
    obj.setHomePage(url);
  } catch (e) {
    if (window.netscape) {
      try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
      } catch (e) {
        alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
      }
    } else {
      alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" + url + "】设置为首页。");
    }
  }
}

//收藏本站
AddFavorite = function(title, url) {
  try {
    window.external.addFavorite(url, title);
  } catch (e) {
    try {
      window.sidebar.addPanel(title, url, "");
    } catch (e) {
      alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请进入新网站后使用Ctrl+D进行添加");
    }
  }
}
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
  $('header nav a').removeClass('on');
  $('header nav a').eq(i).addClass('on');
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


minheight = function() {
  var hh = $('header').height();
  var fh = $('footer').height();
  var wh = $(window).height();
  var nh = $('nav').height();
  var mh;
  mh = $(window).height() - fh - hh;
  if (mh < 458) {
    mh = 458;
  }
  $('article').css('min-height', mh + 'px');
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
                myeval(r[0] + '("' + r[1] + '");');
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
scroll = function() {
  $('.scroller').scrollbar();
}
initModule = function() {
  var $ww = $(window).width();
  minheight();
  backtotop();
  loadtemp();
  scrollto();
  animated_contents();
  scroll();
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