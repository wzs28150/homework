define(['domReady', 'loadmore'], function (domReady, loadmore) {
  var initModule, news_list, news_content, loadmore = loadmore.initModule;
  news_list = function () {
    
  };
  news_content = function () {

  };
  initModule = function (callbak) {
    domReady(function () {
      callbak(5);
    });
  };
  return {
    initModule: initModule
  };
})