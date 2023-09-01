import{b as n}from"./app.502a2083.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=n(`<h1 id="ubutnu-go" tabindex="-1"><a class="header-anchor" href="#ubutnu-go" aria-hidden="true">#</a> Ubutnu Go</h1><ul><li>\u{1F4B2}<a href="#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">\u73AF\u5883\u53D8\u91CF</a></li><li>\u{1F4B2}<a href="#%E7%94%A8%E6%88%B7%E5%92%8C%E7%94%A8%E6%88%B7%E7%BB%84">\u7528\u6237\u548C\u7528\u6237\u7EC4</a></li><li>\u{1F4B2}<a href="#dotfiles">Dotfiles</a></li><li>\u{1F4B2}<a href="#%E5%90%8E%E5%8F%B0%E8%BF%90%E8%A1%8C">\u540E\u53F0\u8FD0\u884C</a></li><li>\u{1F4B2}<a href="#%E7%A3%81%E7%9B%98">\u78C1\u76D8</a></li><li>\u{1F4B2}<a href="#%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E5%A4%B9">\u5171\u4EAB\u6587\u4EF6\u5939</a></li><li>\u{1F4B2}<a href="#%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8">\u6587\u672C\u7F16\u8F91\u5668</a></li><li>\u{1F4B2}<a href="#%E8%BF%90%E7%BB%B4">\u8FD0\u7EF4</a></li></ul><blockquote><p>\u4E00\u4E9B Ubuntu \u4F7F\u7528\u5C0F\u6280\u5DE7\uFF0C\u540C\u6837\u9002\u7528\u4E8E\u5176\u4ED6 Linux \u53D1\u884C\u7248\u672C</p></blockquote><h2 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF</h2><h3 id="\u5982\u4F55\u67E5\u770B\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u67E5\u770B\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u5982\u4F55\u67E5\u770B\u73AF\u5883\u53D8\u91CF</h3><p>\u67E5\u770B\u73AF\u5883\u53D8\u91CF\u6709\u4E09\u4E2A\u547D\u4EE4\uFF1A</p><ul><li><code>env</code>: \u5217\u51FA\u6240\u6709\u7684\u73AF\u5883\u53D8\u91CF</li><li><code>export</code>: \u5217\u51FA\u6240\u6709\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u4F46 export \u53EF\u4EE5\u6307\u5B9A\u5217\u51FA\u67D0\u4E00\u73AF\u5883\u53D8\u91CF</li><li><code>echo $PATH</code>: \u5217\u51FA\u6307\u5B9A\u53D8\u91CF\uFF0C\u4F8B\u5982\u5217\u51FA\u53D8\u91CF <code>PATH</code> \u7684\u503C\uFF0C\u91CC\u9762\u5305\u542B\u4E86\u5DF2\u6DFB\u52A0\u7684\u76EE\u5F55\u3002</li></ul><p>\u6709\u4E00\u4E9B\u5341\u5206\u6709\u7528\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u4F8B\u5982</p><ul><li><code>USER</code>: \u5F53\u524D\u767B\u9646\u7528\u6237\uFF0C\u4F8B\u5982 <code>ubuntu</code>\u3002</li><li><code>HOME</code>: \u5F53\u524D\u767B\u9646\u7528\u6237\u7684\u7528\u6237\u76EE\u5F55\uFF0C\u4F8B\u5982\u7B49\u4EF7\u4E8E <code>/home/ubuntu</code>\u3002</li><li><code>PWD</code>: \u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55</li></ul><h3 id="\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E24\u6761\u547D\u4EE4\u6548\u679C\u4E00\u6837\u7684\uFF0C\u533A\u522B\u5728\u4E8E\u7CFB\u7EDF\u67E5\u627E\u8DEF\u5F84\u7684\u987A\u5E8F</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/path/to/your/dir       <span class="token comment"># \u52A0\u5230 PATH \u672B\u5C3E</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/path/to/your/dir:<span class="token environment constant">$PATH</span>       <span class="token comment"># \u52A0\u5230 PATH \u5F00\u5934</span>
</code></pre></div><p>\u6DFB\u52A0\u8DEF\u5F84\u540E\uFF0C\u53EF\u4EE5\u8FD0\u884C <code>echo $PATH</code> \u67E5\u770B\u8DEF\u5F84\uFF0C\u8FD9\u662F</p><p>\u540C\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u65B0\u5EFA\u53D8\u91CF\u4F9B\u5176\u4ED6\u7A0B\u5E8F\u4F7F\u7528\uFF0C\u4F8B\u5982\u8BBE\u7F6E <code>OpenCV_DIR</code> \u4F9B CMake \u7F16\u8BD1\u67E5\u627E\u4F7F\u7528</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">OpenCV_HOME</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/program/opencv-4.5.5
<span class="token builtin class-name">export</span> <span class="token assign-left variable">OpenCV_DIR</span><span class="token operator">=</span><span class="token variable">$OpenCV_HOME</span>/lib/cmake/opencv4
</code></pre></div><p>\u76F8\u8F83\u4E8E Windows \u64CD\u4F5C\u7CFB\u7EDF\u6765\u8BF4\uFF0C</p><h3 id="\u73AF\u5883\u53D8\u91CF\u7684\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF\u7684\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF\u7684\u4F5C\u7528\u57DF</h3><ul><li><strong>\u7EC8\u7AEF\u4F5C\u7528\u57DF</strong></li></ul><p>\u5728\u5F53\u524D\u7EC8\u7AEF\u4E0B\uFF0C\u76F4\u63A5\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF\uFF0C\u53EA\u5BF9\u5F53\u524D\u7EC8\u7AEF\u751F\u6548\uFF0C\u9000\u51FA\u7EC8\u7AEF\u540E\u5931\u6548</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/program/jdk-17.0.2.jdk/Contents/Home
</code></pre></div><ul><li><strong>\u5F53\u524D\u7528\u6237\u4F5C\u7528\u57DF</strong> <span id="env-var-for-user"></span></li></ul><p>\u7F16\u8F91\u7528\u6237\u76EE\u5F55\u4E0B\u7684 <code>~/.bashrc</code> \u6587\u4EF6</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> ~/.bashrc
</code></pre></div><p>\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/program/jdk-17.0.2.jdk/Contents/Home
</code></pre></div><p>\u7136\u540E\u91CD\u542F\u7EC8\u7AEF\u6216\u8005\u8FD0\u884C\u547D\u4EE4\u6FC0\u6D3B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc
</code></pre></div><blockquote><ul><li><code>~</code> \u4E0E <code>$HOME</code> \u53D8\u91CF\u7684\u503C\u4E00\u81F4\uFF0C\u8868\u793A\u5F53\u524D\u7528\u6237\u76EE\u5F55</li><li><code>.bashrc</code> \u6587\u4EF6\u6307\u7684\u662F bash \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5982\u679C\u7CFB\u7EDF\u4F7F\u7528\u7684\u662F\u5176\u4ED6 shell \uFF0C\u4F8B\u5982\u4F7F\u7528 zsh \u5E94\u8BE5\u4FEE\u6539 <code>.zshrc</code></li></ul></blockquote><ul><li><strong>\u5168\u90E8\u7528\u6237\u4F5C\u7528\u57DF</strong></li></ul><p>\u7F16\u8F91\u7CFB\u7EDF\u76EE\u5F55\u4E0B\u7684 <code>/etc/profile</code> \u6587\u4EF6\uFF0C\u6D41\u7A0B<a href="#env-var-for-user">\u5F53\u524D\u7528\u6237\u4F5C\u7528\u57DF</a></p><h2 id="\u7528\u6237\u548C\u7528\u6237\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u548C\u7528\u6237\u7EC4" aria-hidden="true">#</a> \u7528\u6237\u548C\u7528\u6237\u7EC4</h2><h3 id="\u65B0\u589E\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u7528\u6237" aria-hidden="true">#</a> \u65B0\u589E\u7528\u6237</h3><p>\u5F53\u6211\u4EEC\u9700\u8981\u5728\u7CFB\u7EDF\u4E2D\u6DFB\u52A0\u7528\u6237\u{1F9D1}\u{1F3FB}\u200D\u{1F4BB}\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u547D\u4EE4\u5FEB\u901F\u6DFB\u52A0(\u8BB0\u5F97\u4FEE\u6539 <code>USERNAME</code> \u53D8\u91CF)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">USERNAME</span><span class="token operator">=</span>test   <span class="token comment"># change this variable for user</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> -s /usr/bin/bash -m <span class="token variable">\${USERNAME}</span>
</code></pre></div><p>\u7136\u540E\u6267\u884C\u547D\u4EE4 <code>passwd</code> \u4FEE\u6539\u5BC6\u7801</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">passwd</span> <span class="token variable">\${USERNAME}</span>
</code></pre></div><p><code>useradd</code> \u547D\u4EE4\u8FD8\u6709\u5176\u4ED6\u4E00\u4E9B\u53C2\u6570\u53EF\u4EE5\u8FDB\u4E00\u6B65\u63A7\u5236\u65B0\u589E\u7528\u6237</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">useradd</span> <span class="token punctuation">[</span>-u <span class="token environment constant">UID</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-g GROUP<span class="token punctuation">]</span> <span class="token punctuation">[</span>-G GROUP<span class="token punctuation">]</span> <span class="token punctuation">[</span>-d DIR<span class="token punctuation">]</span> <span class="token punctuation">[</span>-mM<span class="token punctuation">]</span> <span class="token punctuation">\\</span>
  <span class="token punctuation">[</span>-c <span class="token string">&quot;comment&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-r<span class="token punctuation">]</span> <span class="token punctuation">[</span>-s <span class="token environment constant">SHELL</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-e YYYY-MM-DD<span class="token punctuation">]</span> <span class="token punctuation">[</span>-f INACTIVE<span class="token punctuation">]</span> <span class="token punctuation">\\</span>
  <span class="token operator">&lt;</span>USERNAME<span class="token operator">&gt;</span>
</code></pre></div><ul><li><code>-u</code>: \u6307\u5B9A\u7528\u6237\u7684 UID\uFF0C\u4E00\u822C\u4E0D\u8981\u5C0F\u4E8E 500</li><li><code>-d</code>: \u6307\u5B9A\u7528\u6237\u7684\u4E3B\u76EE\u5F55(\u7EDD\u5BF9\u8DEF\u5F84)\uFF0C\u4F8B\u5982 <code>/home/userA</code></li><li><code>-g</code>: \u6307\u5B9A\u7528\u6237\u7684\u521D\u59CB\u7EC4\u540D\u3002\u4E00\u822C\u4EE5\u548C\u7528\u6237\u540D\u76F8\u540C\u7684\u7EC4\u4F5C\u4E3A\u7528\u6237\u7684\u521D\u59CB\u7EC4\uFF0C\u5728\u521B\u5EFA\u7528\u6237\u65F6\u4F1A\u9ED8\u8BA4\u5EFA\u7ACB\u521D\u59CB\u7EC4</li><li><code>-G</code>: \u6307\u5B9A\u7528\u6237\u7684\u9644\u52A0\u7EC4\u3002\u6211\u4EEC\u628A\u7528\u6237\u52A0\u5165\u5176\u4ED6\u7EC4\uFF0C\u4E00\u822C\u90FD\u4F7F\u7528\u9644\u52A0\u7EC4</li><li><code>-s</code>: \u6307\u5B9A\u7528\u6237\u7684\u767B\u5F55 Shell\uFF0C\u9ED8\u8BA4\u4E3A <code>-s /bin/bash</code></li><li><code>-m</code>: \u5EFA\u7ACB\u7528\u6237\u65F6\u5F3A\u5236\u5EFA\u7ACB\u7528\u6237\u76EE\u5F55\u3002\u5728\u5EFA\u7ACB\u7CFB\u7EDF\u7528\u6237\u65F6\uFF0C\u8BE5\u9009\u9879\u662F\u9ED8\u8BA4\u7684\uFF1B</li><li><code>-e</code>: \u6307\u5B9A\u7528\u6237\u7684\u5931\u6548\u65E5\u671F\uFF0C\u683C\u5F0F\u4E3A <code>-e YYYY-MM-DD</code>\u3002\u4E5F\u5C31\u662F <code>/etc/shadow</code> \u6587\u4EF6\u7684\u7B2C\u516B\u4E2A\u5B57\u6BB5\uFF1B</li><li><code>-f</code>: \u6307\u5B9A\u7528\u6237\u7684\u5931\u6548\u65F6\u957F\uFF0C\u7ECF\u8FC7 <code>INACTIVE</code> \u5929\u540E\u8BE5\u8D26\u6237\u5931\u6548</li><li><code>-r</code>: \u521B\u5EFA\u7CFB\u7EDF\u7528\u6237\uFF0C\u4E5F\u5C31\u662F UID \u5728 1~499 \u4E4B\u95F4\uFF0C\u4F9B\u7CFB\u7EDF\u7A0B\u5E8F\u4F7F\u7528\u7684\u7528\u6237\u3002\u7531\u4E8E\u7CFB\u7EDF\u7528\u6237\u4E3B\u8981\u7528\u4E8E\u8FD0\u884C\u7CFB\u7EDF\u6240\u9700\u670D\u52A1\u7684\u6743\u9650\u914D\u7F6E\uFF0C\u56E0\u6B64\u7CFB\u7EDF\u7528\u6237\u7684\u521B\u5EFA\u9ED8\u8BA4\u4E0D\u4F1A\u521B\u5EFA\u4E3B\u76EE\u5F55</li></ul><p>\u5B9E\u9645\u4E0A\uFF0C\u53EF\u4EE5\u7B80\u5355\u901A\u8FC7 <code>useradd &lt;USERNAME&gt;</code> \u6765\u521B\u5EFA\u7528\u6237\uFF0C\u5E76\u4E14\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\u3002\u9ED8\u8BA4\u914D\u7F6E\u5B58\u50A8\u5728\u6587\u4EF6 <code>/etc/default/useradd</code> \u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4 <code>useradd -D</code> \u67E5\u770B\u6216\u76F4\u63A5\u67E5\u770B\u8BE5\u6587\u4EF6</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">useradd</span> -D
<span class="token assign-left variable">GROUP</span><span class="token operator">=</span><span class="token number">100</span>             <span class="token comment"># \u9ED8\u8BA4\u7528\u6237\u7EC4\uFF0C\u5373 users</span>
<span class="token assign-left variable"><span class="token environment constant">HOME</span></span><span class="token operator">=</span>/home            <span class="token comment"># \u9ED8\u8BA4\u5728\u8BE5\u76EE\u5F55\u4E0B\u521B\u5EFA\u7528\u6237\u76EE\u5F55</span>
<span class="token assign-left variable">INACTIVE</span><span class="token operator">=</span>-1           <span class="token comment"># \u5BC6\u7801\u5931\u6548\u65E5(\u5929\u6570)\uFF0C\`/etc/shadow\` \u7684\u7B2C\u4E03\u4E2A\u5B57\u6BB5\uFF0C-1 \u8868\u793A\u6C38\u8FDC\u4E0D\u4F1A\u5931\u6548</span>
<span class="token assign-left variable">EXPIRE</span><span class="token operator">=</span>               <span class="token comment"># \u8D26\u6237\u5931\u6548\u65E5(\u65E5\u671F)\uFF0C\`/etc/shadow\` \u7684\u7B2C\u516B\u4E2A\u5B57\u6BB5</span>
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/sh         <span class="token comment"># \u7528\u6237\u9ED8\u8BA4\u4F7F\u7528\u7684 shell</span>
<span class="token assign-left variable">SKEL</span><span class="token operator">=</span>/etc/skel        <span class="token comment"># \u521B\u5EFA\u7528\u6237\u76EE\u5F55\u7684\u53C2\u8003\u76EE\u5F55</span>
<span class="token assign-left variable">CREATE_MAIL_SPOOL</span><span class="token operator">=</span>no  <span class="token comment"># \u662F\u5426\u4E3A\u4F7F\u7528\u8005\u5EFA\u7ACB\u90AE\u7BB1</span>
</code></pre></div><p>\u4F7F\u7528\u547D\u4EE4 <code>useradd -D [options] &lt;param&gt;</code> \u53EF\u4EE5\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6(<code>&lt;param&gt;</code> \u9700\u8981\u81EA\u884C\u4FEE\u6539)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">useradd</span> -D -b <span class="token operator">&lt;</span><span class="token environment constant">HOME</span><span class="token operator">&gt;</span>
<span class="token function">useradd</span> -D -e <span class="token operator">&lt;</span>EXPIRE<span class="token operator">&gt;</span>  
<span class="token function">useradd</span> -D -f <span class="token operator">&lt;</span>INACTIVE<span class="token operator">&gt;</span>
<span class="token function">useradd</span> -D -g <span class="token operator">&lt;</span>GROUP<span class="token operator">&gt;</span>
<span class="token comment"># \u4F8B\u5982\u4FEE\u6539\u9ED8\u8BA4 shell</span>
<span class="token function">useradd</span> -D -s /bin/bash
</code></pre></div><h2 id="dotfiles" tabindex="-1"><a class="header-anchor" href="#dotfiles" aria-hidden="true">#</a> Dotfiles</h2><p><a href="https://www.freecodecamp.org/news/dotfiles-what-is-a-dot-file-and-how-to-create-it-in-mac-and-linux/" target="_blank" rel="noopener noreferrer">Dotfiles \u2013 What is a Dotfile and How to Create it in Mac and Linux</a></p><h2 id="\u540E\u53F0\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u540E\u53F0\u8FD0\u884C" aria-hidden="true">#</a> \u540E\u53F0\u8FD0\u884C</h2><p>https://zhuanlan.zhihu.com/p/344554760</p><h3 id="\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a> \u5B9A\u65F6\u4EFB\u52A1</h3><p>linux \u5185\u7F6E\u7684 cron \u8FDB\u7A0B\u80FD\u5B9A\u65F6\u8FD0\u884C\u4EFB\u52A1\u3002<code>crontab</code> \u547D\u4EE4\u662F cron table \u7684\u7B80\u5199\uFF0C\u5B83\u662F cron \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u53EB\u5B83\u4F5C\u4E1A\u5217\u8868\u3002</p><p>\u76F8\u5173\u914D\u7F6E\u6587\u4EF6\u5728\u5982\u4E0B\u4F4D\u7F6E\uFF1A</p><ul><li><code>/var/spool/cron/</code> \u76EE\u5F55\u4E0B\u5B58\u653E\u7684\u662F\u6BCF\u4E2A\u7528\u6237\u5305\u62EC root \u7684 crontab\u4EFB\u52A1\uFF0C\u6BCF\u4E2A\u4EFB\u52A1\u4EE5\u521B\u5EFA\u8005\u7684\u540D\u5B57\u547D\u540D</li><li><code>/etc/crontab</code> \u8FD9\u4E2A\u6587\u4EF6\u8D1F\u8D23\u8C03\u5EA6\u5404\u79CD\u7BA1\u7406\u548C\u7EF4\u62A4\u4EFB\u52A1\u3002</li><li><code>/etc/cron.d/</code> \u8FD9\u4E2A\u76EE\u5F55\u7528\u6765\u5B58\u653E\u4EFB\u4F55\u8981\u6267\u884C\u7684crontab\u6587\u4EF6\u6216\u811A\u672C\u3002</li><li>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u628A\u811A\u672C\u653E\u5728 <code>/etc/cron.hourly</code> , <code>/etc/cron.daily</code> , <code>/etc/cron.weekly</code> , <code>/etc/cron.monthly</code> \u76EE\u5F55\u4E2D\uFF0C\u8BA9\u5B83\u6BCF\u5C0F\u65F6/\u5929/\u661F\u671F\u3001\u6708\u6267\u884C\u4E00\u6B21\u3002</li></ul><p><code>crontab</code> \u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token punctuation">[</span>-u username<span class="token punctuation">]</span>\u3000\u3000\u3000\u3000//\u7701\u7565\u7528\u6237\u8868\u8868\u793A\u64CD\u4F5C\u5F53\u524D\u7528\u6237\u7684crontab
    -e      <span class="token punctuation">(</span>\u7F16\u8F91\u5DE5\u4F5C\u8868<span class="token punctuation">)</span>
    -l      <span class="token punctuation">(</span>\u5217\u51FA\u5DE5\u4F5C\u8868\u91CC\u7684\u547D\u4EE4<span class="token punctuation">)</span>
    -r      <span class="token punctuation">(</span>\u5220\u9664\u5DE5\u4F5C\u4F5C<span class="token punctuation">)</span>
</code></pre></div><p>\u6211\u4EEC\u7528 <code>crontab -e</code> \u8FDB\u5165\u5F53\u524D\u7528\u6237\u7684\u5DE5\u4F5C\u8868\u7F16\u8F91\uFF0C\u662F\u5E38\u89C1\u7684 vim \u754C\u9762\u3002\u6BCF\u884C\u662F\u4E00\u6761\u547D\u4EE4\u3002</p><p><code>crontab</code> \u7684\u547D\u4EE4\u6784\u6210\u4E3A <code>\u65F6\u95F4 + \u52A8\u4F5C</code>\uFF0C\u5176\u65F6\u95F4\u6709\u5206\u3001\u65F6\u3001\u65E5\u3001\u6708\u3001\u5468\u4E94\u79CD\uFF0C\u64CD\u4F5C\u7B26\u6709</p><ul><li><code>*</code> \u53D6\u503C\u8303\u56F4\u5185\u7684\u6240\u6709\u6570\u5B57</li><li><code>/</code>\xA0\u6BCF\u8FC7\u591A\u5C11\u4E2A\u6570\u5B57</li><li><code>-</code>\xA0\u4ECEX\u5230Z</li><li><code>,</code> \u6563\u5217\u6570\u5B57</li></ul><p><code>m h dom mon dow command</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code>* * * * * <span class="token builtin class-name">command</span>         <span class="token comment"># \u6BCF\u5206\u949F\u6267\u884C\u4E00\u6B21 command</span>
* <span class="token number">0</span> */1 * * * <span class="token builtin class-name">command</span>     <span class="token comment"># \u6BCF\u5206\u949F\u6267\u884C\u4E00\u6B21 command</span>
<span class="token number">3,15</span> * * * * <span class="token builtin class-name">command</span>      <span class="token comment"># \u6BCF\u5C0F\u65F6\u7684\u7B2C3\u548C\u7B2C15\u5206\u949F\u6267\u884C</span>
<span class="token number">3,15</span> <span class="token number">8</span>-11 * * * <span class="token builtin class-name">command</span>   <span class="token comment"># \u5728\u4E0A\u53488\u70B9\u523011\u70B9\u7684\u7B2C3\u548C\u7B2C15\u5206\u949F\u6267\u884C</span>
<span class="token number">3,15</span> <span class="token number">8</span>-11 */2 * * <span class="token builtin class-name">command</span> <span class="token comment"># \u6BCF\u9694\u4E24\u5929\u7684\u4E0A\u53488\u70B9\u523011\u70B9\u7684\u7B2C3\u548C\u7B2C15\u5206\u949F\u6267\u884C</span>
<span class="token number">3,15</span> <span class="token number">8</span>-11 * * <span class="token number">1</span> <span class="token builtin class-name">command</span>   <span class="token comment"># \u6BCF\u5468\u4E00\u4E0A\u53488\u70B9\u523011\u70B9\u7684\u7B2C3\u548C\u7B2C15\u5206\u949F\u6267\u884C</span>
<span class="token number">30</span> <span class="token number">21</span> * * * /etc/init.d/smb restart   <span class="token comment"># \u6BCF\u665A\u768421:30\u91CD\u542Fsmb</span>
<span class="token number">10</span> <span class="token number">1</span> * * <span class="token number">6,0</span> /etc/init.d/smb restart  <span class="token comment"># \u6BCF\u5468\u516D\u3001\u5468\u65E5\u76841 : 10\u91CD\u542Fsmb</span>
<span class="token number">0</span> <span class="token number">23</span> * * <span class="token number">6</span> /etc/init.d/smb restart    <span class="token comment"># \u6BCF\u661F\u671F\u516D\u7684\u665A\u4E0A11 : 00 pm\u91CD\u542Fsmb</span>
</code></pre></div><table><thead><tr><th>\u7279\u6B8A\u5B57\u7B26</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td><code>@reboot</code></td><td>\u5728\u6BCF\u6B21\u542F\u52A8\u65F6\u8FD0\u884C\u4E00\u6B21</td></tr><tr><td><code>@yearly</code></td><td>\u6BCF\u5E74\u8FD0\u884C\u4E00\u6B21 <code>0 0 1 1 *</code></td></tr><tr><td><code>@annually</code></td><td>\u4E0E@yearly\u7528\u6CD5\u4E00\u81F4</td></tr><tr><td><code>@monthly</code></td><td>\u6BCF\u6708\u8FD0\u884C\u4E00\u6B21 <code>0 0 1 * *</code></td></tr><tr><td><code>@weekly</code></td><td>\u6BCF\u5468\u8FD0\u884C\u4E00\u6B21 <code>0 0 * * 0</code></td></tr><tr><td><code>@daily</code></td><td>\u6BCF\u5929\u8FD0\u884C\u4E00\u6B21 <code>0 0 * * *</code></td></tr><tr><td><code>@midnight</code></td><td>\u4E0E <code>@daily</code> \u7528\u6CD5\u4E00\u81F4</td></tr><tr><td><code>@hourly</code></td><td>\u6BCF\u5C0F\u65F6\u8FD0\u884C\u4E00\u6B21 <code>0 * * * *</code></td></tr></tbody></table><h2 id="\u78C1\u76D8" tabindex="-1"><a class="header-anchor" href="#\u78C1\u76D8" aria-hidden="true">#</a> \u78C1\u76D8</h2><h3 id="\u67E5\u770B\u78C1\u76D8\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u78C1\u76D8\u7A7A\u95F4" aria-hidden="true">#</a> \u67E5\u770B\u78C1\u76D8\u7A7A\u95F4</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">df</span> -h /home/zhr
</code></pre></div><p>\u67E5\u770B\u5F53\u524D\u6216\u8005\u6307\u5B9A\u76EE\u5F55\u5360\u7528\u7A7A\u95F4\uFF0C\u5E76\u53EF\u4EE5\u6307\u5B9A\u67E5\u8BE2\u5B50\u76EE\u5F55\u6DF1\u5EA6\uFF08\u5426\u5219\u5C31\u9012\u5F52\u67E5\u770B\u5168\u90E8\u6587\u4EF6\uFF09\uFF0C<code>-h</code> \u5219\u4EE5 <code>K M G</code> \u4E3A\u5355\u4F4D\u8FDB\u884C\u663E\u793A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">du</span> -h
<span class="token function">du</span> --max-depth<span class="token operator">=</span><span class="token number">1</span> -h
<span class="token function">du</span> --max-depth<span class="token operator">=</span><span class="token number">1</span> -h /home
</code></pre></div><h2 id="\u5171\u4EAB\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u5171\u4EAB\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u5171\u4EAB\u6587\u4EF6\u5939</h2><h3 id="samba-\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#samba-\u65B9\u6848" aria-hidden="true">#</a> samba \u65B9\u6848</h3><p>\u5B89\u88C5</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y samba openssh-server
</code></pre></div><p>samba \u7684\u914D\u7F6E\u6587\u4EF6\u5728 <code>/etc/samba/smb.conf</code> \uFF0C\u5728\u7F16\u8F91\u4E4B\u524D\u5148\u5907\u4EFD\u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text"><pre class="language-text"><code>sudo cp /etc/samba/smb.conf /etc/samba/smb.conf.bak
sudo nano /etc/samba/smb.conf
</code></pre></div><p>\u4FEE\u6539\u5B8C\u540E\u91CD\u542F samba \u670D\u52A1</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> restart smbd
<span class="token function">sudo</span> <span class="token function">service</span> restart nmbd
<span class="token comment"># \u6216\u8005</span>
<span class="token function">sudo</span> /etc/init.d/smbd restart
<span class="token function">sudo</span> /etc/init.d/nmbd restart
</code></pre></div><p>\u4E0D\u77E5\u9053\u4ECE\u4EC0\u4E48\u65F6\u5019\u5F00\u59CB\u7528\u6237\u4E0D\u518D\u80FD\u4F7F\u7528\u7CFB\u7EDF\u672C\u5730\u5E10\u53F7\u767B\u5F55\u4E86\uFF0C\u5FC5\u987B\u8981\u6709\u4E2A samba \u5E10\u53F7\u624D\u884C\u3002\u6240\u4EE5\u8981\u4E3A\u7CFB\u7EDF\u7528\u6237\u65B0\u589E samba \u5E10\u53F7\uFF0C\u6BD4\u5982\uFF0C\u5DF2\u7ECF\u6709\u4E00\u4E2A\u7528\u6237\u53EB <code>user1</code>\uFF0C\u73B0\u5728\u7ED9 <code>user1</code> \u5F00\u901A samba \u5E10\u53F7\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> smbpasswd -a user1 <span class="token comment"># add \u6DFB\u52A0\u7528\u6237</span>
<span class="token function">sudo</span> smbpasswd -e user1 <span class="token comment"># enable \u6FC0\u6D3B\u7528\u6237</span>
<span class="token function">sudo</span> smbpasswd -d user1 <span class="token comment"># disable \u7981\u7528\u7528\u6237</span>
<span class="token function">sudo</span> smbpasswd -x user1 <span class="token comment"># \u5220\u9664\u7528\u6237</span>
</code></pre></div><p>\u5217\u51FA samba \u7528\u6237\u5217\u8868\uFF0C\u8BFB\u53D6 <code>passdb.tdb</code> \u6570\u636E\u5E93\u6587\u4EF6</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> pdbedit -L  
<span class="token function">sudo</span> pdbedit -Lv <span class="token comment"># \u8BE6\u7EC6\u4FE1\u606F</span>
</code></pre></div><p>\u6DFB\u52A0\u5171\u4EAB\u76EE\u5F55\u53C2\u6570\u683C\u5F0F\u5982\u4E0B</p><div class="language-conf ext-conf"><pre class="language-conf"><code>[datasets]  # \u5171\u4EAB\u540D\u79F0
   comment = Do not  arbitrarily modify the datasets
   path = /opt/datasets     # \u5171\u4EAB\u8DEF\u5F84
   browseable = yes         # \u662F\u5426\u5728\u7F51\u4E0A\u90BB\u5C45\u53EF\u89C1\uFF0C\u53EF\u88AB\u5176\u4ED6\u4EBA\u770B\u5230\u8D44\u6E90\u540D\u79F0\uFF08\u975E\u5185\u5BB9\uFF09
   valid users = test1,@bob # [\u53EF\u9009] @+\u7EC4\u540D \u8868\u793A\u53EF\u4EE5\u52A0\u5165\u4E00\u4E2A\u7EC4\u8BBF\u95EE\u6743\u9650
   invalid users = test2    # [\u53EF\u9009] \u7981\u6B62\u8BBF\u95EE\u8BE5\u5171\u4EAB\u7684\u7528\u6237
   read only = yes          # \u53EA\u8BFB\u6743\u9650\uFF0C\u5426\u5219\u4E3A no
   create mask = 0664       # \u65B0\u5EFA\u6587\u4EF6\u7684\u6743\u9650\u4E3A 664
   directory mask = 0775    # \u65B0\u5EFA\u76EE\u5F55\u7684\u6743\u9650\u4E3A 775
   guest ok = no            # \u662F\u5426\u6240\u6709\u4EBA\u53EF\u67E5\u770B\uFF0C\u7B49\u6548\u4E8E public = no
</code></pre></div><p>\u7279\u6B8A\u7684\u5171\u4EAB</p><div class="language-conf ext-conf"><pre class="language-conf"><code>[homes]
  comment = Home Directories
  browseable = no
  read only = no
  valid users = %S # %s  \u662F\u6307\u767B\u9646\u7528\u6237\u53EF\u4EE5\u8BBF\u95EE 
  ; valid users = MYDOMAIN\\%S
  create mask = 0755 #\u5EFA\u8BAE\u5C06\u6743\u9650\u4FEE\u6539\u62100755\uFF0C\u8FD9\u6837\u5176\u5B83\u7528\u6237\u53EA\u662F\u4E0D\u80FD\u4FEE\u6539
  directory mask = 0755
</code></pre></div><p>\u53C2\u8003\uFF1Ahttps://www.cnblogs.com/reachos/p/8716415.html</p><div class="language-conf ext-conf"><pre class="language-conf"><code>[global]  # \u5168\u5C40\u8BBE\u7F6E
   workgroup = WORKGROUP  # \u5DE5\u4F5C\u7EC4\u540D\u79F0
   server string = %h server (Samba, Ubuntu)  # \u670D\u52A1\u5668\u63CF\u8FF0\u4FE1\u606F

#### Networking ####

# The specific set of interfaces / networks to bind to
# This can be either the interface name or an IP address/netmask;
# interface names are normally preferred
;   interfaces = 127.0.0.0/8 eth0

# Only bind to the named interfaces and/or networks; you must use the
# &#39;interfaces&#39; option above to use this.
# It is recommended that you enable this feature if your Samba machine is
# not protected by a firewall or is a firewall itself.  However, this
# option cannot handle dynamic or non-broadcast interfaces correctly.
;   bind interfaces only = yes



#### Debugging/Accounting ####
   log file = /var/log/samba/log.%m # \u5B9A\u4E49\u65E5\u5FD7\u6587\u4EF6\u7684\u5B58\u653E\u4F4D\u7F6E\u4E0E\u540D\u79F0\uFF0C\u53C2\u6570%m\u4E3A\u6765\u8BBF\u7684\u4E3B\u673A\u540D
   max log size = 1000  # \u5B9A\u4E49\u6BCF\u4E2A\u65E5\u5FD7\u6587\u4EF6\u7684\u6700\u5927\u5BB9\u91CF (KiB)

# We want Samba to only log to /var/log/samba/log.{smbd,nmbd}.
# Append syslog@1 if you want important messages to be sent to syslog too.
   logging = file

# Do something sensible when Samba crashes: mail the admin a backtrace
   panic action = /usr/share/samba/panic-action %d


####### Authentication #######

# Server role. Defines in which mode Samba will operate. Possible
# values are &quot;standalone server&quot;, &quot;member server&quot;, &quot;classic primary
# domain controller&quot;, &quot;classic backup domain controller&quot;, &quot;active
# directory domain controller&quot;. 
#
# Most people will want &quot;standalone server&quot; or &quot;member server&quot;.
# Running as &quot;active directory domain controller&quot; will require first
# running &quot;samba-tool domain provision&quot; to wipe databases and create a
# new domain.
   server role = standalone server

   obey pam restrictions = yes

# This boolean parameter controls whether Samba attempts to sync the Unix
# password with the SMB password when the encrypted SMB password in the
# passdb is changed.
   unix password sync = yes

# For Unix password sync to work on a Debian GNU/Linux system, the following
# parameters must be set (thanks to Ian Kahan &lt;&lt;kahan@informatik.tu-muenchen.de&gt; for
# sending the correct chat script for the passwd program in Debian Sarge).
   passwd program = /usr/bin/passwd %u
   passwd chat = *Enter\\snew\\s*\\spassword:* %n\\n *Retype\\snew\\s*\\spassword:* %n\\n *password\\supdated\\ssuccessfully* .

# This boolean controls whether PAM will be used for password changes
# when requested by an SMB client instead of the program listed in
# &#39;passwd program&#39;. The default is &#39;no&#39;.
   pam password change = yes

# This option controls how unsuccessful authentication attempts are mapped
# to anonymous connections
   map to guest = bad user

########## Domains ###########

#
# The following settings only takes effect if &#39;server role = primary
# classic domain controller&#39;, &#39;server role = backup domain controller&#39;
# or &#39;domain logons&#39; is set 
#

# It specifies the location of the user&#39;s
# profile directory from the client point of view) The following
# required a [profiles] share to be setup on the samba server (see
# below)
;   logon path = \\\\%N\\profiles\\%U
# Another common choice is storing the profile in the user&#39;s home directory
# (this is Samba&#39;s default)
#   logon path = \\\\%N\\%U\\profile

# The following setting only takes effect if &#39;domain logons&#39; is set
# It specifies the location of a user&#39;s home directory (from the client
# point of view)
;   logon drive = H:
#   logon home = \\\\%N\\%U

# The following setting only takes effect if &#39;domain logons&#39; is set
# It specifies the script to run during logon. The script must be stored
# in the [netlogon] share
# NOTE: Must be store in &#39;DOS&#39; file format convention
;   logon script = logon.cmd

# This allows Unix users to be created on the domain controller via the SAMR
# RPC pipe.  The example command creates a user account with a disabled Unix
# password; please adapt to your needs
; add user script = /usr/sbin/adduser --quiet --disabled-password --gecos &quot;&quot; %u

# This allows machine accounts to be created on the domain controller via the 
# SAMR RPC pipe.  
# The following assumes a &quot;machines&quot; group exists on the system
; add machine script  = /usr/sbin/useradd -g machines -c &quot;%u machine account&quot; -d /var/lib/samba -s /bin/false %u

# This allows Unix groups to be created on the domain controller via the SAMR
# RPC pipe.  
; add group script = /usr/sbin/addgroup --force-badname %g

############ Misc ############

# Using the following line enables you to customise your configuration
# on a per machine basis. The %m gets replaced with the netbios name
# of the machine that is connecting
;   include = /home/samba/etc/smb.conf.%m

# Some defaults for winbind (make sure you&#39;re not using the ranges
# for something else.)
;   idmap config * :              backend = tdb
;   idmap config * :              range   = 3000-7999
;   idmap config YOURDOMAINHERE : backend = tdb
;   idmap config YOURDOMAINHERE : range   = 100000-999999
;   template shell = /bin/bash

# Setup usershare options to enable non-root users to share folders
# with the net usershare command.

# Maximum number of usershare. 0 means that usershare is disabled.
#   usershare max shares = 100

# Allow users who&#39;ve been granted usershare privileges to create
# public shares, not just authenticated ones
   usershare allow guests = yes

#======================= Share Definitions =======================

# Un-comment the following (and tweak the other settings below to suit)
# to enable the default home directory shares. This will share each
# user&#39;s home directory as \\\\server\\username
;[homes]
;   comment = Home Directories
;   browseable = no

# By default, the home directories are exported read-only. Change the
# next parameter to &#39;no&#39; if you want to be able to write to them.
;   read only = yes

# File creation mask is set to 0700 for security reasons. If you want to
# create files with group=rw permissions, set next parameter to 0775.
;   create mask = 0700

# Directory creation mask is set to 0700 for security reasons. If you want to
# create dirs. with group=rw permissions, set next parameter to 0775.
;   directory mask = 0700

# By default, \\\\server\\username shares can be connected to by anyone
# with access to the samba server.
# Un-comment the following parameter to make sure that only &quot;username&quot;
# can connect to \\\\server\\username
# This might need tweaking when using external authentication schemes
;   valid users = %S

# Un-comment the following and create the netlogon directory for Domain Logons
# (you need to configure Samba to act as a domain controller too.)
;[netlogon]
;   comment = Network Logon Service
;   path = /home/samba/netlogon
;   guest ok = yes
;   read only = yes

# Un-comment the following and create the profiles directory to store
# users profiles (see the &quot;logon path&quot; option above)
# (you need to configure Samba to act as a domain controller too.)
# The path below should be writable by all users so that their
# profile directory may be created the first time they log on
;[profiles]
;   comment = Users profiles
;   path = /home/samba/profiles
;   guest ok = no
;   browseable = no
;   create mask = 0600
;   directory mask = 0700

[printers]
   comment = All Printers
   browseable = no
   path = /var/spool/samba
   printable = yes
   guest ok = no
   read only = yes
   create mask = 0700

# Windows clients look for this share name as a source of downloadable
# printer drivers
[print$]
   comment = Printer Drivers
   path = /var/lib/samba/printers
   browseable = yes
   read only = yes
   guest ok = no
# Uncomment to allow remote administration of Windows print drivers.
# You may need to replace &#39;lpadmin&#39; with the name of the group your
# admin users are members of.
# Please note that you also need to set appropriate Unix permissions
# to the drivers directory for these users to have write rights in it
;   write list = root, @lpadmin
</code></pre></div><h2 id="\u6587\u672C\u7F16\u8F91\u5668" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u7F16\u8F91\u5668" aria-hidden="true">#</a> \u6587\u672C\u7F16\u8F91\u5668</h2><h3 id="nano" tabindex="-1"><a class="header-anchor" href="#nano" aria-hidden="true">#</a> nano</h3><ul><li>Ctrl+G\uFF0C\u663E\u793A\u5E2E\u52A9\u6587\u672C</li><li>Ctrl+O\uFF0C\u4FDD\u5B58\u5F53\u524D\u6587\u4EF6</li><li>Ctrl+R\uFF0C\u8BFB\u53D6\u5176\u4ED6\u6587\u4EF6\u5E76\u63D2\u5165\u5149\u6807\u4F4D\u7F6E</li><li>Ctrl+Y\uFF0C\u8DF3\u81F3\u4E0A\u4E00\u5C4F\u5E55</li><li>Ctrl+K\uFF0C\u526A\u5207\u5F53\u524D\u4E00\u884C</li><li>Ctrl+C\uFF0C\u663E\u793A\u5149\u6807\u4F4D\u7F6E</li><li>Ctrl+X\uFF0C\u9000\u51FA\u7F16\u8F91\u6587\u672C</li><li>Ctrl+J\uFF0C\u5BF9\u5176\u5F53\u524D\u6BB5\u843D\uFF08\u4EE5\u7A7A\u683C\u4E3A\u5206\u9694\u7B26\uFF09</li><li>Ctrl+W\uFF0C\u641C\u7D22\u6587\u672C\u4F4D\u7F6E</li><li>Ctrl+V\uFF0C\u8DF3\u81F3\u4E0B\u4E00\u5C4F\u5E55</li><li>Ctrl+U\uFF0C\u7C98\u8D34\u6587\u672C\u81F3\u5149\u6807\u5904</li><li>Ctrl+T\uFF0C\u8FD0\u884C\u62FC\u5199\u68C0\u67E5</li><li>Ctrl+_\uFF0C\u8DF3\u8F6C\u5230\u67D0\u4E00\u884C</li><li>ALT+U\uFF0C\u64A4\u9500</li><li>ALT+E\uFF0C\u91CD\u505A</li><li>ALT+Y, \u8BED\u6CD5\u9AD8\u4EAE</li><li>ALT+#\uFF0C\u663E\u793A\u884C\u53F7</li></ul><h2 id="\u8FD0\u7EF4" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7EF4" aria-hidden="true">#</a> \u8FD0\u7EF4</h2><h3 id="\u767B\u9646\u63D0\u793A\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u767B\u9646\u63D0\u793A\u4FE1\u606F" aria-hidden="true">#</a> \u767B\u9646\u63D0\u793A\u4FE1\u606F</h3><p>\u767B\u5F55\u4FE1\u606F\u53EF\u4EE5\u4FEE\u6539\u4E09\u4E2A\u6587\u4EF6\uFF1A</p><ul><li><code>/etc/issue</code> \u672C\u5730\u767B\u9646\u663E\u793A\u7684\u4FE1\u606F\uFF0C\u672C\u5730\u767B\u5F55\u524D</li><li><code>/etc/issue.net</code> \u7F51\u7EDC\u767B\u9646\u663E\u793A\u7684\u4FE1\u606F\uFF0C\u767B\u5F55\u540E\u663E\u793A\uFF0C\u9700\u8981\u7531sshd\u914D\u7F6E</li><li><code>/etc/motd</code> \u5E38\u7528\u4E8E\u901A\u544A\u4FE1\u606F\uFF0C\u5982\u8BA1\u5212\u5173\u673A\u65F6\u95F4\u7684\u8B66\u544A\u7B49\uFF0C\u767B\u9646\u540E\u7684\u63D0\u793A\u4FE1\u606F</li></ul><p><code>/etc/update-motd.d/</code> \u76EE\u5F55\u4E0B\u5305\u542B\u4E86\u767B\u9646\u7684\u63D0\u793A\u4FE1\u606F</p><blockquote><p>\u6587\u4EF6\u7684\u7B2C\u4E00\u884C\u5FC5\u987B\u662F <code>#!/bin/sh</code> \u6216\u8005 <code>#!/bin/bash</code> , \u8FD9\u662F\u544A\u8BC9\u7CFB\u7EDF\u8981\u7528\u76F8\u5173\u7684shell\u89E3\u6790\u8BE5\u6587\u4EF6</p></blockquote><p><code>sudo chmod 755 60-my-welcome-info</code></p><p>Ubuntu\u7684\u767B\u9646\u548C\u6B22\u8FCE\u4FE1\u606F\u63A7\u5236/etc/issue\u548C/etc/motd\u3002/etc/issue\u4E0E/etc/motd\u533A\u522B\u5728\u4E8E\uFF1A\u5F53\u4E00\u4E2A\u7F51\u7EDC\u7528\u6237\u6216\u901A\u8FC7\u4E32\u53E3\u767B\u5F55\u7CFB\u7EDF \u4E0A\u65F6,/etc/issue\u7684\u6587\u4EF6\u5185\u5BB9\u663E\u793A\u5728login\u63D0\u793A\u7B26\u4E4B\u524D,\u800C/etc/motd\u5185\u5BB9\u663E\u793A\u5728\u7528\u6237\u6210\u529F\u767B\u5F55\u7CFB\u7EDF\u4E4B\u540E\u3002</p><p>Ubuntu \u4E0E\u522B\u7684 Linux \u4E0D\u540C\uFF0C\u76F4\u63A5\u4FEE\u6539 /etc/motd \u6587\u4EF6\u91CD\u767B\u5F55\u540E\u65E0\u6548\u3002\u56E0\u4E3A\u8FD9\u91CC /etc/motd \u662F\u4E00\u4E2A\u7B26\u53F7\u94FE\u63A5\uFF0C\u6307\u5411 /var/run/motd\uFF0C\u5E94\u8BE5\u662F\u4E00\u4E2A\u542F\u52A8\u540E\u5728\u751F\u6210\u7684\u6587\u4EF6\u3002</p><p>\u4F7F\u7528ssh\u6216console\u767B\u9646\u6210\u529F\u540E\uFF0Cubuntu\u4F1A\u987A\u5E8F\u6267\u884C/etc/update-motd.d\u4E2D\u7684\u811A\u672C</p><p>issue.net\u6587\u4EF6\uFF1A \uFF08\u53EA\u9488\u5BF9\u7F51\u7EDC\u7528\u6237\uFF09--\u82E5\u901A\u8FC7\u8FDC\u7A0B\u672C\u6587\u8BBE\u5907\uFF08\u5982\u901A\u8FC7ssh\u6216telnet\u7B49\uFF09\u767B\u5F55\uFF0C\u5219\u663E\u793A\u8BE5\u6587\u4EF6\u7684\u5185\u5BB9\u3002\u4F7F\u7528ssh\u767B\u5F55\u65F6\uFF0C\u4F1A\u4E0D\u4F1A\u663E\u793Aissue\u4FE1\u606F\u7531sshd\u670D\u52A1\u7684sshd_config\u7684Banner\u5C5E\u6027\u914D\u7F6E\u51B3\u5B9A\uFF1B</p>`,96);function o(t,c){return a}var i=e(s,[["render",o]]);export{i as default};
