---
layout: post
title: 关于腾讯免费微博系统iWeibo安装过程提示OpenSSL未开启		
date: 2011-03-12
tags: ["iWeibo","OpenSSL","其它技巧","小技巧","微博系统"]
---

在《<a title="腾讯发布免费微博系统iWeibo 开放行动继续" href="http://www.saqqdy.com/news/tencent-releases-free-open-mobile-microblogging-system-iweibo-continue">腾讯发布免费微博系统iWeibo 开放行动继续</a>》一文中详细介绍了腾讯免费微博系统iWeibo，上岸QQ的鱼第一时间下载并安装了iWeibo。安装过程并不顺利，首先服务器环境这一环节就没有通过，提示OpenSSL......没有开启，用的是PHPnow一直都没遇到这样的问题，也只好跟朋友请教了。

要想开启OpenSSL支持，系统需要安装libeay32.dll和ssleay32.dll两个库。（一般情况下系统都自带的，不用担心！）

如果你以前安装过OpenSSL，那么你的系统目录中应该已经存在这两个文件;如果没有安装，PHP的windows发行包里同样附带了这两个文件，将其复制到%system%/system32目录下即可。

下面讲述开启方法：

以PHPnow为例（别的请打开php.ini文件），PHPnow需要打开?php-5.2.14-Win32/php-apache2handler.ini这个文件（php-5.2.14-Win32：这个名称不是绝对的，不同的版本PHP文件夹名称不一样）。

打开?php-apache2handler.ini这个文件之后搜索一下：OpenSSL，会有一行：";extension=php_openssl.dll"，把这行前面的";"去掉就行了，变成"extension=php_openssl.dll"。OK，重启apache服务器！		