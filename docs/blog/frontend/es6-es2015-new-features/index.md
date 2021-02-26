---
layout: post
title: 快速了解es6新特性		
date: 2019-03-25
tags: ["ES6","Javascript/ES6/ES7","前端","新特性"]
---

<!-- wp:paragraph -->
在近期的Vue开发中，使用了大量的ES6语法，因此觉得有必要找个时间来整理下近期的学习笔记。ES6相对ES5增加了许多新的特性，给我们的开发提供了方便。并且ES6也是未来开发的潮流，所以我觉得大家很有必要去掌握这一技能。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
在我们正式学习ES6前，我们需要先去学习下转码器。常用的转码器有<a href="https://link.jianshu.com?t=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fsetup%2F" target="_blank" rel="noreferrer noopener">Babel</a>和Traceur。这里推荐一篇<a href="https://link.jianshu.com?t=https%3A%2F%2Fwww.cnblogs.com%2Fyufann%2Fp%2FES6-note1.html" target="_blank" rel="noreferrer noopener">常见的ES6转码工具</a>有兴趣的可以去看看。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
接下来我们就一起去见证ES6的神奇之处吧！
<!-- /wp:paragraph -->

<!-- wp:heading -->
##1.let和const
<!-- /wp:heading -->

<!-- wp:paragraph -->
let与var类似是用来声明变量的，const用来声明常量。在实际用途中它们存在着许多区别，废话不多说，直接看代码。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>  {
      var a = 100;
      let b = 200;
  }
  console.log(a); //100
  console.log(b); //b is not defined -- Error
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
是不是感觉很奇怪，为什么a有值而b却not defined呢？因为ES5只有全局作用域和函数作用域，没有块级作用域。而let则实际上为JavaScript新增了块级作用域。用它所声明的变量，只在let命令所在的代码块内有效。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
let不存在变量提升。那么什么是变量提升呢？简单来说就是无论声明在什么地方，都会被视为声明在顶部。下面来看个例子。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>//ES5
    console.log("ES5:");
    var a = [];
    for (var i = 0; i < 10; i++) {
        var c = i;
        a[i] = function () {
            console.log(c);
        };
    };
    a[5](); //结果:9
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
是不是有许多小伙伴在疑惑为什么输出的不是5呢？变量i是var声明的，在全局范围内都有效。所以每一次循环，新的i值都会覆盖旧值，导致最后输出的是最后一轮的i的值。而使用let则不会出现这个问题。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>//ES6
    console.log("ES6:");
    var b = [];
    for (var j = 0; j < 10; j++) {
        let d = j;
        b[j] = function () {
            console.log(d);
        };
    };
    b[5](); 结果://5
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
同时let也是不允许重复声明的。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>    {
        var a = 100;
        var a = 200;
        console.log(a); //200
    }
    // 模块内部不允许用let命令重复声明
    {
        var a = 1;
        let a = 2;
        console.log(a); // 报错
    }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
下面再来说说 const。const也用来声明变量，但是声明的是常量，一旦声明，常量的值就不能改变。它和let一样只在声明的区域内有用。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>    {
        var a   = 100;
        const a = 200;
        console.log(a); // 报错
    }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
const声明对象
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>    const person = {};
    person.name  = "Zhangsan";
    person.age   = 30;

    console.log(person.name);   //Zhangsan
    console.log(person.age);    //30
    console.log(person);        //Object {name: "Zhangsan", age: 30}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
const对象冻结
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>    const person = Object.freeze({});
    person.name  = "Zhangsan";
    person.age   = 30;

    console.log(person.name);   //undefined
    console.log(person.age);    //undefined
    console.log(person);        //Object
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
##2.模板字符串
<!-- /wp:heading -->

<!-- wp:paragraph -->
相对于es5的' '+变量这种字符串拼接方法，es6的模板字符串要方便许多。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>     var a = '张三';
     var age = 18;
     var b = '我的名字是'+a+'我今年'+age+'岁了'; // es5
     var c = `我的名字是${a}我今年${age}岁了`; // es6
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
当然简单的两行代码可能它的优势没有那么的明显，一旦代码量变多，你就能体会到它的便利了。
<!-- /wp:paragraph -->

<!-- wp:heading -->
##3.函数
<!-- /wp:heading -->

<!-- wp:heading {"level":5} -->
#####函数默认参数
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>     function num(n) {
        n = n '' 200; //当传入n时，n为传入的值，没有则默认200
        return n;
     }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
es6为参数提供了默认值。在定义函数时便初始化了这个参数，直接看代码。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>     function num(n = 200) {
        return n;
     }
     console.log(n()); // 200
     console.log(n(100)); // 100
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":5} -->
#####箭头函数
<!-- /wp:heading -->

<!-- wp:paragraph -->
箭头函数的基本用法。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// es5
     function breakfast(dessert,drink){
        return dessert+drink;
     }
// es6
     let breakfast = (dessert,drink) => dessert + ' ' + drink;
     console.log(breakfast('面包','牛奶'));
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
箭头函数的this指向绑定定义是所在的作用域，而普通函数this指向运行时所在的作用域（全局对象），箭头函数没有自己的this而是引用外层的this。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// es5
     cartView: function() {
          var _this = this;
          this.$http.get("data/cartData.json", {"id": 123}).then(function(res) {
              _this.productList = res.data.result.list;
              console.log(_this.productList);
        });
      }
// es6
      cartView(){
          this.$http.get("data/cartData.json", {"id": 123}).then((res) {
              this.productList = res.data.result.list;
              console.log(this.productList);
        });
      }
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
##4.解构
<!-- /wp:heading -->

<!-- wp:paragraph -->
数组和对象是JS中最常用也是最重要表示形式。为了简化提取信息，ES6新增了解构，这是将一个数据结构分解为更小的部分的过程。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// es5提取对象
    let people = {
        name : 'json',
        age : 18,
        sex : 'male'
    }；
    let name = people.name;
    let age = people.age;
    ...
 // es6
    let people = {
        name : 'json',
        age : 18,
        sex : 'male'
    }；
    let {name, age, sex} = people;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
相比于es5是不是简便了许多，当然数组的方法与对象的类似。下面我们再来举个栗子，函数参数解构赋值的默认值。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>    fun ({x, y} = { x: 0, y: 0 }) {
        return [x, y];
    };

    console.log(fun({x: 100, y: 200})); //[100, 200]
    console.log(fun({x: 100}));         //[100, undefined]
    console.log(fun({}));               //[undefined, undefined]
    console.log(fun());                 //[0, 0]
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
讲了这么多，可能有人就会问了这个解构到底有什么用呢？其实它适合于各种与数组，对象，函数打交道的场景。下面我们来举个运用最广的例子-变量交换。直接上代码。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>//ES5
    console.log("ES5:");
    var a = 100;
    var b = 200;
    console.log("交换前：");
    console.log("a = " + a);    //a = 100
    console.log("b = " + b);    //b = 200
    var temp;
    temp = a;
    a = b;
    b = temp;
    console.log("交换后：");
    console.log("a = " + a);    //a = 200
    console.log("b = " + b);    //b = 100

    //ES6
    console.log("ES6:");
    var x = 100;
    var y = 200;
    console.log("交换前：");
    console.log("x = " + x);    //x = 100
    console.log("y = " + y);    //y = 200
    </code></pre>
<!-- /wp:code -->

<!-- wp:shortcode -->
[x, y]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
= [y, x];
    console.log("交换后：");
    console.log("x = " + x);    //x = 200
    console.log("y = " + y);    //y = 100
<!-- /wp:paragraph -->

<!-- wp:heading -->
##5. ...操作符
<!-- /wp:heading -->

<!-- wp:list -->
* 展开操作符
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code>    let str2 = ['苹果','梨子'];
    console.log(str2);//["苹果", "梨子"]
    console.log(...str2);//苹果 梨子
</code></pre>
<!-- /wp:code -->

<!-- wp:list -->
* 剩余操作符
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code>    fun(a,b,...c){
        console.log(a,b,...c);//...c指展开数组
    }
    fun('苹果','香蕉','橘子','梨子','李子');//苹果 香蕉 橘子 梨子 李子
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
##6.class、 extends、 super
<!-- /wp:heading -->

<!-- wp:paragraph -->
这三个特性涉及了ES5中最令人头疼的的几个部分：原型、构造函数，继承...看到它们是不是开始怀疑人生了。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
别怕有来了ES6我们以后再怀疑吧！
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
ES6提供了更接近传统语言的写法，引入了Class（类）这个概念。新的class写法让对象原型的写法更加清晰、更像面向对象编程的语法，也更加通俗易懂。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>class MyClass {
  constructor() {  // 构造函数
    // ...
  }
  get prop() {  // 取值
    return 'getter';
  }
  set prop(value) { // 存值
    console.log('setter: '+value);
  }
}

let inst = new MyClass();
inst.prop = 123;
// setter: 123
console.log(inst.prop);
// 'getter'
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
extends用法
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color; // ReferenceError
    super(x, y);
    this.color = color; // 正确
  }
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例。父类的静态方法，也会被子类继承。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
注意，super虽然代表了父类Point的构造函数，但是返回的是子类ColorPoint的实例，即super内部的this指的是ColorPoint，因此super()在这里相当于Point.prototype.constructor.call(this)。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。<br>
作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>    class A {}
    class B extends A {
      m() {
         super(); // 报错
      }
    }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>     class A {
           p() {
            return 2;
          }
        }
     class B extends A {
            constructor() {
            super();
            console.log(super.p()); // 2
          }
        }
        let b = new B();
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
上面代码中，子类B当中的super.p()就是将super当作一个对象使用。这时，super在普通方法之中，指向A.prototype，所以super.p()就相当于A.prototype.p()。这里需要注意，由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。
<!-- /wp:paragraph -->

<!-- wp:heading -->
##7.Promise
<!-- /wp:heading -->

<!-- wp:paragraph -->
在promise之前代码过多的回调或者嵌套，可读性差、耦合度高、扩展性低。通过Promise机制，大大提高了代码可读性；用同步编程的方式来编写异步代码，保存线性的代码逻辑，极大的降低了代码耦合性而提高了程序的可扩展性。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>this.$http('/api/getData').then((res) => {
res = res.data;
this.dataList = res.result;
}).catch((err) => {
...
});
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
这是一个vue的异步请求，用的就是promise机制，这样的好处是不会因为多层的回调而降低代码的可读性。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
当然这只是promise的冰山一角，想要更好的掌握它还是需要更加深入的去学习它。
<!-- /wp:paragraph -->

<!-- wp:heading -->
##8.Set
<!-- /wp:heading -->

<!-- wp:paragraph -->
实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
<!-- /wp:paragraph -->

<!-- wp:list -->
* 操作方法：<br>
add(value)：添加某个值，返回Set结构本身。<br>
delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。<br>
has(value)：返回一个布尔值，表示该值是否为Set的成员。<br>
clear()：清除所有成员，没有返回值。* 遍历方法：<br>
keys()：返回键名的遍历器<br>
values()：返回键值的遍历器<br>
entries()：返回键值对的遍历器<br>
forEach()：使用回调函数遍历每个成员<br>
由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值）
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code>let str = [1,2,3,2,4,3,5,6,4,1,7];
console.log('str的长度为：'+str.length); // 长度为11
let s = new Set(str);
console.log(s);
console.log('去重后的长度为：'+s.size);//长度为7
console.log( Array.from(s));//Array.from 将Set转换为数组形式

let set = new Set(['red', 'green', 'blue']);
var arr = new Set();
for (let item of set.keys()) {
  console.log(item);// red green blue
  arr.add(item);//将item添加到arr set结构中
}
console.log(arr);
arr.forEach((value, key) => console.log(key + ' : ' + value));
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
##9.import 和 export
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>//全部导入
import mallHeader from '../components/header.vue'
//导入部分
import {name, age} from './example'
// 导出默认, 有且只有一个默认
export default App
// 部分导出
export class App extend Component {};

</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
##小结
<!-- /wp:heading -->

<!-- wp:paragraph -->
这些仅仅是es6家族中的冰山一角，想要更加全面的去掌握这一技能，就需要我们更加系统的去学习它。感谢花了这么长时间，阅读文章的小伙伴们，希望能对你们带来帮助。有错误的地方希望大佬们多多包涵，给我反馈！
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
链接：https://www.jianshu.com/p/342ae4b2ef99
<!-- /wp:paragraph -->		