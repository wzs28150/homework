!function(e){"use strict";var t=function(e){this._storage=e,this.$e={searchShow:$("#searchShow"),searchUpdate:this._storage.$e.searchUpdate,searchBox:$("#searchBox"),results:$("#results"),resultMsg:$("#resultMsg"),resultMore:$("#resultMore"),search:$("#search"),searchText:$("#searchText")},this._data={result:[],template:$("#template\\:searchResult").text(),pageSize:15,pagination:0},this._bindCtrl(),this.onNeedRebuildStorage=null};return t.prototype._bindCtrl=function(){var t=this;this.$e.searchShow.on("click",function(){t.$e.searchBox.hasClass("on")?(t.displayBox("off"),t.$e.searchShow.trigger("searchoff")):(t.displayBox("on",function(){s()}),t.$e.searchShow.trigger("searchon"))});var s=function(){var e=t.$e.searchBox.height(),s=t.$e.results.offset().top-t.$e.searchUpdate.offset().top;t.$e.results.height(e-s)};$(e).on("resize",function(){t.$e.searchBox.hasClass("on")&&s()}),"file:"==location.protocol&&"undefined"!=typeof AWPageMounts&&this.$e.searchUpdate.parent().addClass("off"),this.$e.searchUpdate.on("click",function(){t._worker&&(t._worker.terminate(),t._worker=null,t.$e.resultMsg.hide()),t.$e.search.prop("disabled",!0),t.$e.searchUpdate.prop("disabled",!0),t.onNeedRebuildStorage(function(){t.$e.search.prop("disabled",!1),t.$e.searchUpdate.val("请勿频繁使用")})});var r=this._storage.getLastBuildTs();if(r){var a=Date.now()-r;a<36e5&&this.$e.searchUpdate.prop("disabled",!0).val("请勿频繁使用")}this.$e.search.on("click",function(){t._search()}),this.$e.searchText.on("keyup",function(e){13==e.keyCode&&t._search()}),this.$e.resultMore.on("click",function(){t._nextResultPage()})},t.prototype.displayBox=function(e,t){var s=this.$e.searchBox;"on"!=e||s.hasClass("on")?"off"==e&&s.hasClass("on")&&s.removeClass("on").animate({width:"30%",opacity:0},200,"swing",function(){s.removeAttr("style"),t&&t()}):s.addClass("on").css({display:"block",width:"0",opacity:0}).animate({width:"100%",opacity:1},300,"swing",function(){t&&t()})},t.prototype._search=function(){if(""==this.$e.searchText.val())return void this.$e.searchText.focus();var t=this.$e.searchText.val();if(this.$e.resultMsg.show().text("创建搜索中..."),"undefined"!=typeof e.Worker){this._worker&&(this._worker.terminate(),this._worker=null,this.$e.resultMsg.hide());try{this._worker=new e.Worker("amWiki/js/amWiki.search.worker.js"),this._searchByWorker(t)}catch(e){this._searchByPresent(t)}}else this._searchByPresent(t)},t.prototype._searchByWorker=function(e){var t=this;this._worker.onmessage=function(s){var r=s.data;"searcher:loaded"==r.type?t._worker.postMessage({type:"searcher:docs",docs:t._storage.getAllDocs()}):"searcher:ready"==r.type?(t.$e.resultMsg.show().html("正在搜索，请稍后..."),t._worker.postMessage({type:"searcher:search",words:e})):"searcher:result"==r.type&&(t._data.result=r.result,t._showResultList(),t._worker.terminate(),t._worker=null)},this._worker.onerror=function(e){console.error(e),this.$e.resultMsg.show().text("Sorry，出错了！<br/>"+e.msg),t._worker.terminate(),t._worker=null}},t.prototype._searchByPresent=function(e){var t=new AWSearcher;t.initDocs(this._storage.getAllDocs()),this.$e.resultMsg.show().html("正在搜索，请稍后..."),t.matchWords(e),this._data.result=t.getResult(),this._showResultList()},t.prototype._showResultList=function(){this.$e.results.children("ul").children().remove(),this.$e.resultMsg.hide(),this._data.pagination=0,this._nextResultPage()},t.prototype._nextResultPage=function(){for(var e,t="",s=0,r=this._data.pagination*this._data.pageSize;(e=this._data.result[r])&&(t+=this._renderRankItem(this._data.template,e),!(++s>=this._data.pageSize));r++);this.$e.results.children("ul").append(t),this._data.pagination++,this._data.pagination*this._data.pageSize>=this._data.result.length?this.$e.resultMore.hide():this.$e.resultMore.show()},t.prototype._renderRankItem=function(t,s){var r=t;s.time=e.tools.formatTime(s.timestamp),delete s.timestamp;for(var a in s)s.hasOwnProperty(a)&&(r=r.replace(new RegExp("{{"+a+"}}","g"),s[a]));return r},e.AWSearch=t}(window);