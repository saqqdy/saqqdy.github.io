---
layout: post
title: WordPress站点的robots.txt文档怎么写		
date: 2012-05-29
tags: ["robots.txt","WordPress","小技巧"]
---

为了让网站达到最优的搜索引擎效果，节约搜索引擎资源，某种程度上还能降低网站流量，相信大家一定会对本文感兴趣。为什么写这篇文章呢？其实看前一篇文章就看得出来，本站因为消耗大量的流量资源和CPU资源，不得已对本站进行了升级维护，除了禁用了wp-cron.php，本站还设置了专门针对本站的robots.txt文档。

设置如下：
> Sitemap: http://www.cssdashi.com/sitemap_baidu.xml
Sitemap: http://www.cssdashi.com/sitemap.xml.gz

User-agent: Mediapartners-Google*
Disallow: /

User-agent: duggmirror
Disallow: /

User-agent: *
Disallow: /cgi-bin/
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-content/plugins/
Disallow: /wp-content/cache/
Disallow: /wp-content/themes/
Disallow: /*/trackback
Disallow: /trackback/
Disallow: /feed/
Disallow: /*/feed
Disallow: /comments/feed
Disallow: /comments/
Disallow: /category/*/*
Disallow: */comments/
Disallow: /*?
Disallow: /?r=*
Disallow: /?s=*
Disallow: /*/?s=*
Disallow: /?p=*
Disallow: /*/comment-page-*
Disallow: /*?replytocom*
Disallow: /?p=*&preview=true
Disallow: /?page_id=*&preview=true
Disallow: /wp-login.php
Allow: /wp-content/uploads/
不过请不要完全抄袭哦！		