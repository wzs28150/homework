define([], function() {
  var initModule, router, navactive, sub_nav, backtotop;

  /**
   * 回到顶部
   * @return {[type]} [description]
   */
  backtotop = function() {
    // console.log(1);
    var min_height = 500;
    $(window).scroll(function() {
      //获取窗口的滚动条的垂直位置
      var s = $(window).scrollTop();
      //当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
      if (s > min_height) {
        $(".backtotop").fadeIn(100);
      } else {
        $(".backtotop").fadeOut(200);
      };
    });
    $('.backtotop a.totop').on('click', function(event) {
      event.preventDefault();
      $('body,html').animate({
        scrollTop: 0,
      }, 700);
    });
  };
  /**
   * 导航选中状态
   * @param  {[type]} i [description]
   * @return {[type]}   [description]
   */
  navactive = function(i) {
    $('header nav>ul>li').removeClass('on');
    $('header nav>ul>li').eq(i).addClass('on');
  };
  /**
   * 二级导航
   * @return {[type]} [description]
   */
  sub_nav = function(i) {
    $('nav a').stop().mouseenter(function(event) {
      /* Act on the event */
      var i = $(this).index();
      $this = $(this);
      var $thisul = $('.submenu ul').eq(i);
      $('nav a').removeClass('hover');
      $this.addClass('hover');
      if ($thisul.find('li').length > 0) {
        $('.submenu ul').removeClass('on');
        $thisul.addClass('on');
        $('.submenu').stop().fadeIn();
      } else {
        $('.submenu').stop().fadeOut();
      }
    });
    $('header').stop().mouseleave(function(event) {
      /* Act on the event */
      $('nav a').removeClass('hover');
      $('.submenu ul').removeClass('on')
      $('.submenu').stop().fadeOut();
    });
    $('.submenu ul').stop().hover(function() {
      /* Stuff to do when the mouse enters the element */

      var i = $(this).index();
      if ($(this).find('li').length > 0) {
        $('nav a').removeClass('hover');
        $('nav a').eq(i).addClass('hover');
        $('.submenu ul').removeClass('on')
        $(this).addClass('on');
      } else {
        $('nav a').removeClass('hover');
        $('nav a').eq(i).addClass('hover');
        $('.submenu ul').removeClass('on')
        $('.submenu').fadeOut();
      }

    });
  }
  /**
   * 路由设置
   * @return {[type]} [description]
   */
  router = function(article, state) {
    var action = $(article).attr('data-main');
    var eraction = $('.eraction').attr('data-fun');
    //console.log(action); return false;
    //console.log(action);
    //console.log(eraction);
    // 判断主action
    if (action) {
      //判断主二级action
      if (eraction) {
        //判断是否无刷新
        if (state && localStorage.mainaction && localStorage.mainaction == action) {
          require(['./lib/' + action], function(action) {
            var str = "action." + eraction + "(function(a){})"
            eval(str);
            //console.log(str);
          });
        } else {
          localStorage.mainaction = action;
          
          require(['./lib/' + action], function(action) {
            action.initModule(function(a) {
              navactive(a);
            });
            var str = "action." + eraction + "(function(a){navactive(a);})"
            //console.log(str);
            eval(str);
          });
        }
      } else {
        localStorage.mainaction = action;
        require(['./lib/' + action], function(action) {
          action.initModule(function(a) {
            navactive(a);
          });
        });
      }

    }

    // if (action) {
    //   require(['./lib/' + action], function(action) {
    //     console.log(action);
    //     if (eraction) {
    //       console.log(eraction);
    //       var str = "action." + eraction + "(function(a){navactive(a);sub_nav(a);})"
    //       console.log(str);
    //       eval(str)
    //     }
    //     action.initModule(function(a) {
    //       navactive(a);
    //       sub_nav(a);
    //     });
    //   });
    // }
  };
  initModule = function(article, state) {

    router(article, state);

  };
  return {
    initModule: initModule
  };
})
