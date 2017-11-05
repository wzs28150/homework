var brandModule, banner, multiple, tiaojiao, duoxuan, pajax, getUrlParam;

//筛选选项
multiple = function() {
  $(document).off('click', 'a[data-ajax!=no]').on('click', '.tiaojiao-sort .sl .inner .sl-list ul li a', function(event) {
    event.preventDefault();
    /* Act on the event */
    var $this = $(this);
    var $checkbox = $(this).parent('li').parent('ul').parent('.sl-list').parent('.inner').prev('input');
    var $isChecked = $checkbox.is(":checked");
    var url = '/products.html',
      container = '.brand-main-list',
      fragment = '.brand-main-list';

    if ($isChecked) {
      //多选状态

      $this.parent('li').toggleClass('selected');
      duoxuan();
    } else {
      //非多选状态
      if ($.support.pjax) {
        $.pjax({
          url: url,
          container: 'main',
          fragment: 'main',
          timeout: 8000,
          scrollTo: false
        });
        $.pjax.click(event, container);
        pajax(url, container, fragment);
      }
    }

    //return false;

  });


}
//无刷新加载
pajax = function(url, container, fragment) {
  $(document).on('pjax:send', function(event) { //pjax链接点击后显示加载动画
    $("#progress").removeClass("done"); //完成，隐藏进度条
    $('.pjaxcontainer').removeClass('on');
    start();
    $({
      property: 0
    }).animate({
      property: 100
    }, {
      duration: 1000,
      step: function() {
        var percentage = Math.round(this.property);

        $('#progress').css('width', percentage + "%");
        if (percentage == 100) {
          $("#progress").addClass("done"); //完成，隐藏进度条
        }
      }
    });
  });

  $(document).on('pjax:success', function(data, status, xhr, options) {
    $(window).unbind('scroll');
  });

  $(document).on('pjax:complete', function() {
    $("#progress").addClass("done"); //完成，隐藏进度条
  });

  $(document).on('pjax:end', function(data, status, xhr, options) {
    //console.log(data);
    $('.pjaxcontainer').removeClass('on');
    animated_contents();
    //$('title').text(data.relatedTarget.innerText + ' - 润泰');
  });
}
//获取url参数
getUrlParam = function(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return unescape(r[2]);
  return null; //返回参数值
}
//多选选中状态判断
duoxuan = function() {
  var $totlecheckbox = $('.tiaojiao-sort .sl input');
  var $istotleChecked = $totlecheckbox.is(":checked");
  var $inner = $totlecheckbox.next('.inner');
  var li = $inner.find('li.selected');
  var a = $inner.find('.dx-ctrl a');
  if (li.length > 0) {
    a.removeClass('disable');
  } else {
    a.addClass('disable');
  }
}
tiaojiao = function() {
  $('.tiaojiao-sort .sl').each(function(i) {
    console.log(i)
  })
}
indexModule = function() {
  //设置导航选中
  navactive(0);
  //  $('.change_duoxuan').attr('checked', false);
  duoxuan();
  multiple();
};

indexModule();
