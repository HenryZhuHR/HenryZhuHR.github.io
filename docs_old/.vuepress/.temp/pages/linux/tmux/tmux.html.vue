<template><h1 id="tmux" tabindex="-1"><a class="header-anchor" href="#tmux" aria-hidden="true">#</a> tmux</h1>
<p><img src="@source/linux/tmux/images/tmux.png" alt="tmux"></p>
<ul>
<li><a href="#tmux">tmux</a>
<ul>
<li><a href="#tmux-%E5%AE%89%E8%A3%85">tmux 安装</a></li>
<li><a href="#tmux-%E4%B8%AD%E7%9A%84%E5%90%8D%E7%A7%B0%E4%B8%8E%E5%89%8D%E7%BC%80%E9%94%AE">tmux 中的名称与前缀键</a></li>
<li><a href="#tmux-%E7%9A%84%E4%BC%9A%E8%AF%9D%E7%AE%A1%E7%90%86">tmux 的会话管理</a>
<ul>
<li><a href="#%E6%96%B0%E5%BB%BA%E4%BC%9A%E8%AF%9D">新建会话</a></li>
<li><a href="#%E6%8C%82%E8%B5%B7%E4%BC%9A%E8%AF%9D">挂起会话</a></li>
<li><a href="#%E6%9F%A5%E7%9C%8B%E4%BC%9A%E8%AF%9D">查看会话</a></li>
<li><a href="#%E8%BF%9B%E5%85%A5%E4%BC%9A%E8%AF%9D">进入会话</a></li>
<li><a href="#%E9%80%80%E5%87%BA%E4%BC%9A%E8%AF%9D">退出会话</a></li>
<li><a href="#%E5%88%87%E6%8D%A2%E4%BC%9A%E8%AF%9D">切换会话</a></li>
<li><a href="#%E9%87%8D%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D">重命名会话</a></li>
</ul>
</li>
<li><a href="#%E7%AA%97%E6%A0%BC%E7%AE%A1%E7%90%86">窗格管理</a>
<ul>
<li><a href="#%E5%88%92%E5%88%86%E7%AA%97%E6%A0%BC">划分窗格</a></li>
<li><a href="#%E5%88%87%E6%8D%A2%E7%AA%97%E6%A0%BC">切换窗格</a></li>
</ul>
</li>
<li><a href="#%E7%AA%97%E5%8F%A3%E7%AE%A1%E7%90%86">窗口管理</a></li>
</ul>
</li>
<li><a href="#%E5%BF%AB%E6%8D%B7%E9%94%AE">快捷键</a></li>
</ul>
<h2 id="tmux-安装" tabindex="-1"><a class="header-anchor" href="#tmux-安装" aria-hidden="true">#</a> tmux 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Mac</span>
brew <span class="token function">install</span> tmux

<span class="token comment"># Ubuntu/Debian</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y tmux
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="tmux-中的名称与前缀键" tabindex="-1"><a class="header-anchor" href="#tmux-中的名称与前缀键" aria-hidden="true">#</a> tmux 中的名称与前缀键</h2>
<p>在 tmux 中，有三个基本的概念</p>
<ul>
<li>session : 会话/任务</li>
<li>window  : 窗口</li>
<li>pane    ：窗格</li>
</ul>
<p>在 tmux 中，使用快捷键是使用 <code>ctrl+B</code> 去唤起快捷键的 (MacOS 中则是 <code>control+B</code>)，叫<strong>前缀键</strong></p>
<blockquote>
<p>[!NOTE|label:很重要的快捷键操作指南]
例如挂起 session 的快捷键是 <code>ctrl+B d</code> 。意思是，先按下前缀键 <code>ctrl+B</code> 唤起快捷键操作，然后接着按下 <code>d</code> 进行相应操作</p>
</blockquote>
<h2 id="tmux-的会话管理" tabindex="-1"><a class="header-anchor" href="#tmux-的会话管理" aria-hidden="true">#</a> tmux 的会话管理</h2>
<h3 id="新建会话" tabindex="-1"><a class="header-anchor" href="#新建会话" aria-hidden="true">#</a> 新建会话</h3>
<p>新建一个默认的 session</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tmux
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="@source/linux/tmux/images/start.png" alt="tmux"></p>
<p>这时候新建一个默认的 session ，底部有一个状态栏。左侧 <code>[0] 0:zsh*</code> 是窗口编号、名称和终端信息，右侧是当前的系统信息。</p>
<p>为了方便 session 的管理，在新建 session 时，（推荐）指定名称</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tmux new -s <span class="token operator">&lt;</span>session_name<span class="token operator">></span>

<span class="token comment"># example : create a session to train CNN</span>
tmux new -s trainCNN
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="@source/linux/tmux/images/new_session-name.png" alt="tmux name"></p>
<p>这时候的 session 名称就是 <code>trainCNN</code> 了， <code>[trainCNN]0:zsh*</code></p>
<h3 id="挂起会话" tabindex="-1"><a class="header-anchor" href="#挂起会话" aria-hidden="true">#</a> 挂起会话</h3>
<p>当想要挂起一个 session 让其在后台继续工作而不是退出的时候</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tmux detach
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>快捷键 <code>ctrl+B d</code></p>
<p><img src="@source/linux/tmux/images/detach.png" alt="tmux name"></p>
<p>这时候该 session 会继续挂在后台运行继续执行任务 (显示为 <code>[detach (from seesion xxx)]</code>)，直到再次被唤起或被 kill 掉。</p>
<h3 id="查看会话" tabindex="-1"><a class="header-anchor" href="#查看会话" aria-hidden="true">#</a> 查看会话</h3>
<p>我们想查看当前 tmux 挂在后台的 session 时，可以</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tmux list-sessions
<span class="token comment"># or </span>
tmux <span class="token function">ls</span> -F trainCNN
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>快捷键 <code>ctrl+B s</code></p>
<p><img src="@source/linux/tmux/images/ls.png" alt="tmux name"></p>
<p>如果已经在某个 session 内的时候，可以通过快捷键 <code>ctrl+B s</code> 来查看，黄色高光部分就是当前正在运行的 session
<img src="@source/linux/tmux/images/ls-tmux.png" alt="tmux name"></p>
<h3 id="进入会话" tabindex="-1"><a class="header-anchor" href="#进入会话" aria-hidden="true">#</a> 进入会话</h3>
<p>当我们想要进入一个 session 的时候，可以通过 session 的编号或者名字来进入</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tmux attach -t <span class="token operator">&lt;</span>session_name<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>例如当前运行的两个 session 分别是<strong>编号为</strong> <code>0</code> 和<strong>名称为</strong> <code>trainCNN</code> 的 session
<img src="@source/linux/tmux/images/attach.png" alt="tmux name"></p>
<p>我们想要进入其中一个 session 的时候，可以通过编号进入，也可以通过名称进入</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tmux attach -t <span class="token number">0</span>
tmux a -t <span class="token number">0</span>

<span class="token comment"># example : resume trainCNN session</span>
tmux attach -t trainCNN
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="退出会话" tabindex="-1"><a class="header-anchor" href="#退出会话" aria-hidden="true">#</a> 退出会话</h3>
<p>当完成任务后，需要彻底退出 session 而不是挂在后台的时候，可以</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tmux kill-session -t <span class="token operator">&lt;</span>session_name<span class="token operator">></span>

<span class="token comment"># example : when finnished CNN training</span>
tmux kill-session -t trainCNN
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="@source/linux/tmux/images/kill_session.png" alt="tmux name">
这时候 session 就会被 kill 掉，并且出现 <code>[exited]</code> ，表示已经退出了。在 <code>tmux ls</code> 查看 session 的时候，也不会有该 session 了</p>
<p>退出当前 session 的快捷键是  <code>ctrl+d</code></p>
<h3 id="切换会话" tabindex="-1"><a class="header-anchor" href="#切换会话" aria-hidden="true">#</a> 切换会话</h3>
<p>执行命令,可以从当前的 session 快速切换到另一个 session：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tmux switch -t <span class="token operator">&lt;</span>session_name<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="重命名会话" tabindex="-1"><a class="header-anchor" href="#重命名会话" aria-hidden="true">#</a> 重命名会话</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tmux rename-session -t <span class="token operator">&lt;</span>old_session_name<span class="token operator">></span> <span class="token operator">&lt;</span>new_session_name<span class="token operator">></span>

<span class="token comment"># example : rename trainCNN to trainLSTM</span>
tmux rename-session -t trainCNN trainLSTM
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>快捷键 <code>ctrl+b $</code></p>
<h2 id="窗格管理" tabindex="-1"><a class="header-anchor" href="#窗格管理" aria-hidden="true">#</a> 窗格管理</h2>
<h3 id="划分窗格" tabindex="-1"><a class="header-anchor" href="#划分窗格" aria-hidden="true">#</a> 划分窗格</h3>
<ul>
<li><code>Ctrl+b %</code>：划分左右两个窗格。</li>
<li><code>Ctrl+b &quot;</code>：划分上下两个窗格。</li>
</ul>
<h3 id="切换窗格" tabindex="-1"><a class="header-anchor" href="#切换窗格" aria-hidden="true">#</a> 切换窗格</h3>
<p><code>Ctrl+b &lt;arrow key&gt;</code>：光标切换到其他窗格。<code>&lt;arrow key&gt;</code>是指向要切换到的窗格的方向键，比如切换到下方窗格，就按方向键↓。
<code>Ctrl+b ;</code>：光标切换到上一个窗格。
<code>Ctrl+b o</code>：光标切换到下一个窗格。
<code>Ctrl+b {</code>：当前窗格与上一个窗格交换位置。
<code>Ctrl+b }</code>：当前窗格与下一个窗格交换位置。
<code>Ctrl+b Ctrl+o</code>：所有窗格向前移动一个位置，第一个窗格变成最后一个窗格。
<code>Ctrl+b Alt+o</code>：所有窗格向后移动一个位置，最后一个窗格变成第一个窗格。
<code>Ctrl+b x</code>：关闭当前窗格。
<code>Ctrl+b !</code>：将当前窗格拆分为一个独立窗口。
<code>Ctrl+b z</code>：当前窗格全屏显示，再使用一次会变回原来大小。
<code>Ctrl+b Ctrl+&lt;arrow key&gt;</code>：按箭头方向调整窗格大小。
<code>Ctrl+b q</code>：显示窗格编号。</p>
<h2 id="窗口管理" tabindex="-1"><a class="header-anchor" href="#窗口管理" aria-hidden="true">#</a> 窗口管理</h2>
<p>新建窗口 <code>ctrl+b c</code>
重命名窗口 <code>ctrl+b ,</code>
关闭窗口 <code>ctrl+b x</code></p>
<h1 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h1>
</template>
