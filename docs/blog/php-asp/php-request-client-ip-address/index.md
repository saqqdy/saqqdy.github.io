---
layout: post
title: 【扩展篇】PHP获取来访者IP地址方法总结		
date: 2009-11-11
tags: ["PHP/ASP","PHP扩展","PHP获取IP","前端"]
---

之前有写过一篇文章，讲的是ASP获取来访者IP地址的代码，今天再写一文，说说PHP获取来访者IP的代码，个人觉得跟ASP版本是差不多的。

使用PHP获取客户端IP地址的代码如下：

function getIP()
{
if(getenv("HTTP_CLIENT_IP") && strcasecmp(getenv("HTTP_CLIENT_IP"), "unknown"))
$ip = getenv("HTTP_CLIENT_IP");
elseif(getenv("HTTP_X_FORWARDED_FOR") && strcasecmp(getenv("HTTP_X_FORWARDED_FOR"), "unknown"))
$ip = getenv("HTTP_X_FORWARDED_FOR");
elseif (getenv("REMOTE_ADDR") && strcasecmp(getenv("REMOTE_ADDR"), "unknown"))
$ip = getenv("REMOTE_ADDR");
elseif (isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], "unknown"))
$ip = $_SERVER['REMOTE_ADDR'];
else
$ip = "0.0.0.0";
return $ip;
}		