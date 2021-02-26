---
layout: post
title: Jmail组件的相关对象详解		
date: 2011-04-01
tags: ["Jmail对象","Jmail组件","Web服务器","小技巧"]
---

Jmail组件的提供了很多对象，这些对象为服务器端对邮件的操作提供了各种各样的功能，每个对象都有其独特应用，最常见的大致如下：

1，POP3对象，是对POP3邮件接收服务器的操作。
2，Messages对象，是有关邮件集合的对象。
3，Message对象，是有关邮件的对象，其是Jmail组件最常用的对象，能发送邮件信息，也能接收邮件信息。
4，Header对象，是与邮件头相关的对象。
5，Recipients对象，是有关接收邮件集合的对象。
6，Recipient对象，是有关接收邮件的对象。
7，Attachments对象，是有关邮件附件集合的对象。
8，Attachment对象，是有关邮件附件的对象。
9，MailMerge对象，是有关邮件模板的对象。
10，PGPKeys对象，是有关邮件PGP密钥集合的对象。
11，PGPKeyInfo对象，是有关邮件PGP密钥信息的对象。
......

在邮件发送的Web应用中，Message对象是最常用的，在使用之前需要建立该对象，并赋值到变量上。		