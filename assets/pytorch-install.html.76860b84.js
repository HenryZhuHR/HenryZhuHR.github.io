import{b as s}from"./app.cdc06c7c.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";var a="/HenryZhuHR.github.io/assets/pytorch-org.a92773b1.png";const o={},t=s('<h1 id="pytorch-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#pytorch-\u5B89\u88C5" aria-hidden="true">#</a> pytorch \u5B89\u88C5</h1><p>\u5728<a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">pytorch\u5B98\u7F51</a>\u4E0A\uFF0C\u627E\u5230<code>INSTALL PYTORCH</code></p><p><img src="'+a+`" alt="Pytorch \u5B98\u7F51"></p><ul><li><code>PyTorch Build</code> : \u9009\u62E9 <code>Stable(x.x.x)</code> \u5373\u53EF</li><li><code>Your OS</code> : \u9009\u62E9\u7535\u8111\u64CD\u4F5C\u7CFB\u7EDF</li><li><code>Package</code> : \u5B89\u88C5\u65B9\u5F0F\uFF0C\u4E00\u822C\u7528pip\u5B89\u88C5</li><li><code>Language</code> : \u9009Python</li><li><code>Compute Platform</code>\uFF1A \u8FD9\u91CC\u6839\u636E\u4F60\u7535\u8111\u662F\u5426\u91C7\u7528\u5B89\u88C5 <code>GPU</code> \u7248\u672C</li><li><code>Run this Command</code> : \u9009\u62E9\u4E0A\u8FF0\u5B8C\u6210\u540E\uFF0C\u590D\u5236\u8FD9\u91CC\u7684\u547D\u4EE4\u884C\u5230\u7EC8\u7AEF\u8FD0\u884C\uFF0C\u5373\u53EF\u5B89\u88C5</li></ul><blockquote><p>[!TIP]<br> \u5B89\u88C5 <code>GPU</code> \u7248\u672C\uFF0C\u90A3\u4E48\u4F60\u7684\u8BBE\u5907\u9700\u8981\u6EE1\u8DB3\u4E00\u5B9A\u7684\u8981\u6C42</p><ul><li>\u62E5\u6709<strong>NVIDIA\u7684\u72EC\u7ACB\u663E\u5361</strong>\u7684\u8BBE\u5907\uFF0C\u53EA\u9700\u8981\u63D0\u524D\u5B89\u88C5\u597D\u5BF9\u5E94\u7248\u672C\u7684 <code>CUDA</code> \u548C <code>cudnn</code> \u5373\u53EF\u5B89\u88C5GPU\u7248\u672C\u7684pytorch\uFF0C\u5B89\u88C5\u53EF\u4EE5<a href="/docs/cuda/cuda.md" target="_blank" rel="noopener noreferrer">\u53C2\u8003\u6559\u7A0B</a></li><li>AMD\u663E\u5361\u4EC5\u652F\u6301Linux\u7CFB\u7EDF\uFF08\u622A\u81F32021.10.21\uFF09</li><li>Mac\u4EC5\u652F\u6301CPU\u8BAD\u7EC3 (pytorch \u6682\u65F6\u672A\u652F\u6301 M1 Pro/Max GPU)</li></ul></blockquote><p>\u4F8B\u5982\u5728<code>CUDA 11.x</code>\u73AF\u5883\u4E0B\u5B89\u88C5<code>pytorch1.8.2 LTS</code>\u7684\u547D\u4EE4\u4E3A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>pip3 <span class="token function">install</span> <span class="token assign-left variable">torch</span><span class="token operator">==</span><span class="token number">1.8</span>.2+cu111 <span class="token assign-left variable">torchvision</span><span class="token operator">==</span><span class="token number">0.9</span>.2+cu111 <span class="token assign-left variable">torchaudio</span><span class="token operator">==</span><span class="token number">0.8</span>.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html
</code></pre></div><p>\u4F8B\u5982\u5728<code>CUDA 11.x</code>\u73AF\u5883\u4E0B\u5B89\u88C5<code>pytorch1.9.1</code>\u7684\u547D\u4EE4\u4E3A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>pip3 <span class="token function">install</span> <span class="token assign-left variable">torch</span><span class="token operator">==</span><span class="token number">1.9</span>.1+cu111 <span class="token assign-left variable">torchvision</span><span class="token operator">==</span><span class="token number">0.10</span>.1+cu111 <span class="token assign-left variable">torchaudio</span><span class="token operator">==</span><span class="token number">0.9</span>.1 -f https://download.pytorch.org/whl/torch_stable.html
</code></pre></div><p>\u8010\u5FC3\u7B49\u5F85\u4E0B\u8F7D\u5373\u53EF\u5B8C\u6210\u5B89\u88C5</p><blockquote><p>\u5B89\u88C5\u4E0D\u6210\u529F\u53EF\u80FD\u56E0\u4E3A\u7F51\u901F\u95EE\u9898\uFF0C\u6709\u5982\u4E0B\u89E3\u51B3\u65B9\u6848</p><ul><li>\u8003\u8651\u79D1\u5B66\u4E0A\u7F51</li><li>\u5728\u9009\u62E9\u5B8C\u9700\u8981\u5B89\u88C5\u7684Pytorch\u7248\u672C\u540E\uFF0C\u5728\u5B89\u88C5\u547D\u4EE4\u4E2D\u9644\u5E26\u4E86\u4E00\u4E2A\u7F51\u5740\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u641C\u7D22\u8FD9\u4E2A\u7F51\u5740\uFF0C\u5728\u91CC\u9762\u641C\u7D22\u5BF9\u5E94\u7684\u7248\u672C\u3002<br> \u4F8B\u5982\u5728 <code>CUDA 11.1</code> \u73AF\u5883\u4E0B\u5B89\u88C5 <code>pytorch1.8.2 LTS</code> \u7684\u547D\u4EE4\u4E2D\uFF0C\u7F51\u5740\u662F <code>https://download.pytorch.org/whl/lts/1.8/torch_lts.html</code> \uFF0C\u6211\u4EEC\u8BBF\u95EE\u4E4B\u540E\uFF0C\u67E5\u770B\u547D\u4EE4\u4E2D\u7ED9\u51FA\u7684 <code>torch</code> \u548C <code>torchvision</code> \u7248\u672C\uFF0C\u5206\u522B\u662F <code>1.8.2+cu111</code> \u548C <code>0.9.2+cu111</code>\uFF0C\u6211\u4EEC\u641C\u7D22\u7F51\u9875\u4E2D\u5168\u90E8\u7684 <code>cu111</code> \u9879\uFF0C\u5C31\u53EF\u4EE5\u627E\u5230\u5BF9\u5E94\u7684\u94FE\u63A5\u4E86\u3002\u70B9\u51FB\u94FE\u63A5\u4E0B\u8F7D\u5230\u672C\u5730\u540E\uFF0C\u6267\u884C\u672C\u5730\u5B89\u88C5</li></ul></blockquote><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u5728\u547D\u4EE4\u884C\u542F\u52A8 Python</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Linux/Mac OS</span>
python3

<span class="token comment"># Windows</span>
python
</code></pre></div><p>\u5728Python\u7684\u811A\u672C\u73AF\u5883\u91CC\u5BFC\u5165pytorch\u5E76\u4E14\u67E5\u770B\u5176\u73AF\u5883</p><div class="language-python ext-py"><pre class="language-python"><code>Python <span class="token number">3.9</span><span class="token number">.7</span> <span class="token punctuation">(</span>tags<span class="token operator">/</span>v3<span class="token punctuation">.</span><span class="token number">9.7</span><span class="token punctuation">:</span>1016ef3<span class="token punctuation">,</span> Aug <span class="token number">30</span> <span class="token number">2021</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">:</span><span class="token number">19</span><span class="token punctuation">:</span><span class="token number">38</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>MSC v<span class="token punctuation">.</span><span class="token number">1929</span> <span class="token number">64</span> bit <span class="token punctuation">(</span>AMD64<span class="token punctuation">)</span><span class="token punctuation">]</span> on win32
Type <span class="token string">&quot;help&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;copyright&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;credits&quot;</span> <span class="token keyword">or</span> <span class="token string">&quot;license&quot;</span> <span class="token keyword">for</span> more information<span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> torch
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>torch<span class="token punctuation">.</span>__version__<span class="token punctuation">)</span>
<span class="token number">1.9</span><span class="token number">.1</span><span class="token operator">+</span>cu111
</code></pre></div>`,15);function e(p,c){return t}var u=n(o,[["render",e]]);export{u as default};
