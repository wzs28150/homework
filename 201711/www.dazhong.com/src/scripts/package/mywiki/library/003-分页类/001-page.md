# page
>1. [配置：](#配置： "配置：")
>1. [用法：](#用法： "用法：")
	1. [js:](#js: "js:")
	1. [html:](#html: "html:")

<br>

## 配置：

```javascript
shim: {
    'page': ['pagination'],
},
paths: {
  page: './package/pagination/page',
  pagination: './package/pagination/pagination.min',
}
```

## 用法：

### js:

```javascript
require(['page'], function (page) {
  //获取总个数
  var $num = $("ul li").length;
  var $item = 'li';//列表循环项
  var $page = '#pagination';//显示分页的元素
  var $wapper = 'ul';//列表外层元素
  var $nownum = 4;//每页显示个数
  page.initModule($num, $item, $page , $wapper, $nownum);
});
```

### html:

```html
<ul>
  <li>测试1</li>
  <li>测试2</li>
  <li>测试3</li>
  <li>测试4</li>
  <li>测试5</li>
  <li>测试6</li>
  <li>测试7</li>
</ul>
<div id="pagination"></div>  
```
### sass:

```sass
.pagination {
  text-align: center;
  overflow: hidden;
  a,
  span {
    font-size: 12px;
    display: inline-block;
    padding: 0.4em 0.85em;
    margin-right: 5px;
    border-radius: 5px;
  }
  a {
    text-decoration: none;
    background: #e50014;
    color: #fff;
  }
  .current {
    background: #ff6a76;
    color: #fff;
    &.prev,
    &.next {
      display: none;
    }
  }
}
```
