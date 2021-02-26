---
layout: post
title: 10分钟搞懂js的apply、call和bind		
date: 2019-04-14
tags: ["apply","call","javascript","Javascript/ES6/ES7","前端"]
---

<!-- wp:quote -->
<blockquote class="wp-block-quote">俗话说面试造航母，入职拧螺丝，要想找到好工作，当然要好好的啃一啃原生JS。面试经常会问到：</blockquote>
<!-- /wp:quote -->

<!-- wp:list {"ordered":true} -->
1. 怎么利用call、apply来求一个数组中最大或者最小值2. 如何利用call、apply来做继承3. apply、call、bind的区别和主要应用场景
<!-- /wp:list -->

<!-- wp:heading -->
<h2 id="作用">作用</h2>
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">首先，这三个函数都是** 改变函数执行时的上下文 **，也就是this指向。有了这个认识，接下来我们来看一下，怎么使用这三个函数。</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
** 比如 **
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function Person(name){
  this.name = name;
}
Person.prototype = {
  constructor: Person,
  showName: function(){
    console.log(this.name);
  }
}
var person = new Person('qianlong');
person.showName();</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
上面的代码中person调用showName方法后会在浏览器的控制台输出<code>qianlong</code>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
** 接下来 **
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>var animal = {
  name: 'cat'
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
上面代码中有一个对象字面量，他没有所谓的showName方法，但是我还是想用？怎么办？不过没关系，call、apply、bind可以帮我们干这件事。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// 1 call
person.showName.call(animal);
// 2 apply
person.showName.apply(animal);
// 3 bind
person.showName.bind(animal)();</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
** 控制台输出了三次<code>cat **</strong>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
我们拿别人的showName方法，并动态改变其** 上下文 **帮自己输出了信息，说到底就是实现了** 复用 **
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="区别">区别</h2>
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">上面看起来三个函数的作用差不多，干的事几乎是一样的，那为什么要存在3个家伙呢，留一个不就可以。所以其实他们干的事从本质上讲都是一样的** 动态的改变this上下文 **,但是多少还是有一些差别的..</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
** call、apply与bind的差别 **
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">call和apply改变了函数的** this **上下文后便** 执行 **该函数,而bind则是返回改变了上下文后的一个函数。</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
** call、apply的区别 **
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">他们俩之间的差别在于参数的区别，call和aplly的第一个参数都是要改变上下文的对象，而call从第二个参数开始以参数列表的形式展现，apply则是把除了改变上下文对象的参数放在一个数组里面作为它的第二个参数。</blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code>fn.call(obj, arg1, arg2, arg3...);
fn.apply(obj, [arg1, arg2, arg3...]);</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 id="应用">应用</h2>
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">知道了怎么使用和他们之间的区别，接下来我们来了解一下通过call、apply、bind的常见应用场景。</blockquote>
<!-- /wp:quote -->

<!-- wp:list -->
* ** 求数组中的最大和最小值 **
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code>var arr = [34,5,3,6,54,6,-67,5,7,6,-8,687];
Math.max.apply(Math, arr);
Math.max.call(Math, 34,5,3,6,54,6,-67,5,7,6,-8,687);
Math.min.apply(Math, arr);
Math.min.call(Math, 34,5,3,6,54,6,-67,5,7,6,-8,687);</code></pre>
<!-- /wp:code -->

<!-- wp:list -->
* ** 将伪数组转化为数组 **
<!-- /wp:list -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">js中的伪数组(例如通过<code>document.getElementsByTagName</code>获取的元素)具有length属性，并且可以通过0、1、2...下标来访问其中的元素，但是没有Array中的push、pop等方法。我们可以利用call、apply来将其转化为真正的数组这样便可以方便地使用数组方法了。</blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code>var arrayLike = {
  0: 'qianlong',
  1: 'ziqi',
  2: 'qianduan',
  length: 3
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
上面就是一个普通的对象字面量，怎么把它变成一个数组呢？最简单的方法就是
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>var arr = [].slice.call(arrayLike);</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
上面arr便是一个包含arrayLike元素的真正的数组啦(&nbsp;** 注意数据结构必须是以数字为下标而且一定要有length属性 **&nbsp;)
<!-- /wp:paragraph -->

<!-- wp:list -->
* ** 数组追加 **
<!-- /wp:list -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">在js中要往数组中添加元素，可以直接用push方法，</blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code>var arr1 = [1,2,3];
var arr2 = [4,5,6];
[].push.apply(arr1, arr2);
// arr1 [1, 2, 3, 4, 5, 6]
// arr2 [4,5,6]</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
** 判断变量类型 **
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">对于对象型的数据类型，我们可以借助call来得知他的具体类型，例如数组</blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function isArray(obj){
  return Object.prototype.toString.call(obj) == '[object Array]';
}
isArray([]) // true
isArray('qianlong') // false</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
** 利用call和apply做继承 **
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>var Person = function (name, age) {
  this.name = name;
  this.age = age;
};
var Girl = function (name) {
  Person.call(this, name);
};
var Boy = function (name, age) {
  Person.apply(this, arguments);
}
var g1 = new Girl ('qing');
var b1 = new Boy('qianlong', 100);</code></pre>
<!-- /wp:code -->		