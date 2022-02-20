<template><h1 id="配置opencv动态库环境-程序执行时加载动态库-so的路径" tabindex="-1"><a class="header-anchor" href="#配置opencv动态库环境-程序执行时加载动态库-so的路径" aria-hidden="true">#</a> 配置OpenCV动态库环境(程序执行时加载动态库*.so的路径)</h1>
<p>首先将OpenCV的库添加到路径：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/ld.so.conf.d/opencv.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>打开的可能是一个空白的文件，不用管，只需要在文件末尾一行添加：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/usr/local/opencv4/lib
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后使得刚才的配置路径生效</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> ldconfig
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>此时可能会报错&quot;/sbin/ldconfig.real: /usr/local/cuda-11.0/targets/x86_64-linux/lib/libcudnn.so.8 不是符号链接&quot;，但是可以不管，不影响使用。</p>
<h1 id="配置pkg-config环境" tabindex="-1"><a class="header-anchor" href="#配置pkg-config环境" aria-hidden="true">#</a> 配置pkg-config环境</h1>
<p>配置bash：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/bash.bashrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在文件末尾添加：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">PKG_CONFIG_PATH</span><span class="token operator">=</span><span class="token variable">$PKG_CONFIG_PATH</span>:/usr/local/opencv4/lib/pkgconfig
<span class="token builtin class-name">export</span> PKG_CONFIG_PATH
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>注意这里的路径以cmake时候设置的为准。</p>
<p>保存后需要激活一下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>验证是否配置完成：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pkg-config --libs opencv4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>输出结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>-L/usr/local/opencv4/lib -lopencv_world
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h1 id="解决编译时出现的错误" tabindex="-1"><a class="header-anchor" href="#解决编译时出现的错误" aria-hidden="true">#</a> 解决编译时出现的错误</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/home/***/lib/opencv/opencv_contrib-4.5.1/modules/xfeatures2d/src/boostdesc.cpp:654:20: fatal error: boostdesc_bgm.i: 没有那个文件或目录
           <span class="token comment">#include "boostdesc_bgm.i"</span>
                    ^~~~~~~~~~~~~~~~~
compilation terminated.
make<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: *** <span class="token punctuation">[</span>modules/xfeatures2d/CMakeFiles/opencv_xfeatures2d.dir/build.make:417：modules/xfeatures2d/CMakeFiles/opencv_xfeatures2d.dir/src/boostdesc.cpp.o<span class="token punctuation">]</span> 错误 <span class="token number">1</span>
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: *** <span class="token punctuation">[</span>CMakeFiles/Makefile2:8170：modules/xfeatures2d/CMakeFiles/opencv_xfeatures2d.dir/all<span class="token punctuation">]</span> 错误 <span class="token number">2</span>
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: *** 正在等待未完成的任务<span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>解压<a href="./boostdesc_vgg_an_so_on.tar.gz"><code>boostdesc_vgg_an_so_on.tar.gz</code></a>文件，复制里面的文件到 <code>opencv_contrib/modules/xfeatures2d/src/</code> 下即可。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">tar</span> -xzvf boostdesc_vgg_an_so_on.tar.gz
<span class="token function">cp</span> <span class="token punctuation">\</span>
    ./boostdesc_vgg_an_so_on/* <span class="token punctuation">\</span>
    ./opencv_contrib-4.5.1/modules/xfeatures2d/src

<span class="token function">ls</span> opencv_contrib-4.5.1/modules/xfeatures2d/src/*.i
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/home/henryzhu/lib/opencv/opencv_contrib-4.5.1/modules/xfeatures2d/test/test_features2d.cpp:51:10: fatal error: features2d/test/test_detectors_regression.impl.hpp: 没有那个文件或目录
 <span class="token comment">#include "features2d/test/test_detectors_regression.impl.hpp"</span>
          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compilation terminated.
make<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: *** <span class="token punctuation">[</span>modules/xfeatures2d/CMakeFiles/opencv_test_xfeatures2d.dir/build.make:76：modules/xfeatures2d/CMakeFiles/opencv_test_xfeatures2d.dir/test/test_features2d.cpp.o<span class="token punctuation">]</span> 错误 <span class="token number">1</span>
make<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: *** 正在等待未完成的任务<span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">find</span> -name test_detectors_regression.impl.hpp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>发现</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./opencv-4.5.1/modules/features2d/test/test_detectors_regression.impl.hpp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>修改项目的 CMakeLists.txt 来实现的，简单暴力 的那种：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vim</span> opencv/CMakeLists.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在 573 行添加：</p>
<div class="language-txt ext-txt line-numbers-mode"><pre v-pre class="language-txt"><code>include_directories("modules")
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这就完成了！！</p>
</template>
