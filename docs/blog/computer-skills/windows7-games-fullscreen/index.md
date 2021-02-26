---
layout: post
title: 解决windows7系统下 运行游戏无法全屏的问题		
date: 2009-12-29
tags: ["Windows7技巧","Windows系统","小技巧","注册表","游戏无法全屏"]
---

用windows7有2个月了，不过用windows7玩游戏今天还是头一次，windows7的图像渲染能果然是不同反响，玩游戏比在XP系统下爽多了。

不过却也发现了一个小小的问题：运行全屏的游戏却总是全屏不了，只是检查并上百度求助才最终解决了这个问题。下面跟网友分享一下：

在开始搜索框输入regedit打开注册表，定位到HKEY_LOCAL_MACHINE/SYSTEM/ControlSet001/Control/GraphicsDrivers/Configuration，然后右键点击Configuration，选择查找，输入Scaling，在右框内即可看到scaling，双击scaling进入修改，将数值改为3即可，原值为4。大功告成！

最后祝大家游戏愉快！		