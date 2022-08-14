import{_ as s,c as n,o as a,d as l}from"./app.dde1ebf2.js";const C=JSON.parse('{"title":"\u624B\u5199 JavaScript","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u624B\u5199 JavaScript","slug":"\u624B\u5199-javascript"}],"relativePath":"knowledge/write.md"}'),p={name:"knowledge/write.md"},o=l(`<h2 id="\u624B\u5199-javascript" tabindex="-1">\u624B\u5199 JavaScript <a class="header-anchor" href="#\u624B\u5199-javascript" aria-hidden="true">#</a></h2><ol><li>\u624B\u5199 Object.create \u601D\u8DEF\uFF1A\u5C06\u4F20\u5165\u7684\u5BF9\u8C61\u4F5C\u4E3A\u539F\u578B</li></ol><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">F</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">F</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">F</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u624B\u5199 instanceof \u65B9\u6CD5 instanceof \u8FD0\u7B97\u7B26\u7528\u4E8E\u5224\u65AD\u6784\u9020\u51FD\u6570\u7684 prototype \u5C5E\u6027\u662F\u5426\u51FA\u73B0\u5728\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E2D\u7684\u4EFB\u4F55\u4F4D\u7F6E\u3002</li></ol><p>\u5B9E\u73B0\u6B65\u9AA4\uFF1A \u9996\u5148\u83B7\u53D6\u7C7B\u578B\u7684\u539F\u578B \u7136\u540E\u83B7\u5F97\u5BF9\u8C61\u7684\u539F\u578B \u7136\u540E\u4E00\u76F4\u5FAA\u73AF\u5224\u65AD\u5BF9\u8C61\u7684\u539F\u578B\u662F\u5426\u7B49\u4E8E\u7C7B\u578B\u7684\u539F\u578B\uFF0C\u76F4\u5230\u5BF9\u8C61\u539F\u578B\u4E3A null\uFF0C\u56E0\u4E3A\u539F\u578B\u94FE\u6700\u7EC8\u4E3A null</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">myInstanceOf</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">newObject</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> constructor</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">proto</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPrototypeOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">newObject</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;"> (</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">proto</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">proto</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">constructor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">proto</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPrototypeOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">proto</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">A</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">A</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">myInstanceOf</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div>`,6),e=[o];function t(c,r,F,y,D,A){return a(),n("div",null,e)}var d=s(p,[["render",t]]);export{C as __pageData,d as default};
