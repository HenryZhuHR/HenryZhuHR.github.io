import{b as e}from"./app.2ef0ce8d.js";import{_ as s,a as i}from"./github-ssh~clone.12e4fa0a.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const a={},o=e(`<h1 id="github-\u914D\u7F6E-ssh-\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#github-\u914D\u7F6E-ssh-\u5BC6\u94A5" aria-hidden="true">#</a> Github \u914D\u7F6E SSH \u5BC6\u94A5</h1><p>\u5F88\u591A\u65F6\u5019\u6211\u4EEC\u5728\u4F7F\u7528 Git \u63A8\u9001\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u90FD\u9700\u8981\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u8FD9\u6837\u5F88\u9EBB\u70E6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E SSH \u5BC6\u94A5\u6765\u5B9E\u73B0\u514D\u5BC6\u64CD\u4F5C\u3002</p><h2 id="_1-\u672C\u5730\u751F\u6210-ssh-\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#_1-\u672C\u5730\u751F\u6210-ssh-\u5BC6\u94A5" aria-hidden="true">#</a> 1. \u672C\u5730\u751F\u6210 SSH \u5BC6\u94A5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>ssh-keygen -t rsa -C <span class="token string">&quot;&lt;your_email&gt;&quot;</span>
</code></pre></div><p>\u5176\u4ED6\u53EF\u9009\u53C2\u6570</p><ul><li><p><code>-f</code> \u6307\u5B9A\u751F\u6210\u7684\u5BC6\u94A5\u6587\u4EF6\u3002\u9ED8\u8BA4\u751F\u6210\u7684\u5BC6\u94A5\u6587\u4EF6\u4E3A <code>~/.ssh/id_rsa</code>\u3002</p><p>\u4F8B\u5982\u8BBE\u7F6E\u4E00\u4E2A\u540D\u4E3A <code>~/.ssh/id_rsa_github</code> \u7684\u5BC6\u94A5\u4E13\u4E3A Github \u4F7F\u7528: <code>-f ~/.ssh/id_rsa_github</code></p></li><li><p><code>-b</code> \u6307\u5B9A\u5BC6\u94A5\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 2048\uFF0C\u901A\u8FC7 <code>-b 4096</code> \u53EF\u4EE5\u8BBE\u7F6E\u4E3A 4096</p></li><li><p><code>-t</code> \u6307\u5B9A\u5BC6\u94A5\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A rsa\uFF0C\u901A\u8FC7 <code>-t dsa</code> \u53EF\u4EE5\u8BBE\u7F6E\u4E3A dsa</p></li><li><p><code>-C</code> \u6DFB\u52A0\u6CE8\u91CA\u4FE1\u606F\uFF0C\u4E00\u822C\u4E3A\u90AE\u7BB1\u5730\u5740</p></li></ul><p>\u8FD0\u884C\u540E\u4F1A\u63D0\u793A\u8F93\u5165\u5BC6\u94A5\u6587\u4EF6\u7684\u4FDD\u5B58\u8DEF\u5F84\uFF0C\u76F4\u63A5\u56DE\u8F66\u5373\u53EF\uFF0C\u4F1A\u5728\u9ED8\u8BA4\u8DEF\u5F84 <code>~/.ssh/</code> \u4E0B\u751F\u6210\u5BC6\u94A5\u6587\u4EF6\uFF1A</p><ul><li><code>id_rsa</code> \u4E3A\u79C1\u94A5</li><li><code>id_rsa.pub</code> \u4E3A\u516C\u94A5</li></ul><h2 id="_2-\u5C06\u516C\u94A5\u6DFB\u52A0\u5230-github" tabindex="-1"><a class="header-anchor" href="#_2-\u5C06\u516C\u94A5\u6DFB\u52A0\u5230-github" aria-hidden="true">#</a> 2. \u5C06\u516C\u94A5\u6DFB\u52A0\u5230 Github</h2><p>\u5C06 <code>id_rsa.pub</code> \u6587\u4EF6\u4E2D\u7684\u5185\u5BB9\u590D\u5236\u5230 Github \u7684 SSH \u5BC6\u94A5\u4E2D\uFF0C\u5728 Github \u4E2D <code>Settings -&gt; SSH and GPG keys -&gt; New SSH key</code> \u4E2D\u6DFB\u52A0\uFF0C\u547D\u540D\u65F6\u5019\u53EF\u4EE5\u81EA\u5B9A\u4E49\uFF0C\u5EFA\u8BAE\u548C\u8BBE\u5907\u7ED1\u5B9A\uFF0C\u5E76\u4E14\u52A0\u4E0A\u5BC6\u94A5\u540D\u79F0\uFF0C\u4F8B\u5982 <code>Ubuntu22.04-id_rsa</code></p><p><img src="`+s+'" alt="\u516C\u94A5\u6DFB\u52A0\u5230 Github"></p><p>\u6DFB\u52A0\u4E4B\u540E\uFF0Cclone \u9879\u76EE\u91C7\u7528 ssh \u7684\u65B9\u5F0F\uFF0C\u4F1A\u81EA\u52A8\u4E0E Github \u5EFA\u7ACB\u8FDE\u63A5\uFF0CGithub \u4F1A\u5C06\u516C\u94A5\u548C\u300C<strong>\u5F53\u524D\u8BBE\u5907\u4E2D</strong>\u300D\u7684\u79C1\u94A5\u8FDB\u884C\u5339\u914D\uFF0C\u5982\u679C\u5339\u914D\u6210\u529F\uFF0C\u5219\u53EF\u4EE5\u514D\u5BC6\u64CD\u4F5C\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A\u5982\u679C\u662F\u591A\u8BBE\u5907\uFF0C\u9700\u8981\u5C06\u6BCF\u4E2A\u8BBE\u5907\u7684\u516C\u94A5\u90FD\u6DFB\u52A0\u5230 Github \u4E2D\uFF0C\u8FD9\u6837\u624D\u80FD\u5B9E\u73B0\u591A\u8BBE\u5907\u514D\u5BC6\u64CD\u4F5C\u3002\u6BCF\u4E2A\u8BBE\u5907\u751F\u6210\u7684\u79C1\u94A5\u90FD\u4E0D\u4E00\u6837\uFF0C\u5F53\u7136\u4E86\uFF0C\u628A\u5BC6\u94A5\u590D\u5236\u5230\u5176\u4ED6\u8BBE\u5907\u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u4F46\u662F\u8FD9\u6837\u5C31\u5931\u53BB\u4E86 SSH \u5BC6\u94A5\u7684\u610F\u4E49\u4E86\u3002</p></blockquote><p><img src="'+i+'" alt="clone \u9879\u76EE\u91C7\u7528 ssh \u7684\u65B9\u5F0F"></p><p>HTTPS \u548C SSH clone \u65B9\u5F0F\u7684\u533A\u522B\uFF1A</p><ul><li>HTTPS \u53EF\u4EE5\u4EFB\u610F\u7528\u6237\u514B\u9686\uFF0CSSH \u53EA\u80FD\u514B\u9686\u81EA\u5DF1\uFF08\u6709\u6743\u9650\u7684\uFF09\u7684\u9879\u76EE\uFF0C\u5E76\u4E14\u9700\u8981\u914D\u7F6E SSH \u5BC6\u94A5</li><li>\u5728\u63A8\u9001\u4EE3\u7801\u7684\u65F6\u5019\uFF0CHTTPS \u9700\u8981\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0CSSH \u4E0D\u9700\u8981\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801</li></ul>',16);function c(t,h){return o}var u=d(a,[["render",c]]);export{u as default};