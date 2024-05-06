import{_ as n,o as s,c as a,a as e}from"./app.12e97507.js";const t={},c=e(`<h1 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> Github</h1><h2 id="action-\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#action-\u529F\u80FD" aria-hidden="true">#</a> Action \u529F\u80FD</h2><h3 id="\u81EA\u52A8\u540C\u6B65fork\u7684\u4E0A\u6E38\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u540C\u6B65fork\u7684\u4E0A\u6E38\u5206\u652F" aria-hidden="true">#</a> \u81EA\u52A8\u540C\u6B65fork\u7684\u4E0A\u6E38\u5206\u652F</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># .github/workflows/sync-fork.yml</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Sync Fork

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">&#39;0 0 * * *&#39;</span> <span class="token comment"># every day</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span> <span class="token comment"># on button click</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">sync</span><span class="token punctuation">:</span>

    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> tgymnich/fork<span class="token punctuation">-</span>sync@v1.9.0
        <span class="token comment"># https://github.com/tgymnich/fork-sync</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">owner</span><span class="token punctuation">:</span> meta<span class="token punctuation">-</span>llama <span class="token comment"># \u4E0A\u6709\u5206\u652F\u4ED3\u5E93\u6240\u8FF0\u8005</span>
          <span class="token key atrule">base</span><span class="token punctuation">:</span> main
          <span class="token key atrule">head</span><span class="token punctuation">:</span> main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[c];function l(o,p){return s(),a("div",null,i)}var r=n(t,[["render",l],["__file","github.html.vue"]]);export{r as default};
