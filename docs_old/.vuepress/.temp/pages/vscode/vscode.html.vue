<template><h1 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> VScode</h1>
<ul>
<li><a href="#vscode">VScode</a></li>
<li><a href="#download">Download</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7">使用技巧</a>
<ul>
<li><a href="#%E5%91%BD%E4%BB%A4%E9%9D%A2%E6%9D%BF">命令面板</a></li>
<li><a href="#%E5%91%BD%E4%BB%A4%E8%A1%8C">命令行</a></li>
</ul>
</li>
<li><a href="#%E5%B7%A5%E4%BD%9C%E5%8C%BA%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">工作区配置文件</a></li>
<li><a href="#%E7%94%A8%E6%88%B7%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5">用户代码片段</a></li>
</ul>
<h1 id="download" tabindex="-1"><a class="header-anchor" href="#download" aria-hidden="true">#</a> Download</h1>
<p><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VScode<ExternalLinkIcon/></a></p>
<h1 id="使用技巧" tabindex="-1"><a class="header-anchor" href="#使用技巧" aria-hidden="true">#</a> 使用技巧</h1>
<h2 id="命令面板" tabindex="-1"><a class="header-anchor" href="#命令面板" aria-hidden="true">#</a> 命令面板</h2>
<p>顶部菜单栏
Keyboard Shortcut: <code>Ctrl+Shift+P</code>
<img src="https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/OpenCommandPalatte.gif" alt="Command Palette"></p>
<h2 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行" aria-hidden="true">#</a> 命令行</h2>
<p>VS Code has a powerful command line interface (CLI) which allows you to customize how the editor is launched to support various scenarios.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># open code with current directory</span>
code <span class="token builtin class-name">.</span>

<span class="token comment"># open the current directory in the most recently used code window</span>
code -r <span class="token builtin class-name">.</span>

<span class="token comment"># create a new window</span>
code -n

<span class="token comment"># change the language</span>
code --locale<span class="token operator">=</span>es

<span class="token comment"># open diff editor</span>
code --diff <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">1</span>></span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">2</span>></span>

<span class="token comment"># open file at specific line and column &lt;file:line[:character]></span>
code --goto package.json:10:5

<span class="token comment"># see help options</span>
code --help

<span class="token comment"># disable all extensions</span>
code --disable-extensions <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h1 id="工作区配置文件" tabindex="-1"><a class="header-anchor" href="#工作区配置文件" aria-hidden="true">#</a> 工作区配置文件</h1>
<h1 id="用户代码片段" tabindex="-1"><a class="header-anchor" href="#用户代码片段" aria-hidden="true">#</a> 用户代码片段</h1>
<p>左下角齿轮可以打开用户代码片段，你可以为指定语言配置代码片段，也可以全局配置</p>
<p>示例文件已经说明了如何编写代码片段(snippets)</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// Place your 全局 snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and </span>
<span class="token comment">// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope </span>
<span class="token comment">// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is </span>
<span class="token comment">// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: </span>
<span class="token comment">// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. </span>
<span class="token comment">// Placeholders with the same ids are connected.</span>
<span class="token comment">// Example:</span>
<span class="token comment">// "Print to console": {</span>
<span class="token comment">// 	"scope": "javascript,typescript",</span>
<span class="token comment">// 	"prefix": "log",</span>
<span class="token comment">// 	"body": [</span>
<span class="token comment">// 		"console.log('$1');",</span>
<span class="token comment">// 		"$2"</span>
<span class="token comment">// 	],</span>
<span class="token comment">// 	"description": "Log output to console"</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>下面的代码片段是快速生成 C++ 中的初始代码模板</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  	<span class="token property">"cpp_code_basic"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    	<span class="token property">"scope"</span><span class="token operator">:</span> <span class="token string">"cpp"</span><span class="token punctuation">,</span>
    	<span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token string">"cppcode"</span><span class="token punctuation">,</span>
    	<span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    		<span class="token string">"#include&lt;iostream>"</span><span class="token punctuation">,</span>
    		<span class="token string">"#include &lt;string>"</span><span class="token punctuation">,</span>
    		<span class="token string">"using namespace std;"</span><span class="token punctuation">,</span>            
    		<span class="token string">"$1"</span><span class="token punctuation">,</span>
    		<span class="token string">"int main(void){"</span><span class="token punctuation">,</span>
    		<span class="token string">"\t$0"</span><span class="token punctuation">,</span>
    		<span class="token string">"\treturn 0;"</span><span class="token punctuation">,</span>
    		<span class="token string">"}"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    	<span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"cpp basic code"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><code>cpp_code_basic</code> 是该用户片段的名字，<code>scope</code> 是当前用户片段所针对的语言，也就是说，在指定语言下才会触发当前的用户片段，<code>prefix</code> 是触发代码片段的词，当输入触发词之后，可以自动补全出 <code>body</code> 内的代码，<code>description</code> 则描述了该代码片段</p>
<p>当我们在输入 <code>cppcode</code> 会出现当前代码片段的提示，就可以快速生成代码，可以理解成一种自定义的代码补全</p>
<p>关键是 <code>body</code> 内的代码片段如何编写：</p>
<p>在 <code>body</code> 这个数组内，每一</p>
</template>
