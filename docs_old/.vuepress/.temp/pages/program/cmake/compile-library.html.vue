<template><h1 id="【cmake】编译和链接静态库和动态库" tabindex="-1"><a class="header-anchor" href="#【cmake】编译和链接静态库和动态库" aria-hidden="true">#</a> 【CMake】编译和链接静态库和动态库</h1>
<ul>
<li><a href="#cmake%E7%BC%96%E8%AF%91%E5%92%8C%E9%93%BE%E6%8E%A5%E9%9D%99%E6%80%81%E5%BA%93%E5%92%8C%E5%8A%A8%E6%80%81%E5%BA%93">【CMake】编译和链接静态库和动态库</a></li>
<li><a href="#%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84">项目结构</a></li>
<li><a href="#%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86">工作原理</a>
<ul>
<li><a href="#%E9%85%8D%E7%BD%AE%E9%A1%B9%E7%9B%AE">配置项目</a></li>
<li><a href="#%E7%BC%96%E8%AF%91%E5%BA%93">编译库</a></li>
</ul>
</li>
</ul>
<h1 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">.</span>
├─include
│  └─myClass.h
├─src
│  ├─CMakeLists.txt
│  └─myClass.cpp
└─CMakeLists.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h1 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h1>
<h2 id="配置项目" tabindex="-1"><a class="header-anchor" href="#配置项目" aria-hidden="true">#</a> 配置项目</h2>
<p>在当前目录下的 <code>CMakeLists.txt</code> 为整个项目做一些基本配置，包括项目所需CMake最低版本、项目名称、编译器等</p>
<div class="language-cmake ext-cmake line-numbers-mode"><pre v-pre class="language-cmake"><code><span class="token comment"># ./CMakeLists.txt</span>
<span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.10</span><span class="token punctuation">)</span>
<span class="token keyword">project</span><span class="token punctuation">(</span>Compile_Library<span class="token punctuation">)</span>
<span class="token keyword">add_subdirectory</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p><code>myClass.h</code> 和 <code>myClass.cpp</code> 随便写一个类就行</p>
</blockquote>
<h2 id="编译库" tabindex="-1"><a class="header-anchor" href="#编译库" aria-hidden="true">#</a> 编译库</h2>
<p>命令 <code>add_library(&lt;lib_name&gt; STATIC &lt;file&gt;.h &lt;file&gt;.cpp)</code> 用于将指定的源码编译成库</p>
<ul>
<li><code>&lt;lib_name&gt;</code> 是生成的库名，该库名可以看成一个变量，可以在其他地方通过库名进行引用</li>
<li>第二个参数 <code>STATIC</code> 可以设置生成的库的类型
<ul>
<li><strong>动态库</strong>为 <code>SHARED</code></li>
<li><strong>静态库</strong>为 <code>STATIC</code></li>
</ul>
</li>
<li>剩下的参数是需要编译进库的源码</li>
</ul>
<p>在 <code>src/CMakeLists.txt</code> 中我们可以看到编译 <code>myClass</code> 为一个库</p>
<div class="language-cmake ext-cmake line-numbers-mode"><pre v-pre class="language-cmake"><code><span class="token comment"># ./src/CMakeLists.txt</span>
<span class="token keyword">aux_source_directory</span><span class="token punctuation">(</span>.  myLib<span class="token punctuation">)</span>
<span class="token keyword">include_directories</span><span class="token punctuation">(</span><span class="token punctuation">${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/include<span class="token punctuation">)</span>

<span class="token comment"># ------ dynamic-link-library ------</span>
<span class="token keyword">add_library</span><span class="token punctuation">(</span>myLib_shared <span class="token namespace">SHARED</span> <span class="token punctuation">${</span>myLib<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">LIBRARY_OUTPUT_PATH</span> <span class="token punctuation">${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/bin<span class="token punctuation">)</span>

<span class="token comment"># ------ static-link-library ------</span>
<span class="token keyword">add_library</span><span class="token punctuation">(</span>myLib <span class="token namespace">STATIC</span> <span class="token punctuation">${</span>myLib<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">LIBRARY_OUTPUT_PATH</span> <span class="token punctuation">${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/lib<span class="token punctuation">)</span>

<span class="token comment"># -- link other 3rd-party lib to this lib if need</span>
<span class="token comment"># target_link_libraries(myLib &lt;>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>当代码有多个源代码之后，为了方便，我们将全部源代码添加到一个变量下。例如将 <code>src</code> 目录下的全部源码添加到变量 <code>myLib</code>内</p>
<div class="language-cmake ext-cmake line-numbers-mode"><pre v-pre class="language-cmake"><code><span class="token keyword">aux_source_directory</span><span class="token punctuation">(</span>.  myLib_src<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>同时设置源码所对应的头文件所在目录，使得编译的时候可以正确地找到头文件</p>
<div class="language-cmake ext-cmake line-numbers-mode"><pre v-pre class="language-cmake"><code><span class="token keyword">include_directories</span><span class="token punctuation">(</span><span class="token punctuation">${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/include<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>接下来就可以编译库了，我们以编译动态库为例</p>
<div class="language-cmake ext-cmake line-numbers-mode"><pre v-pre class="language-cmake"><code><span class="token keyword">add_library</span><span class="token punctuation">(</span>myLib_shared <span class="token namespace">SHARED</span> <span class="token punctuation">${</span>myLib_src<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>并且我们设置库的输出目录</p>
<div class="language-cmake ext-cmake line-numbers-mode"><pre v-pre class="language-cmake"><code><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">LIBRARY_OUTPUT_PATH</span> <span class="token punctuation">${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/bin<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果当前的库还使用了一些第三方库（例如OpenCV），需要链接到当前的库，需要通过 <code>target_link_libraries</code> 链接；如果链接多个库，以空格分开即可</p>
<div class="language-cmake ext-cmake line-numbers-mode"><pre v-pre class="language-cmake"><code><span class="token keyword">target_link_libraries</span><span class="token punctuation">(</span>myLib &lt;other_libaray<span class="token punctuation">></span> [&lt;other_libaray_2<span class="token punctuation">></span>]<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
