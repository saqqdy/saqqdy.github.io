---
layout: post
title: git常用命令大全		
date: 2019-03-18
tags: ["git","前端"]
---

<!-- wp:paragraph -->
git-common-commands
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
1.创建本地文件夹<br>2.git init  创建版本库<br>3.git add .  添加全部文件<br>4.git commit -m '我做了一些改动'<br>5.git status  查看文件状态<br>6.git diff tools.js   查看文件修改了什么<br>7.git log  查看提交日志git log --pretty=oneline  查看远程提交记录<br>8.git reset --hard HEAD^  返回上一个版本，HEAD^^是上上个版本<br>9.git reset --hard 1094a  回到未来版本，版本号没必要写全，前几位就可以了，Git会自动去找<br>10.cat tools.js  查看tools.js的内容<br>11.git reflog  git reflog用来记录你的每一次命令<br>12.git checkout -- readme.txt意思就是，把readme.txt文件在工作区的修改全部撤销，git checkout其实是用版本库里的版本替换工作区的版本<br>13.git reset HEAD readme.txt可以把暂存区的修改撤销掉（unstage），重新放回工作区。<br>场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。<br>场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD <file>，就回到了场景1，第二步按场景1操作。<br>场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。<br>14.git rm tools.js  删掉文件
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
git remote rm origin 删除远程地址<br>git remote add origin [url]  添加远程地址<br>git branch --set-upstream-to=origin/v1.0.0  关联分支<br>git remote set-url --add origin *** 添加远程地址<br>git push origin master 提交到全部远程地址<br>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
git本地及远程分支回退<br>1. git本地版本回退Git reset --hard commit_id(可用 git log -oneline 查看)<br>2. git远程版本回退git push origin HEAD --force #远程提交回退<br>远程分支重命名 (已经推送远程-假设本地分支和远程对应分支名称相同)<br>a. 重命名远程分支对应的本地分支<br>git branch -m oldName newName<br>b. 删除远程分支<br>git push --delete origin oldName<br>c. 上传新命名的本地分支<br>git push origin newNamed.<br>把修改后的本地分支与远程分支关联<br>git branch --set-upstream-to origin/newName
<!-- /wp:paragraph -->		