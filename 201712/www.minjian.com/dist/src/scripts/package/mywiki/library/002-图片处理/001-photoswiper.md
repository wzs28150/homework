# photoswiper
>1. [效果：](#效果 "效果：")
>1. [配置：](#配置 "配置：")
>1. [用法：](#用法 "用法：")
	1. [js:](#js "js:")
	1. [html:](#html "html:")

<br>

## 效果：

![效果](https://raw.githubusercontent.com/wzs28150/mepackage/master/pic/photoswiper.gif)


## 配置：

```javascript

paths: {
   photoswipe: './package/photoswiper/photoswipe.min',
   photoswipeui: './package/photoswiper/photoswipe-ui-default.min',
   photo: './package/photoswiper/index',
}
shim: {
   'photoswipe': ['css!./package/photoswiper/photoswipe.css',
   'css!./package/photoswiper/default-skin/default-skin.css']
}
```

## 用法：

### js:

```javascript
require(['photo'], function (photo) {
   photo('.demo-gallery');
});
```

### html:

```html
<span class="bg demo-gallery">
<a data-ajax="no" href="./src/images/20170628023654306.png" data-size="1600x1600" data-med="./src/images/20170628023654306.png" data-med-size="1024x1024"  class="demo-gallery__img--main">
  <img src="./src/images/20170628023654306.png" alt="" />
</a>
<a data-ajax="no" href="./src/images/20170628023654306.png" data-size="1600x1600" data-med="./src/images/20170628023654306.png" data-med-size="1024x1024"class="demo-gallery__img--main">
  <img src="./src/images/20170628023654306.png" alt="" />
</a>
</span>
```
