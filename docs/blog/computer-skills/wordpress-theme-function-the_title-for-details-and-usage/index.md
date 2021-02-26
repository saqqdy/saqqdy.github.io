---
layout: post
title: WordPress主题函数the_title()的详细介绍与用法		
date: 2011-04-07
tags: ["the_title()","WordPress","WordPress技巧","小技巧"]
---

the_title()函数与the_title_attribute()函数类似，主要用来获取当前文章的title，其后可以跟上三个参数（可全部省略，取默认值），调用形式如下：

<?php the_title('before', 'after', display); ?>

参数before用来设置在获取的title前面显示的字符内容；
after用来设置title其后显示的内容；
而display是一个Bool值，用于控制获取的title是否显示出来。		