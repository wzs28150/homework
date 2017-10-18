define(['debug'], function (debug) {
  var initModule, hr_index, debug = debug.initModule;
  hr_index = function (callbak) {
    debug('用人理念已加载');
    callbak(0);
  };
  hr_zhaomu = function (callbak) {
    debug('人才招募已加载');
    callbak(1);
    $('.hr .hr-list .item').click(function () {
      var des = $(this).find('.des');
      if (des.is(":hidden")) {
        des.show();
      } else {
        des.hide();
      }
    });
  };
  initModule = function (callbak) {
    callbak(7);
  };
  return {
    initModule: initModule,
    hr_index: hr_index,
    hr_zhaomu: hr_zhaomu
  };
})