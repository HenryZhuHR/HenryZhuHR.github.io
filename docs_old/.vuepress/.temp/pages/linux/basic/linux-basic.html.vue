<template><!-- 
Linux基础知识、基本命令（起源、组成、常用命令如cp、ls、file、mkdir等常见操作命令）
Linux用户及权限基础
Linux系统进程管理进阶
Linux高效文本、文件处理命令（vim、grep、sed、awk、find等命令）
shell脚本入门（可边练习边学习） 
-->
<h1 id="linux-文件系统" tabindex="-1"><a class="header-anchor" href="#linux-文件系统" aria-hidden="true">#</a> Linux 文件系统</h1>
<ul>
<li><code>/</code></li>
<li><code>/bin</code> 	二进制可执行命令</li>
<li><code>/sbin</code> 系统管理命令，这里存放的是系统管理员使用的管理程序</li>
<li><code>/dev</code>	设备特殊文件</li>
<li><code>/etc</code>	系统管理和配置文件</li>
<li><code>/etc/rc.d</code>	启动的配置文件和脚本</li>
<li><code>/usr</code>
<ul>
<li><code>/usr/bin</code></li>
<li><code>/usr/sbin</code></li>
</ul>
</li>
</ul>
<!-- 
/bin：是系统的一些指令。bin为binary的简写，主要放置一些系统的必备执行档例如:cat、cp、chmod df、dmesg、gzip、kill、ls、mkdir、more、mount、rm、su、tar等。
/sbin：一般是指超级用户指令。主要放置一些系统管理的必备程式例如:cfdisk、dhcpcd、dump、e2fsck、fdisk、halt、ifconfig、ifup、 ifdown、init、insmod、lilo、lsmod、mke2fs、modprobe、quotacheck、reboot、rmmod、 runlevel、shutdown等。
/usr：
/usr/bin：是你在后期安装的一些软件的运行脚本。主要放置一些应用软体工具的必备执行档例如c++、g++、gcc、chdrv、diff、dig、du、eject、elm、free、gnome*、 gzip、htpasswd、kfm、ktop、last、less、locale、m4、make、man、mcopy、ncftp、 newaliases、nslookup passwd、quota、smb*、wget等。
/usr/sbin：放置一些用户安装的系统管理的必备程式例如:dhcpd、httpd、imap、in.*d、inetd、lpd、named、netconfig、nmbd、samba、sendmail、squid、swap、tcpd、tcpdump等。
/dev：任何设备均以文件形式存在于该文件夹内(通过mount命令挂载成用户直接可用的文件系统)
/media：挂载的可移动设备
/etc：配置文件所在目录
/proc：是一种内核和内核模块用来向进程(process) 发送信息的机制(所以叫做/proc)。这个伪文件系统让你可以和内核内部数据结构进行交互，获取 有关进程的有用信息，在运行中(on the fly) 改变设置(通过改变内核参数)。 与其他文件系统不同，/proc 存在于内存之中而不是硬盘上。
/tmp：临时文件，关机时自动销毁
/var：系统产生的不可自动销毁的缓存文件、日志记录。（系统和程序运行后产生的数据、 -->
<!-- 
/bin	二进制可执行命令
/dev	设备特殊文件
/etc	系统管理和配置文件
/etc/rc.d	启动的配置文件和脚本
/home	用户主目录的基点，比如用户abc的主目录就是/home/user，可以用~abc表示
/lib	标准程序设计库
/sbin	系统管理命令，这里存放的是系统管理员使用的管理程序
/tmp	公用的临时文件存储点
/root	系统管理员的主目录
/mnt	系统提供这个目录是让用户临时挂载其他的文件系统。
/lost+found	这个目录平时是空的，系统非正常关机而留下“无家可归”的文件
/proc	虚拟的目录，是系统内存的映射。可直接访问这个目录来获取系统信息。
/var	某些大文件的溢出区，比方说各种服务的日志文件
/usr	最庞大的目录，要用到的应用程序和文件几乎都在这个目录。其中包含：
/usr/X11R6 存放X window的目录
/usr/bin 众多的应用程序
/usr/sbin 超级用户的一些管理程序
/usr/doc linux文档
/usr/include linux下开发和编译应用程序所需要的头文件
/usr/lib 常用的动态链接库和软件包的配置文件
/usr/man 帮助文档
/usr/src 源代码，linux内核的源代码就放在/usr/src/linux里
/usr/local/bin 本地增加的命令
/usr/local/lib 本地增加的库
 -->
<h1 id="linux-常用命令" tabindex="-1"><a class="header-anchor" href="#linux-常用命令" aria-hidden="true">#</a> Linux 常用命令</h1>
<h2 id="linux-文件与目录管理" tabindex="-1"><a class="header-anchor" href="#linux-文件与目录管理" aria-hidden="true">#</a> Linux 文件与目录管理</h2>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
