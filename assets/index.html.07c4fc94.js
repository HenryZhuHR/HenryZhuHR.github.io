import{b as e}from"./app.cdc06c7c.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";var r="/HenryZhuHR.github.io/assets/ContentAuthoring_Vehicles-Modeling_wheel.9fd6b4ae.png",d="/HenryZhuHR.github.io/assets/ContentAuthoring_Vehicles-add_Armature-add.54669a90.png",c="/HenryZhuHR.github.io/assets/ContentAuthoring_Vehicles-add_Armature-rotationX.a442fa43.png",a="/HenryZhuHR.github.io/assets/ContentAuthoring_Vehicles-AddParentVertexGroup.2f1d5f63.png",t="/HenryZhuHR.github.io/assets/ContentAuthoring_Vehicles-importToUE.efc436a2.png";const i={},n=e('<p>CARLA\u5728\u84DD\u56FE\u5E93\u4E2D\u63D0\u4F9B\u4E86\u4E00\u5957\u5F00\u7BB1\u5373\u7528\u7684\u8F66\u8F86\u3002CARLA\u5141\u8BB8\u7528\u6237\u4F7F\u7528\u5B9A\u5236\u8F66\u8F86\u8FDB\u884C\u6269\u5C55\uFF0C\u4EE5\u83B7\u5F97\u6700\u5927\u7684\u53EF\u6269\u5C55\u6027\u3002</p><p>\u8BE6\u7EC6\u8F66\u8F86\u76843D\u5EFA\u6A21\u975E\u5E38\u590D\u6742\uFF0C\u9700\u8981\u76F8\u5F53\u7A0B\u5EA6\u7684\u6280\u80FD\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u8BF7\u8BFB\u8005\u53C2\u8003\u5173\u4E8E3D\u5EFA\u6A21\u7684\u66FF\u4EE3\u6587\u6863\u6765\u6E90\uFF0C\u56E0\u4E3A\u8FD9\u8D85\u51FA\u4E86\u672C\u6307\u5357\u7684\u8303\u56F4\u3002\u7136\u800C\uFF0C\u5728\u514D\u8D39\u548C\u4E13\u6709\u7684\u5728\u7EBF\u5B58\u50A8\u5E93\u4E2D\u90FD\u6709\u8BB8\u591A\u8F66\u8F86\u578B\u53F7\u6765\u6E90\u3002\u56E0\u6B64\uFF0C\u7528\u6237\u6709\u8BB8\u591A\u9009\u9879\u53EF\u4EE5\u7528\u6765\u521B\u5EFA\u7528\u4E8ECARLA\u7684\u5B9A\u5236\u8F66\u8F86\u3002 3D modelling of detailed vehicles is highly complex and requires a significant degree of skill. We therefore refer the reader to alternative sources of documentation on 3D modelling, since this is beyond the scope of this guide. There are, however, numerous sources of vehicle models in both free and proprietary online repositories. Hence the user has many options to turn to for creating custom vehicles for use in CARLA.</p><p>\u4E3ACARLA\u51C6\u5907\u5B9A\u5236\u8F66\u8F86\u7684\u5173\u952E\u56E0\u7D20\u5728\u4E8E\u64CD\u7EB5\u8F66\u8F86\u7535\u67A2\uFF0C\u7136\u540E\u5BFC\u5165\u865A\u5E7B\u53D1\u52A8\u673A\u3002\u5B89\u88C5\u548C\u8FDB\u53E3\u540E\uFF0C\u9700\u8981\u4E3A\u6C7D\u8F66\u548C\u8F66\u8F6E\u8BBE\u7F6E\u84DD\u56FE\u3002\u7136\u540E\u6D82\u62B9\u6750\u6599\u5E76\u6DFB\u52A0\u8F66\u8F86\u7684\u73BB\u7483\u90E8\u4EF6\u3002\u6211\u4EEC\u5C06\u5728\u4EE5\u4E0B\u6307\u5357\u4E2D\u4ECB\u7ECD\u8FD9\u4E9B\u6B65\u9AA4\u3002 The key factors in preparing a custom vehicle for CARLA lie in rigging the vehicle armature and then importing into the Unreal Engine. After rigging and importing, blueprints need to be set for the car and the wheels. Then apply materials and add the glass parts of the vehicle. We will cover these steps in the following guide.</p><h2 id="\u5EFA\u6A21" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u6A21" aria-hidden="true">#</a> \u5EFA\u6A21</h2><p>\u8F66\u8F86\u5E94\u8BE5\u670950,000 \u81F3 100,000\u4E2A\u9762\u3002\u6211\u4EEC\u5EFA\u8BAE\u5728\u5BFC\u51FA\u524D\u5BF9\u6A21\u578B\u8FDB\u884C\u4E09\u89D2\u6D4B\u91CF\uFF0C\u4F5C\u4E3A\u6700\u4F73\u5B9E\u8DF5\u3002CARLA\u8F66\u8F86\u7684\u5EFA\u6A21\u4F7F\u7528\u5B9E\u9645\u6C7D\u8F66\u7684\u5C3A\u5BF8\u548C\u89C4\u6A21\u4F5C\u4E3A\u53C2\u8003\u3002\u8BF7\u786E\u4FDD\u60A8\u4ED4\u7EC6\u5173\u6CE83D\u5E94\u7528\u7A0B\u5E8F\u7684\u5355\u5143\u3002\u6709\u4E9B\u4EE5\u5398\u7C73\u4E3A\u5355\u4F4D\u5DE5\u4F5C\uFF0C\u800C\u53E6\u4E00\u4E9B\u5219\u4EE5\u7C73\u4E3A\u5355\u4F4D\u5DE5\u4F5C\u3002</p><h3 id="\u547D\u540D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u89C4\u5219" aria-hidden="true">#</a> \u547D\u540D\u89C4\u5219</h3><p>\u4E3A\u4E86\u65B9\u4FBF\u548C\u4E00\u81F4\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u5C06\u8F66\u8F86\u5206\u4E3A\u4EE5\u4E0B\u90E8\u5206\uFF0C\u5E76\u76F8\u5E94\u5730\u547D\u540D\u3002\u7279\u5B9A\u4E8E\u73BB\u7483\u548C\u706F\u5149\u7684\u8BE6\u7EC6\u4FE1\u606F\u5C06\u5728\u540E\u9762\u7684\u90E8\u5206\u4E2D\u4ECB\u7ECD\uFF1A</p><ol><li><strong><code>Bodywork</code></strong>: \u8F66\u8F86\u7684\u91D1\u5C5E\u90E8\u5206\u3002\u8FD9\u79CD\u6750\u6599\u88AB\u66F4\u6539\u4E3A\u865A\u5E7B\u5F15\u64CE\u6750\u6599\u3002\u53EF\u4EE5\u6DFB\u52A0 Logo \u548C\u7EC6\u8282\uFF0C\u4E3A\u4E86\u53EF\u89C1\u6027\uFF0C\u5FC5\u987B\u4F7F\u7528\u865A\u5E7B\u5F15\u64CE\u7F16\u8F91\u5668\u4E2D\u7684alpha\u901A\u9053\u5C06\u5B83\u4EEC\u6D82\u6210\u4E0D\u540C\u7684\u989C\u8272\u3002</li><li><strong><code>Glass_Ext</code></strong>: \u5141\u8BB8\u4ECE\u8F66\u8F86\u5916\u90E8\u5230\u5185\u90E8\u53EF\u89C1\u7684\u73BB\u7483\u5C42</li><li><strong><code>Glass_Int</code></strong>: \u5141\u8BB8\u4ECE\u8F66\u8F86\u5185\u90E8\u5230\u5916\u90E8\u53EF\u89C1\u7684\u73BB\u7483\u5C42</li><li><strong><code>Lights</code></strong>: \u5927\u706F\u3001\u6307\u793A\u706F\u7B49</li><li><strong><code>LightGlass_Ext</code></strong>: \u5141\u8BB8\u4ECE\u5149\u7EBF\u7684\u5916\u90E8\u5230\u5185\u90E8\u53EF\u89C1\u7684\u73BB\u7483\u5C42</li><li><strong><code>LightGlass_Int</code></strong>: \u5141\u8BB8\u4ECE\u5149\u7EBF\u7684\u5185\u90E8\u5230\u5916\u90E8\u53EF\u89C1\u7684\u73BB\u7483\u5C42</li><li><strong><code>LicensePlate</code></strong>: \u8F66\u724C\u7531 29x12 cm \u7684\u77E9\u5F62\u5E73\u9762\u6784\u6210\u3002\u53EF\u4EE5\u4F7F\u7528\u7531 CARLA \u63D0\u4F9B\u7684 <a href="https://carla-assets.s3.eu-west-3.amazonaws.com/fbx/LicensePlate.rar" target="_blank" rel="noopener noreferrer"><code>.fbx</code></a> \u4EE5\u83B7\u5F97\u6700\u4F73\u6548\u679C\u3002\u7EB9\u7406\u5C06\u5728\u865A\u5E7B\u5F15\u64CE\u4E2D\u81EA\u52A8\u5206\u914D\u3002</li><li><strong><code>Interior</code></strong>: \u4EFB\u4F55\u5176\u4ED6\u4E0D\u7B26\u5408\u4E0A\u8FF0\u90E8\u5206\u7684\u7EC6\u8282\u90FD\u53EF\u4EE5\u8FDB\u5165 <code>Interior</code>\u3002</li></ol><ul><li>\u6750\u6599\u7684\u547D\u540D\u683C\u5F0F\u4E3A\xA0<code>M_CarPart_CarName</code> \uFF0C\u4F8B\u5982 <code>M_Bodywork_Mustang</code></li><li>\u7EB9\u7406\u7684\u547D\u540D\u683C\u5F0F\u4E3A\xA0<code>T_CarPart_CarName</code> \uFF0C\u4F8B\u5982 <code>T_Bodywork_Mustang</code> \u3002\u7EB9\u7406\u7684\u5C3A\u5BF8\u4E3A 2048x2048</li></ul><h2 id="\u4F7F\u7528\u9AA8\u9ABC\u7ED1\u5B9A\u8F66\u8F86-rigging-the-vehicle-using-an-armature" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u9AA8\u9ABC\u7ED1\u5B9A\u8F66\u8F86-rigging-the-vehicle-using-an-armature" aria-hidden="true">#</a> \u4F7F\u7528\u9AA8\u9ABC\u7ED1\u5B9A\u8F66\u8F86 Rigging the vehicle using an armature</h2><blockquote><p><strong>Rigging</strong>\u8BD1\u6210\u4E2D\u6587\u662F\u7D22\u5177\uFF0C\u5E94\u8BE5\u662F\u89D2\u8272\u7ED1\u5B9A\uFF0C <strong>Armature</strong>\xA0in blender.\xA0<strong>\u9AA8\u67B6</strong>\u7684\u57FA\u672C\u4F7F\u7528\u65B9\u5F0F</p></blockquote><p>\u4E3A\u4E86\u5728\u6A21\u62DF\u5668\u4E2D\u663E\u5F97\u771F\u5B9E\uFF0C\u6C7D\u8F66\u9700\u8981\u6709\u65CB\u8F6C\u7684\u8F66\u8F6E\uFF0C\u5176\u4E2D\u524D\u4E00\u5BF9\u8F66\u8F6E\u53EF\u4EE5\u968F\u7740\u8F6C\u5411\u8F93\u5165\u800C\u8F6C\u52A8\u3002\u56E0\u6B64\uFF0C\u4E3A\u4E86\u7ED9CARLA\u51C6\u5907\u4E00\u8F86\u8F66\uFF0C\u9700\u8981\u5728\u8F66\u4E0A\u5B89\u88C5\u4E00\u4E2A\u8854\u94C1\uFF0C\u4EE5\u786E\u5B9A\u8F66\u8F6E\u5E76\u5141\u8BB8\u5176\u8FD0\u52A8\u3002</p><p>\u57283D\u5EFA\u6A21\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5BFC\u5165\u6216\u5EFA\u6A21\u8F66\u8F86\u6A21\u578B\u7F51\u683C\u3002\u5728\u672C\u6307\u5357\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528Blender 3D\u3002\u786E\u4FDD\u8F66\u8F6E\u4E0E\u4E3B\u4F53\u662F\u53EF\u5206\u79BB\u7684\u3002\u6BCF\u4E2A\u8F66\u8F6E\u5FC5\u987B\u4F5C\u4E3A\u4E0D\u540C\u7684\u7269\u4F53\u8BBF\u95EE\u3002</p><h3 id="\u5BFC\u5165\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u6A21\u578B" aria-hidden="true">#</a> \u5BFC\u5165\u6A21\u578B</h3><p>\u786E\u4FDD\u8F66\u8F6E\u4E0E\u4E3B\u4F53\u662F\u53EF\u5206\u79BB\u7684\u3002</p><p><img src="'+r+'" alt="\u8F66\u8F6E"> \u6BCF\u4E2A\u8F66\u8F6E\u5FC5\u987B\u4F5C\u4E3A\u4E0D\u540C\u7684\u7269\u4F53\u8BBF\u95EE\uFF0C\u8F66\u8F6E\u5206\u522B\u547D\u540D\u4E3A\uFF1A \u5DE6\u524D\u8F6E <code>CvL_FrontWheel_L</code> \u5DE6\u540E\u8F6E <code>CvL_RearWheel_L</code> \u53F3\u524D\u8F6E <code>CvL_FrontWheel_R</code> \u53F3\u540E\u8F6E <code>CvL_RearWheel_R</code></p><p>\u91CD\u8981\u7684\u662F\u8981\u786E\u4FDD\u8F66\u8F86\u671D\u5411\u6B63X\u65B9\u5411\uFF0C\u56E0\u6B64\u5F15\u64CE\u76D6\u548C\u6321\u98CE\u73BB\u7483\u5E94\u8BE5\u671D\u5411\u6B63X\u3002</p><p>\u6C7D\u8F66\u8FD8\u5E94\u5B9A\u5411\uFF0C\u4F7F\u5730\u677F\u5230\u8F66\u9876\u7684\u65B9\u5411\u5904\u4E8E\u6B63Z\u65B9\u5411\u3002</p><p>\u8F66\u8F6E\u5E94\u8BE5\u53EA\u662F\u5728X-Y\u5E73\u9762\u4E0A\u653E\u7267\uFF0C\u539F\u70B9\u5E94\u8BE5\u4F4D\u4E8E\u60A8\u9884\u8BA1\u8F66\u8F86\u7684\u8D28\u91CF\u4E2D\u5FC3\u4F4D\u4E8EX-Y\u5E73\u9762\u4E0A\u7684\u4F4D\u7F6E\uFF08\u867D\u7136\u4E0D\u662F\u5728Z\u5E73\u9762\u4E0A\uFF09\u3002</p><h3 id="\u6DFB\u52A0\u9AA8\u67B6" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u9AA8\u67B6" aria-hidden="true">#</a> \u6DFB\u52A0\u9AA8\u67B6</h3><p>\u9AA8\u67B6 (Armature) \u662F\u89D2\u8272\u52A8\u753B\u91CC\u9762\u6700\u5E38\u4F7F\u7528\u7684\u5143\u7D20\uFF0C\u5B83\u53EF\u4EE5\u51C6\u786E\u63A7\u5236\u4E00\u4E2A\u6A21\u578B\u7684\u53D8\u5F62\uFF0C\u5C24\u5176\u662F\u5F88\u590D\u6742\u7684\u6A21\u578B\u3002\u53C2\u8003 <a href="https://docs.blender.org/manual/zh-hans/2.79/rigging/armatures/bones/editing/bones.html" target="_blank" rel="noopener noreferrer">Blender \u4E2D\u7684\u9AA8\u67B6</a></p><p>\u5728\u6DFB\u52A0\u9AA8\u67B6\u4E4B\u524D\uFF0C\u5728\u7269\u4F53\u6A21\u5F0F\u4E0B\uFF0C\u5148\u5C06 3D \u6E38\u6807 \u5F52\u4F4D\uFF1A<code>\u7269\u4F53\u6A21\u5F0F</code> \u2023 <code>\u7269\u4F53</code> \u2023 <code>\u5438\u9644</code> \u2023 <code>\u6E38\u6807 -&gt; \u4E16\u754C\u539F\u70B9</code></p><p>\u63A5\u7740\uFF0C\u5728\u7269\u4F53\u6A21\u5F0F\u4E0B\uFF0C\u6DFB\u52A0\u9AA8\u67B6\uFF1A<code>\u6DFB\u52A0</code> \u2023 <code>\u9AA8\u67B6</code><br><img src="'+d+'" alt="\u6DFB\u52A0\u9AA8\u67B6"></p><blockquote><p>\u8FD9\u65F6\u5019\u7684\u9AA8\u67B6\u7684\u6839\u5E94\u8BE5\u662F\u5C45\u4E2D\u7684\uFF0C\u5982\u679C\u9AA8\u67B6\u7684\u6839\u6CA1\u6709\u5728\u539F\u70B9\uFF0C\u5219\u9700\u8981\u624B\u52A8\u8C03\u6574\u3002\u5982\u679C\u9AA8\u67B6\u5F88\u5C0F\u7684\uFF0C\u53EF\u4EE5\u8FDB\u884C\u7F29\u653E\uFF0C\u6309\u4F4F\u952E\u76D8 <code>s</code>\uFF0C\u5411\u56DB\u5468\u79FB\u52A8\u53EF\u4EE5\u7B49\u6BD4\u7F29\u653E</p></blockquote><p>\u5207\u6362\u5230\u7F16\u8F91\u6A21\u5F0F\uFF0C\u5E76\u56F4\u7ED5x\u8F74\u65CB\u8F6C\u9AA8\u67B690\u3002 <img src="'+c+'" alt="\u65CB\u8F6C\u9AA8\u67B6"></p><p>\u63A5\u7740\uFF0C\u9009\u62E9\u9AA8\u67B6\uFF0C\u4E3A\u6BCF\u4E00\u4E2A\u8F66\u8F6E\u6DFB\u52A0\u4E00\u6839\u9AA8\u5934\uFF0C\u5E76\u786E\u4FDD\u9AA8\u5934\u7684\u6839\u4E0E\u8F66\u8F6E\u7684\u4E2D\u5FC3\u91CD\u5408\u3002\u8FD9\u53EF\u4EE5\u901A\u8FC7\u5728\u7F16\u8F91\u6A21\u5F0F\u4E0B\u5C063D\u5149\u6807\u5B9A\u4F4D\u5728\u6BCF\u4E2A\u8F66\u8F6E\u7684\u4E2D\u5FC3\u6765\u5B9E\u73B0\uFF1A</p><ol><li>\u5728 <code>\u7F16\u8F91\u6A21\u5F0F</code> \u4E0B\uFF0C\u4F7F\u7528\xA0<code>Shift-A</code>\xA0\u5FEB\u6377\u952E\u547D\u4EE4\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u9AA8\u9ABC\u5230\u4F60\u7684\u9AA8\u67B6\uFF0C\u5E76\u91CD\u547D\u540D</li><li>\u5728 <code>\u7269\u4F53\u6A21\u5F0F</code> \u4E0B\uFF0C\u9009\u62E9\u4E00\u4E2A\u8F6E\u5B50\uFF0C\u53F3\u952E <code>\u8BBE\u7F6E\u539F\u70B9</code> \u2023 <code>\u539F\u70B9 -&gt; \u51E0\u4F55\u4E2D\u5FC3</code></li><li>\u5728 <code>\u7269\u4F53\u6A21\u5F0F</code> \u4E0B\uFF0C\u9009\u62E9\u4E00\u4E2A\u8F6E\u5B50\uFF0C\u6309 <code>Shift+S</code> \u6216\u8005\u53F3\u952E\u70B9\u51FB <code>\u5438\u9644</code> \uFF0C\u9009\u62E9 <code>\u6E38\u6807 -&gt; \u9009\u4E2D\u9879</code> \u70B9\u51FB\uFF0C\u677E\u5F00\u540E\u6E38\u6807\u79FB\u52A8\u5230\u8F66\u8F6E\u4E2D\u5FC3</li><li>\u5207\u6362\u81F3 <code>\u7F16\u8F91\u6A21\u5F0F</code> \uFF0C\u9009\u62E9\u4E00\u4E2Abone\uFF0C\u53F3\u952E\u70B9\u51FB <code>\u5438\u9644</code> \u2023 <code>\u8BBE\u7F6E\u539F\u70B9</code> \u2023 <code>\u9009\u4E2D\u9879 -&gt; \u6E38\u6807</code></li></ol><h3 id="\u5173\u8054\u7236\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u7236\u7EA7" aria-hidden="true">#</a> \u5173\u8054\u7236\u7EA7</h3><p>\u5207\u6362\u81F3 <code>\u7269\u4F53\u6A21\u5F0F</code>\uFF0C\u5728\u9879\u76EE\u5927\u7EB2\u4E2D\uFF0C\u6309 <code>shift</code> \u591A\u9009\u9009\u5B9A\u8F66\u4F53\u548C\u5168\u90E84\u4E2A\u8F66\u8F6E\uFF0C\u6309\u4F4F <code>ctrl</code> \u52A0\u9009\u9AA8\u67B6\uFF0C\u7136\u540E\u9F20\u6807\u79FB\u52A8\u5230\u7F16\u8F91\u533A\u57DF\uFF0C\u6309\u4E0B <code>ctrl+P</code> \u6216 <code>cmd+P</code> \uFF0C\u70B9\u51FB\u9009\u62E9 <code>\u9644\u5E26\u7A7A\u9876\u70B9\u7EC4</code>\uFF0C\u5C06\u7F51\u683C mesh \u7ED1\u5B9A\u81F3\u9AA8\u67B6 <code>ctrl+P</code></p><p><img src="https://carla.readthedocs.io/en/latest/img/tuto_content_authoring_vehicles/bind_armature.gif" alt="\u5173\u8054\u7236\u7EA7"></p><p><img src="'+a+'" alt="AddParenting"></p><p>\u5DF2\u7ECF\u4E3A\u7F51\u683C mesh \u8BBE\u7F6E\u7236\u7EA7\u4E3A\u9AA8\u67B6 armature \u3002\u63A5\u4E0B\u6765\uFF0C\u9700\u8981\u5C06\u6BCF\u4E00\u4E2A\u8F6E\u5B50\u5206\u914D\u81F3\u5BF9\u5E94\u7684\u9AA8\u9ABC bone \u4E0A\u3002</p><h3 id="\u7ED9\u6C7D\u8F66\u7EC4\u4EF6\u6307\u5B9A\u9AA8\u9ABC" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u6C7D\u8F66\u7EC4\u4EF6\u6307\u5B9A\u9AA8\u9ABC" aria-hidden="true">#</a> \u7ED9\u6C7D\u8F66\u7EC4\u4EF6\u6307\u5B9A\u9AA8\u9ABC</h3><p><img src="https://carla.readthedocs.io/en/latest/img/tuto_content_authoring_vehicles/assign_vertex_group.gif" alt="\u5206\u914D\u9AA8\u9ABC"></p><p>\u5728 <code>\u7F16\u8F91\u6A21\u5F0F</code> \u4E0B\uFF0C\u9009\u62E9\u6BCF\u4E00\u4E2A\u90E8\u4EF6\uFF08\u8F66\u548C\u56DB\u4E2A\u8F66\u8F6E\uFF09\u7684\u9876\u70B9\u7EC4\uFF0C\uFF08\u9F20\u6807\u79FB\u52A8\u81F3\u7F16\u8F91\u9875\u9762\uFF09\u6309\u4E0B <code>A</code> \u9009\u62E9\u5168\u90E8\u9876\u70B9 (vertex) \uFF0C\u9009\u62E9\u9700\u8981\u5206\u914D\u7684\u9AA8\u9ABC\uFF0C\u70B9\u51FB\u9876\u70B9\u7EC4\u9762\u677F\u7684 <code>\u6307\u5B9A</code> \u3002</p><h3 id="\u6A21\u578B\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u5BFC\u51FA" aria-hidden="true">#</a> \u6A21\u578B\u5BFC\u51FA</h3><p>\u4F7F\u7528 <a href="https://continuebreak.com/creations/ue4-vehicle-rigging-addon-blender/" target="_blank" rel="noopener noreferrer">UE4 Vehicle Rigging Addon for Blender</a></p><p>\u9009\u62E9\xA0<code>\u6587\u4EF6</code> \u2023 <code>\u5BFC\u51FA</code> \u2023 <code>FBX (.fbx)</code>\xA0\u3002\u5728 <code>\u5305\u62EC</code> \u9762\u677F\u7684 <code>\u7269\u4F53\u7C7B\u578B</code> \u83DC\u5355\u9009\u62E9\uFF0C<code>\u9AA8\u67B6</code> \u548C <code>\u7F51\u683C</code> \uFF0C\u5176\u4ED6\u4E0D\u9009\u62E9\u3002\u5728 <code>\u53D8\u6362</code> \u83DC\u5355\u4E2D\uFF0C\u4FEE\u6539 <code>\u524D\u8FDB</code> \u4E3A <code>x \u5411\u524D</code> \uFF0C\u4FEE\u6539 <code>\u5411\u4E0A</code> \u4E3A <code>z\u5411\u4E0A</code> \u3002\u5728 <code>\u9AA8\u67B6</code> \u83DC\u5355\u4E2D\uFF0C\u53D6\u6D88\u9009\u62E9 <code>\u6DFB\u52A0\u9AA8\u53F6</code>\u3002\u7136\u540E\u5BFC\u51FA\u3002</p><h2 id="\u5BFC\u5165-ue" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165-ue" aria-hidden="true">#</a> \u5BFC\u5165 UE</h2><p>\u5728 carla \u76EE\u5F55\u4E0B <code>make launch</code> \u542F\u52A8\u865A\u5E7B\u5F15\u64CE\u3002\u6253\u5F00 <code>\u5185\u5BB9\u6D4F\u89C8\u5668</code> \uFF0C\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u7136\u540E\u53F3\u952E\uFF0C\u5BFC\u5165\u8D44\u4EA7\uFF0C\u9009\u62E9\u521A\u521A\u4ECE Blender \u91CC\u5BFC\u51FA\u7684\u6587\u4EF6\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u8BBE\u7F6E\u5BFC\u5165</p><p><img src="'+t+'" alt="ImportToUE"></p><h3 id="\u8BBE\u7F6E\u7269\u7406\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u7269\u7406\u8D44\u6E90" aria-hidden="true">#</a> \u8BBE\u7F6E\u7269\u7406\u8D44\u6E90</h3><p>\u60A8\u73B0\u5728\u7684\u5185\u5BB9\u6D4F\u89C8\u5668\u76EE\u5F55\u4E2D\u5C06\u6709\u81F3\u5C113\u6837\u4E1C\u897F\uFF0C <code>\u9AA8\u9ABC\u7F51\u683C\u4F53</code> \u3001 <code>\u9AA8\u9ABC</code> \u548C <code>\u7269\u7406\u8D44\u4EA7</code>\uFF0C\u5176\u4F59\u7684\u90FD\u662F\u6750\u8D28\u3002\u53CC\u51FB <code>\u7269\u7406\u8D44\u4EA7</code>\u8FDB \u884C\u8C03\u6574\u3002</p><p>\u9996\u5148\uFF0C\u9009\u62E9\u4E3B\u4F53\uFF0C\u5728\u53F3\u8FB9\u7684 <code>\u8BE6\u7EC6</code> \u83DC\u5355\u4E2D\u4FEE\u6539 <code>\u7EBF\u6027\u963B\u5C3C</code> \u4E3A0</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><p>https://zhuanlan.zhihu.com/p/384979241 https://continuebreak.com/articles/how-rig-vehicle-blender-28-ue4/</p><p>Rigcar \u63D2\u4EF6 https://github.com/digicreatures/rigacar</p>',47);function s(h,l){return n}var u=o(i,[["render",s]]);export{u as default};
