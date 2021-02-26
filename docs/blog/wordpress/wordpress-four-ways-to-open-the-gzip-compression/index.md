---
layout: post
title: WordPress开启Gzip压缩的四种方法		
date: 2012-03-23
tags: ["Gzip压缩","WordPress","WordPress技巧","小技巧"]
---

WordPress开启gzip压缩的方法有四种。

1. 修改index.php文件，开启Gzip压缩功能，在根目录 index.php 中找到：
define('WP_USE_THEMES', true);在后面加上：ob_start('ob_gzhandler')
这种方法最简单，推荐使用，不过这种方法有个弊端，就是当wordpress系统升级后有得重新设置。
详见：《<a title="开启WordPress的Gzip compression压缩功能" href="http://www.saqqdy.com/computer-skills/open-wordpress-gzip-compression-function" target="_blank">开启WordPress的Gzip compression压缩功能》</a>

2. 如果服务器支持.htaccess文件，那么在wordpress根目录的.htaccess中添加以下代码然后上传到wordpress根目录即可，实现gzip压缩代码共有两种，详细代码如下如下，添加好之后上传到wordpress根目录来测试：

第一种： php_value output_handler ob_gzhandler
第二种：
> <IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/gif A2592000
ExpiresByType image/jpeg A2592000
ExpiresByType image/png A2592000
ExpiresByType image/x-icon A2592000
ExpiresByType application/x-javascript A604800
ExpiresByType text/css A604800
< /IfModule>
<IfModule mod_deflate.c>
SetOutputFilter DEFLATE
AddOutputFilterByType DEFLATE text/html text/css image/gif image/jpeg image/png application/x-javascript
< /IfModule>
3. 通过php.ini 启用Gzip
如果服务器支持php.ini重定义的话，可以在php.ini中增加以下代码来开启gzip。
zlib.output_compression_level = number（ number为1-9的值,1的压缩比率最低, 建议取5）

4. 安装wordpress gzip插件
插件名称：gzippy
下载地址：http://wordpress.org/extend/plugins/gzippy/

需要注意的是如果在.htaccess文件中禁止了gzip功能的话，那在php.ini文件中开启后也需在.htaccess文件中开启 gzip，否则没有效果。开启wordpress的gzip功能后，服务器将在页面传输前将页面压缩后传送，可以有效减少服务器的带宽使用，也可以加速页 面下载。另外请注意** 只能选择一种方式来开启wordpress gzip压缩 **，否则有可能造成冲突，请大家谨记。

设置好之后大家可以到http://tool.chinaz.com/Gzips/进行测试看看wordpress gzip压缩有没有起作用。

让JS和CSS支持Gzip压缩进：《<a title="让WordPress的JS和CSS支持Gzip Compression压缩" href="http://www.saqqdy.com/computer-skills/make-wordpress-js-css-support-gzip-compression" target="_blank">让WordPress的JS和CSS支持Gzip Compression压缩</a>》		