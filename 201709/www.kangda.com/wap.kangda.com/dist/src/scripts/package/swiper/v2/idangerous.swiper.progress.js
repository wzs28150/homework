/*
 * Swiper Smooth Progress 1.1.0
 * Smooth progress plugin for Swiper
 *
 * http://www.idangero.us/sliders/swiper/plugins/progress.php
 *
 * Copyright 2010-2014, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: January 29, 2014
*/

Swiper.prototype.plugins.progress=function(e,r){function t(){for(var r=0;r<e.slides.length;r++){var t=e.slides[r];t.progressSlideSize=i?e.h.getWidth(t):e.h.getHeight(t),"offsetLeft"in t?t.progressSlideOffset=i?t.offsetLeft:t.offsetTop:t.progressSlideOffset=i?t.getOffset().left-e.h.getOffset(e.container).left:t.getOffset().top-e.h.getOffset(e.container).top}o=i?e.h.getWidth(e.wrapper)+e.wrapperLeft+e.wrapperRight-e.width:e.h.getHeight(e.wrapper)+e.wrapperTop+e.wrapperBottom-e.height}function s(r){var t,r=r||{x:0,y:0,z:0};t=1==e.params.centeredSlides?i?-r.x+e.width/2:-r.y+e.height/2:i?-r.x:-r.y;for(var s=0;s<e.slides.length;s++){var p=e.slides[s],a=1==e.params.centeredSlides?p.progressSlideSize/2:0,n=(t-p.progressSlideOffset-a)/p.progressSlideSize;p.progress=n}e.progress=i?-r.x/o:-r.y/o,e.params.onProgressChange&&e.fireCallback(e.params.onProgressChange,e)}var o,i="horizontal"==e.params.mode,p={onFirstInit:function(r){t(),s({x:e.getWrapperTranslate("x"),y:e.getWrapperTranslate("y")})},onInit:function(e){t()},onSetWrapperTransform:function(e){s(e)}};return p};