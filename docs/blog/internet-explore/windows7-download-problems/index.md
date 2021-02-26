---
layout: post
title: 解决windows7下下载文件到99%突然停止不动的问题		
date: 2010-06-26
tags: ["99%停止","IE浏览器","Windows7下载","小技巧"]
---

最近有一次下载一个小软件，突然停在99%不动了，我就纳闷了，windows7这么强大的系统不会有这么低级的问题吧？不过想归想，windows7当然是不会有这样的问题的，要不然我就不会一直使用到现在了。到网上搜集了资料，看来不止我一个人出现了这样的问题，总结了一下，就给大家分享一下吧。

造成这样的原因大致应该是3种吧，解决方法都很简单，下面就挑最简单的说起吧。

1、可能是IE8设置了"检查下载的程序的签名"这一项，打开Internet选项设置对话框，在高级标签项下，取消选对检查下载程序的签名，并检查勾选允许运行或安装软件，即使签名无效一项。当然，这点问题不大，一般情况下，就算是勾选了"检查下载的程序的签名"这一项也不会出现下载的时候停止在99%这种情况的。不过为了彻底解决这样的问题，我们还是先把那个勾去了，一步一步来检查问题所在。
<a href="windows7-download1.gif"><img class="alignnone size-full wp-image-271" title="windows7 download1" src="http://www.saqqdy.com/wp-content/uploads/2010/09/windows7-download1.gif" alt="" width="418" height="495" /></a>

2、IE8临时文件夹已满，或指定保存下载文件目录的写入权限不够。可以清空IE8的临时文件夹试试，或者将下载文件指定存放在其他的位置。这种情况也比较少。
<a href="windows-download2.gif"><img class="alignnone size-full wp-image-270" title="windows download2" src="http://www.saqqdy.com/wp-content/uploads/2010/09/windows-download2.gif" alt="" width="371" height="439" /></a>

3、如果以上步骤实施后未见效果，可以考虑使用Win7优化大师或者360安全卫士等浏览器修复工具修复，切换到修复IE选项卡，选中相应项目后，再点击一键修复即可。
　　
PS：IE文件下载时一般暂存在临时文件夹中，等下载结束后再从临时文件夹移至目标位置保存。而在移动过程中可能会触发杀毒软件的监控功能，如果下载的文件很大，杀毒软件检查时就需要花费一定的时间，只要检查完毕后才会完成整个下载任务，这可能也是出现99%不动的一个很大原因。		