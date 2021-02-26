---
layout: post
title: 【扩展篇】ASP网页制作中 常用的时间显示方式（更新与完善中...）		
date: 2009-10-04
tags: ["ASP/PHP/Ajax","ASP网页制作","PHP/ASP","前端","时间显示"]
---

实现效果：如果信息是在1分钟之内提交的，则显示"xxx秒以前",如果信息是在1小时之内提交的，则显示"xxx分钟以前"，如果信息是在24小时以内提交的，则显示"xxx小时以前"，如果信息是在30天以内提交的，则显示"xxx天以前"，超过30天之后则直接显示日期和时间，如：07-27 01:22 。?

<%
saqqdy=(news.Fields.Item("time").Value) //使用时把此行代码中的"(news.Fields.Item("time").Value)"替换为你的记录集里的时间字段即可!
if year(now)=year(saqqdy) then if month(now)=month(saqqdy) then
if day(now)=day(saqqdy) then if hour(now)=hour(saqqdy) then
if minute(now)=minute(saqqdy) then
response.Write(""&second(now)-second(saqqdy)&"秒以前"&"")
else response.Write(""&minute(now)-minute(saqqdy)&"分钟以前"&"")
end if
else response.Write(""&hour(now)-hour(saqqdy)&"小时以前"&"")
end if
elseif day(now)-day(saqqdy)<0 then
if month(saqqdy)=1 or 3 or 5 or 7 or 8 or 10 or 12 then
response.Write(31-day(saqqdy)+day(now)&"天以前")
elseif month(saqqdy)=2 then
response.Write(28-day(saqqdy)+day(now)&"天以前")
else response.Write(30-day(saqqdy)+day(now)&"天以前")
end if
else response.Write(day(now)-day(saqqdy)&"天以前")
end if
else response.Write(month(saqqdy)&"-"&day(saqqdy)&"?"&hour(saqqdy)&minute(saqqdy))
end if
else response.Write(month(saqqdy)&"-"&day(saqqdy)&"?"&hour(saqqdy)&minute(saqqdy))
end if
%>

此ASP程序还将继续完善与升级！欢迎拷贝与使用，谢谢大家的支持！另外本代码由本人自行设计，使用时请注明出处：上岸QQ的鱼不会使用的朋友可以加我QQ：365060713		