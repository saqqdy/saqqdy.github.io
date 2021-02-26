---
layout: post
title: WordPress主题函数get_recent_posts()的详细介绍与用法		
date: 2011-03-16
tags: ["get_recent_posts()","WordPress","WordPress技巧","小技巧"]
---

get_recent_posts()函数只有当你安装了** 中文WordPress工具箱 **之后，才能使用。get_recent_posts()作用是用来获取最新日志，函数原型如下：

get_recent_posts($no_posts = 5, $before = '<li>+ ', $after = '</li>', $show_pass_post = false, $skip_posts = 0)

可以使用$no_posts控制显示文章数量，$before和$after的意义和前面函数中相同；
至于后两个参数，一般不必设置，直接取默认值即可。

不过因为该函数与WordPress内置的get_posts()和query_posts()函数功能重复，所以通常情况下很少使用。建议使用get_posts()和query_posts()替代这个函数，说不定WordPress将来的版本会封杀这个老函数。

&nbsp;		