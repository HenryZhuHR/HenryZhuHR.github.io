import{b as e}from"./app.178cdcf0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var o="/assets/github-ssh~addsshkey.8f0e7512.png",a="/assets/github-ssh~clone.f663bd8a.png";const d={},c=e(`<h1 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh" aria-hidden="true">#</a> SSH</h1><p>ssh \u662F\u4E00\u79CD\u7F51\u7EDC\u534F\u8BAE\uFF0C\u7528\u4E8E\u8BA1\u7B97\u673A\u4E4B\u95F4\u7684\u52A0\u5BC6\u767B\u5F55\u3002\u4F8B\u5982\uFF1A</p><ul><li>\u672C\u5730\u767B\u5F55\u8FDC\u7A0B\u670D\u52A1\u5668</li><li>\u672C\u5730\u767B\u5F55 Github\uFF0C\u8FDB\u884C\u4EE3\u7801\u7684\u514B\u9686\u548C\u63A8\u9001</li></ul><h2 id="\u751F\u6210-ssh-\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210-ssh-\u5BC6\u94A5" aria-hidden="true">#</a> \u751F\u6210 SSH \u5BC6\u94A5</h2><p>\u751F\u6210 SSH \u5BC6\u94A5\u7684\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>ssh-keygen -f <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span> -C <span class="token operator">&lt;</span>comment<span class="token operator">&gt;</span>
</code></pre></div><p>\u5176\u4ED6\u53EF\u9009\u53C2\u6570</p><ul><li><p><code>-f</code> \u6307\u5B9A\u751F\u6210\u7684\u5BC6\u94A5\u6587\u4EF6\u3002\u9ED8\u8BA4\u751F\u6210\u7684\u5BC6\u94A5\u6587\u4EF6\u4E3A <code>~/.ssh/id_rsa</code>\u3002</p><p>\u5982\u679C\u6709\u591A\u4E2A\u670D\u52A1\u5668\u53EF\u4EE5\u8BBE\u7F6E\u4E0D\u540C\u7684\u540D\u79F0\u52A0\u4EE5\u533A\u5206\u3002\u4F8B\u5982\u8BBE\u7F6E\u4E00\u4E2A\u540D\u4E3A <code>~/.ssh/id_rsa_github</code> \u7684\u5BC6\u94A5\u4E13\u4E3A Github \u4F7F\u7528: <code>-f ~/.ssh/id_rsa_github</code></p></li><li><p><code>-b</code> \u6307\u5B9A\u5BC6\u94A5\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 2048\uFF0C\u901A\u8FC7 <code>-b 4096</code> \u53EF\u4EE5\u8BBE\u7F6E\u4E3A 4096</p></li><li><p><code>-t</code> \u6307\u5B9A\u5BC6\u94A5\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A rsa\uFF0C\u901A\u8FC7 <code>-t dsa</code> \u53EF\u4EE5\u8BBE\u7F6E\u4E3A dsa</p></li><li><p><code>-C</code> \u6DFB\u52A0\u6CE8\u91CA\u4FE1\u606F\uFF0C\u4E00\u822C\u4E3A\u90AE\u7BB1\u5730\u5740\uFF0C\u4F8B\u5982 <code>-C &quot;abc@gmail.com&quot;</code></p></li></ul><p>\u8FD0\u884C\u540E\u4F1A\u63D0\u793A\u8F93\u5165\u5BC6\u94A5\u6587\u4EF6\u7684\u4FDD\u5B58\u8DEF\u5F84\uFF0C\u76F4\u63A5\uFF08\u4E00\u8DEF\uFF09\u56DE\u8F66\u5373\u53EF\uFF0C\u4F1A\u5728\u9ED8\u8BA4\u8DEF\u5F84 <code>~/.ssh/</code> \u4E0B\u751F\u6210\u5BC6\u94A5\u6587\u4EF6\uFF1A</p><ul><li><code>id_rsa</code> \u4E3A\u79C1\u94A5</li><li><code>id_rsa.pub</code> \u4E3A\u516C\u94A5</li></ul><h2 id="ssh-\u5BC6\u94A5\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#ssh-\u5BC6\u94A5\u7684\u4F5C\u7528" aria-hidden="true">#</a> SSH \u5BC6\u94A5\u7684\u4F5C\u7528</h2><h3 id="\u4F7F\u7528-ssh-\u5BC6\u94A5\u767B\u5F55\u8FDC\u7A0B\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-ssh-\u5BC6\u94A5\u767B\u5F55\u8FDC\u7A0B\u670D\u52A1\u5668" aria-hidden="true">#</a> \u4F7F\u7528 SSH \u5BC6\u94A5\u767B\u5F55\u8FDC\u7A0B\u670D\u52A1\u5668</h3><p>\u5C06\u300C\u672C\u5730\u516C\u94A5\u300D <code>id_rsa.pub</code> \u6DFB\u52A0\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u7684 <code>~/.ssh/authorized_keys</code> \u6587\u4EF6\u4E2D\uFF0C\u5373\u53EF\u4F7F\u7528\u79C1\u94A5\u767B\u5F55\u8FDC\u7A0B\u670D\u52A1\u5668</p><p>\u5728\u767B\u9646\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u5C06\u300C\u672C\u5730\u79C1\u94A5\u300D\u548C\u300C\u670D\u52A1\u5668\u516C\u94A5\u300D\u8FDB\u884C\u5339\u914D\uFF0C\u5982\u679C\u5339\u914D\u6210\u529F\uFF0C\u5219\u53EF\u4EE5\u514D\u5BC6\u767B\u5F55\u3002\u8FD9\u5728\u4F7F\u7528 VSCode \u8FDC\u7A0B\u5F00\u53D1\u7684\u65F6\u5019\u975E\u5E38\u6709\u7528\uFF0C\u53EF\u4EE5\u514D\u53BB\u6BCF\u6B21\u8F93\u5165\u5BC6\u7801\u7684\u9EBB\u70E6\u3002 (\u5173\u4E8E VScode \u8FDC\u7A0B\u5F00\u53D1\u53EF\u4EE5\u53C2\u8003 <a href="https://code.visualstudio.com/docs/remote/ssh" target="_blank" rel="noopener noreferrer"><em>&quot;Remote Development using SSH&quot;</em></a>)</p><p>\u4F7F\u7528 <code>ssh-copy-id</code> \u547D\u4EE4\u53EF\u4EE5\u5C06\u300C\u672C\u5730\u516C\u94A5\u300D\u4F20\u8F93\u534F\u8BAE\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u300C\u516C\u94A5\u8BA4\u8BC1\u300D\u6587\u4EF6\u4E2D\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>ssh-copy-id -i <span class="token operator">&lt;</span>identity_file<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>user<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>hostname<span class="token operator">&gt;</span>
</code></pre></div><ul><li><code>-i</code> \u6307\u5B9A\u300C\u672C\u5730\u516C\u94A5\u300D\u7684\u8DEF\u5F84\uFF0C\u4F8B\u5982 <code>-i ~/.ssh/id_rsa.pub</code></li><li><code>-p</code> \u5982\u679C\u8FDC\u7A0B\u670D\u52A1\u5668\u7684 SSH \u7AEF\u53E3\u4E0D\u662F\u9ED8\u8BA4\u7684 22 \u7AEF\u53E3\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>-p &lt;port&gt;</code> \u6307\u5B9A\u7AEF\u53E3</li></ul><blockquote><p>\u4E5F\u53EF\u4EE5\u624B\u52A8\u5C06\u300C\u672C\u5730\u516C\u94A5\u300D\u590D\u5236\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u7684 <code>~/.ssh/authorized_keys</code> \u6587\u4EF6\u4E2D (\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u9700\u8981\u624B\u52A8\u521B\u5EFA) \u3002\u4F46\u662F\u63A8\u8350\u4F7F\u7528 <code>ssh-copy-id</code> \u547D\u4EE4\uFF0C\u56E0\u4E3A\u8BE5\u547D\u4EE4\u4F1A\u81EA\u52A8\u521B\u5EFA <code>~/.ssh/</code> \u76EE\u5F55\u548C <code>~/.ssh/authorized_keys</code> \u6587\u4EF6\uFF0C\u5E76\u4E14\u4F1A\u81EA\u52A8\u8BBE\u7F6E\u6743\u9650\u3002</p></blockquote><p>\u4F7F\u7528 SSH \u8FDE\u63A5\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u65F6\u5019\uFF0C\u9700\u8981\u8FDC\u7A0B\u670D\u52A1\u5668\u5B89\u88C5 SSH \u670D\u52A1\uFF0C\u4E00\u822C\u6765\u8BF4 Linux \u670D\u52A1\u5668\u4F1A\u9ED8\u8BA4\u5B89\u88C5 <code>openssh-server</code> \uFF0C\u5982\u679C\u6CA1\u6709\u5B89\u88C5\uFF0C\u5BF9\u4E8E Ubuntu \uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>sudo apt install openssh-server</code> \u5B89\u88C5\u3002</p><h3 id="\u4F7F\u7528-ssh-\u5BC6\u94A5\u767B\u5F55-github" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-ssh-\u5BC6\u94A5\u767B\u5F55-github" aria-hidden="true">#</a> \u4F7F\u7528 SSH \u5BC6\u94A5\u767B\u5F55 Github</h3><p>\u5C06 <code>id_rsa.pub</code> \u6587\u4EF6\u4E2D\u7684\u5185\u5BB9\u590D\u5236\u5230 Github \u7684 SSH \u5BC6\u94A5\u4E2D\uFF0C\u5728 Github \u4E2D <code>Settings -&gt; SSH and GPG keys -&gt; New SSH key</code> \u4E2D\u6DFB\u52A0\uFF0C\u547D\u540D\u65F6\u5019\u53EF\u4EE5\u81EA\u5B9A\u4E49\uFF0C\u5EFA\u8BAE\u548C\u8BBE\u5907\u7ED1\u5B9A\uFF0C\u5E76\u4E14\u52A0\u4E0A\u5BC6\u94A5\u540D\u79F0\uFF0C\u4F8B\u5982 <code>Ubuntu22.04-id_rsa</code></p><p><img src="`+o+'" alt="\u516C\u94A5\u6DFB\u52A0\u5230 Github"></p><p>\u6DFB\u52A0\u4E4B\u540E\uFF0Cclone \u9879\u76EE\u91C7\u7528 ssh \u7684\u65B9\u5F0F\uFF0C\u4F1A\u81EA\u52A8\u4E0E Github \u5EFA\u7ACB\u8FDE\u63A5\uFF0CGithub \u4F1A\u5C06\u516C\u94A5\u548C\u300C<strong>\u5F53\u524D\u8BBE\u5907\u4E2D</strong>\u300D\u7684\u79C1\u94A5\u8FDB\u884C\u5339\u914D\uFF0C\u5982\u679C\u5339\u914D\u6210\u529F\uFF0C\u5219\u53EF\u4EE5\u514D\u5BC6\u64CD\u4F5C\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A\u5982\u679C\u662F\u591A\u8BBE\u5907\uFF0C\u9700\u8981\u5C06\u6BCF\u4E2A\u8BBE\u5907\u7684\u516C\u94A5\u90FD\u6DFB\u52A0\u5230 Github \u4E2D\uFF0C\u8FD9\u6837\u624D\u80FD\u5B9E\u73B0\u591A\u8BBE\u5907\u514D\u5BC6\u64CD\u4F5C\u3002\u6BCF\u4E2A\u8BBE\u5907\u751F\u6210\u7684\u79C1\u94A5\u90FD\u4E0D\u4E00\u6837\uFF0C\u5F53\u7136\u4E86\uFF0C\u628A\u5BC6\u94A5\u590D\u5236\u5230\u5176\u4ED6\u8BBE\u5907\u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u4F46\u662F\u8FD9\u6837\u5C31\u5931\u53BB\u4E86 SSH \u5BC6\u94A5\u7684\u610F\u4E49\u4E86\u3002</p></blockquote><p><img src="'+a+'" alt="clone \u9879\u76EE\u91C7\u7528 ssh \u7684\u65B9\u5F0F"></p><p>HTTPS \u548C SSH clone \u65B9\u5F0F\u7684\u533A\u522B\uFF1A</p><ul><li>HTTPS \u53EF\u4EE5\u4EFB\u610F\u7528\u6237\u514B\u9686\uFF0CSSH \u53EA\u80FD\u514B\u9686\u81EA\u5DF1\uFF08\u6709\u6743\u9650\u7684\uFF09\u7684\u9879\u76EE\uFF0C\u5E76\u4E14\u9700\u8981\u914D\u7F6E SSH \u5BC6\u94A5</li><li>\u5728\u63A8\u9001\u4EE3\u7801\u7684\u65F6\u5019\uFF0CHTTPS \u9700\u8981\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0CSSH \u4E0D\u9700\u8981\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801</li></ul>',27);function t(i,p){return c}var n=s(d,[["render",t]]);export{n as default};
