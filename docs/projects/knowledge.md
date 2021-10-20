## JavaScript 知识点

1. 设计模式

2. 原型链

-   概念：constructor（构造器）、prototype（原型对象）、new xxx()（实例对象）
-   constructor、prototype、**proto**三角关系
-   只有函数才有 prototype
-   默认 constructor 指向构造函数本身：

```js
function Foo() {}
Foo.prototype = {
    constructor: Foo // 不写默认指向Foo
}
var foo = new Foo()
// foo.__proto__ === Foo.prototype === Object.getPrototypeOf(foo)
// foo.__proto__.__proto__ === Object.prototype
// Foo.prototype.constructor === Foo === foo.constructor
```

3. 继承

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

5. 隐式类型转换

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
var obj = {
    toString() {
        return 1
    },
    valueOf() {
        return 2
    }
}
console.log(Number(obj)) // 2
var obj1 = {
    toString() {
        return 1
    },
    valueOf() {
        return {}
    }
}
console.log(Number(obj1)) // 1
var obj2 = {
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

6. 高级方法

-   `[].isPrototypeOf(Object)`:
-   `Object.getPrototypeOf(foo)`: 获取 foo 的原型
-   `promise/A+规范`
-   实现`sum(1)(2)(3).count()`

```js
function sum(a) {
    let temp = b => sum(a + b)
    temp.toString = () => a // temp.toString这里写成temp.valueOf也可以
    // this.count = 
    console.log(temp)
    return temp
}
```

## Vue 2 & 3

1. 组合式 api 技巧

2. 与 vue2.0 的区别

## typescript

1. 预置类型

-   `Record<Keys, Type>` 定义一个对象的 key 和 value 类型
-   `Partial<Type>`构建一个类型，将 Type 的所有属性设置为可选
-   `Required<Type>` 构建一个由 Type 的所有属性组成的类型，设置为必填。与 Partial 相反。
-   `Readonly<Type>` 构建一个类型，Type 的所有属性设置为只读，这意味着构建的类型的属性不能被重新分配。
-   `Pick<Type, Keys>` 通过从 Type 中选取属性集合 Keys（字符串字头或字符串字头的联合）来构造一个类型。
-   `Omit<Type, Keys>` 通过从 Type 中选取所有属性，然后删除 Keys（字符串字面或字符串字面的联合）来构造一个类型。与 Pick 反操作
-   `Exclude<Type, ExcludedUnion>` 通过从 Type 中排除所有可分配给 ExcludedUnion 的联盟成员来构造一个类型。
-   `Extract<Type, Union>` 通过从 Type 中提取可分配给 Union 的所有 union 成员，构造一个类型。
-   `NonNullable<Type>` 通过从 Type 中排除 null 和 undefined 来构造一个类型。
-   `Parameters<Type>` 从一个函数类型 Type 的参数中使用的类型构建一个元组类型。
-   `ConstructorParameters<Type>` 从一个构造函数类型的类型中构造一个元组或数组类型。它产生一个具有所有参数类型的元组类型（如果 Type 不是一个函数，则从未产生该类型）。
-   `ReturnType<Type>` 构建一个由函数 Type 的返回类型组成的类型。
-   `InstanceType<Type>` 构造一个由 Type 中构造函数的实例类型组成的类型。
-   `ThisParameterType<Type>` 提取一个函数类型的 this 参数的类型，如果该函数类型没有 this 参数，则为未知。
-   `OmitThisParameter<Type>` 移除 Type 的 this 参数。如果 Type 没有明确声明的 this 参数，结果只是 Type。否则，一个没有 this 参数的新函数类型将从 Type 创建。泛型被擦除，只有最后的重载签名被传播到新的函数类型。
-   `ThisType<Type>` 这个工具并不返回一个转换后的类型。相反，它作为一个上下文的 this 类型的标记。注意，必须启用 noImplicitThis 标志才能使用这个工具。
-   内在的字符串操作类型：`Uppercase<StringType>` `Lowercase<StringType>` `Capitalize<StringType>` `Uncapitalize<StringType>`

## npm 包

1. UI 组件库

2. 工具库

-   删掉废弃的文件和 exports：[ts-unused-exports](https://github.com/pzavolinsky/ts-unused-exports)
-   eslint 规则修复：[eslint-rule-composer](https://github.com/not-an-aardvark/eslint-rule-composer)
-   删除无用文件：[webpack-deadcode-plugin](https://github.com/MQuy/webpack-deadcode-plugin)
-   dead exports 检测方案：[ts-prune](https://github.com/nadeesha/ts-prune) [ts-morph](https://github.com/dsherret/ts-morph)
-   魔术替换文本，轻量 AST：[magic-string](https://www.npmjs.com/package/magic-string)
-   vite 中的 glob import：[fast-glob](https://www.npmjs.com/package/fast-glob)
-   vite 构建成静态站：[vite-ssg](https://github.com/antfu/vite-ssg)
-   微软 Rush 是为 Monorepo 工程设计的一体化解决方案：[Rush](https://rushjs.io/pages/intro/welcome/)
-   创建兼容 vue2 和 vue3 的组件库：[vue-demi](https://github.com/vueuse/vue-demi)
-   扫描 import 语法：[es-module-lexer](https://github.com/guybedford/es-module-lexer)
-   代码压缩 google brotli：[brotli](https://github.com/google/brotli/)
-   兼容 vue2，@vue/compat
-   vite 凡尔赛插件：[vite-plugin-sleep](https://github.com/IndexXuan/vite-plugin-sleep)
-   corn 定时任务字符串解析：[cron-parser](https://github.com/harrisiirak/cron-parser)
-   vue2 使用 vite：[vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2)
-   将 ANSI 颜色转换为终端输出：[nanocolors](https://github.com/ai/nanocolors)
-   PPT 工具：https://cn.sli.dev [slidev](https://github.com/slidevjs/slidev)
-   node 环境执行 cjs 和 esm： [esno](https://github.com/antfu/esno)
-   Node in CJS mode：[esbuild-register](https://github.com/egoist/esbuild-register)
-   Node in ESM mode：[esbuild-node-loader](https://github.com/antfu/esbuild-node-loader)
-   开源的npm Repository Manager：[Repository Manager 3](https://help.sonatype.com/repomanager3)

vue-tsc
vueuse
