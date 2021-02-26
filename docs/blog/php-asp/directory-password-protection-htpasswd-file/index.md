---
layout: post
title: 目录密码保护的.htpasswd文件		
date: 2011-07-20
tags: [".htaccess",".htpasswd","PHP/ASP","前端","目录加密"]
---

目录的密码保护比.htaccess的其他功能要麻烦些，因为你必须同时创建一个包含用户名和密码的文档，用于访问你的网站，相关信息（默认）位于一个名为.htpasswd的文档里。像.htaccess一样，.htpasswd也是一个没有文件名且具有8位扩展名的文档，可以放置在你网站里的任何地方（此时密码应加密），但建议你将其保存在网站Web根目录外，这样通过网络就无法访问到它了。

在使用.htaccess来设置目录的密码保护时，它包含了密码文件的路径。从安全考虑，有必要把.htaccess也保护起来，不让别人看到其中的内容。虽然可以用其他方式做到这点，比如文档的权限。不过，.htaccess本身也能做到，只需加入如下的指令：

order allow,deny
deny from all

有关目录密码保护的.htaccess文件请阅读《<a title="目录密码保护的.htaccess文件" href="http://www.saqqdy.com/web-design/directory-password-protection-htaccess-file" target="_blank" rel="noopener noreferrer">目录密码保护的.htaccess文件</a>》		