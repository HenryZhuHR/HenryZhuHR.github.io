import{b as n}from"./app.77a5901f.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<p>\u591A\u4EBA\u540C\u6B65\u7684\u6587\u6863 CodiMD: https://github.com/hackmdio/CodiMD</p><h2 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h2><h3 id="docker-\u90E8\u7F72\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#docker-\u90E8\u7F72\u65B9\u5F0F" aria-hidden="true">#</a> Docker \u90E8\u7F72\u65B9\u5F0F</h3><p>\u5B89\u88C5\u4F9D\u8D56</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y <span class="token function">git</span> <span class="token function">docker</span> <span class="token function">docker-compose</span>
</code></pre></div><p>\u5B89\u88C5 codimd</p><p>\u5728 <code>~/</code> \u6587\u4EF6\u5939\u4E0B\u521B\u5EFA\u4E00\u4E2A\u76EE\u5F55 <code>codimd</code>\uFF0C\u76EE\u5F55\u5185\u521B\u5EFA <code>docker-compose.yml</code></p><p>\u586B\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span>11.6<span class="token punctuation">-</span>alpine
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> POSTGRES_USER=codimd
      <span class="token punctuation">-</span> POSTGRES_PASSWORD=change_password
      <span class="token punctuation">-</span> POSTGRES_DB=codimd
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;database-data:/var/lib/postgresql/data&quot;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
  <span class="token key atrule">codimd</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> hackmdio/hackmd<span class="token punctuation">:</span>2.4.1
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> CMD_DB_URL=postgres<span class="token punctuation">:</span>//codimd<span class="token punctuation">:</span>change_password@database/codimd
        <span class="token comment"># CMD_DB_URL \u683C\u5F0F\u4E3A </span>
        <span class="token comment"># \u6570\u636E\u5E93\u8FDE\u63A5\u534F\u8BAE://\u7528\u6237\u540D:\u5BC6\u7801@\u6570\u636E\u5E93\u4E3B\u673A:\u6570\u636E\u5E93\u7AEF\u53E3/\u6570\u636E\u5E93\u540D</span>
        <span class="token comment">#\u8FD9\u91CC\u6211\u7684MySQL\u662F\u5728docker\u7684\u5BBF\u4E3B\u673A\u672C\u5730\u5B89\u88C5\u7684\uFF0C\u4F46\u662F\u4E3B\u673Aip\u6CA1\u6709\u5199localhost\uFF0C\u56E0\u4E3Alocalhost\u5728docker\u5BB9\u5668\u91CC\u9762\u4F1A\u89E3\u91CA\u6210\u5BB9\u5668\u672C\u8EAB\u7684ip\uFF0C\u8FD9\u6837\u5C31\u8FDE\u4E0D\u4E0A\u5B89\u88C5\u5728\u5BBF\u4E3B\u673A\u7684MySQL\uFF0C\u6240\u4EE5\u6211\u4F7F\u7528\uFF1Aip addr show docker0\uFF0C\u67E5\u770B\u4E86\u5BBF\u4E3B\u673A\u7684ip\u4E3A172.17.0.1\uFF0C\u7136\u540E\u4F7F\u7528\u5BBF\u4E3B\u673Aip\u4EE3\u66FFlocalhost\uFF0C\u5C31\u8FBE\u5230\u5BB9\u5668\u5185\u90E8\u8BBF\u95EE\u5916\u90E8\u7684MySQL\u6570\u636E\u5E93\u7684\u76EE\u7684</span>
        <span class="token comment">#\u4F8B\uFF1ACMD_DB_URL=mysql://codimd:change_password@172.17.0.1:3306/codimd</span>
      <span class="token punctuation">-</span> CMD_USECDN=false
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> database
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3000:3000&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> upload<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/home/hackmd/app/public/uploads
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">database-data</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">upload-data</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p><code>CMD_DB_URL</code> \u683C\u5F0F\u4E3A <code>\u6570\u636E\u5E93\u8FDE\u63A5\u534F\u8BAE://\u7528\u6237\u540D:\u5BC6\u7801@\u6570\u636E\u5E93\u4E3B\u673A:\u6570\u636E\u5E93\u7AEF\u53E3/\u6570\u636E\u5E93\u540D</code><code>CMD_DB_URL=mysql://codimd:change_password@localhost:3306/codimd</code></p><p>\u5728docker-compose.yml\u76EE\u5F55\u4E0B\u4F7F\u7528<code>docker-compose up -d</code>\u547D\u4EE4\u62C9\u8D77docker</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker-compose</span> up -d
</code></pre></div><p>Visit\xA0<code>http://localhost:3000</code>\xA0in your browser</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h2 id="docker\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#docker\u76F8\u5173" aria-hidden="true">#</a> Docker\u76F8\u5173</h2><h3 id="\u6B63\u786E\u7684\u662F\u5C06\u5F53\u524D\u7528\u6237\u52A0\u5165docker\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6B63\u786E\u7684\u662F\u5C06\u5F53\u524D\u7528\u6237\u52A0\u5165docker\u7EC4" aria-hidden="true">#</a> \u6B63\u786E\u7684\u662F\u5C06\u5F53\u524D\u7528\u6237\u52A0\u5165docker\u7EC4</h3><div class="language-text ext-text"><pre class="language-text"><code>sudo gpasswd -a \${USER} docker
</code></pre></div><p>\u542F\u52A8 docker</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> start
<span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> restart
</code></pre></div><p>\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</p><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> docker.service
</code></pre></div><p>\u67E5\u770B\u670D\u52A1\u72B6\u6001\uFF0CActive\u72B6\u6001\u4E3A\uFF1Aactive\uFF08running\uFF09</p><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl status docker.service
</code></pre></div><p>\u8F93\u51FA</p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u25CF docker.service - Docker Application Container Engine
     Loaded: loaded <span class="token punctuation">(</span>/lib/systemd/system/docker.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span>
     Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Thu <span class="token number">2022</span>-11-03 <span class="token number">17</span>:23:44 CST<span class="token punctuation">;</span> 8min ago
TriggeredBy: \u25CF docker.socket
       Docs: https://docs.docker.com
   Main PID: <span class="token number">2950509</span> <span class="token punctuation">(</span>dockerd<span class="token punctuation">)</span>
      Tasks: <span class="token number">7</span>
     Memory: <span class="token number">33</span>.7M
     CGroup: /system.slice/docker.service
             \u2514\u25002950509 /usr/bin/dockerd -H fd:// --containerd<span class="token operator">=</span>/run/containerd/containerd.sock
</code></pre></div>`,25);function t(o,c){return e}var d=a(s,[["render",t]]);export{d as default};
