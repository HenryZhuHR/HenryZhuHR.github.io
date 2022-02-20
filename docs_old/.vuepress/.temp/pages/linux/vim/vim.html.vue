<template><h1 id="vi-vim" tabindex="-1"><a class="header-anchor" href="#vi-vim" aria-hidden="true">#</a> Vi/Vim</h1>
<ul>
<li><a href="#vivim">Vi/Vim</a>
<ul>
<li><a href="#%E4%B8%89%E7%A7%8D%E6%A8%A1%E5%BC%8F">三种模式</a>
<ul>
<li><a href="#%E4%B8%80%E8%88%AC%E6%A8%A1%E5%BC%8F-command-mode">一般模式 (command mode)</a></li>
<li><a href="#%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F-insert-mode">编辑模式 (insert mode)</a></li>
<li><a href="#%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%A8%A1%E5%BC%8F-command-line-mode">命令行模式 (command-line mode)</a></li>
</ul>
</li>
<li><a href="#%E6%8C%89%E9%94%AE%E6%93%8D%E4%BD%9C">按键操作</a>
<ul>
<li><a href="#%E4%B8%80%E8%88%AC%E6%A8%A1%E5%BC%8F%E6%8C%89%E9%94%AE%E6%93%8D%E4%BD%9C">一般模式按键操作</a>
<ul>
<li><a href="#%E7%A7%BB%E5%8A%A8%E5%85%89%E6%A0%87">移动光标</a></li>
<li><a href="#%E6%9F%A5%E6%89%BE%E6%93%8D%E4%BD%9C">查找操作</a></li>
</ul>
</li>
<li><a href="#%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F%E6%8C%89%E9%94%AE%E6%93%8D%E4%BD%9C">编辑模式按键操作</a></li>
<li><a href="#%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%A8%A1%E5%BC%8F%E6%8C%89%E9%94%AE%E6%93%8D%E4%BD%9C">命令行模式按键操作</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="三种模式" tabindex="-1"><a class="header-anchor" href="#三种模式" aria-hidden="true">#</a> 三种模式</h2>
<ul>
<li>[x] <a href="#%E4%B8%80%E8%88%AC%E6%A8%A1%E5%BC%8F-command-mode">一般模式 (command mode)</a></li>
<li>[x] <a href="#%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F-insert-mode">编辑模式 (insert mode)</a></li>
<li>[x] <a href="#%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%A8%A1%E5%BC%8F-command-line-mode">命令行模式 (command-line mode)</a></li>
</ul>
<h3 id="一般模式-command-mode" tabindex="-1"><a class="header-anchor" href="#一般模式-command-mode" aria-hidden="true">#</a> 一般模式 (command mode)</h3>
<p>一般模式(command mode)，也叫命令模式。在一般模式下</p>
<ul>
<li>按 <code>i</code> 进入<a href="#%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F-insert-mode">编辑模式 (insert mode)</a></li>
<li>按 <code>:</code> 进入<a href="#%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%A8%A1%E5%BC%8F-command-line-mode">命令行模式 (command-line mode)</a></li>
</ul>
<p>用 vi/vim 打开一个文件之后，会默认进入一般模式。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vi</span> hello.cpp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="@source/linux/vim/images/command_mode.png" alt="命令模式 (command mode)"></p>
<p>一般模式下，可以移动光标，删除字符或者删除整行，也可以复制、粘贴文本内容</p>
<ul>
<li>移动光标</li>
<li>删除字符</li>
<li>删除整行</li>
<li>复制文本</li>
<li>粘贴文本</li>
</ul>
<h3 id="编辑模式-insert-mode" tabindex="-1"><a class="header-anchor" href="#编辑模式-insert-mode" aria-hidden="true">#</a> 编辑模式 (insert mode)</h3>
<p>编辑模式(insert mode)，也叫插入模式，在这个模式下可以自由编辑文本内容。</p>
<p>在一般模式下，按 <code>i/I</code> <code>o/O</code> <code>a/A</code>(insert), <code>r/R</code>(replace) 任意一个可以进入编辑模式，编辑模式英文为 insert mode ，所以便于记忆，习惯用 <code>i</code> 进入编辑模式。其中 <code>r/R</code> 是进入编辑模式中的替换</p>
<p>在编辑模式下，按 <code>Esc</code> 退回<a href="#%E4%B8%80%E8%88%AC%E6%A8%A1%E5%BC%8F-command-mode">一般模式 (command mode)</a></p>
<p><img src="@source/linux/vim/images/insert_mode.png" alt="编辑模式 (insert mode)"></p>
<h3 id="命令行模式-command-line-mode" tabindex="-1"><a class="header-anchor" href="#命令行模式-command-line-mode" aria-hidden="true">#</a> 命令行模式 (command-line mode)</h3>
<p>命令行模式(command-line mode)，也叫末行模式。</p>
<p>在一般模式下，按 <code>:</code> 会进入命令行模式，可以在 <code>:</code> 之后输入需要进行的操作</p>
<p>在命令行模式下，删除 <code>:</code> 及其后字符，退回至<a href="#%E4%B8%80%E8%88%AC%E6%A8%A1%E5%BC%8F-command-mode">一般模式 (command mode)</a></p>
<p><img src="@source/linux/vim/images/commandline_mode.png" alt="命令行模式 (command-line mode)"></p>
<h2 id="按键操作" tabindex="-1"><a class="header-anchor" href="#按键操作" aria-hidden="true">#</a> 按键操作</h2>
<h3 id="一般模式按键操作" tabindex="-1"><a class="header-anchor" href="#一般模式按键操作" aria-hidden="true">#</a> 一般模式按键操作</h3>
<h4 id="移动光标" tabindex="-1"><a class="header-anchor" href="#移动光标" aria-hidden="true">#</a> 移动光标</h4>
<ul>
<li><code>h</code> 或 ⬅️ : 左移， 先后按下 <code>3</code> 和 <code>h</code> 左移3个字符</li>
<li><code>j</code> 或 ➡️ : 下移， <code>5j</code> 左移5行</li>
<li><code>k</code> 或 ⬆️ : 上移， <code>6k</code> 左移6个字符</li>
<li><code>l</code> 或 ⬇️ : 右移， <code>7l</code> 右移7两行</li>
<li><code>0</code> : 移动到当前行的最前</li>
<li><code>$</code> : 移动到当前行的最后</li>
<li><code>n+G</code> : 先输入数字 <code>n</code> 并按下 <code>G</code>(大写)，移动到当前文件的第n行。<code>gg</code>=<code>1G</code>，移动到首行</li>
<li><code>n+Enter</code> : 先输入数字 <code>n</code> 并按下 <code>Enter</code> ，向下移动n行</li>
<li><code>ctrl+f</code> : 屏幕向下移动一页</li>
<li><code>ctrl+b</code> : 屏幕向上移动一页</li>
<li><code>ctrl+d</code> : 屏幕向下移动半页</li>
<li><code>ctrl+u</code> : 屏幕向上移动半页</li>
</ul>
<h4 id="查找操作" tabindex="-1"><a class="header-anchor" href="#查找操作" aria-hidden="true">#</a> 查找操作</h4>
<ul>
<li><code>/word</code> : 查找光标之后的内容 <code>word</code> ，若要查找单词 <code>linux</code> ，输入 <code>/word</code> 即可</li>
<li><code>?word</code> : 查找光标之前的内容 <code>word</code></li>
</ul>
<p>查找后</p>
<ul>
<li><code>n</code> : 重复前一个查找操作，查找下一个内容 <code>/</code> 则是向下， <code>？</code> 表示向上，理解为next</li>
<li><code>N</code> : 重复查找操作，与 <code>n</code> 操作相反</li>
</ul>
<h3 id="编辑模式按键操作" tabindex="-1"><a class="header-anchor" href="#编辑模式按键操作" aria-hidden="true">#</a> 编辑模式按键操作</h3>
<h3 id="命令行模式按键操作" tabindex="-1"><a class="header-anchor" href="#命令行模式按键操作" aria-hidden="true">#</a> 命令行模式按键操作</h3>
</template>
