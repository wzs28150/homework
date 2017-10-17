define(['debug', 'loadmore'], function (debug, loadmore) {
  var initModule, news_list, news_content, loadmore = loadmore.initModule, debug = debug.initModule;
  news_list = function () {
    debug('新闻列表已加载');
    loadmore(5, 1, '.pic-news-list .item', '.loadmore');
  };
  news_content = function () {
    debug('新闻内容已加载');
  };
  initModule = function (callbak) {
    callbak(1);
  };
  return {
    initModule: initModule,
    news_list: news_list,
    news_content: news_content
  };
})