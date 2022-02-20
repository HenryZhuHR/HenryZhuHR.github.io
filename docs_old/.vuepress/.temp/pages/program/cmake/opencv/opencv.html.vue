<template><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h1>
<ul>
<li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li>
<li><a href="#%E7%BC%96%E8%AF%91%E5%91%BD%E4%BB%A4">编译命令</a></li>
<li><a href="#%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83">配置环境</a>
<ul>
<li><a href="#%E9%85%8D%E7%BD%AE-opencv-%E5%8A%A8%E6%80%81%E5%BA%93%E7%8E%AF%E5%A2%83">配置 OpenCV 动态库环境</a></li>
<li><a href="#%E9%85%8D%E7%BD%AE-pkg-config-%E7%8E%AF%E5%A2%83">配置 pkg-config 环境</a></li>
</ul>
</li>
<li><a href="#%E8%A7%A3%E5%86%B3%E7%BC%96%E8%AF%91%E6%97%B6%E5%87%BA%E7%8E%B0%E7%9A%84%E9%94%99%E8%AF%AF">解决编译时出现的错误</a>
<ul>
<li><a href="#boostdesc_bgmi-%E7%AD%89%E6%96%87%E4%BB%B6%E7%BC%BA%E5%A4%B1">boostdesc_bgm.i 等文件缺失</a></li>
</ul>
</li>
</ul>
<p>以 <code>opencv-4.5.1</code> 的版本为例</p>
<h1 id="编译命令" tabindex="-1"><a class="header-anchor" href="#编译命令" aria-hidden="true">#</a> 编译命令</h1>
<p>将下列内容写入一个脚本 <code>install-opencv4.sh</code> 中</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> -y upgrade

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y build-essential

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y cmake
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y <span class="token function">git</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y libgtk2.0-dev
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y pkg-config
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y libavcodec-dev
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y libavformat-dev 
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y libswscale-dev

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y python3-dev
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y python3-numpy

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y libtbb2
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y libtbb-dev
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y libjpeg-dev
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y libpng-dev
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y libtiff-dev
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y libjasper-dev
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y libdc1394-22-dev

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y ffmpeg <span class="token comment"># if ffmpeg needed</span>


<span class="token assign-left variable">ROOT_PATH</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">${ROOT_PATH}</span>

<span class="token builtin class-name">cd</span> opencv-4.5.1
<span class="token function">mkdir</span> build
<span class="token builtin class-name">cd</span> build

cmake <span class="token punctuation">\</span>
    -D <span class="token assign-left variable">CMAKE_BUILD_TYPE</span><span class="token operator">=</span>RELEASE <span class="token punctuation">\</span>
    -D <span class="token assign-left variable">CMAKE_INSTALL_PREFIX</span><span class="token operator">=</span>/usr/local/opencv4 <span class="token punctuation">\</span>
    -D <span class="token assign-left variable">OPENCV_GENERATE_PKGCONFIG</span><span class="token operator">=</span>YES <span class="token punctuation">\</span>
    -D <span class="token assign-left variable">BUILD_EXAMPLES</span><span class="token operator">=</span>OFF <span class="token punctuation">\</span>
    -D <span class="token assign-left variable">INSTALL_C_EXAMPLES</span><span class="token operator">=</span>OFF <span class="token punctuation">\</span>
    -D <span class="token assign-left variable">INSTALL_CXX_EXAMPLES</span><span class="token operator">=</span>OFF <span class="token punctuation">\</span>
    -D <span class="token assign-left variable">INSTALL_PYTHON_EXAMPLES</span><span class="token operator">=</span>OFF <span class="token punctuation">\</span>
    -D <span class="token assign-left variable">WITH_TBB</span><span class="token operator">=</span>ON <span class="token punctuation">\</span>
    -D <span class="token assign-left variable">WITH_V4L</span><span class="token operator">=</span>ON <span class="token punctuation">\</span>
    -D <span class="token assign-left variable">WITH_QT</span><span class="token operator">=</span>ON <span class="token punctuation">\</span>
    -D <span class="token assign-left variable">WITH_OPENGL</span><span class="token operator">=</span>ON <span class="token punctuation">\</span>
    -D <span class="token assign-left variable">WITH_CUDA</span><span class="token operator">=</span>ON <span class="token punctuation">\</span>
    -D <span class="token assign-left variable">OPENCV_EXTRA_MODULES_PATH</span><span class="token operator">=</span><span class="token variable">${ROOT_PATH}</span>/opencv_contrib-4.5.1/modules <span class="token punctuation">\</span>
    <span class="token punctuation">..</span>

<span class="token comment"># -D OPENCV_GENERATE_PKGCONFIG=YES: </span>
<span class="token comment"># OpenCV4以上版本默认不使用pkg-config</span>
<span class="token comment"># 该编译选项开启生成opencv4.pc文件，支持pkg-config功能</span>

<span class="token function">make</span> -j8

<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><p>然后运行脚本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">bash</span> ./install-opencv4.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>编译过程中可能会出现错误，具体解决方法可以参考 <a href="#%E8%A7%A3%E5%86%B3%E7%BC%96%E8%AF%91%E6%97%B6%E5%87%BA%E7%8E%B0%E7%9A%84%E9%94%99%E8%AF%AF">解决编译时出现的错误</a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>-- Set runtime path of <span class="token string">"/usr/local/opencv4/bin/opencv_version"</span> to <span class="token string">"/usr/local/opencv4/lib:/usr/local/cuda-11.0/lib64"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h1 id="配置环境" tabindex="-1"><a class="header-anchor" href="#配置环境" aria-hidden="true">#</a> 配置环境</h1>
<h2 id="配置-opencv-动态库环境" tabindex="-1"><a class="header-anchor" href="#配置-opencv-动态库环境" aria-hidden="true">#</a> 配置 OpenCV 动态库环境</h2>
<p>首先将OpenCV的库添加到路径：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/ld.so.conf.d/opencv.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>打开的可能是一个空白的文件，不用管，只需要在文件末尾一行添加：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/usr/local/opencv4/lib
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后使得刚才的配置路径生效</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> ldconfig
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>此时可能会报错 <code>&quot;/sbin/ldconfig.real: /usr/local/cuda-11.0/targets/x86_64-linux/lib/libcudnn.so.8 不是符号链接&quot;</code> ，但是可以不管，不影响使用。</p>
<h2 id="配置-pkg-config-环境" tabindex="-1"><a class="header-anchor" href="#配置-pkg-config-环境" aria-hidden="true">#</a> 配置 pkg-config 环境</h2>
<p>配置bash：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/bash.bashrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在文件末尾添加：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">PKG_CONFIG_PATH</span><span class="token operator">=</span><span class="token variable">$PKG_CONFIG_PATH</span>:/usr/local/opencv4/lib/pkgconfig
<span class="token builtin class-name">export</span> PKG_CONFIG_PATH
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>注意这里的路径以cmake时候设置的为准。</p>
<p>保存后需要激活一下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>建议对于用户级的环境 <code>~/.bashrc</code> 也配置一次，在 <code>~/.bashrc</code> 中添加上述内容</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vim</span> ~/.bashrc

<span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>验证是否配置完成：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pkg-config --libs opencv4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>输出结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>-L/usr/local/opencv4/lib -lopencv_world
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h1 id="解决编译时出现的错误" tabindex="-1"><a class="header-anchor" href="#解决编译时出现的错误" aria-hidden="true">#</a> 解决编译时出现的错误</h1>
<h2 id="boostdesc-bgm-i-等文件缺失" tabindex="-1"><a class="header-anchor" href="#boostdesc-bgm-i-等文件缺失" aria-hidden="true">#</a> boostdesc_bgm.i 等文件缺失</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">..</span>./opencv/opencv_contrib-4.5.1/modules/xfeatures2d/src/boostdesc.cpp:654:20: fatal error: boostdesc_bgm.i: 没有那个文件或目录
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">..</span>./opencv/opencv_contrib-4.5.1/modules/xfeatures2d/test/test_features2d.cpp:51:10: fatal error: features2d/test/test_detectors_regression.impl.hpp: 没有那个文件或目录
 <span class="token comment">#include "features2d/test/test_detectors_regression.impl.hpp"</span>
          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compilation terminated.
make<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: *** <span class="token punctuation">[</span>modules/xfeatures2d/CMakeFiles/opencv_test_xfeatures2d.dir/build.make:76：modules/xfeatures2d/CMakeFiles/opencv_test_xfeatures2d.dir/test/test_features2d.cpp.o<span class="token punctuation">]</span> 错误 <span class="token number">1</span>
make<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: *** 正在等待未完成的任务<span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">find</span> -name test_detectors_regression.impl.hpp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>发现</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./opencv-4.5.1/modules/features2d/test/test_detectors_regression.impl.hpp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>修改项目的 <code>CMakeLists.txt</code> 来实现的，简单暴力 的那种：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vim</span> opencv-4.5.1/CMakeLists.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在 573 行添加：</p>
<div class="language-txt ext-txt line-numbers-mode"><pre v-pre class="language-txt"><code>include_directories("modules")
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这就完成了！！</p>
</template>
