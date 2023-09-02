import{b as n}from"./app.a31c36bc.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="rtmp-\u670D\u52A1\u5668\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#rtmp-\u670D\u52A1\u5668\u642D\u5EFA" aria-hidden="true">#</a> RTMP \u670D\u52A1\u5668\u642D\u5EFA</h1><h2 id="nginx\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#nginx\u65B9\u5F0F" aria-hidden="true">#</a> Nginx\u65B9\u5F0F</h2><p>\u9700\u8981\u4F9D\u8D56\u4E8E <a href="https://github.com/arut/nginx-rtmp-module" target="_blank" rel="noopener noreferrer">nginx-rtmp-module</a> \u6A21\u5757\uFF0C\u9700\u8981\u4ECE nginx <a href="https://nginx.org/en/download.html" target="_blank" rel="noopener noreferrer">\u6E90\u7801</a>\u7F16\u8BD1\uFF0C\u5E76\u4E14\u8986\u76D6\u6389\u539F\u6765\u7684 nginx\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mkdir</span> -p ~/software
<span class="token builtin class-name">cd</span> ~/software
<span class="token comment"># \u4E0B\u8F7D nginx \u6E90\u7801 (1.24.0)</span>
<span class="token function">wget</span> https://nginx.org/download/nginx-1.24.0.tar.gz
<span class="token function">tar</span> -xf nginx-1.24.0.tar.gz
<span class="token comment"># \u4E0B\u8F7D nginx-rtmp-module (v1.2.2)</span>
<span class="token function">git</span> clone -b v1.2.2 https://github.com/arut/nginx-rtmp-module.git
</code></pre></div><p>\u5207\u6362\u5230 nginx \u6E90\u7801\u76EE\u5F55\uFF0C\u7F16\u8BD1\u5B89\u88C5</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> nginx-1.24.0
./configure --add-module<span class="token operator">=</span><span class="token punctuation">..</span>/nginx-rtmp-module
<span class="token function">make</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre></div><blockquote><p>\u5982\u679C\u51FA\u73B0\u9519\u8BEF\uFF0C\u53EF\u80FD\u662F\u7F3A\u5C11\u4F9D\u8D56\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>sudo apt install -y build-essential libpcre3 libpcre3-dev zlib1g-dev libssl-dev</code></p></blockquote><p>nginx \u5B89\u88C5\u76EE\u5F55\u5728 <code>/usr/local/nginx</code>\uFF0C\u914D\u7F6E\u6587\u4EF6\u5728 <code>/usr/local/nginx/conf/nginx.conf</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8 nginx</span>
<span class="token function">sudo</span> /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
<span class="token comment"># \u505C\u6B62 nginx</span>
<span class="token function">sudo</span> /usr/local/nginx/sbin/nginx -s stop
<span class="token comment"># \u91CD\u542F nginx</span>
<span class="token function">sudo</span> /usr/local/nginx/sbin/nginx -s reload
</code></pre></div><p>\u5173\u4E8E RTMP \u914D\u7F6E\u53C2\u8003 <a href="https://github.com/arut/nginx-rtmp-module/tree/v1.2.2#example-nginxconf" target="_blank" rel="noopener noreferrer">Example nginx.conf</a></p><p>\u8FD9\u91CC\u53EA\u4FDD\u7559 rtmp \u548C hls \u90E8\u5206\uFF0C\u5176\u4ED6\u90E8\u5206\u90FD\u6CE8\u91CA\u6389\u4E86\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rtmp<span class="token punctuation">{</span>
  server<span class="token punctuation">{</span>
    listen <span class="token number">1935</span><span class="token punctuation">;</span>
    chunk_size <span class="token number">4096</span><span class="token punctuation">;</span>
    application live<span class="token punctuation">{</span>
      live on<span class="token punctuation">;</span>
      record off<span class="token punctuation">;</span>
      <span class="token comment"># \u662F\u5426\u5F00\u542F HLS</span>
      <span class="token comment"># hls on;</span>
      <span class="token comment"># hls_path /tmp/hls;   #\u5207\u7247\u5B58\u653E\u4F4D\u7F6E</span>
      <span class="token comment"># hls_fragment 5s;</span>
      <span class="token comment"># hls_playlist_length 15s;</span>
      <span class="token comment"># hls_continuous on;</span>
      <span class="token comment"># hls_cleanup on;</span>
      <span class="token comment"># hls_nested on;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u914D\u7F6E\u5B8C\u6210\u540E <code>sudo /usr/local/nginx/sbin/nginx -s reload</code></p><h2 id="\u6253\u5F00\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#\u6253\u5F00\u9632\u706B\u5899" aria-hidden="true">#</a> \u6253\u5F00\u9632\u706B\u5899</h2><p>\u56E0\u4E3A CentOS \u548C Ubuntu \u90FD\u6709\u9632\u706B\u5899\uFF0C\u5982\u679C\u6CA1\u6CD5\u63A8\u6D41\u6216\u8005\u63A5\u6536\u63A8\u6D41\u7684\u8BDD\uFF0C\u6709\u53EF\u80FD\u662F\u56E0\u4E3A\u9632\u706B\u5899\u7684\u95EE\u9898\u3002\u8FD9\u65F6\u6700\u597D\u8BA9\u9632\u706B\u5899\u6253\u5F00 1935 \u7AEF\u53E3\u7684\u8BBF\u95EE\uFF0C\u6216\u8005\u76F4\u63A5\u5173\u6389\u9632\u706B\u5899\uFF08\u4E00\u822C\u662F\u53EB\u505A firewall \u7684\u670D\u52A1\u6216\u8005 ufirewall \uFF09\u3002</p><h2 id="\u63A8\u6D41\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u63A8\u6D41\u6D4B\u8BD5" aria-hidden="true">#</a> \u63A8\u6D41\u6D4B\u8BD5</h2><p>\u63A8\u6D41\u6D4B\u8BD5\u53EF\u4EE5\u4F7F\u7528 OBS\uFF0C\u63A8\u6D41\u5730\u5740\u586B\u5199 <code>rtmp://&lt;host&gt;/live</code> (<code>live</code> \u662F\u5E94\u7528\u540D\uFF0C\u53EF\u4EE5\u5728 nginx \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539)\uFF0C\u5BC6\u94A5\u968F\u4FBF\u586B\u5199\u3002\u7136\u540E\u53EF\u4EE5\u5F00\u59CB\u4E32\u6D41\u4E86\u3002</p><blockquote><p><code>&lt;host&gt;</code> \u8C8C\u4F3C\u53EA\u80FD\u662F ip \uFF0C\u4E0D\u80FD\u662F\u57DF\u540D</p></blockquote>`,18);function t(o,p){return e}var i=s(a,[["render",t]]);export{i as default};
