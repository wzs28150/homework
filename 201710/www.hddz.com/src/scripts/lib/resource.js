define(['debug'], function(debug) {
  var initModule, debug = debug.initModule;

  initModule = function(callbak) {
    callbak(8);
    debug('下载中心已加载');
  };
  return {
    initModule: initModule
  };
})
