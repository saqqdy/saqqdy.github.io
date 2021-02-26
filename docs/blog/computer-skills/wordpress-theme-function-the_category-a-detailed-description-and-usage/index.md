---
layout: post
title: WordPress主题函数the_category()的详细介绍与用法		
date: 2011-01-06
tags: ["the_category()","WordPress","WordPress技巧","小技巧"]
---

the_category()该函数返回当前文章所属的类别名称，而且是文章类别的超链接形式。

默认的无参数形式the_category()直接以超链接形式显示类别名称，显示为：精品推介；

可以在函数中跟上分隔符等参数来格式化输出，如the_category('-')，若当前文章属于两个以上分类，可以显示这样的形式：精品推介-经验知识；如只属于一个分类，则显示为这样的形式：精品推介。

这里顺便提一下：

来自WordPress官方博客的消息，WordPress 3.1 RC2发布。

WordPress 3.1 RC2的一些改变（从3.1 RC1开始 ）

修复WordPress 3.0.4中的安全漏洞。
修复WordPress静态首页的问题。
修复并加强了WordPress分页功能（主要是按钮）。
加强WordPress的任意字段搜索功能。
修改了WordPress插件修改之后的状态功能。
支持显示多个作者在同时修改某一篇文章的状态。
加强了附件分类功能。
加强WordPress的多语种功能。

官方下载：<a href="http://www.saqqdy.com/?r=http://wordpress.org/wordpress-3.1-RC2.zip">http://wordpress.org/wordpress-3.1-RC2.zip</a>

目前已经是小修小改了。所以，WordPress 3.1会在不久的将来发布。		