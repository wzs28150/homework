var proModule, picchange, city, canshu;
picchange = function() {
  var swiper = new Swiper('.p-m-pic .swiper-container', {
    pagination: '.p-m-pic .swiper-pagination',
    loop: true
  });
}
city = function() {
  $("#city-picker").cityPicker({
    title: "选择省市区/县",
    onChange: function(picker, values, displayValues) {
      var citystr = displayValues[0] + displayValues[1] + displayValues[2];
      $('.city-picker i').html(citystr);
    }
  });
}
//产品参数弹出与关闭
canshu = function() {
  $('body').on('click', '#canshu', function() {
    $('.canshu-bg').fadeIn();
    $('.canshu-pannel').fadeIn();
  })
  $('body').on('click', '.canshu-bg,.close,.complete', function() {
    $('.canshu-bg').fadeOut();
    $('.canshu-pannel').fadeOut();
  })
}
proModule = function() {
  //设置导航选中
  navactive(0);
  picchange();
  city();
  canshu();
};

proModule();