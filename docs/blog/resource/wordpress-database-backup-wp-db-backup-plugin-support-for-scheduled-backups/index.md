---
layout: post
title: WordPress数据库备份插件WP DB Backup支持定时备份		
date: 2010-11-23
tags: ["WordPress插件","WordPress插件","WP DB Backup","数据库备份","资源"]
---

WP-DB-Backup 可以很方便地备份你的WordPress核心数据库，另外还有一些不太重要的数据表可以根据自己的需要有选择的进行备份。WP-DB-Backup 一个非常人性化的功能就是支持把备份数据定时发送到你的邮箱中或者直接存储到你的空间目录里，而且插件是以中文显示的，可以很好的照顾到那些英文不太好的朋友们。WP DB Backup可以选择定时备份数据库并发到你自己的邮箱，可以选择备份频率：每小时一次、每天两次、每天一次、每周一次。这里建议服务器不大稳定或者免费服务器用户选择每日备份一次。

** WP-DB-Backup 使用方法 **
1.首先要下载 WP-DB-Backup 插件，下载后安装插件并激活。

2.这时候在"工具"里面多出了一个选项"备份"点击备份链接进入插件的设置界面。

3.整个插件功能界面异常简洁，就分了三个模块，分别为"数据表"、"备份选项"和"定时备份"。

4.在"数据表"里面列举了所有 WordPress 的数据表，其中核心数据表会默认备份，剩下的数据表你可以有选择的进行勾选。

5.备份选项里面有"保存至服务器"，"下载至本地电脑"，"通过电子邮件发送备份至..."三个选项供选择，如果要发送到邮箱可以填写相应的邮件地址。（首先确定你的服务器支持php_mail邮件）

6.定时备份就是可以自定义计划任务了。你可以根据需求选择相应的时间和数据表，最后点击下面的 Schedule backup 之后就会将这些设置保存，以后就可以让它自动发送数据库文件到指定的位置了。

插件下载地址：<a href="http://www.saqqdy.com/?r=http://wordpress.org/extend/plugins/wp-db-backup/">http://wordpress.org/extend/plugins/wp-db-backup/</a>

PS：如果发现你备份完成之后无法在你的邮箱中收到备份文件，那就说明你的服务器不支持php_mail邮件，我们可以采用SMTP发送方式来解决这一问题，请查阅：<a href="http://www.saqqdy.com/download/wp-mail-smtp-server-does-not-support-plug-ins-to-solve-the-problem-php-mail">http://www.saqqdy.com/download/wp-mail-smtp-server-does-not-support-plug-ins-to-solve-the-problem-php-mail</a>		