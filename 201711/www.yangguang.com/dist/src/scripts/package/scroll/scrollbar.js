var $win=$(window),$body=$("body"),$container=$("body"),isMobi=window.isMobi=function(){var t=$win.width(),i=720,a=function(){t=$win.width(),t<=i?$container.removeAttr("style"):$container.height($win.height()-70-15-40)};return a(),$win.on("resize",a),function(){return t<=i}}();!function(t,i){"use strict";var a=[];setInterval(function(){for(var t,i=0;t=a[i];i++)t.checkHeightWidth()},1e3);var e=function(t){this.$e={container:i(t),inner:null,barY:null,boxY:null,sliderY:null,barX:null,boxX:null,sliderX:null},this._data={xRolling:"true"==this.$e.container.attr("data-x-rolling"),maxTop:0,barH:0,sliderH:0,contentH:0,containerH:0,contentHLast:0,barW:0,sliderW:0,contentW:0,containerW:0,contentWLast:0},this._init()};e.prototype._init=function(){var a=this,e='<div class="scrollbar scrollbar-y" onselectstart="return false"><div><i></i></div></div>';e+=this._data.xRolling?'<div class="scrollbar scrollbar-x" onselectstart="return false"><div><i></i></div></div>':"",this.$e.container.append(e),this.$e.barY=this.$e.container.find(".scrollbar-y"),this.$e.boxY=this.$e.barY.children("div"),this.$e.sliderY=this.$e.barY.find("i"),this._data.xRolling&&(this.$e.barX=this.$e.container.find(".scrollbar-x"),this.$e.boxX=this.$e.barX.children("div"),this.$e.sliderX=this.$e.barX.find("i")),this.$e.inner=this.$e.container.children(".scroller-inner"),this._onWinResize(),i(t).on("resize",function(){a._onWinResize(),a.checkHeightWidth()}),this.$e.container.on("scrollbar",function(){a.checkHeightWidth()}),this.$e.inner.on({click:function(){a.checkHeightWidth()},scroll:function(){a._reScroll()}}),this.checkHeightWidth(),this._bindAction()},e.prototype._bindAction=function(){var a=this,e=!1,s=0,n=0,r=0,o=0;this.$e.body=i("body"),this.$e.boxY.on({mousedown:function(t){e="y",a.$e.body.attr("onselectstart","return false"),a.$e.barY.addClass("active"),s=t.pageY,n=parseFloat(a.$e.sliderY.css("top"))}}),this._data.xRolling&&this.$e.boxX.on({mousedown:function(t){e="x",a.$e.body.attr("onselectstart","return false"),a.$e.barX.addClass("active"),r=t.pageX,o=parseFloat(a.$e.sliderX.css("left"))}}),i(t.document).on({mousemove:function(t){"y"==e?a.scrollYTo(n+t.pageY-s):"x"==e&&a.scrollXTo(o+t.pageX-r)},mouseup:function(){a.$e.body.removeAttr("onselectstart","return false").children("aside").show(),"y"==e?a.$e.barY.removeClass("active"):"x"==e&&a.$e.barX.removeClass("active"),e=!1}})},e.prototype._onWinResize=function(){isMobi()?this.$e.inner.addClass("on"):this.$e.inner.css({width:this.$e.container.width()+30,paddingRight:13}).addClass("on")},e.prototype._resize=function(){var t=this;this._data.containerH=this.$e.inner.height(),this._data.contentH<=this._data.containerH?(this._data.contentH=this._data.containerH,this.$e.barY.addClass("off")):this.$e.barY.removeClass("off"),this._data.barH=this.$e.boxY.height(),this._data.sliderH=this._data.containerH/t._data.contentH*this._data.barH,this.$e.sliderY.height(this._data.sliderH),this._data.maxTop=(this._data.barH-this._data.sliderH)/this._data.barH*this._data.contentH+1,this._data.xRolling&&(this._data.containerW=this.$e.inner.width(),this._data.contentW<=this._data.containerW?(this._data.contentW=this._data.containerW,this.$e.barX.addClass("off")):this.$e.barX.removeClass("off"),this._data.barW=this.$e.boxX.width(),this._data.sliderW=this._data.containerW/t._data.contentW*this._data.barW,this.$e.sliderX.width(this._data.sliderW))},e.prototype._reScroll=function(){var t=this.$e.inner.scrollTop(),i=t/this._data.contentH*this._data.barH;if(i+this._data.sliderH>=this._data.barH?(i=this._data.barH-this._data.sliderH,this.$e.sliderY.css("top",i),this.$e.inner.scrollTop(this._data.maxTop)):this.$e.sliderY.css("top",i),this._data.xRolling){var a=this.$e.inner.scrollLeft()/this._data.contentW*this._data.barW;this.$e.sliderX.css("left",a)}},e.prototype.scrollYTo=function(t){var i=t;i=i<0?0:i,i=i+this._data.sliderH>this._data.barH?this._data.barH-this._data.sliderH:i,this.$e.sliderY.css("top",i),this.$e.inner.scrollTop(i/this._data.barH*this._data.contentH)},e.prototype.scrollXTo=function(t){var i=t;i=i<0?0:i,i=i+this._data.sliderW>this._data.barW?this._data.barW-this._data.sliderW:i,this.$e.sliderX.css("left",i),this.$e.inner.scrollLeft(i/this._data.barW*this._data.contentW)},e.prototype.checkHeightWidth=function(){var t=this;this._data.contentH=0,this._data.contentW=0,this.$e.inner.children(".scroller-content").each(function(){t._data.contentH+=i(this).outerHeight(),t._data.contentW+=i(this).outerWidth()}),/webkit/.test(navigator.userAgent.toLowerCase())&&(t._data.contentH+=15),this._data.contentH==this._data.contentHLast&&this._data.contentW==this._data.contentWLast||(this._data.contentHLast=this._data.contentH,this._data.contentWLast=this._data.contentW,this._resize(),this._reScroll())},i.extend(i.fn,{scrollbar:function(){return this.each(function(){a.push(new e(this))})}})}(window,jQuery);