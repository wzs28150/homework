define(['debug'], function(debug) {
  var initModule, debug = debug.initModule,
    resource_index;
  resource_index = function(callbak) {
    callbak(0);
  };
  initModule = function(callbak) {
    callbak(8);
    debug('下载中心已加载');
  };
  return {
    initModule: initModule,
    resource_index: resource_index
  };
})
