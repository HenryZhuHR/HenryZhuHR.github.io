<template><h1 id="java-安装与项目配置" tabindex="-1"><a class="header-anchor" href="#java-安装与项目配置" aria-hidden="true">#</a> Java 安装与项目配置</h1>
<ul>
<li><a href="#java-%E5%AE%89%E8%A3%85%E4%B8%8E%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE">Java 安装与项目配置</a>
<ul>
<li><a href="#java-%E5%AE%89%E8%A3%85">Java 安装</a></li>
<li><a href="#java-%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83">Java 配置环境</a>
<ul>
<li><a href="#linuxmacos-%E4%B8%8B%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE">Linux/MacOS 下环境配置</a></li>
<li><a href="#windows-%E4%B8%8B%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE">Windows 下环境配置</a></li>
</ul>
</li>
<li><a href="#%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85">插件安装</a></li>
</ul>
</li>
<li><a href="#%E9%85%8D%E7%BD%AE">配置</a></li>
</ul>
<h2 id="java-安装" tabindex="-1"><a class="header-anchor" href="#java-安装" aria-hidden="true">#</a> Java 安装</h2>
<p>JDK(Java Development Kit) 是 Java 语言的软件开发工具包(SDK)</p>
<ul>
<li><strong>Java SE</strong> ： standard edition，标准版。包含了基础和核心的库，可用于控制台及桌面应用软件的开发。</li>
<li><strong>Java EE</strong> ： enterprise edition，企业版。主要用于企业级分布式网络应用的开发。</li>
<li><strong>Java ME</strong> ： micro edition，微型版。主要用于嵌入式设备和移动设备上的应用开发。</li>
</ul>
<p><a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" target="_blank" rel="noopener noreferrer">Java SE Development Kit 11 Downloads<ExternalLinkIcon/></a>，下载需要登陆</p>
<h2 id="java-配置环境" tabindex="-1"><a class="header-anchor" href="#java-配置环境" aria-hidden="true">#</a> Java 配置环境</h2>
<h3 id="linux-macos-下环境配置" tabindex="-1"><a class="header-anchor" href="#linux-macos-下环境配置" aria-hidden="true">#</a> Linux/MacOS 下环境配置</h3>
<p>Linux 下编辑用户级的环境变量文件 <code>~/.bashrc</code> ， MacOS下下编辑用户级的环境变量文件 <code>~/.zshrc</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># EX: export JAVA_HOME=/usr/lib/jvm/jdk-17</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span><span class="token operator">&lt;</span>path_to_your_jdk_path<span class="token operator">></span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span><span class="token variable">${JAVA_HOME}</span>/jre
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">${JAVA_HOME}</span>/lib:<span class="token variable">${JRE_HOME}</span>/lib:<span class="token variable">${CLASSPATH}</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">${JAVA_HOME}</span>/bin:<span class="token variable">${JRE_HOME}</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="windows-下环境配置" tabindex="-1"><a class="header-anchor" href="#windows-下环境配置" aria-hidden="true">#</a> Windows 下环境配置</h3>
<ul>
<li><code>JAVA_HOME</code> : <code>...\Java\jdk-11.0.9</code> jdk的安装目录</li>
<li><code>CLASSPATH</code> : <code>%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar</code> (JDK1.5以上可以不用配置CLASSPATH变量)</li>
<li>添加到Path
<ul>
<li><code>%JAVA_HOME%\bin</code></li>
<li><code>%JAVA_HOME%\jre\bin</code></li>
</ul>
</li>
</ul>
<p>测试</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>java
javac
java --version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="插件安装" tabindex="-1"><a class="header-anchor" href="#插件安装" aria-hidden="true">#</a> 插件安装</h2>
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=redhat.java" target="_blank" rel="noopener noreferrer">Language Support for Java™ by Red Hat<ExternalLinkIcon/></a></li>
</ul>
<p>配置不同版本的java</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"java.configuration.runtimes"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"JavaSE-1.8"</span><span class="token punctuation">,</span>
    <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/path/to/jdk-8"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"JavaSE-11"</span><span class="token punctuation">,</span>
    <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/path/to/jdk-11"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"JavaSE-16"</span><span class="token punctuation">,</span>
    <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/path/to/jdk-16"</span><span class="token punctuation">,</span>
    <span class="token property">"default"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul>
<li>
<p><a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug" target="_blank" rel="noopener noreferrer">Debugger for Java<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven" target="_blank" rel="noopener noreferrer">Maven for Java<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test" target="_blank" rel="noopener noreferrer">Test Runner for Java<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency" target="_blank" rel="noopener noreferrer">Project Manager for Java<ExternalLinkIcon/></a></p>
</li>
</ul>
<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1>
<p>settings.json</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"java.home"</span><span class="token operator">:</span> <span class="token string">"path-to-your-jdk"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
