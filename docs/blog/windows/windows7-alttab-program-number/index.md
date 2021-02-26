---
layout: post
title: windows7小技巧：修改Win7 Alt+Tab切换中显示的程序数		
date: 2010-06-24
tags: ["Alt+Tab","Windows7技巧","Windows系统","小技巧"]
---

从Vista系统开始，微软就开始为系统的窗口切换加入了一系列的特效，比如，AeroFlipp 3D效果、窗口最大/最小化动画等等。当然，还有Alt+Tab。在Windows 7中，微软在加入AeroPeek、AeroShake的同时，也沿用了AeroFlipp和Alt+Tab切换，今天，我们要做的就是自定义Alt+Tab切换中显示的程序数目。

第一步：点击"开始"，在搜索栏输入regedit打开注册表编辑器

第二步：找到：HKEY_CURRENT_USER\Control Panel\Desktop\CoolSwitchColumns

第三步：双击此键值，修改为自己想要的数目即可。

同时，ALT+Tab中的行数也是可以自定义的，方法类似：

第一步：找到：
HKEY_CURRENT_USER\Control Panel\Desktop\CoolSwitchRows

第二步：双击此键值，修改为自己想要的数目即可。		