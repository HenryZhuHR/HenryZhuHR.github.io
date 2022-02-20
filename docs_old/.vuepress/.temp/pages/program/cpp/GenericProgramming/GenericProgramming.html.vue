<template><h1 id="【c-】泛型编程-genericprogramming" tabindex="-1"><a class="header-anchor" href="#【c-】泛型编程-genericprogramming" aria-hidden="true">#</a> 【C++】泛型编程(GenericProgramming)</h1>
<ul>
<li><a href="#c%E6%B3%9B%E5%9E%8B%E7%BC%96%E7%A8%8Bgenericprogramming">【C++】泛型编程(GenericProgramming)</a></li>
<li><a href="#%E5%87%BD%E6%95%B0%E6%A8%A1%E6%9D%BF">函数模板</a></li>
</ul>
<h1 id="函数模板" tabindex="-1"><a class="header-anchor" href="#函数模板" aria-hidden="true">#</a> 函数模板</h1>
<p>典型的<a href="https://github.com/HenryZhuHR/happy-Cpp/blob/master/app/generic_programming.cpp" target="_blank" rel="noopener noreferrer">交换模板<ExternalLinkIcon/></a></p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">></span> <span class="token comment">// or template &lt;class T></span>
<span class="token keyword">void</span> <span class="token function">Swap</span><span class="token punctuation">(</span>T<span class="token operator">&amp;</span> a<span class="token punctuation">,</span> T<span class="token operator">&amp;</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    T temp<span class="token punctuation">;</span>
    temp <span class="token operator">=</span> a<span class="token punctuation">;</span>
    a    <span class="token operator">=</span> b<span class="token punctuation">;</span>
    b    <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>关键字 <code>template</code> 表明要创建模板，<code>typename</code>/<code>class</code> 表面这是一个可以任意选择的符合C++命名规则的变量类型，并且用尖括号 <code>&lt;&gt;</code> 包括起来，尖括号内参数不一定全都要求是 <code>T</code> 类型，可以是确定的类型</p>
<blockquote>
<p>标准 C++98 加入关键字 <code>typename</code>之前，是使用 <code>class</code> 创建模板的。不考虑向后兼容，建议使用关键字 <code>typename</code></p>
</blockquote>
<p>+模板不创建任何函数，只是告知编译器如何定义函数，在编译阶段，会根据使用的参数类型来替换掉函数模板中的 <code>typename</code> ，因此实际的代码并不会减少</p>
</template>
