<template><h1 id="实验1-linux基础" tabindex="-1"><a class="header-anchor" href="#实验1-linux基础" aria-hidden="true">#</a> 实验1 Linux基础</h1>
<ul>
<li><a href="#%E5%AE%9E%E9%AA%8C1-linux%E5%9F%BA%E7%A1%80">实验1 Linux基础</a></li>
<li><a href="#%E5%AE%9E%E9%AA%8C%E7%9B%AE%E7%9A%84">实验目的</a></li>
<li><a href="#%E5%AE%9E%E9%AA%8C%E7%8E%AF%E5%A2%83">实验环境</a></li>
<li><a href="#linux%E5%9F%BA%E6%9C%AC%E5%91%BD%E4%BB%A4">Linux基本命令</a>
<ul>
<li><a href="#%E6%96%87%E4%BB%B6%E7%9B%AE%E5%BD%95">文件目录</a></li>
<li><a href="#%E8%BF%9B%E7%A8%8B%E7%AE%A1%E7%90%86%E7%9A%84%E5%91%BD%E4%BB%A4">进程管理的命令</a></li>
</ul>
</li>
<li><a href="#vi%E7%BC%96%E8%BE%91%E5%99%A8%E7%9A%84%E4%BD%BF%E7%94%A8">vi编辑器的使用</a>
<ul>
<li><a href="#vivim-%E7%AE%80%E4%BB%8B">vi/vim 简介</a></li>
<li><a href="#vi%E7%BC%96%E8%BE%91%E5%99%A8%E7%BB%83%E4%B9%A0">vi编辑器练习</a></li>
</ul>
</li>
<li><a href="#%E8%A1%A5%E5%85%85%E7%9F%A5%E8%AF%86">补充知识</a>
<ul>
<li><a href="#linux-%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F">Linux 文件系统</a>
<ul>
<li><a href="#linux-%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84">Linux 目录结构</a></li>
</ul>
</li>
<li><a href="#linux-c%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80">Linux C编程基础</a>
<ul>
<li><a href="#linux-%E7%BC%96%E8%AF%91%E5%99%A8-gcc">Linux 编译器 gcc</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="实验目的" tabindex="-1"><a class="header-anchor" href="#实验目的" aria-hidden="true">#</a> 实验目的</h1>
<ol>
<li>熟悉Linux下的基本操作，学会使用Shell命令去操作Linux。</li>
<li>学习和掌握vi编辑器的基本使用方法。</li>
<li>学会使用vi编辑器编辑简单的C语言程序，学习和掌握gcc等Linux的开发调试环境。</li>
</ol>
<h1 id="实验环境" tabindex="-1"><a class="header-anchor" href="#实验环境" aria-hidden="true">#</a> 实验环境</h1>
<p>选择其中一个环境做实验即可</p>
<ol>
<li>VMware虚拟机</li>
<li><a href="https://docs.microsoft.com/zh-cn/windows/wsl/install-win10" target="_blank" rel="noopener noreferrer">Windows WLS2<ExternalLinkIcon/></a>(推荐)，可在<strong>Microsoft 应用商店</strong>中下载，并按照<a href="https://docs.microsoft.com/zh-cn/windows/wsl/install-win10" target="_blank" rel="noopener noreferrer">官方教程<ExternalLinkIcon/></a>安装运行</li>
<li>MacOS，MacOS可运行大部分Unix命令，但是部分命令无法运行</li>
</ol>
<h1 id="linux基本命令" tabindex="-1"><a class="header-anchor" href="#linux基本命令" aria-hidden="true">#</a> Linux基本命令</h1>
<h2 id="文件目录" tabindex="-1"><a class="header-anchor" href="#文件目录" aria-hidden="true">#</a> 文件目录</h2>
<ol>
<li><code>ls</code> list files, 列出当前目录下的文件和文件名</li>
</ol>
<p>格式 <code>ls [选项] [目录或是文件]</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 列出文件</span>
<span class="token function">ls</span>
<span class="token comment"># 列出包括隐藏文件在内的全部文件和目录</span>
<span class="token function">ls</span> -a
<span class="token comment"># 列出全部目录而不列出文件</span>
<span class="token function">ls</span> -d
<span class="token comment"># 递归列出目录及其子目录</span>
<span class="token function">ls</span> -R 
<span class="token comment"># 列出文件权限、文件名等信息</span>
<span class="token function">ls</span> -l
<span class="token comment"># 下面两个命令都是 列出包括隐藏文件在内的文件权限、文件名等信息</span>
<span class="token function">ls</span> -al
ll

<span class="token comment"># . 表示当前目录</span>
<span class="token function">ls</span> <span class="token builtin class-name">.</span>  <span class="token comment"># 列出当前目录</span>
<span class="token comment"># .. 表示当前目录</span>
<span class="token function">ls</span> <span class="token punctuation">..</span> <span class="token comment"># 列出上一级目录</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol>
<li><code>mkdir</code> make directory,  创建目录</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 创建目录</span>
<span class="token function">mkdir</span> newdir
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2">
<li><code>cd</code> change directory, 切换目录</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> newdir
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3">
<li><code>pwd</code> print work directory, 显示当前工作目录</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">pwd</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>得到输出结果</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/home/ubuntu/newdir
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4">
<li><code>touch</code> 新建文件</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 新建一个名为 main.cpp 的文件</span>
<span class="token function">touch</span> main.cpp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="5">
<li><code>cp</code> copy, 复制文件或目录</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 把当前目录的main.cpp复制一份，并且保存到上一级目录的m.cpp中</span>
<span class="token comment"># 内容一样，名字可以修改</span>
<span class="token function">cp</span> main.cpp <span class="token punctuation">..</span>/m.cpp
<span class="token comment"># 用ls查看刚刚复制的文件</span>
<span class="token function">ls</span> <span class="token punctuation">..</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>复制目录的话需要加上<code>-r</code>，<code>-r</code>表示递归复制目录内的全部文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 切换到上一级目录</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token function">cp</span> -r newdir dir_cp
<span class="token comment"># 查看复制的目录</span>
<span class="token function">ls</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="6">
<li><code>mv</code> move, 移动文件或目录</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token builtin class-name">test</span>
<span class="token function">ls</span>
<span class="token function">mv</span> main.cpp
<span class="token function">ls</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="7">
<li><code>rm</code> remove, 删除文件或目录</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">rm</span> -rf dir_cp
<span class="token function">rm</span> -rf <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="8">
<li><code>cat</code> concatenate, 打印</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 打印文件内容</span>
<span class="token function">cat</span> /etc/apt/sources.list
<span class="token comment"># 打印文件内容，显示行号</span>
<span class="token function">cat</span> -n /etc/apt/sources.list
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="9">
<li>文件备份、压缩与解压</li>
</ol>
<p><code>tar</code> tape archive, 用来建立，还原备份文件的工具程序，它可以加入、解开备份文件内的文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 将文件 main.cpp 压缩，并且压缩文件命名为 m.tar.gz</span>
<span class="token function">tar</span> -czvf m.tar.gz main.cpp
<span class="token comment"># 将目录 newdir 压缩，并且压缩文件命名为 newdir.tar.gz</span>
<span class="token function">tar</span> -czvf newdir.tar.gz newdir
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 列出压缩文件内容</span>
<span class="token function">tar</span> -tzvf m.tar.gz
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 将 m.tar.gz 解压</span>
<span class="token function">tar</span> -xzvf m.tar.gz
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>对上述命令中出现的选项进行说明</p>
<ul>
<li><code>tar -czvf m.tar.gz main.cpp</code> 中，<code>-c</code>是主选项，放在最前面，后面跟着<code>zvf</code>是辅助选项</li>
<li><code>-c</code>表示创建备份文件（压缩），<code>-x</code>表示从备份文件中还原（解压），共有<strong>5个主命令</strong>，主命令必选且互斥（每次调用tar文件必须选择一个主目录且只能选一个）：
<ul>
<li><code>-c</code> 建立压缩档案</li>
<li><code>-x</code> 解压</li>
<li><code>-t</code> 查看内容</li>
<li><code>-r</code> 在不重新打包的情况下，向压缩归档文件中追加文件</li>
<li><code>-u</code> 更新原压缩包的文件</li>
</ul>
</li>
<li><code>z</code> 表示通过gzip指令处理备份文件，文件后缀一般为<code>.tar.gz</code>，此外还有：
<ul>
<li><code>-z</code> gzip属性的文件<code>tar.gz</code></li>
<li><code>-j</code> bz2属性的文件<code>tar.bz2</code></li>
<li><code>-Z</code> compress属性的文件<code>tar.Z</code></li>
</ul>
</li>
<li><code>v</code>表示可视化过程，显示压缩/解压文件的全部过程</li>
<li><code>f</code>表示文件，后面跟着备份文件名</li>
</ul>
<h2 id="进程管理的命令" tabindex="-1"><a class="header-anchor" href="#进程管理的命令" aria-hidden="true">#</a> 进程管理的命令</h2>
<ol>
<li><code>ps</code> process status, 查看您当前启动的进程</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ps</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>PID</code>表示进程号</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  PID TTY          TIME CMD
   <span class="token number">85</span> pts/0    00:00:00 <span class="token function">bash</span>
  <span class="token number">117</span> pts/0    00:00:00 <span class="token function">ps</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2">
<li><code>top</code> 打印当前系统运行的状态</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">top</span> - <span class="token number">14</span>:29:27 up <span class="token number">16</span> min,  <span class="token number">0</span> users,  load average: <span class="token number">0.00</span>, <span class="token number">0.00</span>, <span class="token number">0.00</span>
Tasks:   <span class="token number">5</span> total,   <span class="token number">1</span> running,   <span class="token number">4</span> sleeping,   <span class="token number">0</span> stopped,   <span class="token number">0</span> zombie
%Cpu<span class="token punctuation">(</span>s<span class="token punctuation">)</span>:  <span class="token number">0.0</span> us,  <span class="token number">0.0</span> sy,  <span class="token number">0.0</span> ni,100.0 id,  <span class="token number">0.0</span> wa,  <span class="token number">0.0</span> hi,  <span class="token number">0.0</span> si,  <span class="token number">0.0</span> st
MiB Mem <span class="token builtin class-name">:</span>   <span class="token number">6223.4</span> total,   <span class="token number">6096.6</span> free,     <span class="token number">70.9</span> used,     <span class="token number">56.0</span> buff/cache
MiB Swap:   <span class="token number">2048.0</span> total,   <span class="token number">2048.0</span> free,      <span class="token number">0.0</span> used.   <span class="token number">6002.0</span> avail Mem

  PID <span class="token environment constant">USER</span>      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
    <span class="token number">1</span> root      <span class="token number">20</span>   <span class="token number">0</span>     <span class="token number">896</span>    <span class="token number">552</span>    <span class="token number">492</span> S   <span class="token number">0.0</span>   <span class="token number">0.0</span>   <span class="token number">0</span>:00.03 init
   <span class="token number">83</span> root      <span class="token number">20</span>   <span class="token number">0</span>     <span class="token number">904</span>     <span class="token number">80</span>     <span class="token number">20</span> S   <span class="token number">0.0</span>   <span class="token number">0.0</span>   <span class="token number">0</span>:00.00 init
   <span class="token number">84</span> root      <span class="token number">20</span>   <span class="token number">0</span>     <span class="token number">904</span>     <span class="token number">88</span>     <span class="token number">20</span> S   <span class="token number">0.0</span>   <span class="token number">0.0</span>   <span class="token number">0</span>:00.02 init
   <span class="token number">85</span> ubuntu    <span class="token number">20</span>   <span class="token number">0</span>   <span class="token number">10124</span>   <span class="token number">5236</span>   <span class="token number">3448</span> S   <span class="token number">0.0</span>   <span class="token number">0.1</span>   <span class="token number">0</span>:00.13 <span class="token function">bash</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote>
<ul>
<li>第一行<code>top - 14:29:27 up 16 min,  0 users,  load average: 0.00, 0.00, 0.00</code>依次是当前时间、系统启动时间、当前登录系统的用户数和系统平均负载信息。</li>
<li>第二行<code>Tasks:   5 total,   1 running,   4 sleeping,   0 stopped,   0 zombie</code>依次是进程总数、休眠进程数、运行进程数、僵死的进程数和停止的进程数。</li>
<li>第三行的CPU状态<code>%Cpu(s):  0.0 us,  0.0 sy,  0.0 ni,100.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st</code>依次为用户进程、系统进程、优先进程、输入/出等待进程和空闲进程占用的百分比数。</li>
<li>第四行的内存使用情况<code>MiB Mem :   6223.4 total,   6096.6 free,     70.9 used,     56.0 buff/cache</code>依次为平均可用内存、已用内存、空闲内存、共享内存和缓冲内存等。</li>
<li>第五行交换空间使用情况<code>MiB Swap:   2048.0 total,   2048.0 free,      0.0 used.   6002.0 avail Mem</code>依次为平均可用交换容量、已使用量、空闲数量和高速缓存数量。</li>
<li>第六行以后<code>PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND</code>为各个进程的部分状态字段信息列表。</li>
</ul>
</blockquote>
<ol start="3">
<li><code>top&amp;</code> 启动进程</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ps</span>
<span class="token function">top</span><span class="token operator">&amp;</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4">
<li><code>kill</code> 终止进程。超级用户可终止所有的进程，普通用户只能终止自己启动的进程。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 启动一个新进程，并记录进程id：PID</span>
<span class="token function">top</span><span class="token operator">&amp;</span>
<span class="token comment"># 查看刚刚启动的进程及其id</span>
<span class="token function">ps</span>
<span class="token comment"># 终止刚刚启动的进程，&lt;PID>为其进程号</span>
<span class="token function">kill</span> -9 <span class="token operator">&lt;</span>PID<span class="token operator">></span>
<span class="token comment"># 再次查看</span>
<span class="token function">ps</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h1 id="vi编辑器的使用" tabindex="-1"><a class="header-anchor" href="#vi编辑器的使用" aria-hidden="true">#</a> vi编辑器的使用</h1>
<h2 id="vi-vim-简介" tabindex="-1"><a class="header-anchor" href="#vi-vim-简介" aria-hidden="true">#</a> vi/vim 简介</h2>
<p>vi编辑器是所有Unix及Linux系统下（包括MacOS）标准的编辑器</p>
<p><img src="https://www.runoob.com/wp-content/uploads/2015/10/vi-vim-cheat-sheet-sch.gif" alt="vi/vim键盘图"></p>
<p>vi编辑器下的三种模式：</p>
<ul>
<li>
<p><strong>命令行模式 (command mode)</strong><br>
按<code>esc</code>进入命令行模式<br>
控制屏幕光标的移动，字符、字或行的删除，移动复制某区段及进入Insert mode下，或者到 last line mode。</p>
</li>
<li>
<p><strong>插入模式 (insert mode)</strong><br>
按<code>i</code>进入插入模式，进行文本输入，底部会出现如下字样，表示当前模式</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>-- INSERT --
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>字符按键以及Shift组合，输入字符</p>
<ul>
<li><code>ENTER</code>，回车键，换行</li>
<li><code>BACK SPACE</code>，退格键，删除光标前一个字</li>
<li><code>DEL</code>，删除键，删除光标后一个字符</li>
<li><code>方向键</code>，在文本中移动光标</li>
<li><code>HOME/END</code>，移动光标到行首/行尾</li>
<li><code>Page Up/Page Down</code>，上/下翻页</li>
<li><code>Insert</code>，切换光标为输入/替换模式，光标将变成竖线/下划线</li>
<li><code>ESC</code>，退出输入模式，切换到命令模式</li>
</ul>
</li>
<li>
<p><strong>最后行模式 (last line mode)</strong><br>
在命令行模式下，输入<code>:</code>即可进入最后行模式</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>:w  <span class="token comment"># 保存文件</span>
:w <span class="token operator">&lt;</span>filename<span class="token operator">></span> <span class="token comment"># 保存文件，并且命名为 &lt;filename></span>
:wq <span class="token comment"># 保存并且退出</span>
:w<span class="token operator">!</span> <span class="token comment"># 不保存，强行退出</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
</ul>
<h2 id="vi编辑器练习" tabindex="-1"><a class="header-anchor" href="#vi编辑器练习" aria-hidden="true">#</a> vi编辑器练习</h2>
<p>使用vi编辑代码</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">touch</span> hello.c
<span class="token function">vi</span> hello.c
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>按下<code>i</code>进入插入模式，输入代码</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"stdio.h"</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"hello world\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>按下<code>esc</code>进入命令模式，按下<code>:</code>进入最后行模型，输入<code>wq</code>保存并且退出</p>
<p>安装gcc编译器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y gcc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>编译源代码，输出可执行文件<code>app</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>gcc main.c -o app
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>运行可执行文件<code>app</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./app
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h1 id="补充知识" tabindex="-1"><a class="header-anchor" href="#补充知识" aria-hidden="true">#</a> 补充知识</h1>
<h2 id="linux-文件系统" tabindex="-1"><a class="header-anchor" href="#linux-文件系统" aria-hidden="true">#</a> Linux 文件系统</h2>
<h3 id="linux-目录结构" tabindex="-1"><a class="header-anchor" href="#linux-目录结构" aria-hidden="true">#</a> Linux 目录结构</h3>
<p>Linux 文件系统是树状的结构，系统中每个分区都是一个文件系统，都有自己的目录层次。Linux 会将这些分属不同分区的、单独的文件系统按树型的方式形成一个系统的总的目录层次结构。目录提供了一个管理文件方便而有效的途径，最上层是根目录，其他的所有目录都是从根目录出发而生成的。微软的DOS 和Windows 也是采用树型结构，但是在DOS 和Windows 中这样的树型结构的根是磁盘分区的盘符，有几个分区就有几个树型结构，它们之间的关系是并列的。但在Linux 中，无论操作系统管理几个磁盘分区，这样的目录树都只有一个。</p>
<p>Linux 使用标准的目录结构，在安装的时候，安装程序就已经为用户创建了文件系统和完整而固定的目录结构，并指定了每个目录的作用和其中的文件类型。</p>
<ul>
<li><code>/bin</code> 存放常用的二进制可执行命令，如：ls, mv, rm, mkdir, rmdir, gzip, tar, telnet, 及 ftp 等等。通常它与 /usr/bin 的内容是一样的。</li>
<li><code>/dev</code> 存放与设备有关的特殊文件，基本上 Unix 或 Linux 系统都将设备当成文件，如/dev/fd0 代表软盘，/dev/cdrom 则表示光盘。</li>
<li><code>/etc</code> 存放系统管理和配置文件，如LILO 的参数、用户的帐号和密码以及系统的主要设置。</li>
<li><code>/home</code> 为用户设置的目录，比如用户user 的主目录就是/home/user ，可以用~user 表示。</li>
<li><code>/lib</code> 标准程序设计库，又叫动态链接共享库，在 Linux 执行或编译内核时，均会用到。</li>
<li><code>/sbin</code> 系统管理命令，这里存放的是系统管理员使用的管理程序，如： fdisk, mke2fs, fsck, mkswap, mount 等等。</li>
<li><code>/boot</code> 放置 Linux 核心与启动和关闭系统有关的文档，一个在后面的实验中会使用的非常重要的目录。</li>
<li><code>/tmp</code> 公用的临时文件存储点。</li>
<li><code>/root</code> 系统管理员的主目录。</li>
<li><code>/mnt</code> 系统提供这个目录是让用户临时装载其他的文件系统，如装载软盘的文件系统。/lost+found 这个目录平时是空的，系统非正常关机时而留下的文件会放这里。类似于windows 下的*.chk 文件。/proc 虚拟的目录，是系统内存的映射。可直接访问这个目录来获取系统信息。</li>
<li><code>/var</code> 这是系统在工作时，预先设置的工作目录，比方说各种服务的日志文件和收发的邮件等。</li>
<li><code>/usr</code> 最庞大和最重要的目录之一，要用到的应用程序和文件几乎都在这个目录。其中包含：
<ul>
<li><code>/usr/X11R6</code> 存放X window 的目录。</li>
<li><code>/usr/bin</code> 众多的应用程序。</li>
<li><code>/usr/sbin</code> 超级用户的一些管理程序。</li>
<li><code>/usr/doc</code> Linux 系统的说明文档（RedHat 7.0 以后改放在 /usr/share/doc 下）。</li>
<li><code>/usr/include</code> Linux 下开发和编译应用程序所需要的头文件。</li>
<li><code>/usr/lib</code> 存放常用的动态链接库和软件包的配置文件。</li>
<li><code>/usr/man</code> 存放帮助文档（RedHat 7.0 以后放在 /usr/share/man 底下）。</li>
<li><code>/usr/src</code> Linux 内核的源代码就放在这里，编译内核时必须用到。</li>
<li><code>/usr/local/bin</code> 本地增加的命令，通常用于软件的升级。</li>
<li><code>/usr/local/lib</code> 本地增加的库。</li>
</ul>
</li>
</ul>
<h2 id="linux-c编程基础" tabindex="-1"><a class="header-anchor" href="#linux-c编程基础" aria-hidden="true">#</a> Linux C编程基础</h2>
<h3 id="linux-编译器-gcc" tabindex="-1"><a class="header-anchor" href="#linux-编译器-gcc" aria-hidden="true">#</a> Linux 编译器 gcc</h3>
<p>C 语言是Linux 下的最常用的程序设计语言，Linux 上的很多应用程序就是用C 语言写的。我们实验中的编程都是使用C 或C++来实现的。Linux 系统上运行的GNU C 编译器（GCC）是一个全功能的 ANSI C 兼容编译器。虽然GCC 没有集成的开发环境，但堪称是目前效率很高的C/C++编译器。</p>
<p>GCC 安装后目录结构：/usr/lib/gcc-lib/target/version/ （及子目录）编译器就在这个目录下。/usr/bin/gcc 可以从命令行执行的二进制程序在这个目录下。/usr/target/(bin|lib|include)/ 库和头文件在这个目录下。/lib/、/usr/lib 和其他目录，系统的库在这些目录下。</p>
<p><strong>命令格式</strong>： <code>gcc [选项] 源文件 [目标文件] </code></p>
<p><strong>选项含义</strong>：</p>
<ul>
<li><code>-o</code> FILE：指定输出文件名，在编译为目标代码时，这一选项不是必须的。如果FILE 没有指定，缺省文件名是a.out.</li>
<li><code>-c</code>：GCC 仅把源代码编译为目标代码。缺省时 GCC 建立的目标代码文件有一个 .o 的扩展名。</li>
<li><code>-O</code>：GCC 对源代码进行基本优化。这些优化在大多数情况下都会使程序执行得更快。</li>
<li><code>-g</code>：在可执行程序中包含标准调试信息。GCC 产生能被 GNU 调试器使用的调试信息，以便调试你的程序。GCC 提供了一个很多其他 C 编译器里没有的特性, 在 GCC 里可以使-g 和 -O （产生优化代码）联用。</li>
<li><code>-w</code> ：关闭所有警告，建议不要使用此项</li>
<li><code>-Wall</code> ：允许发出gcc 能提供的所有有用的警告，也可以用-W（warning ）来标记指定的警告</li>
<li><code>-v</code>：显示在编译过程中的每一步用到的命令</li>
</ul>
</template>
