import{_ as s,o as a,c as n,a as t}from"./app.12e97507.js";const l={},p=t('<h1 id="\u673A\u5668\u5B66\u4E60\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u673A\u5668\u5B66\u4E60\u57FA\u7840" aria-hidden="true">#</a> \u673A\u5668\u5B66\u4E60\u57FA\u7840</h1><h2 id="\u673A\u5668\u5B66\u4E60\u6A21\u578B\u7684\u4E09\u5927\u6307\u6807-\u51C6\u786E\u7387\u3001\u7CBE\u786E\u7387\u3001\u53EC\u56DE\u7387" tabindex="-1"><a class="header-anchor" href="#\u673A\u5668\u5B66\u4E60\u6A21\u578B\u7684\u4E09\u5927\u6307\u6807-\u51C6\u786E\u7387\u3001\u7CBE\u786E\u7387\u3001\u53EC\u56DE\u7387" aria-hidden="true">#</a> \u673A\u5668\u5B66\u4E60\u6A21\u578B\u7684\u4E09\u5927\u6307\u6807\uFF1A\u51C6\u786E\u7387\u3001\u7CBE\u786E\u7387\u3001\u53EC\u56DE\u7387</h2><p>\u56DB\u4E2A\u91CD\u8981\u6307\u6807</p><ul><li>TP\uFF08True Positives)\uFF1A\u771F\u6B63\u4F8B\uFF0C\u9884\u6D4B\u4E3A\u6B63\u4F8B\u800C\u4E14\u5B9E\u9645\u4E0A\u4E5F\u662F\u6B63\u4F8B</li><li>FP\uFF08False Positives)\uFF1A\u5047\u6B63\u4F8B\uFF0C\u9884\u6D4B\u4E3A\u6B63\u4F8B\u7136\u800C\u5B9E\u9645\u4E0A\u5374\u662F\u8D1F\u4F8B</li><li>FN\uFF08false Negatives)\uFF1A\u5047\u8D1F\u4F8B\uFF0C\u9884\u6D4B\u4E3A\u8D1F\u4F8B\u7136\u800C\u5B9E\u9645\u4E0A\u5374\u662F\u6B63\u4F8B</li><li>TN\uFF08True Negatives)\uFF1A\u771F\u8D1F\u4F8B\uFF0C\u9884\u6D4B\u4E3A\u8D1F\u4F8B\u800C\u4E14\u5B9E\u9645\u4E0A\u4E5F\u662F\u8D1F\u4F8B</li></ul><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">\u9884\u6D4B\u4E3A\u6B63</th><th style="text-align:center;">\u9884\u6D4B\u4E3A\u8D1F</th></tr></thead><tbody><tr><td style="text-align:center;">\u5B9E\u9645\u4E3A\u6B63</td><td style="text-align:center;"><strong>TP</strong></td><td style="text-align:center;">FN</td></tr><tr><td style="text-align:center;">\u5B9E\u9645\u4E3A\u8D1F</td><td style="text-align:center;">FP</td><td style="text-align:center;"><strong>TN</strong></td></tr></tbody></table><ul><li>\u300C<strong>\u51C6\u786E\u7387</strong>\u300D\uFF1A\u300C<strong>\u9884\u6D4B\u6B63\u786E</strong>\u300D\u6837\u672C\u6570\u5360\u300C<strong>\u603B\u6837\u672C\u6570</strong>\u300D\u7684\u6BD4\u4F8B</li></ul><p><span class="katex-display"><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal">cc</span><span class="mord mathnormal">u</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">a</span><span class="mord mathnormal" style="margin-right:0.03588em;">cy</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.1297em;vertical-align:-0.7693em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">TP</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">TN</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">FP</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">FN</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">TP</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">TN</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.7693em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p><ul><li>\u300C<strong>\u7CBE\u786E\u7387</strong>\u300D\uFF1A\u9884\u6D4B\u4E3A\u6B63\u7684\u6837\u672C\u4E2D\uFF0C\u771F\u6B63\u4E3A\u6B63\u7684\u6837\u672C\u6570\u5360\u9884\u6D4B\u4E3A\u6B63\u7684\u6837\u672C\u6570\u7684\u6BD4\u4F8B</li></ul><p><span class="katex-display"><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mord mathnormal">rec</span><span class="mord mathnormal">i</span><span class="mord mathnormal">s</span><span class="mord mathnormal">i</span><span class="mord mathnormal">o</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.1297em;vertical-align:-0.7693em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">TP</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">FP</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">TP</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.7693em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p><p>\u7CBE\u786E\u5EA6\u4E5F\u53EB\u300C\u67E5\u51C6\u7387\u300D\uFF0C\u5173\u5FC3\u7684\u4E3B\u8981\u90E8\u5206\u662F\u300C\u9884\u6D4B\u4E3A\u6B63\u4F8B\u7684\u6837\u672C\u300D\uFF0C\u300C\u9884\u6D4B\u7684\u6B63\u6837\u672C\u4E2D\uFF0C\u6709\u591A\u5C11\u662F\u771F\u7684\u6B63\u786E\u7684\u6982\u7387\u300D</p><ul><li>\u300C<strong>\u53EC\u56DE\u7387</strong>\u300D\uFF1A\u771F\u6B63\u4E3A\u6B63\u7684\u6837\u672C\u4E2D\uFF0C\u9884\u6D4B\u4E3A\u6B63\u7684\u6837\u672C\u6570\u5360\u771F\u6B63\u4E3A\u6B63\u7684\u6837\u672C\u6570\u7684\u6BD4\u4F8B</li></ul><p><span class="katex-display"><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="mord mathnormal">ec</span><span class="mord mathnormal">a</span><span class="mord mathnormal" style="margin-right:0.01968em;">ll</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.1297em;vertical-align:-0.7693em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">TP</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">FN</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">TP</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.7693em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p><p>\u4E5F\u53EB\u300C\u67E5\u5168\u7387\u300D\uFF0C\u5173\u5FC3\u7684\u4E3B\u8981\u90E8\u5206\u662F\u300C\u771F\u6B63\u4E3A\u6B63\u7684\u6837\u672C\u300D\uFF0C\u300C\u5B9E\u9645\u7684\u6B63\u6837\u672C\u4E2D\u6709\u591A\u5C11\u627E\u5BF9\u4E86\u300D</p><ul><li>\u300C<strong>F1</strong>\u300D\uFF1A\u7CBE\u786E\u7387\u548C\u53EC\u56DE\u7387\u7684\u8C03\u548C\u5E73\u5747\u6570</li></ul><p>\u5E94\u7528\uFF1A</p><ul><li><strong>\u7CBE\u786E\u7387</strong>\u53EF\u4EE5\u7528\u4E8E\u5237\u8138\u8FD9\u79CD\u573A\u666F\uFF0C\u5B81\u53EF\u62D2\u7EDD\uFF0C\u4E5F\u4E0D\u80FD\u9519\u8BEF\u8BC6\u522B\u3002</li><li><strong>\u53EC\u56DE\u7387</strong>\u7528\u4E8E\u4FE1\u8D37\u3001\u5730\u9707\u9884\u6D4B\uFF0C\u66F4\u503E\u5411\u4E8E\u5B81\u613F\u591A\u9884\u6D4B\u4E00\u4E9B\u9519\u7684\u4E5F\u4E0D\u80FD\u6F0F\u68C0\u3002\u4E00\u5B9A\u8981\u53D1\u73B0\u574F\u4EBA\uFF0C\u9519\u6740\u4E00\u5343\uFF0C\u4E0D\u53EF\u653E\u8FC7\u4E00\u4E2A\u3002</li><li>\u7CBE\u786E\u7387\u548C\u53EC\u56DE\u7387\u5728\u5B9E\u9645\u4F7F\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u5BB9\u6613\u4EA7\u751F\u81EA\u76F8\u77DB\u76FE\uFF0C\u53EF\u4EE5\u9650\u5B9A\u4E00\u5B9A\u7684\u53EC\u56DE\u7387\u7684\u60C5\u51B5\u4E0B\u63D0\u9AD8\u7CBE\u786E\u7387\u3002</li></ul><h2 id="\u56DE\u5F52\u548C\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u56DE\u5F52\u548C\u5206\u7C7B" aria-hidden="true">#</a> \u56DE\u5F52\u548C\u5206\u7C7B</h2><p>\u300C<strong>\u56DE\u5F52</strong>\u300D\u548C\u300C<strong>\u5206\u7C7B</strong>\u300D\u90FD\u662F\u300C<strong>\u76D1\u7763\u5B66\u4E60</strong>\u300D\u7684\u4E00\u79CD\uFF0C\u533A\u522B\u5728\u4E8E\u8F93\u51FA\u7684\u7C7B\u578B\u4E0D\u540C\u3002</p><ul><li>\u300C<strong>\u5206\u7C7B</strong>\u300D\u8F93\u51FA\u7684\u662F\u300C<strong>\u7C7B\u522B</strong>\u300D\uFF0C\u300C<strong>\u56DE\u5F52</strong>\u300D\u8F93\u51FA\u7684\u662F\u300C<strong>\u6570\u503C</strong>\u300D</li><li>\u300C<strong>\u5206\u7C7B</strong>\u300D\u8F93\u51FA\u7684\u662F\u300C<strong>\u79BB\u6563\u7684</strong>\u300D\uFF0C\u300C<strong>\u56DE\u5F52</strong>\u300D\u8F93\u51FA\u7684\u662F\u300C<strong>\u8FDE\u7EED\u7684</strong>\u300D</li><li>\u300C<strong>\u5206\u7C7B</strong>\u300D\u8F93\u51FA\u7684\u662F\u300C<strong>\u5B9A\u6027\u7684</strong>\u300D\uFF0C\u300C<strong>\u56DE\u5F52</strong>\u300D\u8F93\u51FA\u7684\u662F\u300C<strong>\u5B9A\u91CF\u7684</strong>\u300D</li><li>\u300C<strong>\u5206\u7C7B</strong>\u300D\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u300C<strong>\u5BFB\u627E\u51B3\u7B56\u8FB9\u754C</strong>\u300D\uFF0C\u300C<strong>\u56DE\u5F52</strong>\u300D\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u300C<strong>\u627E\u5230\u6700\u4F18\u62DF\u5408</strong>\u300D</li><li>\u56DE\u5F52\u4E0E\u5206\u7C7B\u7684\u672C\u8D28\u533A\u522B\u5728\u4E8E\u300C<strong>\u8F93\u51FA\u7A7A\u95F4\u662F\u5426\u4E3A\u4E00\u4E2A\u5EA6\u91CF\u7A7A\u95F4</strong>\u300D\uFF0C\u56DE\u5F52\u95EE\u9898\u7684\u8F93\u51FA\u662F\u53EF\u5EA6\u91CF\u7684\uFF08\u771F\u5B9E\u503C\u548C\u9884\u6D4B\u503C\u4E4B\u95F4\u53EF\u4EE5\u8BA1\u7B97\u8DDD\u79BB\uFF0C\u4E5F\u5C31\u6709 MSE\uFF09</li><li>\u635F\u5931\u51FD\u6570\uFF08\u5EA6\u91CF\uFF09\u4E0D\u540C\uFF0C\u56DE\u5F52\u95EE\u9898\u4E00\u822C\u4F7F\u7528\u300C<strong>\u5747\u65B9\u8BEF\u5DEE</strong>\u300D\uFF0C\u5206\u7C7B\u95EE\u9898\u4E00\u822C\u4F7F\u7528\u300C<strong>\u4EA4\u53C9\u71B5</strong>\u300D</li><li>\u5206\u7C7B\uFF08\u9884\u6D4B\uFF09\uFF0C\u56DE\u5F52\uFF08\u62DF\u5408\uFF09</li></ul>',19),e=[p];function r(m,i){return a(),n("div",null,e)}var o=s(l,[["render",r],["__file","basic.html.vue"]]);export{o as default};
