---
layout: post
title: 简单代码禁用WordPress中不需要的功能		
date: 2012-06-25
tags: ["WordPress","WordPress技巧","小技巧","简单代码"]
---

这些代码非常实用，只需要按自己的需要选择下面这些代码，插入到 functions.php 文件中即可，最好是放在文件顶部。可轻松实现禁用多个不必要的功能。
> `<?php
//禁用l10n.js
    wp_deregister_script('l10n');
//彻底移除管理员工具条
    add_filter('show_admin_bar','__return_false');
//禁用自动保存草稿
    wp_deregister_script('autosave');
//禁用修改历史记录
    remove_action('pre_post_update','wp_save_post_revision');
//禁止在head泄露wordpress版本号
    remove_action('wp_head','wp_generator');
//移除head中的rel="EditURI"
    remove_action('wp_head','rsd_link');
//移除head中的rel="wlwmanifest"
    remove_action('wp_head','wlwmanifest_link');
//禁止半角符号自动变全角
foreach(array('comment_text','the_content','the_excerpt','the_title') as $xx)
    remove_filter($xx,'wptexturize');
//禁止自动给文章段落添加<p>标签
    remove_filter('the_content','wpautop');
    remove_filter('the_excerpt','wpautop');
//禁止自动把'Wordpress'之类的变成'WordPress'
    remove_filter('comment_text','capital_P_dangit',31);
    remove_filter('the_content','capital_P_dangit',11);
    remove_filter('the_title','capital_P_dangit',11);
//评论跳转链接添加nofollow
function nofollow_compopup_link(){
return' rel="nofollow"';
}
    add_filter('comments_popup_link_attributes','nofollow_compopup_link');
/*回复某人链接添加nofollow
    注意：这个理应是原生的, 可是在wp某次改版后被改动了,
    现在是仅当开启注册回复时才有nofollow,否则需要自己手动了*/
function nofollow_comreply_link($link){
return str_replace('<a','<a rel="nofollow"',$link);
}
    get_option('comment_registration')¦¦
    add_filter('comment_reply_link','nofollow_comreply_link');
?>`
OK，是不是很实用？		