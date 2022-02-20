<template><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h1>
<ul>
<li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li>
<li><a href="#%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4">常用命令</a>
<ul>
<li><a href="#%E6%96%87%E4%BB%B6%E7%AE%A1">文件管</a>
<ul>
<li><a href="#ls-%E6%98%BE%E7%A4%BA%E7%9B%AE%E5%BD%95%E4%B8%8B%E7%9A%84%E5%86%85%E5%AE%B9%E5%8F%8A%E5%B1%9E%E6%80%A7">ls-显示目录下的内容及属性</a></li>
<li><a href="#%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7">文件属性</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">环境变量</a></li>
<li><a href="#%E8%BD%AF%E9%93%BE%E6%8E%A5">软链接</a></li>
<li><a href="#%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F">文件系统</a></li>
</ul>
<h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h1>
<p>可以查询 <a href="https://www.linuxcool.com/" target="_blank" rel="noopener noreferrer">Linux命令大全(手册)<ExternalLinkIcon/></a></p>
<h2 id="文件管" tabindex="-1"><a class="header-anchor" href="#文件管" aria-hidden="true">#</a> 文件管</h2>
<h3 id="ls-显示目录下的内容及属性" tabindex="-1"><a class="header-anchor" href="#ls-显示目录下的内容及属性" aria-hidden="true">#</a> ls-显示目录下的内容及属性</h3>
<p>语法格式:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ls</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>dirx<span class="token punctuation">]</span>
<span class="token punctuation">[</span>options<span class="token punctuation">]</span>:
-a 显示所有文件及目录 <span class="token punctuation">(</span>. 开头的隐藏文件也会列出<span class="token punctuation">)</span>
-l 除文件名称外，亦将文件型态、权限、拥有者、文件大小等资讯详细列出
-r 将文件以相反次序显示<span class="token punctuation">(</span>原定依英文字母次序<span class="token punctuation">)</span>
-t 将文件依建立时间之先后次序列出
-A 同 -a ，但不列出 <span class="token string">"."</span> <span class="token punctuation">(</span>目前目录<span class="token punctuation">)</span> 及 <span class="token string">".."</span> <span class="token punctuation">(</span>父目录<span class="token punctuation">)</span>
-F 在列出的文件名称后加一符号；例如可执行档则加 <span class="token string">"*"</span>, 目录则加 <span class="token string">"/"</span>
-R 若目录下有文件，则以下之文件亦皆依序列出
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">ls</span> /usr/local/opencv4/
bin  include  lib  share
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">ls</span> /usr/local/opencv4/ -l
drwxr-xr-x <span class="token number">2</span> root root  <span class="token number">4096</span> <span class="token number">1</span>月   <span class="token number">3</span> <span class="token number">17</span>:11 bin
drwxr-xr-x <span class="token number">3</span> root root  <span class="token number">4096</span> <span class="token number">1</span>月   <span class="token number">3</span> <span class="token number">17</span>:11 include
drwxr-xr-x <span class="token number">6</span> root root <span class="token number">12288</span> <span class="token number">1</span>月   <span class="token number">3</span> <span class="token number">17</span>:11 lib
drwxr-xr-x <span class="token number">4</span> root root  <span class="token number">4096</span> <span class="token number">1</span>月   <span class="token number">3</span> <span class="token number">17</span>:11 share

$ ll /usr/local/opencv4/
总用量 <span class="token number">32</span>
drwxr-xr-x  <span class="token number">6</span> root root  <span class="token number">4096</span> <span class="token number">1</span>月   <span class="token number">3</span> <span class="token number">17</span>:11 ./
drwxr-xr-x <span class="token number">12</span> root root  <span class="token number">4096</span> <span class="token number">1</span>月   <span class="token number">5</span> <span class="token number">20</span>:13 <span class="token punctuation">..</span>/
drwxr-xr-x  <span class="token number">2</span> root root  <span class="token number">4096</span> <span class="token number">1</span>月   <span class="token number">3</span> <span class="token number">17</span>:11 bin/
drwxr-xr-x  <span class="token number">3</span> root root  <span class="token number">4096</span> <span class="token number">1</span>月   <span class="token number">3</span> <span class="token number">17</span>:11 include/
drwxr-xr-x  <span class="token number">6</span> root root <span class="token number">12288</span> <span class="token number">1</span>月   <span class="token number">3</span> <span class="token number">17</span>:11 lib/
drwxr-xr-x  <span class="token number">4</span> root root  <span class="token number">4096</span> <span class="token number">1</span>月   <span class="token number">3</span> <span class="token number">17</span>:11 share/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="文件属性" tabindex="-1"><a class="header-anchor" href="#文件属性" aria-hidden="true">#</a> 文件属性</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">ls</span> /usr/local/opencv4/ -l
drwxr-xr-x <span class="token number">2</span> root root  <span class="token number">4096</span> <span class="token number">1</span>月   <span class="token number">3</span> <span class="token number">17</span>:11 bin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>drwxr-xr-x</code></p>
<table>
<thead>
<tr>
<th style="text-align:center">d</th>
<th style="text-align:center">rwx</th>
<th style="text-align:center">r-x</th>
<th style="text-align:center">r-x</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">文件类型</td>
<td style="text-align:center">属主权限</td>
<td style="text-align:center">属组权限</td>
<td style="text-align:center">其他用户权限</td>
</tr>
</tbody>
</table>
<ul>
<li>文件类型
<ul>
<li>当为 <code>d</code> 则是目录</li>
<li>当为 <code>-</code> 则是文件；</li>
<li>若是 <code>l</code> 则表示为链接文档(link file)；</li>
<li>若是 <code>b</code> 则表示为装置文件里面的可供储存的接口设备(可随机存取装置)；</li>
<li>若是 <code>c</code> 则表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)。</li>
</ul>
</li>
<li>属主权限： <strong>文件的所有者</strong> 拥有该文件的权限</li>
<li>属组权限： <strong>所有者的同组用户</strong> 拥有该文件的权限</li>
<li>其他用户权限</li>
</ul>
<p>权限每三个一组 <code>rwx</code> ，<code>r</code> 可读(read)、 <code>w</code> 可写(write)、 <code>x</code> 可执行(execute)。位置是固定的，<code>-</code> 则表示没有权限，</p>
<table>
<thead>
<tr>
<th style="text-align:center">2</th>
<th style="text-align:center">root</th>
<th style="text-align:center">root</th>
<th style="text-align:center">4096</th>
<th style="text-align:center">1月 3 17:11</th>
<th style="text-align:center">bin</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">硬链接数目</td>
<td style="text-align:center">用户名</td>
<td style="text-align:center">组名</td>
<td style="text-align:center">大小</td>
<td style="text-align:center">最后修改时间</td>
<td style="text-align:center">文件名</td>
</tr>
</tbody>
</table>
<h1 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h1>
<ul>
<li>修改用户目录下的 <code>.bashrc</code> 文件</li>
<li>修改 <code>/etc/profile</code> 文件</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">"{path_to_bin}:<span class="token environment constant">$PATH</span>"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>例如，我们现在希望将一个自己编译的程序添加到环境变量中，便于启动</p>
<p>在 <code>~/proj/test</code> 目录下编写文件 <code>hellotest.c</code>，并且编译 <code>gcc hellotest.c -o hellotest</code>，运行 <code>./hellotest</code> 输出 <code>Hello test</code></p>
<!-- ![./images/env-1.png](./images/env-1.png) -->
<p>我们现在希望可以在其他目录下也可以启动该程序，这时候会找不到该命令，因为在环境变量中没有找到该命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ hellotest
hellotest: 未找到命令
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><!-- ![./images/env-2.png](./images/env-2.png) -->
<p>编辑用户目录下环境变量配置文件 <code>~/.bashrc</code> （或者系统级的环境变量配置文件 <code>/etc/profile</code>，该操作对全部用户生效）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vi</span> ~/.bashrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在文件末尾添加如下内容</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">"~/proj/test:<span class="token environment constant">$PATH</span>"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="@source/linux/basic/images/env-3.png" alt="./images/env-3.png"></p>
<p>激活该配置文件作为系统的环境变量</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>之后就可以直接运行我们编译好的可执行文件 <code>hellotest</code>
<img src="@source/linux/basic/images/env-4.png" alt="./images/env-4.png"></p>
<h1 id="软链接" tabindex="-1"><a class="header-anchor" href="#软链接" aria-hidden="true">#</a> 软链接</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> /usr/bin/python
<span class="token function">sudo</span> <span class="token function">ln</span> -s /usr/bin/python3 /usr/bin/python
<span class="token function">ls</span> -l /usr/bin <span class="token operator">|</span> <span class="token function">grep</span> python
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="文件系统" tabindex="-1"><a class="header-anchor" href="#文件系统" aria-hidden="true">#</a> 文件系统</h1>
<ul>
<li><strong>/bin</strong>: bin是Binary的缩写。存放系统中最常用的可执行文件（二进制）。</li>
<li><strong>/boot</strong>: 这里存放的是linux内核和系统启动文件，包括Grub、lilo启动器程序。</li>
<li><strong>/dev</strong>: dev是Device(设备)的缩写。该目录存放的是Linux的外部设备，如硬盘、分区、键盘、鼠标、usb等。</li>
<li><strong>/etc</strong>: 这个目录用来存放所有的系统管理所需要的配置文件和子目录，如passwd、hostname等。</li>
<li><strong>/home</strong>: 用户的主目录，在Linux中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的。</li>
<li><strong>/lib</strong>: 存放共享的库文件，包含许多被/bin和/sbin中程序使用的库文件。</li>
<li><strong>/lost+found</strong>: 这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些零散文件。</li>
<li><strong>/media</strong>: ubuntu系统自动挂载的光驱、usb设备，存放临时读入的文件。</li>
<li><strong>/mnt</strong>: 作为被挂载的文件系统得挂载点。</li>
<li><strong>/opt</strong>: 作为可选文件和程序的存放目录，主要被第三方开发者用来简易安装和卸载他们的软件。<strong>/proc</strong>: 这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。这里存放所有标志为文件的进程，比较cpuinfo存放cpu当前工作状态的数据。</li>
<li><strong>/root</strong>: 该目录为系统管理员，也称作超级权限者的用户主目录。</li>
<li><strong>/sbin</strong>: s就是Super User的意思，这里存放的是系统管理员使用的系统管理程序，如系统管理、目录查询等关键命令文件。</li>
<li><strong>/srv</strong>: 存放系统所提供的服务数据。</li>
<li><strong>/sys</strong>: 系统设备和文件层次结构，并向用户程序提供详细的内核数据信息。</li>
<li><strong>/tmp</strong>: 这个目录是用来存放一些临时文件的，所有用户对此目录都有读写权限。
<ul>
<li>/usr 目录具体来说：</li>
</ul>
</li>
<li><strong>/usr</strong>: 存放与系统用户有关的文件和目录。
<ul>
<li>/usr/X11R6: 存放X-Windows的目录；</li>
<li>/usr/games: 存放着XteamLinux自带的小游戏；</li>
<li>/usr/bin: 用户和管理员的标准命令；</li>
<li>/usr/sbin: 存放root超级用户使用的管理程序；</li>
<li>/usr/doc: Linux技术文档；</li>
<li>/usr/include: 用来存放Linux下开发和编译应用程序所需要的头文件，for c 或者c++；</li>
<li>/usr/lib: 应用程序和程序包的连接库；</li>
<li>/usr/local: 系统管理员安装的应用程序目录；</li>
<li>/usr/man: 帮助文档所在的目录；</li>
<li>/usr/src: Linux开放的源代码；</li>
</ul>
</li>
<li><strong>/var</strong>: 长度可变的文件，尤其是些记录数据，如日志文件和打印机文件。
<ul>
<li>/var/cache: 应用程序缓存目录；</li>
<li>/var/crash: 系统错误信息；</li>
<li>/var/games: 游戏数据；</li>
<li>/var/log: 日志文件；</li>
<li>/var/mail: 电子邮件；</li>
<li>/var/tmp: 临时文件目录；</li>
</ul>
</li>
</ul>
</template>
