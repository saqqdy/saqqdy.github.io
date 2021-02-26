---
layout: post
title: 推荐使用saqqdy-cli脚手架工具生成适配移动h5网站的解决方案模板		
date: 2019-04-18
tags: ["Javascript/ES6/ES7","Nodejs","saqqdy-cli","前端","移动端适配","脚手架"]
---

<!-- wp:heading {"level":3} -->
###介绍
<!-- /wp:heading -->

<!-- wp:paragraph -->
saqqdy-cli是本人创建的专门用于生成本人提供的vue模板的专用安装工具，采用了类似vue cli的风格，一键生成vue网站模板，目前是1.0.0版本，欢迎拍砖！
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
项目地址：<a href="https://github.com/saqqdy/saqqdy-cli">https://github.com/saqqdy/saqqdy-cli</a>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
###软件架构
<!-- /wp:heading -->

<!-- wp:paragraph -->
基于commander、git-clone、shelljs、tracer等
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
###安装教程
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code># 安装saqqdy-cli
npm install -g @saqqdy/cli

# 使用saqqdy-cli创建模板
saqqdy <template name> <project name>

# 进入项目目录安装依赖
cd <project name>
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
###使用说明
<!-- /wp:heading -->

<!-- wp:paragraph -->
请参照对应的模板介绍，目前saqqdy-cli提供以下模板:
<!-- /wp:paragraph -->

<!-- wp:list -->
* <a href="https://github.com/saqqdy/vue_px_to_viewport_h5">vue_px_to_viewport_h5</a>&nbsp;基于自动转换px到vw的H5网站解决方案* <a href="https://github.com/saqqdy/vue_px_to_rem_h5">vue_px_to_rem_h5</a>&nbsp;基于自动转换px到rem的H5网站解决方案* <a href="https://github.com/saqqdy/vue_cli3_px_to_viewport_h5">vue_cli3_px_to_viewport_h5</a>&nbsp;基于CLI3自动转换px到vw的H5网站解决方案* <a href="https://github.com/saqqdy/vue_cli3_px_to_rem_h5">vue_cli3_px_to_rem_h5</a>&nbsp;基于自动转换px到rem的H5网站解决方案* <a href="https://github.com/saqqdy/vue_cli3_multiple">vue_cli3_multiple</a>&nbsp;基于CLI3的多页应用模板
<!-- /wp:list -->

<!-- wp:paragraph -->
资源不断更新中，请前往<a href="https://github.com/saqqdy">https://github.com/saqqdy</a>查看全部模板资源
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
###我的相关
<!-- /wp:heading -->

<!-- wp:list -->
* 我的码云：<a href="https://gitee.com/saqqdy">https://gitee.com/saqqdy</a>* 我的Github：<a href="https://github.com/saqqdy">https://github.com/saqqdy</a>* 我的npm：<a href="https://npmjs.com/~saqqdy">https://npmjs.com/~saqqdy</a>* 我的个人网站 <a href="http://www.saqqdy.com/">http://www.saqqdy.com</a>
<!-- /wp:list -->		