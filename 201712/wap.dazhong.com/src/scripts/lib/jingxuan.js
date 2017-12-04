var jingxuanModule, banner, new_pro, jingxuan;

jingxuan = function() {
  var new_proswiper = new Swiper('.jingxuan-main .swiper-container', {
    slidesPerView: 'auto',
    nextButton: '.jingxuan-main .button-next',
    prevButton: '.jingxuan-main .button-prev',
  });
}
jingxuanModule = function() {
  //设置导航选中
  navactive(1);
  //设置分类默认打开
  fenleishow();

  jingxuan();

};

jingxuanModule();
