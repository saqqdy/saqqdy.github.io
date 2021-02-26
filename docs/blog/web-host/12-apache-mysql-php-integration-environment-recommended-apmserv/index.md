---
layout: post
title: 12款Apache+MySQL+PHP集成环境推荐：APMServ 5.2.6		
date: 2012-09-18
tags: ["APMServ","LAMP","PHP集成环境","Web服务器","小技巧"]
---

这是上岸QQ的鱼给大家推荐的第七款PHP集成环境，APMServ 5.2.6 是一款拥有图形界面的快速搭建Apache 2.2.9、PHP 5.2.6、MySQL 5.1.28＆4.0.26、Nginx 0.7.19、Memcached 1.2.4、phpMyAdmin 2.11.9.2、OpenSSL、SQLite、ZendOptimizer，以及ASP、CGI、Perl网站服务器平台的绿色软件。无需安装，具有灵活的移动性，将其拷贝到其它目录、分区或别的电脑时，均只需点击APMServ.exe中的启动按钮，即可自动进行相关设置，将Apache和MySQL安装为系统服务并启动。APMServ集合了Apache稳定安全的优点，并拥有跟IIS一样便捷的图形管理界面，同时支持MySQL 5.0 & 4.0两个版本，虚拟主机、虚拟目录、端口更改、SMTP、上传大小限制、自动全局变量、SSL证书制作、缓存性能优化等设置，只需鼠标一点即可完成。

<a href="http://www.saqqdy.com/download/12-apache-mysql-php-integration-environment-recommended-apmserv/attachment/apmserv" rel="attachment wp-att-819"><img class="alignnone size-full wp-image-819" title="APMServ" src="APMServ.gif" alt="" width="606" height="454" /></a>

1、注意事项：APMServ程序所在路径不能含有汉字和空格。
2、MySQL默认用户名：root，密码为空
3、MySQL数据库文件存放目录：MySQL5.1\data或MySQL4.0\data
4、网站根目录[HTML,PHP]www\htdocs [ASP]www\asp [CGI,Perl]www\cgi-bin
5、访问本机请用http://127.0.0.1/或https://127.0.0.1/ (如果开启SSL)
6、非默认端口，网址为http://127.0.0.1:端口/或https://127.0.0.1:端口/
7、如果在"扩展功能"中选择使用Memcached，它的端口为：11211
8、APMServ集成了以下软件：

Apache 2.2.9 【HTTP服务器】
Nginx 0.7.19 【HTTP服务器】
NetBox 2.8 Build 4128 【HTTP服务器＋ASP脚本解释引擎】
PHP 5.2.6 【PHP脚本解释引擎】
MiniPerl 5.8 【Perl脚本解释器】
Memcached 1.2.4 【key-value内存缓存系统】
MySQL 5.1.28 【MySQL数据库服务器】
MySQL 4.0.26 【MySQL数据库服务器】
phpMyAdmin 2.11.9.2 【MySQL数据库在线管理工具】
eAccelerator 0.9.5.3 【PHP脚本加速引擎】
ZendOptimizer 3.3.3 【PHP脚本加速引擎】
OpenSSL 0.9.8h 【HTTPS(SSL)安全传输协议】

** 附加组件： **
Perl、CGI支持（需下载ActivePerl）：
APMServ 5.2.6 附带的是MiniPerl，可以运行简单的Perl、CGI程序。如果运行复杂的Perl、CGI程序，请下载ActivePerl，安装在APMServ所在分区根目录下的usr目录中。假如APMServ所在目录为E:\APMServ5.2.6，则将ActivePerl的安装路径选为E:\usr

** 注意事项： **
迅雷、Skype、PPLive、BT等软件启动后默认会占用80端口，导致Apache无法启动。解决方法：先关闭这些软件，启动完APMServ之后，再开启这些软件。		