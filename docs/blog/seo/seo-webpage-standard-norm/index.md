---
layout: post
title: 网页搜索引擎优化 网页结构的规范化与标准组成		
date: 2010-08-24
tags: ["SEO","SEO","搜索引擎优化","网页准备","网页规范"]
---

网页搜索引擎优化的第一步：网页结构的规范化与标准组成，所谓网页的结构与组成，就是指网页的代码组成成分与结构的规范，比如：html、meta、title、robots、keywords、description、author、generator、copyright等等，都是从W3C的标准写起，当然，顺序可以变化。

举个例子来说，比如以下代码（PJBlog3首页的代码）：

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="UTF-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-Language" content="UTF-8" />
<title>上岸QQ的鱼-吴峰的官方博客</title>
<meta name="keywords" content="网站关键词。。。" />
<meta name="description" content="网站描述。。。" />
<meta name="robots" content="all" />
<meta name="author" content="上岸QQ的鱼" />
<meta name="generator" content="PJBlog3" />
<meta name="Copyright" content="PJBlog3 CopyRight 2008" />
<link rel="service.post" type="application/atom+xml" title="网站名称-Atom" href="http://www.heimian.com/xmlrpc.asp" />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://www.saqqdy.com/rsd.asp" />
<link rel="alternate" type="application/rss+xml" href="http://www.saqqdy.com/feed.asp" title="订阅网站名称所有文章(rss2)" />
<link rel="alternate" type="application/atom+xml" href="http://www.saqqdy.com/atom.asp" title="订阅网站名称所有文章(atom)" />
<link rel="stylesheet" rev="stylesheet" href="skins/snowfish/global.css" type="text/css" media="all" />
<link rel="stylesheet" rev="stylesheet" href="skins/snowfish/layout.css" type="text/css" media="all" />
<link rel="stylesheet" rev="stylesheet" href="skins/snowfish/typography.css" type="text/css" media="all" />
<link rel="stylesheet" rev="stylesheet" href="skins/snowfish/link.css" type="text/css" media="all" />
<link rel="stylesheet" rev="stylesheet" href="skins/snowfish/UBB/editor.css" type="text/css" media="all" />
<link rel="stylesheet" rev="stylesheet" href="FCKeditor/editor/css/Dphighlighter.css" type="text/css" media="all" />
<script type="text/javascript" src="common.js"></script>
<script type="text/javascript" src="ajax.js"></script>
<script type="text/javascript" src="AjaxRequest.js"></script>
<script type="text/javascript" src="Action.js"></script>

<!--nextpage-->按照W3C标准写法是这样的：

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="zh-CN">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<title>上岸QQ的鱼-吴峰的官方博客</title>
</head>
<body>
<p lang="zh-CN">上岸QQ的鱼</p>
<p lang="yue-Hans">上岸QQ的鱼</p>
</body>
</html>

个人认为PJ博客的写法太过于复杂，使得代码过于庞大，之前有提到要给PJ博客模板进行简化的工作现在正在进行中，同时也会在第一时间公布简化结果，为了使网页更多趋于标准化也为提高网页的SEO效果，还将对PJBlog3的样式表进行重写。		