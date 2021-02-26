---
layout: post
title: 如何关闭Windows7下的窗口靠近屏幕边缘自动最大化功能		
date: 2009-11-11
tags: ["Windows7技巧","Windows系统","小技巧","屏幕自动最大化"]
---

在Windows7系统下把任何一个软件的窗口拖动到或者拖动出屏幕的边缘，就会自动最大化窗口。往上靠近屏幕边缘是正常的最大化，往左往右就是自动最大化为半个屏幕了。不过有些人认为这功能有点不适应，怎么关闭呢？方法如下：

方法一：使用windows7优化大师（本站已发布下载）
详见：<a href="http://www.saqqdy.com/download/windows7-master-download" target="_blank">http://www.saqqdy.com/download/windows7-master-download</a>

方法二：1：打开注册表编辑器（开始菜单运行regedit）
2：找到 HKEY_CURRENT_USER\Control Panel\Desktop 节点，在右侧窗口中找到并双击"WindowArrangementActive"，然后在弹出的对话框中，将系统默认的值"1"修改为"0"。
3：重启电脑，大功告成！！		