define(['loadmore', 'debug'], function (loadmore, debug) {
  var initModule, debug = debug.initModule;

  initModule = function (callbak) {
    callbak(1);
    debug('集团介绍已加载'); 
  };
  return {
    initModule: initModule
  };
})
