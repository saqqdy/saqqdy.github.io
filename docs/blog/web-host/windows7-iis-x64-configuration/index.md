---
layout: post
title: 【准备篇】windows7系统下IIS的启用与配置 以及64位windows7的配置方法		
date: 2010-04-24
tags: ["64位IIS","IIS安装失败","IIS配置","Web服务器","Windows7 IIS","小技巧"]
---

IIS（Internet Information Server，互联网信息服务）是一种Web（网页）服务组件，其中包括Web服务器、FTP服务器、NNTP服务器和SMTP服务器，分别用于网页浏览、文件传输、新闻服务和邮件发送等方面，它使得在网络（包括互联网和局域网）上发布信息成了一件很容易的事。

windows7系统配置IIS与XP系统下不同，首先要说明的是：如果你的电脑是Home Basic系统，那么你就不要白费心机了，Home Basic版本是没有IIS功能的，也无法安装。这里建议大家伙使用windows7 Ultimate（旗舰版）。
如果您是编程人员，建议你使用旗舰版操作系统，附windows7激活工具如下：

<a href="http://www.saqqdy.com/download/windows7-server2008-activation-tools">http://www.saqqdy.com/download/windows7-server2008-activation-tools</a>

旗舰版包含所有功能，下面着重介绍一下windows7旗舰版的配置方法！

第一步：打开"控制面板>程序和功能"。

第二步：点击"打开或关闭windows功能"

第三步：打开需要的IIS功能。
建议至少将"Internet信息服务"下的所有子项全部勾上。

** <span style="color: red;">注意：到了这一步，请立即重启电脑，以免出错！！ **

第四步：配置IIS。
请仔细看图片上面的解说文字。

用于 Access 和 Excel 数据库的 Microsoft OLE DB Provider for Jet 在 64 位版本中不可用。也就是说，如下两种连接字符串都已经无法正常工作了：

Provider=Microsoft.Jet.OLEDB.4.0;Data Source="&Server.mappath(db)
driver=Microsoft Access Driver (*.mdb);DBQ="&Server.MapPath(db)
所以，64位的windows7操作系统还需要进行以下设置才能正常运行IIS。

大功告成！！！接下来就能开始使用IIS了。
关于IIS虚拟目录与本地站点的建立方法详见：
<a href="http://www.saqqdy.com/computer-skills/windows-xp-iis-site-virtual-directory">http://www.saqqdy.com/computer-skills/windows-xp-iis-site-virtual-directory</a>

完整DOC文档下载（图解）:[download id="961" format="1"]		