---
layout: post
title: WordPress主题函数wp_logout_url()的详细介绍与用法		
date: 2011-01-11
tags: ["WordPress","WordPress技巧","wp_logout_url()","小技巧"]
---

使用wp_logout()函数尽管可以方便地为WordPress博客设置登录、退出链接，但自定义不够灵活，从WordPress 2.7版本开始，提供了wp_logout_url()函数。用来获取WP博客"退出"超链接。然后，我们使用获得的超链接即可编写如下代码，来对WP博客的登录和 退出链接进行灵活设置：

<a href="<?php echo wp_logout_url(); ?>">点击这里退出

当然，要想实现完美的效果，还需要对访客的登录状态进行判断，使用一个if语句，根据登录状态显示相应的菜单项。		