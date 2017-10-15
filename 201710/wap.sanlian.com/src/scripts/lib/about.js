define(['loadmore', 'debug'], function (loadmore, debug) {
  var initModule, about_index, debug = debug.initModule,
    about_contact, about_culture, about_honor, about_organization;


  about_index = function (callbak) {
    callbak(0);
    debug('公司简介已加载')
  };

  about_organization = function (callbak) {
    callbak(1);
    debug('资质荣誉已加载')
  };

  about_honor = function (callbak) {
    callbak(2);
    debug('资质荣誉已加载')
  };

  about_culture = function (callbak) {
    callbak(3);
    debug('企业文化已加载')
  };

  about_contact = function (callbak) {
    callbak(4);
    debug('联系我们已加载')
  };

  initModule = function (callbak) {
    callbak(1);
    debug('关于三联已加载')
  };

  return {
    initModule: initModule,
    about_index: about_index,
    about_contact: about_contact,
    about_culture: about_culture,
    about_honor: about_honor,
    about_organization: about_organization
  };
})