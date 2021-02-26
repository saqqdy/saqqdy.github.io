---
layout: post
title: 【入门篇】Javascript的语法和变量		
date: 2010-05-25
tags: ["Javascript/ES6/ES7","Javascript变量","Javascript语法","PHP/ASP","前端"]
---

** Javascript的语法 **Javascript的语法很容易掌握，大致有以下几点：
（1）：Javascript区分大小写，其变量、函数、运算符以及其他所有代码都是区分大小写的。
（2）：Javascript的变量是弱类型变量，所谓的弱类型就是指变量没有特定的类型，定义变量只需要使用var关键字即可，可以将其初始化为任意的值。
例如：var a=22;
var b="saqqdy";
var c=true;
（3）：每行结尾的分号可有可无。如果没有分号，就默认把这行代码的结尾看做该句的结尾。
（4）：Javascript里面的括号用于代码块。
例如：if (a==2){......}
（5）：Javascript的注释方式与C语言相同。
例如：//单行注释
/*多行注释*/
另外，Javascript代码是包含在<script>和</script>之间的。

** Javascript变量： **Javascript的变量可以不经定义直接使用。
例如：var a="saqqdy";
var b=a+"saqqdy";
alert(b);
结果是：saqqdysaqqdy。

在定义变量的时候，有3条规则需要注意。
（1）：首字符必须是字母（大小写都可以）、下划线、或者美元符号（$）。
（2）：除首字符外，剩下的字符可以是下划线、美元符号、任意字母或数字。
（3）：变量名必须避开关键字或者保留字。
例如：var saqqdy;
var $saqqdy_123;
var _saqqdy123;		