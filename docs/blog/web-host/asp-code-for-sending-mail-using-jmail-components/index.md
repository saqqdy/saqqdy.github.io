---
layout: post
title: ASP利用Jmail组件发送邮件代码		
date: 2011-04-08
tags: ["Jmail组件","SMTP服务器","Web服务器","发送邮件","小技巧"]
---

ASP利用Jmail组件发送邮件其实很简单，估计有不少网友发不了邮件都是同一个原因：没有安装Jmail组件。Jmail组件并不是Windows系统自带的组件，这点要注意！

ASP利用Jmail组件发送邮件代码：
> <%
Set jmail = Server.CreateObject("JMAIL.Message")??? '建立发送邮件的对象
jmail.silent = true??? '屏蔽例外错误，返回FALSE跟TRUE两值
jmail.logging = true??? '启用邮件日志
jmail.Charset = "GB2312"??? '邮件的文字编码为国标
jmail.ContentType = "text/html"??? '邮件的格式为HTML格式
jmail.AddRecipient "saqqdy@vip.qq.com"??? '邮件收件人的地址
jmail.From = "saqqdy@qq.com"??? '发件人的E-MAIL地址
jmail.MailServerUserName = "saqqdy"??? '登录邮件服务器所需的用户名
jmail.MailServerPassword = "*******"??? '登录邮件服务器所需的密码
jmail.Subject = "asp发送邮件！"??? '邮件的标题
jmail.Body = "这封邮件是想告诉你：我的ASP通过SMTP发邮件功能已经搞定！！"??? '邮件的内容
jmail.Priority = 3??? '邮件的紧急程序，1为最快，5为最慢，3为默认值
jmail.Send("smtp.qq.com")??? '执行邮件发送（通过邮件服务器地址）
jmail.Close()??? '关闭对象
%>
当然，也可以将该代码写成程序来调用！详见《<a title="ASP利用Jmail组件发送邮件函数形式" href="http://www.saqqdy.com/computer-skills/asp-components-using-jmail-send-mail-function-in-the-form">ASP利用Jmail组件发送邮件函数形式</a>》		