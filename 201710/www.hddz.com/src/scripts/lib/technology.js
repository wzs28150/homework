define(['debug'], function (debug) {
  var initModule, technology_index, debug = debug.initModule,
    technology_zhuangbei,technology_keyan,technology_zhuanli;
  technology_index = function (callbak) {
    debug('设计与制造已加载');
    callbak(0);
  };
  technology_zhuangbei = function (callbak) {
    debug('装备与制造能力已加载');
    callbak(1);
  };
  technology_keyan = function (callbak) {
    debug('科研成果已加载');
    callbak(2);
  };
  technology_zhuanli = function (callbak) {
    debug('专利成果已加载');
    callbak(3);
  };
  initModule = function (callbak) {
    callbak(4);
  };
  return {
    initModule: initModule,
    technology_index: technology_index,
    technology_zhuangbei: technology_zhuangbei,
    technology_keyan:technology_keyan,
    technology_zhuanli:technology_zhuanli
  };
})
