define(['domReady'], function (domReady) {
  var initModule;
  initModule = function (callbak) {
    domReady(function () {
      callbak(3);
    });
  };
  return {
    initModule: initModule
  };
})