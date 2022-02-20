<template><h1 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h1>
<ul>
<li><a href="#ubuntu">Ubuntu</a>
<ul>
<li><a href="#%E6%9B%B4%E6%8D%A2%E8%BD%AF%E4%BB%B6%E6%BA%90">更换软件源</a></li>
<li><a href="#%E5%8F%8C%E7%B3%BB%E7%BB%9F%E6%97%B6%E9%97%B4%E5%90%8C%E6%AD%A5">双系统时间同步</a></li>
<li><a href="#%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85">软件安装</a>
<ul>
<li><a href="#clang">Clang</a></li>
<li><a href="#microsoft-edge">Microsoft Edge</a></li>
<li><a href="#github-desktop">GitHub Desktop</a></li>
<li><a href="#deepin-wine">deepin-wine</a></li>
<li><a href="#lantern">Lantern</a></li>
</ul>
</li>
<li><a href="#ubuntu-%E4%BF%AE%E6%94%B9-grub-%E5%90%AF%E5%8A%A8%E9%A1%B9">Ubuntu 修改 Grub 启动项</a></li>
<li><a href="#%E7%95%8C%E9%9D%A2%E7%BE%8E%E5%8C%96">界面美化</a>
<ul>
<li><a href="#tweaktool">TweakTool</a></li>
<li><a href="#%E5%AE%89%E8%A3%85-macos-%E4%B8%BB%E9%A2%98%E6%A0%B7%E5%BC%8F">安装 MacOS 主题样式</a></li>
<li><a href="#%E7%A8%8B%E5%BA%8F%E5%9D%9E%E4%BF%AE%E6%94%B9">程序坞修改</a></li>
<li><a href="#%E6%9C%80%E7%BB%88%E6%95%88%E6%9E%9C">最终效果</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#wsl2-windows-subsystem-for-linux">WSL2 (Windows Subsystem for Linux)</a></li>
</ul>
<h2 id="更换软件源" tabindex="-1"><a class="header-anchor" href="#更换软件源" aria-hidden="true">#</a> 更换软件源</h2>
<p>换源可以参考各自官网的教程：</p>
<ul>
<li><a href="https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/" target="_blank" rel="noopener noreferrer">清华大学源(tuna)<ExternalLinkIcon/></a></li>
<li><a href="http://mirrors.ustc.edu.cn/help/ubuntu.html" target="_blank" rel="noopener noreferrer">中国科学技术大学源(ustc)<ExternalLinkIcon/></a></li>
</ul>
<p>Ubuntu 的软件源配置文件是 <code>/etc/apt/sources.list</code>，将系统自带的该文件做个备份</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/apt
<span class="token function">sudo</span> <span class="token function">cp</span> sources.list sources.list.bak
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>编辑配置文件，并保存</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> sources.list
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>替换的镜像源可以从网站中找到，并且可以在网站上查看到使用帮助</p>
<ul>
<li><a href="https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/" target="_blank" rel="noopener noreferrer">清华大学开源软件镜像站 Ubuntu 镜像使用帮助<ExternalLinkIcon/></a></li>
<li><a href="http://mirrors.ustc.edu.cn/help/ubuntu.html" target="_blank" rel="noopener noreferrer">中国科学技术大学源<ExternalLinkIcon/></a></li>
<li><a href="https://developer.aliyun.com/article/751568" target="_blank" rel="noopener noreferrer">阿里源<ExternalLinkIcon/></a></li>
<li><a href="https://mirrors.huaweicloud.com/home" target="_blank" rel="noopener noreferrer">华为源（包括全部Linux发行版本）<ExternalLinkIcon/></a></li>
</ul>
</blockquote>
<p>例如将 <code>ubuntu 20.04 LTS</code> 的软件源换为 <code>TUNA</code> 源，将文件替换为 <a href="https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/" target="_blank" rel="noopener noreferrer">清华大学开源软件镜像站 Ubuntu 镜像使用帮助<ExternalLinkIcon/></a> 查询到源列表，即可使用 TUNA 的软件源镜像</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe 
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>更新软件源列表并且更新软件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
sudp <span class="token function">apt</span> upgrade -y
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>当安装 <code>.deb</code> 软件出问题</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> --fix-broken <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="双系统时间同步" tabindex="-1"><a class="header-anchor" href="#双系统时间同步" aria-hidden="true">#</a> 双系统时间同步</h2>
<p>当电脑有多个系统的时候可能会存在时间差8小时的情况</p>
<p>更新软件源</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>修改系统时间</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>timedatectl set-local-rtc <span class="token number">1</span> --adjust-system-clock
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y ntpdate
<span class="token function">sudo</span> ntpdate time.windows.com
<span class="token function">sudo</span> hwclock --localtime --systohc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="软件安装" tabindex="-1"><a class="header-anchor" href="#软件安装" aria-hidden="true">#</a> 软件安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y <span class="token function">git</span> gcc cmake tree
<span class="token comment"># 安装 GNU 编译器工具和 GDB 调试器</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> build-essential gdb
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="clang" tabindex="-1"><a class="header-anchor" href="#clang" aria-hidden="true">#</a> Clang</h3>
<p>下载 <a href="https://releases.llvm.org/" target="_blank" rel="noopener noreferrer">LLVM 源码<ExternalLinkIcon/></a></p>
<blockquote>
<p><a href="https://clang.llvm.org/get_started.html" target="_blank" rel="noopener noreferrer">Getting Started: Building and Running Clang<ExternalLinkIcon/></a></p>
</blockquote>
<p>Change directory to where you want the llvm directory placed.</p>
<p>安装依赖</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y <span class="token function">git</span> gcc cmake
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>下载源码</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/llvm/llvm-project.git
<span class="token function">git</span> clone --depth<span class="token operator">=</span><span class="token number">1</span> https://github.com/llvm/llvm-project.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>编译源码</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> llvm-project
<span class="token function">mkdir</span> build
<span class="token builtin class-name">cd</span> build
cmake <span class="token punctuation">..</span>/llvm <span class="token punctuation">\</span>
  -DLLVM_ENABLE_PROJECTS<span class="token operator">=</span><span class="token string">"clang;libcxx;libcxxabi"</span> <span class="token punctuation">\</span>
  -DCMAKE_BUILD_TYPE<span class="token operator">=</span>Release <span class="token punctuation">\</span>
  -DCMAKE_INSTALL_PREFIX<span class="token operator">=~</span>/programs/llvm
<span class="token function">make</span> -j8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li><code>-DLLVM_ENABLE_PROJECTS=&quot;...&quot;</code>: clang, clang-tools-extra, libcxx, libcxxabi, libunwind, lldb, compiler-rt, lld, polly, or debuginfo-tests</li>
<li><code>-DCMAKE_INSTALL_PREFIX=&lt;install_path&gt;</code> : default=<code>/usr/local</code></li>
</ul>
<p>安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="microsoft-edge" tabindex="-1"><a class="header-anchor" href="#microsoft-edge" aria-hidden="true">#</a> Microsoft Edge</h3>
<p>在 <a href="https://www.microsoftedgeinsider.com/zh-cn/download/?platform=linux" target="_blank" rel="noopener noreferrer">Microsoft Edge Insider Channels<ExternalLinkIcon/></a> 下载 Edge 预览版</p>
<p>或者可以通过 apt 包管理软件来下载 ：</p>
<p>添加微软的软件源</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> https://packages.microsoft.com/keys/microsoft.asc <span class="token operator">|</span> gpg --dearmor <span class="token operator">></span> microsoft.gpg
<span class="token function">sudo</span> <span class="token function">install</span> -o root -g root -m <span class="token number">644</span> microsoft.gpg /etc/apt/trusted.gpg.d/
<span class="token function">sudo</span> <span class="token function">sh</span> -c <span class="token string">'echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge-dev.list'</span>
<span class="token function">sudo</span> <span class="token function">rm</span> microsoft.gpg
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>更新软件源并且安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y microsoft-edge-dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="github-desktop" tabindex="-1"><a class="header-anchor" href="#github-desktop" aria-hidden="true">#</a> GitHub Desktop</h3>
<p><a href="https://github.com/shiftkey/desktop" target="_blank" rel="noopener noreferrer">GitHub Desktop - The Linux Fork<ExternalLinkIcon/></a></p>
<p>添加软件源</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> -qO - https://packagecloud.io/shiftkey/desktop/gpgkey <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/trusted.gpg.d/shiftkey-desktop.asc <span class="token operator">></span> /dev/null
<span class="token function">sudo</span> <span class="token function">sh</span> -c <span class="token string">'echo "deb [arch=amd64] https://packagecloud.io/shiftkey/desktop/any/ any main" > /etc/apt/sources.list.d/packagecloud-shiftky-desktop.list'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>更新软件源并且安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y github-desktop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="deepin-wine" tabindex="-1"><a class="header-anchor" href="#deepin-wine" aria-hidden="true">#</a> deepin-wine</h3>
<blockquote>
<p>参考 <a href="https://github.com/zq1997/deepin-wine" target="_blank" rel="noopener noreferrer">deepin-wine<ExternalLinkIcon/></a> 项目</p>
</blockquote>
<p>首次使用时，你需要运行如下一条命令将移植仓库添加到系统中</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> -O- https://deepin-wine.i-m.dev/setup.sh <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>同时尽量将 <code>main</code> <code>restricted</code> <code>universe</code> <code>multiverse</code> 这几个系统源都启用（自行百度），免得依赖问题多</p>
</blockquote>
<p>自此以后，你可以像对待普通的软件包一样，使用<code>apt-get</code>系列命令进行各种应用安装、更新和卸载清理了</p>
<p>将<code>com.qq.weixin.deepin</code>替换为需要安装的包名即可，参考<a href="https://deepin-wine.i-m.dev/" target="_blank" rel="noopener noreferrer">完整的软件列表<ExternalLinkIcon/></a>，例如</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 微信</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y com.qq.weixin.deepin
<span class="token comment"># QQ</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y com.qq.im.deepin
<span class="token comment"># TIM</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y com.qq.office.deepin
<span class="token comment"># QQ音乐</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y com.qq.music.deepin
<span class="token comment"># QQ视频</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y com.qq.video.deepin
<span class="token comment"># 腾讯会议</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y com.tencent.meeting.deepin
<span class="token comment"># 爱奇艺</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y com.iqiyi.deepin
<span class="token comment"># 钉钉</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y com.dingtalk.deepin
<span class="token comment"># 阿里旺旺</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y com.taobao.wangwang.deepin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>应用图标需要注销重登录后才会出现</p>
<p>卸载软件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> purge --autoremove <span class="token operator">&lt;</span>software<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>其他问题参考官方的<a href="https://github.com/zq1997/deepin-wine#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98" target="_blank" rel="noopener noreferrer">常见问题<ExternalLinkIcon/></a>以解决</p>
<h3 id="lantern" tabindex="-1"><a class="header-anchor" href="#lantern" aria-hidden="true">#</a> Lantern</h3>
<p>下载<a href="https://github.com/getlantern/download" target="_blank" rel="noopener noreferrer">蓝灯<ExternalLinkIcon/></a>，自行选择是否购买<a href="https://www.getlandeng605.org/" target="_blank" rel="noopener noreferrer">专业版<ExternalLinkIcon/></a></p>
<h2 id="ubuntu-修改-grub-启动项" tabindex="-1"><a class="header-anchor" href="#ubuntu-修改-grub-启动项" aria-hidden="true">#</a> Ubuntu 修改 Grub 启动项</h2>
<blockquote>
<p>修改针对多系统的系统启动引导顺序</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> gedit /etc/default/grub
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="@source/linux/ubuntu/images/grub.png" alt="修改 grub"></p>
<ul>
<li><code>GRUB_DEFAULT</code> : 默认启动项，按列表的顺序，从0开始</li>
<li><code>GRUB_TIMEOUT</code> : 启动选择超时时间</li>
</ul>
<p>修改完成后</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">update-grub</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="界面美化" tabindex="-1"><a class="header-anchor" href="#界面美化" aria-hidden="true">#</a> 界面美化</h2>
<p>将 Ubuntu 的桌面包装成 MacOS 的模样，支持
<a href="https://www.apple.com/macos/monterey-preview/" target="_blank" rel="noopener noreferrer"><code>Monterey(TODO)</code><ExternalLinkIcon/></a>
/<a href="https://www.apple.com.cn/macos/big-sur/" target="_blank" rel="noopener noreferrer"><code>Bigsur</code><ExternalLinkIcon/></a>
/<a href="https://www.apple.com.cn/newsroom/2019/10/macos-catalina-is-available-today/" target="_blank" rel="noopener noreferrer"><code>Catalina</code><ExternalLinkIcon/></a></p>
<h3 id="tweaktool" tabindex="-1"><a class="header-anchor" href="#tweaktool" aria-hidden="true">#</a> TweakTool</h3>
<p>要安装主题，首先要先安装相应的工具 <code>TweakTool</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y gnome-tweak-tool
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/linux/ubuntu/images/tweak-change_winButton_1.png" alt="修改窗口的按钮位置"></p>
<p><strong>改窗口的按钮位置</strong></p>
<ul>
<li>English: <code>Window Titlebars</code> -&gt; <code>Titlebar Buttons</code> -&gt; <code>Placement</code> -&gt; <code>Left</code></li>
<li>中文: <code>窗口标题栏</code> -&gt; <code>标题栏按钮</code> -&gt; <code>放置</code> -&gt; <code>左</code></li>
</ul>
<p><img src="@source/linux/ubuntu/images/tweak-change_winButton_2.png" alt="修改窗口的按钮位置"></p>
<p><strong>修改Shell</strong></p>
<ul>
<li>English: <code>Appearance</code> -&gt; <code>Themes</code> -&gt; <code>Shell</code></li>
<li>中文: <code>外观</code> -&gt; <code>主题</code> -&gt; <code>Shell</code></li>
</ul>
<p>发现有感叹号无法操作</p>
<p><img src="@source/linux/ubuntu/images/tweak-appearance_shell_1.png" alt="Tweak"></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y gnome-shell-extensions
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在<code>扩展</code>中打开<code>User themes</code>的选项之后，就可以看到感叹号消失了，这时候就可以修改<code>Shell</code>了
<img src="@source/linux/ubuntu/images/tweak-extension-user_themes.png" alt="extension user_themes">
<img src="@source/linux/ubuntu/images/tweak-appearance_shell_2.png" alt="appearance shell"></p>
<blockquote>
<p>如果扩展中没有 <code>User themes</code> 选项，则可能需要<code>reboot</code>重启设备
<code>User themes</code> 选项之后如果感叹号仍然没有消失，那么需要重新打开该软件</p>
</blockquote>
<h3 id="安装-macos-主题样式" tabindex="-1"><a class="header-anchor" href="#安装-macos-主题样式" aria-hidden="true">#</a> 安装 MacOS 主题样式</h3>
<ul>
<li>MacOS Monterey
<ul>
<li>壁纸</li>
<li>grub 主题 : <a href="https://www.opendesktop.org/p/1577873/" target="_blank" rel="noopener noreferrer">MacOS Monterey inspired grub theme<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>Big Sur
<ul>
<li><a href="https://www.opendesktop.org/p/1410476/" target="_blank" rel="noopener noreferrer">MacOS-3D-Originals-Gtk<ExternalLinkIcon/></a></li>
<li><a href="https://www.opendesktop.org/p/1412504/" target="_blank" rel="noopener noreferrer">MacOS-3D-Originals-Icons<ExternalLinkIcon/></a></li>
<li><a href="https://www.opendesktop.org/p/1408466/" target="_blank" rel="noopener noreferrer">macOS Big Sur:Cursors<ExternalLinkIcon/></a></li>
<li><a href="https://www.opendesktop.org/p/1410510/" target="_blank" rel="noopener noreferrer">MacOS-3D-Originals-Shell<ExternalLinkIcon/></a></li>
<li><a href="https://www.opendesktop.org/s/Gnome/p/1102582/" target="_blank" rel="noopener noreferrer">Cupertino iCons CollectionOriginal<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>Catalina
<ul>
<li><a href="https://www.opendesktop.org/s/Gnome/p/1013714/" target="_blank" rel="noopener noreferrer">McHigh Sierra<ExternalLinkIcon/></a></li>
<li><a href="https://www.opendesktop.org/s/Gnome/p/1241688" target="_blank" rel="noopener noreferrer">McOS-themes<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<blockquote>
<p>BigSur主题已经打包到<a href="https://github.com/HenryZhuHR/someTutorials/releases/download/0.0/MacOS-BigSur.tar.gz" target="_blank" rel="noopener noreferrer">Release<ExternalLinkIcon/></a>中，可以直接下载使用</p>
</blockquote>
<p>上述下载的文件夹复制到对应的系统文件夹</p>
<ul>
<li>主题 (themes)     : <code>/usr/share/themes</code></li>
<li>图标 (icons)      : <code>/usr/share/icons</code></li>
<li>终端 (shell)      : <code>/usr/share/themes</code></li>
<li>背景 (background) : <code>/usr/share/backgrounds</code></li>
</ul>
<p>之后就可以修改对应的主题</p>
<p><img src="@source/linux/ubuntu/images/tweak-application.png" alt="Application"></p>
<h3 id="程序坞修改" tabindex="-1"><a class="header-anchor" href="#程序坞修改" aria-hidden="true">#</a> 程序坞修改</h3>
<p><strong>Dash to Dock</strong>可以把程序坞变成 MacOS 的样子</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y chrome-gnome-shell
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>点击以下载 <a href="https://extensions.gnome.org/extension/307/dash-to-dock/" target="_blank" rel="noopener noreferrer">dash to dock<ExternalLinkIcon/></a>，并且打开右上角的按钮</p>
<p><img src="@source/linux/ubuntu/images/dash_to_dock-install.png" alt="下载 dash to dock"></p>
<p><img src="@source/linux/ubuntu/images/dash_to_dock-install_button.png" alt="打开 dash to dock"></p>
<p>之后在<code>优化(TWeak)</code>中启动<code>dash to dock</code></p>
<p><img src="@source/linux/ubuntu/images/dash_to_dock-start.png" alt="启动 dash to dock"></p>
<p>点击齿轮按钮，可以修改dock</p>
<h3 id="最终效果" tabindex="-1"><a class="header-anchor" href="#最终效果" aria-hidden="true">#</a> 最终效果</h3>
<p><img src="@source/linux/ubuntu/images/finalDesktop.png" alt="最终效果"></p>
<blockquote>
<p><strong>去掉默认密钥环的密码</strong></p>
<p>打开应用程序－&gt;附件－&gt;密码和加密密钥（如果你的没有，在终端中输入 seahorse），切换到密码选项卡，会看到一个密码密钥环（我的密钥环是 login），
右击－&gt;更改密码，然后在“旧密码”中填入系统登录密码，其他不用填，直接确定，并选择“使用不安全的存储器”，这样就可以去掉默认密钥环的密码了。</p>
</blockquote>
<h1 id="wsl2-windows-subsystem-for-linux" tabindex="-1"><a class="header-anchor" href="#wsl2-windows-subsystem-for-linux" aria-hidden="true">#</a> WSL2 (Windows Subsystem for Linux)</h1>
<p>参考官方的 <a href="https://docs.microsoft.com/zh-cn/windows/wsl/" target="_blank" rel="noopener noreferrer">适用于 Linux 的 Windows 子系统文档<ExternalLinkIcon/></a> 安装 WSL2 (Windows Subsystem for Linux)组件</p>
<p>安装完成后，</p>
<p>到 <code>Microsoft Store</code> 中下载需要的Linux发行版本，这里选择<a href="https://www.microsoft.com/store/productId/9NBLGGH4MSV6" target="_blank" rel="noopener noreferrer">Ubuntu<ExternalLinkIcon/></a></p>
<p><img src="@source/linux/ubuntu/images/wsl2-msstore-ubuntu.png" alt="Microsoft Store"></p>
<p>打开 PowerShell，然后在安装新的 Linux 发行版时运行以下命令，将 WSL 2 设置为默认版本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>wsl --set-default-version <span class="token number">2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>检查分配给每个已安装的 Linux 分发版的 WSL 版本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>wsl --list --verbose
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>启动 Ubuntu 之后进行短暂的安装</p>
<blockquote>
<p>推荐<a href="https://www.microsoft.com/store/productId/9N0DX20HK701" target="_blank" rel="noopener noreferrer">Windows Terminal<ExternalLinkIcon/></a>，Windows Terminal 可以用于启动Ubuntu
<img src="@source/linux/ubuntu/images/wsl2-windows-terminal.png" alt="Windows Terminal"></p>
</blockquote>
<blockquote>
<p>[!TIP]
安装后你只能得到命令行的 Ubuntu，但可以通过自行装上 Gnome 桌面，如果不需要图形用户界面可以跳过以下全部部分</p>
</blockquote>
<p>WSL 不支持 systemd 而 Gnome 桌面又是基于 systemd，所以先解决这个问题。（参考：ubuntu-wsl2-systemd-script 的解决方案）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span>
<span class="token comment"># Github</span>
<span class="token function">git</span> clone --depth <span class="token number">1</span> https://github.com/HenryZhuHR/ubuntu-wsl2-systemd-script.git
<span class="token comment"># Gitee</span>
<span class="token function">git</span> clone --depth <span class="token number">1</span> https://gitee.com/HenryZhuHR/ubuntu-wsl2-systemd-script
<span class="token builtin class-name">cd</span> ubuntu-wsl2-systemd-script
<span class="token function">bash</span> ubuntu-wsl2-systemd-script.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>重新启动子系统，或者重启电脑也行。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y ubuntu-desktop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>安装过程很漫长</p>
</blockquote>
<p>安装 Xrdp</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y xrdp
<span class="token function">sudo</span> systemctl status xrdp
<span class="token function">sudo</span> adduser xrdp ssl-cert
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>每次启动前运行的命令</strong>！</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart xrdp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>查看一下配置文件中的端口（默认：3389）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /etc/xrdp/xrdp.ini
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>配置防火墙</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> ufw allow <span class="token number">3389</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>登录远程桌面</p>
<p><img src="@source/linux/ubuntu/images/wsl2-login_remote_desktop.png" alt="登录远程桌面"></p>
<ul>
<li><strong>SSH 远程连接</strong></li>
</ul>
<p>重装原有SSH</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> remove openssh-server
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> openssh-server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>先解释一下WSL的网络，作为子系统的Ubuntu Linux和Windows主系统的IP是一样的。如果在Linux上搭建了Nginx服务器，那么在Windows上的浏览器上输入localhost是可以访问Nginx服务的。如果在Linux上运行netstat -nlp是不会看到任何端口服务的。在Linux上启用端口服务的时候，Windows系统会弹出窗口，询问是否允许相关端口访问。</p>
</blockquote>
<p>WSL上的Ubuntu默认安装了openssh-server，也就是ssh服务的软件。但是，这个软件的配置是不完整的，如果启用服务，会报缺失几个密钥文件。为了解决这个问题，我们需要重新安装openssh-server：</p>
<p>重新安装完还不行，因为WSL上的Ubuntu的SSH服务配置默认不允许密码方式登录，我们需要改配置：
更改配置文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/ssh/sshd_config
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>将以下配置复制到sshd_config配置文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Port <span class="token number">2222</span>                   <span class="token comment">#设置ssh的端口号, 由于22在windows中有别的用处, 尽量不修改系统的端口号</span>
PermitRootLogin <span class="token function">yes</span>         <span class="token comment"># 可以root远程登录</span>
PasswordAuthentication <span class="token function">yes</span>  <span class="token comment"># 允许密码验证登录</span>
AllowUsers ubutnu           <span class="token comment"># 远程登录时的用户名</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>重启sshd服务</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">ssh</span> --full-restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>此时，我们可以在Ubuntu的Bash下连接自己测试，也可以用Windows的PowerShell连接Ubuntu来测试，命令都是一样的</p>
<p>测试连接</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ssh</span> username@localhost:2222 	<span class="token comment"># username为安装WSL Ubuntu时输入的用户名</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果要在其它机器上访问，需要查找本机IP，把localhost换成IP，那么同一子网（wifi、路由器）下的机器也可访问Ubuntu里的服务。
如果在其他机器上连接不成功看是不是Win10本地防火墙的2222端口没有放行，放行端口方法</p>
<ul>
<li>防火墙-&gt;高级设置-&gt;入站规则-&gt;新建规则</li>
<li>端口-&gt;下一步</li>
<li>选择tcp 特定本地端口 2222</li>
<li>允许连接, 默认都选上, 下一步填个名字 完成</li>
</ul>
</template>
