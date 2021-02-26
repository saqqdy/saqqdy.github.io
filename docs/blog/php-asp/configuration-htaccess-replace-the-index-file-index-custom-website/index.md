---
layout: post
title: 配置.htaccess替换index自定义网站索引文件		
date: 2011-07-11
tags: [".htaccess","PHP/ASP","前端","网站索引"]
---

改变缺省的首页文件，一般情况下缺省的首页文件名有default、index等。不过，有些时候目录中没有缺省文件，而是某个特定的文件名，比如在w3sky中是 w3sky.PHP。这种情况下，要用户记住文件名来访问很麻烦。在.htaccess中可以轻易的设置新的缺省文件名：

DirectoryIndex 新的缺省文件名

也可以列出多个，顺序表明它们之间的优先级别，例如：

DirectoryIndex filename.html index.cgi index.pl default.htm

也许你不想一直使用index.htm或index.html作为目录的索引文件。举例来说，如果你的站点使用PHP文件，你可能会想使用index.PHP来作为该目录的索引文档。当然也不必局限于"index"文档，如果你愿意，使用.htaccess你甚至能够设置 foofoo.balh来作为你的索引文档！

这些互为替换的索引文件可以排成一个列表，服务器会从左至右进行寻找，检查哪个文档在真实的目录中存在。如果一个也找不到，它将会把目录列表显示出来（除非你已经关闭了显示目录文件列表）。

DirectoryIndex index.PHP index.PHP3 messagebrd.pl index.html index.htm		