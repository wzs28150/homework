define([''], function() {
  var initModule, scroll,resetsize;

  /**
   * 滚动条
   * @return {[type]} [description]
   */
  scroll = function(article) {

    $(article).niceScroll({
      cursorcolor: "#4284e2",
      cursorwidth: "5px",


      cursorfixedheight: false,
      cursorminheight: 20,
      enablekeyboard: true,
      horizrailenabled: true,
      bouncescroll: false,
      smoothscroll: true,
      zindex: 999
    });

  };
  initModule = function(article) {
    scroll(article);

  };
  resetsize = function(article){
      $(article).getNiceScroll(0).resize();
  };
  return {
    initModule: initModule,
    resetsize: resetsize
  };
})
