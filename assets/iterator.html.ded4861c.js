import{b as a}from"./app.cdc06c7c.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=a(`<h1 id="\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55" aria-hidden="true">#</a> \u76EE\u5F55</h1><ul><li><a href="#%E7%9B%AE%E5%BD%95">\u76EE\u5F55</a></li><li><a href="#%E8%BF%AD%E4%BB%A3%E5%99%A8">\u8FED\u4EE3\u5668</a><ul><li><a href="#%E5%88%9B%E5%BB%BA%E8%BF%AD%E4%BB%A3%E5%99%A8-iter">\u521B\u5EFA\u8FED\u4EE3\u5668 <code>iter()</code></a></li><li><a href="#%E8%AE%BF%E9%97%AE%E8%BF%AD%E4%BB%A3%E5%99%A8">\u8BBF\u95EE\u8FED\u4EE3\u5668</a></li><li><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BF%AD%E4%BB%A3%E5%99%A8">\u81EA\u5B9A\u4E49\u8FED\u4EE3\u5668</a></li></ul></li><li><a href="#%E7%94%9F%E6%88%90%E5%99%A8">\u751F\u6210\u5668</a></li><li><a href="#%E5%8F%AF%E8%BF%AD%E4%BB%A3%E5%AF%B9%E8%B1%A1">\u53EF\u8FED\u4EE3\u5BF9\u8C61</a></li></ul><h1 id="\u8FED\u4EE3\u5668" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3\u5668" aria-hidden="true">#</a> \u8FED\u4EE3\u5668</h1><p>\u8FED\u4EE3\u5668(Iterator)\u662F\u7528\u4E8E\u8FED\u4EE3\u64CD\u4F5C\u7684\u5BF9\u8C61</p><p>\u8FED\u4EE3\u5668\u901A\u8FC7 <code>iter()</code> \u6765\u521B\u5EFA\u8FED\u4EE3\u5668\uFF0C\u5E76\u4E14\u901A\u8FC7 <code>next()</code> \u8FED\u4EE3\u8BBF\u95EE</p><h2 id="\u521B\u5EFA\u8FED\u4EE3\u5668-iter" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8FED\u4EE3\u5668-iter" aria-hidden="true">#</a> \u521B\u5EFA\u8FED\u4EE3\u5668 <code>iter()</code></h2><div class="language-python ext-py"><pre class="language-python"><code>str_ <span class="token operator">=</span> <span class="token string">&#39;Iterator&#39;</span>
iter_str <span class="token operator">=</span> <span class="token builtin">iter</span> <span class="token punctuation">(</span>str_<span class="token punctuation">)</span>
</code></pre></div><p>\u67E5\u770B\u5176\u7C7B\u578B</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>iter_str<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u8FED\u4EE3\u5668\u7C7B\u578B</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;str_iterator&#39;</span><span class="token operator">&gt;</span>
</code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <code>for</code> \u5FAA\u73AF\u6765\u904D\u5386\u8FD9\u4E2A\u8FED\u4EE3\u5668</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">for</span> c <span class="token keyword">in</span> iter_str<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8F93\u51FA</p><div class="language-bash ext-sh"><pre class="language-bash"><code>I t e r a t o r
</code></pre></div><h2 id="\u8BBF\u95EE\u8FED\u4EE3\u5668" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u8FED\u4EE3\u5668" aria-hidden="true">#</a> \u8BBF\u95EE\u8FED\u4EE3\u5668</h2><p>\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u5217\u8868\u8FED\u4EE3\u5668</p><div class="language-python ext-py"><pre class="language-python"><code>list_ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
iter_list <span class="token operator">=</span> <span class="token builtin">iter</span> <span class="token punctuation">(</span>list_<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>iter_list<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8F93\u51FA\u4E3A</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;list_iterator&#39;</span><span class="token operator">&gt;</span>
</code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <code>next()</code> \u5FAA\u73AF\u6765\u904D\u5386\u8FD9\u4E2A\u8FED\u4EE3\u5668\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u65B9\u6CD5\u7684\u8FED\u4EE3\u65B9\u5411\u662F\u5355\u5411\u7684</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>iter_list<span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> StopIteration<span class="token punctuation">:</span>
        <span class="token keyword">break</span>
</code></pre></div><p>\u8F93\u51FA\u4E3A</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>
</code></pre></div><p><code>StopIteration</code> \u662F\u4E00\u4E2A\u7528\u4E8E\u6807\u8BC6\u5B8C\u6210\u8FED\u4EE3\u7684\u5F02\u5E38\uFF0C\u5F53\u5B8C\u6210\u5168\u90E8\u5143\u7D20\u7684\u904D\u5386\u4E4B\u540E\uFF0C\u4F1A\u629B\u51FA\u8BE5\u5F02\u5E38</p><h2 id="\u81EA\u5B9A\u4E49\u8FED\u4EE3\u5668" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u8FED\u4EE3\u5668" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u8FED\u4EE3\u5668</h2><p>\u81EA\u5B9A\u4E49\u4E00\u4E2A\u8FED\u4EE3\u5668\uFF0C\u5FC5\u987B\u5B9E\u73B0 <code>__iter__</code> \u548C <code>next()</code> \u65B9\u6CD5\u3002</p><h1 id="\u751F\u6210\u5668" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u5668" aria-hidden="true">#</a> \u751F\u6210\u5668</h1><h1 id="\u53EF\u8FED\u4EE3\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u53EF\u8FED\u4EE3\u5BF9\u8C61" aria-hidden="true">#</a> \u53EF\u8FED\u4EE3\u5BF9\u8C61</h1><p>\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u5B9E\u73B0\u4E86 <code>__iter__</code> \u65B9\u6CD5\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5BF9\u8C61\u5C31\u662F\u4E00\u4E2A\u53EF\u8FED\u4EE3\u5BF9\u8C61</p>`,30);function p(t,o){return e}var l=n(s,[["render",p]]);export{l as default};
