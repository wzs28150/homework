define(['debug', 'loadmore'], function (debug, loadmore) {
  var initModule, news_list, news_content, debug = debug.initModule;
  news_list = function () {
    debug('新闻列表已加载')
  };
  news_content = function () {

  };
  initModule = function (callbak) {
    callbak(3);
  };
  return {
    initModule: initModule,
    news_list: news_list,
    news_content: news_content
  };
})
