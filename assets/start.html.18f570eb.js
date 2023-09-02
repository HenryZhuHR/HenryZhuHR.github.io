import{b as a}from"./app.09498d44.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},n=a(`<p>Before going any further, make sure your system meets all the <a href="/install/requirements">requirements</a>.</p><blockquote><p>Looking for a complete, easy step-by-step installation guide, including all dependencies and an auto-updater? Check out the <a href="/install/ubuntu">Ubuntu-based</a> installation guide. {.is-info}</p></blockquote><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u4E0B\u8F7D\u6700\u65B0\u7684 <a href="https://github.com/Requarks/wiki/releases" target="_blank" rel="noopener noreferrer">wiki.js</a></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">wget</span> c/download/wiki-js.tar.gz
<span class="token function">mkdir</span> wiki
<span class="token function">tar</span> -xvf wiki-js.tar.gz -C ./wiki
<span class="token builtin class-name">cd</span> ./wiki
</code></pre></div><p>\u91CD\u547D\u540D\u914D\u7F6E\u6587\u4EF6 <code>config.yml</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mv</span> config.sample.yml config.yml
</code></pre></div><p>\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6\uFF0C\u586B\u5199\u6570\u636E\u5E93\u548C\u7AEF\u53E3\u53F7(<a href="https://docs.requarks.io/install/config" target="_blank" rel="noopener noreferrer">\u914D\u7F6E\u53C2\u8003</a></p><div class="language-bash ext-sh"><pre class="language-bash"><code>db:
  type: mysql
  host: localhost
  port: <span class="token number">3306</span>
  user: wikijs
  pass: wikijsrocks
  db: wiki
</code></pre></div><blockquote><p>\u6570\u636E\u5E93\u5FC5\u987B\u63D0\u524D\u521B\u5EFA\u597D. Wiki.js \u4E0D\u4F1A\u6267\u884C\u521B\u5EFA. If your database requires an SSL connection, check the <a href="https://docs.requarks.io/install/config#database-over-ssl" target="_blank" rel="noopener noreferrer">Database over SSL</a> section.</p></blockquote><p>\u542F\u52A8 Wiki.js</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">node</span> server
</code></pre></div><ol><li>Wait until you are invited to open to the setup page in your browser.</li><li>Complete the setup wizard to finish the installation.</li></ol><p>http://henryzhuhr.xyz:3000</p><h1 id="run-as-service" tabindex="-1"><a class="header-anchor" href="#run-as-service" aria-hidden="true">#</a> Run as service</h1><p>There are several solutions to run Wiki.js as a background service. We&#39;ll focus on <strong>systemd</strong> in this guide as it&#39;s available in nearly all linux distributions.</p><ol><li>Create a new file named <code>wiki.service</code> inside directory <code>/etc/systemd/system</code>.</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">nano</span> /etc/systemd/system/wiki.service
</code></pre></div><ol start="2"><li>Paste the following contents (assuming your wiki is installed at <code>/var/wiki</code>):</li></ol><div class="language-ini ext-ini"><pre class="language-ini"><code><span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">Unit</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Description</span><span class="token punctuation">=</span><span class="token value attr-value">Wiki.js</span>
<span class="token key attr-name">After</span><span class="token punctuation">=</span><span class="token value attr-value">network.target</span>

<span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">Service</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Type</span><span class="token punctuation">=</span><span class="token value attr-value">simple</span>
<span class="token key attr-name">ExecStart</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/bin/node server</span>
<span class="token key attr-name">Restart</span><span class="token punctuation">=</span><span class="token value attr-value">always</span>
<span class="token comment"># Consider creating a dedicated user for Wiki.js here:</span>
<span class="token key attr-name">User</span><span class="token punctuation">=</span><span class="token value attr-value">nobody</span>
<span class="token key attr-name">Environment</span><span class="token punctuation">=</span><span class="token value attr-value">NODE_ENV=production</span>
<span class="token key attr-name">WorkingDirectory</span><span class="token punctuation">=</span><span class="token value attr-value">/var/wiki</span>

<span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">Install</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">WantedBy</span><span class="token punctuation">=</span><span class="token value attr-value">multi-user.target</span>
</code></pre></div><ol start="3"><li>Save the service file (<kbd>CTRL</kbd>+<kbd>X</kbd>, followed by <kbd>Y</kbd>).</li><li>Reload systemd:</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl daemon-reload
</code></pre></div><ol start="5"><li>Run the service:</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl start wiki
</code></pre></div><ol start="6"><li>Enable the service on system boot.</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> wiki
</code></pre></div><p><em>Note:</em> You can see the logs of the service using <code>journalctl -u wiki</code></p><p><img src="https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg" alt="">{.align-abstopright}</p>`,28);function t(o,l){return n}var r=s(e,[["render",t]]);export{r as default};
