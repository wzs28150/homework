# swiper
>1. [配置：](#配置： "配置：")
>1. [用法：](#用法： "用法：")
	1. [js:](#js: "js:")
	1. [html:](#html: "html:")


<br>

## 配置：

```javascript

paths: {
  swiper: './package/swiper/v3/swiper.min',
}
```

## 用法：

### js:

```javascript
var banner;
banner = function () {
  var bigswiper = new Swiper('.index .banner.swiper-container', {
    autoplay: 3000,
    speed: 1000,
    loop: true,
    pagination: '.index .banner .swiper-pagination',
    paginationClickable: true,
    nextButton: '.index .banner .swiper-button-next',
    prevButton: '.index .banner .swiper-button-prev',
  });
};
require(["swiper"], function (swiper) {
  banner();
});
```

### html:

```html
<section class="banner swiper-container">
  <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="./src/images/i_banner.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./src/images/i_banner.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./src/images/i_banner.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./src/images/i_banner.jpg" alt="">
      </div>
  </div>
  <div class="swiper-pagination"></div>
</section>
```
