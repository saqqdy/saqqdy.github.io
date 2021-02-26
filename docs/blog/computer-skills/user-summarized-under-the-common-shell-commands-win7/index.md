---
layout: post
title: 网友总结Win7下常用shell命令		
date: 2010-12-18
tags: ["shell命令","Windows技巧","Windows系统","小技巧"]
---

来自网友的超牛逼的总结，特地跟大家分享一下。Windows7中的shell命令行，估计许多用户都没有发现的又一重要更新吧，Windows7 shell是Win7系统的控制台。对于熟悉了命令行的人来说，用键盘调用程序比鼠标更快更省力。用户可以用"Shell:"命令调用一切可以用资源管理器打开的项目一次完需要很多步骤才能完成的任务，并且使用时的语法也很简单。但许多用户都不知道shell命令有哪些，与可实现的操作，那么接下来我们将对常用shell命令进行全面解析，帮助用户了解新系统下的新命令。?

** shell:Profile **该命令可以打开用户的总目录。在常规安装的情况下，位置是c:\users\username。你也可以通过点击系统开始菜单上的用户名称访问。也可以通过系统环境变量%userprofile%访问。

** shell:Personal **这个命令可以打开当前用户的文档文件夹。也可以通过点击开始菜单中的我的文档进行访问。

** shell:SendTo **这个命令可以访问系统"发送到"文件夹。如果你进入你的个人文件夹，会发现这个文件夹是隐藏的，如果试图双击进入，就会显示错误信息，通过 shell命令则可以正常访问。这是因为这个快捷方式实际上是个跳转入口，为了向后兼容所创建。而真正的SendTo文件夹是隐藏在AppData文件夹下的若干子文件夹。

** shell:Public **这个命令可以打开公用共享文件夹。如果你使用了家庭组功能，这个命令可以在一个窗口之内先是信息。

** shell:Common Startup和shell:Startup **这个命令可以显示哪些程序在系统启动时会自动启动。有时程序安装的时候会自动在启动菜单中建立一个快捷方式。

** shell:ConnectionsFolder **这个命令可以显示当前网络连接。这个命令应该是查看当前网络连接最快捷的方式了。通常的方法是单击网络和共享中心，然后选择更改适配器设置查看。

** shell：programs和shell:Common Programs **这两个命令可以访问当前用户和系统用户开始菜单中的程序列表。

** shell:AppData和shell:Local AppData **这两个命令可以打开Roaming Application Data(漫游应用数据文件夹)Local Application Data(本地应用数据文件夹)。这两个文件夹在日常应用中不常用到，你可以发现，像Firefox之类的应用程序在这个文件夹下存储配置信息。

** shell:Cookies和shell:cache **这两个命令是查看Internet Explorer存储信息最快捷的方式。

** shell:Profile **当前登录用户的根目录

** shell:UsersFilesFolder **与shell:profile相同

** shell:Personal **当前登录用户的"我的文档"文件夹

** shell:My Music **当前登录用户的"我的音乐"文件夹

** shell:My Pictures **当前登录用户的"我的图片"文件夹

** shell:My Video **当前登录用户的"我的视频"文件夹

** shell:Contacts **当前登录用户的联系人文件夹

** shell:Desktop **当前登录用户的桌面文件夹

** shell:Downloads **当前登录用户的下载文件夹

** shell:Favorites **当前登录用户的Internet Explorer浏览器收藏夹

** shell:Searches **当前登录用户的搜索文件夹，保存了已经存储过的搜索结果

** shell:Links **当前登录用户的链接文件夹，保存了Internet Explorer浏览器的导航面板

** shell:Public **访问共享用户文件夹

** shell:Common Desktop **共享用户桌面

** shell:Common Documents **共享用户我的文档

** shell:CommonDownloads **共享用户下载文件夹

** shell:CommonMusic **共享用户音乐文件夹

** shell:CommonPictures **共享用户图片文件夹		