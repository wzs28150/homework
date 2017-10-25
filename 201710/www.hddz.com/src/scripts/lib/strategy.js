define(['debug'], function(debug) {
  var initModule, strategy_index, debug = debug.initModule,strategy_anquan;

  strategy_index = function(callbak) {
    debug('质量保证已加载');
    callbak(0);
  };

  strategy_anquan = function(callbak) {
    debug('安全与环保已加载');
    callbak(1);
  };

  initModule = function(callbak) {
    callbak(5);
  };
  return {
    initModule: initModule,
    strategy_index: strategy_index,
    strategy_anquan:strategy_anquan
  };
})
