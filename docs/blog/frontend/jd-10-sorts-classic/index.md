---
layout: post
title: js的10大经典排序算法		
date: 2019-03-26
tags: ["javascript","Javascript/ES6/ES7","前端","排序算法"]
---

<!-- wp:heading {"level":3} -->
###排序算法说明
<!-- /wp:heading -->

<!-- wp:paragraph -->
Github：<a href="https://github.com/saqqdy/js-sorts">https://github.com/saqqdy/js-sorts</a>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
** （1）排序的定义：对一序列对象根据某个关键字进行排序； **
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
输入：n个数：a1,a2,a3,...,an 输出：n个数的排列:a1',a2',a3',...,an'，使得a1'<=a2'<=a3'<=...<=an'。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
再讲的形象点就是排排坐，调座位，高的站在后面，矮的站在前面咯。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
** （3）对于评述算法优劣术语的说明 **
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
** 稳定 **：如果a原本在b前面，而a=b，排序之后a仍然在b的前面；&nbsp;** 不稳定 **：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
** 内排序 **：所有排序操作都在内存中完成；&nbsp;** 外排序 **：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
** 时间复杂度 **: 一个算法执行所耗费的时间。&nbsp;** 空间复杂度 **: 运行完一个程序所需内存的大小。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
关于时间空间复杂度的更多了解请戳<a href="http://blog.csdn.net/booirror/article/details/7707551/">这里</a>，或是看书程杰大大编写的《大话数据结构》还是很赞的，通俗易懂。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
** （4）排序算法图片总结(图片来源于网络): **
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
排序对比：
<!-- /wp:paragraph -->

<!-- wp:image {"id":1029} -->
<figure class="wp-block-image"><img src="687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393136313533323132373136.png" alt="" class="wp-image-1029"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
** 图片名词解释： **&nbsp;n: 数据规模 k:"桶"的个数 In-place: 占用常数内存，不占用额外内存 Out-place: 占用额外内存
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
排序分类：
<!-- /wp:paragraph -->

<!-- wp:image {"id":1030} -->
<figure class="wp-block-image"><img src="687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393136313534303336383837.jpeg" alt="" class="wp-image-1030"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
###<a href="https://github.com/damonare/Sorts#1%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8Fbubble-sort"></a>1.冒泡排序（Bubble Sort）
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">好的，开始总结第一个排序算法，冒泡排序。我想对于它每个学过C语言的都会了解的吧，这可能是很多人接触的第一个排序算法。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#1%E7%AE%97%E6%B3%95%E6%8F%8F%E8%BF%B0"></a>(1)算法描述
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢"浮"到数列的顶端。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#2%E7%AE%97%E6%B3%95%E6%8F%8F%E8%BF%B0%E5%92%8C%E5%AE%9E%E7%8E%B0"></a>(2)算法描述和实现
<!-- /wp:heading -->

<!-- wp:paragraph -->
具体算法描述如下：
<!-- /wp:paragraph -->

<!-- wp:list -->
* <1>.比较相邻的元素。如果第一个比第二个大，就交换它们两个；* <2>.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；* <3>.针对所有的元素重复以上的步骤，除了最后一个；* <4>.重复步骤1~3，直到排序完成。
<!-- /wp:list -->

<!-- wp:paragraph -->
** JavaScript代码实现： **
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]</code></pre>
<!-- /wp:code -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">** 改进冒泡排序： **&nbsp;设置一标志性变量pos,用于记录每趟排序中最后一次进行交换的位置。由于pos位置之后的记录均已交换到位,故在进行下一趟排序时只要扫描到pos位置即可。</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
改进后算法如下:
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function bubbleSort2(arr) {
    console.time('改进后冒泡排序耗时');
    var i = arr.length-1;  //初始时,最后位置保持不变
    while ( i> 0) {
        var pos= 0; //每趟开始时,无记录交换
        for (var j= 0; j< i; j++)
            if (arr[j]> arr[j+1]) {
                pos= j; //记录交换的位置
                var tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
            }
        i= pos; //为下一趟排序作准备
     }
     console.timeEnd('改进后冒泡排序耗时');
     return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort2(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]</code></pre>
<!-- /wp:code -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">传统冒泡排序中每一趟排序操作只能找到一个最大值或最小值,我们考虑利用在每趟排序中进行正向和反向两遍冒泡的方法一次可以得到两个最终值(最大者和最小者) , 从而使排序趟数几乎减少了一半。</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
改进后的算法实现为:
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function bubbleSort3(arr3) {
    var low = 0;
    var high= arr.length-1; //设置变量的初始值
    var tmp,j;
    console.time('2.改进后冒泡排序耗时');
    while (low < high) {
        for (j= low; j< high; ++j) //正向冒泡,找到最大者
            if (arr[j]> arr[j+1]) {
                tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
            }
        --high;                 //修改high值, 前移一位
        for (j=high; j>low; --j) //反向冒泡,找到最小者
            if (arr[j]<arr[j-1]) {
                tmp = arr[j]; arr[j]=arr[j-1];arr[j-1]=tmp;
            }
        ++low;                  //修改low值,后移一位
    }
    console.timeEnd('2.改进后冒泡排序耗时');
    return arr3;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort3(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
三种方法耗时对比：
<!-- /wp:paragraph -->

<!-- wp:image {"id":1031} -->
<figure class="wp-block-image"><img src="687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393136313633313236333734.png" alt="" class="wp-image-1031"/></figure>
<!-- /wp:image -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">由图可以看出改进后的冒泡排序明显的时间复杂度更低，耗时更短了。读者自行尝试可以戳这，博主在github建了个库，读者可以Clone下来本地尝试。此博文配合源码体验更棒哦~~~</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
** 冒泡排序动图演示: **
<!-- /wp:paragraph -->

<!-- wp:image {"id":1032} -->
<figure class="wp-block-image"><img src="687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393136313630373438333839.gif" alt="" class="wp-image-1032"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
** (3)算法分析 **
<!-- /wp:paragraph -->

<!-- wp:list -->
* 最佳情况：T(n) = O(n)
<!-- /wp:list -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">当输入的数据已经是正序时（都已经是正序了，为毛何必还排序呢....）</blockquote>
<!-- /wp:quote -->

<!-- wp:list -->
* 最差情况：T(n) = O(n2)
<!-- /wp:list -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">当输入的数据是反序时(卧槽，我直接反序不就完了....)</blockquote>
<!-- /wp:quote -->

<!-- wp:list -->
* 平均情况：T(n) = O(n2)
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
###<a href="https://github.com/damonare/Sorts#2%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8Fselection-sort"></a>2.选择排序（Selection Sort）
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">表现最稳定的排序算法之一(这个稳定不是指算法层面上的稳定哈，相信聪明的你能明白我说的意思2333)，因为无论什么数据进去都是O(n²)的时间复杂度.....所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。理论上讲，选择排序可能也是平时排序一般人想到的最多的排序方法了吧。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#1%E7%AE%97%E6%B3%95%E7%AE%80%E4%BB%8B"></a>(1)算法简介
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">选择排序(Selection-sort)是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#2%E7%AE%97%E6%B3%95%E6%8F%8F%E8%BF%B0%E5%92%8C%E5%AE%9E%E7%8E%B0-1"></a>(2)算法描述和实现
<!-- /wp:heading -->

<!-- wp:paragraph -->
n个记录的直接选择排序可经过n-1趟直接选择排序得到有序结果。具体算法描述如下：
<!-- /wp:paragraph -->

<!-- wp:list -->
* <1>.初始状态：无序区为R[1..n]，有序区为空；* <2>.第i趟排序(i=1,2,3...n-1)开始时，当前有序区和无序区分别为R[1..i-1]和R(i..n）。该趟排序从当前无序区中-选出关键字最小的记录 R[k]，将它与无序区的第1个记录R交换，使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区；* <3>.n-1趟结束，数组有序化了。
<!-- /wp:list -->

<!-- wp:paragraph -->
** Javascript代码实现: **
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    console.time('选择排序耗时');
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.timeEnd('选择排序耗时');
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
** 选择排序动图演示： **
<!-- /wp:paragraph -->

<!-- wp:image {"id":1033} -->
<figure class="wp-block-image"><img src="687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393136313634373534303133.gif" alt="" class="wp-image-1033"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#3%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90"></a>(3)算法分析
<!-- /wp:heading -->

<!-- wp:list -->
* 最佳情况：T(n) = O(n2)* 最差情况：T(n) = O(n2)* 平均情况：T(n) = O(n2)
<!-- /wp:list -->

<!-- wp:heading -->
##<a href="https://github.com/damonare/Sorts#3%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8Finsertion-sort"></a>3.插入排序（Insertion Sort）
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。当然，如果你说你打扑克牌摸牌的时候从来不按牌的大小整理牌，那估计这辈子你对插入排序的算法都不会产生任何兴趣了.....</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#1%E7%AE%97%E6%B3%95%E7%AE%80%E4%BB%8B-1"></a>(1)算法简介
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#2%E7%AE%97%E6%B3%95%E6%8F%8F%E8%BF%B0%E5%92%8C%E5%AE%9E%E7%8E%B0-2"></a>(2)算法描述和实现
<!-- /wp:heading -->

<!-- wp:paragraph -->
一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：
<!-- /wp:paragraph -->

<!-- wp:list -->
* <1>.从第一个元素开始，该元素可以认为已经被排序；* <2>.取出下一个元素，在已经排序的元素序列中从后向前扫描；* <3>.如果该元素（已排序）大于新元素，将该元素移到下一位置；* <4>.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；* <5>.将新元素插入到该位置后；* <6>.重复步骤2~5。
<!-- /wp:list -->

<!-- wp:paragraph -->
** Javascript代码实现: **
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function insertionSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        console.time('插入排序耗时：');
        for (var i = 1; i < array.length; i++) {
            var key = array[i];
            var j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
        console.timeEnd('插入排序耗时：');
        return array;
    } else {
        return 'array is not an Array!';
    }
}</code></pre>
<!-- /wp:code -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">** 改进插入排序： ** 查找插入位置时使用二分查找的方式</blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function binaryInsertionSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        console.time('二分插入排序耗时：');

        for (var i = 1; i < array.length; i++) {
            var key = array[i], left = 0, right = i - 1;
            while (left <= right) {
                var middle = parseInt((left + right) / 2);
                if (key < array[middle]) {
                    right = middle - 1;
                } else {
                    left = middle + 1;
                }
            }
            for (var j = i - 1; j >= left; j--) {
                array[j + 1] = array[j];
            }
            array[left] = key;
        }
        console.timeEnd('二分插入排序耗时：');

        return array;
    } else {
        return 'array is not an Array!';
    }
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(binaryInsertionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]</code></pre>
<!-- /wp:code -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">改进前后对比：</blockquote>
<!-- /wp:quote -->

<!-- wp:image {"id":1034} -->
<figure class="wp-block-image"><img src="687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393136313734363536313030.png" alt="" class="wp-image-1034"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
** 插入排序动图演示: **
<!-- /wp:paragraph -->

<!-- wp:image {"id":1035} -->
<figure class="wp-block-image"><img src="687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393136313733383032353937.gif" alt="" class="wp-image-1035"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#3%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90-1"></a>(3)算法分析
<!-- /wp:heading -->

<!-- wp:list -->
* 最佳情况：输入数组按升序排列。T(n) = O(n)* 最坏情况：输入数组按降序排列。T(n) = O(n2)* 平均情况：T(n) = O(n2)
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
###<a href="https://github.com/damonare/Sorts#4%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8Fshell-sort"></a>4.希尔排序（Shell Sort）
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">1959年Shell发明； 第一个突破O(n^2)的排序算法；是简单插入排序的改进版；它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#1%E7%AE%97%E6%B3%95%E7%AE%80%E4%BB%8B-2"></a>(1)算法简介
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列。动态定义间隔序列的算法是《算法（第4版》的合著者Robert Sedgewick提出的。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#2%E7%AE%97%E6%B3%95%E6%8F%8F%E8%BF%B0%E5%92%8C%E5%AE%9E%E7%8E%B0-3"></a>(2)算法描述和实现
<!-- /wp:heading -->

<!-- wp:paragraph -->
先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述：
<!-- /wp:paragraph -->

<!-- wp:list -->
* <1>. 选择一个增量序列t1，t2，...，tk，其中ti>tj，tk=1；* <2>.按增量序列个数k，对序列进行k 趟排序；* <3>.每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。
<!-- /wp:list -->

<!-- wp:paragraph -->
** Javascript代码实现： **
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    console.time('希尔排序耗时:');
    while(gap < len/5) {          //动态定义间隔序列
        gap =gap*5+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/5)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    console.timeEnd('希尔排序耗时:');
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(shellSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
** 希尔排序图示（图片来源网络）： **
<!-- /wp:paragraph -->

<!-- wp:image {"id":1036} -->
<figure class="wp-block-image"><img src="687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393136323335323033343137.jpeg" alt="" class="wp-image-1036"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#3%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90-2"></a>（3）算法分析
<!-- /wp:heading -->

<!-- wp:list -->
* 最佳情况：T(n) = O(nlog2 n)* 最坏情况：T(n) = O(nlog2 n)* 平均情况：T(n) =O(nlog n)
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
###<a href="https://github.com/damonare/Sorts#5%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8Fmerge-sort"></a>5.归并排序（Merge Sort）
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是O(n log n）的时间复杂度。代价是需要额外的内存空间。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#1%E7%AE%97%E6%B3%95%E7%AE%80%E4%BB%8B-3"></a>(1)算法简介
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。归并排序是一种稳定的排序方法。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#2%E7%AE%97%E6%B3%95%E6%8F%8F%E8%BF%B0%E5%92%8C%E5%AE%9E%E7%8E%B0-4"></a>(2)算法描述和实现
<!-- /wp:heading -->

<!-- wp:paragraph -->
具体算法描述如下：
<!-- /wp:paragraph -->

<!-- wp:list -->
* <1>.把长度为n的输入序列分成两个长度为n/2的子序列；* <2>.对这两个子序列分别采用归并排序；* <3>.将两个排序好的子序列合并成一个最终的排序序列。
<!-- /wp:list -->

<!-- wp:paragraph -->
** Javscript代码实现: **
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];
    console.time('归并排序耗时');
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());
    console.timeEnd('归并排序耗时');
    return result;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(mergeSort(arr));
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
** 归并排序动图演示: **
<!-- /wp:paragraph -->

<!-- wp:image {"id":1037} -->
<figure class="wp-block-image"><img src="687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393137303031333236323534.gif" alt="" class="wp-image-1037"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#3%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90-3"></a>(3)算法分析
<!-- /wp:heading -->

<!-- wp:list -->
* 最佳情况：T(n) = O(n)* 最差情况：T(n) = O(nlogn)* 平均情况：T(n) = O(nlogn)
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
###<a href="https://github.com/damonare/Sorts#6%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8Fquick-sort"></a>6.快速排序（Quick Sort）
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">快速排序的名字起的是简单粗暴，因为一听到这个名字你就知道它存在的意义，就是快，而且效率高! 它是处理大数据最快的排序算法之一了。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#1%E7%AE%97%E6%B3%95%E7%AE%80%E4%BB%8B-4"></a>(1)算法简介
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#2%E7%AE%97%E6%B3%95%E6%8F%8F%E8%BF%B0%E5%92%8C%E5%AE%9E%E7%8E%B0-5"></a>(2)算法描述和实现
<!-- /wp:heading -->

<!-- wp:paragraph -->
快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：
<!-- /wp:paragraph -->

<!-- wp:list -->
* <1>.从数列中挑出一个元素，称为 "基准"（pivot）；* <2>.重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；* <3>.递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
<!-- /wp:list -->

<!-- wp:paragraph -->
** Javascript代码实现： **
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>/*方法说明：快速排序
@param  array 待排序数组*/
//方法一
function quickSort(array, left, right) {
    console.time('1.快速排序耗时');
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array' && typeof left === 'number' && typeof right === 'number') {
        if (left < right) {
            var x = array[right], i = left - 1, temp;
            for (var j = left; j <= right; j++) {
                if (array[j] <= x) {
                    i++;
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
            quickSort(array, left, i - 1);
            quickSort(array, i + 1, right);
        }
        console.timeEnd('1.快速排序耗时');
        return array;
    } else {
        return 'array is not an Array or left or right is not a number!';
    }
}

//方法二
var quickSort2 = function(arr) {
    console.time('2.快速排序耗时');
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
console.timeEnd('2.快速排序耗时');
　　return quickSort2(left).concat([pivot], quickSort2(right));
};

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quickSort(arr,0,arr.length-1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(quickSort2(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
** 快速排序动图演示： **
<!-- /wp:paragraph -->

<!-- wp:image {"id":1038} -->
<figure class="wp-block-image"><img src="687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393137303033303034393036.gif" alt="" class="wp-image-1038"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#3%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90-4"></a>(3)算法分析
<!-- /wp:heading -->

<!-- wp:list -->
* 最佳情况：T(n) = O(nlogn)* 最差情况：T(n) = O(n2)* 平均情况：T(n) = O(nlogn)
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
###<a href="https://github.com/damonare/Sorts#7%E5%A0%86%E6%8E%92%E5%BA%8Fheap-sort"></a>7.堆排序（Heap Sort）
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">堆排序可以说是一种利用堆的概念来排序的选择排序。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#1%E7%AE%97%E6%B3%95%E7%AE%80%E4%BB%8B-5"></a>(1)算法简介
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#2%E7%AE%97%E6%B3%95%E6%8F%8F%E8%BF%B0%E5%92%8C%E5%AE%9E%E7%8E%B0-6"></a>(2)算法描述和实现
<!-- /wp:heading -->

<!-- wp:paragraph -->
具体算法描述如下：
<!-- /wp:paragraph -->

<!-- wp:list -->
* <1>.将初始待排序关键字序列(R1,R2....Rn)构建成大顶堆，此堆为初始的无序区；* <2>.将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,......Rn-1)和新的有序区(Rn),且满足R[1,2...n-1]<=R[n]；* <3>.由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,......Rn-1)调整为新堆，然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2....Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。
<!-- /wp:list -->

<!-- wp:paragraph -->
** Javascript代码实现： **
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>/*方法说明：堆排序
@param  array 待排序数组*/
function heapSort(array) {
    console.time('堆排序耗时');
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        //建堆
        var heapSize = array.length, temp;
        for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
            heapify(array, i, heapSize);
        }

        //堆排序
        for (var j = heapSize - 1; j >= 1; j--) {
            temp = array[0];
            array[0] = array[j];
            array[j] = temp;
            heapify(array, 0, --heapSize);
        }
        console.timeEnd('堆排序耗时');
        return array;
    } else {
        return 'array is not an Array!';
    }
}
/*方法说明：维护堆的性质
@param  arr 数组
@param  x   数组下标
@param  len 堆大小*/
function heapify(arr, x, len) {
    if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
        var l = 2 * x + 1, r = 2 * x + 2, largest = x, temp;
        if (l < len && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r < len && arr[r] > arr[largest]) {
            largest = r;
        }
        if (largest != x) {
            temp = arr[x];
            arr[x] = arr[largest];
            arr[largest] = temp;
            heapify(arr, largest, len);
        }
    } else {
        return 'arr is not an Array or x is not a number!';
    }
}
var arr=[91,60,96,13,35,65,46,65,10,30,20,31,77,81,22];
console.log(heapSort(arr));//[10, 13, 20, 22, 30, 31, 35, 46, 60, 65, 65, 77, 81, 91, 96]
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
** 堆排序动图演示： **
<!-- /wp:paragraph -->

<!-- wp:image {"id":1039} -->
<figure class="wp-block-image"><img src="687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393137313035353032383533.gif" alt="" class="wp-image-1039"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#3%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90-5"></a>(3)算法分析
<!-- /wp:heading -->

<!-- wp:list -->
* 最佳情况：T(n) = O(nlogn)* 最差情况：T(n) = O(nlogn)* 平均情况：T(n) = O(nlogn)
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
###<a href="https://github.com/damonare/Sorts#8%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8Fcounting-sort"></a>8.计数排序（Counting Sort）
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#1%E7%AE%97%E6%B3%95%E7%AE%80%E4%BB%8B-6"></a>(1)算法简介
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">计数排序(Counting sort)是一种稳定的排序算法。计数排序使用一个额外的数组C，其中第i个元素是待排序数组A中值等于i的元素的个数。然后根据数组C来将A中的元素排到正确的位置。它只能对整数进行排序。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#2%E7%AE%97%E6%B3%95%E6%8F%8F%E8%BF%B0%E5%92%8C%E5%AE%9E%E7%8E%B0-7"></a>(2)算法描述和实现
<!-- /wp:heading -->

<!-- wp:paragraph -->
具体算法描述如下：
<!-- /wp:paragraph -->

<!-- wp:list -->
* <1>. 找出待排序的数组中最大和最小的元素；* <2>. 统计数组中每个值为i的元素出现的次数，存入数组C的第i项；* <3>. 对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；* <4>. 反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1。
<!-- /wp:list -->

<!-- wp:paragraph -->
** Javascript代码实现： **
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>function countingSort(array) {
    var len = array.length,
        B = [],
        C = [],
        min = max = array[0];
    console.time('计数排序耗时');
    for (var i = 0; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
        C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    }
    for (var j = min; j < max; j++) {
        C[j + 1] = (C[j + 1] '' 0) + (C[j] '' 0);
    }
    for (var k = len - 1; k >= 0; k--) {
        B[C[array[k]] - 1] = array[k];
        C[array[k]]--;
    }
    console.timeEnd('计数排序耗时');
    return B;
}
var arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
console.log(countingSort(arr)); //[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
** JavaScript动图演示： **
<!-- /wp:paragraph -->

<!-- wp:image {"id":1040} -->
<figure class="wp-block-image"><img src="687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393137313130363431343739.gif" alt="" class="wp-image-1040"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#3%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90-6"></a>(3)算法分析
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">当输入的元素是n 个0到k之间的整数时，它的运行时间是 O(n + k)。计数排序不是比较排序，排序的速度快于任何比较排序算法。由于用来计数的数组C的长度取决于待排序数组中数据的范围（等于待排序数组的最大值与最小值的差加上1），这使得计数排序对于数据范围很大的数组，需要大量时间和内存。</blockquote>
<!-- /wp:quote -->

<!-- wp:list -->
* 最佳情况：T(n) = O(n+k)* 最差情况：T(n) = O(n+k)* 平均情况：T(n) = O(n+k)
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
###<a href="https://github.com/damonare/Sorts#9%E6%A1%B6%E6%8E%92%E5%BA%8Fbucket-sort"></a>9.桶排序（Bucket Sort）
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#1%E7%AE%97%E6%B3%95%E7%AE%80%E4%BB%8B-7"></a>(1)算法简介
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#2%E7%AE%97%E6%B3%95%E6%8F%8F%E8%BF%B0%E5%92%8C%E5%AE%9E%E7%8E%B0-8"></a>(2)算法描述和实现
<!-- /wp:heading -->

<!-- wp:paragraph -->
具体算法描述如下：
<!-- /wp:paragraph -->

<!-- wp:list -->
* <1>.设置一个定量的数组当作空桶；* <2>.遍历输入数据，并且把数据一个一个放到对应的桶里去；* <3>.对每个不是空的桶进行排序；* <4>.从不是空的桶里把排好序的数据拼接起来。
<!-- /wp:list -->

<!-- wp:paragraph -->
** Javascript代码实现: **
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>/*方法说明：桶排序
@param  array 数组
@param  num   桶的数量*/
function bucketSort(array, num) {
    if (array.length <= 1) {
        return array;
    }
    var len = array.length, buckets = [], result = [], min = max = array[0], regex = '/^[1-9]+[0-9]*$/', space, n = 0;
    num = num '' ((num > 1 && regex.test(num)) ? num : 10);
    console.time('桶排序耗时');
    for (var i = 1; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
    }
    space = (max - min + 1) / num;
    for (var j = 0; j < len; j++) {
        var index = Math.floor((array[j] - min) / space);
        if (buckets[index]) {   //  非空桶，插入排序
            var k = buckets[index].length - 1;
            while (k >= 0 && buckets[index][k] > array[j]) {
                buckets[index][k + 1] = buckets[index][k];
                k--;
            }
            buckets[index][k + 1] = array[j];
        } else {    //空桶，初始化
            buckets[index] = [];
            buckets[index].push(array[j]);
        }
    }
    while (n < num) {
        result = result.concat(buckets[n]);
        n++;
    }
    console.timeEnd('桶排序耗时');
    return result;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bucketSort(arr,4));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
** 桶排序图示（图片来源网络）： **
<!-- /wp:paragraph -->

<!-- wp:image {"id":1041} -->
<figure class="wp-block-image"><img src="687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393137313131393435393739.jpeg" alt="" class="wp-image-1041"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
关于桶排序<a href="http://www.cnblogs.com/lonelyxmas/p/3561938.html">更多</a>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#3%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90-7"></a>(3)算法分析
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">桶排序最好情况下使用线性时间O(n)，桶排序的时间复杂度，取决与对各个桶之间数据进行排序的时间复杂度，因为其它部分的时间复杂度都为O(n)。很显然，桶划分的越小，各个桶之间的数据越少，排序所用的时间也会越少。但相应的空间消耗就会增大。</blockquote>
<!-- /wp:quote -->

<!-- wp:list -->
* 最佳情况：T(n) = O(n+k)* 最差情况：T(n) = O(n+k)* 平均情况：T(n) = O(n2)
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
###<a href="https://github.com/damonare/Sorts#10%E5%9F%BA%E6%95%B0%E6%8E%92%E5%BA%8Fradix-sort"></a>10.基数排序（Radix Sort）
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">基数排序也是非比较的排序算法，对每一位进行排序，从最低位开始排序，复杂度为O(kn),为数组长度，k为数组中的数的最大的位数；</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#1%E7%AE%97%E6%B3%95%E7%AE%80%E4%BB%8B-8"></a>(1)算法简介
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。基数排序基于分别排序，分别收集，所以是稳定的。</blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#2%E7%AE%97%E6%B3%95%E6%8F%8F%E8%BF%B0%E5%92%8C%E5%AE%9E%E7%8E%B0-9"></a>(2)算法描述和实现
<!-- /wp:heading -->

<!-- wp:paragraph -->
具体算法描述如下：
<!-- /wp:paragraph -->

<!-- wp:list -->
* <1>.取得数组中的最大数，并取得位数；* <2>.arr为原始数组，从最低位开始取每个位组成radix数组；* <3>.对radix进行计数排序（利用计数排序适用于小范围数的特点）；
<!-- /wp:list -->

<!-- wp:paragraph -->
** Javascript代码实现： **
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>/**
 * 基数排序适用于：
 *  (1)数据范围较小，建议在小于1000
 *  (2)每个数值都要大于等于0
 * @author xiazdong
 * @param  arr 待排序数组
 * @param  maxDigit 最大位数
 */
//LSD Radix Sort

function radixSort(arr, maxDigit) {
    var mod = 10;
    var dev = 1;
    var counter = [];
    console.time('基数排序耗时');
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(var j = 0; j < arr.length; j++) {
            var bucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket]== null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        var pos = 0;
        for(var j = 0; j < counter.length; j++) {
            var value = null;
            if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                      arr[pos++] = value;
                }
          }
        }
    }
    console.timeEnd('基数排序耗时');
    return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(radixSort(arr,2)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
** 基数排序LSD动图演示： **
<!-- /wp:paragraph -->

<!-- wp:image {"id":1042} -->
<figure class="wp-block-image"><img src="687474703a2f2f696d672e626c6f672e6373646e2e6e65742f3230313630393137313233333133363539.gif" alt="" class="wp-image-1042"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/damonare/Sorts#3%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90-8"></a>(3)算法分析
<!-- /wp:heading -->

<!-- wp:list -->
* 最佳情况：T(n) = O(n * k)* 最差情况：T(n) = O(n * k)* 平均情况：T(n) = O(n * k)
<!-- /wp:list -->

<!-- wp:paragraph -->
基数排序有两种方法：
<!-- /wp:paragraph -->

<!-- wp:list -->
* MSD 从高位开始进行排序* LSD 从低位开始进行排序
<!-- /wp:list -->

<!-- wp:paragraph -->
** 基数排序 vs 计数排序 vs 桶排序 **
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
1. 基数排序：根据键值的每位数字来分配桶2. 计数排序：每个桶只存储单一键值3. 桶排序：每个桶存储一定范围的数值
<!-- /wp:list -->

<!-- wp:heading -->
##<a href="https://github.com/damonare/Sorts#%E5%90%8E%E8%AE%B0"></a>后记
<!-- /wp:heading -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">十大排序算法的总结到这里就算告一段落了。博主总结完之后只有一个感觉，排序算法博大精深，前辈们用了数年甚至一辈子的心血研究出来的算法更值得我们推敲。站在十大算法的门前心里还是诚惶诚恐的，身为一个小学生，博主的总结难免会有所疏漏，欢迎各位批评指正。</blockquote>
<!-- /wp:quote -->		