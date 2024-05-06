import{_ as e,o as n,c as o,a}from"./app.12e97507.js";var r="/assets/BASIC_FLOW_MO_simplified.53f6f30a.svg";const t={},s=a('<p>\u4E0D\u5F97\u4E0D\u8BF4\uFF0C</p><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><blockquote><p>\u4ECB\u7ECD\u5927\u591A\u6765\u81EA\u4E8E\u5B98\u65B9\u7FFB\u8BD1</p></blockquote><p><a href="https://www.intel.cn/content/www/cn/zh/developer/tools/openvino-toolkit/overview.html" target="_blank" rel="noopener noreferrer">OpenVINO\u2122 \u5DE5\u5177\u5957\u4EF6</a> \u662F\u4E00\u4E2A\u7528\u4E8E\u6DF1\u5EA6\u5B66\u4E60\u6A21\u578B\u4F18\u5316\u548C\u90E8\u7F72\u63A8\u7406\u7684\u5F00\u6E90\u5DE5\u5177\u5305 (<a href="https://github.com/openvinotoolkit/openvino" target="_blank" rel="noopener noreferrer">openvinotoolkit/openvino</a>)\uFF0C\u67E5\u770B<a href="https://docs.openvino.ai" target="_blank" rel="noopener noreferrer">\u6700\u65B0\u6587\u6863</a></p><p>\u5F00\u6E90\u7248\u672C\u5305\u62EC\u7EC4\u4EF6\uFF1A\u6A21\u578B\u4F18\u5316\u5668 <a href="https://docs.openvino.ai/2023.0/openvino_docs_MO_DG_Deep_Learning_Model_Optimizer_DevGuide.html" target="_blank" rel="noopener noreferrer">Model Optimizer</a>\u3001OpenVINO\u2122\u8FD0\u884C\u5E93 <a href="https://docs.openvino.ai/2023.0/openvino_docs_OV_UG_OV_Runtime_User_Guide.html" target="_blank" rel="noopener noreferrer">OpenVINO\u2122 Runtime</a>\u3001\u8BAD\u7EC3\u540E\u4F18\u5316\u5DE5\u5177 <a href="https://docs.openvino.ai/2023.0/pot_introduction.html" target="_blank" rel="noopener noreferrer">Post-Training Optimization Tool</a>\uFF0C\u4EE5\u53CA CPU\u3001GPU\u3001GNA\u3001\u591A\u8BBE\u5907\u548C\u5F02\u6784\u63D2\u4EF6\u7528\u4E8E\u5728 Intel\xAE CPUs \u548C Intel\xAE Processor Graphics \u4E0A\u8FDB\u884C\u52A0\u901F</p><p>OpenVINO\u2122 \u8FD0\u884C\u5E93\u652F\u6301\u591A\u79CD\u786C\u4EF6\u8BBE\u5907\uFF0C\u5305\u62EC:</p><ul><li>\u300C<a href="https://github.com/openvinotoolkit/openvino/blob/master/src/plugins/intel_cpu" target="_blank" rel="noopener noreferrer"><strong>Intel CPU</strong></a>\u300D</li><li>\u300C<a href="https://github.com/openvinotoolkit/openvino_contrib/tree/master/modules/arm_plugin" target="_blank" rel="noopener noreferrer"><strong>ARM CPU</strong></a>\u300D: Raspberry Pi\u2122 4 Model B, Apple\xAE Mac mini with M1 chip, NVIDIA\xAE Jetson Nano\u2122, Android\u2122 devices</li><li>\u300C<a href="https://github.com/openvinotoolkit/openvino/blob/master/src/plugins/intel_gpu" target="_blank" rel="noopener noreferrer"><strong>Intel GPU</strong></a>\u300D</li><li>\u300C<a href="https://github.com/openvinotoolkit/openvino/blob/master/src/plugins/intel_gna" target="_blank" rel="noopener noreferrer"><strong>Intel GNA</strong></a>\u300D</li></ul><blockquote><p>\u8BB2\u9053\u7406\uFF0C\u652F\u6301 ARM GPU \u5C31\u6709\u70B9\u7EF7\u4E0D\u4F4F\u4E86\uFF0C\u770B\u5230\u652F\u6301 Apple Silicon \u5C31\u5F7B\u5E95\u7EF7\u4E0D\u4F4F\u4E86</p></blockquote><h2 id="openvino-\u5DE5\u4F5C\u6D41" tabindex="-1"><a class="header-anchor" href="#openvino-\u5DE5\u4F5C\u6D41" aria-hidden="true">#</a> OpenVINO \u5DE5\u4F5C\u6D41</h2><h3 id="\u6A21\u578B\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u51C6\u5907" aria-hidden="true">#</a> \u6A21\u578B\u51C6\u5907</h3><p>\u90E8\u7F72\u6DF1\u5EA6\u5B66\u4E60\u6A21\u578B\u7684\u7ECF\u5178\u5DE5\u4F5C\u6D41\u5982\u56FE</p><p><img src="'+r+`" alt="\u7ECF\u5178\u5DE5\u4F5C\u6D41"></p><p>\u5176\u4E2D OpenVINO \u4E2D\u95F4\u8868\u793A(Intermediate Representation, IR) \u662F\u4E00\u5BF9\u6A21\u578B\u7684\u63CF\u8FF0\u6587\u4EF6:</p><ul><li><code>.xml</code> - \u63CF\u8FF0\u7F51\u7EDC\u7ED3\u6784 (topology)\u3002</li><li><code>.bin</code> - \u5305\u542B\u4E8C\u8FDB\u5236\u7684\u6A21\u578B\u6743\u91CD\u3002</li></ul><p>Model Optimizer <code>mo</code> \u5C06\u652F\u6301\u7684\u6A21\u578B\u8F6C\u6362\u4E3A OpenVINO IR\uFF0C\u4EE5\u4FBF\u5728 OpenVINO \u63A8\u7406\u5F15\u64CE\u4E2D\u4F7F\u7528\uFF0C\u652F\u6301\u7684\u6A21\u578B:</p><ul><li>TensorFlow</li><li>TensorFlow Lite</li><li>PaddlePaddle</li><li>ONNX</li></ul><h3 id="\u6A21\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u6A21\u578B\u8F6C\u6362</h3><p>\u5BF9\u4E8E Pytorch \u6A21\u578B\uFF0C\u4F7F\u7528 <code>torch.onnx.export</code> \u5C06\u6A21\u578B\u8F6C\u6362\u4E3A ONNX \u683C\u5F0F</p><p>\u4F7F\u7528 <code>mo</code> \u5C06 ONNX \u6A21\u578B\u8F6C\u6362\u4E3A OpenVINO IR\uFF0C <code>mo</code> \u6709\u547D\u4EE4\u884C\u548Cpyhon \u7684\u65B9\u5F0F\uFF0C\u63A8\u8350 python \uFF0C\u53C2\u8003 <a href="https://docs.openvino.ai/2023.0/openvino_docs_MO_DG_prepare_model_convert_model_Converting_Model.html" target="_blank" rel="noopener noreferrer"><em>Specifying input_shape parameterle</em></a>\uFF0C\u5BF9\u4E8E\u652F\u6301\u7684\u5C42\u53C2\u8003 <a href="https://docs.openvino.ai/2023.0/openvino_resources_supported_operations_frontend.html" target="_blank" rel="noopener noreferrer"><em>Supported ONNX Layers</em></a></p><p>\u6253\u5370\u5E2E\u52A9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>from openvino.tools.mo <span class="token function">import</span> convert_model
ov_model <span class="token operator">=</span> convert_model<span class="token punctuation">(</span>help<span class="token operator">=</span>True<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F6C\u6362\u6A21\u578B</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> openvino<span class="token punctuation">.</span>tools<span class="token punctuation">.</span>mo <span class="token keyword">import</span> convert_model
INPUT_MODEL<span class="token operator">=</span><span class="token string">&quot;model.onnx&quot;</span>
ov_model <span class="token operator">=</span> convert_model<span class="token punctuation">(</span>
  INPUT_MODEL<span class="token punctuation">,</span> 
  input_shape<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6A21\u578B\u4F18\u5316\u548C\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u4F18\u5316\u548C\u538B\u7F29" aria-hidden="true">#</a> \u6A21\u578B\u4F18\u5316\u548C\u538B\u7F29</h3><h3 id="\u6A21\u578B\u63A8\u7406" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u63A8\u7406" aria-hidden="true">#</a> \u6A21\u578B\u63A8\u7406</h3><p>OpenVINO\u2122 \u8FD0\u884C\u65F6\u662F\u4E00\u7EC4\u5305\u542B C \u548C Python \u7ED1\u5B9A\u7684 C++ \u5E93\uFF0C\u63D0\u4F9B\u901A\u7528 API\uFF0C\u4EE5\u5728\u60A8\u9009\u62E9\u7684\u5E73\u53F0\u4E0A\u63D0\u4F9B\u63A8\u7406\u89E3\u51B3\u65B9\u6848\u3002</p><p>\u4F7F\u7528 OpenVINO \u8FD0\u884C\u65F6 API \u8BFB\u53D6\u4E2D\u95F4\u8868\u793A (IR)\u3001TensorFlow\u3001TensorFlow Lite\u3001ONNX \u6216 PaddlePaddle \u6A21\u578B\uFF0C\u5E76\u5728\u9996\u9009\u8BBE\u5907\u4E0A\u6267\u884C\u3002</p><p>OpenVINO\u2122 \u8FD0\u884C\u65F6\u4F7F\u7528\u63D2\u4EF6\u67B6\u6784\u3002\u5B83\u7684\u63D2\u4EF6\u662F\u8F6F\u4EF6\u7EC4\u4EF6\uFF0C\u53EF\u5B8C\u5168\u5B9E\u73B0\u5BF9\u7279\u5B9A\u82F1\u7279\u5C14\xAE \u786C\u4EF6\u8BBE\u5907\uFF08CPU\u3001GPU\u3001GNA \u7B49\uFF09\u8FDB\u884C\u63A8\u7406\u3002\u6BCF\u4E2A\u63D2\u4EF6\u90FD\u5B9E\u73B0\u7EDF\u4E00\u7684 API\uFF0C\u5E76\u63D0\u4F9B\u989D\u5916\u7684\u786C\u4EF6\u7279\u5B9A API\uFF0C\u7528\u4E8E\u914D\u7F6E\u8BBE\u5907\u6216\u5728 OpenVINO\u2122 \u8FD0\u884C\u65F6\u548C\u5E95\u5C42\u63D2\u4EF6\u540E\u7AEF\u4E4B\u95F4\u5B9E\u73B0 API \u4E92\u64CD\u4F5C\u6027\u3002</p>`,28),p=[s];function i(l,c){return n(),o("div",null,p)}var h=e(t,[["render",i],["__file","openvino.html.vue"]]);export{h as default};
