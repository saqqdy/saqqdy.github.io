---
layout: post
title: 图解WordPress用户角色权限		
date: 2012-03-10
tags: ["WordPress","WordPress技巧","小技巧","用户权限"]
---

是不是对WordPress的角色分类有点不理解呢？之前给公司建了个博客，是基于WordPress平台的，老板要我给所有成员都设置权限，由于上岸QQ的鱼博客关闭了会员注册功能！也就一直没去了解这方面的东西，在网上找了找，还真给找着了，这里分享给大家。

WordPress的用户级别分别是administrator、editor、auth、contributor和subscriber。

<a href="http://www.saqqdy.com/computer-skills/graphic-wordpress-user-role-permissions/attachment/wordpress-role" rel="attachment wp-att-615"><img class="alignnone size-full wp-image-615" title="Wordpress  role" src="Wordpress-role.gif" alt="" width="588" height="990" /></a>

权限和代表的意思分别是：

administrator：管理员帐号 ，和Admin一样, 拥有对整个后台的所有操作权限。
Editor/ 编辑者帐号: 可以对博客内的所有文章, 页面, 留言进行编辑, 可以发表文章。
Author/ 作者帐号: 可以发表文章, 与前者不同的是只能对自己发表的文章的进行编辑。
Contributor/ 贡献者帐号: 可以投递文章, 只能对自己的文章进行编辑。和作者帐号不同的是, 作者是一个博客的一员, 而贡献者可能是一个热心网友注册的帐号, 偶尔投递一两篇文章或评论，这些文章要在管理员审核之后才会被发表出来。

Subscriber/ 订阅用户帐号: 对后台只有浏览功能, 以及设置自己的个人信息。		