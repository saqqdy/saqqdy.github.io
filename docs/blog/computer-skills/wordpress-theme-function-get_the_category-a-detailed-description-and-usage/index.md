---
layout: post
title: WordPress主题函数get_the_category()的详细介绍与用法		
date: 2010-12-27
tags: ["get_the_category()","WordPress","WordPress技巧","小技巧"]
---

get_the_category()函数用来返回当前文章所属的类别的若干属性所组成的一个数组，该数组包括以下内容：

cat_ID：当前类别的ID(也可以写作'term_id')；

cat_name：当前类别的名称(也被写作'name')；

category_description：当前分类的描述(也可以写作'description')；

category_count：属于当前分类的文章数量(也被写作'count')。

具体的使用方法，我们通过下面的几个句子来说明：

形如get_the_category()->cat_ID的语句，返回当前文章所属分类的ID号；

形如get_the_category()->description的语句，返回当前文章所属分类的描述；等等。		