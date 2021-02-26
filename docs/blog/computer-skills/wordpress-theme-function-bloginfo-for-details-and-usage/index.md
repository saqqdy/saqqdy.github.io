---
layout: post
title: WordPress主题函数bloginfo()的详细介绍与用法		
date: 2010-12-14
tags: ["bloginfo()","WordPress","WordPress技巧","小技巧"]
---

有段时间没好好写文章了，最近一直忙着找工作的事情，也一直在忙着重写简历，今日就趁着这个好日子写上几段吧！首先就允许我为自己先说上一句：祝自己生日快乐！

顾名思义，该函数主要用来显示博客信息；根据参数的不同，可以用来显示博客信息中的不同部分。常用的有以下几种：

bloginfo('name') 显示博客题名，如"上岸QQ的鱼"；
bloginfo('description') 显示博客描述部分，如"专注互联网前端技术 您身边的建站专家"；
bloginfo('url') 输出博客URL地址，如http://www.saqqdy.com；
bloginfo('rss2_url') 显示博客的RSS2.0 feed地址，如http://www.saqqdy.com/feed；
bloginfo('template_url') 用来获取WordPress博客的模板地址；
bloginfo('charset') 显示博客的编码方式，如"UTF-8"；

一种常见的使用bloginfo()函数的组合如下：

<a href="<?php bloginfo('url'); ?>" title="<?php bloginfo('description'); ?>"><?php bloginfo('name'); ?>

需要注意的是bloginfo()函数只能输出显示这些参量，如果你想在PHP语句中使用得到的这些值，则需使用get_bloginfo()函数，该函数和bloginfo()使用相同的参数，获得相同的结果。		