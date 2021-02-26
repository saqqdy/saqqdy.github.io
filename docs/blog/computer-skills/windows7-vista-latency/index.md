---
layout: post
title: 解决windows7/Vista系统下电脑无法休眠的问题		
date: 2010-07-20
tags: ["Windows休眠","Windows系统","小技巧","混合睡眠","电脑休眠"]
---

睡眠跟休眠对于一些不愿意等待开机超长时间的人来说都是相当值得用的功能，都能很快速的将电脑恢复到上次的状态。如果有发现电脑不能休眠了，请不要惊慌，下面提供完美的解决方法。

Win7不能休眠问题，通常休眠问题跟以下几个方面有关：

1.无线有线网卡
2.指纹识别器
3.键盘鼠标等外设的驱动程序
4.电源管理设置

解决步骤：

1.升级当前所有硬件兼容Win7、Vista的驱动，如无线网卡驱动、蓝牙驱动等硬件。
2.在不使用系统后，关闭如未连接的蓝牙、未连接的无线网等未匹配且开启的硬件。
3.依次展开：右键"计算机"→"管理"→"设备管理器"→ 然后在网卡等设备上右键属性 →将"允许此设备唤醒计算机"前面的勾选去掉。
4.通过PowerCFG命令行设置
依次展开"开始菜单"→"程序"→"附件"→"命令提示符"→键入"powercfg -a"。
<a href="windows-sleep.gif"><img class="alignnone size-full wp-image-266" title="windows sleep" src="http://www.saqqdy.com/wp-content/uploads/2010/09/windows-sleep.gif" alt="" width="516" height="290" /></a>

查看计算机是否支持休眠以及所有能唤醒电脑的设备。如果问题出在休眠文件上，可使用PowerCfg.exe /HIBERNATE /SIZE 百分比命令更改休眠文件体积为物理内存大小的百分比。最后使用PowerCfg.exe /HIBERNATE /SIZE 75，可以把75改成100解决休眠的问题。

PS：以上方法也是网上搜集而来，经过本人辛苦的测试，确实可以完美解决休眠的问题。		