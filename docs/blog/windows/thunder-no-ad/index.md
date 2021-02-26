---
layout: post
title: 不需任何补丁 不做VIP 彻底去除迅雷广告		
date: 2010-06-13
tags: ["Windows系统","小技巧","迅雷5.9","迅雷去广告"]
---

迅雷拥有广大的用户群，作为国内使用率最高的下载软件来说，迅雷已经深入了我们的生活，不过，迅雷里面五花八门的广告却让人蛋疼，大家都想扼杀这些无聊的东西。网上也有很多去广告补丁啊，插件啊。。。之类的，不过这些所谓"补丁"基本上都是带毒的，我还是喜欢依据自己喜好去除广告，安全第一，省的中了插件和流氓。

<span style="color: red;">注意：本方法要求您必须有迅雷用户账号，并登录迅雷。

今天这个技巧，仅供大家技术交流啦，不做VIP，也不打任何补丁，自己动手去掉迅雷的广告（主面板广告和新建下载窗体的广告）

具体操作步骤：

1、为了本次操作顺利进行，请退出运行中的迅雷；

2、找到资源管理器里面找到文件夹：

　　Vista、Win7和Win2008等系统用户请找到：C:\Users\Public\Thunder Network\User\您的迅雷ID\

　　XP、2003等系统用户请找到：C:\Documents and Settings\All Users\Application Data\Thunder Network\User\您的迅雷ID\

3、看一下该目录下是否有"vipsettings.ini"文件，没有就新建一个。

4、向文件里输入如下内容：

[code][VIP_SETTING]
THUNDER_MINISITE=0
SKIN_TYPE=1
SKIN_NAME=default
FIRST_LOGIN=0
MAIN_AD=0
NEW_TASK_PANEL_AD=0
XUNLEI_TIP=0
WELCOME_PANEL=0
VIP_CFG_SYNCHRO=0[/code]

以上为 vipsettings.ini 中的内容

各设置项特别解释如下：

[VIP_SETTING]
THUNDER_MINISITE=0 //迅雷资讯，1是开启，0是关闭
SKIN_TYPE=1 //皮肤类型，有两类，分别是1和2，2是会员皮肤
SKIN_NAME=default //皮肤名
FIRST_LOGIN=0
MAIN_AD=0 //主界面广告，1是开启，0是关闭
NEW_TASK_PANEL_AD=0 //新建面板广告，1是开启，0是关闭
XUNLEI_TIP=0 //影视快讯，1是开启，0是关闭
WELCOME_PANEL=0 //欢迎界面，好像是会员有效的。
VIP_CFG_SYNCHRO=0

<span style="color: red;">（根据本说明，您可以选择您要显示或者不显示的广告！）

5、保存好vipsettings.ini ，然后将该文件的属性设为只读（此步必需！！）。

接下来再打开迅雷，广告已经没有了！！		