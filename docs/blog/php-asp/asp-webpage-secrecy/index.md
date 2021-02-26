---
layout: post
title: 【扩展篇】用ASP实现网页保密的两种方法		
date: 2009-10-29
tags: ["ASP编程","PHP/ASP","前端","网页保密"]
---

用ASP实现网页保密的两种方法

　 在维护公司内部网站时碰到一个实际问题--MIS主管要求将一些技术文件放在网页上，且只能让
MIS 的员工浏览。这就涉及到如何对网页保密的问题。
　 最初我借助Frontpage和Vbscript设计了一种方案，链接MIS技术页（此处预设为actpwdrst.htm
）之前，先 链接actpwd.htm输入名称和密码(此处名称和密码都预设为"mis"）,只有正确输入后，
才能链接到actpwdrst.htm。 以下是它们的代码。
　　 Actpwd.htm 代 码 如 下：
< html >
< head >
< title > 密 码< /title >
< /head >
< body >
< form name="form1" >
< input type="hidden"
name="VTI-GROUP"_ value="0" >
< div align="center" >< center >< p >
名 称< input type ="text"
name="T1" size=_"20" >
密 码< input type ="password"
name="T2"_ size="20" >
< input type="button" value="
确 认"_ name="B1" >
< /p >< /center >< /div >
< /form >
< p >
< script language="vbscript" >
< !-
sub b1_onclick()
if form1.t1.value="mis" and_ form1.t2.value="mis" then
document.location=_"actpwdrst.htm"
else
m1=msgbox(" 密 码 错 误_
",0+48, "Warring")
end if
end sub
// -- >
< /script >
< /p >
< /body >
< /html >

Actpwdrst.htm 代 码 如 下：
< html >
< head >
< title > 密 码< /title >
< /head >
< body >
< p align="center" >
< font face=" 标 楷 体" size="7" color="0000ff" >
< strong >
你 已 成 功 登 录 ！
< /strong >
< /font >
< /p >
< /body
< /html ><!--nextpage-->
　　细心的朋友可能已发现这种方案的不可靠性--输入和判断都在actpwd.htm中完成，不管输入的
名称和密码是不是正确的，只要记住了actpwdrst.htm 所在的URL,根本就不需要通过actpwd.htm 就
可直接链接actpwdrst.htm。所以这种方案的保密系数就不是很好。
　 下面看看采用ASP设计的方案。链接MIS技术页（此处预设为asppwdrst.asp）之前，先链接
asppwd.asp输入 名称和密码(此处名称和密码都预设为"mis"）,只有正确输入后，才能链接到
asppwdrst.asp。以下是它们的 代码。

Asppwd.asp 代 码 如 下：
< html >
< body >
< form name="form1" action=
"asppwdrst.asp" method_
="POST" >
< input type="hidden" name=
"VTI-GROUP" value=_"0" >
< div align="center" >< center >< p >
名 称< input type="text"
name="T1" size="20" >
密 码< input type =
"password" name="T2" size=_"20" >
< input type="submit" value=
" 确 认" name=_"B1" >
< /p >< /center >< /div >
< /form >
< /body >
< /html >

Asppwdrst.asp 代 码 如 下：
< html >
< % if rtrim(request.form("t1"))=
"mis" and_ rtrim(request.form("t2"))=
"mis" then % >
< body >
< p align="center" >< font face=
" 标 楷 体" size="7"_ color="#0000ff" >
< strong > 你 已 成 功 登 录 ！
< /strong >< /font >< /p >
< /body >
< % else % >
< body >
< p align="center" >< font face=
" 标 楷 体" size="7"_ color="#0000ff" >
< strong > 请 输 入 正 确 的 用 户 名 和 密 码
< /strong >< /font >< /p >
< /body >
< % end if % >
< /html >

　　在这个方案里asppwd.asp只提供输入的功能，而名称和密码的确认工作由asppwdrst.asp来做。
这样即使 您记住了asppwdrst.asp所在的URL，也看不到具体的内容。所以用这种方案设计的网页保
密系数就很高。
　		