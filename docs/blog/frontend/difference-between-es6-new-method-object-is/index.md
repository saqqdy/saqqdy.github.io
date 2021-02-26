---
layout: post
title: 探讨一下ES6新方法Object.is()与“==”“===”的区别		
date: 2019-04-17
tags: ["===","javascript","Javascript/ES6/ES7","Object.is","前端"]
---

<!-- wp:paragraph -->
<code>==</code>：等同，比较运算符，两边值类型不同的时候，先进行类型转换再比较；
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>2 == "2" // true
0 == false // true
1 == true // true
null == undefined // true</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<code>===</code>：恒等，严格比较运算符，不做类型转换，类型不同就是不等；
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>2 === "2" // false
0 === false // false
1 === true // false
null === undefined // false
Nan === undefined // false</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<code>Object.is()</code>是* ES6 *新增的用来比较两个值是否严格相等的方法，与<code>===</code>的行为基本一致。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>Object.is(1, '2') // false
Object.is(0, false) // false
Object.is(1, true) // false
Object.is(null, undefined) // false</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
先说<code>===</code>，这个比较简单，只需要利用下面的规则来判断两个值是否恒等就行了：如果类型不同，就* 不相等 *，如果两个都是** 数值 **，并且是同一个值，那么* 相等 *；
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
值得注意的是，如果两个值中至少一个是** NaN **，那么* 不相等 *（判断一个值是否是* NaN *，可以用<code>isNaN()</code>或<code>Object.is()</code>来判断）。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
如果两个都是** 字符串 **，每个位置的字符都一样，那么* 相等 *；否则* 不相等 *。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
如果两个值都是同样的** Boolean **值，那么* 相等 *。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
如果两个值都引用同一个** 对象或函数 **，那么* 相等 *，即两个对象的** 物理地址 **也必须保持一致；否则* 不相等 *。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
如果两个值都是** null **，或者都是** undefined **，那么* 相等 *。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
再说<code>Object.is()</code>，其行为与<code>===</code>基本一致，不过有两处不同：
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">** +0 **不等于** -0 **** NaN **等于自身。</blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code>+0 === -0 // true
Object.is(+0, -0) // false
+0 === 0 // true
Object.is(+0, 0) // true
NaN === NaN // false
Object.is(NaN, NaN) // true</code></pre>
<!-- /wp:code -->		