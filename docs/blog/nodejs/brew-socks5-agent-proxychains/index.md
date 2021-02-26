---
layout: post
title: brew通过安装proxychains来设置socks5代理		
date: 2019-05-01
tags: ["brew代理","Nodejs","proxychains","socks5","前端"]
---

<!-- wp:code -->
<pre class="wp-block-code"><code>brew install proxychains-ng
# 编辑proxychains的配置文件，注意下面的路径可能稍有区别，请以自己电脑上的路径为准
vim /usr/local/etc/proxychains.conf
# 将最后一行的
socks4 127.0.0.1 9095
# 改成（以自己的代理为准）这个端口大家都懂什么意思吧
socks5 127.0.0.1 1086
# OK，大功告成！</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
###然后你就可以这样来安装你要的包了！
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">proxychains4 brew install xxxxxxxcask安装proxychains4 brew cask install xxxxxxx</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":3} -->
###或者在~/.curlrc文件中输入代理地址
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>touch ~/.curlrc
vi ~/. curlrc
# 添加下面代码
socks5 = '127.0.0.1:1086'</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
支持 macOS Sierra，macOS High Sierra。macOS High Sierra 存在不能代理ssh的问题，使用Proxifiers可解决代理ssh的问题。
<!-- /wp:paragraph -->		