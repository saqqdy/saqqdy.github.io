---
layout: post
title: WordPress主题函数get_bloginfo()的详细介绍与用法		
date: 2011-01-24
tags: ["get_bloginfo()","WordPress","WordPress技巧","小技巧"]
---

WordPress主题函数还真是不少，不同的函数有不同的作用。get_bloginfo()函数主要用来显示博客的信息；而且根据后跟参数的不同，会输出博客的不同信息。

其后不跟参数时，get_bloginfo()可以显示博客名称，形如"上岸QQ的鱼"；

后跟其他参数时，可以显示对应的信息，比如get_bloginfo ( 'description' )用以显示博客描述信息；

其他还可以使用的参数包括name、url、wpurl以及admin_email等等。但因为其与bloginfo()函数实现相同的结果，所以，在bloginfo能够实现的情况下，月夜不推荐使用get_bloginfo()函数。		