---
layout: post
title: 【扩展篇】正则表达式过滤HTML危险脚本		
date: 2009-10-11
tags: ["HTML","HTML5/CSS3","前端","正则表达式","过滤危险脚本"]
---

在做一些网站时，经常会有允许用户输入html样式代码，却禁止脚本的运行的需求, 以达到丰富网页样式，禁止恶意代码的运行。
当然不能用 htmlencode 和 htmldecode 方法,因为这样连基本的html代码会被禁止掉。
我在网上搜索，也没有找到好的解决办法，倒是收集了一些脚本攻击的实例：
1. <script>标记中包含的代码
2. <a href=javascript:...中的代码
3. 其它基本控件的 on...事件中的代码
4. iframe 和 frameset 中载入其它页面造成的攻击
有了这些资料后，事情就简单多了，写一个简单的方法，用正则表达式把以上符合几点的代码替换掉:
public string wipescript(string html)
{
system.text.regulare-xpressions.regex regex1 = new system.text.regulare-xpressions.regex(@"<script[\s\s]+</script *>",system.text.regulare-xpressions.regexoptions.ignorecase);
system.text.regulare-xpressions.regex regex2 = new system.text.regulare-xpressions.regex(@" href *= *[\s\s]*script *:",system.text.regulare-xpressions.regexoptions.ignorecase);
system.text.regulare-xpressions.regex regex3 = new system.text.regulare-xpressions.regex(@" on[\s\s]*=",system.text.regulare-xpressions.regexoptions.ignorecase);
system.text.regulare-xpressions.regex regex4 = new system.text.regulare-xpressions.regex(@"<iframe[\s\s]+</iframe *>",system.text.regulare-xpressions.regexoptions.ignorecase);
system.text.regulare-xpressions.regex regex5 = new system.text.regulare-xpressions.regex(@"<frameset[\s\s]+</frameset *>",system.text.regulare-xpressions.regexoptions.ignorecase);
html = regex1.replace(html, ""); //过滤<script></script>标记
html = regex2.replace(html, ""); //过滤href=javascript: (<a>) 属性
html = regex3.replace(html, " _disibledevent="); //过滤其它控件的on...事件
html = regex4.replace(html, ""); //过滤iframe
html = regex5.replace(html, ""); //过滤frameset
return html;
}
此方法输入可能包含脚本的html代码，返回则就是干净的代码了。		