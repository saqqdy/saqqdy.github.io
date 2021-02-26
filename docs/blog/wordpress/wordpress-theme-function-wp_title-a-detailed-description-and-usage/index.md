---
layout: post
title: WordPress主题函数wp_title()的详细介绍与用法		
date: 2010-12-18
tags: ["WordPress","WordPress技巧","wp_title()","小技巧"]
---

要想学会自己设计wordpress主题，必然还是要先了解wordpress的一些主题函数，下面就给大家介绍一下wp_title()的用法。该函数用来显示页面的标题，如果是在文章页面，则显示文章标题；在分类页面，则显示分类名称；等等。?

wp_title()函数有三个备选参数，即wp_title('separator',echo,seplocation)，其中 separator是title和其余部分之间的分割符号，默认是>>；echo是个bool变量，取true显示标题，取false则将标 题作为一个PHP参量返回；seplocation定义分隔符的位置，取right定义分隔符在标题后面，取其他任何值，都表示将分隔符放在标题前面。?

比如形如主题文件夹下header.php中的一段代码：?

<title>
<?php wp_title(''',true,'right'); ?>
<?php bloginfo('name'); ?>?' <?php bloginfo('description'); ?>
</title>?

在博客首页可以显示这样的效果"上岸QQ的鱼 ' 专注互联网前端技术 您身边的建站专家"；在文章页，可以显示这样的效果"用好WordPress不可不知的50个函数 ' 专注互联网前端技术 您身边的建站专家"；而在分类页面，则可以显示这样的效果"网站相关 ' 专注互联网前端技术 您身边的建站专家"；等等。<span id="_marker">?		