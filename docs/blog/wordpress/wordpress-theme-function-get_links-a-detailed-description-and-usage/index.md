---
layout: post
title: WordPress主题函数get_links()的详细介绍与用法		
date: 2011-02-06
tags: ["get_links()","WordPress","WordPress技巧","小技巧"]
---

get_links()函数实现和wp_list_bookmarks()相同的功能，get_links()函数已在WordPress升级的过程中为wp_list_bookmarks()所取代。

get_links()函数用来显示博客的友情链接，并可以使用各种参数来控制显示的数量、种类以及样式等等。

形如get_links()('title_li=&categorize=0&orderby=rand&include=41,40,37,54′);的形式，意义解释如下：

title_li=&categorize=0是一种通常使用的组合，意为不显示WordPress后台控制面板中设置的友情链接标题，但所有友链都按照设置的分类显示出来；单独的一个title_li=还可以用来设置被显示友链的类别名称；

orderby=rand设置友链的显示方式为随机顺序，当然，还可以设置为其他的方式，比如id、url、name等等；

include=41,40,37,54表示只显示ID为这四个数字的四个友链；与此对应，还支持使用exclude，表示不显示ID为多少的友链。

此外，该函数还经常用到的参数有before和after，用来设置每个链接前后的文字，默认的是<li>和</li>标记。		