var indexModule,first_swiper,p1,p3;first_swiper=function(){new Swiper("article.swiper-container",{direction:"vertical",mousewheelControl:!0,speed:1e3,hashnav:!0,hashnavWatchState:!0,simulateTouch:!1,onInit:function(e){swiperAnimateCache(e),swiperAnimate(e),$(".article-nav .item").removeClass("on"),console.log(e.realIndex),$(".article-nav .item").eq(e.realIndex).addClass("on")},onSlideChangeEnd:function(e){swiperAnimate(e),$(".article-nav .item").removeClass("on"),console.log(e.realIndex),$(".article-nav .item").eq(e.realIndex).addClass("on")}})},p1=function(){new Swiper(".p1.swiper-container",{autoplay:2500,speed:1500,loop:!0,pagination:".p1 .swiper-pagination",paginationClickable:!0,parallax:!0})},p3=function(){var e=new Swiper(".p3.swiper-container",{speed:1500,parallax:!0,onInit:function(e){var i=0;$("article.swiper-container .swiper-slide .about-nav .item.click").removeClass("on"),$("article.swiper-container .swiper-slide .about-nav .item.click span").css("background-image","none"),$("article.swiper-container .swiper-slide .about-nav .item.click").eq(i).addClass("on");var n=$("article.swiper-container .swiper-slide .about-nav .item.click").eq(i).find("span").data("img");$("article.swiper-container .swiper-slide .about-nav .item.click").eq(i).find("span").css("background-image","url("+n+")")}});$("body").off("click","article.swiper-container .swiper-slide .about-nav .item.click").on("click","article.swiper-container .swiper-slide .about-nav .item.click",function(){var i=($(this).index()+1)/2;$(this).index();$("article.swiper-container .swiper-slide .about-nav .item.click").removeClass("on"),$("article.swiper-container .swiper-slide .about-nav .item.click span").css("background-image","none"),$(this).addClass("on");var n=$(this).find("span").data("img");$(this).find("span").css("background-image","url("+n+")"),e.slideTo(i,1e3,!1)})},newshuadong=function(){var e=new Swiper(".index .news .news-huadong .swiper-container",{speed:1e3});$("body").off("click",".index .news .news-huadong .news-huadong-nav a").on("click",".index .news .news-huadong .news-huadong-nav a",function(i){var n=$(this).index();$(".index .news .news-huadong .news-huadong-nav a").removeClass("on"),$(this).addClass("on"),e.slideTo(n,1e3,!1)})},newspic=function(){new Swiper(".index .news .pic",{autoplay:3e3,speed:1e3,loop:!0,pagination:".index .news .pic .swiper-pagination",paginationClickable:!0})},(indexModule=function(){navactive(0),first_swiper(),p1(),p3()})();