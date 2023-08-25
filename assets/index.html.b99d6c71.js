import{b as a}from"./app.cdc06c7c.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=a(`<p>\u7B80\u5355\u7684\u6559\u7A0B\uFF0C\u66F4\u591A\u7684\u4E1C\u897F\u5728 <a href="http://HenryZhuHR.github.io/Hello-Cpp#cmake" target="_blank" rel="noopener noreferrer">\u8FD9\u91CC</a></p><h2 id="\u7F16\u8BD1\u53EF\u6267\u884C\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u53EF\u6267\u884C\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u8BD1\u53EF\u6267\u884C\u6587\u4EF6</h2><h3 id="\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> \u9879\u76EE\u7ED3\u6784</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
\u251C\u2500app
\u2502  \u251C\u2500CMakeLists.txt
<span class="token operator">|</span>  \u2514\u2500main.cpp
\u2514\u2500CMakeLists.txt
</code></pre></div><h3 id="\u914D\u7F6E\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879\u76EE" aria-hidden="true">#</a> \u914D\u7F6E\u9879\u76EE</h3><p>\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 <code>CMakeLists.txt </code>\u4E3A\u6574\u4E2A\u9879\u76EE\u505A\u4E00\u4E9B\u57FA\u672C\u914D\u7F6E\uFF0C\u5305\u62EC\u9879\u76EE\u6240\u9700CMake\u6700\u4F4E\u7248\u672C\u3001\u9879\u76EE\u540D\u79F0\u3001\u7F16\u8BD1\u5668\u7B49\uFF0C\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B</p><div class="language-cmake ext-cmake"><pre class="language-cmake"><code><span class="token comment"># ./CMakeLists.txt</span>
<span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.5</span> FATAL_ERROR<span class="token punctuation">)</span>
<span class="token keyword">project</span><span class="token punctuation">(</span>Compile_Executable_File LANGUAGES CXX<span class="token punctuation">)</span>
<span class="token keyword">add_subdirectory</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
</code></pre></div><hr><p><code>cmake_minimum_required</code> \u89C4\u5B9A\u6784\u5EFA\u5F53\u524D\u9879\u76EE\u7684\u6240\u9700CMake\u7684\u6700\u4F4E\u7248\u672C\uFF0C\u5F53\u6784\u5EFA\u9879\u76EE\u4F7F\u7528\u7684CMake\u4E0D\u6EE1\u8DB3\u505A\u4E2A\u6700\u4F4E\u7248\u672C\u8981\u6C42\uFF0C\u5219\u4F1A\u51FA\u73B0\u62A5\u9519\uFF0C\u6DFB\u52A0 <code>FATAL_ERROR</code> \u5219\u5728\u4E0D\u6EE1\u8DB3\u6761\u4EF6\u7684\u60C5\u51B5\u4E0B\u4EA7\u751F\u81F4\u547D\u62A5\u9519</p><div class="language-cmake ext-cmake"><pre class="language-cmake"><code><span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.5</span><span class="token punctuation">)</span>
<span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.5</span> FATAL_ERROR<span class="token punctuation">)</span>
</code></pre></div><blockquote><p>CMake\u8BED\u6CD5\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF08\u5373 <code>cmake_minimum_required </code>\u4E0E <code>CMAKE_MINIMUN_REQUIRED</code> \u662F\u4E00\u6837\u7684\uFF09\uFF0C\u4F46\u662F\u53C2\u6570\u533A\u5206\u5927\u5C0F\u5199\u7684</p></blockquote><p><code>project</code> \u58F0\u660E\u9879\u76EE\u540D\u79F0(<code>Compile_Executable_File</code>)\uFF0C\u540C\u65F6\u4E5F\u53EF\u4EE5\u6DFB\u52A0\u53C2\u6570 <code>LANGUAGES</code> \u6765\u663E\u5F0F\u58F0\u660E\u9879\u76EE\u7684\u7F16\u7A0B\u8BED\u8A00</p><div class="language-cmake ext-cmake"><pre class="language-cmake"><code><span class="token keyword">project</span><span class="token punctuation">(</span>Compile_Executable_File<span class="token punctuation">)</span>
<span class="token keyword">project</span><span class="token punctuation">(</span>Compile_Executable_File LANGUAGES CXX<span class="token punctuation">)</span>
</code></pre></div><blockquote><p>CXX\u4EE3\u8868C++\uFF0CC++\u662FCMake\u9ED8\u8BA4\u7684\u7F16\u7A0B\u8BED\u8A00</p></blockquote><p>\u5B8C\u6210\u5BF9\u6574\u4E2A\u9879\u76EE\u7684\u57FA\u672C\u914D\u7F6E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u6DFB\u52A0\u5B50\u76EE\u5F55 <code>add_subdirectory</code> \u6765\u8FDB\u884C\u7F16\u8BD1\uFF0C\u6211\u4EEC\u6DFB\u52A0\u5B50\u76EE\u5F55 <code>app</code> \u6765\u7F16\u8BD1\u53EF\u6267\u884C\u6587\u4EF6</p><div class="language-cmake ext-cmake"><pre class="language-cmake"><code><span class="token keyword">add_subdirectory</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u914D\u7F6E\u7F16\u8BD1\u53EF\u6267\u884C\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7F16\u8BD1\u53EF\u6267\u884C\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u7F16\u8BD1\u53EF\u6267\u884C\u6587\u4EF6</h3><p>\u5728 <code>app/CMakeLists.txt</code> \u914D\u7F6E\u7F16\u8BD1\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B</p><div class="language-cmake ext-cmake"><pre class="language-cmake"><code><span class="token comment"># app/CMakeLists.txt</span>
<span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">EXECUTABLE_OUTPUT_PATH</span> <span class="token punctuation">\${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/bin<span class="token punctuation">)</span>
<span class="token keyword">add_executable</span><span class="token punctuation">(</span>compile-executable_file main.cpp<span class="token punctuation">)</span>
<span class="token keyword">add_executable</span><span class="token punctuation">(</span><span class="token punctuation">\${</span><span class="token variable">PROJECT_NAME</span><span class="token punctuation">}</span> main.cpp<span class="token punctuation">)</span>
</code></pre></div><hr><p>\u9996\u5148\u662F\u8BBE\u7F6E\u53EF\u6267\u884C\u6587\u4EF6\u8F93\u51FA\u8DEF\u5F84 <code>EXECUTABLE_OUTPUT_PATH</code> \u4E3A <code>\${PROJECT_SOURCE_DIR}/bin</code></p><div class="language-cmake ext-cmake"><pre class="language-cmake"><code><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">EXECUTABLE_OUTPUT_PATH</span> <span class="token punctuation">\${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/bin<span class="token punctuation">)</span>
</code></pre></div><blockquote><p><code>PROJECT_SOURCE_DIR</code> \u662F\u4E00\u4E2A\u9ED8\u8BA4\u7684\u53D8\u91CF\uFF0C\u8FD9\u4E2A\u53D8\u91CF\u662F\u548C\u6839\u76EE\u5F55\u4E0B\u7684 <code>CMakeLists.txt</code> \u76F8\u540C\u76EE\u5F55\uFF0C\u6216\u8005\u8BF4\u662F\u4E0E\u5305\u542B\u4E86\u8BBE\u7F6E\u9879\u76EE\u540D\u79F0 <code>project()</code> \u7684 <code>CMakeLists.txt</code> \u76EE\u5F55\u662F\u76F8\u540C\u7684</p></blockquote><p><code>add_executable</code> \u5C06\u901A\u8FC7\u7F16\u8BD1\u6E90\u6587\u4EF6 <code>main.cpp</code> \u6765\u521B\u5EFA\u4E00\u4E2A\u53EF\u6267\u884C\u6587\u4EF6 <code>compile-executable_file(.exe)</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code>add_executable<span class="token punctuation">(</span>compile-executable_file main.cpp<span class="token punctuation">)</span>
add_executable<span class="token punctuation">(</span><span class="token variable">\${PROJECT_NAME}</span> main.cpp<span class="token punctuation">)</span>
</code></pre></div><blockquote><p>\u4F60\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8F93\u51FA\u7684\u540D\u79F0\u4E3A\u9879\u76EE\u540D\u79F0 <code>\${PROJECT_NAME}</code> \uFF0C\u4E5F\u5C31\u662F\u5728 <code>project()</code> \u6307\u5B9A\u7684\u9879\u76EE\u540D\u79F0</p></blockquote><p>\u7F16\u5199\u5B8C\u9879\u76EE\u7684\u5168\u90E8 <code>CMakeLists.txt</code> \u6587\u4EF6\u540E\uFF0C\u63A5\u4E0B\u6765\u5C31\u662F\u5982\u4F55\u6784\u5EFA\u5E76\u4E14\u7F16\u8BD1\u9879\u76EE</p><h3 id="\u6784\u5EFA\u9879\u76EE\u548C\u751F\u6210\u6784\u5EFA\u5668" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u9879\u76EE\u548C\u751F\u6210\u6784\u5EFA\u5668" aria-hidden="true">#</a> \u6784\u5EFA\u9879\u76EE\u548C\u751F\u6210\u6784\u5EFA\u5668</h3><p>CMake\u662F\u4E00\u4E2A<strong>\u6784\u5EFA\u7CFB\u7EDF\u751F\u6210\u5668</strong>\u3002\u5C06\u63CF\u8FF0\u6784\u5EFA\u7CFB\u7EDF(\u5982\uFF1AUnix Makefile\u3001Ninja\u3001Visual Studio\u7B49)\u5E94\u5F53\u5982\u4F55\u64CD\u4F5C\u624D\u80FD\u7F16\u8BD1\u4EE3\u7801\u3002\u7136\u540E\uFF0CCMake\u4E3A\u6240\u9009\u7684\u6784\u5EFA\u7CFB\u7EDF\u751F\u6210\u76F8\u5E94\u7684\u6307\u4EE4\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C</p><ul><li>GNU/Linux\u548CmacOS\u7CFB\u7EDF\u4E0A\uFF0C<code>Unix Makefile</code> \u662F\u9ED8\u8BA4\u7684\u751F\u6210\u5668</li><li>Windows\u4E0A\uFF0C<code>Visual Studio</code> \u662F\u9ED8\u8BA4\u7684\u751F\u6210\u5668</li></ul><p>\u4F7F\u7528CMake\u914D\u7F6E\u9879\u76EE\u5E76\u751F\u6210\u6784\u5EFA\u5668 (generator) \uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u884C\u754C\u9762 (CLI) \u8FDB\u884C\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7GUI\u8FDB\u884C\u3002CMake CLI \u63D0\u4F9B\u4E86\u8BB8\u591A\u9009\u9879\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>cmake -h</code> \u67E5\u770B\u3002</p><p>\u5728\u6839\u76EE\u5F55\u4E0B\uFF0C\u65B0\u5EFA\u76EE\u5F55 <code>build</code> \u5E76\u4E14\u8FDB\u5165\u8BE5\u76EE\u5F55\uFF0C\u5728 <code>build</code> \u76EE\u5F55\u4E0B\uFF0C\u901A\u8FC7\u6307\u5B9A\u4E0A\u7EA7\u76EE\u5F55\u7684 <code>CMakeLists.txt</code> \u6765\u8C03\u7528 CMake \u914D\u7F6E\u9879\u76EE\u5E76\u751F\u6210\u6784\u5EFA\u5668</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mkdir</span> -p build
<span class="token builtin class-name">cd</span> build
cmake <span class="token punctuation">..</span>
<span class="token comment"># or specify a generator available the platform</span>
cmake <span class="token punctuation">..</span> -G <span class="token string">&quot;MinGW Makefiles&quot;</span>
</code></pre></div><blockquote><p>\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u4E2D\u6267\u884C <code>cmake .</code>\uFF0C\u8FD9\u662F\u6E90\u4EE3\u7801\u5185\u6784\u5EFA\uFF0C\u4F46\u662F\u8FD9\u79CD\u505A\u6CD5\u4F1A\u5728\u6839\u76EE\u5F55\uFF08\u6E90\u4EE3\u7801\u76EE\u5F55\uFF09\u4E0B\u751F\u6210\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F1A\u5C06\u6E90\u4EE3\u7801\u548C\u9879\u76EE\u7684\u751F\u6210\u6811\u6DF7\u5408\uFF0C\u8FD9\u662F\u975E\u5E38\u4E0D\u63A8\u8350\u7684\u3002\u6211\u4EEC\u4F9D\u7136\u4F1A\u9009\u62E9\u6E90\u5916(out of source)\u6784\u5EFA\u9879\u76EE\uFF0C\u5373\u65B0\u5EFA\u76EE\u5F55 <code>build</code> \uFF0C\u5E76\u4E14\u5728\u76EE\u5F55 <code>build</code> \u4E0B\u6784\u5EFA\u3002</p></blockquote><blockquote><p>\u4F60\u53EF\u4EE5\u770B\u5230\u8FD9\u91CC\u4F7F\u7528\u4E86\u53C2\u6570 <code>-G</code> \u6765\u6307\u5B9A\u751F\u6210\u5668\u4E3A <code>&quot;MinGW Makefiles&quot;</code> \uFF08\u9700\u8981\u6709\u53CC\u5F15\u53F7\uFF09\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>cmake -h</code> \u6765\u67E5\u770B\u5168\u90E8\u53EF\u7528\u7684\u751F\u6210\u5668\u3002</p></blockquote><p>\u5F53\u51FA\u73B0\u5982\u4E0B\u8F93\u51FA\uFF0C\u5219\u5DF2\u7ECF\u6210\u529F\u914D\u7F6E\u9879\u76EE(<code>Configuring done</code>)\uFF0C\u5E76\u4E14\u751F\u6210\u4E86\u6784\u5EFA\u5668(<code>Generating done</code>)</p><div class="language-bash ext-sh"><pre class="language-bash"><code>-- Configuring <span class="token keyword">done</span>
-- Generating <span class="token keyword">done</span>
</code></pre></div><p>\u4F60\u53EF\u4EE5\u5728 <code>build</code> \u76EE\u5F55\u4E0B\uFF0C\u770B\u5230\u4E0B\u5217\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
\u251C\u2500CMakefiles
\u251C\u2500cmake_install.cmake
\u251C\u2500CMakeCache.txt
\u2514\u2500Makefile
</code></pre></div><ul><li><code>CMakefiles</code> \uFF1A\u4E34\u65F6\u6587\u4EF6\u76EE\u5F55\uFF0CCMake\u7528\u4E8E\u68C0\u6D4B\u64CD\u4F5C\u7CFB\u7EDF\u3001\u7F16\u8BD1\u5668\u7B49\u3002</li><li><code>cmake_install.cmake</code> \uFF1A\u5904\u7406\u5B89\u88C5\u89C4\u5219\u7684CMake\u811A\u672C\uFF0C\u5728\u9879\u76EE\u5B89\u88C5\u65F6\u4F7F\u7528\u3002</li><li><code>CMakeCache.txt</code> \uFF1A\u5982\u6587\u4EF6\u540D\u6240\u793A\uFF0CCMake\u7F13\u5B58\u3002CMake\u5728\u91CD\u65B0\u8FD0\u884C\u914D\u7F6E\u65F6\u4F7F\u7528\u8FD9\u4E2A\u6587\u4EF6\u3002</li><li><code>Makefile</code> : \u547D\u4EE4 <code>make</code> \u5C06\u8FD0\u884C\u6307\u4EE4\u6765\u7F16\u8BD1\u9879\u76EE\u3002</li></ul><h3 id="\u7F16\u8BD1\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u9879\u76EE" aria-hidden="true">#</a> \u7F16\u8BD1\u9879\u76EE</h3><p>\u968F\u540E\u5C31\u53EF\u4EE5\u5F00\u59CB\u7F16\u8BD1\u53EF\u6267\u884C\u6587\u4EF6</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">make</span>
<span class="token comment"># or</span>
cmake --build <span class="token builtin class-name">.</span>
</code></pre></div><p>\u751F\u6210\u7684\u9879\u76EE\u5C31\u4F1A\u5728 <code>\${PROJECT_SOURCE_DIR}/bin</code> \u4E0B\uFF0C\u4E5F\u5C31\u662F <code>bin</code>\u3002\u5982\u679C\u4E0D\u901A\u8FC7 <code>set(EXECUTABLE_OUTPUT_PATH ...)</code> \u6765\u6307\u5B9A\u8F93\u51FA\u76EE\u5F55\uFF0C\u90A3\u4E48\u6587\u4EF6\u4F1A\u88AB\u8F93\u51FA\u5230 <code>build</code> \u76EE\u5F55\u4E0B</p><h2 id="\u7F16\u8BD1\u548C\u94FE\u63A5\u9759\u6001\u5E93\u548C\u52A8\u6001\u5E93" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u548C\u94FE\u63A5\u9759\u6001\u5E93\u548C\u52A8\u6001\u5E93" aria-hidden="true">#</a> \u7F16\u8BD1\u548C\u94FE\u63A5\u9759\u6001\u5E93\u548C\u52A8\u6001\u5E93</h2><h3 id="\u9879\u76EE\u7ED3\u6784-1" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784-1" aria-hidden="true">#</a> \u9879\u76EE\u7ED3\u6784</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
\u251C\u2500include
\u2502  \u2514\u2500myClass.h
\u251C\u2500src
\u2502  \u251C\u2500CMakeLists.txt
\u2502  \u2514\u2500myClass.cpp
\u2514\u2500CMakeLists.txt
</code></pre></div><h3 id="\u914D\u7F6E\u9879\u76EE-1" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879\u76EE-1" aria-hidden="true">#</a> \u914D\u7F6E\u9879\u76EE</h3><p>\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 <code>CMakeLists.txt</code> \u4E3A\u6574\u4E2A\u9879\u76EE\u505A\u4E00\u4E9B\u57FA\u672C\u914D\u7F6E\uFF0C\u5305\u62EC\u9879\u76EE\u6240\u9700CMake\u6700\u4F4E\u7248\u672C\u3001\u9879\u76EE\u540D\u79F0\u3001\u7F16\u8BD1\u5668\u7B49\uFF0C\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-cmake ext-cmake"><pre class="language-cmake"><code><span class="token comment"># ./CMakeLists.txt</span>
<span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.10</span><span class="token punctuation">)</span>
<span class="token keyword">project</span><span class="token punctuation">(</span>Compile_Library<span class="token punctuation">)</span>
<span class="token keyword">add_subdirectory</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span>
</code></pre></div><hr><blockquote><p><code>myClass.h</code> \u548C <code>myClass.cpp</code> \u968F\u4FBF\u5199\u4E00\u4E2A\u7C7B\u5C31\u884C</p></blockquote><h3 id="\u7F16\u8BD1\u5E93" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5E93" aria-hidden="true">#</a> \u7F16\u8BD1\u5E93</h3><p>\u5728 <code>src/CMakeLists.txt</code> \u4E2D\u6211\u4EEC\u7F16\u8BD1 <code>myClass</code> \u4E3A\u4E00\u4E2A\u5E93</p><div class="language-cmake ext-cmake"><pre class="language-cmake"><code><span class="token comment"># ./src/CMakeLists.txt</span>
<span class="token keyword">aux_source_directory</span><span class="token punctuation">(</span>.  myLib<span class="token punctuation">)</span>
<span class="token keyword">include_directories</span><span class="token punctuation">(</span><span class="token punctuation">\${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/include<span class="token punctuation">)</span>

<span class="token comment"># ------ dynamic-link-library ------</span>
<span class="token keyword">add_library</span><span class="token punctuation">(</span>myLib_shared <span class="token namespace">SHARED</span> <span class="token punctuation">\${</span>myLib<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">LIBRARY_OUTPUT_PATH</span> <span class="token punctuation">\${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/bin<span class="token punctuation">)</span>

<span class="token comment"># ------ static-link-library ------</span>
<span class="token keyword">add_library</span><span class="token punctuation">(</span>myLib <span class="token namespace">STATIC</span> <span class="token punctuation">\${</span>myLib<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">LIBRARY_OUTPUT_PATH</span> <span class="token punctuation">\${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/lib<span class="token punctuation">)</span>

<span class="token comment"># -- link other 3rd-party lib to this lib if need</span>
<span class="token comment"># target_link_libraries(myLib &lt;&gt;)</span>
</code></pre></div><hr><p>\u5F53\u4EE3\u7801\u6709\u591A\u4E2A\u6E90\u4EE3\u7801\u4E4B\u540E\uFF0C\u4E3A\u4E86\u65B9\u4FBF\uFF0C\u6211\u4EEC\u5C06\u5168\u90E8\u6E90\u4EE3\u7801\u6DFB\u52A0\u5230\u4E00\u4E2A\u53D8\u91CF\u4E0B\u3002\u4F8B\u5982\u5C06 <code>src</code> \u76EE\u5F55\u4E0B\u7684\u5168\u90E8\u6E90\u7801\u6DFB\u52A0\u5230\u53D8\u91CF <code>myLib</code>\u5185</p><div class="language-cmake ext-cmake"><pre class="language-cmake"><code><span class="token keyword">aux_source_directory</span><span class="token punctuation">(</span>.  myLib_src<span class="token punctuation">)</span>
</code></pre></div><p>\u540C\u65F6\u8BBE\u7F6E\u6E90\u7801\u6240\u5BF9\u5E94\u7684\u5934\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF0C\u4F7F\u5F97\u7F16\u8BD1\u7684\u65F6\u5019\u53EF\u4EE5\u6B63\u786E\u5730\u627E\u5230\u5934\u6587\u4EF6</p><div class="language-cmake ext-cmake"><pre class="language-cmake"><code><span class="token keyword">include_directories</span><span class="token punctuation">(</span><span class="token punctuation">\${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/include<span class="token punctuation">)</span>
</code></pre></div><p>\u63A5\u4E0B\u6765\u5C31\u53EF\u4EE5\u7F16\u8BD1\u5E93\u4E86\uFF0C\u6211\u4EEC\u4EE5\u7F16\u8BD1\u52A8\u6001\u5E93\u4E3A\u4F8B</p><p>\u547D\u4EE4 <code>add_library(&lt;lib_name&gt; STATIC &lt;file&gt;.h &lt;file&gt;.cpp)</code> \u7528\u4E8E\u5C06\u6307\u5B9A\u7684\u6E90\u7801\u7F16\u8BD1\u6210\u5E93</p><ul><li><code>&lt;lib_name&gt;</code> \u662F\u751F\u6210\u7684\u5E93\u540D\uFF0C\u8BE5\u5E93\u540D\u53EF\u4EE5\u770B\u6210\u4E00\u4E2A\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5728\u5176\u4ED6\u5730\u65B9\u901A\u8FC7\u5E93\u540D\u8FDB\u884C\u5F15\u7528</li><li>\u7B2C\u4E8C\u4E2A\u53C2\u6570 <code>STATIC</code> \u53EF\u4EE5\u8BBE\u7F6E\u751F\u6210\u7684\u5E93\u7684\u7C7B\u578B <ul><li><strong>\u52A8\u6001\u5E93</strong>\u4E3A <code>SHARED</code></li><li><strong>\u9759\u6001\u5E93</strong>\u4E3A <code>STATIC</code></li></ul></li><li>\u5269\u4E0B\u7684\u53C2\u6570\u662F\u9700\u8981\u7F16\u8BD1\u8FDB\u5E93\u7684\u6E90\u7801</li></ul><div class="language-cmake ext-cmake"><pre class="language-cmake"><code><span class="token keyword">add_library</span><span class="token punctuation">(</span>myLib_shared <span class="token namespace">SHARED</span> <span class="token punctuation">\${</span>myLib_src<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5E76\u4E14\u6211\u4EEC\u8BBE\u7F6E\u5E93\u7684\u8F93\u51FA\u76EE\u5F55</p><div class="language-cmake ext-cmake"><pre class="language-cmake"><code><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">LIBRARY_OUTPUT_PATH</span> <span class="token punctuation">\${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/bin<span class="token punctuation">)</span>
</code></pre></div><p>\u5982\u679C\u5F53\u524D\u7684\u5E93\u8FD8\u4F7F\u7528\u4E86\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5E93\uFF08\u4F8B\u5982OpenCV\uFF09\uFF0C\u9700\u8981\u94FE\u63A5\u5230\u5F53\u524D\u7684\u5E93\uFF0C\u9700\u8981\u901A\u8FC7 <code>target_link_libraries</code> \u94FE\u63A5\uFF1B\u5982\u679C\u94FE\u63A5\u591A\u4E2A\u5E93\uFF0C\u4EE5\u7A7A\u683C\u5206\u5F00\u5373\u53EF</p><div class="language-cmake ext-cmake"><pre class="language-cmake"><code><span class="token keyword">target_link_libraries</span><span class="token punctuation">(</span>myLib &lt;other_libaray<span class="token punctuation">&gt;</span> [&lt;other_libaray_2<span class="token punctuation">&gt;</span>]<span class="token punctuation">)</span>
</code></pre></div>`,68);function c(p,o){return e}var i=n(s,[["render",c]]);export{i as default};
