---
layout: post
title: mac系统本地生成SSH KEY的方法		
date: 2019-04-09
tags: ["gitee","github","Javascript/ES6/ES7","Nodejs","SSH KEY","前端"]
---

<!-- wp:paragraph -->
打开终端查看是否已经存在SSH密钥
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>cd ~/.ssh</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
如果没有密钥则不会有此文件夹，有则备份删除,   也可以直接删除,
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
生成新的秘钥, 命令如下
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>ssh-keygen -t rsa -C "youremail@example.com"</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可，因为这个Key仅仅用于简单的服务，所以也无需设置密码。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
到ssh目录下打开<code>.ssh</code>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>cd ~/.ssh
open .</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
查看你的public key
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>cat ~/.ssh/id_rsa.pub</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
添加后，在终端（Terminal）中输入
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>ssh -T git@gitee.com</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
若返回：
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>Welcome to Gitee.com, 你的name!</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
则配置成功。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
若提示不正确错误：
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">Are you sure you want to continue connecting (yes/no)?&nbsp;</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
输入yes继续回车就可以了。然后在重复输入ssh -T git@gitee.com，回车则会提示正确。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
回车输入以下命令：
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>#git clone git@gitee.com:saqqdy/saqqdy-cli.git</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
然后项目就会克隆到本地了，接下来就是创作的过程了，当做了改动提交时，可以简单使用以下的命令，请实际以Git命令使用为主
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
里面存放着三个文件<code>id_rsa</code>、<code>id_rsa.pub</code>、<code>known_hosts</code>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
将<code>id_rsa.pub</code>(公钥ssh key)里的内容全部复制到服务器端(例如gitHub或gitLibe、gitee的公钥ssh key)
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<code>id_rsa</code>为私钥文件，要存储在本地保密
<!-- /wp:paragraph -->		