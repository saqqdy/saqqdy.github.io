---
layout: post
title: WordPress主题函数wp_register()的详细介绍与用法		
date: 2011-02-15
tags: ["WordPress","WordPress技巧","wp_register()","小技巧"]
---

wp_register()函数用以向管理员显示"站点管理"超链接；或者当WP博客开放了注册时，向未登陆的用户显示"注册"超链接。

该函数不需要什么参数，唯一可能用到的参数形式如wp_register('before','after')，可以在如上显示的超链接文字的前后分别显示一个"before"字和一个"after"字。当然，你可以据此发挥想象力来个性化自己网站的管理或注册链接。		