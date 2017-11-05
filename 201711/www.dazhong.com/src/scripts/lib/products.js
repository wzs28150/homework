var brandModule, banner, multiple, tiaojiao,duoxuan;

multiple = function() {
  $('.tiaojiao-sort .sl .inner .sl-list ul li a').click(function(event) {
    /* Act on the event */
    var $this = $(this);
    var $checkbox = $(this).parent('li').parent('ul').parent('.sl-list').parent('.inner').prev('input');
    var $isChecked = $checkbox.is(":checked");
    if ($isChecked) {
      //多选状态
      event.preventDefault();
      $this.parent('li').toggleClass('selected');
      duoxuan();
    } else {
      //非多选状态
    }
  });


}
duoxuan = function(){
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
