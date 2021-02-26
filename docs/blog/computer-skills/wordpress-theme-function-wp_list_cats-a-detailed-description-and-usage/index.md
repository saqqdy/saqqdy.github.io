---
layout: post
title: WordPress主题函数wp_list_cats()的详细介绍与用法		
date: 2011-01-29
tags: ["WordPress","WordPress技巧","wp_list_cats()","小技巧"]
---

wp_list_cats()函数和前文wp_list_categories()函数实现相同的功能，不过在最新的WordPress版本中，此函数已经被弃用，其功能为wp_list_categories()函数完全取代。

wp_list_cats()函数用来获取博客文章的分类信息，基本上和wp_get_archives()函数类似，并可以通过设置适当的函数参数，将其显示出来。该函数的参数和wp_get_archives()函数一样，都需要使用&连接，放在单引号 (')中以字符串方式传递。形如wp_get_archives('orderby=name&order=ASC& show_count=1&use_desc_for_title=1&feed=订阅&exclude=2,5& number=10′)。

如上示例中，函数各参数的意义如下：

orderby=name表示按照分类名称的字母先后顺序显示分类信息，可以将name换为ID等；

order=ASC表示按照分类名称的字母的升序显示分类信息，将ASC改为DESC表示按降序；

show_count=1在每个分类名称后面显示属于该分类的文章数；

use_desc_for_title=1使用该分类的描述信息为每个分类名称超链接添加一个title属性；

feed=订阅：在每个分类信息旁边添加一个名为"订阅"的超链接，提供该分类的RSS订阅；

exlude=2,5：在显示的分类中去除ID为2和5的分类；也可以用include=2,5表示只显示ID为2和5的分类；

number=10：表示只显示最先的10个分类。		