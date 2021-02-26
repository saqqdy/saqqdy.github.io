---
layout: post
title: 使用PJW Mime Config插件解决WordPress上传文件类型限制问题		
date: 2010-08-18
tags: ["PJW Mime Config","WordPress插件","WordPress插件","文件类型限制","资源"]
---

用过WordPress的朋友估计都知道，WordPress的文件上传功能添加了文件类型限制，只能上传图片、视频、音乐等媒体文件，却限制了诸如rar、zip等文件的上传，这对于一些经常上传压缩包文件的朋友来说无疑是一个悲剧，网上也有很多相关的解决方案，大部分都不尽如人意，那些方案也相当的老套，只能解决老版本的问题，新版本就无能为力了，而且，基本上都是需要自行修改文件代码，步骤繁琐不说，也会造成网页维护和升级时的困难，很容易出现问题。

最方便快捷的解决方法无疑是使用插件，PJW Mime Config插件就专门针对这个问题进行了完善。让用户可以自行添加想要上传的文件类型。

安装PJW Mime Config插件之后，激活该插件，然后进入该插件的管理菜单进行设置，如图所示：
<a href="PJW-Mime-Config.gif"><img class="alignnone size-full wp-image-245" title="PJW Mime Config" src="http://www.saqqdy.com/wp-content/uploads/2010/09/PJW-Mime-Config.gif" alt="" width="584" height="326" /></a>

<span style="color: red;">例如：你想添加对rar文件的支持，你可以在File Extension框内填入rar，在Associated mime-type框内填入application/rar，确认之后，您就可以上传rar格式的文件了，是不是非常的方便呢？

这款插件在WordPress官方网站上面也有下载！

pjw-mime-config.1.00本站下载

下载地址：[download id="941" format="1"]		