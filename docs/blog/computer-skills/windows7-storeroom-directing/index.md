---
layout: post
title: 自定义Win 7中任务栏“库”图标的指向		
date: 2009-11-10
tags: ["Windows7任务栏","Windows系统","小技巧","库指向"]
---

刚用上Windows 7的用户可能会发现任务栏上有个文件夹一样的图标，就我个人习惯而言，我一般不使用"库"。我更希望这个图标指向的是"计算机"

右击此图标 - 出现Jumplists - 右击Windows资源管理器 - 属性
编辑"目标"中的内容：

比如，如果想要指向名为C:\vista123的文件夹，输入

%windir%\explorer.exe c:\vista123确定即可。

如下：
Computer(计算机): %windir%\explorer.exe ::{20D04FE0-3AEA-1069-A2D8-08002B30309D}
Documents(文档): %windir%\explorer.exe ::{450D8FBA-AD25-11D0-98A8-0800361B1103}
Network(网络): %windir%\explorer.exe ::{208D2C60-3AEA-1069-A2D7-08002B30309D}
Libraries(库): %SystemRoot%\explorer.exe		