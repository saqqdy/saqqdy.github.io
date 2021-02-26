---
layout: post
title: CSS实现DIV自适应浏览器居中显示		
date: 2011-06-12
tags: ["DIV居中","HTML5/CSS3","前端"]
---

CSS实现DIV自适应浏览器居中显示，或许各位还没弄清楚标题的意思。如果你是一位网页设计师，那你一定遇到过DIV居中显示的烦恼，为什么？因为不同的显示器有不同的分辨率，对于DIV的居中显示自然不会太容易。下面就介绍一种CSS写法，轻松实现DIV居中显示。

** 代码如下： **
> <html>
<head>
<style>
html,body{height:100%; margin:0; padding:0; overflow:hidden; background-color:#eee;}
.d2{width:200px; height:200px; position:absolute; top:50%; left:50%; z-index:1;/*background-color:#FF0;*/}
.d3{background-color:#06C; width:200px; height:200px; position:relative; top:-50%; left:-50%;}
</style>
</head>
<body>
<div>
<div class="d3">this</div>
</div>
</body>
</html>
** 代码解释： **

先让D2? position:absolute;设置top:50%; left:50%; 就是让D2的左上角处于浏览器的正中央，这样如果不设置D3 那么D3应该是左上角在中央的，然后D3? position:relative; 设置top:-50%; left:-50%就是让D3相对于D2向上、向左移动50%，这样D3的中心就处于浏览器中央了

PS：感谢大头老鼠投递！		