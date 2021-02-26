---
layout: post
title: 使用csshover.htc完美解决IE6不支持li伪类li:hover		
date: 2012-05-05
tags: ["csshover","CSS伪类","HTML5/CSS3","IE6兼容","li:hover","前端"]
---

昨夜，上岸QQ的鱼花了一整个通宵来对本站进行了升级，相信网友已经发现本站的变化了。本站新增了炫丽的二级导航，单是二级导航的兼容性问题就耗费我整整一个通宵的时间，就是因为IE6不支持li伪类li:hover。经过一整晚的咨询和调研，已经总结出解决IE6不支持li伪类li:hover的两种方法，前文是《<a title="使用Javascript解决IE6不支持li伪类li:hover" href="http://www.saqqdy.com/web-design/javascript-solve-ie6-compatible-pseudo-classes-li-hover" target="_blank" rel="noopener noreferrer">使用Javascript解决IE6不支持li伪类li:hover</a>》

下面就来说说如何用csshover.htc完美解决IE6不支持li伪类li:hover

（1）首先下载csshover.htc文件（请留意文章底部）；
（2）在页面上<head>与</head>之间添加以下代码调用csshover文件：
> <!--[if IE 6]>
<style type="text/css" media="screen">
body{behavior:url('http://www.saqqdy.com/***/csshover.htc');} /*注意文件路径*/
</style>
<![endif]-->
（3）OK，到此已经完美搞定IE6不支持li伪类li:hover的问题了，记得测试一下哦！

csshover下载：[download id="995" format="1"]		