---
layout: post
title: 浅谈Vista OEM与Windows7 OEM的区别		
date: 2009-10-04
tags: ["SLIC","Vista OEM","Windows7 OEM","个人日志","动态"]
---

SLIC全称是Software Licensing Internal Code，即软件许可内部码。一般认为主板是硬件升级中最不可能更换的部件，甚至有观点认为，主板的更换约等于整台机器的更换。要有效识别一台机器是否为 OEM合法用户，可以在每台预装操作系统的机器主板上，在BIOS里写入特定的信息，来标识这是一台OEM合法用户的机器。这样的信息就是SLIC。不同的OEM厂商的SLIC不同，所以他们的OEM操作系统不能混用。
Windows中，Vista系统最早实行这种认证激活机制，SLIC为2.0。Vista在启动过程中会扫描主板BIOS里的公钥及标识，并审核Windows系统里已安装的密钥和证书文件，如果三者验证一致，系统就会被识别为免激活的OEM版本。如果仅缺许可证书，则会扫描WINDOWS目录下SYSTEM32文件夹，如果找到证书，并验证一致，则认为是免激活的OEM版本，并且自动为用户安装证书。
那些破解软激活系统，实际就是改变验证路径，不再扫描主板BIOS里的SLIC，引导验证程序去扫描模拟的SLIC标识，促使认证激活机制完成预定的所有的必要环节，以达到激活WINDOWS的目的。因此，有些软激活系统用查看工具看起来也象是真的SLIC，因为查看的不是真正的BIOS里的SLIC。最近，微软与OEM厂商又对SLIC进行升级，升级为SLIC2.1版本，只有SLIC2.1才可以OEM激活Windows 7。目前看，大多数SLIC2.1的BIOS也可以激活VISTA，也就是说是向下兼容的。
主板BIOS中的SLIC信息是可以用相关工具进行提取的，提取的信息通常保存为后缀为BIN文件中。比如，某OEM厂商发布一台新款笔记本，其主板BIOS中带有SLIC2.1，用相应工具提取出来，保存为A.BIN，这个A.BIN的信息又可以通过BIOS修改工具添加到另一台电脑的主板BIOS中。注意，添加过程一般先是脱机，把新机的BIOS备份出来，再给备份IBIOS加入SLIC2.1信息，然后将这个新改的BIOS刷进主板。还有一个要注意的是，不同主板的BIOS类型不一样，修改的工具、刷新工具也不一样。

那么，如何查看自己电脑的SLIC版本呢？可以使用Everest Ultimate来查看。		