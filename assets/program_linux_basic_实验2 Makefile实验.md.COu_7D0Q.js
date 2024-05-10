import{_ as s,c as i,o as a,a2 as l}from"./chunks/framework.bdxXucLJ.js";const g=JSON.parse('{"title":"实验1 Makefile实验","description":"","frontmatter":{},"headers":[],"relativePath":"program/linux/basic/实验2 Makefile实验.md","filePath":"program/linux/basic/实验2 Makefile实验.md","lastUpdated":1715326410000}'),h={name:"program/linux/basic/实验2 Makefile实验.md"},n=l(`<h1 id="实验1-makefile实验" tabindex="-1">实验1 Makefile实验 <a class="header-anchor" href="#实验1-makefile实验" aria-label="Permalink to &quot;实验1 Makefile实验&quot;">​</a></h1><ul><li><a href="#实验1-makefile实验">实验1 Makefile实验</a></li><li><a href="#实验目的">实验目的</a></li><li><a href="#实验环境">实验环境</a></li><li><a href="#实验内容">实验内容</a><ul><li><a href="#1-使用命令编译程序">1 使用命令编译程序</a></li><li><a href="#2-使用预定义变量编译程序">2 使用预定义变量编译程序</a></li><li><a href="#3-使用预定义变量编译程序">3 使用预定义变量编译程序</a></li></ul></li></ul><h1 id="实验目的" tabindex="-1">实验目的 <a class="header-anchor" href="#实验目的" aria-label="Permalink to &quot;实验目的&quot;">​</a></h1><ol><li>了解makefile的概念和构成。</li><li>会使用GNU make编译一个或者多个文件。</li><li>掌握Makefile文件的编写。</li></ol><h1 id="实验环境" tabindex="-1">实验环境 <a class="header-anchor" href="#实验环境" aria-label="Permalink to &quot;实验环境&quot;">​</a></h1><p>选择其中一个环境做实验即可</p><ol><li>VMware虚拟机</li><li><a href="https://docs.microsoft.com/zh-cn/windows/wsl/install-win10" target="_blank" rel="noreferrer">Windows WLS2</a>(推荐)，可在<strong>Microsoft 应用商店</strong>中下载，并按照<a href="https://docs.microsoft.com/zh-cn/windows/wsl/install-win10" target="_blank" rel="noreferrer">官方教程</a>安装运行</li><li>MacOS，MacOS可运行大部分Unix命令，但是部分命令无法运行</li></ol><h1 id="实验内容" tabindex="-1">实验内容 <a class="header-anchor" href="#实验内容" aria-label="Permalink to &quot;实验内容&quot;">​</a></h1><h2 id="_1-使用命令编译程序" tabindex="-1">1 使用命令编译程序 <a class="header-anchor" href="#_1-使用命令编译程序" aria-label="Permalink to &quot;1 使用命令编译程序&quot;">​</a></h2><p>安装<code>make</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span></span></code></pre></div><p>创建文件<code>hello.c</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello.c</span></span></code></pre></div><p>写入以下内容</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>创建makefile文件</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> makefile</span></span></code></pre></div><p>写入以下内容</p><div class="language-makefile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">makefile</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># test for makefile</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CC = gcc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CFLAGS = </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: hello.o</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	$(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CFLAGS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hello.o -o hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello.o</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: hello.c</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	$(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CFLAGS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -c hello.c -o hello.o</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	rm -rf hello *.o</span></span></code></pre></div><p>在将上述Makefile文件与源文件hello.c保存到同一目录之后，就可以在命令行中输入“make”命令来编译整个项目了。</p><p>make在执行过程中，首先会查找到Makefile文件第一条规则中的目标，即上述文件中的all。根据设定好的规则，该目标需要依赖于hello。由于all并不是一个已经存在的文件，所以每次在make被调用的时候，显然都需要先检查hello。继续往下不难发现，hello目标是依赖于hello.o。当make处理到目标hello.o时，会先查看其对应的依赖对象,这个以来对象是hello.c，此时就会对hello.c进行编译，得到目标文件hello.o，然后是目标文件hello.o被连接，得到可执行文件hello。</p><p>利用make编译程序</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gcc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello.c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello.o</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  hello.o</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看生成的文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  hello.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  hello.o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  makefile</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 执行文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> world</span></span></code></pre></div><blockquote><p>上面的命令中，<code>$ make</code>表示需要执行的命令，其他没有<code>$ </code>则表示运行输出结果。之后的代码就按照这个方式进行表示</p></blockquote><p>在Makefile中，并不是所有的目标都对应于磁盘上的文件。有的目标存在只是为了形成一条规则，从而完成特定的工作，并不生成新的目标文件，这样的目标称为伪目标。它并不是真正意义上的目标文件，只是一个标签，为了满足Makefile的语法规则而存在的。 在已经给出的Makefile文件中，最后一个目标clean就是伪目标。它规定了make应该执行的命令。当make处理到目标clean时，会先查看其对应的依赖对象。由于clean没有任何依赖对象，所以make会认为该目标是最新的而不会执行任何操作。为了编译这个目标体，必须手工执行如下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  hello.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  hello.o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  makefile</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  makefile</span></span></code></pre></div><p>可以看到目标文件hello.o和可执行文件hello被清除。</p><h2 id="_2-使用预定义变量编译程序" tabindex="-1">2 使用预定义变量编译程序 <a class="header-anchor" href="#_2-使用预定义变量编译程序" aria-label="Permalink to &quot;2 使用预定义变量编译程序&quot;">​</a></h2><p>保持<code>hello.c</code>文件不变，修改<code>makefile</code>文件</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> makefile</span></span></code></pre></div><p>为</p><div class="language-makefile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">makefile</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># test for makefile</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CC = gcc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CFLAGS = </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">OBJS = hello.o</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: hello.o</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	$(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CFLAGS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -o </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$@</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello.o</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: hello.c</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	$(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CFLAGS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -c </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -o </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$@</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	rm -rf hello *.o</span></span></code></pre></div><p>命令中的<code>$&lt;</code>, <code>$^</code>和<code>$@</code>则是预定义变量，<code>$&lt;</code>表示当前的依赖目标文件（也就是<code>hello.c</code>），<code>$@</code>表示当前目标文件，<code>$^</code>表示所有的依赖文件。</p><p>利用make编译程序</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gcc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello.c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello.o</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  hello.o</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看生成的文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  hello.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  hello.o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  makefile</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 执行文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> world</span></span></code></pre></div><p>清理文件</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span></span></code></pre></div><h2 id="_3-使用预定义变量编译程序" tabindex="-1">3 使用预定义变量编译程序 <a class="header-anchor" href="#_3-使用预定义变量编译程序" aria-label="Permalink to &quot;3 使用预定义变量编译程序&quot;">​</a></h2><p>创建<code>hello1.c</code>写入</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span></code></pre></div>`,40),e=[n];function p(t,k,d,o,r,c){return a(),i("div",null,e)}const E=s(h,[["render",p]]);export{g as __pageData,E as default};
