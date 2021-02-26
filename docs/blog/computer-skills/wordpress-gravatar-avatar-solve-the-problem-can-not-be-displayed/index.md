---
layout: post
title: 解决WordPress无法显示Gravatar头像的问题		
date: 2010-10-20
tags: ["Gravatar头像","WordPress","WordPress技巧","小技巧"]
---

近日突然发现博客加载速度慢了，半天都下不来，仔细检查发现是Gravatar头像的问题，Gravatar头像居然无法显示了。无奈只好把头像功能关了，原来是Gravatar的问题，国内无法正常显示以0.gravatar.com和1.gravatar.com为前缀的头像了。而以www.gravatar.com为前缀的却可以正常显示，如果你启用了头像缓存插件或主题具备头像缓存功能，空间主机又在国外，不会受到影响，而国内主机则无法实现头像缓存，到底是什么原因呢？

WordPress 从2.5版开始集成了Gravatar头像功能，随着使用Gravatar头像的用户越来越多，为了减轻服务器负担，Gravatar网站采用CDN（内容分发网络），就近从Gravatar网站服务器加载头像，提高页面打开速度。正因为如此从WordPress 3.0开始，改进源代码适应CDN，提高头像加载速度，所以国内wordpress3用户就杯具了。

默认情况下还在使用老版本WordPress的用户，由于没有启用CDN功能，所以前缀是www.gravatar.com，直接从主站加载头像，不会受到影响。

下面就说说如何修改WordPress源文件，让博客直接从www.gravatar.com加载Gravatar头像。

用Dreamweaver（最好不要用记事本！）打开WordPress程序wp-includes目录中的pluggable.php

** 第一步 **：在第1649行找到：$host = sprintf( "http://%d.gravatar.com", ( hexdec( $email_hash{0} ) % 2 ) );
修改为：$host = sprintf( "http://www.gravatar.com", ( hexdec( $email_hash{0} ) % 2 ) );

** 第二步 **：在第1651行找到：$host = 'http://0.gravatar.com';
修改为：$host = 'http://www.gravatar.com';

完成保存后覆盖原文件即可。温馨提示：如果你使用了WP Super Cache，记得清理一下缓存！		