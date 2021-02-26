---
layout: post
title: 调整windows7任务栏预览窗大小 美化win7		
date: 2010-06-02
tags: ["Windows7任务栏","Windows系统","Windows美化","小技巧"]
---

windows7以其超级炫酷的透明桌面著称，其超级任务栏自然倍受用户喜爱，不过个人觉得windows7的预览窗似乎有点小了，不够酷！是否有一种方法可以改变windows7预览窗的大小呢，答案当然是肯定的！
下面就给大家介绍一下修改方法。

第一步：打开注册表编辑器（在开始菜单的搜索里面输入regedit）。
找到HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Taskband

第二步：右键右侧的空白处，选择新建DWORD（32位）值，名字为MinThumbSizePx

第三步：双击刚才新建的MinThumbSizePx键值，然后在"数值数据"里面输入你预期调整的预览窗大小。
默认是200左右，你可以调整为300试试，右边的"基数"，则选择十进制。点击确定，关闭注册表即可。

第四步：注销用户，再次登录就能看到预览窗变大了！（也可以结束explorer.exe进程，然后重新打开explorer进程，或者重启电脑！）		