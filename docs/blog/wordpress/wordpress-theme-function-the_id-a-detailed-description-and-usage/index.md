---
layout: post
title: WordPress主题函数the_ID()的详细介绍与用法		
date: 2011-04-12
tags: ["the_ID()","WordPress","WordPress技巧","小技巧"]
---

the_ID()函数后面不跟任何参数，使用如下所示的调用方式：

<?php
$id = the_ID();
echo $id;
?>

用于获取并显示当前文章页面的ID号。不过需要特别注意的一点是，该函数只能在WordPress的大循环内使用，在其他地方使用可能也会显示ID号，但显示的内容始终不会随文章而改变。

此外，该函数通常还会在如下所示的CSS结构中使用：

<h2 id="post-<?php the_ID(); ?>">
<?php the_title(); ?>
</h2>

可为博客中不同的作者设置不同的title样式，以示区分。		