---
layout: post
title: 【入门篇】HTML与XHTML的重要区别（实例）		
date: 2010-05-02
tags: ["CSS","HTML","HTML5/CSS3","XHTML","前端"]
---

说到HTML与XHTML的区别，其实我觉得并没有具体的分到太细，用通俗的话来讲，XHTML就是更加严格的HTML，具体表现在什么地方呢？我们一一列举出来：

（一）：在XHTML中，所有标记名称和属性名称都必须小写。
例如：HTML可以这样写：<DIV STYLE="WIDTH:500PX;">DIV标记</DIV>
但是，XHTML只能这样写：<div style="width:500px;">DIV标记</div>

（二）：XHTML中标记必须按照规则严格嵌套。
例如：HTML可以这样写：<b><i>文字</b></i>
但是，XHTML只能这样写：<b><i>文字</i></b>

（三）：XHTML的标记（包括空标记）必须封闭。
例如：HTML可以这样写："<p>文字"；"文字<br>"
但是，XHTML只能这样写："<p>文字</p>"；"文字<br/>"

（四）：XHTML中的属性值必须用双引号括起来。
例如：HTML可以这样写：<font color=#000000>文字</font>
但是，XHTML只能这样写：<font color="#000000">文字</font>

（五）：XHTML中的属性值必须写完整。
例如：HTML可以这样写：<input disabled>
但是，XHTML只能这样写：<input disabled="true">

（六）：XHTML中的内容标记与结构标记要区分开来。
XHTML不允许内容标记（比如：<p>）里面嵌套结构标记（比如：<table>、<div>等）。
Dreamweaver里面有错误提示。

** CSS标准以及HTML引入CSS的方法 **
目前最流行的CSS版本为2.1版本和3.0版本，都是由W3C组织制定的。
引入CSS的方法大致有3种：
（一）：行内式
行内式就是在标记的style里面写入CSS，如：<div style="width:500px; background:#ffffff;">文字</div>

（二）：嵌入式
嵌入式就是把CSS写在网页的<head>与</head>之间，例如：
<html>
<head>
<style type="text/css">
body{font-size:12px; margin:0; padding:0;}
#content{width:900px; margin:auto;}
</style>
</head>
<body>
<div id="content">文字</div>
</body>
</html>

（三）：导入式与链接式。
链接式：推荐在<head>与</head>之间写：<link href="style.css" rel="stylesheet" type="text/css"/>
导入式：<style type="text/css">
@import"style.css";
</style>
（推荐各位使用链接式，便于修改与管理）		