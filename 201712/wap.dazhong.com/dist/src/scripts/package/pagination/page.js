define(["jquery","pagination"],function(e,n){var t,a;return e("#pagination").html(""),a=function(n,t,a,i,o){var r=e("header").outerHeight()+20;e(".pagination a").smoothScroll({offset:-r,direction:"top",scrollTarget:i,beforeScroll:function(){},afterScroll:function(){}});var l=0;e(a).hide();for(var c=0;c<o;c++)l=n*o+c,e(a).eq(l).show()},t=function(n,t,i,o,r){var l=n/r;e(i).pagination(l,{num_edge_entries:1,num_display_entries:3,callback:a,items_per_page:1,item_class:t,prant_class:o,page_one_num:r,prev_text:"上一页",next_text:"下一页"})},{initModule:t}});