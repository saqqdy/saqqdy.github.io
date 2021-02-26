---
layout: post
title: WordPress自动翻译中文标题插件cos_slug_translator		
date: 2011-09-18
tags: ["cos_slug_translator","WordPress插件","WordPress插件","翻译","资源"]
---

看标题肯定有很多人不懂这个插件是干嘛的，这里简单介绍一下，cos_slug_translator实际上是一款标题翻译插件，启用了自定义静态链接的用户就会发现，中文标题显示出来的一个个的字母、百分号之类的东西，那是将中文进行编码之后的结果。那种链接不利搜索引擎推广。咱的目的是要将链接变成英文的，如果自己去翻译然后再填进去显然过于复杂。cos_slug_translator插件可以代劳。咱只管把中文标题、内容之类的写好，点击发布之后就没咱什么事了，cos_slug_translator自动将标题翻译成英文了（基于谷歌翻译）。当然，如果觉得翻译的不好还可以自己手动修改一下。是不是很方便？

什么是slug？看我的文章标题http://www.saqqdy.com/news/saqqdy-find-host-partners-sharing-bluehost

saqqdy-find-host-partners-sharing-bluehost就是日志名，也就是所谓的slug了，WordPress的slug取决于你的日志名，英文日志名基本没什么可说的，标点符号和空格会自动转换成"-"，即我的日志名为"xx,x"那我的日志slug就会自动转换为"xx-x"，那日志连接地址就会是：http://www.saqqdy.com/news/xx-x/

但如果是中文，则会自动编码，那你的日志连接地址就会是：

http://www.saqqdy.com/tag/%e4%b8%bb%e6%9c%ba%e5%90%88%e7%a7%9f

这样十分不美观，也不利搜索引擎收录，而且给人一种不友善的感觉。这时你可以通过撰写或修改时，修改slug，前提是你的永久连接选择不能以数字命名：

http://www.saqqdy.com/?p=123 或：http://www.saqqdy.com/archives/123

以上两种永久连接的形式无法使用slug。也有很多人使用的是离线发布日志，比如"Windows Live Writer"、"zoundry raven"、"菊子曰"等，这些虽然也能手动修改slug，但我还是觉得麻烦，经常在日志发布时忘记手动去修改slug，结果还要自己登陆管理页面手动修改，太麻烦了，于是网上找了下相关插件。有的插件甚至可以直接翻译成拼音，这样固然强大，但太耗费系统资源，内存使用很高。最后选择cos_slug_translator，只需要将插件上传到wp的插件目录，然后点击"激活"即可，无需另外设置。这个插件支持最新版的WordPress 3.2.1，是上岸QQ的鱼最青睐的插件。

该插件仅一个php文件，超级简单却超级实用。

下载地址：[download id="979" format="1"]		