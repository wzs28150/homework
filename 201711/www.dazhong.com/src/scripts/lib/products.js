var brandModule, banner, multiple, tiaojiao, duoxuan, pajax, getUrlParam, changeURLArg, addmore, select, pro_main_top;

//筛选选项
multiple = function() {
  $(document).off('click', '.tiaojiao-sort .sl .inner .sl-list ul li a').on('click', '.tiaojiao-sort .sl .inner .sl-list ul li a', function(event) {
    event.preventDefault();
    /* Act on the event */
    var $this = $(this);
    var $checkbox = $(this).parent('li').parent('ul').parent('.sl-list').parent('.inner').prev('input');
    var $isChecked = $checkbox.is(":checked");
    var url = window.location.protocol + '//' + window.location.host + window.location.pathname + '?1=1',
      container = '.brand-main-list',
      fragment = '.brand-main-list';

    if ($isChecked) {
      $this.parent('li').toggleClass('selected');
      //判断按钮是否可点击
      duoxuan();
      //点击确定
      $(document).off('click', '.tiaojiao-sort .sl .sl-list .dx-ctrl a').on('click', '.tiaojiao-sort .sl .sl-list .dx-ctrl a', function(event) {
        var $li = $(this).parent('.dx-ctrl').parent('.sl-list').find('ul li.selected');
        if ($li.length > 0) {
          var type = $li.eq(0).find('a').attr('data-type'),
            value = '';
          $li.each(function(index, el) {
            value = value + ',' + $li.eq(index).find('a').attr('data-value');
          });
          url = changeURLArg(window.location.href, type, value.substring(1));
          if ($.support.pjax) {
            $.pjax({
              url: url,
              container: container,
              fragment: container,
              timeout: 8000,
              scrollTo: false,
              replace: true
            });
            $.pjax.click(event, container);
            pajax(url, container, fragment, function() {
              $checkbox.attr('checked', false);
            });
          }
        }
      });

    } else {
      //非多选状态
      var type = $(this).attr('data-type');
      var value = $(this).attr('data-value');
      url = changeURLArg(window.location.href, type, value);
      if ($.support.pjax) {
        $.pjax({
          url: url,
          container: container,
          fragment: container,
          timeout: 8000,
          scrollTo: false,
          replace: true
        });
        $.pjax.click(event, container);
        pajax(url, container, fragment);
      }
    }

    //return false;

  });


}

//无刷新加载
pajax = function(url, container, fragment, callback) {
  $(document).on('pjax:send', function(event) { //pjax链接点击后显示加载动画
    $("#progress").removeClass("done"); //完成，隐藏进度条
    $('.pjaxcontainer').removeClass('on');
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

  $(document).on('pjax:success', function(data, status, xhr, options) {});

  $(document).on('pjax:complete', function() {
    $("#progress").addClass("done"); //完成，隐藏进度条
  });

  $(document).on('pjax:end', function(data, status, xhr, options) {
    //console.log(data);
    $('.pjaxcontainer').removeClass('on');
    //history.pushState({}, "", url);
    animated_contents();
    if (callback) {
      callback();
    }

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

//修改url参数
changeURLArg = function(url, arg, arg_val) {
  var pattern = arg + '=([^&]*)';
  var replaceText = arg + '=' + arg_val;
  if (url.match(pattern)) {
    var tmp = '/(' + arg + '=)([^&]*)/gi';
    tmp = url.replace(eval(tmp), replaceText);
    return tmp;
  } else {
    if (url.match('[\?]')) {
      return url + '&' + replaceText;
    } else {
      return url + '?' + replaceText;
    }
  }
  return url + '\n' + arg + '\n' + arg_val;
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
//设置更多
addmore = function() {
  //总宽度809
  $('.tiaojiao-sort .sl').each(function(i) {
    var $this = $(this);
    var li = $this.find('.sl-list ul li');
    var w = 0;
    li.each(function(index, el) {
      w = w + $(this).outerWidth() + 35;
    });
    if (w < 809) {
      $this.find('.inner .sl-list .ctrl a').hide();
      $this.find('.inner .sl-list .ctrl label').css('margin-right', '20px');

    }
  })
  $('.tiaojiao-sort .sl .inner .sl-list .ctrl a').click(function(event) {
    /* Act on the event */
    var inner = $(this).parent().parent().parent();
    inner.toggleClass('on');
  });
}

select = function() {
  $(document).off('click', '.select-tit').on('click', '.select-tit', function(event) {
    $(this).parent().parent().parent().addClass('on');
    $(this).next().fadeToggle();
  });
  $(document).off('click', '.tiaojiao-sort .sl .sl-list .select ul li a').on('click', '.tiaojiao-sort .sl .sl-list .select ul li a', function(event) {
    $(this).parent().parent().hide();
    var str = $(this).html() + '<span class="jt-chevron-thin-down"></span>';
    $(this).parent().parent().prev().html(str);
  });

}

pro_main_top = function() {
  var mySwiper2 = new Swiper('#swiper-container2', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 5,
    spaceBetween: 20,
    onTap: function() {
      mySwiper3.slideTo(mySwiper2.clickedIndex)
    }
  })
  var mySwiper3 = new Swiper('#swiper-container3', {
    nextButton: '.swiper-right',
    prevButton: '.swiper-left',
    onSlideChangeStart: function() {
      updateNavPosition()
    }

  })
  updateNavPosition = function() {
    $('#swiper-container2 .active-nav').removeClass('active-nav')
    var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');


    if (!activeNav.hasClass('swiper-slide-visible')) {
      if (activeNav.index() > mySwiper2.activeIndex) {
        var thumbsPerNav = Math.floor(mySwiper2.width / activeNav.width()) - 1
        mySwiper2.slideTo(activeNav.index() - thumbsPerNav)
      } else {
        mySwiper2.slideTo(activeNav.index())
      }
    }
  }


}

indexModule = function() {
  //设置导航选中
  navactive(0);
  $('.change_duoxuan').attr('checked', false);
  duoxuan();
  multiple();
  addmore();
  select();
  pro_main_top();
};

indexModule();
