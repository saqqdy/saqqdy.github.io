---
layout: post
title: 【入门篇】Javascript的数据类型以及字符型数据介绍		
date: 2010-05-27
tags: ["Javascript/ES6/ES7","Javascript数据类型","PHP/ASP","前端","字符型"]
---

Javascri&#112;t一共有9种数据类型，分别是未定义（undefined）、空（NULL）、布尔型（Boolean）、字符串（string）、数值（number）、对象（object）、引用（reference）、列表（list）和完成（completion）。后三种是Javascri&#112;t运行时中间结果的数据类型，不能在代码中使用。
需要注意的是：字符串型数据具有length属性，用来返回字符串的字符数。<br />
例如：var a="saqqdy";<br />
alert(a.length);
另外，字符串可以是字母、数字、标点符号和空格，并且字符串必须放在双引号或者单引号之间。特殊情况下，当字符串里面包含双引号时，应当把整个字符串放进单引号里面。<br />
例如：var a='saqqdy"saqqdy"';
当然，也可以使用转义字符<br />
例如：var b="saqqdy12\'32\"";
如果希望显示指定位置的字符，也可以使用charAt()函数来实现。<br />
例如：var c="saqqdy";alert(c.charAt(4));即：显示第4个字符&ldquo;d&rdquo;。
如果要从某个字符串中取出其中的一段字符串可以采用slice()、substring()或者substr()方法。其中，slice()和substring()都接受2个参数，分别为子字符串的起始位置和终止位置，这二者之间的子字符串不包括终止位置的那个字符。如果第二个参数不设置，则默认为字符串的长度。<br />
例如：var d="saqqdysaqqdysaqqdy";<br />
document.write(d.slice(2,-4)+"<br/>");<br />
document.write(d.substring(2,4)+"<br/>");<br />
document.write(d.substr(5)+"<br/>");<br />
......
这两个方法的区别在于对负数的处理不同，负数参数对于slice()而言是从末尾往前计数，而substring()则直接把负数忽略，把负数当做0来处理。并将两个参数中较小的作为起始位。例如：substring(3,-4)等同于substring(0,3)。
Javascri&#112;t也提供搜索操作，Javascri&#112;t提供了indexOf()和lastIndexOf()方法。不同之处在于前者从前往后搜，后者相反。他们的返回值都是子字符串开始的位置（从0开始计数）。<br />
例如：var d="saqqdysaqqdysaqqdy";<br />
document.write(d.indexOf("q")+"<br/>");<br />
document.write(d.indexOf("q",4)+"<br/>");数值"4"代表从第四个字符开始查找。<br />
document.write(d.lastIndexOf("q",5)+"<br/>");<br />
......如果没有找到，则返回-1。
		