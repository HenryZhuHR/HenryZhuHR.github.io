import{b as a}from"./app.cdc06c7c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},t=a('<h1 id="learning-transferable-visual-models-from-natural-language-supervision" tabindex="-1"><a class="header-anchor" href="#learning-transferable-visual-models-from-natural-language-supervision" aria-hidden="true">#</a> Learning Transferable Visual Models From Natural Language Supervision</h1><p>the zero-shot transfer performance of CLIP</p><h2 id="\u6587\u7AE0\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6587\u7AE0\u6982\u8FF0" aria-hidden="true">#</a> \u6587\u7AE0\u6982\u8FF0</h2><h3 id="abstract" tabindex="-1"><a class="header-anchor" href="#abstract" aria-hidden="true">#</a> Abstract</h3><p>Learning directly from raw text about images is a <strong>promising alternative</strong> which leverages a much broader source of supervision.\u3001 \u76F4\u63A5\u4ECE\u539F\u59CB\u6587\u672C\u4E2D\u5B66\u4E60\u56FE\u50CF\u662F\u4E00\u4E2A<strong>\u6709\u524D\u9014\u7684\u66FF\u4EE3\u65B9\u6848</strong>\uFF0C\u5B83\u5229\u7528\u4E86\u66F4\u5E7F\u6CDB\u7684\u76D1\u7763\u6765\u6E90\u3002</p><p>For instance, we match the accuracy of the original ResNet-50 on ImageNet zero-shot without needing to use any of the 1.28 million training examples it was trained on. \u4F8B\u5982\uFF0C\u6211\u4EEC\u5728ImageNet\u96F6\u6837\u672C\u4E0A\u5339\u914D\u539F\u59CBResNet-50\u7684\u51C6\u786E\u6027\uFF0C\u800C\u65E0\u9700\u4F7F\u7528\u5B83\u6240\u8BAD\u7EC3\u7684128\u4E07\u4E2A\u8BAD\u7EC3\u793A\u4F8B\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\u3002</p><h3 id="_1-introduction-and-motivating-work" tabindex="-1"><a class="header-anchor" href="#_1-introduction-and-motivating-work" aria-hidden="true">#</a> 1. Introduction and Motivating Work</h3><p><strong>Task-agnostic objectives</strong> such as autoregressive and masked language modeling have scaled across many orders of magnitude in compute, model capacity, and data, steadily improving capabilities. <strong>\u4E0E\u4EFB\u52A1\u65E0\u5173\u7684\u76EE\u6807</strong>\uFF0C\u5982\u81EA\u56DE\u5F52\u548C\u63A9\u7801\u8BED\u8A00\u5EFA\u6A21\uFF0C\u5728\u8BA1\u7B97\u3001\u6A21\u578B\u5BB9\u91CF\u548C\u6570\u636E\u65B9\u9762\u5DF2\u7ECF\u6269\u5C55\u4E86\u8BB8\u591A\u6570\u91CF\u7EA7\uFF0C\u5E76\u4E0D\u65AD\u63D0\u9AD8\u80FD\u529B\u3002</p><p>However, in other \uFB01elds such as computer vision it is still standard practice to pre-train models on crowd-labeled datasets such as ImageNet (Deng et al., 2009). <span style="background:#d3f8b6;">Could scalable pre-training methods which learn directly from web text</span> result in a similar breakthrough in computer vision? \u7136\u800C\uFF0C\u5728\u8BA1\u7B97\u673A\u89C6\u89C9\u7B49\u5176\u4ED6\u9886\u57DF\uFF0C\u4ECD\u7136\u901A\u5E38\u4F7F\u7528\u50CFImageNet\uFF08Deng et al.\uFF0C2009\uFF09\u8FD9\u6837\u7684\u4F17\u5305\u6807\u8BB0\u6570\u636E\u96C6\u5BF9\u6A21\u578B\u8FDB\u884C\u9884\u8BAD\u7EC3\u3002<span style="background:#d3f8b6;">\u80FD\u5426\u4ECE\u7F51\u7EDC\u6587\u672C\u76F4\u63A5\u5B66\u4E60\u7684\u53EF\u6269\u5C55\u9884\u8BAD\u7EC3\u65B9\u6CD5</span>\u4F1A\u5BFC\u81F4\u8BA1\u7B97\u673A\u89C6\u89C9\u65B9\u9762\u7C7B\u4F3C\u7684\u7A81\u7834\uFF1F</p><p>Prior work is encouraging. \u5148\u524D\u7684\u5DE5\u4F5C\u662F\u9F13\u821E\u4EBA\u5FC3\u7684\u3002</p><p>This line of work represents \u8FD9\u4E00\u7CFB\u5217\u5DE5\u4F5C\u8868\u660E\u4E86</p><p>Both approaches also use static softmax classi\uFB01ers to perform prediction and lack a mechanism for dynamic outputs. \u8FD9\u4E24\u79CD\u65B9\u6CD5\u8FD8\u4F7F\u7528\u9759\u6001softmax\u5206\u7C7B\u5668\u6765\u6267\u884C\u9884\u6D4B\uFF0C\u5E76\u4E14\u7F3A\u4E4F\u7528\u4E8E\u52A8\u6001\u8F93\u51FA\u7684\u673A\u5236\u3002 This severely curtails their \uFB02exibility and limits their \u201Czero-shot\u201D capabilities. \u8FD9\u4E25\u91CD\u9650\u5236\u4E86\u4ED6\u4EEC\u7684\u53EF\u8BFB\u6027\uFF0C\u5E76\u9650\u5236\u4E86\u4ED6\u4EEC\u7684\u201Czero-shot\u201D\u80FD\u529B\u3002</p><p>the scalability of \u53EF\u6269\u5C55\u6027</p><p>it can be competitive with prior task-specific supervised models. \u5B83\u53EF\u4EE5\u4E0E\u5148\u524D\u7684\u7279\u5B9A\u4E8E\u4EFB\u52A1\u7684\u76D1\u7763\u6A21\u578B\u76F8\u7ADE\u4E89\u3002</p><p>We also confirm these findings with linear-probe representation learning analysis and show that CLIP outperforms the best publicly available ImageNet model while also being more computationally efficient. \u6211\u4EEC\u8FD8\u901A\u8FC7\u7EBF\u6027\u63A2\u9488\u8868\u793A\u5B66\u4E60\u5206\u6790\u8BC1\u5B9E\u4E86\u8FD9\u4E9B\u53D1\u73B0\uFF0C\u5E76\u8868\u660ECLIP\u4F18\u4E8E\u6700\u4F73\u516C\u5F00\u53EF\u7528\u7684ImageNet\u6A21\u578B\uFF0C\u540C\u65F6\u8BA1\u7B97\u6548\u7387\u66F4\u9AD8\u3002</p><p>We <span style="background:#d3f8b6;">additionally</span> find that zero-shot CLIP models are much more robust than equivalent accuracy supervised ImageNet models which suggests that zero-shot evaluation of task-agnostic models is much more representative of a model\u2019s capability. \u6211\u4EEC<span style="background:#d3f8b6;">\u8FD8</span>\u53D1\u73B0\uFF0C\u96F6\u6837\u672CCLIP\u6A21\u578B\u6BD4\u540C\u7B49\u7CBE\u5EA6\u76D1\u7763\u7684ImageNet\u6A21\u578B\u66F4\u7A33\u5065\uFF0C\u8FD9\u8868\u660E\u4EFB\u52A1\u8BA4\u77E5\u6A21\u578B\u7684\u96F6\u6837\u672C\u8BC4\u4F30\u66F4\u80FD\u4EE3\u8868\u6A21\u578B\u7684\u80FD\u529B\u3002</p><h3 id="_2-approach" tabindex="-1"><a class="header-anchor" href="#_2-approach" aria-hidden="true">#</a> 2. Approach</h3><h4 id="_2-1-natural-language-supervision" tabindex="-1"><a class="header-anchor" href="#_2-1-natural-language-supervision" aria-hidden="true">#</a> 2.1. Natural Language Supervision</h4><h4 id="_2-3-selecting-an-efficient-pre-training-method" tabindex="-1"><a class="header-anchor" href="#_2-3-selecting-an-efficient-pre-training-method" aria-hidden="true">#</a> 2.3. Selecting an Ef\uFB01cient Pre-Training Method</h4><p>State-of-the-art computer vision systems use very large amounts of compute. \u6700\u5148\u8FDB\u7684\u8BA1\u7B97\u673A\u89C6\u89C9\u7CFB\u7EDF\u4F7F\u7528\u5927\u91CF\u7684\u8BA1\u7B97\u8D44\u6E90\u3002</p><p>Mahajan et al. (2018 Exploring the limits of weakly supervised pretraining) required 19 GPU years to train their ResNeXt101-32x48d and Xie et al. (2020 Self-training with noisy student improves imagenet classi\uFB01cation) required 33 TPUv3 core-years to train their Noisy Student Ef\uFB01cientNet-L2.</p><p>the task of learning an open set of visual concepts \u5B66\u4E60\u4E00\u7EC4\u5F00\u653E\u7684\u89C6\u89C9\u6982\u5FF5\u7684\u4EFB\u52A1</p><p>However, we encountered dif\uFB01culties ef\uFB01ciently scaling this method. \u7136\u800C\uFF0C\u6211\u4EEC\u9047\u5230\u4E86\u6709\u6548\u6269\u5C55\u6B64\u65B9\u6CD5\u7684\u56F0\u96BE\u3002</p><p>Both these approaches share a key similarity. They <span style="background:#d3f8b6;">try to predict the exact words of the text accompanying each image.</span> \u8FD9\u4E24\u79CD\u65B9\u6CD5\u6709\u4E00\u4E2A\u5173\u952E\u7684\u76F8\u4F3C\u4E4B\u5904\u3002\u4ED6\u4EEC<span style="background:#d3f8b6;">\u8BD5\u56FE\u9884\u6D4B\u6BCF\u4E2A\u56FE\u50CF\u6240\u9644\u6587\u672C\u7684\u786E\u5207\u5355\u8BCD</span>\u3002 This is a difficult task due to the wide variety of descriptions, comments, and related text that co-occur with images. Recent work in contrastive representation learning for images has found that contrastive objectives can learn better representations than their equivalent predictive objective (Tian et al., 2019). \u8FD9\u662F\u4E00\u9879\u8270\u5DE8\u7684\u4EFB\u52A1\uFF0C\u56E0\u4E3A\u4E0E\u56FE\u50CF\u540C\u65F6\u51FA\u73B0\u7684\u63CF\u8FF0\u3001\u8BC4\u8BBA\u548C\u76F8\u5173\u6587\u672C\u79CD\u7C7B\u7E41\u591A\u3002\u6700\u8FD1\u5728\u56FE\u50CF\u5BF9\u6BD4\u8868\u5F81\u5B66\u4E60\u65B9\u9762\u7684\u5DE5\u4F5C\u53D1\u73B0\uFF0C\u5BF9\u6BD4\u76EE\u6807\u53EF\u4EE5\u6BD4\u5176\u7B49\u6548\u7684\u9884\u6D4B\u76EE\u6807\u5B66\u4E60\u66F4\u597D\u7684\u8868\u5F81\uFF08Tian et al.\uFF0C2019\uFF09\u3002 Other work has found that although generative models of images can learn high quality image representations, they require over an order of magnitude more compute than contrastive models with the same performance (Chen et al., 2020a). \u5176\u4ED6\u5DE5\u4F5C\u53D1\u73B0\uFF0C\u5C3D\u7BA1\u56FE\u50CF\u7684\u751F\u6210\u6A21\u578B\u53EF\u4EE5\u5B66\u4E60\u9AD8\u8D28\u91CF\u7684\u56FE\u50CF\u8868\u793A\uFF0C\u4F46\u4E0E\u5177\u6709\u76F8\u540C\u6027\u80FD\u7684\u5BF9\u6BD4\u6A21\u578B\u76F8\u6BD4\uFF0C\u5B83\u4EEC\u9700\u8981\u8D85\u8FC7\u4E00\u4E2A\u6570\u91CF\u7EA7\u7684\u8BA1\u7B97\uFF08Chen et al.\uFF0C2020a\uFF09\u3002 Noting these findings, <span style="background:#d2cbff;">we explored training a system to solve the potentially easier proxy task of predicting only which text as a whole is paired with which image and not the exact words of that text.</span> \u6CE8\u610F\u5230\u8FD9\u4E9B\u53D1\u73B0\uFF0C<span style="background:#d2cbff;">\u6211\u4EEC\u63A2\u7D22\u8BAD\u7EC3\u4E00\u4E2A\u7CFB\u7EDF\u6765\u89E3\u51B3\u6F5C\u5728\u7684\u66F4\u5BB9\u6613\u7684\u4EE3\u7406\u4EFB\u52A1\uFF0C\u5373\u53EA\u9884\u6D4B\u6574\u4E2A\u6587\u672C\u4E0E\u54EA\u4E2A\u56FE\u50CF\u914D\u5BF9\uFF0C\u800C\u4E0D\u662F\u9884\u6D4B\u8BE5\u6587\u672C\u7684\u786E\u5207\u5355\u8BCD\u3002</span> Starting with the same bag-of-words encoding baseline, we swapped the predictive objective for a contrastive objective in Figure 2 and observed a further 4x efficiency improvement in the rate of zero-shot transfer to ImageNet. \u4ECE\u76F8\u540C\u7684bagof-words\u7F16\u7801\u57FA\u7EBF\u5F00\u59CB\uFF0C\u6211\u4EEC\u5C06\u56FE2\u4E2D\u7684\u9884\u6D4B\u76EE\u6807\u66FF\u6362\u4E3A\u5BF9\u6BD4\u76EE\u6807\uFF0C\u5E76\u89C2\u5BDF\u5230\u96F6\u6837\u672C\u8FC1\u79FB\u5B66\u4E60ImageNet\u7684\u901F\u5EA6\u8FDB\u4E00\u6B65\u63D0\u9AD8\u4E864\u500D\u3002</p><p>Given a batch of <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span> (image, text) pairs, CLIP is trained to predict which of the <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span> possible (image, text) pairings across a batch actually occurred. To do this, <span style="background:rgba(240, 107, 5, 0.2);">CLIP learns a multi-modal embedding space by jointly training an image encoder and text encoder</span> to maximize the cosine similarity of the image and text embeddings of the <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span> real pairs in the batch while minimizing the cosine similarity of the embeddings of the <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2212</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span> incorrect pairings. \u7ED9\u5B9A\u4E00\u6279 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span> \u4E2A\uFF08\u56FE\u50CF\u3001\u6587\u672C\uFF09\u5BF9\uFF0CCLIP\u88AB\u8BAD\u7EC3\u6765\u9884\u6D4B\u4E00\u6279\u4E2D <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span> \u4E2A\u53EF\u80FD\u7684\uFF08\u56FE\u50CF\u3001\u6587\u5B57\uFF09\u5BF9\u4E2D\u7684\u54EA\u4E00\u4E2A\u662F\u5B9E\u9645\u53D1\u751F\u7684\u3002\u4E3A\u6B64\uFF0C<span style="background:rgba(240, 107, 5, 0.2);">CLIP\u901A\u8FC7\u8054\u5408\u8BAD\u7EC3\u56FE\u50CF\u7F16\u7801\u5668\u548C\u6587\u672C\u7F16\u7801\u5668\u6765\u5B66\u4E60\u591A\u6A21\u6001\u5D4C\u5165\u7A7A\u95F4</span>\uFF0C\u4EE5\u6700\u5927\u5316\u6279\u5904\u7406\u4E2D <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span> \u4E2A\u5B9E\u5BF9\u7684\u56FE\u50CF\u548C\u6587\u672C\u5D4C\u5165\u7684\u4F59\u5F26\u76F8\u4F3C\u6027\uFF0C\u540C\u65F6\u6700\u5C0F\u5316 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2212</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span>\u4E2A\u4E0D\u6B63\u786E\u5BF9\u7684\u5D4C\u5165\u7684\u4F59\u5F26\u7C7B\u4F3C\u6027\u3002</p><h3 id="_3-experiments" tabindex="-1"><a class="header-anchor" href="#_3-experiments" aria-hidden="true">#</a> 3. Experiments</h3><h4 id="_3-1-zero-shot-transfer" tabindex="-1"><a class="header-anchor" href="#_3-1-zero-shot-transfer" aria-hidden="true">#</a> 3.1. Zero-Shot Transfer</h4><h5 id="_3-1-1-motivation" tabindex="-1"><a class="header-anchor" href="#_3-1-1-motivation" aria-hidden="true">#</a> 3.1.1. MOTIVATION</h5><p>In computer vision, zero-shot learning usually refers to the study of generalizing to unseen object categories in image classi\uFB01cation (Lampert et al., 2009 <em>Learning to detect unseen object classes by between-class attribute transfer.</em>).</p><h2 id="\u8BCD\u6C47" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u6C47" aria-hidden="true">#</a> \u8BCD\u6C47</h2>',30);function n(i,r){return t}var l=s(e,[["render",n]]);export{l as default};
