---
layout: post
title: WordPress主题函数get_settings()的详细介绍与用法		
date: 2011-03-25
tags: ["get_settings()","WordPress","WordPress技巧","小技巧"]
---

get_settings()函数与前文get_bloginfo()函数以及get_option()函数类似，使用方法也相同，可以参照get_bloginfo()函数的调用方式，通过后跟各种参数来获取WordPress博客的相关信息。

比如如下的调用方式：

get_settings('name')或get_option('name')

可以用来获取当前WordPress博客的标题。		