define(['loadmore', 'debug'], function (loadmore, debug) {
  var initModule, debug = debug.initModule;

  initModule = function (callbak) {
    callbak(4);
    debug('项目资讯已加载');
  };
  return {
    initModule: initModule
  };
})
