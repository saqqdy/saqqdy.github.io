---
layout: post
title: 12款Apache+MySQL+PHP集成环境推荐：e2php v12.20		
date: 2012-09-18
tags: ["e2php","LAMP","PHP集成环境","Web服务器","小技巧"]
---

e2php是Windows下的Apache + PHP + MySQL + Zend + eAccelerator + PhpMyAdmin的绿色环境套件，免安装，几秒钟即可搭建Web服务器。

1，先点击下载e2php解压包，解压到任意目录(不要含中文路径)。
2，运行目录内的e2php.exe执行文件，在电脑桌面右下方(系统托盘)处可看到该程序图标。
3, 鼠标左键单击该程序图标，将会出现菜单选项。
- 启动Apache,仅启动Apache服务，重启，停止略，启动MySQL，仅启动MySQL服务。
- 全部启动则启动Apahce跟MySQL两个服务，全部停止略。
- 访问PhpMyAdmin,是访问`htdocs`目录内的PhpMyAdmin程序。
- 访问首页是访问`htdocs`目录内的index.php文件
- 打开服务,是为了方便查看Apache跟MySQL服务是否启动。
- 退出，仅退出e2php程序。
- 数据库访问密码默认为123456。

注意:MySQL的端口是默认的配置(3306),如果你的电脑之前已经安装了MySQL,并已经启动了该服务，
请先将该MySQL服务停止后再运行e2php确保程序使用的稳定。

4，虚拟主机的主目录为`htdocs`,只要将您的网站程序放到该目录下, 默认的站点地址为http://localhost:8080/，如要访问`htdocs`目录下的test.php, 则在浏览器中输入http://localhost:8080/test.php即可访问。		