---
layout: post
title: 几种常见的JS设计模式		
date: 2019-04-11
tags: ["javascript","Javascript/ES6/ES7","js","前端","设计模式"]
---

<!-- wp:paragraph -->
前端是一个近几年非常流行的新技术岗位，前端工程师的出现实现了设计、展现、业务的彻底分离，今天要讲的JS设计模式，正是一个高级前端工程师必须要了解的前端开发方式。
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="articleHeader1">发布订阅模式（观察者模式）:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
这种设计模式可以大大降低程序模块之间的耦合度，便于更加灵活的扩展和维护，也就是说，这种模式就是用一大串的列表来维护多对多的关系。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// 一个播放器类
class Player {
  constructor() {
    // 初始化观察者列表
    this.watchers = {}

    // 模拟2秒后发布一个'play'事件
    setTimeout(() => {
      this._publish('play', true)
    }, 2000)

    // 模拟4秒后发布一个'pause'事件
    setTimeout(() => {
      this._publish('pause', true)
    }, 4000)
  }

  // 发布事件
  _publish(event, data) {
    if (this.watchers[event] && this.watchers[event].length) {
      this.watchers[event].forEach(callback => callback.bind(this)(data))
    }
  }

  // 订阅事件
  subscribe(event, callback) {
    this.watchers[event] = this.watchers[event] '' []
    this.watchers[event].push(callback)
  }

  // 退订事件
  unsubscribe(event = null, callback = null) {
    // 如果传入指定事件函数，则仅退订此事件函数
    if (callback&&event) {
      if (this.watchers[event] && this.watchers[event].length) {
        this.watchers[event].splice(this.watchers[event].findIndex(cb => Object.is(cb, callback)), 1)
      }

    // 如果仅传入事件名称，则退订此事件对应的所有的事件函数
    } else if (event) {
      this.watchers[event] = []

    // 如果未传入任何参数，则退订所有事件
    } else {
      this.watchers = {}
    }
  }
}

// 实例化播放器
const player = new Player()
console.log(player)

// 播放事件回调函数1
const onPlayerPlay1 = data => {
  console.log('1: Player is play, the `this` context is current player', this, data)
}

// 播放事件回调函数2
const onPlayerPlay2 = data => {
  console.log('2: Player is play', data)
}

// 暂停事件回调函数
const onPlayerPause = data => {
  console.log('Player is pause', data)
}

// 加载事件回调函数
const onPlayerLoaded = data => {
  console.log('Player is loaded', data)
}

// 可订阅多个不同事件
player.subscribe('play', onPlayerPlay1)
player.subscribe('play', onPlayerPlay2)
player.subscribe('pause', onPlayerPause)
player.subscribe('loaded', onPlayerLoaded)

// 可以退订指定订阅事件
player.unsubscribe('play', onPlayerPlay2)
// 退订指定事件名称下的所有订阅事件
player.unsubscribe('play')
// 退订所有订阅事件
player.unsubscribe()

// 可以在外部手动发出事件（真实生产场景中，发布特性一般为类内部私有方法）
player._publish('loaded', true)</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 id="articleHeader2">中介者模式 Mediator Pattern:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
观察者模式通过维护一堆列表来管理对象间的多对多关系，中介者模式通过统一接口来维护一对多关系，且通信者之间不需要知道彼此之间的关系，只需要约定好API即可。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// 汽车
class Bus {
  constructor() {
    // 初始化所有乘客
    this.passengers = {}
  }

  // 发布广播
  broadcast(passenger, message = passenger) {
    // 如果车上有乘客
    if (Object.keys(this.passengers).length) {
      // 如果是针对某个乘客发的，就单独给他听
      if (passenger.id && passenger.listen) {
        // 乘客他爱听不听
        if (this.passengers[passenger.id]) {
          this.passengers[passenger.id].listen(message)
        }
      // 不然就广播给所有乘客
      } else {
        Object.keys(this.passengers).forEach(passenger => {
          if (this.passengers[passenger].listen) {
            this.passengers[passenger].listen(message)
          }
        })
      }
    }
  }

  // 乘客上车
  aboard(passenger) {
    this.passengers[passenger.id] = passenger
  }

  // 乘客下车
  debus(passenger) {
    this.passengers[passenger.id] = null
    delete this.passengers[passenger.id]
    console.log(`乘客${passenger.id}下车`)
  }

  // 开车
  start() {
    this.broadcast({ type: 1, content: '前方无障碍，开车！Over'})
  }

  // 停车
  end() {
    this.broadcast({ type: 2, content: '老司机翻车，停车！Over'})
  }
}

// 乘客
class Passenger {
  constructor(id) {
    this.id = id
  }
  // 听广播
  listen(message) {
    console.log(`乘客${this.id}收到消息`, message)
    // 乘客发现停车了，于是自己下车
    if (Object.is(message.type, 2)) {
      this.debus()
    }
  }
  // 下车
  debus() {
    console.log(`我是乘客${this.id}，我现在要下车`, bus)
    bus.debus(this)
  }
}

// 创建一辆汽车
const bus = new Bus()

// 创建两个乘客
const passenger1 = new Passenger(1)
const passenger2 = new Passenger(2)

// 俩乘客分别上车
bus.aboard(passenger1)
bus.aboard(passenger2)

// 2秒后开车
setTimeout(bus.start.bind(bus), 2000)

// 3秒时司机发现2号乘客没买票，2号乘客被驱逐下车
setTimeout(() => {
  bus.broadcast(passenger2, { type: 3, content: '同志你好，你没买票，请下车!' })
  bus.debus(passenger2)
}, 3000)

// 4秒后到站停车
setTimeout(bus.end.bind(bus), 3600)

// 6秒后再开车，车上已经没乘客了
setTimeout(bus.start.bind(bus), 6666)</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 id="articleHeader3">代理模式 Proxy Pattern:</h3>
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">为其他对象提供一种代理以控制对这个对象的访问。<br>代理模式使得代理对象控制具体对象的引用。代理几乎可以是任何对象：文件，资源，内存中的对象，或者是一些难以复制的东西。</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
ES6中的Proxy对象
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const target = {}
const handler = {
    get(target, property) {
        if (property in target) {
            return target[property]
        } else {
            throw new ReferenceError("Property \"" + property + "\" does not exist.")
        }
    }
}
const p = new Proxy(target, {})
p.a = 3  // 被转发到代理的操作
console.log(p.c) //</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 id="articleHeader4">单例模式 Singleton Pattern:</h3>
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">保证一个类只有一个实例，并提供一个访问它的全局访问点（调用一个类，任何时候返回的都是同一个实例）。</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
实现方法：使用一个变量来标志当前是否已经为某个类创建过对象，如果创建了，则在下一次获取该类的实例时，直接返回之前创建的对象，否则就创建一个对象。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// 类数实例：
class Singleton {
  constructor(name) {
    this.name = name
    this.instance = null   // 
  }
  getName() {
    alert(this.name)
  }
  static getInstance(name) {
    if (!this.instance) {
      this.instance = new Singleton(name)
    }
    return this.instance
  }
}
const ins = new Singleton('hhhh')
const instanceA = Singleton.getInstance('seven1')
const instanceB = Singleton.getInstance('seven2')
//闭包包装实例：
const SingletonP = (function() {
  let instance
  return class Singleton {

    constructor(name) {
      if (instance) {
        return instance
      } else {
        this.init(name)
        instance = this
        return this
      }
    }

    init(name) {
      this.name = name
      console.log('已初始化')
    }
  }
})()

const instanceA = new SingletonP('seven1')
const instanceB = new SingletonP('seven2')
// ES5 iife
var SingletonTester = (function () {
    function Singleton(args) {
        var args = args '' {};
        //设置name参数
        this.name = 'SingletonTester';
    }
    //实例容器
    var instance;
    return {
        name: 'SingletonTester',
        getInstance: function (args) {
            if (instance === undefined) {
                instance = new Singleton(args);
            }
            return instance;
        }
    };
})();

var singletonTest = SingletonTester.getInstance({ pointX: 5 });
console.log(singletonTest.pointX); // 输出 5 
// 构造函数的属性
function Universe() {
    if (typeof Universe.instance === 'object') {
        return Universe.instance;
    }
    this.start_time = 0;
    this.bang = "Big";
    Universe.instance = this;
}
// 测试
var uni = new Universe();
var uni2 = new Universe();
console.log(uni === uni2); // true
// 重写构造函数
function Universe() {
    var instance = this;
    // 其它内容
    this.start_time = 0;
    this.bang = "Big";
    // 重写构造函数
    Universe = function () {
        return instance;
    };
}
// 测试
var uni = new Universe();
var uni2 = new Universe();
uni.bang = "123";
console.log(uni === uni2); // true
console.log(uni2.bang); // 123</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 id="articleHeader5">工厂模式 Factory Pattern:</h3>
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
简单说：假如我们想在网页面里插入一些元素，而这些元素类型不固定，可能是图片、链接、文本，根据工厂模式的定义，在工厂模式下，工厂函数只需接受我们要创建的元素的类型，其他的工厂函数帮我们处理。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// 文本工厂
class Text {
    constructor(text) {
        this.text = text
    }
    insert(where) {
        const txt = document.createTextNode(this.text)
        where.appendChild(txt)
    }
}

// 链接工厂
class Link {
    constructor(url) {
        this.url = url
    }
    insert(where) {
        const link = document.createElement('a')
        link.href = this.url
        link.appendChild(document.createTextNode(this.url))
        where.appendChild(link)
    }
}

// 图片工厂
class Image {
    constructor(url) {
        this.url = url
    }
    insert(where) {
        const img = document.createElement('img')
        img.src = this.url
        where.appendChild(img)
    }
}

// DOM工厂
class DomFactory {

  constructor(type) {
    return new (this[type]())
  }

  // 各流水线
  link() { return Link }
  text() { return Text }
  image() { return Image }
}

// 创建工厂
const linkFactory = new DomFactory('link')
const textFactory = new DomFactory('text')

linkFactory.url = 'https://surmon.me'
linkFactory.insert(document.body)

textFactory.text = 'HI! I am surmon.'
textFactory.insert(document.body)</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 id="articleHeader6">装饰者模式 Decorative Pattern:</h3>
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">装饰者(decorator)模式能够在不改变对象自身的基础上，在程序运行期间给对像动态的添加职责（方法或属性）。与继承相比，装饰者是一种更轻便灵活的做法。</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
简单说：可以动态的给某个对象添加额外的职责，而不会影响从这个类中派生的其它对象。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>ES7装饰器
function isAnimal(target) {
    target.isAnimal = true
    return target
}

// 装饰器
@isAnimal
class Cat {
    // ...
}
console.log(Cat.isAnimal)    // true



作用于类属性的装饰器：

function readonly(target, name, descriptor) {
    discriptor.writable = false
    return discriptor
}

class Cat {
    @readonly
    say() {
        console.log("meow ~")
    }
}

var kitty = new Cat()
kitty.say = function() {
    console.log("woof !")
}
kitty.say()    // meow ~</code></pre>
<!-- /wp:code -->		