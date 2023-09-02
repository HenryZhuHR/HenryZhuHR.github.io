import{b as n}from"./app.09498d44.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/assets/BlenderPython-guide.6f852e25.png";const t={},p=n(`<h2 id="\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> \u73AF\u5883\u914D\u7F6E</h2><p>Fake Blender Python API module collection: fake-bpy-module: https://github.com/nutti/fake-bpy-module</p><div class="language-bash ext-sh"><pre class="language-bash"><code>pip3 <span class="token function">install</span> fake-bpy-module-<span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>
pip3 <span class="token function">install</span> fake-bpy-module-3.3
</code></pre></div><h2 id="\u811A\u672C\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u811A\u672C\u8FD0\u884C" aria-hidden="true">#</a> \u811A\u672C\u8FD0\u884C</h2><p><img src="`+a+`" alt="Blender Python \u5F00\u53D1"></p><h3 id="\u9009\u62E9\u9762" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u9762" aria-hidden="true">#</a> \u9009\u62E9\u9762</h3><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> bpy
<span class="token keyword">import</span> bmesh

EXPORT_FILE<span class="token operator">=</span><span class="token string">&#39;/Users/henryzhu/project/carla-project/selected_face.txt&#39;</span>
EXPORT_FILE<span class="token operator">=</span><span class="token string">&quot;/Users/henryzhu/project/Labs/DualAttentionAttack/src/all_faces.txt&quot;</span>
selected_face_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>EXPORT_FILE<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>EXPORT_FILE<span class="token punctuation">,</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span><span class="token keyword">as</span> f<span class="token punctuation">:</span>
        
        <span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            index<span class="token operator">=</span><span class="token builtin">int</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            selected_face_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>index<span class="token punctuation">)</span>


<span class="token comment"># Load face from files</span>
obj <span class="token operator">=</span> bpy<span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token builtin">object</span>
dmesh <span class="token operator">=</span> obj<span class="token punctuation">.</span>data
bpy<span class="token punctuation">.</span>ops<span class="token punctuation">.</span><span class="token builtin">object</span><span class="token punctuation">.</span>mode_set<span class="token punctuation">(</span>mode<span class="token operator">=</span><span class="token string">&#39;EDIT&#39;</span><span class="token punctuation">)</span>
bm <span class="token operator">=</span> bmesh<span class="token punctuation">.</span>from_edit_mesh<span class="token punctuation">(</span>obj<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
<span class="token keyword">for</span> face <span class="token keyword">in</span> bm<span class="token punctuation">.</span>faces<span class="token punctuation">:</span>
    <span class="token keyword">if</span> face<span class="token punctuation">.</span>index <span class="token keyword">in</span> selected_face_list<span class="token punctuation">:</span>
        face<span class="token punctuation">.</span>select <span class="token operator">=</span> <span class="token boolean">True</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>face<span class="token punctuation">,</span>face<span class="token punctuation">.</span>index<span class="token punctuation">,</span>face<span class="token punctuation">.</span>select<span class="token punctuation">)</span>

bmesh<span class="token punctuation">.</span>update_edit_mesh<span class="token punctuation">(</span>dmesh<span class="token punctuation">)</span>
dmesh<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">)</span>



<span class="token keyword">for</span> face <span class="token keyword">in</span> bm<span class="token punctuation">.</span>faces<span class="token punctuation">:</span>
    <span class="token keyword">if</span> face<span class="token punctuation">.</span>index <span class="token keyword">in</span> selected_face_list<span class="token punctuation">:</span>
        face<span class="token punctuation">.</span>select <span class="token operator">=</span> <span class="token boolean">True</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>face<span class="token punctuation">,</span>face<span class="token punctuation">.</span>index<span class="token punctuation">,</span>face<span class="token punctuation">.</span>select<span class="token punctuation">)</span>
    <span class="token comment"># if face.select:</span>
    <span class="token comment">#     # selected_face_list.append(face.index)</span>
    <span class="token comment">#     print(face)</span>
<span class="token comment"># bm = bmesh.update_edit_mesh(obj.data,True)</span>
</code></pre></div>`,7);function e(o,c){return p}var i=s(t,[["render",e]]);export{i as default};
