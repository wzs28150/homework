define(['domReady', 'alertinfo', 'async!BMap'], function (domReady, alertinfo) {
  var initModule, contact_index, createMap, setMapEvent, addMapControl,addMarker,createInfoWindow,createIcon, contact_msg, alertinfo = alertinfo.initModule;

  createMap = function () {
    var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
    var point = new BMap.Point(130.961609, 45.289882); //定义一个中心点坐标
    map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map; //将map变量存储在全局
  }

  //地图事件设置函数：
  setMapEvent = function () {
    map.disableDragging(); //启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
    map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard(); //启用键盘上下左右键移动地图
  }

  //地图控件添加函数：
  addMapControl = function () {
    //向地图中添加缩放控件
    var ctrl_nav = new BMap.NavigationControl({
      anchor: BMAP_ANCHOR_TOP_LEFT,
      type: BMAP_NAVIGATION_CONTROL_LARGE
    });
    map.addControl(ctrl_nav);
    //向地图中添加缩略图控件
    var ctrl_ove = new BMap.OverviewMapControl({
      anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
      isOpen: 1
    });
    map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
    var ctrl_sca = new BMap.ScaleControl({
      anchor: BMAP_ANCHOR_BOTTOM_LEFT
    });
    map.addControl(ctrl_sca);
  }
  var markerArr = [{
    title: "龙城花园饭店",
    content: "鸡西市鸡冠区201国道鸡清路北&nbsp;（近鸡西烟草专卖局）",
    point: "130.961241|45.289362",
    isOpen: 1,
    icon: {
      w: 23,
      h: 25,
      l: 0,
      t: 21,
      x: 9,
      lb: 12
    }
  }];


  addMarker = function () {
    for (var i = 0; i < markerArr.length; i++) {
      var json = markerArr[i];
      var p0 = json.point.split("|")[0];
      var p1 = json.point.split("|")[1];
      var point = new BMap.Point(p0, p1);
      var iconImg = createIcon(json.icon);
      var marker = new BMap.Marker(point, {
        icon: iconImg
      });
      var iw = createInfoWindow(i);
      var label = new BMap.Label(json.title, {
        "offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
      });
      marker.setLabel(label);
      map.addOverlay(marker);
      label.setStyle({
        borderColor: "#808080",
        color: "#333",
        cursor: "pointer"
      });

      (function () {
        var index = i;
        var _iw = createInfoWindow(i);
        var _marker = marker;
        _marker.addEventListener("click", function () {
          this.openInfoWindow(_iw);
        });
        _iw.addEventListener("open", function () {
          _marker.getLabel().hide();
        })
        _iw.addEventListener("close", function () {
          _marker.getLabel().show();
        })
        label.addEventListener("click", function () {
          _marker.openInfoWindow(_iw);
        })
        if (!!json.isOpen) {
          label.hide();
          _marker.openInfoWindow(_iw);
        }
      })()
    }
  }
  //创建InfoWindow
  createInfoWindow = function (i) {
    var json = markerArr[i];
    var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
    return iw;
  }
  //创建一个Icon
  createIcon = function (json) {
    var icon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(json.w, json.h), {
      imageOffset: new BMap.Size(-json.l, -json.t),
      infoWindowOffset: new BMap.Size(json.lb + 5, 1),
      offset: new BMap.Size(json.x, json.h)
    })
    return icon;
  }

  contact_index = function () {
    
  }


  contact_msg = function () {
    require(["idcode"], function (idcode) {
      $.idcode.setCode();
      $('.submit').click(function () {
        var IsBy = $.idcode.validateCode(),
          name = $('#name').val(),
          tel = $('#tel').val(),
          email = $('#email').val(),
          title = $('#title').val(),
          content = $('#content').val(),
          url = $('.tousu').attr('data-url');
        if (!name) {
          alertinfo('姓名不能为空！');
          $("#name").focus();
          return false;
        }
        if (!tel) {
          alertinfo('联系电话不能为空！');
          $("#tel").focus();
          return false;
        } else {
          var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
          if (tel.length != 11) {
            alertinfo('请输入有效的手机号码！');
            $("#tel").focus();
            return false;
          } else if (!myreg.test(tel)) {
            alertinfo('请输入有效的手机号码！');
            $("#tel").focus();
            return false;
          }
        }
        if (!email) {
          alertinfo('电子邮箱不能为空！');
          $("#email").focus();
          return false;
        }else{
          if (!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)) {
            alertinfo('电子邮箱格式不正确！');
            $("#email").focus();
            return false;
          }
        }
        if (!title) {
          alertinfo('反馈类型不能为空！');
          $("#title").focus();
          return false;
        }
        if (!content) {
          alertinfo('投诉建议不能为空！');
          $("#content").focus();
          return false;
        }
        if (!IsBy) {
          alertinfo('验证码错误！');
          return false;
        } else {
          var arrData = {
            'name': name,
            'tel': tel,
            'email': email,
            'title': title,
            'content': content
          };
          $.post(url, arrData,
            function (data) {
              if ('118' == data.err_code) {
                alertinfo(data.err_info);
              } else {
                alertinfo(data.err_info);
              }
            }, "json"
          );
        }
      });
    });
  };

  initModule = function (callbak) {
    domReady(function () {
      callbak(8);
      createMap(); //创建地图
      setMapEvent(); //设置地图事件
      //addMapControl(); //向地图添加控件
    });
  };
  return {
    initModule: initModule,
    contact_index: contact_index,
    contact_msg: contact_msg
  };
})