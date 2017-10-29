define(['loadmore', 'debug'], function (loadmore, debug) {
  var initModule, debug = debug.initModule;

  initModule = function (callbak) {
    callbak(5);
    debug('人才招聘已加载');
  };
  return {
    initModule: initModule
  };
})
