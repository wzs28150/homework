# pjax无刷新封装
>1. [配置：](#配置： "配置：")
>1. [用法：](#用法： "用法：")
	1. [js:](#js: "js:")
	1. [html:](#html: "html:")


<br>

## 配置：

```javascript

shim: {
  'pajax': ['pjax'],
},
paths: {
  pjax: './package/pajax/jquery.pjax',
  pajax: './package/pajax/pajax',
}
```

## 用法：

### js:

```javascript
pajax.initModule('main', function () {}, function (targetelement, state) {
  //回调函数 搭配router 实现mvc
});
```

### html:

```html
//关闭无刷新
<a data-ajax="no" href="#"></a>

//关闭页面跳转后回到顶部
<a data-istop="no" href="#"></a>

//设置局部无刷新 data-container 加载内容的容器Class data-fragment  内容的容器Class
<a data-istop="no" data-container="" data-fragment="" href="#"></a>

//设置跳转到页面的指定位置 data-target 跳转到页面对应位置的Id
<a data-target="" href="#"></a>
```
