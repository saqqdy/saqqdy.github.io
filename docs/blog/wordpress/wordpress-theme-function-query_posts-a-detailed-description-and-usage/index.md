---
layout: post
title: WordPress主题函数query_posts()的详细介绍与用法		
date: 2011-01-25
tags: ["query_posts()","WordPress","WordPress技巧","小技巧"]
---

query_posts()函数结合适当的参数用来控制哪些文章会在页面上显示。

形如query_posts("cat=3,6&cat=-5,-10″)表示取分类ID为3和6的文章显示，不取分类ID为5和10的文章显示；
形如query_posts("order=ASC&showposts=10&offset=1&orderby=date&posts_per_page=5″)意义如下：

order=ASC表示按照升序排列，取为DESC则表示按降序；
showposts=10则表示获取10篇文章；
offset=1表示取最新的文章；
orderby=date表示将文章按照日期排序；
posts_per_page=5表示每页显示5篇文章。

需要注意的是该函数只是将文章内容从MySQL数据库中查询出来，要将其显示，还需要与其他语句配合，比如一个经常在侧边栏中使用的形式如下：

<li><h2>最近文章</h2>
<?php query_posts('showposts=5&offset=1′); ?>
<ul>
<?php while (have_posts()) : the_post(); ?>
<li><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></li>
<?php endwhile;?>
</ul>
</li>

如上的这段代码用以在侧边栏的指定位置上显示最新的5篇文章。

query_posts()函数后面可以跟众多种类的参数，功能十分强大。		