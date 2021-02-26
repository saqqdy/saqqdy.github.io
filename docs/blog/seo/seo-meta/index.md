---
layout: post
title: 网站搜索引擎优化之Meta元标签篇		
date: 2009-10-30
tags: ["Meta","SEO","SEO"]
---

Meta元标签位于网页源代码之间，它是用来在HTML文档中模拟HTTP协议的响应头报文。Meta的属性有两种：name和http-equiv。对于搜索引擎优化人员来说，我们只重点关注Meta的name属性。

Meta的name属性主要用于描述网页，对应于网页内容，以便于搜索引擎机器人查找和分类。其中，对于SEO来说最重要的是Description（站点在搜索引擎上的描述）、Keywords（分类关键词）和Robots（机器人对具体页面进行索引的情况），所以应该给每页完善Meta值。2005年之前，Meta部分的内容对搜索引擎优化的最终效果能起到很大作用，很多SEO人员在Meta的Keywords和Description部分泛滥堆积关键词来获得好的关键词排名，造成很多并不能给用户提供有价值信息的网页在搜索结果中排名很靠前，此举已经给用户的搜索体验造成了极大的伤害。后来，这种排名作弊行为被搜索引擎察觉，在其新一轮的算法更新中，搜索引擎淡化了Meta的Keywords和Description部分信息在排名因素中的权重。

虽然Meta部分的信息没有以前那么重要，其对排名效果影响并不那么大，但是搜索引擎仍然会把其作为评定网页质量的一个因素，所以我们应该尽可能完善每个页面的Meta值。接下来我们就介绍以上三个meta值的书写方法：

1、Keywords

Keywords的具体网页源码表现形式为：。Keywords向搜索引擎说明你的网页的关键词。每个页面的源代码Keywords的content部分填写1-3个关键词，关键词之间请以半角逗号分来。Keywords部分的关键词应从当前页面的主要展示内容信息中提炼而来。

2、Description

Description具体网页源码表现形式为：。Description告诉搜索引擎你的站点上的页面的主要内容。Description的content部分文字内容最好控制在100个字符左右，行文流畅。Description部分的内容应该是具体页面主要展示信息的简洁而强有力的概述。

3、Robots

Robots的具体网页源码表现形式为：。

Robots的content部分文字可以填写的内容为：all、none、index、noindex、follow和nofollow。对于Robots的content部分填充内容有如下说明解释：

设定为all：文件将被检索，且页面上的链接可以被查询

设定为none：文件将不被检索，且页面上的链接不可以被查询

设定为index：文件将被检索

设定为follow：页面上的链接可以被查询

设定为noindex：文件将不被检索，但页面上的链接可以被查询

设定为nofollow：文件将不被检索，页面上的链接可以被查询。

一般来说，大部分网站并没有太多的内容禁止搜索引擎机器人索引，Robots的通用写法都是：。如果想对Robots做一些个性化的设置，可以参照上面的相关说明来完善Robots的content部分内容。		