var brandModule, banner, new_pro, hot_pro, feichangqiehuan;

feichangqiehuan = function() {
  $('.feichang .qiehuan').each(function(index, el) {
    var i = index + 1;
    var feichangswiper = new Swiper('.qiehuan_' + i, {
      autoplay: 3000,
      speed: 1000,
      loop: true,
      pagination: '.qiehuan_' + i + ' .swiper-pagination',
      paginationClickable: true,
    });
  });
}
indexModule = function() {
  //设置分类默认打开
  fenleishow();
  //设置导航选中
  navactive(0);
  //非常品牌切换
  feichangqiehuan();
};

indexModule();