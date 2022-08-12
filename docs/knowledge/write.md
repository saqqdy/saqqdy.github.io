## 手写 JavaScript

1. 手写 Object.create
   思路：将传入的对象作为原型

```js
function create(obj) {
    function F() {}
    F.prototype = obj
    return new F()
}
```

2. 手写 instanceof 方法
   instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

实现步骤：
首先获取类型的原型
然后获得对象的原型
然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null

```js
function myInstanceOf(newObject, constructor) {
    let proto = Object.getPrototypeOf(newObject)
    while (true) {
        if (!proto) return false
        if (proto === constructor.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}
function A() {}
const a = new A()
console.log(myInstanceOf(a, Object)) // true
```
