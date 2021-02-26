---
layout: post
title: 【入门篇】DHTML简介以及DOM的产生、DOM的含义		
date: 2010-05-01
tags: ["DHTML","DOM","Javascript/ES6/ES7","PHP/ASP","前端"]
---

DHTML包含3个意思：
** 第一： **通过HTML把网页标记为各个元素；例如："<div id="a">DIV 标记</div>"
** 第二： **利用CSS控制网页样式；例如：#a{position:absolute; left:30px; top:50px;}
** 第三： **利用Javascript来控制各个标记。Javascript就可以改变以上left跟top的值，从而使div发生移动。

但是，问题也随之而生，虽然各大厂商都希望网页更加强大，功能更加完美，但是为了各自的利益，都采取了不同的方法，使得各自的DOM模型都互不兼容。这种不兼容主要是Netscape公司与Microsoft公司。
Netscape公司的DOM访问该DIV标记的方法是：document.layers['a']，而微软的IE使用的是：document.all['a']。当然，差异远远不止这一点。直到W3C组织制定了标准之后，这种现象才有所改观。

DOM的含义：
DOM解决了上面所说的浏览器之间的冲突，它把整个网页规划成由节点层级构成的文档。在DOM模型里，Html标记都被认为是一个对象，例如：div对象，table对象等等。DOM模型就规定了这些对象所具有的属性、方法和事件。通过这些性质，可以对一个已经显示于浏览器的页面进行内容的修改，例如增加节点、修改节点位置，删除节点等等。而不仅仅是一个innerHTML属性这么简单，虽然这是一个很有用的属性。		