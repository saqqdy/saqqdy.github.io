---
layout: post
title: 解决phpmyadmin链接表的附加功能尚未激活的问题		
date: 2010-10-12
tags: ["phpMyAdmin","pma","WordPress","小技巧"]
---

phpmyadmin一直有"链接表的附加功能尚未激活"的问题，登陆phpmyadmin后，会在底部显示"链接表的附加功能尚未激活。要查出原因，请点击此处。"的提示。关于这个问题一直都没有着手去解决，直到今天，算是无聊的缘故吧！

如果你够细心的话，相信你也可以在你的phpmyadmin里面找到这样的问题，抱着试一试的态度到百度了一下，还真有解决办法，不得不说百度之伟大啊！我的习惯是找到解决办法，然后再实验、总结，最后把我的经验告诉给各位网友！

我的phpmyadmin版本是v 3.3.7，是个比较新的版本，

第一步：使用Mysql管理员帐号通过phpmyadmin登陆，然后点击"导入"，然后点击"浏览"按钮，找到phpmyadmin文件夹下的scripts文件夹里的一个名为create_tables.sql的文件。把它导入就OK了。

第二步：打开phpmyadmin文件夹下的libraries文件夹，找到名为config.default.php的文件，使用文本编辑工具（不推荐使用记事本，建议使用Dreamweaver之类的工具）打开该文件。对其进行修改。

修改的内容并非连续的，请手动进行修改，请勿复制。

** 修改前的内容： **

?$cfg['Servers'][$i]['pmadb'] = '';

$cfg['Servers'][$i]['bookmarktable'] = '';

$cfg['Servers'][$i]['relation'] = '';

$cfg['Servers'][$i]['table_info'] = '';

$cfg['Servers'][$i]['table_coords'] = '';

$cfg['Servers'][$i]['pdf_pages'] = '';

$cfg['Servers'][$i]['column_info'] = '';

$cfg['Servers'][$i]['history'] = '';

$cfg['Servers'][$i]['designer_coords'] = '';

$cfg['Servers'][$i]['tracking'] = '';

** 修改后的内容： **

$cfg['Servers'][$i]['pmadb'] = 'phpmyadmin';

$cfg['Servers'][$i]['bookmarktable'] = 'pma_bookmark';

$cfg['Servers'][$i]['relation'] = 'pma_relation';

$cfg['Servers'][$i]['table_info'] = 'pma_table_info';

$cfg['Servers'][$i]['table_coords'] = 'pma_table_coords';

$cfg['Servers'][$i]['pdf_pages'] = 'pma_pdf_pages';

$cfg['Servers'][$i]['column_info'] = 'pma_column_info';

$cfg['Servers'][$i]['history'] = 'pma_history';

$cfg['Servers'][$i]['designer_coords'] = 'pma_designer_coords';

$cfg['Servers'][$i]['tracking'] = 'pma_tracking';

第三步：注销phpmyadmin之后并重新登录。大功告成！		