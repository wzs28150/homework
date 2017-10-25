define(['debug', 'loadmore'], function(debug, loadmore) {
  var initModule, service_index, products_list, loadmore = loadmore.initModule,
    debug = debug.initModule;

  service_index = function(callbak) {
    callbak(0);
    debug('主导产品已加载');
  }

  service_licheng = function(callbak) {
    callbak(1);
    debug('光辉历程已加载');
  }

  service_tixi = function(callbak) {
    callbak(2);
    debug('项目服务体系已加载');
  }

  initModule = function(callbak) {
    callbak(7);
  };
  return {
    initModule: initModule,
    service_index: service_index,
    service_licheng: service_licheng,
    service_tixi: service_tixi
  };
})
