define(["debug","loadmore"],function(e,o){var n,i,r,i,r,t,e=e.initModule,o=o.initModule;return t=function(){new Swiper(".products .er-banner.swiper-container",{autoplay:1500,speed:1e3,loop:!0,effect:"fade"})},r=function(){e("产品列表加载完毕"),require(["photo"],function(e){e(".demo-gallery")})},i=function(){e("产品内容加载完毕"),require(["photo"],function(e){e(".demo-gallery")})},n=function(e){e(2),require(["swiper"],function(e){t()})},{initModule:n,products_list:r,products_show:i}});