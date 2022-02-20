<template><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h1>
<ul>
<li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li>
<li><a href="#%E8%BF%AD%E4%BB%A3%E5%99%A8">迭代器</a>
<ul>
<li><a href="#%E5%88%9B%E5%BB%BA%E8%BF%AD%E4%BB%A3%E5%99%A8-iter">创建迭代器 <code>iter()</code></a></li>
<li><a href="#%E8%AE%BF%E9%97%AE%E8%BF%AD%E4%BB%A3%E5%99%A8">访问迭代器</a></li>
<li><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BF%AD%E4%BB%A3%E5%99%A8">自定义迭代器</a></li>
</ul>
</li>
<li><a href="#%E7%94%9F%E6%88%90%E5%99%A8">生成器</a></li>
<li><a href="#%E5%8F%AF%E8%BF%AD%E4%BB%A3%E5%AF%B9%E8%B1%A1">可迭代对象</a></li>
</ul>
<!-- https://zhuanlan.zhihu.com/p/82787357 -->
<h1 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器</h1>
<p>迭代器(Iterator)是用于迭代操作的对象</p>
<p>迭代器通过 <code>iter()</code> 来创建迭代器，并且通过 <code>next()</code> 迭代访问</p>
<h2 id="创建迭代器-iter" tabindex="-1"><a class="header-anchor" href="#创建迭代器-iter" aria-hidden="true">#</a> 创建迭代器 <code>iter()</code></h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>str_ <span class="token operator">=</span> <span class="token string">'Iterator'</span>
iter_str <span class="token operator">=</span> <span class="token builtin">iter</span> <span class="token punctuation">(</span>str_<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>查看其类型</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>iter_str<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>可以看到是一个字符串迭代器类型</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'str_iterator'</span><span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>我们可以通过 <code>for</code> 循环来遍历这个迭代器</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">for</span> c <span class="token keyword">in</span> iter_str<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">' '</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>I t e r a t o r
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="访问迭代器" tabindex="-1"><a class="header-anchor" href="#访问迭代器" aria-hidden="true">#</a> 访问迭代器</h2>
<p>我们创建一个列表迭代器</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>list_ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
iter_list <span class="token operator">=</span> <span class="token builtin">iter</span> <span class="token punctuation">(</span>list_<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>iter_list<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>输出为</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'list_iterator'</span><span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>我们可以通过 <code>next()</code> 循环来遍历这个迭代器，并且这个方法的迭代方向是单向的</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>iter_list<span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">' '</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> StopIteration<span class="token punctuation">:</span>
        <span class="token keyword">break</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>输出为</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>StopIteration</code> 是一个用于标识完成迭代的异常，当完成全部元素的遍历之后，会抛出该异常</p>
<h2 id="自定义迭代器" tabindex="-1"><a class="header-anchor" href="#自定义迭代器" aria-hidden="true">#</a> 自定义迭代器</h2>
<p>自定义一个迭代器，必须实现 <code>__iter__</code> 和 <code>next()</code> 方法。</p>
<h1 id="生成器" tabindex="-1"><a class="header-anchor" href="#生成器" aria-hidden="true">#</a> 生成器</h1>
<h1 id="可迭代对象" tabindex="-1"><a class="header-anchor" href="#可迭代对象" aria-hidden="true">#</a> 可迭代对象</h1>
<p>如果一个对象实现了 <code>__iter__</code> 方法，那么这个对象就是一个可迭代对象</p>
</template>
