---
layout: post
title: 【入门篇】Dreamweaver CS4建立站点、连接数据库		
date: 2010-05-01
tags: ["ASP/PHP/Ajax","Dreamweaver建立站点","PHP/ASP","前端","数据库连接字符串"]
---

ASP编程技巧第一课要开始了，首先介绍一下我的电脑以及ASP制作平台：
?电脑型号：宏基ACER 4925G（601G16Mn）
内存：3G DDR2 667
CPU：酷睿2双核T7500 2.2GHz
显卡：NVIDIA GeForce 9300显卡 256MB显存 64bit位宽

操作系统：Windows 7 Ultimate 64位操作系统
IIS：IIS7
数据库：access 2003版本数据库（数据库软件为access 2007）
网页制作：Dreamweaver CS4

网站根目录："F:/网站/web/"

** 第一步： **建立虚拟目录"web"，具体方法请查阅：<a href="http://www.saqqdy.com/computer-skills/windows-xp-iis-site-virtual-directory">http://www.saqqdy.com/computer-skills/windows-xp-iis-site-virtual-directory

</a>XP系统建立虚拟目录跟windows7里面差不多。

** 第二步： **在网站根目录建立数据库"web.mdb"，保存好之后进入下一步。

** 第三步： **打开Dreamweaver CS4，首先建立一个站点"web"，具体方法请查阅：<a href="http://www.saqqdy.com/computer-skills/windows-xp-iis-site-virtual-directory">http://www.saqqdy.com/computer-skills/windows-xp-iis-site-virtual-directory</a>
完成之后就可以开始连接数据库了。

** 第四步： **连接数据库最常用的方法有三种。
<span style="color: red;">（一）：Driver={Microsoft Access Driver (*.mdb)};DBQ=F:/网站/web/web.mdb
（二）："Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("web.mdb")
（三）："Driver={Microsoft Access Driver (*.mdb)};Uid=;Pwd=;DBQ=" & Server.MapPath("web.mdb")
可以任意选一种，在"数据库"添加自定义连接字符串里面，使用以上三种方法的任意一种连接数据库，点击"测试连接"，成功之后就完成了ASP网页制作的第一步了。		