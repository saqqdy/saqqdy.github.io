---
layout: post
title: 【扩展篇】ASP.NET2.0连接SQL Server数据库详解		
date: 2009-10-05
tags: [".NET2.0","ASP.NET","MSSQL","PHP/ASP","SQL Server","前端"]
---

Connection类有四种：SqlConnection，OleDbConnection，OdbcConnection和OracleConnection。
SqlConnection类的对象连接SQL Server数据库；
oracleConnection 类的对象连接Oracle数据库；
OleDbConnection类的对象连接支持OLE DB的数据库，如Access；
而OdbcConnection类的对象连接任何支持ODBC的数据库。
与数据库的所有通讯最终都是通过Connection对象来完成的。

SqlConnection类

Connection 用于与数据库"对话"，并由特定提供程序的类（如 SqlConnection）表示。尽管SqlConnection类是针对Sql Server的，但是这个类的许多属性、方法与事件和OleDbConnection及OdbcConnection等类相似。本章将重点讲解SqlConnection特定的属性与方法，其他的Connection类你可以参考相应的帮助文档。

注意：使用不同的Connection对象需要导入不同的命名空间。OleDbConnection的命名空间为System.Data.OleDb。SqlConnection的命名空间为System.Data.SqlClient。OdbcConnection的命名空间为System.Data.Odbc。OracleConnection的命名空间为System.Data.OracleClinet。

SqlConnection属性：

属性 说明
ConnectionString 其返回类型为string,获取或设置用于打开 SQL Server 数据库的字符串。
ConnectionTimeOut 其返回类型为int,获取在尝试建立连接时终止尝试并生成错误之前所等待的时间。
Database 其返回类型为string,获取当前数据库或连接打开后要使用的数据库的名称。
DataSource 其返回类型为string,获取要连接的 SQL Server 实例的名称。
State 其返回类型为ConnectionState,取得当前的连接状态：Broken、Closed、Connecting、Fetching或Open。
ServerVersion 其返回类型为string,获取包含客户端连接的 SQL Server 实例的版本的字符串。
PacketSize 获取用来与 SQL Server 的实例通信的网络数据包的大小（以字节为单位）。这个属性只适用于SqlConnection类型

SqlConnection方法：

方法 说明
Close() 其返回类型为void,关闭与数据库的连接。
CreateCommand() 其返回类型为SqlCommand,创建并返回一个与 SqlConnection 关联的 SqlCommand 对象。
Open() 其返回类型为void,用连接字符串属性指定的属性打开数据库连接

SqlConnection事件：

事件 说明
StateChange 当事件状态更改时发生。 （从 DbConnection 继承。）
InfoMessage 当 SQL Server 返回一个警告或信息性消息时发生。

提示：可以用事件让一个对象以某种方式通知另一对象产生某些事情。例如我们在Windows系统中选择"开始"菜单，一旦单击鼠标时，就发生了一个事件，通知操作系统将"开始"菜单显示出来。

<!--nextpage-->使用SqlConnection对象连接SQL Server数据库
我们可以用SqlConnection()构造函数生成一个新的SqlConnection对象。这个函数是重载的，即我们可以调用构造函数的不同版本。SqlConnection()的构造函数如下表所示：

构造函数 说明
SqlConnection () 初始化 SqlConnection 类的新实例。
SqlConnection (String) 如果给定包含连接字符串的字符串，则初始化 SqlConnection 类的新实例。

假设我们导入了System.Data.SqlClient命名空间，则可以用下列语句生成新的SqlConnection对象：
SqlConnection mySqlConnection = new SqlConnection();

程序代码说明：在上述语法范例的程序代码中，我们通过使用"new"关键字生成了一个新的SqlConnection对象，并且将其命名为mySqlConnection。

现在我们就可以使用如下两种方式连接数据库，即采用集成的Windows验证和使用Sql Server身份验证进行数据库的登录。

集成的Windows身份验证语法范例
string connectionString="server=localhost;database=Northwind;
integrated security=SSPI";

程序代码说明：在上述语法范例的程序代码中，我们设置了一个针对Sql Server数据库的连接字符串。其中server表示运行Sql Server的计算机名，由于在本书中，ASP.NET程序和数据库系统是位于同一台计算机的，所以我们可以用localhost取代当前的计算机名。database表示所使用的数据库名，这里设置为Sql Server自带的一个示例数据库--Northwind。由于我们希望采用集成的Windows验证方式，所以设置 integrated security为SSPI即可。		