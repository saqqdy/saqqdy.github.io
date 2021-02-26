---
layout: post
title: WordPress主题函数wp_login_url()的详细介绍与用法		
date: 2011-01-13
tags: ["WordPress","WordPress技巧","wp_login_url()","小技巧"]
---

前面介绍的wp_logout_url()函数来对WP博客的退出链接进行灵活设置，从WordPress 2.7版本开始，还提供了wp_login_url()函数。用来获取WP博客"登录"超链接。然后，我们使用获得的超链接即可编写如下代码，来对WP博客的登录链接进行灵活设置：

<a href="<?php echo wp_login_url(); ?>">点击这里登录

当然，要想实现完美的效果，还需要对访客的登录状态进行判断，使用一个if语句，根据登录状态显示相应的菜单项。		