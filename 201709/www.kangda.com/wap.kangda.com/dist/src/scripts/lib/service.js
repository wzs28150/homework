define(["domReady"],function(i){var n,e,t,c;return t=function(){console.log("ask is load"),$(".service .ask-list .item label").click(function(){var i=$(this),n=i.parent();i.prev("input");n.siblings().find("input").attr("checked",!1)})},e=function(){},c=function(){},n=function(n){i(function(){n(5)})},{initModule:n,service_index:e,service_ask:t,service_download:c}});