---
layout: post
title: 【准备篇】windows XP操作系统安装IIS的方法 解决IIS安装不成功问题		
date: 2010-02-06
tags: ["IIS安装","IIS安装失败","Web服务器","XP系统IIS","小技巧"]
---

<span style="color: blue;"><span style="font-size: 16pt;">XP系统下安装IIS步骤说明：
鉴于近来很多网友问我关于IIS的安装问题，本人总结了一下，特意写此博闻给各位网友参考参考！
就我接触windows操作系统的这几年来，玩过的windows操作系统版本也不在少数，windows XP、windows server 2000、windows server 2003、windows server 2008、windows Vista还有最近发布的windows 7操作系统都玩过，总结下来：windows 7是我用的最顺手的操作系统，目前我使用的就是windows 7 ultimate（刷BIOS激活的），本站也有软激活工具提供下载，下载地址：http://www.saqqdy.com/article/Source/053.html
Windows XP操作系统目前市场上面出现的基本上都是professional版本，里面不会自带IIS，需要用户使用光盘来安装IIS，网络上面也有很多IIS的安装包，不过就我的经验看来，很多安装包所包含的文件都不齐全，安装极可能不成功，因此建议大伙下载微软官方的XP系统镜像（不推荐下载GHOST版本系统，因为GHOST系统极可能带毒，而且，GHOST版本系统一般都会阉割一些必须的功能）。官方的XP镜像里面会有一个I386文件夹，安装IIS所需要的所有文件都一定能在I386文件夹里面找到。
微软windows XP SP3官方镜像迅雷下载地址：

下载地址（迅雷下载）：** <a href="thunder://QUFodHRwOi8vc29mdC51c2Fpa2EuY24vstnX98+1zbMvd2luZG93cy9XaW5kb3dzWFAvVkwtSW1hZ2UvTVNETi96aC1oYW5zX3dpbmRvd3NfeHBfcHJvZmVzc2lvbmFsX3dpdGhfc2VydmljZV9wYWNrXzNfeDg2X2NkX3ZsX3gxNC03NDA3MC5pc29aWg==">点击下载 **</strong>

激活序列号：<span style="color: red;">MRX3F-47B9T-2487J-KWKMF-RPWBY（亲测可用）

<span style="color: purple;">注意：本人推荐各位网友升级到windows 7 操作系统，因为windows XP系统下IIS很容易乱码，安全性也相当差劲。另外，微软公司已经基本停止了对XP系统的服务支持，XP系统漏洞也相当多，XP系统下安装IIS也相当繁琐，有很多GHOST版本的系统经常都安装不成功，强烈建议电脑配置稍好的网友还是不要犹豫了。

安装准备：
1.下载微软官方XP系统镜像。
2.将镜像解压，或使用虚拟光驱载入。
<span style="color: red;">3.鉴于很多GHOST版本的XP安装IIS不成功的问题，建议GHOST版本系统的用户重新安装官方原版的操作系统之后再安装IIS。
一、安装开始：
第一步：
解压微软官方XP SP3镜像中的I386文件夹至桌面（有虚拟光驱的网友可以直接载入）。
第二步：
打开：控制面板>添加或删除程序，选择"添加/删除windows组件"。
第三步：
勾选需要安装的windows组件并开始安装。

第四步：<span style="color: red;">安装完成后立即重启，并确认安装过程没有弹出错误信息。

二、下面对IIS进行配置：
打开：控制面板>管理工具>Internet信息服务。
启动Internet信息服务之后便可开始配置了。

然后打开"默认网站"的属性，进入下一步设置。

DOC详细安装文档（图）：[download id="923" format="1"]		