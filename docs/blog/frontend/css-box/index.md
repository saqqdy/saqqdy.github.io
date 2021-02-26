---
layout: post
title: 【入门篇】层叠样式表CSS的盒子模型		
date: 2010-05-25
tags: ["CSS盒子","HTML5/CSS3","前端","层叠样式表","盒子模型"]
---

在CSS中，一个独立的盒子模型由content（内容）、border（边框）、padding（内边距）、margin（外边距）4个部分组成。不过，W3C标准化的盒子模型跟IE的盒子模型是不一样的。
<a href="iebox.jpg"><img class="alignnone size-full wp-image-277" title="iebox" src="http://www.saqqdy.com/wp-content/uploads/2010/09/iebox.jpg" alt="" width="791" height="462" /></a>

<a href="box.jpg"><img class="alignnone size-full wp-image-275" title="box" src="http://www.saqqdy.com/wp-content/uploads/2010/09/box.jpg" alt="" width="746" height="455" /></a>

可以看到，IE的盒子模型中的content部分包含了padding和border，也就是说，IE的盒子的大小是包括了padding和border的大小。在设计网页的时候，为了浏览器之间的兼容性，可以在网页<html>标签前面声明使用标准的盒子模型：
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
......
......

** border的样式： **
border的样式大致有8种，但是浏览器的不同，各种样式的效果也不尽相同。例如下面这段代码：

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<style type="text/css">
div{border-width:8px; border-color:red; margin:10px; padding:10px; background-color:#fff; font-family:Verdana; color:blue; font-weight:bold;}
</style>
</head>

<body>
<div style="border-style:dashed;">dashed</div>
<div style="border-style:dotted;">dotted</div>
<div style="border-style:double;">double</div>
<div style="border-style:groove;">groove</div>
<div style="border-style:inset;">inset</div>
<div style="border-style:outset;">outset</div>
<div style="border-style:ridge;">ridge</div>
<div style="border-style:solid;">solid</div>
</body>
</html>

火狐浏览器与IE浏览器的显示效果：
<a href="compare.gif"><img class="alignnone size-full wp-image-276" title="compare" src="http://www.saqqdy.com/wp-content/uploads/2010/09/compare.gif" alt="" width="792" height="520" /></a>

当然，也可以对不同的边框用不同的效果，可以分别对盒子的各条边用不同的样式。

样式的属性值可以用缩写的形式出现，其顺序是按照上、右、下、左的顺序
例如：border-width:2px 4px 5px 6px;这个样式的意思是盒子的边框粗细分别为：上边2px、右边4px、下边5px、左边6px。
例如：padding:4px 8px;这个属性的意思是：盒子的上内距和盒子的下内距为4px、盒子的左内距和右内距为8px。
例如：margin:3px 6px 9px;这个属性的意思是：盒子的上外距是3px、下外距是9px、左外距和右外距为6px。
总结：如果给出1个属性值，这个属性值就是所有四边的属性。
如果给出2个属性值，第一个是上、下两边框的属性，第二个是左、右两边框的属性。
如果给出3个属性值，第一个是上边框的属性，第二个是左、右两边框的属性，第三个是下边框的属性。
如果给出4个属性值，则分别是上、右、下、左各边框的属性。		