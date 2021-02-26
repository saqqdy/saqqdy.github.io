---
layout: post
title: WordPress主题函数single_post_title()的详细介绍与用法		
date: 2011-04-10
tags: ["single_post_title()","WordPress","WordPress技巧","小技巧"]
---

single_post_title()函数用于获取当前文章页面的title字符串。其后可跟两个参数，调用形式如下：

<?php single_post_title('前缀',display); ?>

可以使用形如<?php single_post_title('当前文章：',TRUE); ?>或<?php single_post_title('当前文章：'); ?>的调用形式来显示如下的结果：

当前文章：WordPress主题函数single_post_title()的详细介绍与用法

此外，也可以像之前的the_title()、the_title_attribute()函数一样，将显示属性设置为false，把获取的title字符串传给一个变量，以供其他语句使用。此时的调用形式如下：

<?php $tt = single_post_title('当前文章：',false); ?>

&nbsp;		