---
layout: post
title: Google推出mod-pagespeed免费模块为Apache提速		
date: 2010-11-10
tags: ["Apache提速","Mod PageSpeed","实用软件","资源"]
---

谷歌近日推出mod-pagespeed免费模块，据悉，该模块可以为Apache提速50%左右，大多人浏览网页如果超过3秒打不开就会离开，运用该工具可以将网页加载速度提高50%。 据悉，在此次开源之前，Google内部也一直使用该模块。 根据网络服务公司Netcraft 10的报告，使用Google网络服务器提供技术的网络服务器将有12.67%。 去年6月，Google 为开发者提供了一个可以给出相关网站优化建议的工具 Page Speed，但是有了建议后的后续执行工作也是很麻烦的。贴心的 Google 特为懒惰型 SA 提供了傻瓜化解决方案： mod_pagespeed。

mod_pagespeed 是一个适用于 Apache httpd 的模块，它可以自动完成超过15项的优化工作，包括优化缓存，减少客户端服务器之间的通讯，降低负载等等。经测试，使用了 mod_pagespeed 后，页面的载入时间仅为之前的一半，也就是说速度整整提高了一倍，另外它也是开放源代码的。 Google 还宣布已经在和著名的虚拟主机提供商狗爹（Godaddy）合作为850万用户提供了使用 mod_pagespeed 加速过的 http 服务，他们的主席兼 COO Warren Adelman 说道： 一直以来，狗爹（Godaddy）都以为用户提供做好的用户体验为己任。这也就是我们和 Google 合作进行"让网络快起来"这项计划的原因。在使用了 mod_pagespeed 和其他的技术后，我们的工程师惊喜的发现用户的网站载入速度比之前快了好多。我们希望将这些技术提供给我们的客户，相信他们以及他们的网站访问者都会因此受益的。

此外，Google 也在和 CDN 服务供应商 Cotendo 合作将 mod_pagespeed 的引擎应用到他们的 CDN 服务中去。

官方下载页面：<a href="http://www.saqqdy.com/?r=http://code.google.com/speed/page-speed/download.html">http://code.google.com/speed/page-speed/download.html</a>		