---
layout: post
title: WordPress主题函数wp_head()的详细介绍与用法		
date: 2011-03-29
tags: ["WordPress","WordPress技巧","wp_head()","小技巧"]
---

wp_head()函数与前文提到的wp_meta()函数相同，是WP主题为WP插件留下的API Hook。wp_head()函数通常会紧跟wp_register()、wp_loginout()的后面，其具体在直观显示上没有什么异样，上岸QQ的鱼建议在wp_register()、wp_loginout()的后面跟上这一函数。

wp_head()可以理解为用来显示meta元素的一个辅助函数，目前的实用性还不是很强。

关于wp_head()函数的介绍还是不多的，比较比较少用到这个函数，希望本文能够给广大主题设计师们带来帮助！		