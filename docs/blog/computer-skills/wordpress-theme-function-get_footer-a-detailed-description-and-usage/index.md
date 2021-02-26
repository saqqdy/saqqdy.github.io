---
layout: post
title: WordPress主题函数get_footer()的详细介绍与用法		
date: 2011-04-01
tags: ["get_footer()","WordPress","WordPress技巧","小技巧"]
---

get_footer()函数跟get_header()函数、get_sidebar()函数和comments_template()函数都是用来在WordPress主题中获取并包含相应的文件的。get_footer()函数用来包含当前主题文件夹下的footer.php；

需要注意的一点是，如果当前主题文件夹下缺少对应的文件，则函数会使用wp-content/themes/default/文件夹下的对应文件代替。

此外，以上函数后面都不能跟参数，另外，在主题中如果想包含一个具体的文件，还可以使用如下方式：

include(TEMPLATEPATH . '/***.php')

如上的函数形式可以将当前主题文件夹下名为***.php的文件包含进来；
其中TEMPLATEPATH是当前主题文件夹地址的一个引用（不含末尾的/，所以需要添加上）。		