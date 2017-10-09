define(['domReady', 'loadmore'], function (domReady, loadmore) {
  var initModule;

  initModule = function (callbak) {
    domReady(function () {
      callbak(1);
    });
  };
  return {
    initModule: initModule
  };
})