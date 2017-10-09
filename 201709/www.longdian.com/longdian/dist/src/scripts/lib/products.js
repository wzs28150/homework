define(['domReady', 'loadmore'], function (domReady, loadmore) {
  var initModule, products_show, products_list, loadmore = loadmore.initModule;
  products_show = function(){

  };
  products_list = function () {
    loadmore(8, 4, '.products .products-list .list .item', '.loadmore');
  };
  initModule = function (callbak) {
    domReady(function () {
      callbak(2);
    });
  };
  return {
    initModule: initModule,
    products_show: products_show,
    products_list: products_list
  };
})