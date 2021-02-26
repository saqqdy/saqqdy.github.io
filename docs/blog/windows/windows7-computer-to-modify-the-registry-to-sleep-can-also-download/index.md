---
layout: post
title: 修改注册表让windows7电脑睡眠状态也能下载		
date: 2010-10-09
tags: ["Windows7睡眠下载","Windows系统","小技巧","离开模式"]
---

看着标题就觉得新奇，windows7居然能在睡眠状态下联网，而且还能让软件开着，很不可思议，还没来得及试验，下面就教大伙如何让电脑在睡眠状态下下载吧！当然，vista系统也是可以的，XP系统貌似就不行了！相信大家都对windows7的睡眠功能有所了解吧。

关于电脑睡眠、休眠、关机、待机的介绍可以参考这篇文章：<a href="http://www.saqqdy.com/computer-skills/windows7-vista-shutdown-sleep-dormancy-latency">http://www.saqqdy.com/computer-skills/windows7-vista-shutdown-sleep-dormancy-latency</a>，电脑睡眠的时候是把系统当前数据存放在内存里面，并给内存供少量电以维持数据部丢失，这也就是windows7所谓的"离开模式"吧！在这个状态下要实现网络部断开并且还能维持软件继续工作似乎是不太可能的，不过windows7/vista还真就能做到这点。首先打开注册表编辑器：依次进入HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SessionManager\Power，然后在右侧窗口空白处单击鼠标右键，新建一个"DWORD32位"的值，命名为"AwayModeEnabled"，双击给该键赋值为"1"(16进制)。?OK！		