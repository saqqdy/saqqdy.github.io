---
layout: post
title: WordPress主题函数wp_get_post_tags()的详细介绍与用法		
date: 2011-03-21
tags: ["WordPress","WordPress技巧","wp_get_post_tags()","小技巧"]
---

wp_get_post_tags()函数用来在某个文章页面或者根据某篇文章的ID来获取该文章的tag，获取的结果被放置到一个tag数组中。这个函数还是比较常用的，特别是需要设计一些个性化比较强的主题时。一个常见的使用方式如下：

if (is_single()){
$keywords = "";
$tags = wp_get_post_tags($post->ID);
foreach ($tags as $tag ) {
$keywords = $keywords . $tag->name . ",";
}
echo $keywords;
}

首先判断是否是单文章页面，如果是，则据当前文章的ID（$post->ID）来获取当前文章的tag，然后取得其name（$tag->name），并将其组合输出。

&nbsp;		