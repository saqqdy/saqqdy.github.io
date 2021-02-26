---
layout: post
title: ASP利用Jmail组件发送邮件实例一 带附件		
date: 2011-04-28
tags: ["Jmail组件","Web服务器","发送邮件","小技巧","附件"]
---

<%
On error resume next
Dim JMail, contentId
Set JMail = Server.CreateObject("JMail.Message")
JMail.Charset = "gb2312" ' 邮件字符集，默认为"US-ASCII"
' JMail.ISOEncodeHeaders = False ' 是否进行ISO编码，默认为True

' 发送者信息（可用变量方式赋值）
JMail.From = "saqqdy@qq.com" ' 发送者地址
JMail.FromName = "上岸QQ的鱼" ' 发送者姓名
JMail.Subject = "邮件主题" ' 邮件主题

' 身份验证
JMail.MailServerUserName = "saqqdy" ' 身份验证的用户名
JMail.MailServerPassword = "******" ' 身份验证的密码

' 设置优先级，范围从1到5，越大的优先级越高，3为普通
JMail.Priority = 3

JMail.AddHeader "Originating-IP", Request.ServerVariables("REMOTE_ADDR")

' 加入一个收件人【变量email：收件人地址】可以同一语句重复加入多个
JMail.AddRecipient("someone@somehost.com")

' 加入附件【变量filename：附件文件的绝对地址，确保用户IUSR_机器名有访问的权限】
' 【参数设置是(True)否(False)为Inline方式】
'contentId = JMail.AddAttachment (Server.MapPath("jmail.asp"), True)

' 邮件主体（HTML(注意信件内链接附件的方式)）
JMail.HTMLBody = "邮件正文"

' 邮件主体（文本部分）
JMail.Body = "邮件正文（非HTML）"

' 发送【调用格式：objJMail.Send([username:password@]SMTPServerAddress[:Port])】
JMail.Send("smtp.qq.com")

' 关闭并清除对象
JMail.Close()
Set JMail = Nothing

if err.number<>0 then
response.write "发送发送失败！"
else response.write "邮件发送成功！"
end if
%>		