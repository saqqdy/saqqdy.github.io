---
layout: post
title: 合理设置WordPress固定链接 提升搜索引擎收录		
date: 2010-11-30
tags: ["WordPress","WordPress技巧","固定链接","小技巧"]
---

大家都知道搜索引擎优化技术吧？至少有听说吧！这里简单介绍一下影响搜索引擎优化的一个比较关键的因素：固定链接方式。搜索引擎优化方面关于网页的链接是有一定的优先级的，搜索引擎最喜欢的链接首先是顶级域名，比如：saqqdy.com。其次是二级域名，比如：bbs.saqqdy.com、email.saqqdy.com，然后是目录，比如：www.saqqdy.com/blog/，再就是以静态网页了，或者说是以HTM/HTML为后缀的网页（PHP的伪静态也算）。最后就是动态网页了，形如：www.saqqdy.com/index.php或者www.saqqdy.com/?p=888等等！设置目录式的链接方式将有助于提升网站的收录情况。下面就针对wordpress的固定链接作个说明吧！

1、不要让日期出现在固定链接里面

这基于两个方面的考虑。一是如果数字出现在固定链接里面，等于提醒搜索引擎，这是很旧的内容了，没必要再爬一遍了。另外一个原因是，假如你要修改文章的日期重新发布的话，链接地址就变了，也就是意味着你的反向链接，PR 等等都没有了。

2、不要让分类的链接出现在固定链接里面

这一点是很多人都会忽略的地方。让分类出现在固定链接里面有两个缺陷：一是一篇文章如果选择了多个分类的话，则会出现多个链接地址，这很容易造成因为重复内容而被搜索引擎惩罚；二是有可能会造成关键词堆砌而被搜索引擎惩罚。

3、链接不要过深

这一点经常看到。很多wordpress 用户的固定链接是年/月/日/分类名/文章名。这种过于深的固定链接对搜索引擎是非常不友好的。

4、不要让中文字符出现在固定链接里面

虽然现在的搜索引擎已经能识别URL地址里面的中文字符，但无论是从美观上，还是从wordpress 优化的角度来看，都是非常差的。

wordpress固定链接设置的一些参数：

1.%year%：基于文章发布的年份，比如2010；
2.%monthnum%：基于文章发布的月份，比如01；
3.%day%：基于文章发布当日，比如06；
4.%hour%：基于文章发布小时数，比如23；
5.%minute%：基于文章发布分钟数，比如43；
6.%second%：基于文章发布秒数，比如33；
7.%postname%：基于文章的postname，其值为撰写时指定的缩略名，不指定缩略名时是文章标题；
8.%post_id%：基于文章post_id，比如48；
9.%category%：基于文章分类，子分类会处理成"分类/子分类"这种形式；
10.%author%：基于文章作者名。

将上述参数进行组合，即可得到wordpress的固定链接形式。

常见的几种设置方法：

/%year%/%monthnum%/%day%/%postname%/
/%year%/%monthnum%/%postname%/
/%year%/%monthnum%/%day%/%postname%.html
/%year%/%monthnum%/%postname%.html
/%category%/%postname%.html
/%post_id%.html
/archives/%category%/%author%/%postname%
/archives/%postname%

PS：本站使用的固定链接是：/archives/%category%/%author%/%postname%，这里不推荐大家使用这种链接方式，因为这样的链接方式太长了，推荐大家的链接方式是：/%postname%。这样就OK了。非常简洁！		