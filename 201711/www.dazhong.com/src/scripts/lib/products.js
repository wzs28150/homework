var brandModule, banner, multiple, tiaojiao;

multiple = function() {
  $('.tiaojiao-sort .sl .sl-list .ctrl a.morecheck').click(function (e) { 
    e.preventDefault();
    var sl = $(this).parent('.ctrl').parent('.sl-list').parent('.sl').toggleClass('multiple');
  });
}
tiaojiao = function() {
  $('.tiaojiao-sort .sl').each(function(i){
    console.log(i)
  })
}
indexModule = function() {
    //设置导航选中
    navactive(0);
    tiaojiao();
    multiple();
};

indexModule();