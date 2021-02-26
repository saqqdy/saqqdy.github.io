---
layout: post
title: 分享一个prettier的推荐配置@saqqdy/prettier-config		
date: 2019-04-18
tags: ["Javascript/ES6/ES7","prettier","prettier-config","saqqdy","前端"]
---

<!-- wp:paragraph -->
如果需要在结合vs code软件使用，请记得安装prettier插件
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
项目地址：<a href="https://github.com/saqqdy/prettier-config">https://github.com/saqqdy/prettier-config</a>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
另外分享了一个vs code的推荐配置：<a href="http://www.saqqdy.com/frontend/my-visual-studio-code-setting-json">http://www.saqqdy.com/frontend/my-visual-studio-code-setting-json</a>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
###安装教程
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code># 使用npm安装
npm install @saqqdy/prettier-config -D
# 使用yarn安装
yarn add @saqqdy/prettier-config --dev</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
###使用说明
<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->
####方法1. 修改package.json
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code># 编辑您项目package.json加上下面这一行
{
  ...
  "prettier": "@saqqdy/prettier-config",
  ...
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
####方法2. 创建/修改本地.prettierrc.js文件
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code># 编辑.prettierrc.js
module.exports = {
  ...require("@saqqdy/prettier-config"),
  semi: false
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
###我的相关
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
1. 我的码云：<a href="https://gitee.com/saqqdy">https://gitee.com/saqqdy</a>2. 我的Github：<a href="https://github.com/saqqdy">https://github.com/saqqdy</a>3. 我的npm：<a href="https://npmjs.com/~saqqdy">https://npmjs.com/~saqqdy</a>4. 我的个人网站 <a href="http://www.saqqdy.com/">http://www.saqqdy.com</a>
<!-- /wp:list -->		