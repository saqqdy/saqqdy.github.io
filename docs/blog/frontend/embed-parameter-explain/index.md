---
layout: post
title: 【扩展篇】简要介绍embed标签的各个组成参数		
date: 2010-08-19
tags: ["embed标签","HTML5/CSS3","HTML扩展","前端"]
---

<EMBED> 是用以插入各种多媒体，格式可以是 Midi、Wav、AIFF、AU 等等，Netscape 及 新版的 IE 都支援。其参数设定很多。

如下：

<EMBED src="your.mid" autostart="true" loop="true" hidden="true">

src="your.mid"
设定 midi 档案及路径，可以是相对或绝对。
autostart=true
是否在音乐档传完之後，就自动播放音乐。true 是，false 否 (内定值)。
loop="true"
是否自动反覆播放。LOOP=2 表示重复两次，true 是， false 否。
HIDDEN="true"
是否完全隐藏控制画面，true 为是，no 为否 (内定)。
STARTTIME="分:秒"
设定歌曲开始播放的时间。如 STARTTIME="00:30" 表示从第30秒处开始播放。
VOLUME="0-100"
设定量的大小，数值是0到100之间。内定则为使用者系统本身之设定。
WIDTH="整数" 和 HIGH="整数"
设定控制画面的宽度和高度。(若 HIDDEN="no")
ALIGN="center"
设定控制画面和旁边文字的对　方式，其值可以是 top、bottom、center、baseline、 left、right、texttop、middle、absmiddle、absbottom。
CONTROLS="smallconsole"
设定控制画面的外貌。预设值是 console。
console 一般正常的面板 　　
smallconsole 较小的面板 　　
playbutton 只显示播放按钮 　　
pausecutton 只显示暂停按钮 　　
stopbutton 只显示停止按钮 　　
volumelever 只显示音量调整钮		