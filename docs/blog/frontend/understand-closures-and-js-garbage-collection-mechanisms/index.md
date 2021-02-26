---
layout: post
title: 一文理解闭包和js垃圾回收机制		
date: 2019-04-29
tags: ["javascript","Javascript/ES6/ES7","内存泄漏","前端","垃圾回收机制","闭包"]
---

<!-- wp:paragraph -->
** 为什么要有回收机制？ **
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
我们声明的任何变量都需要消耗内存，这些变量越多运行的速度也会越慢。当然不只是变量，代码中的任何东西。这些语言的设计者为了解决这些问题，设计了一套代码的回收规则。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
代码回收规则如下：
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
1.全局变量不会被回收。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
2.局部变量会被回收，也就是函数一旦运行完以后，函数内部的东西都会被销毁。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
3.只要被另外一个作用域所引用就不会被回收
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
闭包是很多语言都具备的特性，在js中，闭包主要涉及到js的几个其他的特性：作用域链，垃圾(内存)回收机制，函数嵌套，等等。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
闭包以及函数a和嵌套函数b的关系，引入函数的执行环境(excution context)、活动对象(call object)、作用域(scope)、作用域链(scope chain)。以函数a从定义到执行的过程为例阐述这几个概念。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
1、当定义函数a的时候，js解释器会将函数a的** 作用域链(scope chain) **设置为定义a时a所在的"环境"，如果a是一个全局函数，则scope chain中只有window对象。<br>2、当函数a执行的时候，a会进入相应的** 执行环境(excution context) **。<br>3、在创建执行环境的过程中，首先会为a添加一个scope属性，即a的** 作用域 **，其值就为第1步中的scope chain。即a.scope=a的作用域链。<br>4、然后执行环境会创建一个** 活动对象(call object) **。活动对象也是一个拥有属性的对象，但它不具有原型而且不能通过JavaScript代码直接访问。创建完活动对象后，把活动对象添加到a的作用域链的最顶端。此时a的作用域链包含了两个对象：a的活动对象和window对象。<br>5、下一步是在活动对象上添加一个arguments属性，它保存着调用函数a时所传递的参数。<br>6、最后把所有函数a的形参和内部的函数b的引用也添加到a的活动对象上。在这一步中，完成了函数b的的定义，因此如同第3步，函数b的作用域链被设置为b所被定义的环境，即a的作用域。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
到此，整个函数a从定义到执行的步骤就完成了。此时a返回函数b的引用给c，又函数b的作用域链包含了对函数a的活动对象的引用，也就是说b可以访问到a中定义的所有变量和函数。函数b被c引用，函数b又依赖函数a，因此函数a在返回后不会被GC回收。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
当函数b执行的时候亦会像以上步骤一样。因此，执行时b的作用域链包含了3个对象：b的活动对象、a的活动对象和window对象，如下图所示：
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
如图所示，当在函数b中访问一个变量的时候，搜索顺序是先搜索自身的活动对象，如果存在则返回，如果不存在将继续搜索函数a的活动对象，依次查找，直到找到为止。如果整个作用域链上都无法找到，则返回undefined。如果函数b存在prototype原型对象，则在查找完自身的活动对象后先查找自身的原型对象，再继续查找。这就是Javascript中的变量查找机制。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
在Javascript中，如果一个对象不再被引用，那么这个对象就会被GC回收。如果两个对象互相引用，而不再被第3者所引用，那么这两个互相引用的对象也会被回收。因为函数a被b引用，b又被a外的c引用，这就是为什么函数a执行后不会被回收的原因。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
闭包有三个特性：
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">1.函数嵌套函数<br> 2.函数内部可以引用外部的参数和变量<br> 3.参数和变量不会被垃圾回收机制回收</blockquote>
<!-- /wp:quote -->

<!-- wp:heading -->
<h2 id="articleHeader1">闭包的定义及其优缺点</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<code>闭包</code>&nbsp;是指有权访问另一个函数作用域中的变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
闭包的缺点就是常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
闭包是<code>javascript</code>语言的一大特点，主要应用闭包场合主要是为了：设计私有的方法和变量。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
一般函数执行完毕后，局部活动对象就被销毁，内存中仅仅保存全局作用域。但闭包的情况不同！
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="articleHeader2">嵌套函数的闭包</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function aaa() {
  var a = 1
  return function() {
    alert(a++)
  }
}
var fun = aaa()
fun() // 1 执行后 a++，，然后a还在~
fun() // 2
fun = null // a被回收！！</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
闭包会使变量始终保存在内存中，如果不当使用会增大内存消耗。
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="articleHeader3"><code>javascript</code>的垃圾回收原理</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
（1）、在<code>javascript</code>中，如果一个对象不再被引用，那么这个对象就会被<code>GC</code>回收；&nbsp;<br>（2）、如果两个对象互相引用，而不再被第<code>3</code>者所引用，那么这两个互相引用的对象也会被回收。
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="articleHeader4">使用闭包的好处</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
那么使用闭包有什么好处呢？使用闭包的好处是：
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">1.希望一个变量长期驻扎在内存中<br> 2.避免全局变量的污染<br> 3.私有成员的存在</blockquote>
<!-- /wp:quote -->

<!-- wp:heading -->
<h2 id="articleHeader5">一、全局变量的累加</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>var a = 1
function abc() {
  a++
  alert(a)
}
abc() //2
abc() //3</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 id="articleHeader6">二、局部变量</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function abc() {
  var a = 1
  a++
  alert(a)
}
abc() // 2
abc() // 2</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
那么怎么才能做到变量a既是局部变量又可以累加呢？
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="articleHeader7">三、局部变量的累加</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function outer() {
  var x = 10
  return function() {
    // 函数嵌套函数
    x++
    alert(x)
  }
}
var y = outer() // 外部函数赋给变量y;
y() // y函数调用一次，结果为11，相当于outer()()；
y() // y函数调用第二次，结果为12，实现了累加</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 id="articleHeader8">函数声明与函数表达式</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
在js中我们可以通过关键字<code>function</code>来声明一个函数：
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function abc() {
  alert(123)
}
abc()</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
我们也可以通过一个"()"来将这个声明变成一个表达式：
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>(function() {
  alert(123)
})() //然后通过()直接调用前面的表达式即可，因此函数可以不必写名字；</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 id="articleHeader9">四、模块化代码，减少全局变量的污染</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>var abc = (function() {
  // abc为外部匿名函数的返回值
  var a = 1
  return function() {
    a++
    alert(a)
  }
})()
abc() // 2 ；调用一次abc函数，其实是调用里面内部函数的返回值
abc() // 3</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 id="articleHeader10">五、私有成员的存在</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>var aaa = (function() {
  var a = 1
  function bbb() {
    a++
    alert(a)
  }
  function ccc() {
    a++
    alert(a)
  }
  return {
    b: bbb, // json结构
    c: ccc
  }
})()
aaa.b() // 2
aaa.c() // 3</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 id="articleHeader11">六.使用匿名函数实现累加</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>//使用匿名函数实现局部变量驻留内存中，从而实现累加
function box() {
  var age = 100
  return function() {
    // 匿名函数
    age++
    return age
  }
}
var b = box()
alert(b())
alert(b()) // 即alert(box()())；
alert(b())
alert(b)
// function() {
//   age++
//   return age
// }
b = null // 解除引用，等待垃圾回收</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
过度使用闭包会导致性能的下降。函数里放匿名函数，则产生了闭包
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="articleHeader12">七、在循环中直接找到对应元素的索引</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code><!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
<title></title>
<script>
window.onload = function() {
  var aLi = document.getElementsByTagName('li')
  for (var i = 0; i < aLi.length; i++) {
    aLi[i].onclick = function() {
      // 当点击时for循环已经结束
      alert(i)
    }
  }
}
</script>

</head>
<body>
  <ul>
    <li>123</li>
    <li>456</li>
    <li>789</li>
    <li>010</li>
  </ul>
</body>
</html></code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 id="articleHeader13">八、使用闭包改写上面代码</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code><!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
<title></title>
<script>
window.onload = function() {
  var aLi = document.getElementsByTagName('li')
  for (var i = 0; i < aLi.length; i++) {
    ;(function(i) {
      aLi[i].onclick = function() {
        alert(i)
      }
    })(i)
  }
}
</script>

</head>
<body>
  <ul>
    <li>123</li>
    <li>456</li>
    <li>789</li>
    <li>010</li>
  </ul>
</body>
</html></code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 id="articleHeader14">九.内存泄露问题</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
由于<code>IE</code>的<code>js</code>对象和<code>DOM</code>对象使用不同的垃圾收集方法，因此闭包在<code>IE</code>中会导致内存泄露问题，也就是无法销毁驻留在内存中的元素
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function closure() {
  var oDiv = document.getElementById('oDiv') // oDiv用完之后一直驻留在内存中
  oDiv.onclick = function() {
    alert('oDiv.innerHTML') // 这里用oDiv导致内存泄露
  }
}
closure()
// 最后应将oDiv解除引用来避免内存泄露
function closure() {
  var oDiv = document.getElementById('oDiv')
  var test = oDiv.innerHTML
  oDiv.onclick = function() {
    alert(test)
  }
  oDiv = null
}</code></pre>
<!-- /wp:code -->		