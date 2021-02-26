---
layout: post
title: 5分钟学会开启MAC系统内置apache服务		
date: 2019-03-18
tags: ["Apache","PHP/ASP","前端"]
---

<!-- wp:paragraph -->
Apache路径<br> /etc/apache2/
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">~#cd /etc/apache2/<br>~#ls<br> extra           httpd.conf.pre-update   mime.types      other<br> httpd.conf      magic           original        users<br></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
启动服务<br>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">sudo apachectl start/restart   #启动apache<br>sudo apachectl stop            #停止apache</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
Mac下apache默认的网站路径是<br>/Library/WebServer/Documents<br> 我们来修改/etc/apache2/httpd.conf找到DocumentRoot这行来进行修改。
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">~#vim /etc/apache2/httpd.conf<br>~#:wq  退出保存<br>~#sudo apachectl restart</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
命令回顾说明：
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">cd /etc/apache2/   进入apache的配置文件目录<br>sudo vim httpd.conf    使用vim打开httpd.conf文件<br>sudo apachectl -k start   启动apache<br>sudo apachectl -k restart   重新启动apache</blockquote>
<!-- /wp:quote -->		