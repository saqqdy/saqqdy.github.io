---
layout: post
title: js数组方法forEach、map、filter、sort易错点及其它常用方法总结		
date: 2019-04-18
tags: ["Array","forEach","javascript","Javascript/ES6/ES7","map","前端","数组方法"]
---

<!-- wp:paragraph -->
* forEach() 没有返回值，当数组中元素是值类型，forEach绝对不会改变数组；当是引用类型，则可以改变数组 *
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>var arr1 = [{ name: "saqqdy", age: 200 }, { name: "nhkyxx", age: 300 }]
var arr2 = [1, 2, 3, 4]
arr1.forEach(el => {
  el.age = el.age * 2
}) // 值变了
arr2.forEach(el => {
  el = el * 2
}) // 值没变
console.log(arr1, arr2, "forEach")</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
* map() 有返回值，创建新数组不代表不能用它改变原有数组，你用原有数组去承载就可以，另外记得return *
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>var arr3 = [1, 2, 3, 4, 5]
var arr4 = arr3.map(el => el * 2)
// arr3 = arr3.map(el => el * 2)
console.log(arr3, arr4, "map")</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
* filter() 有返回值，创建新数组不代表不能用它改变原有数组，你用原有数组去承载就可以，记得return *
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>var arr5 = [1, 2, 3, 4, 5, 6]
var arr6 = arr5.filter(el => el > 3)
console.log(arr5, arr6, "filter")</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
* sort() 会改变原数组，返回排序后的数组，默认排序按字母升序（更准确一些是根据字符串Unicode码点） *
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>var arr7 = [32, 55, 12, 2, 1, 5]
var arr8 = ["saqq", "nhkk", "12ddd", "333"]
var arr9 = arr7.sort()
var arr10 = arr8.sort()
console.log(arr7, arr8, arr9, arr10, "sort")

let arr11 = [{ name: "鸣人", age: 16 }, { name: "卡卡西", age: 28 }, { name: "自来也", age: 50 }, { name: "佐助", age: 17 }]
arr11.sort((a, b) => {
  return a.age - b.age
})
console.log(arr11)</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
* new Set()去重有点类似forEach方法，对于应用对象的值没办法去重 *
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>let arr12 = new Set([1, 2, 3, 4, 4, 4, 5])
let arr13 = new Set([1, 2, 3, "saqqdy", { a: 1 }, { b: 2 }])
console.log(arr12)
arr12.add(4)
arr12.add(6)
console.log(arr12)
console.log(arr13)
arr13.add("saqqdy")
arr13.add({ a: 1 })
arr13.add({ a: 1 })
console.log(arr13)</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
* 总结： *
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>/**
 * every(function(el){}, thisVal)和some(function(el){}, thisVal)都是返回布尔值，some只要一个符合就立刻中断并返回true，every需要每个值都符合
 * find(function(el){}, thisVal)返回找到的第一个对象，findIndex(function(el){}, thisVal)返回找到的第一个对象的索引
 * slice(start, end)不会改变原数组，splice(index, howmany, newarr)会改变原数组
 * shift()pop()返回取到的值，push()unshift()返回新的数组长度
 * copyWithin(index, start, end)在现有数组内部进行拷贝
 * Object.entries(Object).forEach(([key, value]) => {})返回数组的可迭代对象
 * fill(xxx, start, end)
 * Array.from("saqqdy", (el, index) => {return el + '_1'}, thisVal)从字符串或者对象或数组创建数组
 * includes(xxx, fromIndex)返回布尔值
 * indexOf("fee", fromIndex) lastIndexOf("fee", fromIndex)返回索引
 * reduce(function(total, el, index, arr) {return total + el}, startVal) reduceRight()
 * Object.keys(obj/arr)
 */</code></pre>
<!-- /wp:code -->		