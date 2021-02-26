---
layout: post
title: WordPress 3.0非官方中文语言包发布		
date: 2010-06-26
tags: ["WordPress3","WordPress语言包","实用软件","资源"]
---

声明：这个WordPress 3.0的中文语言包，并不是官方的简体中文语音包，和WordPress官方以及http://cn.wordpress.org没有任何关系。各位在使用前必须要了解这个。

Wopus这次发布WordPress 3.0的中文语言包有点仓促，所以这个中文语言包我们也附上了版本，这次发布的是WordPress 3.0.language.packs.zh_CN.beta版本，因为有些比较难翻译，特别是NetWork这部分，有450条需要单独翻译，但经过测试，当前beta的WordPress 3.0中文语言包已经在使用上没太大的问题。
WordPress 3.0 简体中文语言包 beta说明：

翻译了绝大多数WordPress后台可见文字内容。
一些帮助内容将在后续版本中完成翻译。(后台增加帮助文档也是WordPress 3.0的一个新功能)
Network（网络）功能的翻译将以另一个文件发布。
欢迎纠错以完善本语言包。Wopus会继续纠正，并发布完整版语言包。

这里还声明一点，Wopus不会发布WordPress中文版，需要中文版的，可以等待WordPress中国官方网站发布：http://cn.wordpress.org，Wopus一直建议各位使用WordPress英文原版+中文语言包，这样使用起来会减少很多麻烦，相信有些朋友已经能明白这其中的道理。

使用方法：

下载中文语言包，上传到 wp-content 目录。
打开wp-config.php(WordPress安装成功之后，会自动生成wp-config.php文件)，找到:

define ('WPLANG', '');

更改成：

define ('WPLANG', 'zh_CN');

上传并覆盖空间里的wp-config.php文件。这样，WordPress后台就是中文版了。

WordPress 3.0 简体中文语言包 beta下载地址：<a href="http://wopus.googlecode.com/files/WordPress%203.0_language.zh_CN.Pack.wopus.beta.zip" target="_blank">点击此处下载</a>

<span style="color: red;">PS:如果使用过程发现问题请回帖！		