# scrollbar
页面滚动条美化类 可自定义滚动条样式
>1. [配置：](#配置： "配置：")
>1. [用法：](#用法： "用法：")
	1. [js:](#js: "js:")
	1. [html:](#html: "html:")
	1. [sass:](#sass: "sass:")


<br>

## 配置：

```javascript
shim: {
    'scroll': ['scrollbar'],
},
paths: {
  scrollbar: './package/scroll/scrollbar',
  scroll: './package/scroll/scroll'
}
```

## 用法：

### js:

```javascript
require(['scroll'], function (scroll) {
  scroll.initModule('.scroller');
});
```

### html:

```html
<body class="scroller">
  <div class="scroller-inner">
    <div class="scroller-content">
      //内容
    </div>  
  </div>  
</div>      
```
### sass:

```sass
  body[onselectstart] {
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .scroller {
    height: 100%;
    overflow: hidden;

    .scroller-inner {
      box-sizing: content-box;
      width: 100%;
      height: 100%;
      -webkit-overflow-scrolling: touch;
      overflow-scrolling: touch;

      &.on {
        overflow-y: scroll;
      }
    }

    .scrollbar {
      position: absolute;
      opacity: 0;
      transition-duration: 0.5s;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      z-index: 99;

      &.active {
        opacity: 1;
      }

      &.off {
        opacity: 0;
      }

      div {
        position: relative;
        transition-duration: 0.1s;
      }

      i {
        position: absolute;
        background: rgba(#0f88eb,1);
        border-radius: 2px;
        transition-duration: 0.1s;
      }

      &:active {
        padding: 0;

        div {
          background: rgba(#0f88eb,.07);
        }

        i {
          border-radius: 0;
        }
      }

      &.scrollbar-y {
        top: 0;
        right: 0;
        width: 5px;
        height: 100%;
        background-color: #ccc;

        div {
          height: 100%;
        }

        i {
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
        }

        &:active i {
          left: 0;
          width: 10px;
        }
      }

      &.scrollbar-x {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10px;
        padding-right: 10px;

        div {
          width: 100%;
          height: 100%;
        }

        i {
          bottom: 0;
          top: 4px;
          height: 3px;
          width: 100%;
        }

        &:active i {
          top: 0;
          height: 10px;
        }
      }
    }

    &:hover .scrollbar {
      opacity: 1;
      transition-duration: 0.3s;
    }

    &[data-x-rolling="true"] {
      .scroller-inner {
        &.on {
          overflow-x: scroll;
        }
      }

      .scroller-content {
        display: inline-block;
        position: relative;
        padding-bottom: 10px;
        white-space: nowrap;
        min-width: 250px;
      }
    }
  }
```
