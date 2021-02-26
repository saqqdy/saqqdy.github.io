---
layout: post
title: 目录密码保护的.htaccess文件		
date: 2011-07-20
tags: [".htaccess","PHP/ASP","前端","密码保护","目录加密"]
---

尽管有各种各样的.htaccess用法，但至今最流行的也可能是最有用的做法是将其用于网站目录可靠的密码保护。尽管JavaScrip等也能做到，但只有.htaccess具有完美的安全性（即访问者必须知晓密码才可以访问目录，并且绝无"后门"可走）。

利用.htaccess将一个目录加上密码保护分两个步骤。第一步是在你的.htaccess文档里加上适当的几行代码，再将.htaccess文档放进你要保护的目录下：

AuthName "Section Name"
AuthType Basic
AuthUserFile /full/path/to/.htpasswd
Require valid-user

你可能需要根据你的网站情况修改一下上述内容中的一些部分，如用被保护部分的名字"Members Area"，替换掉"Section Name"。

/full/parth/to/.htpasswd则应该替换为指向.htpasswd文件（后面详述该文档）的完整服务器路径。如果你不知道你网站空间的完整路径，请询问一下你的系统管理员。

有关目录密码保护的.htpasswd文件《<a title="目录密码保护的.htpasswd文件" href="http://www.saqqdy.com/web-design/directory-password-protection-htpasswd-file" target="_blank" rel="noopener noreferrer">目录密码保护的.htpasswd文件</a>》		