define(["domReady"],function(e){var t,n,r,i,o,a,f;$("header").height();return n=function(e){$(".step span").removeClass("on"),$(".step span").eq(e).addClass("on")},r=function(){n(0),$(".step1 a").click(function(e){e.preventDefault();var t={},n=$(this).attr("href");$.post(n,t,function(e){"118"==e.err_code?alertinfo(e.err_info):alertinfo(e.err_info)},"json")})},i=function(){n(1),$(".step2 .step2-inner .list .item").click(function(e){e.preventDefault(),$(".step2 .step2-inner .list .item").removeClass("on"),$(this).addClass("on")}),$(".step2 .step2-inner .list .item table a").click(function(e){e.preventDefault();var t={},n=$(this).attr("href");$.post(n,t,function(e){"118"==e.err_code?alertinfo(e.err_info):alertinfo(e.err_info)},"json")})},o=function(){n(2),$(".step3-inner a").click(function(e){e.preventDefault();var t={},n=$(this).attr("href");$.post(n,t,function(e){"118"==e.err_code?alertinfo(e.err_info):alertinfo(e.err_info)},"json")})},a=function(){n(3),$(".step4 .step4-inner > .container_1200 > a").click(function(e){e.preventDefault();var t={},n=$(this).attr("href");$.post(n,t,function(e){"118"==e.err_code?alertinfo(e.err_info):alertinfo(e.err_info)},"json")})},f=function(){n(4)},t=function(t){e(function(){t(1),require(["laydate"],function(e){e.path="./src/scripts/package/laydate/",e.render({elem:"#starttime",format:"yyyy/MM/dd"}),e.render({elem:"#endtime",format:"yyyy/MM/dd"})})})},{initModule:t,step1:r,step2:i,step3:o,step4:a,step5:f}});