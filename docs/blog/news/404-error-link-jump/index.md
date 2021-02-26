---
layout: post
title: 自定义404错误页实现自动处理不存在的链接地址		
date: 2009-10-18
tags: ["404错误页","动态","博客搬家","站内公告","自动跳转"]
---

不知道网友们注意没有，虽然本站实现了PJ到WordPress的搬家，但是没篇文章的链接都有了很大的变化，但是如果您通过搜索引擎搜到本站的话，您见到的将是原来的链接地址，奇怪的是，原来的地址仍然可以准确的找到准确的文章，实现真正的博客搬家，最大程度的做到了使本站流量不丢失！

实现方法是这样的：原来不能访问的链接会自动跳转到新空间的404错误页，就可以通过404页面来自动分析来访者想要访问的源地址是什么，做出判断之后就转到新的连接地址，自动实现文章跳转，本站使用的代码如下：
例如：原来的地址是http://www.saqqdy.com/article/css/046.html
而新地址是http://www.saqqdy.com/?p=47

<?php
$url_this = 'http://'.$_SERVER['SERVER_NAME'].$_SERVER["REQUEST_URI"];
$l = strlen($url_this);
if(mb_substr($url_this,$l-4,$l,'utf-8') == "html")
{
?$num = ceil(mb_substr(mb_substr($url_this,$l-8,$l,'utf-8'),0,3,'utf-8'));
?echo "<script>location.href='".'http://www.saqqdy.com/?p='.$num."'</script>";
}
elseif (mb_substr($url_this,$l-4,$l,'utf-8') == ".htm")
{
?$num = ceil(mb_substr(mb_substr($url_this,$l-7,$l,'utf-8'),0,3,'utf-8'))+1;
?echo "<script>location.href='".'http://www.saqqdy.com/?p='.$num."'</script>";
}
?>
这样就成功实现跳转了！		