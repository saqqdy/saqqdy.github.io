---
layout: post
title: Windows8怎么开启本地超级管理员账户		
date: 2012-11-07
tags: ["Administrator","Windows8技巧","Windows系统","小技巧","超级管理员"]
---

老鸟就飘过吧。。。习惯性的喜欢开启超级管理员账户，最近遇到phpnow无法安装的情况，没办法，之好开启超级管理员账户来安装，安装完之后在使用Microsoft账户登录，网上大把的说关闭UAC、修改本地安全设置（gpedit.msc）基本上都是扯淡。

开启方法：
在"计算机"上面点击右键，打开"管理"，"系统工具》本地用户和组》用户"，找到Administrator并双击，把"账户已禁用"前面的勾去掉就行了。然后注销，点击开始界面右上角的头像即可注销和切换用户。

<a href="http://www.saqqdy.com/computer-skills/windows8-open-local-super-administrator-account/attachment/windows8-administrator" rel="attachment wp-att-851"><img class="alignnone size-full wp-image-851" title="Windows8-administrator" src="Windows8-administrator.gif" alt="" width="527" height="528" /></a>

想在超级管理员账户里面用Metro应用则必须开启超级管理员账户的UAC控制，这样超级管理员就像普通用户一样了，失去了本质意义。那关闭普通用户的UAC可以达到效果吗？注意，这里说的关闭是彻底关闭，不是在用户帐户控制里面把UAC拉到最低。。。不过这方法依然不行，因为Metro应用又用不了了，也就是说，Metro应用必须是在UAC开启的情况下运行，不管是超级管理员账户还是普通账户。

所以请各位不要再动这方面的心思了。建议想用Metro应用的人使用Microsoft账户登录，不想用的就开启超级管理员账户并关闭UAC吧！自己选择。		