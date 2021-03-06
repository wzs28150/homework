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
    $('#myInput').attr('checked',false);
    $('#searchchange').attr('checked', false);
    $('nav a').removeClass('on');
    $('nav a').eq(i).addClass('on');
    $('body').undelegate('nav > ul > li  a', 'click');
    $('body').delegate('nav > ul > li  a', 'click', function () {
      //$('nav > ul > li >ul').hide();
      var ul = $(this).next('ul');
      if (ul.length > 0) {
        if (ul.is(":hidden")) {
          ul.show(); 
        } else {
          ul.hide(); 
        }
      } else {
        $('nav > ul > li >ul').hide();
        $('#myInput').attr('checked', false)
      }
    });
  };
  /**
   * 二级导航
   * @return {[type]} [description]
   */
  sub_nav = function (i) {
    $('.position .er-nav a').eq(i).addClass('on');
    $('.position .er-nav a').stop().click(function () {
      /* Stuff to do when the mouse enters the element */
      $('.position .er-nav a').removeClass('on')
      $(this).addClass('on');
    });
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
          require(['./lib/' + action], function (action) {
            var str = "action." + eraction + "(function(a){sub_nav(a);})"
            eval(str);
            //console.log(str);
            // navactive(a);
            
          });
        } else {
          localStorage.mainaction = action;
          require(['./lib/' + action], function (action) {
            //console.log(action);
            action.initModule(function (a) {
              navactive(a);
            });
            var str = "action." + eraction + "(function(a){sub_nav(a);})"
            //console.log(str);
            eval(str);
          });
        }
      } else {
        localStorage.mainaction = action;
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