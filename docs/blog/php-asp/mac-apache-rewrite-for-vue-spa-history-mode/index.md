---
layout: post
title: 使用apache rewrite伪静态搭建vue的history路由运行环境		
date: 2019-03-18
tags: [".htaccess","Apache","PHP/ASP","rewrite","Vue spa","Vue/Angular/React","前端"]
---

<!-- wp:paragraph -->
请参照<a href="http://www.saqqdy.com/untitled/start-mac-apache-service-for-php">《5分钟学会开启MAC系统内置APACHE服务》</a>先开启apache服务
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
开启rewrite：<br>在apache网站目录创建.htaccess文件：touch .htaccess<br>加入以下内容
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><IfModule mod_rewrite.c><br>RewriteEngine On<br>RewriteBase /<br>RewriteRule ^index.html$ - [L]<br>RewriteCond %{REQUEST_FILENAME} !-f<br>RewriteCond %{REQUEST_FILENAME} !-d<br>RewriteRule . /index.html [L] <br></IfModule><br></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
然后把/etc/apache2/httpd.conf文件里面所有的AllowOverride none改成AllowOverride all<br>重启服务：sudo /usr/sbin/apachectl restart<br>大功告成！
<!-- /wp:paragraph -->		