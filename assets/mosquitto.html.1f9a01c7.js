import{_ as e,o as s,c as a,b as n}from"./app.b40b4e2c.js";const o={},i=n(`<p>#! https://zhuanlan.zhihu.com/p/574664072</p><h1 id="mosquitto-\u670D\u52A1\u5668\u7684\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#mosquitto-\u670D\u52A1\u5668\u7684\u642D\u5EFA" aria-hidden="true">#</a> Mosquitto \u670D\u52A1\u5668\u7684\u642D\u5EFA</h1><h2 id="mosquitto-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#mosquitto-\u5B89\u88C5" aria-hidden="true">#</a> Mosquitto \u5B89\u88C5</h2><p><a href="https://mosquitto.org" target="_blank" rel="noopener noreferrer">Mosquitto</a>\u662F\u4E00\u4E2A\u5F00\u6E90\u7684 MQTT \u4EE3\u7406\uFF0C\u5728 <a href="https://mosquitto.org/download/" target="_blank" rel="noopener noreferrer">Download</a> \u4E0B\u8F7D</p><h2 id="\u2708\uFE0F-mosquitto-\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u2708\uFE0F-mosquitto-\u542F\u52A8" aria-hidden="true">#</a> \u2708\uFE0F Mosquitto \u542F\u52A8</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mosquitto
    <span class="token parameter variable">-c</span> <span class="token builtin class-name">:</span> \u6307\u5B9A\u5141\u8BB8\u4EE3\u7406\u7684\u914D\u7F6E\u6587\u4EF6
    <span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> \u542F\u52A8\u540E\u5C06\u4EE3\u7406\u6302\u540E\u53F0\u8FD0\u884C
    <span class="token parameter variable">-p</span> <span class="token builtin class-name">:</span> \u6307\u5B9A\u4EE3\u7406\u7684\u7AEF\u53E3<span class="token punctuation">(</span>\u63A8\u8350\u5728\u914D\u7F6E\u6587\u4EF6\u91CC\u8BBE\u7F6E<span class="token punctuation">)</span>
    <span class="token parameter variable">-v</span> <span class="token builtin class-name">:</span> verbose mode \u6253\u5370\u5168\u90E8\u7C7B\u578B\u7684\u65E5\u5FD7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BD4\u8F83\u63A8\u8350\u5728\u914D\u7F6E\u6587\u4EF6\u91CC\u8BBE\u7F6E\u597D\u76F8\u5173\u5185\u5BB9\uFF0C\u7136\u540E\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mosquitto <span class="token parameter variable">-c</span> /path/to/mosquitto.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u2699\uFE0F-mosquitto-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u2699\uFE0F-mosquitto-\u914D\u7F6E" aria-hidden="true">#</a> \u2699\uFE0F Mosquitto \u914D\u7F6E</h2><h3 id="\u8FDE\u63A5\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u8BBE\u7F6E" aria-hidden="true">#</a> \u8FDE\u63A5\u8BBE\u7F6E</h3><h3 id="\u7528\u6237\u767B\u5F55\u8BA4\u8BC1-\u65B0\u589E\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u767B\u5F55\u8BA4\u8BC1-\u65B0\u589E\u7528\u6237" aria-hidden="true">#</a> \u7528\u6237\u767B\u5F55\u8BA4\u8BC1\uFF08\u65B0\u589E\u7528\u6237\uFF09</h3><p>\u4E3A\u4E86\u5B89\u5168\uFF0C\u9700\u8981<strong>\u5173\u95ED\u533F\u540D\u8BBF\u95EE</strong>\u5E76<strong>\u5BF9\u767B\u5F55\u7684\u7528\u6237\u8FDB\u884C\u8BA4\u8BC1</strong></p><ul><li><strong>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u4E2D\u7528\u6237\u5BC6\u7801\u6587\u4EF6</strong>\u5E76<strong>\u5173\u95ED\u533F\u540D\u8BBF\u95EE</strong></li></ul><p>\u65B0\u5EFA\u4E00\u4E2A\u7528\u6237\u5BC6\u7801\u6587\u4EF6 <code>pwfile.conf</code> \uFF0C(\u4E5F\u53EF\u4EE5\u662F <code>pwfile.example</code>)</p><p>\u5728\u914D\u7F6E\u6587\u4EF6 <code>mosquitto.conf</code> \u4E2D\uFF0C\u5C06 <code>password_file</code> \u4E00\u9879\u6307\u5411 <code>pwfile.conf</code>\uFF0C\u91CD\u542F <code>mosquitto</code> \u751F\u6548</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># in mosquitto.conf
password_file \`pwfile.conf\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>allow_anonymous</code> \u4E00\u9879\u9ED8\u8BA4\u662F\u5173\u95ED(<code>false</code>)\u7684\u3002\u4F46\u662F\u5982\u679C\u7528\u4E8E\u6D4B\u8BD5\u7684\u8BDD\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A <code>true</code> \uFF0C\u4E0A\u7EBF\u540E\u4FEE\u6539\u56DE <code>false</code></p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>allow_anonymous false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>\u65B0\u589E\u7528\u6237</strong></li></ul><p>\u8FD0\u884C\u547D\u4EE4 <code>mosquitto_passwd</code> \u65B0\u589E\u7528\u6237 <code>&lt;username&gt;</code> \uFF0C\u8F93\u5165\u4E24\u6B21\u5BC6\u7801\uFF0C\u5E76\u5C06\u7528\u6237\u8BA4\u8BC1\u6DFB\u52A0\u81F3 <code>&lt;pwfile.conf&gt;</code> \u6587\u4EF6\u4E2D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mosquitto_passwd /path/to/pwfile.conf <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li><code>-c</code> \u53C2\u6570\u4F1A\u8986\u76D6\u539F\u6709\u7684\u5BC6\u7801\u6587\u4EF6\uFF0C\u56E0\u6B64\u4E0D\u8981\u4F7F\u7528\uFF01\uFF01</li></ul></blockquote><p><code>-b</code> \u5219\u9700\u8981\u8F93\u5165\u660E\u6587\u5BC6\u7801\u65B0\u5EFA\u7528\u6237\u5E76\u4E14\u4E0D\u8986\u76D6\u539F\u6709\u6587\u4EF6\u5185\u5BB9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mosquitto_passwd /path/to/pwfile.conf <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>password<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-D</code> \u5219\u53EF\u4EE5\u5220\u9664\u6307\u5B9A\u7528\u6237</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mosquitto_passwd /path/to/pwfile.conf <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-H</code> \u5219\u53EF\u4EE5\u6307\u5B9A Hashing \u7B97\u6CD5\u3002\u9ED8\u8BA4\u91C7\u7528 <code>sha512-pbkdf2</code>\uFF0CMosquitto 1.6 \u548C\u65E9\u671F\u7684\u7248\u672C\u9ED8\u8BA4\u91C7\u7528 <code>sha512</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mosquitto_passwd <span class="token parameter variable">-H</span> sha512-pbkdf2 /path/to/pwfile.conf <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-U</code> \u66F4\u65B0\u7EAF\u6587\u672C\u5BC6\u7801\u6587\u4EF6\u4EE5\u4F7F\u7528\u6563\u5217\u5BC6\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mosquitto_passwd <span class="token parameter variable">-U</span> /path/to/pwfile.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u7528\u6237\u6743\u9650\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u6743\u9650\u7BA1\u7406" aria-hidden="true">#</a> \u7528\u6237\u6743\u9650\u7BA1\u7406</h3><p>\u5728\u914D\u7F6E\u6587\u4EF6 <code>mosquitto.conf</code> \u4E2D\uFF0C\u5C06 <code>acl_file</code> \u4E00\u9879\u6307\u5411 <code>&lt;path_to_acl_file&gt;</code>\uFF0C\u91CD\u542F <code>mosquitto</code> \u751F\u6548</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># in mosquitto.conf
acl_file &lt;path_to_acl_file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 <code>aclfile.conf</code> \u4E2D\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF0C\u6DFB\u52A0\u7528\u6237 <code>test</code> \u5BF9\u8BDD\u9898 <code>testtopic</code> \u7684\u8BFB\u5199\u6743\u9650</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># This only affects clients with username &quot;test&quot;.
user test
topic read testtopic
topic write testtopic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u6388\u6743\u7528\u6237 <code>userA</code> \u5BF9\u8BDD\u9898 <code>topicA</code> \u53EA\u8BFB\u3001\u7528\u6237 <code>userA</code> \u5BF9\u8BDD\u9898 <code>topicB</code> \u53EA\u5199\u7684\u6743\u9650</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># This only affects clients with username &quot;userA&quot;.
user userA
topic read topicA

# This only affects clients with username &quot;userB&quot;.
user userB
topic write topicB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD8\u53EF\u4EE5\u4F7F\u7528\u5339\u914D\u7B26\u5BF9</p>`,38),d=[i];function t(c,l){return s(),a("div",null,d)}var u=e(o,[["render",t],["__file","mosquitto.html.vue"]]);export{u as default};