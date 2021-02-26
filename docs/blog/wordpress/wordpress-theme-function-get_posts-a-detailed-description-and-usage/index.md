---
layout: post
title: WordPress主题函数get_posts()的详细介绍与用法		
date: 2011-01-28
tags: ["get_posts()","WordPress","WordPress技巧","小技巧"]
---

get_posts()函数和query_posts()函数功能大体相同，都是用来从数据库中查询并得到符合某条件的文章。不过get_posts()函数的使用有一个固定的形式，如下：

<?php
$lastposts = get_posts('numberposts=5′);
foreach($lastposts as $post) : setup_postdata($post);
?>
<h2><a href="<?php the_permalink(); ?>" id="post-<?php the_ID(); ?>"><?php the_title(); ?></h2>
<?php the_content(); ?>
<?php endforeach; ?>

即首先使用get_posts()函数查询得到文章数据，然后使用形如foreach($lastposts as $post) : setup_postdata($post);的循环将查询得到的文章内容显示出来。

get_posts()函数使用和query_posts()函数相同的参数，在此我们也不再作详细介绍。		