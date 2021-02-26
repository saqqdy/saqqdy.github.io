---
layout: post
title: 填坑：解决mac系统homebrew安装yarn等s3.amazonaws.com地址的包经常失败的问题		
date: 2019-04-08
tags: ["amazonaws","homebrew","Javascript/ES6/ES7","Nodejs","yarn","前端"]
---

<!-- wp:paragraph -->
被brew狠狠坑了一把，想在本地用brew安装yarn，但总是报下面的错
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>==> Downloading https://yarnpkg.com/downloads/1.15.2/yarn-v1.15.2.tar.gz
==> Downloading from https://github-production-release-asset-2e65be.s3.amazonaws.com/49970642/c9

curl: (22) The requested URL returned error: 403 Forbidden
Error: An exception occurred within a child process:
  DownloadError: Failed to download resource "yarn"
Download failed: https://yarnpkg.com/downloads/1.15.2/yarn-v1.15.2.tar.gz</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
"https://xxxxxxxxxx.s3.amazonaws.com"开头类似于这种的带有amazonaws字眼的地址，下载起来很慢，经常连不上，解决方法如下：
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
可以通过设置<code>host</code>，强制把访问节点从美国定向到香港的办法来解决这个问题。<code>Windows</code>下，编辑<code>C:\Windows\System32\drivers\etc\hosts</code>，然后增加如下解析即可。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>219.76.4.4 s3.amazonaws.com
219.76.4.4 github-cloud.s3.amazonaws.com</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
##或者
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">使用Dns检测'Dns查询 - 站长工具：<a rel="noreferrer noopener" href="http://tool.chinaz.com/dns/" target="_blank">http://tool.chinaz.com/dns/</a>输入域名<br>amazonaws.com<br>github-cloud.s3.amazonaws.com<br>分别检测，选取TTL较小的IP按方案一的方法写入host，问题即可解决。</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
对于<code>Linux</code>以及<code>macOS</code>，则修改<code>/etc/hosts</code>。直接加在最后两行就行了，windows改的时候会提示权限不够，需要用管理员账号，或者用管理员权限！
<!-- /wp:paragraph -->		