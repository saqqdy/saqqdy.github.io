---
layout: post
title: Win7安全删除USB设备之后，怎样灭掉LED灯彻底关闭USB设备		
date: 2012-09-18
tags: ["USB设备","Windows系统","安全删除","小技巧","彻底关闭USB"]
---

亲爱的网友，你是否发现在当你在系统中安全删除USB设备之后，会发现USB设备上的LED指示灯还是常亮的。实际上这个效果是在Vista系统时才改变的，之前的XP系统都是安全删除之后LED灯就会灭掉。当时微软对系统做了一个变化，并沿用至今。请看关闭教程！

在XP系统时代，如果你安全删除了USB设备，USB设备就停止通电，LED灯自然也就不亮了。而从Vista系统开始，微软做出了修改，即便安全删除USB设备，设备还会继续通电。如果你觉得有需要，希望USB设备再安全删除之后不亮灯，那就看看下面的方法是如何做到的吧。

具体操作方法如下：

1.Win+R组合键打开运行，输入regedit，打开注册表编辑器；

2.打开注册表后，定位到该路径HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\usbhub

3.在usbhub中创建项HubG，并在项中创建一个DWORD（32位）值，命名为DisableOnSoftRemove
备注：如果是64位系统，请新建对应的DWORD（64位）

<a href="http://www.saqqdy.com/computer-skills/safely-remove-usb-devices-exterminate-led-lights-completely-off/attachment/usb-power" rel="attachment wp-att-831"><img class="alignnone size-full wp-image-831" title="usb-power" src="usb-power.gif" alt="" width="590" height="415" /></a>

4.修改DWORD（32位）的数值数据为1

OK，工作全部完成，快来试试安全删除USB之后的效果怎么样吧。		