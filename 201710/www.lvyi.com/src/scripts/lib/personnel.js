define(['debug'], function(debug) {
  var initModule, personnel_index, debug = debug.initModule,personnel_jiaoyu,personnel_zhaopin;
  personnel_index = function(callbak) {
    debug('人才队伍已加载');
    callbak(0);
  };
  personnel_jiaoyu = function(callbak) {
    debug('教育培训已加载');
    callbak(1);
  };
  personnel_zhaopin = function(callbak) {
    debug('人才招聘已加载');
    callbak(2);
  };
  initModule = function(callbak) {
    callbak(6);
  };
  return {
    initModule: initModule,
    personnel_index: personnel_index,
    personnel_jiaoyu:personnel_jiaoyu,
    personnel_zhaopin:personnel_zhaopin
  };
})
