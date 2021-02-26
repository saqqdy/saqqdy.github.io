---
layout: post
title: 配置.htaccess停示显示目录列表		
date: 2011-07-09
tags: [".htaccess","PHP/ASP","前端","显示目录"]
---

有些时候，由于某种原因，你的目录里没有index文件，这意味着当有人在浏览器地址栏键入了该目录的路径，该目录下所有的文件都会显示出来，这会给你的网站留下安全隐患。

就像下图这样：

<a href="http://www.saqqdy.com/web-design/configuration-htaccess-blocker-display-a-directory-listing/attachment/htaccess-menu-list" rel="attachment wp-att-529"><img class="alignnone size-full wp-image-529" title="htaccess menu list" src="htaccess-menu-list.jpg" alt="" width="400" height="404" /></a>

为避免这种情况（而不必创建一堆的新index文件），你可以在你的.htaccess文档中键入以下命令，用以阻止目录列表的显示：
Options -Indexes		