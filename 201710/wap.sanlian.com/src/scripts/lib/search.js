define(['domReady', 'debug', 'loadmore'], function (domReady, debug, loadmore) {
  var initModule, debug = debug.initModule, loadmore = loadmore.initModule,GetQueryString;

  GetQueryString = function (name)
  {
       var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
       var r = window.location.search.substr(1).match(reg);
       if(r!=null)return  unescape(r[2]); return null;
  }

  initModule = function (callbak) {
    $('.key').html(GetQueryString('keywords'));
    domReady(function () {
      debug('搜索已加载');
      callbak(99);
      //点击加载更多  d 默认显示几个 l 每次加载几个  f 循环的item m 点击更多按钮
      loadmore(4, 2, '.search .search-list .item', '.search .search-list .loadmore');
    });
  };
  return {
    initModule: initModule
  };
})