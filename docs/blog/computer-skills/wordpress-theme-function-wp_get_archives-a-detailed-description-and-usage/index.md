---
layout: post
title: WordPress主题函数wp_get_archives()的详细介绍与用法		
date: 2010-12-18
tags: ["WordPress","WordPress技巧","wp_get_archives()","小技巧"]
---

wp_get_archives()函数用来获取博客的文章存档，通过设置函数的参数，可以按各种方式获取，如按月，按年等等。
wp_get_archives()函数后面同样可以跟多种参数，只不过所有参数都需要使用&连接，并放在单引号(')中以字符串方式传递 给函数，形如wp_get_archives('type=monthly&format=html& show_post_count=1&limit=10')。

如上的参数意义描述如下：
type=monthly表示按月显示文章存档，可以使用yearly、daily、weekly等代替monthly表示按年、日、以及周显示文章存档；
format=html表示使用通常的HTML中

格式化文章列表；
show_post_count=1表示在文章存档后面显示属于该类别（年、月等）的文章数量，该参量是个bool值；
limit=10表示显示的文章存档的最大数量为10，超过次数，则超出部分不显示；
尽管参数稍多，显得略为复杂，但其实只需注意type、show_post_count以及limit等三个参量即可。		