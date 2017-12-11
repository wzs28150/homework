# debug 测试模块
输出控制台信息 方便调试
>1. [配置：](#配置： "配置：")
>1. [用法：](#用法： "用法：")
	1. [js:](#js: "js:")


<br>

## 配置：

```javascript
paths: {
  debug: './package/debug/debug',
}
```

## 用法：

### js:

```javascript
define(['debug'], function(debug) {
  var debug = debug.initModule;
  debug('这是一条调试信息~',$state);
})
```
