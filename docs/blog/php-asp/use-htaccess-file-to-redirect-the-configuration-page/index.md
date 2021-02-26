---
layout: post
title: 使用.htaccess文件配置网页重定向		
date: 2011-07-13
tags: [".htaccess","PHP/ASP","前端","目录重定向","网页重定向"]
---

.htaccess最有用的功能之一就是将请求重定向到同站内或站外的不同文档。这在你改变了一个文件名称，但仍然想让用户用旧地址访问到它时，变的极为有用。另一个应用（我发现的很有用的）是重定向到一个长URL，例如在我的时事通讯中，我可以使用一个很简短的URL来指向我的会员链接。以下是一个重定向文件的例子：

Redirect /location/from/root/file.ext

http://www.<span style="color: #000000;">saqqdy.com/new/file/123.html

上述例子中，访问在root目录下的名为oldfile.html可以键入：

/oldfile.html

访问一个旧次级目录中的文件可以键入：

/old/oldfile.html

你也可以使用.htaccess重定向整个网站的目录。假如你的网站上有一个名为olddirectory的目录，并且你已经在一个新网站

http://www.saqqdy.com/newdirectory/上建立了与上相同的文档，你可以将旧目录下所有的文件做一次重定向而不必一一声明：

Redirect /olddirectory http://www.saqqdy.com/newdirectory

这样，任何指向到站点中/olddirectory目录的请求都将被重新指向新的站点，包括附加的额外URL信息。例如有人键入：

http://www.saqqdy.com/olddirecotry/oldfiles/images/image.gif

请求将被重定向到：

http://www.saqqdy.com/newdirectory/oldfiles/images/image.gif

如果正确使用，此功能将极其强大。

我们可能对网站进行重新规划，将文档进行了迁移，或者更改了目录。这时候，来自搜索引擎或者其他网站链接过来的访问就可能

出错。这种情况下，可以通过如下指令来完成旧的URL自动转向到新的地址：

Redirect /旧目录/旧文档名 新文档的地址

或者整个目录的转向：

Redirect 旧目录 新目录		