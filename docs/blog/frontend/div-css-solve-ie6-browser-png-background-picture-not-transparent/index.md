---
layout: post
title: DIV+CSS解决IE6浏览器PNG背景图不透明		
date: 2012-03-24
tags: ["HTML5/CSS3","PNG透明","前端","浏览器兼容"]
---

IE6浏览器下PNG图片不透明的问题一定让不少设计师头痛，火狐和IE7及以上版本已经直接支持透明的png图了,下面这个主要是解决IE6下透明PNG图片有灰底的。

有一种解决方法比较死板，不过相信很多设计师都曾经用过，CSS代码里面，类似_background:url(a.png);的前面带"_"的代码只有IE6可以识别，而IE6支持gif格式的透明图片，所以，可以分别制作png、gif两种公司两张图片，CSS里面这样写：background:url(a.png);?_background:url(a.gif);这样的话IE6浏览器看到的就是gif格式的图片了。不过考虑到gif格式图片不可能有png那种高品质的效果，这种方法始终不是最佳的解决方案。

下面这个方法简单，不过请注意，由于这种方法是通过CSS实现的，所以这种方法只能解决png背景图的透明问题：
如需对直接插入的图片有效?，请阅读《<a title="JavaScript(JS)实现IE6浏览器PNG图片透明" href="http://www.saqqdy.com/web-design/javascript-js-realize-ie6-browser-png-image-transparent" target="_blank" rel="noopener noreferrer">JavaScript(JS)实现IE6浏览器PNG图片透明</a>》

语法：
> filter:progid:DXImageTransform.Microsoft.AlphaImageLoader ( enabled=bEnabled, sizingMethod=sSize, src=sURL)
enabled : 可选项。布尔值(Boolean)。设置或检索滤镜是否激活。
true : 默认值。滤镜激活。
false : 滤镜被禁止。

sizingMethod : 可选项，字符串(String)。设置或检索滤镜作用的对象的图片在对象容器边界内的显示方式。
crop : 剪切图片以适应对象尺寸。
image : 默认值，增大或减小对象的尺寸边界以适应图片的尺寸。
scale : 缩放图片以适应对象的尺寸边界。

src : 必选项，字符串(String)。使用绝对或相对 url 地址指定背景图像。假如忽略此参数，滤镜将不会作用。

特性：
Enabled : 可读写，布尔值(Boolean)。参阅 enabled 属性。
sizingMethod : 可读写，字符串(String)。参阅 sizingMethod 属性。
src : 可读写，字符串(String)。参阅 src 属性。

说明：
在对象容器边界内，在对象的背景和内容之间显示一张图片。并提供对此图片的剪切和改变尺寸的操作。如果载入的是PNG(Portable Network Graphics)格式，则0%-100%的透明度也被提供。PNG(Portable Network Graphics)格式的图片的透明度不妨碍你选择文本。也就是说，你可以选择显示在PNG(Portable Network Graphics)格式的图片完全透明区域后面的内容。

** 实例： **

CSS样式:
> .png{height: 90px;
width: 90px;
background: url(icon_home.png) no-repeat !important;/*火狐 IE7 */

_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='icon_home.png'); /* IE6 */
_ background-image: none; /* IE6 */

}
HTML代码：
> <div class="png"></div>
兼容IE6.0、IE7.0、火狐浏览器，IE7.0和新版的火狐其实是可以不加filter滤镜直接透明的。

&nbsp;		