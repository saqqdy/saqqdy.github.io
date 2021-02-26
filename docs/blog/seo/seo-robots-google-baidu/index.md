---
layout: post
title: 网站SEO最常用的 robots.txt使用教程		
date: 2010-06-05
tags: ["robots.txt","SEO","SEO","搜索引擎优化"]
---

首先，我来介绍一下什么是robots.txt：robots.txt是搜索引擎中访问网站的时候要查 看的第一个文件。Robots.txt文件告诉蜘蛛程序在服务器上什么文件是可以被查看的。当一个搜索蜘蛛访问一个站点时，它会首先检查该站点根目录下是 否存在robots.txt，如果存在，搜索机器人就会按照该文件中的内容来确定访问的范围;如果该文件不存在，所有的搜索蜘蛛将能够访问网站上所有没有 被口令保护的页面。最后，robots.txt必须放置在一个站点的根目录下。

　　大家可以参考一下谷歌、百度和腾讯的robots写法：

　　<a href="http://www.google.com/robots.txt">http://www.google.com/robots.txt</a>

　　<a href="http://www.baidu.com/robots.txt">http://www.baidu.com/robots.txt</a>

　　<a href="http://www.qq.com/robots.txt">http://www.qq.com/robots.txt</a>

　　大家了解完robots.txt后，那么我们可以用robots.txt来做什么?

　　1、用robots.txt屏蔽相似度高的页面或没内容的页面。

　　我们知道，搜索引擎收录网页后，会对网页进行"审核"，而当两个网页的相似度很高时，那么搜索引擎就会删除掉其中一个，并且会降低一点你网站的得分。

　　假设以下这两个链接，内容其实差不多，那么第一个链接就应该屏蔽掉。

　　/XXX?123

　　/123.html

　　像第一个的链接这样的链接非常多，那么我们要怎么屏蔽呢?其实只要屏蔽/XXX?就可以屏蔽所有的链接了。

　　代码如下：

　　Disallow： /XXX?

　　同理，一些没有内容的页面我们也可以利用相同的办法将其屏蔽掉。

　　2、用robots.txt屏蔽多余的链接，一般保留静态的链接(既HTML、htm、shtml等)。

　　由于网站中经常会出现多个链接指向同一个页面的情况，而这样会让搜索引擎对网站的友好度降低。为了避免这一个情况，我们就可以通过 robots.txt把 非主要的链接去掉。

　　比如以下两个链接指向同样的页面：

　　/OOO?123

　　/123.html

　　那么我们就应该去掉第一个垃圾，代码如下：

　　Disallow： /OOO?123

　　<!--nextpage-->3、用robots.txt屏蔽死链

　　死链就是曾经存在的网页，因为改版或其他原因而失去效用后就变成死链，也就是说看似一个正常的网页链接，但点击后不能打开相对应的网页页面。

　　比如，原来在目录为/seo下的所有链接，因为目录地址的改变，现在都变成死链接了，那么我们可以用robots.txt把他屏蔽掉，代码如下：

　　Disallow： /seo/

　　4、告诉搜索引擎你的sitemap.xml地址

　　利用robots.txt可以告诉搜索引擎你sitemap.xml文件的地址，而不需要在网站上添加sitemap.xml的链接。具体代码如下：

　　Sitemap： 你的sitemap地址

　　以上就是robots.txt的基本用法，一个好的网站必定会有一个好的robots.txt，因为robots.txt是搜索引擎了解你网站的一 个途径。另外在这里我推荐一下一个比较适合wordpress用户使用的robots.txt写法：

　　User-agent： *

　　Disallow： /wp-

　　Disallow： /feed/

　　Disallow： /comments/feed

　　Disallow： /trackback/

　　Sitemap： http://你的域名.com/sitemap.xml

　　最后，如果你觉得上面所说的还不能满足你的需要，那么你可以在谷歌或百度官方提供的robots.txt使用指南学习：

　　百度：<a href="http://www.baidu.com/search/robots.html">http://www.baidu.com/search/robots.html</a>

　　谷歌：<a href="http://www.google.com/support/forum/p/webmasters/thread?tid=4dbbe5f3cd2f6a13&hl=zh-CN">http://www.google.com/support/forum/p/webmasters/thread?tid=4dbbe5f3cd2f6a13&hl=zh-CN</a>

后记:说来惭愧，我第一次接触robots.txt是因为帮老白他们写关于WEB安全的书要用到robots.txt
robots.txt这东西确实不错，但从安全的角度来说很多时候会"此地无银三百两"，有人把网站后台藏得很好，可是还是被黑，后来查了原因，发现是robots.txt把自己出卖了，因为后台的地址赤裸裸地显示在那里呢！		