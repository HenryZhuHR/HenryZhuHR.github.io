import{_ as e,o as r,c as o,a as p}from"./app.7c14aff8.js";const t={},l=p('<p>\u76EE\u6807\u8BC6\u522B\u7B97\u6CD5 \u5B9E\u4F8B\u5206\u5272 \u8F66\u9053\u7EBF\u68C0\u6D4B loss \u6807\u6CE8\u6846 \u6807\u6CE8\u7684\u4E1C\u897F</p><p>\u6559\u5B66\u7528\u5C0F\u8F66 \u4E3A\u4EC0\u4E48\u8FD9\u4E9B\u7B97\u6CD5 \u8FD9\u4E9B\u7B97\u6CD5\u5206\u522B\u7684\u4F5C\u7528</p><p>\u6A21\u578B\u7684\u8BC4\u4EF7\u6307\u6807</p><p>LRU \u7B97\u6CD5 \u4E3A\u4EC0\u4E48\u521D\u59CB\u5316\u5217\u8868 \u5FEB \u666E\u901A\u7684\u6784\u9020\u51FD\u6570</p><p>std::move \u5E95\u5C42\u5B9E\u73B0</p><p>\u73B0\u4EE3 CPU \u5206\u652F\u9884\u6D4B</p><p>\u8FDB\u7A0B\u548C\u7EBF\u7A0B\u7684\u533A\u522B\uFF1A</p><ol><li>\u8FDB\u7A0B\u662F\u8D44\u6E90\u5206\u914D\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u7EBF\u7A0B\u662F CPU \u8C03\u5EA6\u7684\u6700\u5C0F\u5355\u4F4D</li><li>\u8FDB\u7A0B\u6709\u81EA\u5DF1\u7684\u72EC\u7ACB\u5730\u5740\u7A7A\u95F4\uFF0C\u7EBF\u7A0B\u5171\u4EAB\u6240\u5C5E\u8FDB\u7A0B\u7684\u5730\u5740\u7A7A\u95F4</li><li>\u8FDB\u7A0B\u5207\u6362\u5F00\u9500\u5927\uFF0C\u7EBF\u7A0B\u5207\u6362\u5F00\u9500\u5C0F\uFF08\u5F00\u9500\u6307\u7684\u662F\u5207\u6362\u65F6\u9700\u8981\u4FDD\u5B58\u7684\u4E0A\u4E0B\u6587\u4FE1\u606F\u3001\u5BC4\u5B58\u5668\u7B49\uFF09</li><li>\u8FDB\u7A0B\u95F4\u901A\u4FE1\u9700\u8981\u501F\u52A9\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u7EBF\u7A0B\u95F4\u901A\u4FE1\u53EF\u4EE5\u76F4\u63A5\u8BFB\u5199\u8FDB\u7A0B\u6570\u636E\u6BB5\uFF08\u9700\u8981\u52A0\u9501\uFF09</li></ol><p>\u8FDB\u7A0B\u548C\u7EBF\u7A0B\u7684\u6839\u672C\u533A\u522B\u5728\u4E8E\u9694\u79BB\u6027\uFF0C\u4E92\u4E0D\u4FE1\u4EFB\u7684\u591A\u4E2A\u4EFB\u52A1\u5E94\u5F53\u653E\u5230\u591A\u4E2A\u8FDB\u7A0B\u4E2D\u5B9E\u73B0\u5F3A\u9694\u79BB\u3002\u4F46\u8FD9\u6837\u4F1A\u5BF9\u6027\u80FD\u5E26\u6765\u6311\u6218\uFF0C\u6240\u4EE5\u524D\u6CBF\u7684\u7814\u7A76\u5728\u63A2\u7D22\u9AD8\u6548\u7684\u3001\u7EC6\u7C92\u5EA6\u7684\u8FDB\u7A0B\u95F4\u9694\u79BB\u6280\u672F\uFF0C\u6BD4\u5982\u8FD9\u4E2A\u8BBA\u6587 <a href="https://www.usenix.org/conference/atc20/presentation/ren" target="_blank" rel="noopener noreferrer">usenix.org/conference/a</a></p><p>\u8FDB\u7A0B\u95F4\u901A\u4FE1\uFF1A</p><ol><li>\u7BA1\u9053\u3002\u533F\u540D\u7BA1\u9053\u53EA\u80FD\u7528\u4E8E\u7236\u5B50\u8FDB\u7A0B\u6216\u8005\u5144\u5F1F\u8FDB\u7A0B\u95F4\u901A\u4FE1\uFF0C\u6709\u540D\u7BA1\u9053\u53EF\u4EE5\u7528\u4E8E\u4EFB\u610F\u8FDB\u7A0B\u95F4\u901A\u4FE1</li><li>\u6D88\u606F\u961F\u5217\u3002\u662F\u4E00\u4E2A\u94FE\u8868\uFF0C\u5B58\u653E\u5728<strong>\u5185\u6838</strong>\u4E2D\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u4EFB\u610F\u8FDB\u7A0B\u95F4\u901A\u4FE1\uFF1B\u4F46\u662F\u6D88\u606F\u961F\u5217\u7684\u6D88\u606F\u5FC5\u987B\u662F\u5B9A\u957F\u7684\uFF1B\u6D88\u606F\u961F\u5217\u7684\u8BFB\u5199\u662F\u539F\u5B50\u64CD\u4F5C\uFF0C\u4E0D\u9700\u8981\u52A0\u9501\uFF1B\u901A\u4FE1\u4E0D\u53CA\u65F6\u3001\u6709\u5927\u5C0F\u9650\u5236\uFF1B\u5B58\u5728\u7528\u6237\u6001\u548C\u5185\u6838\u6001\u7684\u6570\u636E\u62F7\u8D1D</li><li>\u5171\u4EAB\u5185\u5B58\u3002\u76F8\u8F83\u4E8E\u865A\u62DF\u5730\u5740\uFF0C\u5171\u4EAB\u5185\u5B58\u7684\u5730\u5740\u662F\u7269\u7406\u5730\u5740\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u6570\u636E\u62F7\u8D1D\uFF0C\u6027\u80FD\u66F4\u597D\uFF1B\u4F46\u662F\u9700\u8981\u52A0\u9501\uFF0C\u56E0\u4E3A\u591A\u4E2A\u8FDB\u7A0B\u90FD\u53EF\u4EE5\u8BBF\u95EE\u5171\u4EAB\u5185\u5B58</li><li>\u4FE1\u53F7\u91CF\u3002\u7528\u4E8E\u8FDB\u7A0B\u95F4\u4E92\u65A5\u548C\u540C\u6B65\uFF0C\u53EF\u4EE5\u7528\u4E8E\u8FDB\u7A0B\u95F4\u901A\u4FE1\u3002\u662F\u4E00\u4E2A\u6574\u578B\u8BA1\u6570\u5668</li><li>\u4FE1\u53F7\u3002\u5F02\u5E38\u60C5\u51B5\u4E0B\u7684\u5DE5\u4F5C\u6A21\u5F0F\uFF0C\u6BD4\u5982\u8FDB\u7A0B\u7EC8\u6B62\u3001\u8FDB\u7A0B\u4E2D\u65AD\u3001\u8FDB\u7A0B\u9000\u51FA\u3001\u8FDB\u7A0B\u6302\u8D77\u7B49</li><li>socket\u3002\u7528\u4E8E\u7F51\u7EDC\u901A\u4FE1\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E\u8FDB\u7A0B\u95F4\u901A\u4FE1</li></ol><p>c++\u7C7B\u7684\u5BF9\u8C61\u5927\u5C0F\u7531\u4EC0\u4E48\u51B3\u5B9A A, B\u7C7B\u90FD\u6709\u865A\u51FD\u6570, C\u7EE7\u627FA\u548CB, C\u7684\u5927\u5C0F, C\u6709\u51E0\u4E2A\u865A\u6307\u9488 \u6761\u4EF6\u53D8\u91CF\u4F60\u77E5\u9053\u662F\u5E72\u561B\u7684\u5417 \u7EBF\u7A0B\u6C60 redis\u6709\u54EA\u51E0\u79CD\u6570\u636E\u7ED3\u6784\uFF0C SDS\uFF0C\u54C8\u5E0C\u8868\uFF0C \u8DF3\u8868\uFF0C \u94FE\u8868\u7B49\u7B49 STL\u4E2D\u7684\u4F18\u5148\u961F\u5217\u7684\u5B9E\u73B0 \u6784\u9020\u51FD\u6570\u548C\u6790\u6784\u51FD\u6570\u53EF\u4EE5\u662F\u865A\u51FD\u6570\u5417 \u6784\u9020\u51FD\u6570\u91CC\u9762\u53EF\u4EE5\u8C03\u865A\u51FD\u6570\u5417</p><p>\u81EA\u6211\u4ECB\u7ECD \u9762\u8BD5\u5B98\u4ECB\u7ECD\u516C\u53F8\uFF0C \u8FD8\u6709\u90E8\u95E8\u662F\u5E72\u5565\u7684\uFF0C \u95EE\u6211\u81EA\u8EAB\u610F\u613F\u548C\u5C97\u4F4D\u5339\u914D\u7A0B\u5EA6\u611F\u89C9\u600E\u4E48\u6837 \u591A\u7EBF\u7A0B\uFF0C \u5F00\u4E00\u4E2A\u7EBF\u7A0B\uFF0C \u5728\u7EBF\u7A0B\u5BF9\u8C61\u88AB\u9500\u6BC1\u524D\uFF0C \u9700\u8981\u505A\u4EC0\u4E48 \u591A\u7EBF\u7A0B \u5BF9\u6570\u636E\u4EA7\u751F\u7ADE\u4E89\uFF0C \u6709\u4EC0\u4E48\u54EA\u4E9B\u65B9\u6CD5\u6765\u5904\u7406 \u6B7B\u9501\uFF0C \u53D1\u751F\u7684\u4F8B\u5B50\uFF0C \u4EA7\u751F\u7684\u539F\u56E0 \u83B7\u53D6\u4E8C\u4E2A\u8D44\u6E90x, y, \u6709\u6CA1\u6709\u4E00\u79CD\u65B9\u6CD5\uFF0C \u4E00\u4E2A\u4E00\u4E2A\u83B7\u53D6\u8D44\u6E90\uFF0C \u4F46\u662F\u4E0D\u4F1A\u6B7B\u9501 \u4F60\u4E86\u89E3\u8BFB\u5199\u9501\u5417 \u6709\u4E00\u4EFB\u52A1\uFF0C\u8F93\u5165\u9700\u8981\u7ECF\u8FC7A\uFF0C B, C\u4E09\u9053\u5DE5\u5E8F\uFF0C\u5982\u4F55\u8BBE\u8BA1\u8FD9\u4E09\u4E2A\u7EBF\u7A0B\uFF0C \u6570\u636E\u4E4B\u95F4\u662F\u600E\u4E48\u4F20\u9012\u7684 \u4F60\u4E86\u89E3\u4EC0\u4E48\u662F\u7EBF\u7A0B\u6C60\u5417 \u8BBE\u8BA1\u6A21\u5F0F\uFF0C \u5355\u4F8B\u6A21\u5F0F\uFF0C \u6709\u4E24\u79CD\uFF0C \u4F60\u8BA4\u4E3A\u4E24\u79CD\u6709\u4EC0\u4E48\u533A\u522B\uFF1F \u54EA\u4E2A\u662F\u7EBF\u7A0B\u5B89\u5168\uFF0C \u54EA\u4E2A\u662F\u7EBF\u7A0B\u4E0D\u5B89\u5168\uFF0C \u4E3A\u4EC0\u4E48 \u8BBE\u8BA1\u6A21\u5F0F\uFF0C \u4F60\u4E86\u89E3\u4F9D\u8D56\u5012\u7F6E\u539F\u5219\u5417\uFF0C \u4E3E\u4E00\u4E2A\u4F8B\u5B50 \u5806\uFF0C \u5806\u4E3A\u4EC0\u4E48\u80FD\u7528\u6570\u7EC4\u8868\u793A \u9759\u6001\u591A\u6001\uFF0C \u51FD\u6570\u91CD\u8F7D\uFF0C \u4F60\u77E5\u9053\u539F\u7406\u5417\uFF0C \u7F16\u8BD1\u5668\u662F\u5982\u4F55\u8BC6\u522B\u51FA\u4E24\u4E2A\u51FD\u6570\u662F\u4E0D\u540C\u7684 \u5427\u591A\u4E2A\u91CD\u8F7D\u7684\u51FD\u6570\u7F16\u5199\u5230\u52A8\u6001\u5E93\u4E2D\uFF0C \u7F16\u8BD1\u5668\u662F\u5982\u4F55\u5224\u65AD\u4E24\u4E2A\u51FD\u6570 \u4F60\u4E86\u89E3extern &quot;C&quot;\u7684\u7528\u6CD5\u5417\uFF1F \u5728C\u8BED\u8A00\u4E2D\u8C03\u53D6Cpp\u7684\u4EE3\u7801\uFF0C \u5982\u679C\u6CA1\u6709extern &quot;C&quot;\u4F1A\u62A5\u94FE\u63A5\u5668\u627E\u4E0D\u5230\u7684\u9519\u8BEF\uFF0C \u52A0\u4E0A\u540E\uFF0C \u5C31\u77E5\u9053\u4E86\uFF0C \u4F60\u77E5\u9053\u4E3A\u4EC0\u4E48\u5417 map\uFF0C \u6307\u5B9A\u4E00\u4E2Akey\uFF0C \u6211\u9700\u8981\u7528for\u5220\u6389\u8FD9\u4E2Akey\uFF0C\u9700\u8981\u6CE8\u610F\u4EC0\u4E48 std::move \u662F\u5E72\u561B\u7684 \u5B8C\u7F8E\u8F6C\u53D1\u662F\u5E72\u5565\u7684 \u4E09\u4E2A\u7C7BA, B, C, B\u7EE7\u627FA\uFF0C C\u7EE7\u627FB\uFF0C \u4E00\u4E2AC\u7684\u5BF9\u8C61\uFF0C \u4ED6\u7684\u6784\u9020\u987A\u5E8F\uFF0C \u548C\u6790\u6784\u987A\u5E8F \u4EC0\u4E48\u65F6\u5019\u5427\u7C7B\u7684\u6790\u6784\u51FD\u6570\u5199\u6210\u865A\u51FD\u6570\uFF0C \u4E3A\u4EC0\u4E48\uFF0C \u54EA\u5757\u5185\u5B58\u4F1A\u6CC4\u9732\uFF1F \u6211\uFF1A \u5B50\u7C7B\u5BF9\u8C61\u7684\u4F1A\u6CC4\u9732\uFF0C \u9762\u8BD5\u5B98\uFF1A\u786E\u5B9A\u5417\uFF1F \u4ED6\u8BF4\u662F\u57FA\u7C7B\u7684\u5185\u5B58\u4F1A\u6CC4\u9732\u3002 \u52A8\u6001\u548C\u9759\u6001\u5E93\uFF0C \u4F18\u7F3A\u70B9 \u7B97\u6CD5\u9898\uFF0C \u5C9B\u5C7F\u6570\u91CF\uFF08\u5199\u4E86bfs\u548Cdfs\uFF09</p><p>\u6790\u6784\u51FD\u6570\u4E0D\u4E3A\u865A\uFF0C\u591A\u6001\u65F6\u4E0D\u662F\u5B50\u7C7B\u5BF9\u8C61\u4F1A\u5185\u5B58\u6CC4\u9732\u5417[\u53EF\u601C] <a href="https://www.zhihu.com/question/45140579" target="_blank" rel="noopener noreferrer">\u4E0D\u7528\u865A\u6790\u6784\u51FD\u6570\u4E5F\u4E0D\u4F1A\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\u7684\u539F\u56E0\u662F\u4EC0\u4E48\uFF1F - \u77E5\u4E4E</a></p><p>design_pattern</p><p>\u54C8\u5E0C\u8868</p><p>\u5185\u5B58\u6CC4\u9732\u548C\u5185\u5B58\u68C0\u6D4B coredump</p>',17),n=[l];function i(s,a){return r(),o("div",null,n)}var _=e(t,[["render",i],["__file","resume.html.vue"]]);export{_ as default};
