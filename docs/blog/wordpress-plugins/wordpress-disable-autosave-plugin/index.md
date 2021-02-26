---
layout: post
title: Disable Autosave插件解决WordPress自动保存草稿的问题		
date: 2010-08-18
tags: ["Disable Autosave","WordPress插件","WordPress插件","自动保存草稿","资源"]
---

WordPress有一个给你让人很蛋疼，WordPress在编辑文章的时候默认自动保存草稿，这一点会造成服务器的负担加重，影响网页加载速度，另外，产生的草稿文件也会使数据库过于庞大，维护不便。还会使得文章ID不连续，让人头疼。

WordPress还有另外一个令人头疼的问题，文章修改之后，WordPress会保留原始版本，造成大量的数据库冗余。

下面就介绍两个最好的解决方法，分别解决以上两个问题！

（一）：使用Disable Autosave插件解决，用插件来解决WordPress自动保存草稿的问题当然是最好的，也是最简单的，只要安装插件就行了，具体安装方法相信大家都清楚，就不再赘述了。

这个插件就一个文件，插件下载

下载地址：[download id="931" format="1"]

（二）：这个问题也很好解决，找到网站根目录下面的wp-config.php文件，在里面插入一句代码就可以禁用这个功能了。代码如下：
define('WP_POST_REVISIONS', false);

WordPress功能强大，还有太多太多的地方等待你来发掘。支持WordPress！！		