---
layout: post
title: 配置.htaccess加密目录的用户名和密码		
date: 2011-07-22
tags: [".htaccess","PHP/ASP","前端","目录加密"]
---

要利用.htaccess对某个目录下的文档设定访问用户和对应的密码，首先要做的是生成一个.htpasswd的文本文档，例如：

forge:y4E7Ec8e7EwV

这里密码经过加密，用户可以自己找些工具将密码加密成.htaccess支持的编码。该文档最好不要放在www目录下，建议放在www根目录文档之外，这样更为安全些。

有了授权用户文档，可以在.htaccess中加入如下指令了：

AuthUserFile .htpasswd的服务器目录
AuthGroupFile /dev/null （需要授权访问的目录）
AuthName EnterPassword
AuthType Basic （授权类型）

require user wsabstract （允许访问的用户，如果希望表中所有用户都允许，可以使用 require valid-user）

注，括号部分为学习时候自己添加的注释

拒绝来自某个IP的访问，如果我不想某个政府部门访问到我的站点的内容，那可以通过.htaccess中加入该部门的IP而将它们拒绝在外。

例如：
order allow,deny
deny from 210.10.56.32
deny from 219.5.45.
allow from all

第二行拒绝某个IP，第三行拒绝某个IP段，也就是219.5.45.0~219.2.45.255想要拒绝所有人？用deny from all好了。不止用IP，也可以用域名来设定。创建好.htpasswd文档后（可以通过文字编辑器创建），下一步是输入用于访问网站的用户名和密码，应为：

username:password

"password"的位置应该是加密过的密码。你可以通过几种方法来得到加密过的密码：一是使用一个网上提供的permade脚本或自己写一个；另一个很不错的username/password加密服务是通过KxS网站，这里允许你输入用户名及密码，然后生成正确格式的密码。

对于多用户，你只需要在.htpasswd文档中新增同样格式的一行即可。另外还有一些免费的脚本程序可以方便地管理.htpasswd文档，可以自动新增/移除用户等。		