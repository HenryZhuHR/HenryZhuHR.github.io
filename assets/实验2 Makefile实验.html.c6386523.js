import{_ as a,o as n,c as e,a as s}from"./app.e2a6bb87.js";const l={},i=s(`<h1 id="\u5B9E\u9A8C1-makefile\u5B9E\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C1-makefile\u5B9E\u9A8C" aria-hidden="true">#</a> \u5B9E\u9A8C1 Makefile\u5B9E\u9A8C</h1><ul><li><a href="#%E5%AE%9E%E9%AA%8C1-makefile%E5%AE%9E%E9%AA%8C">\u5B9E\u9A8C1 Makefile\u5B9E\u9A8C</a></li><li><a href="#%E5%AE%9E%E9%AA%8C%E7%9B%AE%E7%9A%84">\u5B9E\u9A8C\u76EE\u7684</a></li><li><a href="#%E5%AE%9E%E9%AA%8C%E7%8E%AF%E5%A2%83">\u5B9E\u9A8C\u73AF\u5883</a></li><li><a href="#%E5%AE%9E%E9%AA%8C%E5%86%85%E5%AE%B9">\u5B9E\u9A8C\u5185\u5BB9</a><ul><li><a href="#1-%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4%E7%BC%96%E8%AF%91%E7%A8%8B%E5%BA%8F">1 \u4F7F\u7528\u547D\u4EE4\u7F16\u8BD1\u7A0B\u5E8F</a></li><li><a href="#2-%E4%BD%BF%E7%94%A8%E9%A2%84%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F%E7%BC%96%E8%AF%91%E7%A8%8B%E5%BA%8F">2 \u4F7F\u7528\u9884\u5B9A\u4E49\u53D8\u91CF\u7F16\u8BD1\u7A0B\u5E8F</a></li><li><a href="#3-%E4%BD%BF%E7%94%A8%E9%A2%84%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F%E7%BC%96%E8%AF%91%E7%A8%8B%E5%BA%8F">3 \u4F7F\u7528\u9884\u5B9A\u4E49\u53D8\u91CF\u7F16\u8BD1\u7A0B\u5E8F</a></li></ul></li></ul><h1 id="\u5B9E\u9A8C\u76EE\u7684" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C\u76EE\u7684" aria-hidden="true">#</a> \u5B9E\u9A8C\u76EE\u7684</h1><ol><li>\u4E86\u89E3makefile\u7684\u6982\u5FF5\u548C\u6784\u6210\u3002</li><li>\u4F1A\u4F7F\u7528GNU make\u7F16\u8BD1\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u6587\u4EF6\u3002</li><li>\u638C\u63E1Makefile\u6587\u4EF6\u7684\u7F16\u5199\u3002</li></ol><h1 id="\u5B9E\u9A8C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C\u73AF\u5883" aria-hidden="true">#</a> \u5B9E\u9A8C\u73AF\u5883</h1><p>\u9009\u62E9\u5176\u4E2D\u4E00\u4E2A\u73AF\u5883\u505A\u5B9E\u9A8C\u5373\u53EF</p><ol><li>VMware\u865A\u62DF\u673A</li><li><a href="https://docs.microsoft.com/zh-cn/windows/wsl/install-win10" target="_blank" rel="noopener noreferrer">Windows WLS2</a>(\u63A8\u8350)\uFF0C\u53EF\u5728<strong>Microsoft \u5E94\u7528\u5546\u5E97</strong>\u4E2D\u4E0B\u8F7D\uFF0C\u5E76\u6309\u7167<a href="https://docs.microsoft.com/zh-cn/windows/wsl/install-win10" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6559\u7A0B</a>\u5B89\u88C5\u8FD0\u884C</li><li>MacOS\uFF0CMacOS\u53EF\u8FD0\u884C\u5927\u90E8\u5206Unix\u547D\u4EE4\uFF0C\u4F46\u662F\u90E8\u5206\u547D\u4EE4\u65E0\u6CD5\u8FD0\u884C</li></ol><h1 id="\u5B9E\u9A8C\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C\u5185\u5BB9" aria-hidden="true">#</a> \u5B9E\u9A8C\u5185\u5BB9</h1><h2 id="_1-\u4F7F\u7528\u547D\u4EE4\u7F16\u8BD1\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528\u547D\u4EE4\u7F16\u8BD1\u7A0B\u5E8F" aria-hidden="true">#</a> 1 \u4F7F\u7528\u547D\u4EE4\u7F16\u8BD1\u7A0B\u5E8F</h2><p>\u5B89\u88C5<code>make</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u521B\u5EFA\u6587\u4EF6<code>hello.c</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> hello.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;hello world\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFAmakefile\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> makefile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9</p><div class="language-makefile ext-makefile line-numbers-mode"><pre class="language-makefile"><code><span class="token comment"># test for makefile</span>
CC <span class="token operator">=</span> gcc
CFLAGS <span class="token operator">=</span> 
<span class="token target symbol">all</span> <span class="token punctuation">:</span> hello
<span class="token target symbol">hello</span><span class="token punctuation">:</span> hello.o
	<span class="token variable">$</span><span class="token punctuation">(</span>CC<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>CFLAGS<span class="token punctuation">)</span> hello.o -o hello
<span class="token target symbol">hello.o</span><span class="token punctuation">:</span> hello.c
	<span class="token variable">$</span><span class="token punctuation">(</span>CC<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>CFLAGS<span class="token punctuation">)</span> -c hello.c -o hello.o
<span class="token target symbol">clean</span><span class="token punctuation">:</span>
	rm -rf hello *.o
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u5C06\u4E0A\u8FF0Makefile\u6587\u4EF6\u4E0E\u6E90\u6587\u4EF6hello.c\u4FDD\u5B58\u5230\u540C\u4E00\u76EE\u5F55\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E2D\u8F93\u5165\u201Cmake\u201D\u547D\u4EE4\u6765\u7F16\u8BD1\u6574\u4E2A\u9879\u76EE\u4E86\u3002</p><p>make\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u9996\u5148\u4F1A\u67E5\u627E\u5230Makefile\u6587\u4EF6\u7B2C\u4E00\u6761\u89C4\u5219\u4E2D\u7684\u76EE\u6807\uFF0C\u5373\u4E0A\u8FF0\u6587\u4EF6\u4E2D\u7684all\u3002\u6839\u636E\u8BBE\u5B9A\u597D\u7684\u89C4\u5219\uFF0C\u8BE5\u76EE\u6807\u9700\u8981\u4F9D\u8D56\u4E8Ehello\u3002\u7531\u4E8Eall\u5E76\u4E0D\u662F\u4E00\u4E2A\u5DF2\u7ECF\u5B58\u5728\u7684\u6587\u4EF6\uFF0C\u6240\u4EE5\u6BCF\u6B21\u5728make\u88AB\u8C03\u7528\u7684\u65F6\u5019\uFF0C\u663E\u7136\u90FD\u9700\u8981\u5148\u68C0\u67E5hello\u3002\u7EE7\u7EED\u5F80\u4E0B\u4E0D\u96BE\u53D1\u73B0\uFF0Chello\u76EE\u6807\u662F\u4F9D\u8D56\u4E8Ehello.o\u3002\u5F53make\u5904\u7406\u5230\u76EE\u6807hello.o\u65F6\uFF0C\u4F1A\u5148\u67E5\u770B\u5176\u5BF9\u5E94\u7684\u4F9D\u8D56\u5BF9\u8C61,\u8FD9\u4E2A\u4EE5\u6765\u5BF9\u8C61\u662Fhello.c\uFF0C\u6B64\u65F6\u5C31\u4F1A\u5BF9hello.c\u8FDB\u884C\u7F16\u8BD1\uFF0C\u5F97\u5230\u76EE\u6807\u6587\u4EF6hello.o\uFF0C\u7136\u540E\u662F\u76EE\u6807\u6587\u4EF6hello.o\u88AB\u8FDE\u63A5\uFF0C\u5F97\u5230\u53EF\u6267\u884C\u6587\u4EF6hello\u3002</p><p>\u5229\u7528make\u7F16\u8BD1\u7A0B\u5E8F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">make</span>
gcc  <span class="token parameter variable">-c</span> hello.c <span class="token parameter variable">-o</span> hello.o
gcc  hello.o <span class="token parameter variable">-o</span> hello
<span class="token comment"># \u67E5\u770B\u751F\u6210\u7684\u6587\u4EF6</span>
$ <span class="token function">ls</span>
hello  hello.c  hello.o  makefile
<span class="token comment"># \u6267\u884C\u6587\u4EF6</span>
$ ./hello
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E0A\u9762\u7684\u547D\u4EE4\u4E2D\uFF0C<code>$ make</code>\u8868\u793A\u9700\u8981\u6267\u884C\u7684\u547D\u4EE4\uFF0C\u5176\u4ED6\u6CA1\u6709<code>$ </code>\u5219\u8868\u793A\u8FD0\u884C\u8F93\u51FA\u7ED3\u679C\u3002\u4E4B\u540E\u7684\u4EE3\u7801\u5C31\u6309\u7167\u8FD9\u4E2A\u65B9\u5F0F\u8FDB\u884C\u8868\u793A</p></blockquote><p>\u5728Makefile\u4E2D\uFF0C\u5E76\u4E0D\u662F\u6240\u6709\u7684\u76EE\u6807\u90FD\u5BF9\u5E94\u4E8E\u78C1\u76D8\u4E0A\u7684\u6587\u4EF6\u3002\u6709\u7684\u76EE\u6807\u5B58\u5728\u53EA\u662F\u4E3A\u4E86\u5F62\u6210\u4E00\u6761\u89C4\u5219\uFF0C\u4ECE\u800C\u5B8C\u6210\u7279\u5B9A\u7684\u5DE5\u4F5C\uFF0C\u5E76\u4E0D\u751F\u6210\u65B0\u7684\u76EE\u6807\u6587\u4EF6\uFF0C\u8FD9\u6837\u7684\u76EE\u6807\u79F0\u4E3A\u4F2A\u76EE\u6807\u3002\u5B83\u5E76\u4E0D\u662F\u771F\u6B63\u610F\u4E49\u4E0A\u7684\u76EE\u6807\u6587\u4EF6\uFF0C\u53EA\u662F\u4E00\u4E2A\u6807\u7B7E\uFF0C\u4E3A\u4E86\u6EE1\u8DB3Makefile\u7684\u8BED\u6CD5\u89C4\u5219\u800C\u5B58\u5728\u7684\u3002 \u5728\u5DF2\u7ECF\u7ED9\u51FA\u7684Makefile\u6587\u4EF6\u4E2D\uFF0C\u6700\u540E\u4E00\u4E2A\u76EE\u6807clean\u5C31\u662F\u4F2A\u76EE\u6807\u3002\u5B83\u89C4\u5B9A\u4E86make\u5E94\u8BE5\u6267\u884C\u7684\u547D\u4EE4\u3002\u5F53make\u5904\u7406\u5230\u76EE\u6807clean\u65F6\uFF0C\u4F1A\u5148\u67E5\u770B\u5176\u5BF9\u5E94\u7684\u4F9D\u8D56\u5BF9\u8C61\u3002\u7531\u4E8Eclean\u6CA1\u6709\u4EFB\u4F55\u4F9D\u8D56\u5BF9\u8C61\uFF0C\u6240\u4EE5make\u4F1A\u8BA4\u4E3A\u8BE5\u76EE\u6807\u662F\u6700\u65B0\u7684\u800C\u4E0D\u4F1A\u6267\u884C\u4EFB\u4F55\u64CD\u4F5C\u3002\u4E3A\u4E86\u7F16\u8BD1\u8FD9\u4E2A\u76EE\u6807\u4F53\uFF0C\u5FC5\u987B\u624B\u5DE5\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ls</span>
hello  hello.c  hello.o  makefile
$ <span class="token function">make</span> clean
$ <span class="token function">ls</span>
hello.c  makefile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u76EE\u6807\u6587\u4EF6hello.o\u548C\u53EF\u6267\u884C\u6587\u4EF6hello\u88AB\u6E05\u9664\u3002</p><h2 id="_2-\u4F7F\u7528\u9884\u5B9A\u4E49\u53D8\u91CF\u7F16\u8BD1\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528\u9884\u5B9A\u4E49\u53D8\u91CF\u7F16\u8BD1\u7A0B\u5E8F" aria-hidden="true">#</a> 2 \u4F7F\u7528\u9884\u5B9A\u4E49\u53D8\u91CF\u7F16\u8BD1\u7A0B\u5E8F</h2><p>\u4FDD\u6301<code>hello.c</code>\u6587\u4EF6\u4E0D\u53D8\uFF0C\u4FEE\u6539<code>makefile</code>\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> makefile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E3A</p><div class="language-makefile ext-makefile line-numbers-mode"><pre class="language-makefile"><code><span class="token comment"># test for makefile</span>
CC <span class="token operator">=</span> gcc
CFLAGS <span class="token operator">=</span> 
OBJS <span class="token operator">=</span> hello.o
<span class="token target symbol">all</span> <span class="token punctuation">:</span> hello
<span class="token target symbol">hello</span><span class="token punctuation">:</span> hello.o
	<span class="token variable">$</span><span class="token punctuation">(</span>CC<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>CFLAGS<span class="token punctuation">)</span> <span class="token variable">$^</span> -o <span class="token variable">$@</span>
<span class="token target symbol">hello.o</span><span class="token punctuation">:</span> hello.c
	<span class="token variable">$</span><span class="token punctuation">(</span>CC<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>CFLAGS<span class="token punctuation">)</span> -c <span class="token variable">$&lt;</span> -o <span class="token variable">$@</span>
<span class="token target symbol">clean</span><span class="token punctuation">:</span>
	rm -rf hello *.o
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u547D\u4EE4\u4E2D\u7684<code>$&lt;</code>, <code>$^</code>\u548C<code>$@</code>\u5219\u662F\u9884\u5B9A\u4E49\u53D8\u91CF\uFF0C<code>$&lt;</code>\u8868\u793A\u5F53\u524D\u7684\u4F9D\u8D56\u76EE\u6807\u6587\u4EF6\uFF08\u4E5F\u5C31\u662F<code>hello.c</code>\uFF09\uFF0C<code>$@</code>\u8868\u793A\u5F53\u524D\u76EE\u6807\u6587\u4EF6\uFF0C<code>$^</code>\u8868\u793A\u6240\u6709\u7684\u4F9D\u8D56\u6587\u4EF6\u3002</p><p>\u5229\u7528make\u7F16\u8BD1\u7A0B\u5E8F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">make</span>
gcc  <span class="token parameter variable">-c</span> hello.c <span class="token parameter variable">-o</span> hello.o
gcc  hello.o <span class="token parameter variable">-o</span> hello
<span class="token comment"># \u67E5\u770B\u751F\u6210\u7684\u6587\u4EF6</span>
$ <span class="token function">ls</span>
hello  hello.c  hello.o  makefile
<span class="token comment"># \u6267\u884C\u6587\u4EF6</span>
$ ./hello
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6E05\u7406\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">make</span> clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-\u4F7F\u7528\u9884\u5B9A\u4E49\u53D8\u91CF\u7F16\u8BD1\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528\u9884\u5B9A\u4E49\u53D8\u91CF\u7F16\u8BD1\u7A0B\u5E8F" aria-hidden="true">#</a> 3 \u4F7F\u7528\u9884\u5B9A\u4E49\u53D8\u91CF\u7F16\u8BD1\u7A0B\u5E8F</h2><p>\u521B\u5EFA<code>hello1.c</code>\u5199\u5165</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,40),c=[i];function o(t,d){return n(),e("div",null,c)}var r=a(l,[["render",o],["__file","\u5B9E\u9A8C2 Makefile\u5B9E\u9A8C.html.vue"]]);export{r as default};
