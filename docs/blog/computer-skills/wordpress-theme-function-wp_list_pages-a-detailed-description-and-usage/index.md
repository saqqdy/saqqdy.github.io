---
layout: post
title: WordPress主题函数wp_list_pages()的详细介绍与用法		
date: 2011-02-10
tags: ["WordPress","WordPress技巧","wp_list_pages()","小技巧"]
---

wp_list_pages()函数以页面名称的超链接形式显示WordPress博客内的所有页面，经常用来建立顶端导航页面，或用来修饰侧边栏。

形如wp_list_pages('title_li=&sort_column=menu_order&include=12,25,38,57&depth=1&');的函数调用，各参数意义如下：

title_li=用来设置所有显示页面的一个总名称；后面没有参数值时，表示不显示名称；

sort_column=menu_order用来设置页面的显示顺序，表示按照WP后台设置的各页面顺序显示，其他的常用顺序设置可能还包括post_title、post_date、ID等等；

include=12,25,38,57表示只显示ID为这四个数值的四个页面；同样，可以使用exclude来排除相应ID的页面；

depth=1表示只显示父页面，对所有子页面不予显示；其他数值还包括默认的0，表示显示所有页面（子页面有缩进）；-1显示所有页面（子页面无缩进）；等等。

此外，该函数可能会用到的属性还包括link_before和link_after，用于设置显示的页面链接前后的字符。		