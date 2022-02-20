<template><h1 id="【cmake】编译可执行文件" tabindex="-1"><a class="header-anchor" href="#【cmake】编译可执行文件" aria-hidden="true">#</a> 【CMake】编译可执行文件</h1>
<ul>
<li><a href="#cmake%E7%BC%96%E8%AF%91%E5%8F%AF%E6%89%A7%E8%A1%8C%E6%96%87%E4%BB%B6">【CMake】编译可执行文件</a></li>
<li><a href="#%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84">项目结构</a></li>
<li><a href="#%E9%85%8D%E7%BD%AE%E9%A1%B9%E7%9B%AE">配置项目</a></li>
<li><a href="#%E9%85%8D%E7%BD%AE%E7%BC%96%E8%AF%91%E5%8F%AF%E6%89%A7%E8%A1%8C%E6%96%87%E4%BB%B6">配置编译可执行文件</a></li>
<li><a href="#%E6%9E%84%E5%BB%BA%E9%A1%B9%E7%9B%AE%E5%92%8C%E7%94%9F%E6%88%90%E6%9E%84%E5%BB%BA%E5%99%A8">构建项目和生成构建器</a></li>
<li><a href="#%E7%BC%96%E8%AF%91%E9%A1%B9%E7%9B%AE">编译项目</a></li>
</ul>
<h1 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">.</span>
├─app
│  ├─CMakeLists.txt
<span class="token operator">|</span>  └─main.cpp
└─CMakeLists.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h1 id="配置项目" tabindex="-1"><a class="header-anchor" href="#配置项目" aria-hidden="true">#</a> 配置项目</h1>
<p>在当前目录下的 <code>CMakeLists.txt </code>为整个项目做一些基本配置，包括项目所需CMake最低版本、项目名称、编译器等，文件内容如下</p>
<div class="language-cmake ext-cmake line-numbers-mode"><pre v-pre class="language-cmake"><code><span class="token comment"># ./CMakeLists.txt</span>
<span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.5</span> FATAL_ERROR<span class="token punctuation">)</span>
<span class="token keyword">project</span><span class="token punctuation">(</span>Compile_Executable_File LANGUAGES CXX<span class="token punctuation">)</span>
<span class="token keyword">add_subdirectory</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>cmake_minimum_required</code> 规定构建当前项目的所需CMake的最低版本，当构建项目使用的CMake不满足做个最低版本要求，则会出现报错，添加 <code>FATAL_ERROR</code> 则在不满足条件的情况下产生致命报错</p>
<div class="language-cmake ext-cmake line-numbers-mode"><pre v-pre class="language-cmake"><code><span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.5</span><span class="token punctuation">)</span>
<span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.5</span> FATAL_ERROR<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>CMake语法不区分大小写（即 <code>cmake_minimum_required </code>与 <code>CMAKE_MINIMUN_REQUIRED</code> 是一样的），但是参数区分大小写的</p>
</blockquote>
<p><code>project</code> 声明项目名称(<code>Compile_Executable_File</code>)，同时也可以添加参数 <code>LANGUAGES</code> 来显式声明项目的编程语言</p>
<div class="language-cmake ext-cmake line-numbers-mode"><pre v-pre class="language-cmake"><code><span class="token keyword">project</span><span class="token punctuation">(</span>Compile_Executable_File<span class="token punctuation">)</span>
<span class="token keyword">project</span><span class="token punctuation">(</span>Compile_Executable_File LANGUAGES CXX<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>CXX代表C++，C++是CMake默认的编程语言</p>
</blockquote>
<p>完成对整个项目的基本配置，我们就可以添加子目录 <code>add_subdirectory</code> 来进行编译，我们添加子目录 <code>app</code> 来编译可执行文件</p>
<div class="language-cmake ext-cmake line-numbers-mode"><pre v-pre class="language-cmake"><code><span class="token keyword">add_subdirectory</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h1 id="配置编译可执行文件" tabindex="-1"><a class="header-anchor" href="#配置编译可执行文件" aria-hidden="true">#</a> 配置编译可执行文件</h1>
<p>在 <code>app/CMakeLists.txt</code> 配置编译可执行文件</p>
<p>设置可执行文件输出路径 <code>EXECUTABLE_OUTPUT_PATH</code> 为 <code>${PROJECT_SOURCE_DIR}/bin</code></p>
<div class="language-cmake ext-cmake line-numbers-mode"><pre v-pre class="language-cmake"><code><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">EXECUTABLE_OUTPUT_PATH</span> <span class="token punctuation">${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/bin<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p><code>PROJECT_SOURCE_DIR</code> 是一个默认的变量，这个变量是和根目录下的 <code>CMakeLists.txt</code> 相同目录，或者说是与包含了设置项目名称 <code>project()</code> 的 <code>CMakeLists.txt</code> 目录是相同的</p>
</blockquote>
<p><code>add_executable</code> 将通过编译源文件 <code>main.cpp</code> 来创建一个可执行文件 <code>compile-executable_file(.exe)</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>add_executable<span class="token punctuation">(</span>compile-executable_file main.cpp<span class="token punctuation">)</span>
add_executable<span class="token punctuation">(</span><span class="token variable">${PROJECT_NAME}</span> main.cpp<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>你也可以指定输出的名称为项目名称 <code>${PROJECT_NAME}</code> ，也就是在 <code>project()</code> 指定的项目名称</p>
</blockquote>
<p>编写完项目的全部 <code>CMakeLists.txt</code> 文件后，接下来就是如何构建并且编译项目</p>
<h1 id="构建项目和生成构建器" tabindex="-1"><a class="header-anchor" href="#构建项目和生成构建器" aria-hidden="true">#</a> 构建项目和生成构建器</h1>
<p>CMake是一个<strong>构建系统生成器</strong>。将描述构建系统(如：Unix Makefile、Ninja、Visual Studio等)应当如何操作才能编译代码。然后，CMake为所选的构建系统生成相应的指令。默认情况下，</p>
<ul>
<li>GNU/Linux和macOS系统上，<code>Unix Makefile</code> 是默认的生成器</li>
<li>Windows上，<code>Visual Studio</code> 是默认的生成器</li>
</ul>
<p>使用CMake配置项目并生成构建器 (generator) ，我们可以通过命令行界面 (CLI) 进行，也可以通过GUI进行。CMake CLI 提供了许多选项，可以通过 <code>cmake -h</code> 查看。</p>
<p>在根目录下，新建目录 <code>build</code> 并且进入该目录，在 <code>build</code> 目录下，通过指定上级目录的 <code>CMakeLists.txt</code> 来调用 CMake 配置项目并生成构建器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> -p build
<span class="token builtin class-name">cd</span> build
cmake <span class="token punctuation">..</span>
<span class="token comment"># or specify a generator available the platform</span>
cmake <span class="token punctuation">..</span> -G <span class="token string">"MinGW Makefiles"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote>
<p>你可以直接在项目根目录下中执行 <code>cmake .</code>，这是源代码内构建，但是这种做法会在根目录（源代码目录）下生成配置文件，会将源代码和项目的生成树混合，这是非常不推荐的。我们依然会选择源外(out of source)构建项目，即新建目录 <code>build</code> ，并且在目录 <code>build</code> 下构建。</p>
</blockquote>
<blockquote>
<p>你可以看到这里使用了参数 <code>-G</code> 来指定生成器为 <code>&quot;MinGW Makefiles&quot;</code> （需要有双引号），你可以通过 <code>cmake -h</code> 来查看全部可用的生成器。</p>
</blockquote>
<p>当出现如下输出，则已经成功配置项目(<code>Configuring done</code>)，并且生成了构建器(<code>Generating done</code>)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>-- Configuring <span class="token keyword">done</span>
-- Generating <span class="token keyword">done</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>你可以在 <code>build</code> 目录下，看到下列文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">.</span>
├─CMakefiles
├─cmake_install.cmake
├─CMakeCache.txt
└─Makefile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li><code>CMakefiles</code> ：临时文件目录，CMake用于检测操作系统、编译器等。</li>
<li><code>cmake_install.cmake</code> ：处理安装规则的CMake脚本，在项目安装时使用。</li>
<li><code>CMakeCache.txt</code> ：如文件名所示，CMake缓存。CMake在重新运行配置时使用这个文件。</li>
<li><code>Makefile</code> : 命令 <code>make</code> 将运行指令来编译项目。</li>
</ul>
<h1 id="编译项目" tabindex="-1"><a class="header-anchor" href="#编译项目" aria-hidden="true">#</a> 编译项目</h1>
<p>随后就可以开始编译可执行文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">make</span>
<span class="token comment"># or</span>
cmake --build <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>生成的项目就会在 <code>${PROJECT_SOURCE_DIR}/bin</code> 下，也就是 <code>bin</code>。如果不通过 <code>set(EXECUTABLE_OUTPUT_PATH ...)</code> 来指定输出目录，那么文件会被输出到 <code>build</code> 目录下</p>
</template>
