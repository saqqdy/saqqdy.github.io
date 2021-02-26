---
layout: post
title: 【入门篇】Javascript的数据类型 数值型 布尔型数据介绍		
date: 2010-05-31
tags: ["Javascript/ES6/ES7","Javascript数据类型","PHP/ASP","前端","布尔型","数值型"]
---

** Javascript的数值型数据 **比较简单，例如：
var a=123;
var b=12.33;
var c=-23;
var d=3e6;（科学计数法）
另外，Javascript数值型数据还有一个函数toExponential()方法，该方法将数据转换成科学计数法，该方法接受一个参数，表示要输出的小数位数。
例如：var a=567.87;
alert(a.toExponential(2));

** Javascript的布尔型数据 **也比较简单，只有true和false两种取值，需注意的是，其值不能加引号，否则就变成字符型数据了。可以用typeof()方法输出数据的数据类型。		