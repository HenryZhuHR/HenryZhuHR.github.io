import{_ as n,o as s,c as e,b as a}from"./app.a1bc0b91.js";const t={},i=a(`<h1 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> VScode</h1><ul><li><a href="#vscode">VScode</a></li><li><a href="#download">Download</a></li><li><a href="#%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7">\u4F7F\u7528\u6280\u5DE7</a><ul><li><a href="#%E5%91%BD%E4%BB%A4%E9%9D%A2%E6%9D%BF">\u547D\u4EE4\u9762\u677F</a></li><li><a href="#%E5%91%BD%E4%BB%A4%E8%A1%8C">\u547D\u4EE4\u884C</a></li></ul></li><li><a href="#%E5%B7%A5%E4%BD%9C%E5%8C%BA%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">\u5DE5\u4F5C\u533A\u914D\u7F6E\u6587\u4EF6</a></li><li><a href="#%E7%94%A8%E6%88%B7%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5">\u7528\u6237\u4EE3\u7801\u7247\u6BB5</a></li></ul><h1 id="download" tabindex="-1"><a class="header-anchor" href="#download" aria-hidden="true">#</a> Download</h1><p><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VScode</a></p><h1 id="\u4F7F\u7528\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6280\u5DE7" aria-hidden="true">#</a> \u4F7F\u7528\u6280\u5DE7</h1><h2 id="\u547D\u4EE4\u9762\u677F" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u9762\u677F" aria-hidden="true">#</a> \u547D\u4EE4\u9762\u677F</h2><p>\u9876\u90E8\u83DC\u5355\u680F Keyboard Shortcut: <code>Ctrl+Shift+P</code><img src="https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/OpenCommandPalatte.gif" alt="Command Palette"></p><h2 id="\u547D\u4EE4\u884C" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C" aria-hidden="true">#</a> \u547D\u4EE4\u884C</h2><p>VS Code has a powerful command line interface (CLI) which allows you to customize how the editor is launched to support various scenarios.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># open code with current directory</span>
code <span class="token builtin class-name">.</span>

<span class="token comment"># open the current directory in the most recently used code window</span>
code <span class="token parameter variable">-r</span> <span class="token builtin class-name">.</span>

<span class="token comment"># create a new window</span>
code <span class="token parameter variable">-n</span>

<span class="token comment"># change the language</span>
code <span class="token parameter variable">--locale</span><span class="token operator">=</span>es

<span class="token comment"># open diff editor</span>
code <span class="token parameter variable">--diff</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>

<span class="token comment"># open file at specific line and column &lt;file:line[:character]&gt;</span>
code <span class="token parameter variable">--goto</span> package.json:10:5

<span class="token comment"># see help options</span>
code <span class="token parameter variable">--help</span>

<span class="token comment"># disable all extensions</span>
code --disable-extensions <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u5DE5\u4F5C\u533A\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C\u533A\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u5DE5\u4F5C\u533A\u914D\u7F6E\u6587\u4EF6</h1><h1 id="\u7528\u6237\u4EE3\u7801\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a> \u7528\u6237\u4EE3\u7801\u7247\u6BB5</h1><p>\u5DE6\u4E0B\u89D2\u9F7F\u8F6E\u53EF\u4EE5\u6253\u5F00\u7528\u6237\u4EE3\u7801\u7247\u6BB5\uFF0C\u4F60\u53EF\u4EE5\u4E3A\u6307\u5B9A\u8BED\u8A00\u914D\u7F6E\u4EE3\u7801\u7247\u6BB5\uFF0C\u4E5F\u53EF\u4EE5\u5168\u5C40\u914D\u7F6E</p><p>\u793A\u4F8B\u6587\u4EF6\u5DF2\u7ECF\u8BF4\u660E\u4E86\u5982\u4F55\u7F16\u5199\u4EE3\u7801\u7247\u6BB5(snippets)</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// Place your \u5168\u5C40 snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and </span>
<span class="token comment">// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope </span>
<span class="token comment">// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is </span>
<span class="token comment">// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: </span>
<span class="token comment">// $1, $2 for tab stops, $0 for the final cursor position, and \${1:label}, \${2:another} for placeholders. </span>
<span class="token comment">// Placeholders with the same ids are connected.</span>
<span class="token comment">// Example:</span>
<span class="token comment">// &quot;Print to console&quot;: {</span>
<span class="token comment">// 	&quot;scope&quot;: &quot;javascript,typescript&quot;,</span>
<span class="token comment">// 	&quot;prefix&quot;: &quot;log&quot;,</span>
<span class="token comment">// 	&quot;body&quot;: [</span>
<span class="token comment">// 		&quot;console.log(&#39;$1&#39;);&quot;,</span>
<span class="token comment">// 		&quot;$2&quot;</span>
<span class="token comment">// 	],</span>
<span class="token comment">// 	&quot;description&quot;: &quot;Log output to console&quot;</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u7684\u4EE3\u7801\u7247\u6BB5\u662F\u5FEB\u901F\u751F\u6210 C++ \u4E2D\u7684\u521D\u59CB\u4EE3\u7801\u6A21\u677F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  	<span class="token property">&quot;cpp_code_basic&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    	<span class="token property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cpp&quot;</span><span class="token punctuation">,</span>
    	<span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cppcode&quot;</span><span class="token punctuation">,</span>
    	<span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    		<span class="token string">&quot;#include&lt;iostream&gt;&quot;</span><span class="token punctuation">,</span>
    		<span class="token string">&quot;#include &lt;string&gt;&quot;</span><span class="token punctuation">,</span>
    		<span class="token string">&quot;using namespace std;&quot;</span><span class="token punctuation">,</span>            
    		<span class="token string">&quot;$1&quot;</span><span class="token punctuation">,</span>
    		<span class="token string">&quot;int main(void){&quot;</span><span class="token punctuation">,</span>
    		<span class="token string">&quot;\\t$0&quot;</span><span class="token punctuation">,</span>
    		<span class="token string">&quot;\\treturn 0;&quot;</span><span class="token punctuation">,</span>
    		<span class="token string">&quot;}&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    	<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cpp basic code&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>cpp_code_basic</code> \u662F\u8BE5\u7528\u6237\u7247\u6BB5\u7684\u540D\u5B57\uFF0C<code>scope</code> \u662F\u5F53\u524D\u7528\u6237\u7247\u6BB5\u6240\u9488\u5BF9\u7684\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u6307\u5B9A\u8BED\u8A00\u4E0B\u624D\u4F1A\u89E6\u53D1\u5F53\u524D\u7684\u7528\u6237\u7247\u6BB5\uFF0C<code>prefix</code> \u662F\u89E6\u53D1\u4EE3\u7801\u7247\u6BB5\u7684\u8BCD\uFF0C\u5F53\u8F93\u5165\u89E6\u53D1\u8BCD\u4E4B\u540E\uFF0C\u53EF\u4EE5\u81EA\u52A8\u8865\u5168\u51FA <code>body</code> \u5185\u7684\u4EE3\u7801\uFF0C<code>description</code> \u5219\u63CF\u8FF0\u4E86\u8BE5\u4EE3\u7801\u7247\u6BB5</p><p>\u5F53\u6211\u4EEC\u5728\u8F93\u5165 <code>cppcode</code> \u4F1A\u51FA\u73B0\u5F53\u524D\u4EE3\u7801\u7247\u6BB5\u7684\u63D0\u793A\uFF0C\u5C31\u53EF\u4EE5\u5FEB\u901F\u751F\u6210\u4EE3\u7801\uFF0C\u53EF\u4EE5\u7406\u89E3\u6210\u4E00\u79CD\u81EA\u5B9A\u4E49\u7684\u4EE3\u7801\u8865\u5168</p><p>\u5173\u952E\u662F <code>body</code> \u5185\u7684\u4EE3\u7801\u7247\u6BB5\u5982\u4F55\u7F16\u5199\uFF1A</p><p>\u5728 <code>body</code> \u8FD9\u4E2A\u6570\u7EC4\u5185\uFF0C\u6BCF\u4E00</p>`,21),o=[i];function c(l,p){return s(),e("div",null,o)}var r=n(t,[["render",c],["__file","vscode.html.vue"]]);export{r as default};
