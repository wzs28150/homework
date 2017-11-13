/**
 * 页面无刷page分页类
 * data-noajax no 不使用无刷新
 * data-container 无刷新加载区域
 * data-fragment 无刷新目标区域
 * data-istop 是否回滚到顶部
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
define(['pagination'], function(pagination) {
  var initModule, pageselectCallback;

  $("#pagination").html('');
  /**
   * pajax 页面无刷新
   * @return {[type]} [description]
   */
  pageselectCallback = function(page_index, jq, item_class, prant_class, page_one_num) {
    var h = $('header').outerHeight()*2;
    $('.pagination a').smoothScroll({
      //滑动到的位置的偏移量
      offset: -h,
      //滑动的方向，可取 'top' 或 'left'
      direction: 'top',
      // 只有当你想重写默认行为的时候才会用到
      scrollTarget: prant_class,
      // 滑动开始前的回调函数。`this` 代表正在被滚动的元素
      beforeScroll: function() {

      },
      //滑动完成后的回调函数。 `this` 代表触发滑动的元素
      afterScroll: function() {

      },

    });
    var $arr = 0;
    $(item_class).hide();
    for (var i = 0; i < page_one_num; i++) {
      $arr = (page_index * page_one_num + i);
      $(item_class).eq($arr).show();
    }
  }

  initModule = function(total_num, item_class, page_class, prant_class, page_one_num) {
    var num_entries = total_num / page_one_num; //总页数
    $(page_class).pagination(num_entries, {
      num_edge_entries: 1, //边缘页数
      num_display_entries: 3, //主体页数
      callback: pageselectCallback,
      items_per_page: 1, //每页显示1项
      item_class: item_class,
      prant_class: prant_class,
      page_one_num: page_one_num,
      prev_text: '上一页',
      next_text: '下一页',
      //link_to: "#pagination-container"
    });
  };
  return {
    initModule: initModule
  };
})
