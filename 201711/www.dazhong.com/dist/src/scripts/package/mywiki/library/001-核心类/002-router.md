# router路由类

通过router路由类 可以将 url 与 页面 及 控制器一一对应

> 1. [配置：](#配置： "配置：")
> 2. [用法：](#用法： "用法：")

>   1. [js:](#js: "js:")
>   2. [html:](#html: "html:")

<br>

## 配置：

```javascript

paths: {
  router: './package/router/router',
}
```

## 用法：

### js:(搭配pjax使用)

```javascript
/**
 * 参数一 加载控制器的 元素 class
 *
 * 参数二 无刷新状态
 */

//当页面初次加载时启用
router.initModule('article', false);
//无刷新时启用
pajax.initModule('main', function () {}, function (targetelement, state) {
      router.initModule('article', state);
}
```

### html:

```html
<html lang="en" class="no-js">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title></title>
</head>

<body>
  <header>
    <nav>
      <a href=""></a>
      <a href=""></a>
    </nav>
  </header>
  <main>
  //加载控制器
  <article class="about" data-main="about">
  //加载控制器下的方法
      <input type="hidden" class="eraction" data-fun="about_index">
  </article>    
  </main>
  <footer></footer>
</body>
</html>
```
