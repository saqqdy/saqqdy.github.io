---
layout: post
title: 让WordPress的JS和CSS支持Gzip Compression压缩		
date: 2011-12-08
tags: ["Gzip compression","Gzip压缩","WordPress","WordPress技巧","小技巧"]
---

在上一文中提到了开启WordPress支持Gzip的方法，但是WordPress的JS和CSS文件默认是没有开启Gzip Compression压缩的，网上有关开启Gzip压缩的方法层出不穷，不过并不是所有方法都适用，都有一个严重的BUG，该死的IE6对Gzip的支持不是很好，如果对CSS、JS进行Gzip压缩，会使部分JS失效或者CSS无法加载，上岸QQ的鱼试了下，只要一启用Gzip，Wordpress就处于裸奔状态，CSS完全失效，而且还一大堆JS错误。下面介绍的这个方法不存在上面所述的问题。

需要开启WordPress的Gzip compression压缩功能进：《<a title="开启WordPress的Gzip compression压缩功能" href="http://www.saqqdy.com/computer-skills/open-wordpress-gzip-compression-function" target="_blank">开启WordPress的Gzip compression压缩功能</a>》

在你网站的根目录下新建立一文件夹wp-cache，用来存放Gzip压缩文件，请确保该文件夹权限为可读写，即：权限值为777。

在你网站的** 根目录 **下新建一名字为gzip.php的文件，代码如下。
> <?php
define('ABSPATH', dirname(__FILE__).'/');
$cache = true;//Gzip压缩开关
$cachedir = 'wp-cache/';//存放gz文件的目录，确保可写
$gzip = strstr($_SERVER['HTTP_ACCEPT_ENCODING'], 'gzip');
$deflate = strstr($_SERVER['HTTP_ACCEPT_ENCODING'], 'deflate');
$encoding = $gzip ? 'gzip' : ($deflate ? 'deflate' : 'none');
if(!isset($_SERVER['QUERY_STRING']))
exit();
$key=array_shift(explode('?', $_SERVER['QUERY_STRING']));
$key=str_replace('../','',$key);
$filename=ABSPATH.$key;
$symbol='^';
$rel_path=str_replace(ABSPATH,'',dirname($filename));
$namespace=str_replace('/',$symbol,$rel_path);
$cache_filename = ABSPATH.$cachedir.$namespace.$symbol.basename($filename).'.gz';//生成gz文件路径
$type="Content-type: text/html"; //默认的类型信息
$ext = array_pop(explode('.', $filename));//根据后缀判断文件类型信息
switch ($ext)
{
case 'css':
$type="Content-type: text/css";
break;
case 'js':
$type="Content-type: text/javascript";
break;
default:
exit();
}
if($cache)
{
if(file_exists($cache_filename)){//假如存在gz文件
$mtime = filemtime($cache_filename);
$gmt_mtime = gmdate('D, d M Y H:i:s', $mtime) . ' GMT';
if( (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) && array_shift(explode(';', $_SERVER['HTTP_IF_MODIFIED_SINCE'])) ==? $gmt_mtime))
{
// 浏览器cache中的文件修改日期是否一致，将返回304
header ("HTTP/1.1 304 Not Modified");
header("Expires: ");
header("Cache-Control: ");
header("Pragma: ");
header($type);
header("Tips: Cache Not Modified (Gzip)");
header ('Content-Length: 0');
}
else
{
//读取gz文件输出
$content = file_get_contents($cache_filename);
header("Last-Modified:" . $gmt_mtime);
header("Expires: ");
header("Cache-Control: ");
header("Pragma: ");
header($type);
header("Tips: Normal Respond (Gzip)");
header("Content-Encoding: gzip");
echo $content;
}
}
else if(file_exists($filename))
{ //没有对应的gz文件
$mtime = mktime();
$gmt_mtime = gmdate('D, d M Y H:i:s', $mtime) . ' GMT';
$content = file_get_contents($filename);//读取文件
$content = gzencode($content, 9, $gzip ? FORCE_GZIP : FORCE_DEFLATE);//压缩文件内容
header("Last-Modified:" . $gmt_mtime);
header("Expires: ");
header("Cache-Control: ");
header("Pragma: ");
header($type);
header("Tips: Build Gzip File (Gzip)");
header ("Content-Encoding: " . $encoding);
header ('Content-Length: ' . strlen($content));
echo $content;
if ($fp = fopen($cache_filename, 'w'))
{//写入gz文件，供下次使用
fwrite($fp, $content);
fclose($fp);
}
}
else
{
header("HTTP/1.0 404 Not Found");
}
}
else
{ //处理不使用Gzip模式下的输出。原理基本同上
if(file_exists($filename))
{
$mtime = filemtime($filename);
$gmt_mtime = gmdate('D, d M Y H:i:s', $mtime) . ' GMT';
if( (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) && array_shift(explode(';', $_SERVER['HTTP_IF_MODIFIED_SINCE'])) ==? $gmt_mtime))
{
header ("HTTP/1.1 304 Not Modified");
header("Expires: ");
header("Cache-Control: ");
header("Pragma: ");
header($type);
header("Tips: Cache Not Modified");
header ('Content-Length: 0');
}
else
{
header("Last-Modified:" . $gmt_mtime);
header("Expires: ");
header("Cache-Control: ");
header("Pragma: ");
header($type);
header("Tips: Normal Respond");
$content = readfile($filename);
echo $content;
}
}
else
{
header("HTTP/1.0 404 Not Found");
}
}
?>
在你网站的根目录下的.htaccess中添加以下代码，如果.htaccess不存在请新建一个。
> RewriteCond %{HTTP:User-Agent} !MSIE\ [5-6]
RewriteRule (.*.css$'.*.js$) gzip.php?$1 [L]
这段代码的意思是判断当前浏览器是否为IE5-6（虽然现在很少人用IE5，不过为保险起见还是加上吧），如果不是则对CSS/JS启用Gzip压缩。
至此，任务已完成。不出意外的话，经过这么一番折腾，你的Wordpress性能应该能提升2个档次。可用Firefox插件YSlow来测试。
或者你也可以使用百度统计，需要百度统计邀请码的进：《<a title="上岸QQ的鱼发放百度统计邀请码" href="http://www.saqqdy.com/news/saqqdy-baidu-tongji-invite-code" target="_blank">上岸QQ的鱼发放百度统计邀请码</a>》
如果你的主机不支持Gzip，欢迎加入bluehost合租：《<a title="上岸QQ的鱼寻找合租bluehost主机伙伴" href="http://www.saqqdy.com/news/saqqdy-find-host-partners-sharing-bluehost" target="_blank">上岸QQ的鱼寻找合租bluehost主机伙伴</a>》		