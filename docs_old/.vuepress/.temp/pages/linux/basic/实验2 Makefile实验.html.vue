<template><h1 id="实验1-makefile实验" tabindex="-1"><a class="header-anchor" href="#实验1-makefile实验" aria-hidden="true">#</a> 实验1 Makefile实验</h1>
<ul>
<li><a href="#%E5%AE%9E%E9%AA%8C1-makefile%E5%AE%9E%E9%AA%8C">实验1 Makefile实验</a></li>
<li><a href="#%E5%AE%9E%E9%AA%8C%E7%9B%AE%E7%9A%84">实验目的</a></li>
<li><a href="#%E5%AE%9E%E9%AA%8C%E7%8E%AF%E5%A2%83">实验环境</a></li>
<li><a href="#%E5%AE%9E%E9%AA%8C%E5%86%85%E5%AE%B9">实验内容</a>
<ul>
<li><a href="#1-%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4%E7%BC%96%E8%AF%91%E7%A8%8B%E5%BA%8F">1 使用命令编译程序</a></li>
<li><a href="#2-%E4%BD%BF%E7%94%A8%E9%A2%84%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F%E7%BC%96%E8%AF%91%E7%A8%8B%E5%BA%8F">2 使用预定义变量编译程序</a></li>
<li><a href="#3-%E4%BD%BF%E7%94%A8%E9%A2%84%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F%E7%BC%96%E8%AF%91%E7%A8%8B%E5%BA%8F">3 使用预定义变量编译程序</a></li>
</ul>
</li>
</ul>
<h1 id="实验目的" tabindex="-1"><a class="header-anchor" href="#实验目的" aria-hidden="true">#</a> 实验目的</h1>
<ol>
<li>了解makefile的概念和构成。</li>
<li>会使用GNU make编译一个或者多个文件。</li>
<li>掌握Makefile文件的编写。</li>
</ol>
<h1 id="实验环境" tabindex="-1"><a class="header-anchor" href="#实验环境" aria-hidden="true">#</a> 实验环境</h1>
<p>选择其中一个环境做实验即可</p>
<ol>
<li>VMware虚拟机</li>
<li><a href="https://docs.microsoft.com/zh-cn/windows/wsl/install-win10" target="_blank" rel="noopener noreferrer">Windows WLS2<ExternalLinkIcon/></a>(推荐)，可在<strong>Microsoft 应用商店</strong>中下载，并按照<a href="https://docs.microsoft.com/zh-cn/windows/wsl/install-win10" target="_blank" rel="noopener noreferrer">官方教程<ExternalLinkIcon/></a>安装运行</li>
<li>MacOS，MacOS可运行大部分Unix命令，但是部分命令无法运行</li>
</ol>
<h1 id="实验内容" tabindex="-1"><a class="header-anchor" href="#实验内容" aria-hidden="true">#</a> 实验内容</h1>
<h2 id="_1-使用命令编译程序" tabindex="-1"><a class="header-anchor" href="#_1-使用命令编译程序" aria-hidden="true">#</a> 1 使用命令编译程序</h2>
<p>安装<code>make</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">make</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>创建文件<code>hello.c</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vi</span> hello.c
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>写入以下内容</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"hello world\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>创建makefile文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vi</span> makefile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>写入以下内容</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token comment"># test for makefile</span>
CC <span class="token operator">=</span> gcc
CFLAGS <span class="token operator">=</span> 
<span class="token symbol">all</span> <span class="token punctuation">:</span> hello
<span class="token symbol">hello</span><span class="token punctuation">:</span> hello.o
	<span class="token variable">$</span><span class="token punctuation">(</span>CC<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>CFLAGS<span class="token punctuation">)</span> hello.o -o hello
<span class="token symbol">hello.o</span><span class="token punctuation">:</span> hello.c
	<span class="token variable">$</span><span class="token punctuation">(</span>CC<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>CFLAGS<span class="token punctuation">)</span> -c hello.c -o hello.o
<span class="token symbol">clean</span><span class="token punctuation">:</span>
	rm -rf hello *.o
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>在将上述Makefile文件与源文件hello.c保存到同一目录之后，就可以在命令行中输入“make”命令来编译整个项目了。</p>
<p>make在执行过程中，首先会查找到Makefile文件第一条规则中的目标，即上述文件中的all。根据设定好的规则，该目标需要依赖于hello。由于all并不是一个已经存在的文件，所以每次在make被调用的时候，显然都需要先检查hello。继续往下不难发现，hello目标是依赖于hello.o。当make处理到目标hello.o时，会先查看其对应的依赖对象,这个以来对象是hello.c，此时就会对hello.c进行编译，得到目标文件hello.o，然后是目标文件hello.o被连接，得到可执行文件hello。</p>
<p>利用make编译程序</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span>
gcc  -c hello.c -o hello.o
gcc  hello.o -o hello
<span class="token comment"># 查看生成的文件</span>
$ <span class="token function">ls</span>
hello  hello.c  hello.o  makefile
<span class="token comment"># 执行文件</span>
$ ./hello
hello world
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote>
<p>上面的命令中，<code>$ make</code>表示需要执行的命令，其他没有<code>$ </code>则表示运行输出结果。之后的代码就按照这个方式进行表示</p>
</blockquote>
<p>在Makefile中，并不是所有的目标都对应于磁盘上的文件。有的目标存在只是为了形成一条规则，从而完成特定的工作，并不生成新的目标文件，这样的目标称为伪目标。它并不是真正意义上的目标文件，只是一个标签，为了满足Makefile的语法规则而存在的。
在已经给出的Makefile文件中，最后一个目标clean就是伪目标。它规定了make应该执行的命令。当make处理到目标clean时，会先查看其对应的依赖对象。由于clean没有任何依赖对象，所以make会认为该目标是最新的而不会执行任何操作。为了编译这个目标体，必须手工执行如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">ls</span>
hello  hello.c  hello.o  makefile
$ <span class="token function">make</span> clean
$ <span class="token function">ls</span>
hello.c  makefile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>可以看到目标文件hello.o和可执行文件hello被清除。</p>
<h2 id="_2-使用预定义变量编译程序" tabindex="-1"><a class="header-anchor" href="#_2-使用预定义变量编译程序" aria-hidden="true">#</a> 2 使用预定义变量编译程序</h2>
<p>保持<code>hello.c</code>文件不变，修改<code>makefile</code>文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vi</span> makefile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>为</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token comment"># test for makefile</span>
CC <span class="token operator">=</span> gcc
CFLAGS <span class="token operator">=</span> 
OBJS <span class="token operator">=</span> hello.o
<span class="token symbol">all</span> <span class="token punctuation">:</span> hello
<span class="token symbol">hello</span><span class="token punctuation">:</span> hello.o
	<span class="token variable">$</span><span class="token punctuation">(</span>CC<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>CFLAGS<span class="token punctuation">)</span> <span class="token variable">$^</span> -o <span class="token variable">$@</span>
<span class="token symbol">hello.o</span><span class="token punctuation">:</span> hello.c
	<span class="token variable">$</span><span class="token punctuation">(</span>CC<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>CFLAGS<span class="token punctuation">)</span> -c <span class="token variable">$&lt;</span> -o <span class="token variable">$@</span>
<span class="token symbol">clean</span><span class="token punctuation">:</span>
	rm -rf hello *.o
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>命令中的<code>$&lt;</code>, <code>$^</code>和<code>$@</code>则是预定义变量，<code>$&lt;</code>表示当前的依赖目标文件（也就是<code>hello.c</code>），<code>$@</code>表示当前目标文件，<code>$^</code>表示所有的依赖文件。</p>
<p>利用make编译程序</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span>
gcc  -c hello.c -o hello.o
gcc  hello.o -o hello
<span class="token comment"># 查看生成的文件</span>
$ <span class="token function">ls</span>
hello  hello.c  hello.o  makefile
<span class="token comment"># 执行文件</span>
$ ./hello
hello world
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>清理文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">make</span> clean
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_3-使用预定义变量编译程序" tabindex="-1"><a class="header-anchor" href="#_3-使用预定义变量编译程序" aria-hidden="true">#</a> 3 使用预定义变量编译程序</h2>
<p>创建<code>hello1.c</code>写入</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
