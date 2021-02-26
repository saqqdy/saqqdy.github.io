---
layout: post
title: 花5分钟时间理一理exports、module.exports和export、export default		
date: 2019-04-22
tags: ["ES6","export default","exports","Javascript/ES6/ES7","module.exports","前端"]
---

<!-- wp:paragraph -->
先理理他们的使用范围：
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><code>require</code>: node 和 es6 都支持的引入<br><code>export/import</code> : 只有es6 支持的导出引入<br><code>module.exports/exports</code>: 只有 node 支持的导出</blockquote>
<!-- /wp:quote -->

<!-- wp:heading -->
<h2 id="articleHeader1">node模块</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<code>Node</code>里面的模块系统遵循的是<code>CommonJS</code>规范。<br>那问题又来了，什么是<code>CommonJS</code>规范呢？<br>由于<code>js</code>以前比较混乱，各写各的代码，没有一个模块的概念，而这个规范出来其实就是对模块的一个定义。
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><code>CommonJS</code>定义的模块分为: 模块标识(<code>module</code>)、模块定义(<code>exports</code>) 、模块引用(<code>require</code>)</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
先解释&nbsp;<code>exports</code>&nbsp;和&nbsp;<code>module.exports</code><br>在一个node执行一个文件时，会给这个文件内生成一个&nbsp;<code>exports</code>和<code>module</code>对象，<br>而<code>module</code>又有一个<code>exports</code>属性。他们之间的关系如下图，都指向一块{}内存区域。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>exports = module.exports = {};</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
那下面我们来看看代码的吧。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>//utils.js
let a = 100;

console.log(module.exports); //能打印出结果为：{}
console.log(exports); //能打印出结果为：{}

exports.a = 200; //这里辛苦劳作帮 module.exports 的内容给改成 {a : 200}

exports = '指向其他内存区'; //这里把exports的指向指走

//test.js

var a = require('/utils');
console.log(a) // 打印为 {a : 200} </code></pre>
<!-- /wp:code -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">从上面可以看出，其实<code>require</code>导出的内容是<code>module.exports</code>的指向的内存块内容，并不是<code>exports</code>的。<br>简而言之，区分他们之间的区别就是&nbsp;<code>exports</code>&nbsp;只是&nbsp;<code>module.exports</code>的引用，辅助后者添加内容用的。</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
用白话讲就是，<code>exports</code>只辅助<code>module.exports</code>操作内存中的数据，辛辛苦苦各种操作数据完，累得要死，结果到最后真正被<code>require</code>出去的内容还是<code>module.exports</code>的，真是好苦逼啊。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
其实大家用内存块的概念去理解，就会很清楚了。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
然后呢，为了避免糊涂，尽量都用&nbsp;<code>module.exports</code>&nbsp;导出，然后用<code>require</code>导入。
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="articleHeader2">ES中的模块导出导入</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
说实话，在es中的模块，就非常清晰了。不过也有一些细节的东西需要搞清楚。<br>比如&nbsp;<code>export</code>&nbsp;和&nbsp;<code>export default</code>，还有 导入的时候，<code>import a from ..</code>,<code>import {a} from ..</code>，总之也有点乱，那么下面我们就开始把它们捋清楚吧。
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="articleHeader3">export 和 export default</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
首先我们讲这两个导出，下面我们讲讲它们的区别
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
1. export与export default均可用于导出常量、函数、文件、模块等2. 在一个文件或模块中，export、import可以有多个，export default仅有一个3. 通过export方式导出，在导入时要加{ }，export default则不需要4. export能直接导出变量表达式，export default不行。
<!-- /wp:list -->

<!-- wp:paragraph -->
下面咱们看看代码去验证一下
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
####testEs6Export.js
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>'use strict'
//导出变量
export const a = '100';  

 //导出方法
export const dogSay = function(){ 
    console.log('wang wang');
}

 //导出方法第二种
function catSay(){
   console.log('miao miao'); 
}
export { catSay };

//export default导出
const m = 100;
export default m; 
//export defult const m = 100;// 这里不能写这种格式。
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
####index.js
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>//index.js
'use strict'
var express = require('express');
var router = express.Router();

import { dogSay, catSay } from './testEs6Export'; //导出了 export 方法 
import m from './testEs6Export';  //导出了 export default 
import * as testModule from './testEs6Export'; //as 集合成对象导出

/* GET home page. */
router.get('/', function(req, res, next) {
  dogSay();
  catSay();
  console.log(m);
  testModule.dogSay();
  console.log(testModule.m); // undefined , 因为  as 导出是 把 零散的 export 聚集在一起作为一个对象，而export default 是导出为 default属性。
  console.log(testModule.default); // 100
  res.send('恭喜你，成功验证');
});

module.exports = router;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
从上面可以看出，确实感觉&nbsp;<code>ES6</code>的模块系统非常灵活的。
<!-- /wp:paragraph -->		