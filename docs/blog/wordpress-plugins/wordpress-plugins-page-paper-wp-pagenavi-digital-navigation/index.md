---
layout: post
title: WordPress文章数字导航分页插件WP PageNavi		
date: 2010-11-25
tags: ["WordPress插件","WordPress插件","WP PageNavi","资源"]
---

WP PageNavi是一款超强悍的文章分页插件，弥补wordpress默认分页样式单一的缺陷。wordpress默认分页是非常单一的，只有类似"上一篇""下一篇"的导航，实在是太单调了，真想不通wordpress这么强大的系统怎么会使用这么低端的分页导航。不过幸好有了PageNavi这个插件，WP PageNavi一改wordpress原有的单调导航，采用了目前最流行的数字分页导航，页面不再单调喽！

<a rel="attachment wp-att-397" href="http://www.saqqdy.com/download/wordpress-plugins-page-paper-wp-pagenavi-digital-navigation/attachment/pagenavi"><img class="alignnone size-full wp-image-397" title="pagenavi" src="pagenavi.gif" alt="" width="520" height="228" /></a>

另外需要说明的是：并不是所有主题都支持WP PageNavi，如果你发现启用这个插件之后没有看到效果，就说明你的主题不支持WP PageNavi插件，解决方法很简单，通常有两种方法:

1.?定位你的wordpress主题,找到footer.php,在你想显示分页的位置加上<?php if(function_exists('wp_pagenavi')) { wp_pagenavi(); } ?>即可。若你熟悉一点CSS话,你可以在pagenavi-css.css内修改分页显示的
样式.再去删除默认的页面显示方式代码,(随主题不同,删除的代码也不同,但基本上相同)。分别在index.php和archive.php内,<div class="navigation">
<div class="alignleft"><?php next_posts_link('&laquo; Older Entries') ?></div>
<div class="alignright"><?php previous_posts_link('Newer Entries &raquo;') ?></div>
</div>

2. 定位你的wordpress主题,找到index.php,搜寻默认显示分页面代码:<div class="navigation">
<div class="alignleft"><?php next_posts_link('&laquo; Older Entries') ?></div>
<div class="alignright"><?php previous_posts_link('Newer Entries &raquo;') ?></div>
</div>
将其换成<?php if(function_exists('wp_pagenavi')) { wp_pagenavi(); } ?>.
再定位到archive.php,进行如同在index.php内所进行的操作。

最后附上插件下载地址：<a href="http://www.saqqdy.com/?r=http://wordpress.org/extend/plugins/wp-pagenavi/">http://wordpress.org/extend/plugins/wp-pagenavi/</a>		