---
layout: post
title: 解决homebrew安装包的时候Updating Homebrew... 长时间不动的问题		
date: 2019-04-08
tags: ["homebrew","Javascript/ES6/ES7","Nodejs","中科大源","前端","清华源"]
---

<!-- wp:paragraph -->
brew是mac系统最好的包管理 工具，都是这安装包每次都卡在Updating Homebrew...也太蛋疼了。最近打算学习React + dva + umi开发，在安装yarn包的时候遇到不少问题，《<a href="http://www.saqqdy.com/frontend/mac-homebrew-install-yarn-s3-amazonaws-com">填坑：解决MAC系统HOMEBREW安装YARN等S3.AMAZONAWS.COM地址的包经常失败的问题</a>》。执行：brew install yarn卡在（updating homebrew...）不动，明显的是墙的问题！
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
依次输入下面的命令（注意：不要管重置部分的命令，这里原作者贴出来、我也贴出来是以防需要重置的时候有参考操作命令）
<!-- /wp:paragraph -->

<!-- wp:heading -->
##替换成中科大源
<!-- /wp:heading -->

<!-- wp:paragraph -->
替换brew.git：
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>cd "$(brew --repo)"
git remote set-url origin https://mirrors.ustc.edu.cn/brew.git</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
替换homebrew-core.git：
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
##或者替换成清华源
<!-- /wp:heading -->

<!-- wp:paragraph -->
替换为brew.git：
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>cd "$(brew --repo)"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
替换homebrew-core.git：
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
##重置默认
<!-- /wp:heading -->

<!-- wp:paragraph -->
重置brew.git：
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>cd "$(brew --repo)"
git remote set-url origin https://github.com/Homebrew/brew.git</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
重置homebrew-core.git：
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://github.com/Homebrew/homebrew-core.git</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph {"textColor":"vivid-red"} -->
<p class="has-text-color has-vivid-red-color">以上命令的原文替换及重置Homebrew默认源</p>
<!-- /wp:paragraph -->		