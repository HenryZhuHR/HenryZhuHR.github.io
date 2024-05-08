import{_ as n,o as e,c as i,a as s}from"./app.c3baaf16.js";const a={},d=s(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><p><a href="https://nginx.org" target="_blank" rel="noopener noreferrer">Nginx</a> \u662F\u6BDB\u5B50\u51FA\u54C1\u7684\u9AD8\u6027\u80FD HTTP \u548C\u53CD\u5411\u4EE3\u7406 web \u670D\u52A1\u5668</p><h2 id="install-nginx" tabindex="-1"><a class="header-anchor" href="#install-nginx" aria-hidden="true">#</a> install Nginx</h2><p>\u5728 Linux(Ubuntu) \u670D\u52A1\u5668\u4E0A\u5B89\u88C5 Nginx</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8981\u5B89\u88C5\u6700\u65B0\u7248\u672C\u7684 Nginx\uFF0C\u53C2\u8003 <a href="https://www.nginx.com/resources/wiki/start/topics/tutorials/install/" target="_blank" rel="noopener noreferrer">&quot;Official Debian/Ubuntu packages&quot;</a>\uFF0C\u4F7F\u7528 <a href="https://launchpad.net/~nginx/+archive/ubuntu/stable" target="_blank" rel="noopener noreferrer">PPA</a> \u6765\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:nginx/stable
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#nginx-\u547D\u4EE4" aria-hidden="true">#</a> Nginx \u547D\u4EE4</h2><ul><li><code>sudo nginx -s stop</code> \u2014 fast shutdown</li><li><code>sudo nginx -s quit</code> \u2014 graceful shutdown</li><li><code>sudo nginx -s reload</code> \u2014 reloading the configuration file</li><li><code>sudo nginx -s reopen</code> \u2014 reopening the log files</li><li><code>sudo nginx -c /etc/nginx/nginx.conf</code></li></ul><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><p>Nginx \u7684\u914D\u7F6E\u6587\u4EF6 <code>nginx.conf</code> \u53EF\u80FD\u4F1A\u5728\u8FD9\u51E0\u4E2A\u5730\u65B9: <code>/usr/local/nginx/conf</code>, <code>/etc/nginx</code>, <code>/usr/local/etc/nginx</code></p><blockquote><p>\u5728\u6211\u7684 ubuntu server \u4E0A\uFF0C\u914D\u7F6E\u6587\u4EF6\u5728 <code>/etc/nginx/nginx.conf</code></p></blockquote><p>\u914D\u7F6E\u6587\u4EF6 <code>nginx.conf</code> \u7684\u7ED3\u6784</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>user ubuntu;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
	worker_connections 768;
	# multi_accept on;
}

http {
    ...   
}

#mail {
#	...
#}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http-\u7AEF\u53E3\u8F6C\u53D1" tabindex="-1"><a class="header-anchor" href="#http-\u7AEF\u53E3\u8F6C\u53D1" aria-hidden="true">#</a> HTTP \u7AEF\u53E3\u8F6C\u53D1</h2><p>\u4EE5 http \u5E38\u7528\u7684 80 \u7AEF\u53E3\u4E3A\u4F8B\uFF0C\u57FA\u672C\u914D\u7F6E\u6587\u4EF6\u4E3A</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>server {
    listen 80;
    server_name localhost; 
    access_log /home/ubuntu/nginx/logs/access.log combined;
    error_log /home/ubuntu/nginx/logs/error.log;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>listen</code> \u76D1\u542C\u7AEF\u53E3\uFF0C<code>http</code> \u4E00\u822C\u662F <code>80</code></li><li><code>server_name</code> \u76D1\u542Cip\u3002\u6362\u6210\u670D\u52A1\u5668 <strong>\u516C\u7F51IP</strong> \u6216\u8005 <strong>\u57DF\u540D</strong></li><li><code>access_log</code> \u548C <code>error_log</code> \u662F\u65E5\u5FD7\u6587\u4EF6\uFF0C\u9700\u8981\u4FDD\u8BC1\u76EE\u5F55\u5B58\u5728 <code>/home/ubuntu/nginx/logs/</code> \uFF0C\u5426\u5219\u5C31\u65E0\u6CD5\u751F\u5B58\u65E5\u5FD7\u6587\u4EF6</li></ul><p>\u8FD9\u65F6\u5019\u91CD\u65B0\u52A0\u8F7D\u6570\u636E\u6587\u4EF6 <code>sudo nginx -s reload</code></p>`,19),l=[d];function o(c,r){return e(),i("div",null,l)}var u=n(a,[["render",o],["__file","index.html.vue"]]);export{u as default};
