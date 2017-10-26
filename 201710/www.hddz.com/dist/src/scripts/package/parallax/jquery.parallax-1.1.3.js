/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

!function(n){var t=n(window),e=t.height();t.resize(function(){e=t.height()}),n.fn.parallax=function(e,o,i,h){function r(){var i=t.scrollTop();l=f.offset().top,f.each(function(){var r=n(this),s=r.offset().top,c=u(r);if(0==h){if(s+c<i||s>i+t.height())return;f.css("backgroundPosition",e+" "+Math.round((l-i)*o)+"px")}else f.css("top",parseInt((t.height()-180)*o+Math.round((180-i)*o))+"px")})}var u,l,f=n(this);f.each(function(){l=f.offset().top}),u=i?function(n){return n.outerHeight(!0)}:function(n){return n.height()},(arguments.length<1||null===e)&&(e="50%"),(arguments.length<2||null===o)&&(o=.1),(arguments.length<3||null===i)&&(i=!0),(arguments.length<4||null===h)&&(h=!1),t.bind("scroll",r).resize(r),r()}}(jQuery);