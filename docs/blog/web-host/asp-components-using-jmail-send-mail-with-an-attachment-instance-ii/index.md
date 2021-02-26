---
layout: post
title: ASP利用Jmail组件发送邮件实例二 带附件		
date: 2011-04-29
tags: ["Jmail组件","Web服务器","发送邮件","小技巧","附件"]
---

jmail用法实例2 附件 抄送 秘送
<%
Set JMail = Server.CreateObject("JMail.Message")

'是否将信头编码成iso-8859-1字符集. 默认是True
JMail.ISOEncodeHeaders = True

'如果JMail.silent设置为true,ErrorCode包含的是错误代码
JMail.Silent = True

'设置标题和内容编码，如果标题有中文，必须设定编码为gb2312
JMail.Charset = "gb2312"

'JMail.ContentType = "text/html" '如果发内嵌附件一定要注释掉这行，重要！
JMail.From = "saqqdy@qq.com" ' 发送者地址
JMail.FromName = "上岸QQ的鱼" ' 发送者姓名
JMail.MailServerUserName = "saqqdy" ' 身份验证的用户名
JMail.MailServerPassword = "******" ' 身份验证的密码

'加入新的收件人
JMail.AddRecipient "saqqdy@vip.qq.com", "Mr.Example"
'JMail.AddRecipientBCC Email '密件收件人的地址
'JMail.AddRecipientCC Email '邮件抄送者的地址
JMail.Subject = "图片测试！！！"
JMail.Body = "A nice picture if you can read HTML-mail."

'增加一个普通附件
JMail.AddAttachment(Server.MapPath("images/email.gif"))
'增加一个嵌入式附件
' The return value of AddAttachment is used as a reference to the image in the HTMLBody.
'contentId = JMail.AddAttachment(Server.MapPath("images/email.gif"))
Dim contentId
contentId = JMail.AddAttachment("E:\images\email.gif")? '只有HTML格式支持嵌入图片附件，我们采用HTML格式的邮件内容

' As only HTML formatted emails can contain inline images we use HTMLBody and appendHTML
JMail.HTMLBody = "<html><body><font color=""red"">Hi, here is a nice picture:</font><br>"
JMail.appendHTML "<img src=""cid:" & contentId & """>"
JMail.appendHTML "<br><br> good one huh?</body></html>"

'如果对方信箱不支持HTML格式邮件，我们仍需要给他一个友善的提示
' But as not all mailreaders are capable of showing HTML emails we will also add a standard text body
JMail.Body = "Too bad you can't read HTML-mail."
JMail.appendText " There would have been a nice picture for you"
JMail.Send( "mail.skyhe.com" )
JMail.Close()
Set JMail = Nothing
%>		