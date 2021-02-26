---
layout: post
title: WordPress主题函数the_title_attribute()的详细介绍与用法		
date: 2011-04-09
tags: ["the_title_attribute()","WordPress","WordPress技巧","小技巧"]
---

the_title_attribute()函数与the_title()类似，主要用来获取当前文章的title，其后可以跟上三个参数（可全部省略，取默认值），调用形式如下：

the_title_attribute('before=前&after=后&echo=true')

其中before=和after=分别用于设置title前面和后面显示的字符；
echo=true或者false用户设置获取的title字符串是否显示出来。

形如<?php the_title('当前文章', '的评论：', true); ?>或the_title_attribute('before=当前文章&after=的评论：&echo=true')的调用形式将会显示如下的结果：

当前文章"xxxx"的评论：		