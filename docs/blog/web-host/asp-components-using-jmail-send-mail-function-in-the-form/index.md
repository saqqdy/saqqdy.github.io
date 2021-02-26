---
layout: post
title: ASP利用Jmail组件发送邮件函数形式		
date: 2011-04-09
tags: ["Jmail组件","SMTP服务器","Web服务器","发送邮件","小技巧"]
---

使用ASP的网友一定想实现一个炫酷的功能：发送邮件！上岸QQ的鱼非常喜欢这一功能，之前也进行过深入的研究，现将一些研究成果共享给大家，之前有文章《<a title="ASP利用Jmail组件发送邮件代码" href="http://www.saqqdy.com/computer-skills/asp-code-for-sending-mail-using-jmail-components">ASP利用Jmail组件发送邮件代码</a>》，我们可以将该代码写成函数的形式：
> <%
Function Send_Email(smtpHost,smtpUser,smtpPass,mailTo,FromName,subject,content)
Set jmail = Server.CreateObject("JMAIL.Message")
jmail.silent = true
jmail.logging = true
jmail.Charset = "gb2312"
jmail.ContentType = "text/html"
jmail.AddRecipient mailTo
jmail.From = smtpUser
jmail.FromName = FromName
jmail.Subject = subject
jmail.Body = content
jmail.Priority = 1
jmail.MailServerUserName = smtpUser
jmail.MailServerPassword = smtpPass
jmail.Send(smtpHost)
jmail.Close()
response.write("邮件发送成功")
End
Function
%>
其中Send_Email表示自定义的函数名称
参数smtpHost表示邮件服务器地址
参数smtpUser表示发信验证所需的登录帐户
参数smtpPass表示发信验证所需的登录密码
参数mailTo表示邮件收件人的E-Mail地址
参数FromName表示邮件发件人的名称
而参数subject和content则分别表示邮件的标题和正文内容

通过如下方法可应用该函数：
> Call Send_EMail("** smtp.qq.com **","saqqdy@qq.com","******","saqqdy@vip.qq.com","上岸QQ的鱼","标题","邮件正文内容")
PS:只要稍加改造，可以利用函数调用的方式在各个地方使用该功能！		