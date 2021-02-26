---
layout: post
title: 关于windows7优化大师在64位WIN7系统下清理注册表的问题		
date: 2010-04-28
tags: ["64位WIN7","Windows7优化大师","Windows系统","小技巧","清理注册表"]
---

在我第一次使用windows7的时候，我就已经接触了windows7优化大师，就我个人使用经验以及个人使用习惯而言，软媒的这几款软件都相当不错，像"酷点"、"windows7优化大师"、"Vista优化大师"等等，我都有用过，都有比较深刻的体会。
不过最近换装windows7 64位版本之后，有一些小问题就出来了，作为一个网页设计人员来说，数据库自然是不可或缺的，网页编程已经是我的家常便饭。今天就出现意外了：在我进行一次注册表清理之后意外发现ACCESS数据库连接失效，本地站点已经无法访问。
当然，这有两点原因：
第一点：64位系统IIS里面的"应用程序池"在默认情况下是不开启32位支持的。
具体的windows7系统下IIS的启用与配置，以及64位windows7的配置方法请参照：<a href="http://www.saqqdy.com/computer-skills/windows7-iis-x64-configuration">http://www.saqqdy.com/computer-skills/windows7-iis-x64-configuration</a>

第二点：首先要说明的是我电脑一开始是好好的，清理注册表之后就出现了如图所示的情况，系统里面的某些DLL注册失败，没法启用某些数据源驱动程序。重新安装系统之后再次运行注册表清理，还是一样的情况，我就郁闷了。		