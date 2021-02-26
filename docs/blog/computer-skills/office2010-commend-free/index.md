---
layout: post
title: 巧用重置命令Office2010可以免费使用180天		
date: 2010-06-24
tags: ["Office2010激活","Office免费","Windows系统","小技巧","重置命令"]
---

微软已经确认会在Office 2010中采用和Windows 7一样的KMS和MAK激活机制，而此前泄露的Office 2010 Mondo Technical Preview技术预览版就已经需要激活了，好在现在已经有方法延长激活期限至180天了。

第一步：点击"开始"，在搜索栏输入Services.msc并按确定键（回车）
第二步：找到Office Software Protection并停止
第三步：右键命令提示符- 以管理员身份运行
第四步：输入：%SystemDrive%:\Windows\System32\OSPPRUN.exe

此时会出现另一个命令提示符窗口，依次输入：(每输入一个命令，回车一次)
> Initialize
> Open
> GetInstalledSkuIds

出现
0. 128a057a-7e95-4063-b296-c54c5f3d3f3a
1. 26adec89-edf3-4adc-a3fc-c865f1a9f71f
OK.

再次输入：
> GetInstalledAppIds 128a057a-7e95-4063-b296-c54c5f3d3f3a

出现
0. 59a52881-a989-479d-af46-f275c6370663
OK.

再次输入
> GetLicensingStatus 59a52881-a989-479d-af46-f275c6370663 128a057a-7e95-4063-b296-c54c5f3d3f3a

出现

??? SkuId = 128a057a-7e95-4063-b296-c54c5f3d3f3a
??? eStatus = SL_LICENSING_STATUS_IN_GRACE_PERIOD
??? dwGraceTime = 1D 23:37
??? dwTotalGraceDays = 30 days
??? hrReason = 4004F00C
??? qwExpiration = 2010/10/31

??? OK.

输入
>? Rearm 59a52881-a989-479d-af46-f275c6370663 128a057a-7e95-4063-b296-c54c5f3d3f3a 1

输入：
> Close
> Initialize
> Open

想要获悉当前激活状态，输入：
> GetLicensingStatus 59a52881-a989-479d-af46-f275c6370663 128a057a-7e95-4063-b296-c54c5f3d3f3a

出现；

SkuId = 128a057a-7e95-4063-b296-c54c5f3d3f3a
eStatus = SL_LICENSING_STATUS_IN_GRACE_PERIOD
dwGraceTime = 29D 23:37
dwTotalGraceDays = 30 days
hrReason = 4004F00C
qwExpiration = 2010/10/31

退出，输入
> Quit

此时Office 2010即可再次使用30天，总计可以重置5次，再加上原来的30天，也就是说可以使用30+30X5=180天。如果想要获悉剩余的重置次数，输入：
> GetApplicationInformation 59a52881-a989-479d-af46-f275c6370663 RemainingRearmCount

出现
(DWORD, []) 59a52881-a989-479d-af46-f275c6370663 = 4
OK.

4，即代表剩余的重置次数。

PS：文中的"59a52881-a989-479d-af46-f275c6370663 128a057a-7e95-4063-b296-c54c5f3d3f3a"是Office 2010的程序ID，一般来说都是一样的，但不排除有变化，如果有变化，记得替换为你机器上的ID。		