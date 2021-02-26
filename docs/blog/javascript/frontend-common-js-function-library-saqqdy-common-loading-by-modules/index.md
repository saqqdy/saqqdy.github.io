---
layout: post
title: 推荐个支持模块按需加载的前端js常用方法库@saqqdy/common		
date: 2019-04-21
tags: ["@saqqdy/common","common","Javascript/ES6/ES7","js常用方法","sa-common","前端"]
---

<!-- wp:paragraph -->
common的前身是sa-common，是我在前端开发这几年经验的一些积累，集成了大量常用方法，采用了纯原生ES6+babel+webpack的开发方式。如果您有好的建议，欢迎在评论区留言或者到git上fork我的仓库参与贡献！
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
项目地址：<a href="https://github.com/saqqdy/common">https://github.com/saqqdy/common</a><br>API文档：<a href="https://github.com/saqqdy/common/blob/master/API.md">https://github.com/saqqdy/common/blob/master/API.md</a>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
###<a href="https://github.com/saqqdy/common#%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B"></a>安装教程
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code># 通过npm安装
npm install --save @saqqdy/common
# 或者通过yarn安装
yarn add @saqqdy/common
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/saqqdy/common#%E9%80%9A%E8%BF%87import%E5%BC%95%E5%85%A5%E6%A8%A1%E5%9D%97%E7%9A%84%E6%96%B9%E5%BC%8F"></a>通过import引入模块的方式
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code># 在你的.vue或者main.js里面写上import
import { trim, getOsVersion, ... } from '@saqqdy/common'
# 使用
trim(somestring, type) // 返回清理空格后的字符串
getOsVersion()  // 返回系统版本
...
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
####<a href="https://github.com/saqqdy/common#%E4%BD%BF%E7%94%A8%E6%96%87%E4%BB%B6%E5%BC%95%E5%85%A5%E7%9A%84%E6%96%B9%E5%BC%8F"></a>使用文件引入的方式
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
1. 通过require引入
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code># 在你的main.js文件里面加上下面这一行
require('@saqqdy/common')
</code></pre>
<!-- /wp:code -->

<!-- wp:list {"ordered":true} -->
1. html静态页直接使用
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code># 在你的html代码上加上script标签，使用CDN链接引入
<script src="common.min.js"></script>
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
###<a href="https://github.com/saqqdy/common#%E6%89%80%E6%9C%89%E6%96%B9%E6%B3%95%E6%B1%87%E6%80%BB"></a>所有方法汇总
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// 全局参数
client, // client方法返回一个浏览器判断结果对象
pattern, // pattern返回一些常用的正则

// String扩展、数组方法
trim, // 根据传参来去除空格
clearAttr, // 去除HTML标签所有属性
clearBr, // 去除换行
clearHtml, // 去除HTML标签
clearHtmlExpSN, // 去除HTML标签保留空格、换行
clearHtmlN, // 去除HTML标签及换行
clearHtmlNS, // 去除HTML标签及空格、换行
clearHtmlTag, // 去除HTML标签及标签里面的文字
getNumber, // 获取字符串中的数字
imgAdapt, // 扩展图片自动适应多种分辨率small original
imgChoose, // 扩展图片自动适应多种分辨率@2x @3x
camel2Dash, // 将驼峰字符串转成-间隔且全小写的Dash模式
dash2Camel, // 将-间隔且全小写的Dash模式转成驼峰字符串
getRandomNum, // 获取随机整数
getRandomStr, // 获取随机字符串
getRandomStrWidthSpecialChar, // 获取随机字符串带特殊符号
getCHSLength, // 获取字符串长度，中文算2个字符
cutCHSString, // 截取字符串，中文算2个字节
textareaInsertText, // textarea或input对象在指定的光标位置插入文字
textareaMoveToEnd, // textarea或input对象将光标定位到文字尾部

// 获取一下状态
isDigitals, // 是否为由数字组成的字符串
isExitsFunction, // 是否存在指定函数
isExitsVariable, // 是否存在指定变量
getWindowSize, // getWindowSize获取窗口大小
getAppVersion, // 获取APP版本号
getOsVersion, // 获取手机系统版本
getIsAppVersionLastest, // 版本号大小对比
getDirParam, // 获取目录形式URL参数
getParameter, // 获取单个URL参数
getFileType, // 文件后缀名
getUrlParam, // 获取URL参数

// 日期格式化
formatTime, // 日期格式化插件
formatTimeStr, // 格式化时间成：刚刚、几分钟前

// 缓存、cookie、session
setCookie, // setCookie写入cookie的方法
setLocal, // 写localStorage
setSession, // 写sessionStorage
getCookie, // 读取cookies
getLocal, // 读取localStorage
getSession, // 读取sessionStorage
delCookie, // 删除cookie
delLocal, // 删除localStorage
delSession, // 删除sessionStorage

// 编码与解码
encodeBase64, // 字符串、数字转base64
encodeUtf8, // 编码Utf8
decodeBase64, // base64解码
decodeUtf8, // 解码Utf8
enWxJumpLink, // 用*替换= 用!替换& 转码成微信跳转链接
enWxJumpLinkOld, // 用~替换= 用^替换& 转码成微信跳转链接
deWxJumpLink, // 用=替换* 用&替换! 解码成微信跳转链接
deWxJumpLinkOld, // 用=替换~ 用&替换^ 解码成微信跳转链接

// 防抖与限流
debounce, // 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 delay，fn 才会执行
throttle, // 频率控制 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次

// 事件委托、其他事件方法
stopBubble, // 阻止冒泡
stopDefault, // 阻止默认事件
addEvent, // 事件委托，支持多次委托
removeEvent, // removeEvent移除由addEvent创建的事件委托
getScrollPosition, // 获取滑动到顶部和底部 返回'top' 'bottom'，建议使用限流</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
###参与贡献
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
1. Fork 本仓库2. 新建 Feat_xxx 分支3. 提交代码4. 新建 Pull Request
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
###<a href="https://github.com/saqqdy/common#%E6%88%91%E7%9A%84%E7%9B%B8%E5%85%B3"></a>我的相关
<!-- /wp:heading -->

<!-- wp:list -->
* 我的码云：<a href="https://gitee.com/saqqdy">https://gitee.com/saqqdy</a>* 我的Github：<a href="https://github.com/saqqdy">https://github.com/saqqdy</a>* 我的npm：<a href="https://npmjs.com/~saqqdy">https://npmjs.com/~saqqdy</a>* 我的个人网站&nbsp;<a href="http://www.saqqdy.com/">http://www.saqqdy.com</a>
<!-- /wp:list -->		