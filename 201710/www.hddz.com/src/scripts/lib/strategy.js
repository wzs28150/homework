define(['debug'], function(debug) {
  var initModule, strategy_index, debug = debug.initModule;

  strategy_index = function(callbak) {
    debug('质量保证已加载');
    callbak(0);
  };



  initModule = function(callbak) {
    callbak(5);
  };
  return {
    initModule: initModule,
    strategy_index: strategy_index
  };
})
