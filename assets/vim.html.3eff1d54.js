import{_ as e,o as d,c as o,b as a}from"./app.a1bc0b91.js";var i="/assets/command_mode.4706371a.png",c="/assets/insert_mode.8e13ff74.png",l="/assets/commandline_mode.e3ab2dd1.png";const r={},n=a(`<h1 id="vi-vim" tabindex="-1"><a class="header-anchor" href="#vi-vim" aria-hidden="true">#</a> Vi/Vim</h1><ul><li><a href="#vivim">Vi/Vim</a><ul><li><a href="#%E4%B8%89%E7%A7%8D%E6%A8%A1%E5%BC%8F">\u4E09\u79CD\u6A21\u5F0F</a><ul><li><a href="#%E4%B8%80%E8%88%AC%E6%A8%A1%E5%BC%8F-command-mode">\u4E00\u822C\u6A21\u5F0F (command mode)</a></li><li><a href="#%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F-insert-mode">\u7F16\u8F91\u6A21\u5F0F (insert mode)</a></li><li><a href="#%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%A8%A1%E5%BC%8F-command-line-mode">\u547D\u4EE4\u884C\u6A21\u5F0F (command-line mode)</a></li></ul></li><li><a href="#%E6%8C%89%E9%94%AE%E6%93%8D%E4%BD%9C">\u6309\u952E\u64CD\u4F5C</a><ul><li><a href="#%E4%B8%80%E8%88%AC%E6%A8%A1%E5%BC%8F%E6%8C%89%E9%94%AE%E6%93%8D%E4%BD%9C">\u4E00\u822C\u6A21\u5F0F\u6309\u952E\u64CD\u4F5C</a><ul><li><a href="#%E7%A7%BB%E5%8A%A8%E5%85%89%E6%A0%87">\u79FB\u52A8\u5149\u6807</a></li><li><a href="#%E6%9F%A5%E6%89%BE%E6%93%8D%E4%BD%9C">\u67E5\u627E\u64CD\u4F5C</a></li></ul></li><li><a href="#%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F%E6%8C%89%E9%94%AE%E6%93%8D%E4%BD%9C">\u7F16\u8F91\u6A21\u5F0F\u6309\u952E\u64CD\u4F5C</a></li><li><a href="#%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%A8%A1%E5%BC%8F%E6%8C%89%E9%94%AE%E6%93%8D%E4%BD%9C">\u547D\u4EE4\u884C\u6A21\u5F0F\u6309\u952E\u64CD\u4F5C</a></li></ul></li></ul></li></ul><h2 id="\u4E09\u79CD\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u79CD\u6A21\u5F0F" aria-hidden="true">#</a> \u4E09\u79CD\u6A21\u5F0F</h2><ul><li>[x] <a href="#%E4%B8%80%E8%88%AC%E6%A8%A1%E5%BC%8F-command-mode">\u4E00\u822C\u6A21\u5F0F (command mode)</a></li><li>[x] <a href="#%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F-insert-mode">\u7F16\u8F91\u6A21\u5F0F (insert mode)</a></li><li>[x] <a href="#%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%A8%A1%E5%BC%8F-command-line-mode">\u547D\u4EE4\u884C\u6A21\u5F0F (command-line mode)</a></li></ul><h3 id="\u4E00\u822C\u6A21\u5F0F-command-mode" tabindex="-1"><a class="header-anchor" href="#\u4E00\u822C\u6A21\u5F0F-command-mode" aria-hidden="true">#</a> \u4E00\u822C\u6A21\u5F0F (command mode)</h3><p>\u4E00\u822C\u6A21\u5F0F(command mode)\uFF0C\u4E5F\u53EB\u547D\u4EE4\u6A21\u5F0F\u3002\u5728\u4E00\u822C\u6A21\u5F0F\u4E0B</p><ul><li>\u6309 <code>i</code> \u8FDB\u5165<a href="#%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F-insert-mode">\u7F16\u8F91\u6A21\u5F0F (insert mode)</a></li><li>\u6309 <code>:</code> \u8FDB\u5165<a href="#%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%A8%A1%E5%BC%8F-command-line-mode">\u547D\u4EE4\u884C\u6A21\u5F0F (command-line mode)</a></li></ul><p>\u7528 vi/vim \u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u4E4B\u540E\uFF0C\u4F1A\u9ED8\u8BA4\u8FDB\u5165\u4E00\u822C\u6A21\u5F0F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> hello.cpp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+i+'" alt="\u547D\u4EE4\u6A21\u5F0F (command mode)"></p><p>\u4E00\u822C\u6A21\u5F0F\u4E0B\uFF0C\u53EF\u4EE5\u79FB\u52A8\u5149\u6807\uFF0C\u5220\u9664\u5B57\u7B26\u6216\u8005\u5220\u9664\u6574\u884C\uFF0C\u4E5F\u53EF\u4EE5\u590D\u5236\u3001\u7C98\u8D34\u6587\u672C\u5185\u5BB9</p><ul><li>\u79FB\u52A8\u5149\u6807</li><li>\u5220\u9664\u5B57\u7B26</li><li>\u5220\u9664\u6574\u884C</li><li>\u590D\u5236\u6587\u672C</li><li>\u7C98\u8D34\u6587\u672C</li></ul><h3 id="\u7F16\u8F91\u6A21\u5F0F-insert-mode" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u6A21\u5F0F-insert-mode" aria-hidden="true">#</a> \u7F16\u8F91\u6A21\u5F0F (insert mode)</h3><p>\u7F16\u8F91\u6A21\u5F0F(insert mode)\uFF0C\u4E5F\u53EB\u63D2\u5165\u6A21\u5F0F\uFF0C\u5728\u8FD9\u4E2A\u6A21\u5F0F\u4E0B\u53EF\u4EE5\u81EA\u7531\u7F16\u8F91\u6587\u672C\u5185\u5BB9\u3002</p><p>\u5728\u4E00\u822C\u6A21\u5F0F\u4E0B\uFF0C\u6309 <code>i/I</code> <code>o/O</code> <code>a/A</code>(insert), <code>r/R</code>(replace) \u4EFB\u610F\u4E00\u4E2A\u53EF\u4EE5\u8FDB\u5165\u7F16\u8F91\u6A21\u5F0F\uFF0C\u7F16\u8F91\u6A21\u5F0F\u82F1\u6587\u4E3A insert mode \uFF0C\u6240\u4EE5\u4FBF\u4E8E\u8BB0\u5FC6\uFF0C\u4E60\u60EF\u7528 <code>i</code> \u8FDB\u5165\u7F16\u8F91\u6A21\u5F0F\u3002\u5176\u4E2D <code>r/R</code> \u662F\u8FDB\u5165\u7F16\u8F91\u6A21\u5F0F\u4E2D\u7684\u66FF\u6362</p><p>\u5728\u7F16\u8F91\u6A21\u5F0F\u4E0B\uFF0C\u6309 <code>Esc</code> \u9000\u56DE<a href="#%E4%B8%80%E8%88%AC%E6%A8%A1%E5%BC%8F-command-mode">\u4E00\u822C\u6A21\u5F0F (command mode)</a></p><p><img src="'+c+'" alt="\u7F16\u8F91\u6A21\u5F0F (insert mode)"></p><h3 id="\u547D\u4EE4\u884C\u6A21\u5F0F-command-line-mode" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C\u6A21\u5F0F-command-line-mode" aria-hidden="true">#</a> \u547D\u4EE4\u884C\u6A21\u5F0F (command-line mode)</h3><p>\u547D\u4EE4\u884C\u6A21\u5F0F(command-line mode)\uFF0C\u4E5F\u53EB\u672B\u884C\u6A21\u5F0F\u3002</p><p>\u5728\u4E00\u822C\u6A21\u5F0F\u4E0B\uFF0C\u6309 <code>:</code> \u4F1A\u8FDB\u5165\u547D\u4EE4\u884C\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u5728 <code>:</code> \u4E4B\u540E\u8F93\u5165\u9700\u8981\u8FDB\u884C\u7684\u64CD\u4F5C</p><p>\u5728\u547D\u4EE4\u884C\u6A21\u5F0F\u4E0B\uFF0C\u5220\u9664 <code>:</code> \u53CA\u5176\u540E\u5B57\u7B26\uFF0C\u9000\u56DE\u81F3<a href="#%E4%B8%80%E8%88%AC%E6%A8%A1%E5%BC%8F-command-mode">\u4E00\u822C\u6A21\u5F0F (command mode)</a></p><p><img src="'+l+'" alt="\u547D\u4EE4\u884C\u6A21\u5F0F (command-line mode)"></p><h2 id="\u6309\u952E\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6309\u952E\u64CD\u4F5C" aria-hidden="true">#</a> \u6309\u952E\u64CD\u4F5C</h2><h3 id="\u4E00\u822C\u6A21\u5F0F\u6309\u952E\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u4E00\u822C\u6A21\u5F0F\u6309\u952E\u64CD\u4F5C" aria-hidden="true">#</a> \u4E00\u822C\u6A21\u5F0F\u6309\u952E\u64CD\u4F5C</h3><h4 id="\u79FB\u52A8\u5149\u6807" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u5149\u6807" aria-hidden="true">#</a> \u79FB\u52A8\u5149\u6807</h4><ul><li><code>h</code> \u6216 \u2B05\uFE0F : \u5DE6\u79FB\uFF0C \u5148\u540E\u6309\u4E0B <code>3</code> \u548C <code>h</code> \u5DE6\u79FB3\u4E2A\u5B57\u7B26</li><li><code>j</code> \u6216 \u27A1\uFE0F : \u4E0B\u79FB\uFF0C <code>5j</code> \u5DE6\u79FB5\u884C</li><li><code>k</code> \u6216 \u2B06\uFE0F : \u4E0A\u79FB\uFF0C <code>6k</code> \u5DE6\u79FB6\u4E2A\u5B57\u7B26</li><li><code>l</code> \u6216 \u2B07\uFE0F : \u53F3\u79FB\uFF0C <code>7l</code> \u53F3\u79FB7\u4E24\u884C</li><li><code>0</code> : \u79FB\u52A8\u5230\u5F53\u524D\u884C\u7684\u6700\u524D</li><li><code>$</code> : \u79FB\u52A8\u5230\u5F53\u524D\u884C\u7684\u6700\u540E</li><li><code>n+G</code> : \u5148\u8F93\u5165\u6570\u5B57 <code>n</code> \u5E76\u6309\u4E0B <code>G</code>(\u5927\u5199)\uFF0C\u79FB\u52A8\u5230\u5F53\u524D\u6587\u4EF6\u7684\u7B2Cn\u884C\u3002<code>gg</code>=<code>1G</code>\uFF0C\u79FB\u52A8\u5230\u9996\u884C</li><li><code>n+Enter</code> : \u5148\u8F93\u5165\u6570\u5B57 <code>n</code> \u5E76\u6309\u4E0B <code>Enter</code> \uFF0C\u5411\u4E0B\u79FB\u52A8n\u884C</li><li><code>ctrl+f</code> : \u5C4F\u5E55\u5411\u4E0B\u79FB\u52A8\u4E00\u9875</li><li><code>ctrl+b</code> : \u5C4F\u5E55\u5411\u4E0A\u79FB\u52A8\u4E00\u9875</li><li><code>ctrl+d</code> : \u5C4F\u5E55\u5411\u4E0B\u79FB\u52A8\u534A\u9875</li><li><code>ctrl+u</code> : \u5C4F\u5E55\u5411\u4E0A\u79FB\u52A8\u534A\u9875</li></ul><h4 id="\u67E5\u627E\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u64CD\u4F5C" aria-hidden="true">#</a> \u67E5\u627E\u64CD\u4F5C</h4><ul><li><code>/word</code> : \u67E5\u627E\u5149\u6807\u4E4B\u540E\u7684\u5185\u5BB9 <code>word</code> \uFF0C\u82E5\u8981\u67E5\u627E\u5355\u8BCD <code>linux</code> \uFF0C\u8F93\u5165 <code>/word</code> \u5373\u53EF</li><li><code>?word</code> : \u67E5\u627E\u5149\u6807\u4E4B\u524D\u7684\u5185\u5BB9 <code>word</code></li></ul><p>\u67E5\u627E\u540E</p><ul><li><code>n</code> : \u91CD\u590D\u524D\u4E00\u4E2A\u67E5\u627E\u64CD\u4F5C\uFF0C\u67E5\u627E\u4E0B\u4E00\u4E2A\u5185\u5BB9 <code>/</code> \u5219\u662F\u5411\u4E0B\uFF0C <code>\uFF1F</code> \u8868\u793A\u5411\u4E0A\uFF0C\u7406\u89E3\u4E3Anext</li><li><code>N</code> : \u91CD\u590D\u67E5\u627E\u64CD\u4F5C\uFF0C\u4E0E <code>n</code> \u64CD\u4F5C\u76F8\u53CD</li></ul><h3 id="\u7F16\u8F91\u6A21\u5F0F\u6309\u952E\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u6A21\u5F0F\u6309\u952E\u64CD\u4F5C" aria-hidden="true">#</a> \u7F16\u8F91\u6A21\u5F0F\u6309\u952E\u64CD\u4F5C</h3><h3 id="\u547D\u4EE4\u884C\u6A21\u5F0F\u6309\u952E\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C\u6A21\u5F0F\u6309\u952E\u64CD\u4F5C" aria-hidden="true">#</a> \u547D\u4EE4\u884C\u6A21\u5F0F\u6309\u952E\u64CD\u4F5C</h3>',32),m=[n];function E(h,s){return d(),o("div",null,m)}var A=e(r,[["render",E],["__file","vim.html.vue"]]);export{A as default};
