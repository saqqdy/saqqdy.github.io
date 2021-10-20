---
title: demo
---

## 开源库资源汇总

1. UI 组件

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

## typescript 技巧

1. `Record<Keys, Type>` 定义一个对象的 key 和 value 类型

```ts
interface PageInfo {
    title: string
}

type Page = 'home' | 'about' | 'contact'

const nav: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' }
}
```

2. `Partial<Type>`构建一个类型，将 Type 的所有属性设置为可选

```ts
interface Todo {
    title: string
    description: string
}
// 相当于
interface Todo {
    title?: string
    description?: string
}
```

3. `Required<Type>` 构建一个由 Type 的所有属性组成的类型，设置为必填。与 Partial 相反。

4. `Readonly<Type>` 构建一个类型，Type 的所有属性设置为只读，这意味着构建的类型的属性不能被重新分配。

```ts
interface Todo {
    title: string
}
const todo: Readonly<Todo> = {
    title: 'Delete inactive users'
}
todo.title = 'Hello'
// Cannot assign to 'title' because it is a read-only property.
```

5. `Pick<Type, Keys>` 通过从 Type 中选取属性集合 Keys（字符串字头或字符串字头的联合）来构造一个类型。

```ts
interface Todo {
    title: string
    description: string
    completed: boolean
}
type TodoPreview = Pick<Todo, 'title' | 'completed'>
const todo: TodoPreview = {
    title: 'Clean room',
    completed: false
}
```

6. `Omit<Type, Keys>` 通过从 Type 中选取所有属性，然后删除 Keys（字符串字面或字符串字面的联合）来构造一个类型。与 Pick 反操作

```ts
interface Todo {
    title: string
    description: string
    completed: boolean
    createdAt: number
}

type TodoPreview = Omit<Todo, 'description'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
    createdAt: 1615544252770
}
```

7. `Exclude<Type, ExcludedUnion>` 通过从 Type 中排除所有可分配给 ExcludedUnion 的联盟成员来构造一个类型。

```ts
type T0 = Exclude<'a' | 'b' | 'c', 'a'>
// type T0 = "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>
// type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>
// type T2 = string | number
```

8. `Extract<Type, Union>` 通过从 Type 中提取可分配给 Union 的所有 union 成员，构造一个类型。

```ts
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>
// type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>
// type T1 = () => void
```

9. `NonNullable<Type>` 通过从 Type 中排除 null 和 undefined 来构造一个类型。

```ts
type T0 = NonNullable<string | number | undefined>
// type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>
// type T1 = string[]
```

10. `Parameters<Type>` 从一个函数类型 Type 的参数中使用的类型构建一个元组类型。

```ts
declare function f1(arg: { a: number; b: string }): void
type T0 = Parameters<() => string>
// type T0 = []
type T1 = Parameters<(s: string) => void>
// type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>
// type T2 = [arg: unknown]
type T3 = Parameters<typeof f1>
// type T3 = [arg: {
//     a: number;
//     b: string;
// }]
type T4 = Parameters<any>
// type T4 = unknown[]
type T5 = Parameters<never>
// type T5 = never
type T6 = Parameters<string>
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
// type T6 = never
type T7 = Parameters<Function>
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.
// type T7 = never
```

11. `ConstructorParameters<Type>` 从一个构造函数类型的类型中构造一个元组或数组类型。它产生一个具有所有参数类型的元组类型（如果 Type 不是一个函数，则从未产生该类型）。

```ts
type T0 = ConstructorParameters<ErrorConstructor>
// type T0 = [message?: string]
type T1 = ConstructorParameters<FunctionConstructor>
// type T1 = string[]
type T2 = ConstructorParameters<RegExpConstructor>
// type T2 = [pattern: string | RegExp, flags?: string]
type T3 = ConstructorParameters<any>
// type T3 = unknown[]
type T4 = ConstructorParameters<Function>
// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
// Type 'Function' provides no match for the signature 'new (...args: any): any'.
// type T4 = never
```

12. `ReturnType<Type>` 构建一个由函数 Type 的返回类型组成的类型。

```ts
declare function f1(): { a: number; b: string }
type T0 = ReturnType<() => string>
// type T0 = string
type T1 = ReturnType<(s: string) => void>
// type T1 = void
type T2 = ReturnType<<T>() => T>
// type T2 = unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>
// type T3 = number[]
type T4 = ReturnType<typeof f1>
// type T4 = {
//     a: number;
//     b: string;
// }
type T5 = ReturnType<any>
// type T5 = any
type T6 = ReturnType<never>
// type T6 = never
type T7 = ReturnType<string>
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
// type T7 = any
type T8 = ReturnType<Function>
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.
// type T8 = any
```

13. `InstanceType<Type>` 构造一个由 Type 中构造函数的实例类型组成的类型。

```ts
class C {
    x = 0
    y = 0
}
type T0 = InstanceType<typeof C>
// type T0 = C
type T1 = InstanceType<any>
// type T1 = any
type T2 = InstanceType<never>
// type T2 = never
type T3 = InstanceType<string>
// Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.
// type T3 = any
type T4 = InstanceType<Function>
// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
// Type 'Function' provides no match for the signature 'new (...args: any): any'.
// type T4 = any
```

14. `ThisParameterType<Type>` 提取一个函数类型的 this 参数的类型，如果该函数类型没有 this 参数，则为未知。

```ts
function toHex(this: Number) {
    return this.toString(16)
}

function numberToString(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n)
}
```

15. `OmitThisParameter<Type>` 移除 Type 的 this 参数。如果 Type 没有明确声明的 this 参数，结果只是 Type。否则，一个没有 this 参数的新函数类型将从 Type 创建。泛型被擦除，只有最后的重载签名被传播到新的函数类型。

```ts
function toHex(this: Number) {
    return this.toString(16)
}
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5)
console.log(fiveToHex())
```

16. `ThisType<Type>` 这个工具并不返回一个转换后的类型。相反，它作为一个上下文的 this 类型的标记。注意，必须启用 noImplicitThis 标志才能使用这个工具。

```ts
type ObjectDescriptor<D, M> = {
    data?: D
    methods?: M & ThisType<D & M> // Type of 'this' in methods is D & M
}

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {}
    let methods: object = desc.methods || {}
    return { ...data, ...methods } as D & M
}

let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx // Strongly typed this
            this.y += dy // Strongly typed this
        }
    }
})

obj.x = 10
obj.y = 20
obj.moveBy(5, 5)
```

在上面的例子中，makeObject 的参数中的方法对象有一个包括`ThisType<D & M>`的上下文类型，因此方法对象中 this 的类型是`{ x: number, y: number } & { moveBy(dx: number, dy: number): number }`。注意方法属性的类型如何同时是推理目标和方法中 this 类型的来源。

`ThisType<T>`标记接口只是在 lib.d.ts 中声明的一个空接口。除了在对象字面的上下文类型中被识别之外，该接口的行为与任何空接口一样。

17. 内在的字符串操作类型

`Uppercase<StringType>`
`Lowercase<StringType>`
`Capitalize<StringType>`
`Uncapitalize<StringType>`

为了帮助在模板字符串字面周围的字符串操作，TypeScript 包括一组类型，可以在类型系统中用于字符串操作。你可以在[Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype)文档中找到这些。

## 装饰器

```ts
function first() {
    console.log('first(): factory evaluated')
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('first(): called')
    }
}

function second() {
    console.log('second(): factory evaluated')
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('second(): called')
    }
}

class ExampleClass {
    @first()
    @second()
    method() {}
}
// first(): factory evaluated
// second(): factory evaluated
// second(): called
// first(): called
```

<base-Star></base-Star>
