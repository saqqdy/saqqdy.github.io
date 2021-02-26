---
layout: post
title: 使用PHPnow建立虚拟站点教程		
date: 2011-03-14
tags: ["PHPnow","Web服务器","小技巧","虚拟站点"]
---

如果你是学习PHP网页设计的，那你对PHPnow这个集成环境一定不会陌生，对于PHP的集成环境现在有很多款，比较有名的也都试过，这里给大家推荐PHPnow，PHPnow使用非常方便，即使你重装了系统，你只要对PHPnow重新初始化即可，原有的所有站点所有数据都在，非常的方便，也不需要像别的集成环境一样每次使用都要开启什么命令。PHPnow免去了这一切。

大家都知道，PHPnow的站点是放在htdocs目录下的，使用"http://127.0.0.1/站点目录名/ "这样的链接方式访问站点。其实PHPnow还提供了虚拟站点的功能，虚拟站点的站点文件是放在vhost目录下面的。使用虚拟站点可以更加简便的访问本地网站。前面提及腾讯免费微博系统安装过程遇到的问题也可以一并解决。详见《<a title="解决腾讯免费微博系统iWeibo不能安装的问题" href="http://www.saqqdy.com/computer-skills/solve-the-system-iweibo-tencent-free-microblogging-problem-can-not-be-installed" target="_blank">解决腾讯免费微博系统iWeibo不能安装的问题</a>》。

** 如何建立虚拟站点？ **
第一步：打开C:/Windows/System32/drivers/etc/,用文本文档编辑器打开该目录下的host文件，在文档最后面另起一行，写上：127.0.0.1 www.weibo.con，这样就能使用http://www.weibo.con/访问127.0.0.1了。注意，域名是www.weibo.con，而不是www.weibo.com，如果你想设置www.baidu.com，那么你就不能访问百度网站了，会直接访问127.0.0.1这个站点。

第二步：打开PHPnow目录下面的?PnCp.cmd，输入"0"，添加虚拟主机。主机名输入："weibo"，按enter键之后要求输入主机别名，输入："www.weibo.con"，然后需要输入网站目录（留空则使用主机名"weibo"作为目录名），然后"是否分配此主机给其他用户"输入"N"，OK了！

第三步：将网站文件放到/vhost/weibo/目录中，在浏览器地址栏输入http://www.weibo.con/就能访问了！		