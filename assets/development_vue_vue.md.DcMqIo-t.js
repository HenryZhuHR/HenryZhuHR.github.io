import{_ as e,c as a,o,a2 as i}from"./chunks/framework.bdxXucLJ.js";const t="/assets/vscode-enable-takeover-mode.BYQuirJP.png",V=JSON.parse('{"title":"Vue","description":"","frontmatter":{"outline":"deep","tags":["web","前端"]},"headers":[],"relativePath":"development/vue/vue.md","filePath":"development/vue/vue.md","lastUpdated":1715790038000}'),r={name:"development/vue/vue.md"},n=i('<h1 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h1><h2 id="qi-ta" tabindex="-1">其他 <a class="header-anchor" href="#qi-ta" aria-label="Permalink to &quot;其他&quot;">​</a></h2><h3 id="zai-vscode-zhong-kai-fa-vue-shi-qi-yong-jie-guan-mo-shi" tabindex="-1">在 VSCode 中开发 Vue 时启用接管模式 <a class="header-anchor" href="#zai-vscode-zhong-kai-fa-vue-shi-qi-yong-jie-guan-mo-shi" aria-label="Permalink to &quot;在 VSCode 中开发 Vue 时启用接管模式&quot;">​</a></h3><p>使用 VSCode + Volar 开发 Vue3 + typescript 项目时，可以使用接管模式代替 TS Plugin 。</p><p><img src="'+t+'" alt="vscode-enable-takeover-mode"></p><h2 id="shi-me-shi-jie-guan-mo-shi" tabindex="-1">什么是接管模式 <a class="header-anchor" href="#shi-me-shi-jie-guan-mo-shi" aria-label="Permalink to &quot;什么是接管模式&quot;">​</a></h2><p>过去，我们为 TS 和 Vue 探索了多种语言支持模式，有：</p><p>Vetur Mode: 为 Vue + TS 语言支持提供不同的扩展插件。 VueDX Mode: 由 TS Plugin 实现，Vue + TS 语言支持也由 VSCode 内置的 TypeScript 扩展插件提供。 Volar Mode: 类似于 Vetur，但额外使用 TS Plugin 来弥补 TS 语言支持。 Volar Mode 存在什么问题？</p><p>对于每个 TS 项目，VS Code 内置的 TypeScript 扩展和 Volar 创建了 2 个语言服务实例，TS Plugin 代理程序也有额外的内置 TS 扩展的语言服务实例，最后我们为每个 TS 项目创建了 6 个语言服务实例。理论上，内存和CPU的使用率分别为200% ~ 300%。 由于 VSCode 不支持 TS 插件启用设置，您必须在每次更新 Volar 时重新启用TS插件。 接管模式是怎么解决 Volar 的问题的？</p><p>接管模式不使用 VSCode 内置的 TypeScript 扩展，只使用 Vue 语言服务器来提供 Vue + TS 语言支持。所以我们只有 2 个语言服务实例。 这种方法没有侵入，我们不再需要在每次更新扩展后为 TS Plugin 重新加载 VSCode。</p><h2 id="ru-he-qi-yongjin-yong-jie-guan-mo-shi" tabindex="-1">如何启用/禁用接管模式 <a class="header-anchor" href="#ru-he-qi-yongjin-yong-jie-guan-mo-shi" aria-label="Permalink to &quot;如何启用/禁用接管模式&quot;">​</a></h2><p>Volar 版本需要大于 0.27.17 禁用 VSCode 内置的 TypeScript 插件：左侧 Extensions 菜单，在过滤图标中选择 Built-in, 在 FEATURES 中找到 TypeScript and JavaScript Language Features 右键选择 Disable (Workspace)。 如需禁用接管模式，找到上一步的内置扩展 TypeScript and JavaScript Language Features 右键选择 Enable (Workspace) 即可。</p><h2 id="jie-guan-mo-shi-de-xian-zhi" tabindex="-1">接管模式的限制 <a class="header-anchor" href="#jie-guan-mo-shi-de-xian-zhi" aria-label="Permalink to &quot;接管模式的限制&quot;">​</a></h2><p>Vue 语言服务器试图提供所有内置的 TS 扩展功能，但总会有一些功能落后、缺失或 bug。但都在逐步解决和更新，应用开发者基本可以放心使用，相关详情可查看原文。</p><p><a href="https://github.com/vuejs/language-tools/discussions/471" target="_blank" rel="noreferrer">https://github.com/vuejs/language-tools/discussions/471</a></p><p>使用 VSCode + Volar 开发 Vue3 + typescript 项目时，可以使用接管模式代替 TS Plugin 。</p><h3 id="vue-kai-fa-jie-guan-mo-shi" tabindex="-1">Vue 开发接管模式 <a class="header-anchor" href="#vue-kai-fa-jie-guan-mo-shi" aria-label="Permalink to &quot;Vue 开发接管模式&quot;">​</a></h3>',17),s=[n];function u(h,l,d,p,c,S){return o(),a("div",null,s)}const m=e(r,[["render",u]]);export{V as __pageData,m as default};
