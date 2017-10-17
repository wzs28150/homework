define(['debug'], function (debug) {
  var initModule, debug = debug.initModule;
  initModule = function (callbak) {
    callbak(4);
    debug('社会责任已加载');
  };
  return {
    initModule: initModule
  };
})