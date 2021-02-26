---
layout: post
title: WordPress主题函数get_recentcomments()的详细介绍与用法		
date: 2011-03-20
tags: ["get_recentcomments()","WordPress","WordPress技巧","小技巧"]
---

get_recentcomments()函数跟get_recent_comments()函数一样，都不是WordPress自带的函数，get_recentcomments()函数是在安装了WP-RecentComments插件之后才具有的功能，用来显示最新评论功能。这个函数一般不常用，如果非必要的话，建议不要使用这个函数。

get_recentcomments()函数原型如下：

get_recentcomments(int num, int size)

参数num表示返回的最新评论数量；
size表示返回的评论内容的长度。		