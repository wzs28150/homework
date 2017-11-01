define(['loadmore', 'debug'], function (loadmore, debug) {
  var initModule, debug = debug.initModule;

  initModule = function (callbak) {
    callbak(3);
    debug('部门介绍已加载');
  };
  return {
    initModule: initModule
  };
})
