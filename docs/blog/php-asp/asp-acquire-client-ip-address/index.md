---
layout: post
title: 【扩展篇】ASP网页获得网页来访者IP地址的代码		
date: 2009-10-08
tags: ["ASP获取IP","PHP/ASP","前端","客户端IP"]
---

代码如下：

Private Function getIP()
Dim strIPAddr
If Request.ServerVariables("HTTP_X_FORWARDED_FOR") = "" or InStr(Request.ServerVariables("HTTP_X_FORWARDED_FOR"), "unknown") > 0 Then
strIPAddr = Request.ServerVariables("REMOTE_ADDR")
ElseIf InStr(Request.ServerVariables("HTTP_X_FORWARDED_FOR"), ",") > 0 Then
strIPAddr = Mid(Request.ServerVariables("HTTP_X_FORWARDED_FOR"), 1, InStr(Request.ServerVariables("HTTP_X_FORWARDED_FOR"), ",")-1)
ElseIf InStr(Request.ServerVariables("HTTP_X_FORWARDED_FOR"), ";") > 0 Then
strIPAddr = Mid(Request.ServerVariables("HTTP_X_FORWARDED_FOR"), 1, InStr(Request.ServerVariables("HTTP_X_FORWARDED_FOR"), ";")-1)
Else
strIPAddr = Request.ServerVariables("HTTP_X_FORWARDED_FOR")
End If
getIP = Trim(Mid(strIPAddr, 1, 30))
End Function
''''调用演示
response.write getIP()		