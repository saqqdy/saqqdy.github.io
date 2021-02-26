---
layout: post
title: WordPress主题函数category_description()的详细介绍与用法		
date: 2011-01-07
tags: ["category_description()","WordPress","WordPress技巧","小技巧"]
---

category_description()该函数以分类的ID为输入，得到该分类的描述。category_description()常和echo、get_the_category()配合使用，将当前分类描述输出：

例如：echo category_description(get_the_category()->cat_ID);

如上语句，get_the_category()得到保存有当前分类信息的一个数组；
cat_ID为该数组中该分类的ID；
将该ID输入给category_description()函数，即可得到该分类的描述；
然后使用echo将其输出。

经上岸QQ的鱼试验，使用如下的语句可以实现和上面语句相同的功能：

echo category_description();

这可能是因为该函数在默认无参数输入的情况下会输出当前分类描述的结果吧。

PS：有些函数在WordPress的不同版本里面是有区别的，如果某条函数不可用，说明你的WordPress版本可能需要更新！		