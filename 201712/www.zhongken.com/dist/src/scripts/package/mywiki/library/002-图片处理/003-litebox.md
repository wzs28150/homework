# litebox灯箱弹出窗口插件
>1. [效果：](#效果 "效果：")
>1. [配置：](#配置 "配置：")
>1. [用法：](#用法 "用法：")
	1. [js:](#js "js:")
	1. [html:](#html "html:")


<br>

## 效果：

![效果](https://raw.githubusercontent.com/wzs28150/mepackage/master/pic/11.gif)


## 配置：

```javascript

shim: {
  'litebox': ['css!./package/litebox/css/litebox.css','imagesloaded'],
},
paths: {
  css: './package/css/css',
  imagesloaded: './package/litebox/js/images-loaded.min',
  litebox: './package/litebox/js/litebox.min'
}
```

## 用法：

### js:

```javascript
require(["litebox"], function (litebox) {
  $('.litebox').liteBox();
});
```

### html:

```html
<div class="list">
  <a href="001.jpg" target="_self" data-ajax="no" class="litebox" data-litebox-group="group-1"><img src="001-thumb.jpg" alt="Image 001" /></a>
  <a href="002.jpg" target="_self" data-ajax="no" class="litebox" data-litebox-group="group-1"><img src="002-thumb.jpg" alt="Image 002" /></a>
  <a href="003.jpg" target="_self" data-ajax="no" class="litebox" data-litebox-group="group-1"><img src="003-thumb.jpg" alt="Image 003" /></a>
  <a href="004.jpg" target="_self" data-ajax="no" class="litebox" data-litebox-group="group-1"><img src="004-thumb.jpg" alt="Image 004" /></a>

</div>
```
