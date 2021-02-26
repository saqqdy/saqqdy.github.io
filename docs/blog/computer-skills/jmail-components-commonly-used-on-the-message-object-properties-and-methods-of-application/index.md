---
layout: post
title: Jmail组件关于Message对象常用的属性和方法应用		
date: 2011-04-05
tags: ["Jmail组件","Message对象","Web服务器","小技巧"]
---

在邮件发送的Web应用中，Message对象是最常用的，在使用之前需要建立该对象，并赋值到变量上。
> Set jmail = Server.CreateObject("JMAIL.Message")
关于Message对象有如下常用的属性和方法应用：
1，Silent属性，表示屏蔽例外错误，返回FALSE或TRUE值，当值为TRUE时，表示邮件发送会忽略错误，不将错误信息返回给操作系统。
jmail.silent = true

2，Logging属性，表示是否启用日志。
jmail.logging = true

3，Charset属性，设置邮件显示的字符集，中文简体可使用GB2312。
jmail.Charset = "GB2312"

4，ContentType属性，表示邮件正文的类型。
jmail.ContentType = "text/html"

5，AddRecipient方法，表示收件人的E-Mail地址。
jmail.AddRecipient ("saqqdy@tom.com")

6，From属性，表示发件人的E-Mail地址。该地址一般与使用SMTP服务器验证时所需的登录帐户相同。
jmail.From = "saqqdy@qq.com"

7，FromName属性，表示发件人的名称。
jmail.FromName = "上岸QQ的鱼"

8，Subject属性，表示设置发送邮件的标题。
jmail.Subject = "这是邮件的标题"

9，Body属性，表示设置发送邮件的正文内容，可使用HTML标签代码
jmail.Body = "这是邮件的内容<br>换行的内容显示"

10，Priority属性，表示邮件发送的优先级，1为最快，5为最慢，3为默认值。
jmail.Priority = 1

11，MailServerUserName属性，表示当邮件服务器使用SMTP发信验证时设置的登录帐户。
jmail.MailServerUserName = saqqdy@qq.com

12，MailServerPassword属性，表示当邮件服务器使用SMTP发信验证时设置的登录密码。
jmail.MailServerPassword = "**************"

13，Send方法，表示通过指定的邮件发送服务器进行邮件的发送。需要注意的即是该邮件服务器地址与MailServerUserName和MailServerPassword中的值是一致的。
jmail.Send("smtp.qq.com")

14，Close方法，表示释放Jmail和邮件服务器连接而使用的缓存空间。
jmail.Close()

由于采用邮件服务器的不同，发送邮件接收人的不同，以及邮件标题和内容的不同，综合这些经常需要变化的值，自定义如下的函数用来完成Jmail发送邮件的功能。		