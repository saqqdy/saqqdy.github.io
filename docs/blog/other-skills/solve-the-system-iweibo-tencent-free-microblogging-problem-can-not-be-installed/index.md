---
layout: post
title: 解决腾讯免费微博系统iWeibo不能安装的问题		
date: 2011-03-13
tags: ["iWeibo","其它技巧","小技巧","微博系统","虚拟站点"]
---

腾讯发布了其免费的微博系统iWeibo，上岸QQ的鱼也撰文描述了这一微博系统。第一时间安装了iWeibo，把安装过程遇到的问题跟解决方法整理出来与大家分享一下。

iWeibo不能安装主要有两个问题：

第一个是关于OpenSSL未开启的问题，这个问题在《<a title="关于腾讯免费微博系统iWeibo安装过程提示OpenSSL未开启" href="http://www.saqqdy.com/computer-skills/about-tencent-free-microblogging-system-iweibo-not-open-the-installation-process-prompts-openssl" target="_blank">关于腾讯免费微博系统iWeibo安装过程提示OpenSSL未开启</a>》里面已经整理出了解决方案！

第二个问题是腾讯微博系统的问题。就拿我的电脑来说吧！我使用的是PHPnow集成环境。Apache版本：2.2，PHP版本：5.2.14，MySQL版本：5.1.50，操作系统：Windows 7 Ultimate SP1 X64简体中文版。PHPnow环境下网站目录是htdocs，把iWeibo源码放进里面，访问方式为：http://127.0.0.1/iWeibo/，iWeibo的安装路径是：http://127.0.0.1/iWeibo/install/，打开之后会发现"安装进度条"那里的图片无法显示。然后点击安装的时候提示某某文件找不到，安装无法继续。反复试验还是不行。情形如下图所示：

<a rel="attachment wp-att-480" href="http://www.saqqdy.com/computer-skills/solve-the-system-iweibo-tencent-free-microblogging-problem-can-not-be-installed/attachment/iweobowrong1"><img class="alignnone size-full wp-image-480" title="iweobowrong1" src="iweobowrong1.jpg" alt="" width="410" height="309" /></a>

<a rel="attachment wp-att-481" href="http://www.saqqdy.com/computer-skills/solve-the-system-iweibo-tencent-free-microblogging-problem-can-not-be-installed/attachment/iweobowrong2"><img class="alignnone size-full wp-image-481" title="iweobowrong2" src="iweobowrong2.jpg" alt="" width="480" height="384" /></a>

** 解决方法： **

考虑到可能是路径的问题，我们可以改用另一种安装方式"虚拟站点"，PHPnow提供了虚拟站点这一功能，只需将一个本地域名（或者IP）映射到本地虚拟站点这个路径就行了，比如：设置一个本地域名www.weibo.con，映射到本地IP 127.0.0.1，然后用PHPnow建立一个www.weibo.con的虚拟站点。具体方法详见《<a title="使用PHPnow建立虚拟站点教程" href="http://www.saqqdy.com/computer-skills/tutorial-to-create-a-virtual-site-using-phpnow" target="_blank">使用PHPnow建立虚拟站点教程</a>》。OK，重启Apache服务器，在浏览器输入：http://www.weibo.con，就能打开那个微博站点了。然后再一步一步按照提示去安装就行了！		