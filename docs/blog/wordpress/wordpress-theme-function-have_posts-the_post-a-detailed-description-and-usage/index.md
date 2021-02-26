---
layout: post
title: WordPress主题函数have_posts()、the_post()的详细介绍与用法		
date: 2011-04-06
tags: ["have_posts()","the_post()","WordPress","WordPress技巧","小技巧"]
---

have_posts()、the_post()这两个函数的使用范围有限，通常在WordPress的循环中使用，用以获取所有文章。其固定使用形式如下：

<?php if (have_posts()) : ?>
<?php while (have_posts()) : the_post(); ?>
此处显示文章
<?php endwhile; ?>
<?php else : ?>
此处显示未找到文章时的信息，比如404相关
<?php endif; ?>

另一种常见的形式是将如上代码中的前两行组合起来（其他地方不变）：

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

该形式通常会在模板的index.php、archive.php或者single.php等页面使用。除此之外的其他地方，我们通常不会看到此二函数的身影。

&nbsp;		