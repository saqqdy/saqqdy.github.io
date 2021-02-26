---
layout: post
title: WordPress主题函数wp_tag_cloud()的详细介绍与用法		
date: 2011-02-14
tags: ["WordPress","WordPress技巧","wp_tag_cloud()","小技巧"]
---

顾名思义，wp_tag_cloud()函数用来显示WordPress博客的标签云。

一种形如wp_tag_cloud('smallest=8&largest=22&number=30&orderby=count');的函数调用，各参数的意义如下：

smallest=8用来设置标签云中显示出来的所有标签中，计数最少（最少文章使用）的标签的字体大小为8；

largest=22用来设置标签云的所有标签中，计数最多（最多文章使用）的标签的字体大小为22；

number=30设置标签云中显示的最多标签数量为30；

orderby=count设置标签云中标签的排序方式为计数（默认），而不是名称（相应参数为name，widget调用时的默认值）。

其他常用的参数还包括include和exclude，用来设置在标签云中是否包含或去除ID为某数字的标签。		