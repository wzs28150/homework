define([], function () {
  var initModule, router, navactive, sub_nav, backtotop;

  /**
   * 回到顶部
   * @return {[type]} [description]
   */
  backtotop = function () {
    // console.log(1);
    var min_height = 500;
    $(window).scroll(function () {
      //获取窗口的滚动条的垂直位置
      var s = $(window).scrollTop();
      //当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
      if (s > min_height) {
        $(".backtotop").fadeIn(100);
      } else {
        $(".backtotop").fadeOut(200);
      };
    });
    $('.backtotop a.totop').on('click', function (event) {
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
  navactive = function (i) {
    $('header nav>ul>li').removeClass('on');
    $('header nav>ul>li').eq(i).addClass('on');
    $('header nav>ul>li').stop().mouseenter(function () {
      $('header nav>ul>li>ul').hide();
      $('.sub-nav').hide();
      var t = $(this);
      if (t.find('ul').length > 0) {
        t.find('ul').show();
        $('.sub-nav').show();
      } else {
        $('header nav>ul>li>ul').hide();
        $('.sub-nav').hide();
      }
    }).mouseleave(function () {
      $('header nav>ul>li>ul').hide();
      $('.sub-nav').hide();
    });;
  };
  /**
   * 二级导航
   * @return {[type]} [description]
   */
  sub_nav = function (i) {

    $('.er-bar .er-nav a').stop().click(function () {
      /* Stuff to do when the mouse enters the element */
      $('.er-bar .er-nav a').removeClass('on')
      $(this).addClass('on');
      $('.position a').eq(2).html($(this).html());
      $("html, body").stop().animate({scrollTop: $(".er-bar-targat").offset().top-1 }, {duration: 500,easing: "swing"});
    });
    if ($(".er-bar-targat").length > 0) {
      $(window).scroll(function () {
        var navH = $(".er-bar-targat").offset().top;
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        //console.log(scroH+'/'+navH);
        if (scroH >= navH + 70) {
          $(".er-bar").addClass('on');
        } else if (scroH < navH + 70) {
          $(".er-bar").removeClass('on');
        }
      })
    }

  }
  /**
   * 路由设置
   * @return {[type]} [description]
   */
  router = function (article, state) {
    var action = $(article).attr('data-main');
    var eraction = $('.eraction').attr('data-fun');
    //console.log(action);
    //console.log(eraction);
    // 判断主action
    if (action) {
      //判断主二级action
      if (eraction) {
        //判断是否无刷新
        if (state && localStorage.mainaction && localStorage.mainaction == action) {
          //console.log(1)
          require(['./lib/' + action], function (action) {
            var str = "action." + eraction + "(function(a){})";
            eval(str);
            //console.log(str);
            sub_nav();
          });
        } else {
          localStorage.mainaction = action;
          //console.log(2)
          require(['./lib/' + action], function (action) {
            //console.log(action);
            action.initModule(function (a) {
              navactive(a);
              sub_nav();
            });
            var str = "action." + eraction + "(function(a){sub_nav();})"
            //console.log(str);
            eval(str);
          });
        }
      } else {
        localStorage.mainaction = action;
        //console.log(3)
        require(['./lib/' + action], function (action) {
          action.initModule(function (a) {
            navactive(a);
            sub_nav();
          });
        });
      }

    }
  };
  initModule = function (article, state) {

    router(article, state);

  };
  return {
    initModule: initModule
  };
})