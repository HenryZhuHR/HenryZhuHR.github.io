<template><h1 id="使用-frp-进行内网穿透" tabindex="-1"><a class="header-anchor" href="#使用-frp-进行内网穿透" aria-hidden="true">#</a> 使用 frp 进行内网穿透</h1>
<p>内网穿透 (Intranet penetration)</p>
<h2 id="下载软件" tabindex="-1"><a class="header-anchor" href="#下载软件" aria-hidden="true">#</a> 下载软件</h2>
<p>在 <a href="https://github.com/fatedier/frp" target="_blank" rel="noopener noreferrer">Github<ExternalLinkIcon/></a> 的 <a href="https://github.com/fatedier/frp/releases" target="_blank" rel="noopener noreferrer">Release<ExternalLinkIcon/></a> 页面中下载到最新版本的客户端和服务端二进制文件，所有文件被打包在一个压缩包中</p>
<h2 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数" aria-hidden="true">#</a> 常用参数</h2>
<h2 id="基于-ssh-部署" tabindex="-1"><a class="header-anchor" href="#基于-ssh-部署" aria-hidden="true">#</a> 基于 ssh 部署</h2>
<p>参考 <a href="https://gofrp.org/docs/" target="_blank" rel="noopener noreferrer">文档<ExternalLinkIcon/></a> 进行配置和部署</p>
<p>解压缩下载的压缩包，将其中的 frpc 拷贝到内网服务所在的机器上，将 frps 拷贝到具有公网 IP 的机器上，放置在任意目录。</p>
<h3 id="配置服务端" tabindex="-1"><a class="header-anchor" href="#配置服务端" aria-hidden="true">#</a> 配置服务端</h3>
<ol>
<li>这个示例通过简单配置 TCP 类型的代理让用户访问到内网的服务器。
在具有公网 IP 的机器上部署 frps，修改 frps.ini 文件，这里使用了最简化的配置，设置了 frp 服务器用户接收客户端连接的端口：</li>
</ol>
<div class="language-ini ext-ini line-numbers-mode"><pre v-pre class="language-ini"><code><span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">bind_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>bind_port</code> 是绑定的端口号，</p>
<ul>
<li>端口可以自定义，但是需要客户端和服务端进行统一。</li>
<li>服务器需要在esc管理中配置安全组规则中暴露该端口</li>
</ul>
<p>先启动服务端(具有公网 IP 的机器)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./frps -c ./frps.ini
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="配置客户端" tabindex="-1"><a class="header-anchor" href="#配置客户端" aria-hidden="true">#</a> 配置客户端</h3>
<ol start="2">
<li>在需要被访问的内网机器上（SSH 服务通常监听在 22 端口）部署 frpc，修改 <code>frpc.ini</code> 文件，假设 frps 所在服务器的公网 IP 为 <code>x.x.x.x</code>：</li>
</ol>
<div class="language-ini ext-ini line-numbers-mode"><pre v-pre class="language-ini"><code><span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">server_addr</span> <span class="token punctuation">=</span> <span class="token value attr-value">x.x.x.x</span>
<span class="token key attr-name">server_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>

<span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">ssh</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">tcp</span>
<span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">22</span>
<span class="token key attr-name">remote_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">6000</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>local_ip</code> 和 <code>local_port</code> 配置为本地需要暴露到公网的服务地址和端口。</p>
<p><code>remote_port</code> 表示在 frp 服务端监听的端口，访问此端口的流量将会被转发到本地服务对应的端口。</p>
<p>(先启动服务端，再) 启动客户端(需要被访问的内网机器)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./frpc -c ./frpc.ini
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="多个客户端的配置" tabindex="-1"><a class="header-anchor" href="#多个客户端的配置" aria-hidden="true">#</a> 多个客户端的配置</h3>
<div class="language-ini ext-ini line-numbers-mode"><pre v-pre class="language-ini"><code><span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">server_addr</span> <span class="token punctuation">=</span> <span class="token value attr-value">x.x.x.x</span>
<span class="token key attr-name">server_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>

<span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">ssh001</span><span class="token punctuation">]</span></span>   # 唯一 不可重复
<span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">tcp</span>
<span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">22</span>
<span class="token key attr-name">remote_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">6001  # 唯一 不可重复</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="ssh-远程访问" tabindex="-1"><a class="header-anchor" href="#ssh-远程访问" aria-hidden="true">#</a> ssh 远程访问</h3>
<p>如果需要在后台长期运行，建议结合其他工具使用，例如 systemd 和 supervisor。</p>
<p>通过 SSH 访问内网机器，假设用户名为 test：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ssh</span> -oPort<span class="token operator">=</span><span class="token number">6000</span> test@x.x.x.x
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>frp 会将请求 <code>x.x.x.x:6000</code> 的流量转发到内网机器的 22 端口。</p>
<!-- 参考 https://www.cnblogs.com/anonymous-test/p/13645148.html --></template>
