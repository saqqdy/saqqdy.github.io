---
layout: post
title: 贴一下本人自用的visual studio code设置		
date: 2019-04-18
tags: ["Javascript/ES6/ES7","monokai pro","setting.json","visual studio code","前端"]
---

<!-- wp:paragraph -->
估计很多人都在纠结到底用一个什么样的配置来使用vs code做vue前端开发会显得专业、优雅一点。这里我贴一个我自用的setting.json给大家参考下：
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
推荐安装的插件有：
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote">code spell checker // 代码拼写检查eslint // 代码风格规范Markdown All in One // Markdown编写工具monokai pro // 最专业的代码和软件主题prettier // 与eslint配合，格式化代码project manager // 项目管理vscode-icons // 软件图标风格Vetur // vue开发必备settings sync // 软件设置同步到云端</blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
下面是setting.json：
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>{
    "workbench.colorTheme": "Monokai Pro",
    "workbench.iconTheme": "vscode-icons",
    "sync.gist": "xxxxxxxxx",
    "sync.autoDownload": false,
    "sync.autoUpload": false,
    "sync.forceDownload": false,
    "sync.quietSync": false,
    "sync.askGistName": false,
    "sync.removeExtensions": true,
    "sync.syncExtensions": true,
    "explorer.confirmDelete": false,
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.snippetSuggestions": "top",
    "editor.formatOnPaste": true,
    "editor.wordWrap": "on",
    "editor.tabSize": 2,
    "files.exclude": {
        "**/.git": false,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/._*": true,
        "**/.DS_Store": true
    },
    "files.autoSave": "afterDelay",
    "prettier.semi": false,
    "prettier.singleQuote": true,
    "prettier.printWidth": 1000,
    "prettier.jsxBracketSameLine": true,
    "emmet.syntaxProfiles": {
        "vue-html": "html",
        "vue": "html"
    },
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "vue"
    ],
    "vetur.validation.template": false,
    "vetur.format.defaultFormatterOptions": {
        "wrap_attributes": "force-aligned"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
如果你对prettier的配置有兴趣，欢迎使用我的prettier配置：<a href="https://github.com/saqqdy/prettier-config">https://github.com/saqqdy/prettier-config</a>
<!-- /wp:paragraph -->		