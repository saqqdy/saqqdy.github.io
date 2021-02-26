---
layout: post
title: WordPress主题函数single_cat_title()的详细介绍与用法		
date: 2011-03-23
tags: ["single_cat_title()","WordPress","WordPress技巧","小技巧"]
---

single_cat_title()函数是用来获取分类页面和tag页面的title，single_cat_title()还可以用来在tag页面上获取当前页面的title，使用方法跟single_cat_title()基本一致，不过不同的是single_cat_title()还可以用来在tag页面上获取当前页面的title；但single_tag_title()却不可用于获取分类页面的title。其通常的使用方式如：

<?php
$str = single_cat_title();
echo $str;
?>

single_cat_title()函数用于获取当前分类页面的title字符串。其后可跟两个参数，调用形式如下：

<?php single_cat_title('前缀',display); ?>

可以使用形如<?php single_cat_title('当前文章：',TRUE); ?>或<?php single_cat_title('当前文章：'); ?>的调用形式来显示如下的结果：

当前文章：WordPress主题函数single_cat_title()的详细介绍与用法

此外，也可以像之前的the_title()、the_title_attribute()函数一样，将显示属性设置为false，把获取的title字符串传给一个变量，以供其他语句使用。此时的调用形式如下：

<?php $tt = single_cat_title('当前文章：',false); ?>。		