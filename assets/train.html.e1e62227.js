import{b as n}from"./app.cdc06c7c.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},t=n(`<h1 id="pytorch\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#pytorch\u57FA\u7840" aria-hidden="true">#</a> Pytorch\u57FA\u7840</h1><p><a href="https://pytorch.org/tutorials/" target="_blank" rel="noopener noreferrer">pytorch\u5B98\u65B9\u6587\u6863</a>\u63D0\u4F9B\u4E86\u5168\u90E8\u7684api\u4F7F\u7528\u65B9\u6CD5\uFF0C\u4E5F\u63D0\u4F9B\u4E86\u6DF1\u5EA6\u5B66\u4E60\u5DE5\u4F5C\u6D41\u7A0B\u7684\u4ECB\u7ECD</p><ul><li><a href="#pytorch%E5%9F%BA%E7%A1%80">Pytorch\u57FA\u7840</a></li><li><a href="#%E7%94%A8pytorch%E5%A4%84%E7%90%86%E6%95%B0%E6%8D%AE%E9%9B%86">\u7528PyTorch\u5904\u7406\u6570\u636E\u96C6</a><ul><li><a href="#%E6%95%B0%E6%8D%AE%E9%9B%86%E5%AE%9A%E4%B9%89">\u6570\u636E\u96C6\u5B9A\u4E49</a></li><li><a href="#%E6%95%B0%E6%8D%AE%E9%9B%86%E5%8A%A0%E8%BD%BD">\u6570\u636E\u96C6\u52A0\u8F7D</a></li></ul></li><li><a href="#%E7%94%A8pytorch%E6%90%AD%E5%BB%BA%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%E6%A8%A1%E5%9E%8B">\u7528PyTorch\u642D\u5EFA\u6DF1\u5EA6\u5B66\u4E60\u6A21\u578B</a><ul><li><a href="#%E6%90%AD%E5%BB%BA%E6%A8%A1%E5%9E%8B">\u642D\u5EFA\u6A21\u578B</a></li></ul></li><li><a href="#%E8%AE%AD%E7%BB%83%E7%BD%91%E7%BB%9C">\u8BAD\u7EC3\u7F51\u7EDC</a></li><li><a href="#%E6%A8%A1%E5%9E%8B%E4%BF%9D%E5%AD%98%E4%B8%8E%E5%8A%A0%E8%BD%BD">\u6A21\u578B\u4FDD\u5B58\u4E0E\u52A0\u8F7D</a></li></ul><h1 id="\u7528pytorch\u5904\u7406\u6570\u636E\u96C6" tabindex="-1"><a class="header-anchor" href="#\u7528pytorch\u5904\u7406\u6570\u636E\u96C6" aria-hidden="true">#</a> \u7528PyTorch\u5904\u7406\u6570\u636E\u96C6</h1><p>\u6DF1\u5EA6\u5B66\u4E60\u7684\u6A21\u578B\u8BAD\u7EC3\u4E2D\u9700\u8981\u5C06\u6570\u636E\u96C6\u4E2D\u7684\u6570\u636E\u8BFB\u53D6\u5230\u6A21\u578B\u4E2D\u8FDB\u884C\u8BAD\u7EC3\uFF0C\u5728pytorch\u4E2D\uFF0C\u63D0\u4F9B\u4E86 <code>torch.utils.data.Dataset</code> \u6765\u81EA\u5B9A\u4E49\u6570\u636E\u96C6\u548C <code>torch.utils.data.DataLoader</code> \u6765\u52A0\u8F7D\u6570\u636E\u96C6\uFF0C\u5B98\u65B9\u6587\u6863\u4E5F\u5BF9<a href="https://pytorch.org/tutorials/beginner/basics/data_tutorial.html" target="_blank" rel="noopener noreferrer"> Datasets &amp; Dataloaders </a>\u4F5C\u4E86\u4ECB\u7ECD\u3002</p><h2 id="\u6570\u636E\u96C6\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u96C6\u5B9A\u4E49" aria-hidden="true">#</a> \u6570\u636E\u96C6\u5B9A\u4E49</h2><p><code>torch.utils.data.Dataset</code> \u662F\u81EA\u5B9A\u4E49\u6570\u636E\u96C6\u65B9\u6CD5\u7684\u62BD\u8C61\u7C7B\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5DF1\u5B9A\u4E49\u4F60\u7684\u6570\u636E\u7C7B\u7EE7\u627F\u8FD9\u4E2A\u62BD\u8C61\u7C7B\uFF0C\u53EA\u9700\u8981\u5B9A\u4E49<code>__len__</code>\u548C<code>__getitem__</code>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5C31\u53EF\u4EE5\u3002\u91CD\u5199\u8FD9\u4E2A\u7C7B\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528pytorch\u4E2D\u7684api\u5BF9\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u96C6\u8FDB\u884C\u64CD\u4F5C\u3002</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">import</span> torch
<span class="token keyword">class</span> <span class="token class-name">CustomDataset</span><span class="token punctuation">(</span>torch<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>data<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>Dataset<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">__getitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> index<span class="token punctuation">:</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        image<span class="token operator">=</span>torch<span class="token punctuation">.</span>Tensor<span class="token punctuation">(</span><span class="token punctuation">)</span>
        label<span class="token operator">=</span>torch<span class="token punctuation">.</span>Tensor<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> image<span class="token punctuation">,</span>label

    <span class="token keyword">def</span> <span class="token function">__len__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token comment"># length of your dataset </span>
</code></pre></div><ul><li><code>__len__</code> \u5C06\u8FD4\u56DE\u6574\u4E2A\u6570\u636E\u96C6\u7684\u5927\u5C0F\u3002\u5728\u65B0\u7248\u672C\u4E2D\uFF0C\u8FD9\u4E2A\u7C7B\u4E0D\u662F\u5FC5\u987B\u8981\u91CD\u5199 (override) \u7684</li><li><code>__getitem__</code> \u5219\u6839\u636E\u8F93\u5165\u53C2\u6570\u6570\u636E\u96C6\u5E8F\u53F7 <code>index</code> \u8FD4\u56DE\u5176\u6570\u636E <code>data</code> \u548C\u6570\u636E\u6807\u7B7E <code>label</code></li></ul><h2 id="\u6570\u636E\u96C6\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u96C6\u52A0\u8F7D" aria-hidden="true">#</a> \u6570\u636E\u96C6\u52A0\u8F7D</h2><p>DataLoader\u662F\u7528\u4E8E\u52A0\u8F7D\u6570\u636E\u96C6\u8FDB\u884C\u8BAD\u7EC3\u7684\u7C7B\uFF0C\u5C06Dataset\u751F\u6210\u7684\u6570\u636E\u96C6\u6839\u636Ebatch_size\u8FDB\u884C\u5212\u5206\uFF0C\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u53EF\u8FED\u4EE3\u5BF9\u8C61</p><div class="language-python ext-py"><pre class="language-python"><code>trainset<span class="token operator">=</span>Dataset<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
train_loader <span class="token operator">=</span> DataLoader<span class="token punctuation">(</span>dataset<span class="token operator">=</span>trainset<span class="token punctuation">,</span>batch_size<span class="token operator">=</span><span class="token number">32</span><span class="token punctuation">,</span>shuffle<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre></div><h1 id="\u7528pytorch\u642D\u5EFA\u6DF1\u5EA6\u5B66\u4E60\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u7528pytorch\u642D\u5EFA\u6DF1\u5EA6\u5B66\u4E60\u6A21\u578B" aria-hidden="true">#</a> \u7528PyTorch\u642D\u5EFA\u6DF1\u5EA6\u5B66\u4E60\u6A21\u578B</h1><h2 id="\u642D\u5EFA\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u6A21\u578B" aria-hidden="true">#</a> \u642D\u5EFA\u6A21\u578B</h2><p>pytorch\u4E2D\u901A\u8FC7\u7EE7\u627F<code>torch.nn.Module</code>\u7C7B\u6765\u6784\u5EFA\u81EA\u5DF1\u7684\u7F51\u7EDC\uFF0C\u5B98\u65B9\u6587\u6863\uFF1A<a href="https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html" target="_blank" rel="noopener noreferrer">Build the Neural Network</a></p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">from</span> torch <span class="token keyword">import</span> nn
<span class="token keyword">class</span> <span class="token class-name">MyModel</span><span class="token punctuation">(</span>nn<span class="token punctuation">.</span>Module<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># define Layer</span>

    <span class="token keyword">def</span> <span class="token function">forward</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Model Inference</span>
        <span class="token keyword">return</span> y
</code></pre></div><p><code>__init__</code>\u5185\u662F\u5B9A\u4E49\u548C\u7BA1\u7406\u7F51\u7EDC\u7684\u5404\u4E2A\u5C42(layer)\uFF0C<code>forward</code>\u662F\u5B9A\u4E49\u7F51\u7EDC\u524D\u5411\u63A8\u7406\u7684\u7ED3\u6784\uFF0C\u4E5F\u5C31\u662F\u771F\u6B63\u642D\u5EFA\u7F51\u7EDC\u7684\u90E8\u5206</p><p>\u521B\u5EFA\u6A21\u578B\u540E\uFF0C\u521D\u59CB\u5316\u6A21\u578B\u5E76\u8FDB\u884C\u6A21\u578B\u7684\u63A8\u7406</p><div class="language-python ext-py"><pre class="language-python"><code>model <span class="token operator">=</span> MyModel<span class="token punctuation">(</span><span class="token punctuation">)</span>
y <span class="token operator">=</span> model<span class="token punctuation">(</span>x<span class="token punctuation">)</span>    <span class="token comment"># forward(x)</span>
</code></pre></div><h1 id="\u8BAD\u7EC3\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#\u8BAD\u7EC3\u7F51\u7EDC" aria-hidden="true">#</a> \u8BAD\u7EC3\u7F51\u7EDC</h1><p>\u8BAD\u7EC3\u6A21\u578B\u9700\u8981\u4E00\u4E2A<strong>\u635F\u5931\u51FD\u6570</strong>\u548C<strong>\u6A21\u578B\u4F18\u5316\u5668(optimizer)</strong></p><div class="language-python ext-py"><pre class="language-python"><code>loss_fn <span class="token operator">=</span> nn<span class="token punctuation">.</span>CrossEntropyLoss<span class="token punctuation">(</span><span class="token punctuation">)</span>
optimizer <span class="token operator">=</span> torch<span class="token punctuation">.</span>optim<span class="token punctuation">.</span>SGD<span class="token punctuation">(</span>model<span class="token punctuation">.</span>parameters<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lr<span class="token operator">=</span><span class="token number">1e-3</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6709\u4E86\u6570\u636E\u3001\u6A21\u578B\u3001\u635F\u5931\u51FD\u6570\u3001\u4F18\u5316\u5668\uFF0C\u5C31\u53EF\u4EE5\u8FDB\u884C\u7B80\u5355\u7684\u7F51\u7EDC\u8BAD\u7EC3\u4E86</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">train</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">,</span> model<span class="token punctuation">,</span> loss_fn<span class="token punctuation">,</span> optimizer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    size <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">.</span>dataset<span class="token punctuation">)</span>
    <span class="token keyword">for</span> batch<span class="token punctuation">,</span> <span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">)</span><span class="token punctuation">:</span>
        X<span class="token punctuation">,</span> y <span class="token operator">=</span> X<span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span>

        <span class="token comment"># Compute prediction error</span>
        pred <span class="token operator">=</span> model<span class="token punctuation">(</span>X<span class="token punctuation">)</span>
        loss <span class="token operator">=</span> loss_fn<span class="token punctuation">(</span>pred<span class="token punctuation">,</span> y<span class="token punctuation">)</span>

        <span class="token comment"># Backpropagation</span>
        optimizer<span class="token punctuation">.</span>zero_grad<span class="token punctuation">(</span><span class="token punctuation">)</span>
        loss<span class="token punctuation">.</span>backward<span class="token punctuation">(</span><span class="token punctuation">)</span>
        optimizer<span class="token punctuation">.</span>step<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u540C\u65F6\u6211\u4EEC\u4E5F\u9700\u8981\u5BF9\u7F51\u7EDC\u7684\u7CBE\u5EA6\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u90E8\u5206\u4E0D\u9700\u8981\u5BF9\u7F51\u7EDC\u53C2\u6570\u8FDB\u884C\u66F4\u65B0\uFF0C\u6240\u4EE5\u9700\u8981\u5BF9\u7F51\u7EDC\u8FDB\u884C<code>model.eval()</code> <code>torch.no_grad()</code>\u64CD\u4F5C\uFF0C\u4E3B\u8981\u662F\u56FA\u5B9ABN\u5C42\u548Cdropout\u5C42\uFF0C\u4E0D\u9700\u8981\u8FDB\u884C\u53CD\u5411\u4F20\u64AD<code>loss.backward()</code>\uFF0C\u4F18\u5316\u5668\u4E5F\u4E0D\u9700\u8981\u66F4\u65B0<code>optimizer.step()</code></p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">,</span> model<span class="token punctuation">,</span> loss_fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    size <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">.</span>dataset<span class="token punctuation">)</span>
    num_batches <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">)</span>
    model<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    test_loss<span class="token punctuation">,</span> correct <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    <span class="token keyword">with</span> torch<span class="token punctuation">.</span>no_grad<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> X<span class="token punctuation">,</span> y <span class="token keyword">in</span> dataloader<span class="token punctuation">:</span>
            X<span class="token punctuation">,</span> y <span class="token operator">=</span> X<span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span>
            pred <span class="token operator">=</span> model<span class="token punctuation">(</span>X<span class="token punctuation">)</span>
            test_loss <span class="token operator">+=</span> loss_fn<span class="token punctuation">(</span>pred<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">.</span>item<span class="token punctuation">(</span><span class="token punctuation">)</span>
            correct <span class="token operator">+=</span> <span class="token punctuation">(</span>pred<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> y<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>torch<span class="token punctuation">.</span><span class="token builtin">float</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>item<span class="token punctuation">(</span><span class="token punctuation">)</span>
    test_loss <span class="token operator">/=</span> num_batches
    correct <span class="token operator">/=</span> size
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Test Error: \\n Accuracy: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">*</span>correct<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token format-spec">&gt;0.1f</span><span class="token punctuation">}</span></span><span class="token string">%, Avg loss: </span><span class="token interpolation"><span class="token punctuation">{</span>test_loss<span class="token punctuation">:</span><span class="token format-spec">&gt;8f</span><span class="token punctuation">}</span></span><span class="token string"> \\n&quot;</span></span><span class="token punctuation">)</span>
</code></pre></div><blockquote><p><code>model.eval()</code>\u4F1A</p></blockquote><h1 id="\u6A21\u578B\u4FDD\u5B58\u4E0E\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u4FDD\u5B58\u4E0E\u52A0\u8F7D" aria-hidden="true">#</a> \u6A21\u578B\u4FDD\u5B58\u4E0E\u52A0\u8F7D</h1><p>\u5B8C\u6210\u6A21\u578B\u8BAD\u7EC3\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u4FDD\u5B58\u8BAD\u7EC3\u5B8C\u6210\u7684\u6A21\u578B\uFF0C\u8FD9\u91CC\u63A8\u8350\u63D0\u4F9B<code>model.state_dict()</code>\u4FDD\u5B58\u6A21\u578B\u7684\u53C2\u6570\uFF0C\u800C\u4E0D\u662F\u6574\u4E2A\u6A21\u578B</p><div class="language-python ext-py"><pre class="language-python"><code>torch<span class="token punctuation">.</span>save<span class="token punctuation">(</span>model<span class="token punctuation">.</span>state_dict<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;model.pth&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u52A0\u8F7D\u521A\u521A\u4FDD\u5B58\u5B8C\u6210\u7684\u6A21\u578B\uFF0C\u6211\u4EEC\u5148\u8981\u52A0\u8F7D\u7F51\u7EDC\u7ED3\u6784\uFF0C\u7136\u540E\u518D\u8BFB\u53D6\u7F51\u7EDC\u53C2\u6570<code>torch.load(&quot;model.pth&quot;)</code>\uFF0C\u5E76\u52A0\u8F7D\u5230\u7F51\u7EDC\u4E2D<code>model.load_state_dict</code></p><div class="language-python ext-py"><pre class="language-python"><code>model <span class="token operator">=</span> MyModel<span class="token punctuation">(</span><span class="token punctuation">)</span>
model<span class="token punctuation">.</span>load_state_dict<span class="token punctuation">(</span>torch<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;model.pth&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div>`,32);function p(o,e){return t}var u=a(s,[["render",p]]);export{u as default};
