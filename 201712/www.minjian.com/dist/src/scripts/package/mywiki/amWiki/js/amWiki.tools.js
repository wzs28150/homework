!function(r){"use strict";return r.tools={getURLParameter:function(r){var e=new RegExp("(^|&)"+r+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?n[2]:null},simString:function(e,n){n="short"==n;for(var t="",a="",o=r.encodeURI,c=0;c<e.length;c++)a=e.substr(c,1),/[\u4e00-\u9fa5]/.test(a)?(o(a).split("%").forEach(function(r){""==r?a=[]:a.push(parseInt("0x"+r))}),t+=n?(a[0]+a[1]+a[2]).toString(16).substr(-1,1):(a[0]+a[1]+a[2]).toString(16).substr(-2,2)):t+=a;return t},formatJson:function(r){var e=decodeURI(r.replace(/%([^0-9A-Z]{0,2})/g,"%25$1")),n=null,t="",a=0,o="    ",c={};return c.newlineAfterColonIfBeforeBraceOrBracket=c.newlineAfterColonIfBeforeBraceOrBracket===!0,c.spaceAfterColon=c.spaceAfterColon!==!1,"string"!=typeof e?e=JSON.stringify(e):(e=JSON.parse(e),e=JSON.stringify(e)),n=/([\{\}])/g,e=e.replace(n,"\r\n$1\r\n"),n=/([\[\]])/g,e=e.replace(n,"\r\n$1\r\n"),n=/(\,)/g,e=e.replace(n,"$1\r\n"),n=/(\r\n\r\n)/g,e=e.replace(n,"\r\n"),n=/\r\n\,/g,e=e.replace(n,","),c.newlineAfterColonIfBeforeBraceOrBracket||(n=/\:\r\n\{/g,e=e.replace(n,":{"),n=/\:\r\n\[/g,e=e.replace(n,":[")),c.spaceAfterColon&&(n=/"\s*\:/g,e=e.replace(n,'": ')),$.each(e.split("\r\n"),function(r,e){var n=0,c=0,l="";for(e.match(/\{$/)||e.match(/\[$/)?c=1:e.match(/\}/)||e.match(/\]/)?0!==a&&(a-=1):c=0,n=0;n<a;n++)l+=o;t+=l+e+"\r\n",a+=c}),t},formatTime:function(r){var e=new Date(r),n=e.getFullYear()+"",t=e.getMonth()+1;t=t<=9?"0"+t:t;var a=e.getDate();a=a<=9?"0"+a:a;var o=e.getHours();o=o<=9?"0"+o:o;var c=e.getMinutes();c=c<=9?"0"+c:c;var l=e.getSeconds();return l=l<=9?"0"+l:l,n+"-"+t+"-"+a+" "+o+":"+c+":"+l}}}(window);