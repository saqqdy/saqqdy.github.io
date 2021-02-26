---
layout: post
title: windows系统下将FAT32文件系统转换为NTFS的方法		
date: 2010-03-24
tags: ["FAT32转NTFS","Windows系统","小技巧","文件格式转换"]
---

windows7已经上市近5个多月了，相信一定有很多人准备将XP系统升级为windows7系统了吧？
windows7确实是一款比较出色的操作系统，相比于Vista系统来说，真的是有天壤之别。
不过，升级windows7的问题也有蛮多的：

首先是升级安装的问题，无法从XP系统下直接升级到windows7，只能先升级到Vista系统，然后再升级到windows7系统（或者直接全新安装）。

然后是激活的问题，当然，本站已经提供了激活工具。
下载地址：<a href="http://www.saqqdy.com/download/windows7-server2008-activation-tools" target="_blank">http://www.saqqdy.com/?p=54</a>

<span style="color: red;">温馨提示：以上下载地址包含2个激活工具，先运行上面那个工具，如果不能激活，再将它卸载，然后再使用下面那个激活工具激活。

最后一个问题估计只是少数用户的问题：少数用户的文件系统仍然采用FAT32文件系统，FAT32文件系统产生的文件碎片相当多，整理的速度也相当慢，严重影响系统速度。

如何将FAT32文件系统转换成NTFS呢？方法如下：
在运行中的入：<span style="color: #ff0000;">convert c:/fs:ntfs
其中c:代表你要转换的分区
转换速度相当快，系统照样正常运行，这是win2k自己的命令。
要是从NTFS转回FAT32，就需要使用分区魔术师了，而且速度很慢。

最后，祝各位网友在使用windows7的过程中体验更多的乐趣，有不懂的地方欢迎给我留言！谢谢！		