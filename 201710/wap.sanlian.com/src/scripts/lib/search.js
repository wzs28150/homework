define(['debug', 'loadmore'], function (debug, loadmore) {
  var initModule, debug = debug.initModule,
    loadmore = loadmore.initModule,
    highLightKeyWord, pro_list, news_list;

  highLightKeyWord = function (nodeID, key) {
    var NodeID = nodeID || "";
    var keyWord = key || "";
    var node = $(nodeID); //可使用document.getElementById替换  
    if (NodeID != "" && keyWord != "") {
      var pattern = new RegExp(keyWord, "gi");
      var html = node.html(); //可使用innerHTML替换  
      html = html.replace(pattern, "<span class=\"key\">" + keyWord + "</span>");
      node.html(html); //可使用innerHTML替换  
    }
  }

  news_list = function () {
    var urlinfo = window.location.href;
    var keywords = urlinfo.split('?')[1].split('=')[1]; //拆分url得到”=”后面的参数 
    highLightKeyWord('.search-list', decodeURI(keywords));

    //点击加载更多  d 默认显示几个 l 每次加载几个  f 循环的item m 点击更多按钮
    loadmore(4, 2, '.search .search-list .item', '.search .search-list .loadmore');
  }

  pro_list = function () {
    require(['photo'], function (photo) {
      photo('.demo-gallery');
    });
  }

  initModule = function (callbak) {
    callbak(99);
    debug('搜索已加载');

  };
  return {
    initModule: initModule,
    news_list: news_list,
    pro_list: pro_list
  };
})