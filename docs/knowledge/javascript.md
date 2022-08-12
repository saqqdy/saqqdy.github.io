## 1. 设计模式

## 2. 原型链

-   概念：constructor（构造器）、prototype（原型对象）、new xxx()（实例对象）
-   constructor、prototype、**proto**三角关系
-   只有函数才有 prototype
-   默认 constructor 指向构造函数本身：

```js
function Foo() {}
Foo.prototype = {
    constructor: Foo // 不写默认指向Foo
}
const foo = new Foo()
// foo.__proto__ === Foo.prototype === Object.getPrototypeOf(foo)
// foo.__proto__.__proto__ === Object.prototype
// Foo.prototype.constructor === Foo === foo.constructor
```

## 3. 继承

```js
// 示例
function Super() {
    this.a = 1
}
Super.prototype.say = function () {}
```

-   原型链继承（有引用值共享的问题）

```js
Sub.prototype = new Super()
```

-   构造函数继承（没办法拿到 Super 原型上的 say 方法）

```js
function Sub() {
    Super.call(this)
}
```

-   构造函数继承，上面 2 种合并（Super 执行了 2 次）

```js
function Sub() {
    Super.call(this)
}
Sub.prototype = new Super()
```

-   经典继承（寄生组合继承）用一个 Function 来代理（原有的 prototype 被覆盖问题）

```js
function Sub() {
    Super.call(this)
}
if (!Object.create) {
    Object.create = function (proto) {
        function F() {}
        F.prototype = proto
        return new F()
    }
}
// 使用Object.create方法，由于prototype被重新赋值，Sub.prototype.subSay需要重新给
Sub.prototype = Object.create(Super.prototype)
```

-   圣杯模式（解决 4 中 Sub 原有的 prototype 被覆盖的问题）

```js
function Sub() {
    Super.call(this)
}
function inherit(Sub, Super) {
    function F() {}
    F.prototype = Super.prototype
    Sub.prototype = new F()
    Sub.prototype.constructor = Sub
    Sub.prototype.uber = Super.prototype
}
inherit(Sub, Super)
```

## 5. 隐式类型转换

-   `Number.EPSILON ? Number.EPSILON : Math.pow(2, -52)`: 解决 0.1+0.2 !== 0.3

```js
console.log({} == !{})
console.log([] == ![])
// 1. 原始值转化为原始值
console.log(Number(undefined)) // NaN  undefined 空的原始值
console.log(Number(null)) // 0  null 空指针
console.log(Boolean(undefined)) // false  undefined 空的原始值
console.log(Boolean(null)) // 0  false 空指针
// 虚值falsey undefined、null
// 0，NaN，false，'' +0 -0

console.log(Infinity) // Infinity指无穷大的数字
console.log(Number(Infinity)) // Infinity
console.log(Boolean(Infinity)) // true

// 2. 对象转原始值
console.log(Boolean([])) // true
console.log(Boolean({})) // true
console.log(Boolean(/\d/)) // true
console.log(Boolean(new Error())) // true
console.log(Boolean(Symbol())) // true
console.log(typeof function () {}) // function
console.log(typeof Date()) // string
console.log(typeof new Date()) // object
// typeof返回值
// string/number/boolean/object/undefined/function/

// 1. Number隐式转换
// 下面3种情况，先调用valueOf方法，遇到原始值2直接输出，如果不是原始值，调用toString()方法（如果没有toString()方法，往原型上找toString()方法），如果toString()返回的不是原始值，报错
// Object.prototype.toString(obj) -> [object Object]
const obj = {
    toString() {
        return 1
    },
    valueOf() {
        return 2
    }
}
console.log(Number(obj)) // 2
const obj1 = {
    toString() {
        return 1
    },
    valueOf() {
        return {}
    }
}
console.log(Number(obj1)) // 1
const obj2 = {
    valueOf() {
        return {}
    }
}
console.log(Number(obj2)) // NaN

console.log(Number([1, 2])) // NaN  Array.prototype.toString([1,2]) => '1,2'
console.log(Number([3])) // 10  Array.prototype.toString([1,2]) => '10'
console.log(Number({})) // NaN

console.log(Object.prototype.toString.call(123)) // [object Number]
console.log(Object.prototype.toString.call('123')) // [object String]
console.log(Object.prototype.toString.call(false)) // [object boolean]
console.log(Object.prototype.toString.call(undefined)) // [object undefined]
console.log(Object.prototype.toString.call(null)) // [object Null]
console.log(Object.prototype.toString.call(function () {})) // [object Function]
console.log(Object.prototype.toString.call([2])) // [object Array]
console.log(Object.prototype.toString.call({})) // [object Object]
// 返回构造函数类型
console.log(Object.prototype.toString.call(new Error())) // [object Error]
console.log(Object.prototype.toString.call(/\d/)) // [object RegExp]
console.log(Object.prototype.toString.call(Date)) // [object Function]
console.log(Object.prototype.toString.call(new Date())) // [object Date]
console.log(Object.prototype.toString.call(Symbol())) // [object Symbol]
;(function () {
    console.log(Object.prototype.toString.call(arguments)) // [object Arguments]
})()
console.log(Object.prototype.toString.call(document)) // [object HTMLDocument]
```

## 6. 高级方法

-   `[].isPrototypeOf(Object)`:
-   `Object.getPrototypeOf(foo)`: 获取 foo 的原型
-   `promise/A+规范`
-   实现`sum(1)(2)(3).count()`

```js
function sum(a) {
    const temp = b => sum(a + b)
    temp.toString = () => a // temp.toString这里写成temp.valueOf也可以
    // this.count =
    console.log(temp)
    return temp
}
```
