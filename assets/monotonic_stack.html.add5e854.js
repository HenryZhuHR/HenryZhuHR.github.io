import{_ as n,o as s,c as a,a as t}from"./app.e2a6bb87.js";var p="/assets/monotonic_stack.1b2f89db.svg";const o={},e=t('<h1 id="\u5355\u8C03\u6808" tabindex="-1"><a class="header-anchor" href="#\u5355\u8C03\u6808" aria-hidden="true">#</a> \u5355\u8C03\u6808</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u54EA\u4E9B\u95EE\u9898\u4F1A\u4F7F\u7528\u5355\u8C03\u6808\uFF1A</p><ul><li>\u5BFB\u627E\u4EFB\u4E00\u4E2A\u5143\u7D20\u7684\u53F3\u8FB9\uFF08\u5DE6\u8FB9\uFF09\u7B2C\u4E00\u4E2A\u6BD4\u81EA\u5DF1\u5927\uFF08\u5C0F\uFF09\u7684\u5143\u7D20\u7684\u4F4D\u7F6E</li></ul><p>\u5355\u8C03\u6808\u7684\u672C\u8D28\u662F\u7A7A\u95F4\u6362\u65F6\u95F4\uFF0C\u56E0\u4E3A\u5728\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\u9700\u8981<strong>\u7528\u4E00\u4E2A\u6808</strong>\u6765<strong>\u8BB0\u5F55\u53F3\u8FB9\u7B2C\u4E00\u4E2A\u6BD4\u5F53\u524D\u5143\u7D20\u9AD8\u7684\u5143\u7D20</strong>\uFF0C\u4F18\u70B9\u662F\u6574\u4E2A\u6570\u7EC4\u53EA\u9700\u8981\u904D\u5386\u4E00\u6B21\u3002</p><p>\u5355\u8C03\u6808\u662F\u4E00\u4E2A\u4E00\u7EF4\u6570\u7EC4\uFF0C\u5B58\u653E\u4E0B\u6807\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(n)\u3002</p><h2 id="\u5355\u8C03\u6808\u904D\u5386\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5355\u8C03\u6808\u904D\u5386\u8FC7\u7A0B" aria-hidden="true">#</a> \u5355\u8C03\u6808\u904D\u5386\u8FC7\u7A0B</h2><p>\u5BF9\u4E8E\u5BFB\u627E\u6570\u7EC4 <code>nums=[73, 74, 75, 71, 69, 72, 76, 73]</code> \u4E2D\u6BCF\u4E2A\u5143\u7D20\u53F3\u8FB9\u7B2C\u4E00\u4E2A\u6BD4\u81EA\u5DF1\u5927\u7684\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u7ED3\u679C\u5B58\u653E\u5728 <code>result</code>\uFF0C\u5355\u8C03\u6808\u7684\u904D\u5386\u8FC7\u7A0B\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="'+p+`" alt="\u5355\u8C03\u6808\u904D\u5386\u8FC7\u7A0B"></p><blockquote><p>\u9700\u8981\u8BF4\u660E\u7684\u662F\uFF0C\u5355\u8C03\u6808\u4E2D\u5B58\u653E\u7684\u662F\u4E0B\u6807\uFF0C\u800C\u4E0D\u662F\u5143\u7D20\u672C\u8EAB\uFF0C\u4F46\u662F\u4E3A\u4E86\u65B9\u4FBF\u770B\u56FE\uFF0C\u628A\u5143\u7D20\u4E5F\u753B\u5728\u4E86\u56FE\u4E2D\uFF0C\u53F3\u4E0B\u89D2\u4E3A\u5176\u4E0B\u6807</p></blockquote><ul><li><code>nums[0] = 73</code>\uFF0C\u6808\u4E3A\u7A7A\uFF0C\u76F4\u63A5\u5165\u6808</li><li><code>nums[1] = 74</code>\uFF0C\u6808\u9876\u5143\u7D20\u4E3A <code>73(\u4E0B\u68070)</code>\uFF0C<code>74 &gt; 73</code>\uFF0C<code>73(0)</code> \u7684\u53F3\u8FB9\u7B2C\u4E00\u4E2A\u6BD4\u81EA\u5DF1\u5927\u7684\u5143\u7D20\u4E3A <code>74</code>\uFF0C<code>73</code> \u51FA\u6808\uFF0C<code>74(1)</code> \u5165\u6808\uFF0C\u5E76\u4E14\u51FA\u6808\u7684 <code>73</code> \u5143\u7D20\u4E0B\u6807 <code>0</code> \u6240\u5BF9\u5E94\u7684\u7ED3\u679C <code>result[0] = 74</code>\u3002 (\u8FD9\u65F6\u5019\u4E5F\u770B\u51FA\u6765\u4E3A\u4EC0\u4E48\u5355\u8C03\u6808\u4E2D\u5B58\u653E\u7684\u662F\u4E0B\u6807\uFF0C\u662F\u56E0\u4E3A\u8981\u627E\u5230\u51FA\u6808\u5143\u7D20\u7684\u4E0B\u6807\uFF0C\u5E76\u8BB0\u5F55\u7ED3\u679C\uFF0C\u90A3\u4E48\u4E0D\u5982\u76F4\u63A5\u5B58\u653E\u4E0B\u6807)</li><li><code>nums[2] = 75</code>\uFF0C\u6808\u9876\u5143\u7D20\u4E3A <code>74(\u4E0B\u68071)</code>\uFF0C<code>75 &gt; 74</code>\uFF0C<code>74(1)</code> \u51FA\u6808\uFF0C<code>75(2)</code> \u5165\u6808\uFF0C<code>result[1] = 75</code></li><li><code>nums[3] = 71</code>\uFF0C\u6808\u9876\u5143\u7D20\u4E3A <code>75(\u4E0B\u68072)</code>\uFF0C<code>71 &lt; 75</code>\uFF0C<code>75(2)</code> \u5165\u6808</li><li>\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u5F53\u904D\u5386\u5230 <code>76(\u4E0B\u68076)</code> \u65F6\uFF0C\u60C5\u51B5\u53D1\u751F\u53D8\u5316</li><li><code>nums[6] = 76</code>\uFF0C\u6808\u9876\u5143\u7D20\u4E3A <code>72(\u4E0B\u68075)</code>\uFF0C<code>76 &gt; 72</code>\uFF0C<code>72(5)</code> \u7684\u53F3\u8FB9\u7B2C\u4E00\u4E2A\u6BD4\u81EA\u5DF1\u5927\u7684\u5143\u7D20\u4E3A <code>76</code>\uFF0C<code>72(5)</code> \u51FA\u6808\uFF0C<code>76(6)</code> \u5165\u6808\uFF0C<code>result[5] = 76</code></li><li><code>nums[7] = 73</code>\uFF0C\u6808\u9876\u5143\u7D20\u4E3A <code>76(\u4E0B\u68076)</code>\uFF0C<code>73 &lt; 76</code>\uFF0C<code>76(6)</code> \u5165\u6808</li><li>\u7ED3\u675F\u904D\u5386\uFF0C\u6700\u540E\u4E24\u4E2A\u5143\u7D20\u6CA1\u6709\u7ED3\u679C\uFF0C\u56E0\u4E3A\u6808\u4E2D\u8FD8\u6709\u4E24\u4E2A\u5143\u7D20</li></ul><h2 id="\u5355\u8C03\u6808\u5178\u578B\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5355\u8C03\u6808\u5178\u578B\u95EE\u9898" aria-hidden="true">#</a> \u5355\u8C03\u6808\u5178\u578B\u95EE\u9898</h2><h3 id="\u6BCF\u65E5\u6E29\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u6BCF\u65E5\u6E29\u5EA6" aria-hidden="true">#</a> \u6BCF\u65E5\u6E29\u5EA6</h3><p>\u4F8B\u5982 Leetcode <a href="https://leetcode-cn.com/problems/daily-temperatures/" target="_blank" rel="noopener noreferrer">739. \u6BCF\u65E5\u6E29\u5EA6</a></p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">dailyTemperatures</span><span class="token punctuation">(</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> T<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">result</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stack<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span>  stk<span class="token punctuation">;</span> <span class="token comment">// \u5B58\u653E\u4E0B\u6807</span>
    stk<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> T<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// \u56E0\u4E3A\u6808\u4E2D\u5B58\u653E\u7684\u662F\u4E0B\u6807\uFF0C\u800C\u4E0D\u662F\u5143\u7D20\u672C\u8EAB</span>
        <span class="token comment">// \u4E0D\u8981\u7C97\u5FC3\u5199\u6210 T[i] &gt; st.top() \uFF0C\u5207\u8BB0\u4E00\u5B9A\u8981\u68C0\u67E5\u662F T[i] &gt; T[st.top()]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>T<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> T<span class="token punctuation">[</span>stk<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            stk<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token comment">// \u4E0D\u4F1A\u5347\u9AD8\uFF0C\u8BF4\u660E\u627E\u5230\u5FC5\u987B\u5927\u4E8E\uFF0C\u4E0D\u542B\u7B49\u4E8E</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// \u56E0\u4E3A\u6808\u4E2D\u5B58\u653E\u7684\u662F\u4E0B\u6807\uFF0C\u800C\u4E0D\u662F\u5143\u7D20\u672C\u8EAB</span>
            <span class="token comment">// \u4E0D\u8981\u7C97\u5FC3\u5199\u6210 T[i] &gt; st.top() \uFF0C\u5207\u8BB0\u4E00\u5B9A\u8981\u68C0\u67E5\u662F T[i] &gt; T[st.top()]</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stk<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> T<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> T<span class="token punctuation">[</span>stk<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                result<span class="token punctuation">[</span>stk<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">-</span> stk<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                stk<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            stk<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B80\u5316\u7248\u672C</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">dailyTemperatures</span><span class="token punctuation">(</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> T<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    stack<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span>  st<span class="token punctuation">;</span> <span class="token comment">// \u9012\u589E\u6808</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">result</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> T<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// \u56E0\u4E3A\u6808\u4E2D\u5B58\u653E\u7684\u662F\u4E0B\u6807\uFF0C\u800C\u4E0D\u662F\u5143\u7D20\u672C\u8EAB</span>
        <span class="token comment">// \u4E0D\u8981\u7C97\u5FC3\u5199\u6210 T[i] &gt; st.top() \uFF0C\u5207\u8BB0\u4E00\u5B9A\u8981\u68C0\u67E5\u662F T[i] &gt; T[st.top()]</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> T<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> T<span class="token punctuation">[</span>st<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u4E0D\u4F1A\u5347\u9AD8\uFF0C\u8BF4\u660E\u627E\u5230\u5FC5\u987B\u5927\u4E8E\uFF0C\u4E0D\u542B\u7B49\u4E8E</span>
        <span class="token punctuation">{</span> <span class="token comment">// \u6CE8\u610F\u6808\u4E0D\u80FD\u4E3A\u7A7A</span>
            result<span class="token punctuation">[</span>st<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">-</span> st<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            st<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        st<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),c=[e];function l(i,u){return s(),a("div",null,c)}var d=n(o,[["render",l],["__file","monotonic_stack.html.vue"]]);export{d as default};
