---
layout: post
title: 5分钟看懂JavaScript变量提升		
date: 2019-03-21
tags: ["javascript","Javascript/ES6/ES7","前端","变量提升"]
---

<!-- wp:heading {"level":3} -->
###一、变量提升
<!-- /wp:heading -->

<!-- wp:paragraph -->
在ES6之前，JavaScript没有块级作用域(一对花括号{}即为一个块级作用域)，只有全局作用域和函数作用域。变量提升即将变量声明提升到它所在作用域的最开始的部分。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
(1) 创建函数有两种形式，一种是函数声明，另外一种是函数字面量，只有函数声明才有变量提升
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>console.log(a) // f a() {console.log(a)}
console.log(b) //undefined
function a() {
  console.log(a) 
}
var b = function(){
  console.log(b)
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
相当于
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>var a = 'function'
var b
console.log(a)
console.log(b)</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
(2)变量提升
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>console.log(c) //undefined
var c = "第一次没打印出来，第二次才出来"
console.log(c) //第一次没打印出来，第二次才出来
function fn(){
  console.log(d) //undefined
  var d = '和前面的一样啊'
  console.log(d); //和前面的一样啊
}
fn()</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
其实，就相当于
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>var c
console.log(c)
c = "xxxx"
console.log(c)</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
###二、函数提升与变量提升的优先级
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>console.log(a) // f a() {console.log(10)}
console.log(a()) // undefined
var a = 3
function a() {
  console.log(10) //10
}
console.log(a) //3
a = 6
console.log(a()) //a is not a function</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
原理 ：
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code> var a = funtion () {
  console.log(10)
 }
 var a
 console.log(a) // f a() {console.log(10)}
 console.log(a()) // undefined
 a = 3
 console.log(a) //3
 a = 6
 console.log(a()) //a() is not a function
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
####由此可见函数提升要比变量提升的优先级要高一些，且不会被变量声明覆盖，但是会被变量赋值之后覆盖。
<!-- /wp:heading -->

<!-- wp:paragraph -->
转自：https://www.cnblogs.com/oxiaojiano/p/7918967.html
<!-- /wp:paragraph -->		