---
layout: post
title: JavaScript事件循环实例		
date: 2019-03-21
tags: ["javascript","Javascript/ES6/ES7","setTimeout","事件循环","前端"]
---

<!-- wp:paragraph -->
《<a rel="noreferrer noopener" aria-label="一文看懂JAVASCRIPT事件循环EVENT LOOP机制 (opens in a new tab)" href="http://www.saqqdy.com/frontend/javascript-event-loop" target="_blank">一文看懂JAVASCRIPT事件循环EVENT LOOP机制</a>》已经很详细的介绍了事件循环机制，那么这里我们举个简单的例子来说明event loop到底是什么样的表现
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>for (var i = 1; i <= 3; i++){
  setTimeout(function() {
    console.log(i)
  }, 0)
}
//输出：4 4 4</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
这个例子输出的结果是4 4 4，为什么呢？<br>setTimeout作为task是在for循环之后执行的，for循环之后的i为4
<!-- /wp:paragraph -->		