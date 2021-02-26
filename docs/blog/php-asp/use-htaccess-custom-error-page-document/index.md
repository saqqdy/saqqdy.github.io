---
layout: post
title: 使用.htaccess文档自定义错误页		
date: 2011-07-07
tags: [".htaccess","PHP/ASP","前端","自定义错误文档"]
---

之前有一文《<a title="关于Linux服务器下.htaccess文件设置自定义错误文档" href="http://www.saqqdy.com/web-design/htaccess-linux-error-page" target="_blank" rel="noopener noreferrer">关于Linux服务器下.htaccess文件设置自定义错误文档</a>》，当中提到了有关.htaccess文档设置错误页的一些相关知识，

这里作个补充。

我要介绍的.htaccess的第一个应用是自定义错误页面，这将使你可以拥有自己的、个性化的错误页面（例如找不到文件时），而不是你的服务商提供的错误页或没有任何页面。这会让你的网站在出错的时候看上去更专业。你还可以利用脚本程序在发生错误的时候通知你（例如我使用Free Webmaster Help的PHP脚本程序，当找不到页面的时候自动e-mail给我）。

你所知道的任何页面错误代码（像404找不到页面），都可以通过在.htaccess文件里加入下面的文字将其变成自定义页面：

ErrorDocument errornumber /file.html

举例来说，如果我的根目录下有一个nofound.html文件，我想使用它作为404 error的页面：

ErrorDocument 404 /notfound.html

如果文件不在网站的根目录下，你只需要把路径设置为：

ErrorDocument 500 /errorpages/500.html

以下是一些最常用的错误：

常用的客户端请求错误返回代码：

400?Bad request 错误请求
401 Authorization Required需要验证
403 Forbidden禁止
404 Not Found找不到页面
405 Method Not Allowed
408 Request Timed Out
411 Content Length Required
412 Precondition Failed
413 Request Entity Too Long
414 Request URI Too Long
415 Unsupported Media Type

常见的服务器错误返回代码：

500 Internal Server Error内部服务器错误

接下来，你要做的只是创建一个错误发生时显示的文件，然后把它们和.htaccess一起上传。

用户可以利用.htaccess指定自己事先制作好的错误提醒页面。一般情况下，人们可以专门设立一个目录，例如errors放置这些页面。然后再.htaccess中，加入如下的指令：

ErrorDocument 404 /errors/notfound.html
ErrorDocument 500 /errors/internalerror.html

一条指令一行。上述第一条指令的意思是对于404，也就是没有找到所需要的文档的时候得显示页面为/errors目录下的notfound.html页面。不难看出语法格式为：

ErrorDocument 错误代码 /目录名/文件名.扩展名

如果所需要提示的信息很少的话，不必专门制作页面，直接在指令中使用HTML号了，例如下面这个例子：

ErrorDocument 401 "你没有权限访问该页面，请放弃！"		