---
layout: post
title: 开启WordPress的Gzip compression压缩功能		
date: 2011-12-08
tags: ["Gzip compression","Gzip压缩","WordPress","WordPress技巧","小技巧"]
---

自从听说搜索引擎把网页加载速度列为网页评级的一部分之后，上岸QQ的鱼一直在琢磨如何提高http://www.saqqdy.com的访问速度。最近也一直在使用百度统计，很喜欢百度统计的SEO建议、搜索词排名、网站速度诊断等功能，也根据网站速度诊断结果一直在优化网站。其中提到开启WordPress的Gzip压缩功能，禁不住诱惑我就去试了一下，果然不同凡响！

需要百度统计邀请码的进：《<a title="上岸QQ的鱼发放百度统计邀请码" href="http://www.saqqdy.com/news/saqqdy-baidu-tongji-invite-code" target="_blank">上岸QQ的鱼发放百度统计邀请码</a>》

首先要确定你的主机支持Gzip，bluehost主机的强悍之处就在于它几乎支持任何你想要的功能，当然啦，Gzip也不例外！想合租的朋友进：《<a title="上岸QQ的鱼寻找合租bluehost主机伙伴" href="http://www.saqqdy.com/news/saqqdy-find-host-partners-sharing-bluehost" target="_blank">上岸QQ的鱼寻找合租bluehost主机伙伴</a>》
你可以通过PHP探针phpinfo.php查看你的空间是否支持Gzip compression。

打开Wordpress的Gzip功能，其实在Wordpress 2.5以前默认是启用的，不过为什么这版本以后会关掉。不管它，我们把它打开。
打开你Wordpress根目录下的index.php(切记是根目录下的，不是theme目录)，然后在
> define('WP_USE_THEMES', true);
的后面加上
> if(ereg('gzip',$_SERVER['HTTP_ACCEPT_ENCODING'])){
if(substr($_SERVER['REQUEST_URI'],0,10)!='/wp-content/uploads/')//排除不需要Gzip压缩的目录，图片一般不推荐启用Gzip压缩
ob_start('ob_gzhandler');
}
当然了，如果你希望启用图片的Gzip压缩，在define('WP_USE_THEMES', true);加ob_start('ob_gzhandler');就行了！上岸QQ的鱼不推荐这样使用。

到这里你已经开启了Gzip功能，不过为了保险起见，还可以去检测一下：http://tool.chinaz.com/Gzips/
<span style="color: #ff0000;">通过这一步骤，网站的性能已经提高了一个档次，不过对于CSS和JS，默认是不进行压缩的，下一步我们就让它也对JS和CSS进行压缩。

让JS和CSS支持Gzip压缩进：《<a title="让WordPress的JS和CSS支持Gzip Compression压缩" href="http://www.saqqdy.com/computer-skills/make-wordpress-js-css-support-gzip-compression" target="_blank">让WordPress的JS和CSS支持Gzip Compression压缩</a>》		