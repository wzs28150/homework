define(['loadmore', 'debug'], function (loadmore, debug) {
  var initModule, debug = debug.initModule;

  initModule = function (callbak) {
    callbak(2);
    debug('公司介绍已加载');
  };
  return {
    initModule: initModule
  };
})
