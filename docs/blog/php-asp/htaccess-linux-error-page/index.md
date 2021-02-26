---
layout: post
title: 关于Linux服务器下.htaccess文件设置自定义错误文档		
date: 2009-10-02
tags: [".htaccess","Linux服务器","PHP/ASP","前端","自定义错误文档"]
---

Error Documents 错误文档<br />
本文主要介绍一下Linux服务器下.htaccess文件用于自定义错误文档的具体方法
例子<br />
ErrorDocument 400 /errors/badrequest.html<br />
ErrorDocument 404 http://yoursite/errors/notfound.html<br />
ErrorDocument 401 "Authorization Required"
?(注意之后内容如果出现的双引号需要转义为 \")<br />
常见HTTP状态码
客户端请求成功<br />
200 OK<br />
201 Created<br />
202 Accepted<br />
203 Non-Authorative Information<br />
204 No Content<br />
205 Reset Content<br />
206 Partial Content
客户端请求跳转<br />
300 Multiple Choices<br />
301 Moved Permanently<br />
302 Moved Temporarily<br />
303 See Other<br />
304 Not Modified<br />
305 Use Proxy
客户端请求错误<br />
400 Bad Request<br />
401 Authorization Required<br />
402 Payment Required (not used yet)<br />
403 Forbidden<br />
404 Not Found<br />
405 Method Not Allowed<br />
406 Not Acceptable (encoding)<br />
407 Proxy Authentication Required<br />
408 Request Timed Out<br />
409 Conflicting Request<br />
410 Gone<br />
411 Content Length Required<br />
412 Precondition Failed<br />
413 Request Entity Too Long<br />
414 Request URI Too Long<br />
415 Unsupported Media Type
服务器错误<br />
500 Internal Server Error<br />
501 Not Implemented<br />
502 Bad Gateway<br />
503 Service Unavailable<br />
504 Gateway Timeout<br />
505 HTTP Version Not Supported
		