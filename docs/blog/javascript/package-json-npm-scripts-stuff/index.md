---
layout: post
title: package.json中npm scripts的那些事		
date: 2019-05-01
tags: ["Javascript/ES6/ES7","Nodejs","npm","package.json","script","shell命令","前端"]
---

<!-- wp:paragraph -->
Node 开发离不开 npm，而脚本功能是 npm 最强大、最常用的功能之一。
<!-- /wp:paragraph -->

<!-- wp:heading -->
##一、什么是 npm 脚本？
<!-- /wp:heading -->

<!-- wp:paragraph -->
npm 允许在<code>package.json</code>文件里面，使用<code>scripts</code>字段定义脚本命令。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>{
  // ...
  "scripts": {
    "build": "node build.js"
  }
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
上面代码是<code>package.json</code>文件的一个片段，里面的<code>scripts</code>字段是一个对象。它的每一个属性，对应一段脚本。比如，<code>build</code>命令对应的脚本是<code>node build.js</code>。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
命令行下使用<code>npm run</code>命令，就可以执行这段脚本。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ npm run build
# 等同于执行
$ node build.js</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
这些定义在<code>package.json</code>里面的脚本，就称为 npm 脚本。它的优点很多。
<!-- /wp:paragraph -->

<!-- wp:list -->
* 项目的相关脚本，可以集中在一个地方。* 不同项目的脚本命令，只要功能相同，就可以有同样的对外接口。用户不需要知道怎么测试你的项目，只要运行<code>npm run test</code>即可。* 可以利用 npm 提供的很多辅助功能。
<!-- /wp:list -->

<!-- wp:paragraph -->
查看当前项目的所有 npm 脚本命令，可以使用不带任何参数的<code>npm run</code>命令。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ npm run</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
##二、原理
<!-- /wp:heading -->

<!-- wp:paragraph -->
npm 脚本的原理非常简单。每当执行<code>npm run</code>，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
比较特别的是，<code>npm run</code>新建的这个 Shell，会将当前目录的<code>node_modules/.bin</code>子目录加入<code>PATH</code>变量，执行结束后，再将<code>PATH</code>变量恢复原样。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
这意味着，当前目录的<code>node_modules/.bin</code>子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写<code>mocha test</code>就可以了。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>"test": "mocha test"</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
而不用写成下面这样。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>"test": "./node_modules/.bin/mocha test"</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
由于 npm 脚本的唯一要求就是可以在 Shell 执行，因此它不一定是 Node 脚本，任何可执行文件都可以写在里面。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
npm 脚本的退出码，也遵守 Shell 脚本规则。如果退出码不是<code>0</code>，npm 就认为这个脚本执行失败。
<!-- /wp:paragraph -->

<!-- wp:heading -->
##三、通配符
<!-- /wp:heading -->

<!-- wp:paragraph -->
由于 npm 脚本就是 Shell 脚本，因为可以使用 Shell 通配符。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>"lint": "jshint *.js"
"lint": "jshint **/*.js"</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
上面代码中，<code>*</code>表示任意文件名，<code>**</code>表示任意一层子目录。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
如果要将通配符传入原始命令，防止被 Shell 转义，要将星号转义。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>"test": "tap test/\*.js"</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
##四、传参
<!-- /wp:heading -->

<!-- wp:paragraph -->
向 npm 脚本传入参数，要使用<code>--</code>标明。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>"lint": "jshint **.js"</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
向上面的<code>npm run lint</code>命令传入参数，必须写成下面这样。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ npm run lint --  --reporter checkstyle > checkstyle.xml</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
也可以在<code>package.json</code>里面再封装一个命令。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>"lint": "jshint **.js",
"lint:checkstyle": "npm run lint -- --reporter checkstyle > checkstyle.xml"</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
##五、执行顺序
<!-- /wp:heading -->

<!-- wp:paragraph -->
如果 npm 脚本里面需要执行多个任务，那么需要明确它们的执行顺序。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
如果是并行执行（即同时的平行执行），可以使用<code>&</code>符号。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ npm run script1.js & npm run script2.js</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用<code>&&</code>符号。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ npm run script1.js && npm run script2.js</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
这两个符号是 Bash 的功能。此外，还可以使用 node 的任务管理模块：<a rel="noreferrer noopener" href="https://github.com/paulpflug/script-runner" target="_blank">script-runner</a>、<a rel="noreferrer noopener" href="https://github.com/mysticatea/npm-run-all" target="_blank">npm-run-all</a>、<a rel="noreferrer noopener" href="https://github.com/coderaiser/redrun" target="_blank">redrun</a>。
<!-- /wp:paragraph -->

<!-- wp:heading -->
##六、默认值
<!-- /wp:heading -->

<!-- wp:paragraph -->
一般来说，npm 脚本由用户提供。但是，npm 对两个脚本提供了默认值。也就是说，这两个脚本不用定义，就可以直接使用。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>"start": "node server.js"，
"install": "node-gyp rebuild"</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
上面代码中，<code>npm run start</code>的默认值是<code>node server.js</code>，前提是项目根目录下有<code>server.js</code>这个脚本；<code>npm run install</code>的默认值是<code>node-gyp rebuild</code>，前提是项目根目录下有<code>binding.gyp</code>文件。
<!-- /wp:paragraph -->

<!-- wp:heading -->
##七、钩子
<!-- /wp:heading -->

<!-- wp:paragraph -->
npm 脚本有<code>pre</code>和<code>post</code>两个钩子。举例来说，<code>build</code>脚本命令的钩子就是<code>prebuild</code>和<code>postbuild</code>。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>"prebuild": "echo I run before the build script",
"build": "cross-env NODE_ENV=production webpack",
"postbuild": "echo I run after the build script"</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
用户执行<code>npm run build</code>的时候，会自动按照下面的顺序执行。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>npm run prebuild && npm run build && npm run postbuild</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
因此，可以在这两个钩子里面，完成一些准备工作和清理工作。下面是一个例子。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>"clean": "rimraf ./dist && mkdir dist",
"prebuild": "npm run clean",
"build": "cross-env NODE_ENV=production webpack"</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
npm 默认提供下面这些钩子。
<!-- /wp:paragraph -->

<!-- wp:list -->
* prepublish，postpublish* preinstall，postinstall* preuninstall，postuninstall* preversion，postversion* pretest，posttest* prestop，poststop* prestart，poststart* prerestart，postrestart
<!-- /wp:list -->

<!-- wp:paragraph -->
自定义的脚本命令也可以加上<code>pre</code>和<code>post</code>钩子。比如，<code>myscript</code>这个脚本命令，也有<code>premyscript</code>和<code>postmyscript</code>钩子。不过，双重的<code>pre</code>和<code>post</code>无效，比如<code>prepretest</code>和<code>postposttest</code>是无效的。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
npm 提供一个<code>npm_lifecycle_event</code>变量，返回当前正在运行的脚本名称，比如<code>pretest</code>、<code>test</code>、<code>posttest</code>等等。所以，可以利用这个变量，在同一个脚本文件里面，为不同的<code>npm scripts</code>命令编写代码。请看下面的例子。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'test') {
  console.log(`Running the test task!`);
}

if (TARGET === 'pretest') {
  console.log(`Running the pretest task!`);
}

if (TARGET === 'posttest') {
  console.log(`Running the posttest task!`);
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
注意，<code>prepublish</code>这个钩子不仅会在<code>npm publish</code>命令之前运行，还会在<code>npm install</code>（不带任何参数）命令之前运行。这种行为很容易让用户感到困惑，所以 npm 4 引入了一个新的钩子<code>prepare</code>，行为等同于<code>prepublish</code>，而从 npm 5 开始，<code>prepublish</code>将只在<code>npm publish</code>命令之前运行。
<!-- /wp:paragraph -->

<!-- wp:heading -->
##八、简写形式
<!-- /wp:heading -->

<!-- wp:paragraph -->
四个常用的 npm 脚本有简写形式。
<!-- /wp:paragraph -->

<!-- wp:list -->
* <code>npm start</code>是<code>npm run start</code>* <code>npm stop</code>是<code>npm run stop</code>的简写* <code>npm test</code>是<code>npm run test</code>的简写* <code>npm restart</code>是<code>npm run stop && npm run restart && npm run start</code>的简写
<!-- /wp:list -->

<!-- wp:paragraph -->
<code>npm start</code>、<code>npm stop</code>和<code>npm restart</code>都比较好理解，而<code>npm restart</code>是一个复合命令，实际上会执行三个脚本命令：<code>stop</code>、<code>restart</code>、<code>start</code>。具体的执行顺序如下。
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
1. prerestart2. prestop3. stop4. poststop5. restart6. prestart7. start8. poststart9. postrestart
<!-- /wp:list -->

<!-- wp:heading -->
##九、变量
<!-- /wp:heading -->

<!-- wp:paragraph -->
npm 脚本有一个非常强大的功能，就是可以使用 npm 的内部变量。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
首先，通过<code>npm_package_</code>前缀，npm 脚本可以拿到<code>package.json</code>里面的字段。比如，下面是一个<code>package.json</code>。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>{
  "name": "foo", 
  "version": "1.2.5",
  "scripts": {
    "view": "node view.js"
  }
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
那么，变量<code>npm_package_name</code>返回<code>foo</code>，变量<code>npm_package_version</code>返回<code>1.2.5</code>。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// view.js
console.log(process.env.npm_package_name); // foo
console.log(process.env.npm_package_version); // 1.2.5</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
上面代码中，我们通过环境变量<code>process.env</code>对象，拿到<code>package.json</code>的字段值。如果是 Bash 脚本，可以用<code>$npm_package_name</code>和<code>$npm_package_version</code>取到这两个值。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<code>npm_package_</code>前缀也支持嵌套的<code>package.json</code>字段。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>  "repository": {
    "type": "git",
    "url": "xxx"
  },
  scripts: {
    "view": "echo $npm_package_repository_type"
  }</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
上面代码中，<code>repository</code>字段的<code>type</code>属性，可以通过<code>npm_package_repository_type</code>取到。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
下面是另外一个例子。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>"scripts": {
  "install": "foo.js"
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
上面代码中，<code>npm_package_scripts_install</code>变量的值等于<code>foo.js</code>。
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
然后，npm 脚本还可以通过<code>npm_config_</code>前缀，拿到 npm 的配置变量，即<code>npm config get xxx</code>命令返回的值。比如，当前模块的发行标签，可以通过<code>npm_config_tag</code>取到。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>"view": "echo $npm_config_tag",</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
注意，<code>package.json</code>里面的<code>config</code>对象，可以被环境变量覆盖。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>{ 
  "name" : "foo",
  "config" : { "port" : "8080" },
  "scripts" : { "start" : "node server.js" }
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
上面代码中，<code>npm_package_config_port</code>变量返回的是<code>8080</code>。这个值可以用下面的方法覆盖。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>$ npm config set foo:port 80</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
最后，<code>env</code>命令可以列出所有环境变量。
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>"env": "env"</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
##十、常用脚本示例
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>// 删除目录
"clean": "rimraf dist/*",

// 本地搭建一个 HTTP 服务
"serve": "http-server -p 9090 dist/",

// 打开浏览器
"open:dev": "opener http://localhost:9090",

// 实时刷新
 "livereload": "live-reload --port 9091 dist/",

// 构建 HTML 文件
"build:html": "jade index.jade > dist/index.html",

// 只要 CSS 文件有变动，就重新执行构建
"watch:css": "watch 'npm run build:css' assets/styles/",

// 只要 HTML 文件有变动，就重新执行构建
"watch:html": "watch 'npm run build:html' assets/html",

// 部署到 Amazon S3
"deploy:prod": "s3-cli sync ./dist/ s3://example-com/prod-site/",

// 构建 favicon
"build:favicon": "node scripts/favicon.js",</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
##十一、参考链接
<!-- /wp:heading -->

<!-- wp:list -->
* <a rel="noreferrer noopener" href="https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/" target="_blank">How to Use npm as a Build Tool</a>, by Keith Cirkel* <a rel="noreferrer noopener" href="https://github.com/RyanZim/awesome-npm-scripts#articles" target="_blank">Awesome npm scripts</a>, by Ryan Zimmerman* <a href="http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html">npm scripts 使用指南</a>
<!-- /wp:list -->		