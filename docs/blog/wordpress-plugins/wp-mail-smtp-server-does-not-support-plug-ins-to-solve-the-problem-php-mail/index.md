---
layout: post
title: WP Mail SMTP插件解决服务器不支持php_mail邮件的问题		
date: 2010-11-23
tags: ["WordPress插件","WordPress插件","WP Mail SMTP","资源"]
---

上文跟各位网友推荐了一款超强悍的wordpress数据库备份插件，不过据我了解，有很多免费服务器和部分收费服务器都不支持php_mail邮件，这会引起什么样的问题呢？首先，wordpress默认是使用php_mail邮件功能来给用户发送邮件的，如果服务器不支持这个功能，那么当你选择WP DB Backup用来把数据库备份到你的邮箱的时候就不行了，因为无法把邮件发送到你的邮箱，另外，如果你的服务器不支持php_mail邮件也不能使用wordpress的文章评论提醒功能。

WP Mail SMTP插件就很好的解决了这一问题，WP Mail SMTP插件的作用就是将wordpress默认使用php_mail邮件改成SMTP方式来发送邮件，当然，这需要你提供SMTP服务器了，QQ的SMTP就不错！

一、下载WP Mail SMTP: <a href="http://www.saqqdy.com/?r=http://www.callum-macdonald.com/code/wp-mail-smtp/" target="_blank">http://www.callum-macdonald.com/code/wp-mail-smtp/</a>，然后安装并激活WP Mail SMTP。

二、安装好之后会在设置里面出现一个"Email"选项，进入进行如下设置（假如你的邮箱是abcd@qq.com）：
From Email：abcd@qq.com；
From Name：（随便）；
Mailer：<label for="mailer_smtp">Send all WordPress emails via SMTP；
SMTP Host：smtp.qq.com；
SMTP Port：25（固定端口是25）；
Encryption：NO Encryption；
Authentication：<label for="smtp_auth_true">Yes: Use SMTP authentication；
Username：abcd（一般跟你的邮箱前缀一致）；
</label></label>Password：（你的SMTP密码，跟你的QQ邮箱密码一致）；

三、你可以在最下面Send a Test Email里面随便填个其他的邮箱测试一下！

关于WP DB Backup的详细介绍请查阅：<a href="http://www.saqqdy.com/download/wordpress-database-backup-wp-db-backup-plugin-support-for-scheduled-backups">http://www.saqqdy.com/download/wordpress-database-backup-wp-db-backup-plugin-support-for-scheduled-backups</a>		