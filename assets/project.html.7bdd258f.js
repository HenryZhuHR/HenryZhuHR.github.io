import{_ as a,o as n,c as s,b as e}from"./app.a1bc0b91.js";const t={},o=e(`<h1 id="java-\u5B89\u88C5\u4E0E\u9879\u76EE\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#java-\u5B89\u88C5\u4E0E\u9879\u76EE\u914D\u7F6E" aria-hidden="true">#</a> Java \u5B89\u88C5\u4E0E\u9879\u76EE\u914D\u7F6E</h1><ul><li><a href="#java-%E5%AE%89%E8%A3%85%E4%B8%8E%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE">Java \u5B89\u88C5\u4E0E\u9879\u76EE\u914D\u7F6E</a><ul><li><a href="#java-%E5%AE%89%E8%A3%85">Java \u5B89\u88C5</a></li><li><a href="#java-%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83">Java \u914D\u7F6E\u73AF\u5883</a><ul><li><a href="#linuxmacos-%E4%B8%8B%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE">Linux/MacOS \u4E0B\u73AF\u5883\u914D\u7F6E</a></li><li><a href="#windows-%E4%B8%8B%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE">Windows \u4E0B\u73AF\u5883\u914D\u7F6E</a></li></ul></li><li><a href="#%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85">\u63D2\u4EF6\u5B89\u88C5</a></li></ul></li><li><a href="#%E9%85%8D%E7%BD%AE">\u914D\u7F6E</a></li></ul><h2 id="java-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#java-\u5B89\u88C5" aria-hidden="true">#</a> Java \u5B89\u88C5</h2><p>JDK(Java Development Kit) \u662F Java \u8BED\u8A00\u7684\u8F6F\u4EF6\u5F00\u53D1\u5DE5\u5177\u5305(SDK)</p><ul><li><strong>Java SE</strong> \uFF1A standard edition\uFF0C\u6807\u51C6\u7248\u3002\u5305\u542B\u4E86\u57FA\u7840\u548C\u6838\u5FC3\u7684\u5E93\uFF0C\u53EF\u7528\u4E8E\u63A7\u5236\u53F0\u53CA\u684C\u9762\u5E94\u7528\u8F6F\u4EF6\u7684\u5F00\u53D1\u3002</li><li><strong>Java EE</strong> \uFF1A enterprise edition\uFF0C\u4F01\u4E1A\u7248\u3002\u4E3B\u8981\u7528\u4E8E\u4F01\u4E1A\u7EA7\u5206\u5E03\u5F0F\u7F51\u7EDC\u5E94\u7528\u7684\u5F00\u53D1\u3002</li><li><strong>Java ME</strong> \uFF1A micro edition\uFF0C\u5FAE\u578B\u7248\u3002\u4E3B\u8981\u7528\u4E8E\u5D4C\u5165\u5F0F\u8BBE\u5907\u548C\u79FB\u52A8\u8BBE\u5907\u4E0A\u7684\u5E94\u7528\u5F00\u53D1\u3002</li></ul><p><a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" target="_blank" rel="noopener noreferrer">Java SE Development Kit 11 Downloads</a>\uFF0C\u4E0B\u8F7D\u9700\u8981\u767B\u9646</p><h2 id="java-\u914D\u7F6E\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#java-\u914D\u7F6E\u73AF\u5883" aria-hidden="true">#</a> Java \u914D\u7F6E\u73AF\u5883</h2><h3 id="linux-macos-\u4E0B\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#linux-macos-\u4E0B\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> Linux/MacOS \u4E0B\u73AF\u5883\u914D\u7F6E</h3><p>Linux \u4E0B\u7F16\u8F91\u7528\u6237\u7EA7\u7684\u73AF\u5883\u53D8\u91CF\u6587\u4EF6 <code>~/.bashrc</code> \uFF0C MacOS\u4E0B\u4E0B\u7F16\u8F91\u7528\u6237\u7EA7\u7684\u73AF\u5883\u53D8\u91CF\u6587\u4EF6 <code>~/.zshrc</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># EX: export JAVA_HOME=/usr/lib/jvm/jdk-17</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span><span class="token operator">&lt;</span>path_to_your_jdk_path<span class="token operator">&gt;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span><span class="token variable">\${JAVA_HOME}</span>/jre
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">\${JAVA_HOME}</span>/lib:<span class="token variable">\${JRE_HOME}</span>/lib:<span class="token variable">\${CLASSPATH}</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${JAVA_HOME}</span>/bin:<span class="token variable">\${JRE_HOME}</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="windows-\u4E0B\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#windows-\u4E0B\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> Windows \u4E0B\u73AF\u5883\u914D\u7F6E</h3><ul><li><code>JAVA_HOME</code> : <code>...\\Java\\jdk-11.0.9</code> jdk\u7684\u5B89\u88C5\u76EE\u5F55</li><li><code>CLASSPATH</code> : <code>%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar</code> (JDK1.5\u4EE5\u4E0A\u53EF\u4EE5\u4E0D\u7528\u914D\u7F6ECLASSPATH\u53D8\u91CF)</li><li>\u6DFB\u52A0\u5230Path <ul><li><code>%JAVA_HOME%\\bin</code></li><li><code>%JAVA_HOME%\\jre\\bin</code></li></ul></li></ul><p>\u6D4B\u8BD5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">java</span>
javac
<span class="token function">java</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63D2\u4EF6\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u5B89\u88C5" aria-hidden="true">#</a> \u63D2\u4EF6\u5B89\u88C5</h2><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=redhat.java" target="_blank" rel="noopener noreferrer">Language Support for Java\u2122 by Red Hat</a></li></ul><p>\u914D\u7F6E\u4E0D\u540C\u7248\u672C\u7684java</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;java.configuration.runtimes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaSE-1.8&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/path/to/jdk-8&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaSE-11&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/path/to/jdk-11&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaSE-16&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/path/to/jdk-16&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug" target="_blank" rel="noopener noreferrer">Debugger for Java</a></p></li><li><p><a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven" target="_blank" rel="noopener noreferrer">Maven for Java</a></p></li><li><p><a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test" target="_blank" rel="noopener noreferrer">Test Runner for Java</a></p></li><li><p><a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency" target="_blank" rel="noopener noreferrer">Project Manager for Java</a></p></li></ul><h1 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h1><p>settings.json</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;java.home&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path-to-your-jdk&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),i=[o];function l(r,p){return n(),s("div",null,i)}var d=a(t,[["render",l],["__file","project.html.vue"]]);export{d as default};
