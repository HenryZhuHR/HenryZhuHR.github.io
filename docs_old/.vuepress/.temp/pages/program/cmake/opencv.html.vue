<template><h1 id="从源码编译-opencv" tabindex="-1"><a class="header-anchor" href="#从源码编译-opencv" aria-hidden="true">#</a> 从源码编译 Opencv</h1>
<h1 id="编译opencv" tabindex="-1"><a class="header-anchor" href="#编译opencv" aria-hidden="true">#</a> 编译OpenCV</h1>
<p>对于OpenCV，我们选择从源码编译的方式。源码编译采用CMake，确保设备上安装了下面依赖：</p>
<ul>
<li><a href="https://cmake.org/download/" target="_blank" rel="noopener noreferrer">CMake<ExternalLinkIcon/></a></li>
<li>g++</li>
<li>wget</li>
</ul>
<p>在 <a href="https://github.com/opencv" target="_blank" rel="noopener noreferrer">Github<ExternalLinkIcon/></a> 上下载相同版本的 <a href="https://github.com/opencv/opencv" target="_blank" rel="noopener noreferrer">opencv<ExternalLinkIcon/></a> 和 <a href="https://github.com/opencv/opencv_contrib" target="_blank" rel="noopener noreferrer">opencv_contrib<ExternalLinkIcon/></a> 源码的 <strong>Release版本</strong></p>
<blockquote>
<p>OpenCV下载较慢，可以选择在国内<a href="https://www.bzblog.online/opencv/" target="_blank" rel="noopener noreferrer">镜像<ExternalLinkIcon/></a>里面下载（版本并不一定是最新的）</p>
</blockquote>
<p>下面是基于Opencv 4.5.3版本进行的。</p>
<p>已经测试过可以编译的版本:
<img src="https://img.shields.io/badge/Opencv-v4.5.1-blue" alt="Opencv-v4.5.1">
<img src="https://img.shields.io/badge/Opencv-v4.5.3-blue" alt="Opencv-v4.5.3"></p>
<p><strong>源码编译可以参考官方的编译教程 <a href="https://docs.opencv.org/4.5.2/d7/d9f/tutorial_linux_install.html" target="_blank" rel="noopener noreferrer">Installation in Linux<ExternalLinkIcon/></a>。</strong></p>
<p>在用CMake构建项目时，需要进行编译选项的配置，这些配置可以参考 <a href="https://docs.opencv.org/4.5.2/db/d05/tutorial_config_reference.html" target="_blank" rel="noopener noreferrer">OpenCV compile configuration options reference<ExternalLinkIcon/></a> 。有一些编译选项在官方也并没有列举出来，那么这时候，为了查看完整的编译选项，可以使用<code>cmake-gui</code>来构建项目，并且可以查看当前版本下全部编译选项。</p>
<p>下载完成后，请将 <a href="https://github.com/opencv/opencv" target="_blank" rel="noopener noreferrer">opencv<ExternalLinkIcon/></a> 和 <a href="https://github.com/opencv/opencv_contrib" target="_blank" rel="noopener noreferrer">opencv_contrib<ExternalLinkIcon/></a> 解压放置到同一目录下，并且新建一个<code>download</code>目录，然后将 <a href="docs/opencv">docs/opencv</a> 下的脚本文件，复制到相同目录下</p>
<p>例如在当前项目中的 <code>3rd-party</code> 目录下创建 <code>3rd-party/opencv</code> 目录（使用powershell脚本）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> 3rd-party/opencv
<span class="token builtin class-name">cd</span> 3rd-party/opencv
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>那么 <code>3rd-party/opencv</code> 的目录结构为</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">.</span>
├─download
├─opencv_contrib-<span class="token operator">&lt;</span>OpenCV_VERSION<span class="token operator">></span>
├─opencv-<span class="token operator">&lt;</span>OpenCV_VERSION<span class="token operator">></span>
├─build-opencv.bat    <span class="token comment"># script for windows </span>
├─build-opencv.sh     <span class="token comment"># script for linux/macOS</span>
└─<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote>
<p><code>&lt;OpenCV_VERSION&gt;</code> 需要修改为需要编译的opencv的版本</p>
</blockquote>
<p>之后就可以根据系统来开始编译Opencv</p>
<h3 id="为-linux-编译-opencv" tabindex="-1"><a class="header-anchor" href="#为-linux-编译-opencv" aria-hidden="true">#</a> 为 Linux 编译 Opencv</h3>
<h3 id="为-macos-编译-opencv" tabindex="-1"><a class="header-anchor" href="#为-macos-编译-opencv" aria-hidden="true">#</a> 为 MacOS 编译 Opencv</h3>
<h3 id="为-windows-编译-opencv" tabindex="-1"><a class="header-anchor" href="#为-windows-编译-opencv" aria-hidden="true">#</a> 为 Windows 编译 Opencv</h3>
<p>准备好上述文件后，我们开始进行“尝试”编译</p>
<div class="language-bat ext-bat line-numbers-mode"><pre v-pre class="language-bat"><code>cd opencv-&lt;OpenCV_VERSION&gt;
mkdir build
cd build
cmake .. -G &quot;MinGW Makefiles&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在上述cmake构建项目的过程中，你会在终端看到一些“不和谐”的输出：</p>
<div class="language-bat ext-bat line-numbers-mode"><pre v-pre class="language-bat"><code>-- FFMPEG: Download: ffmpeg_version.cmake
-- Try 1 failed
--
=======================================================================
  Couldn't download files from the Internet.
  Please check the Internet access on this host.
=======================================================================

CMake Warning at cmake/OpenCVDownload.cmake:202 (message):
  FFMPEG: Download failed: 6;&quot;Couldn't resolve host name&quot;

  For details please refer to the download log file:


  .../CMake/3rd-party/opencv/opencv-4.5.3/build/CMakeDownloadLog.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>这表示有一些文件没有被下载，这是由于“网速”原因。为了解决这个问题，你可以在 <a href="build/CMakeDownloadLog.txt">build/CMakeDownloadLog.txt</a> 文件中查看哪些文件需要被下载、下载链接以及放置目录，例如</p>
<div class="language-txt ext-txt line-numbers-mode"><pre v-pre class="language-txt"><code>#do_copy "ffmpeg_version.cmake" "8862c87496e2e8c375965e1277dee1c7" "https://raw.githubusercontent.com/opencv/opencv_3rdparty/213fcd5d4897319a83207406036c4a5957fba010/ffmpeg/ffmpeg_version.cmake" ".../CMake/3rd-party/opencv/opencv-4.5.3/build/3rdparty/ffmpeg"
#check_md5 ".../CMake/3rd-party/opencv/opencv-4.5.3/build/3rdparty/ffmpeg/ffmpeg_version.cmake"
#mismatch_md5 ".../CMake/3rd-party/opencv/opencv-4.5.3/build/3rdparty/ffmpeg/ffmpeg_version.cmake" "f8e65dbe4a3b4eedc0d2997e07c3f3fd"
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>找到 <code>#do_copy</code> 一行，会看到需要下载的文件<code>ffmpeg_version.cmake</code>，以及下载链接<code>https://raw.githubusercontent.com/.../ffmpeg_version.cmake</code>，并且可以看到需要将该文件放置到目录下<code>.../build/3rdparty/ffmpeg</code></p>
<p>通常会有如下文件需要下载：</p>
<!-- | 需要下载的文件及其链接                                                                                                                                                | 放置的位置                                             |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| [v0.1.1f.zip](https://github.com/opencv/ade/archive/v0.1.1f.zip)                                                                                                      | build/3rdparty/ade/v0.1.1f                             |
| [opencv_videoio_ffmpeg.dll](https://raw.githubusercontent.com/opencv/opencv_3rdparty/629590c3ba09fb0c8eaa9ab858ff13d3a84ca1aa/ffmpeg/opencv_videoio_ffmpeg.dll)       | `build/3rdparty/ffmpeg/opencv_videoio_ffmpeg.dll`      |
| [opencv_videoio_ffmpeg_64.dll](https://raw.githubusercontent.com/opencv/opencv_3rdparty/629590c3ba09fb0c8eaa9ab858ff13d3a84ca1aa/ffmpeg/opencv_videoio_ffmpeg_64.dll) | `build/3rdparty/ffmpeg/opencv_videoio_ffmpeg_64.dll`   |
| [ffmpeg_version.cmake](https://raw.githubusercontent.com/opencv/opencv_3rdparty/629590c3ba09fb0c8eaa9ab858ff13d3a84ca1aa/ffmpeg/ffmpeg_version.cmake)                 | `build/3rdparty/ffmpeg/ffmpeg_version.cmake`           |
| [detect.caffemodel](https://raw.githubusercontent.com/WeChatCV/opencv_3rdparty/a8b69ccc738421293254aec5ddb38bd523503252/detect.caffemodel)                            | `build/downloads/wechat_qrcode/detect.caffemodel`      |
| [detect.prototxt](https://raw.githubusercontent.com/WeChatCV/opencv_3rdparty/a8b69ccc738421293254aec5ddb38bd523503252/detect.prototxt)                                | `build/downloads/wechat_qrcode/detect.prototxt`        |
| [sr.caffemodel](https://raw.githubusercontent.com/WeChatCV/opencv_3rdparty/a8b69ccc738421293254aec5ddb38bd523503252/sr.caffemodel)                                    | `build/downloads/wechat_qrcode/sr.caffemodel`          |
| [sr.prototxt](https://raw.githubusercontent.com/WeChatCV/opencv_3rdparty/a8b69ccc738421293254aec5ddb38bd523503252/sr.prototxt)                                        | `build/downloads/wechat_qrcode`                        |
| [boostdesc_bgm.i](https://raw.githubusercontent.com/opencv/opencv_3rdparty/34e4206aef44d50e6bbcd0ab06354b52e7466d26/boostdesc_bgm.i)                                  | `build/downloads/xfeatures2d/boostdesc_bgm.i`          |
| [boostdesc_bgm_bi.i](https://raw.githubusercontent.com/opencv/opencv_3rdparty/34e4206aef44d50e6bbcd0ab06354b52e7466d26/boostdesc_bgm_bi.i)                            | `build/downloads/xfeatures2d/boostdesc_bgm_bi.i`       |
| [boostdesc_bgm_hd.i](https://raw.githubusercontent.com/opencv/opencv_3rdparty/34e4206aef44d50e6bbcd0ab06354b52e7466d26/boostdesc_bgm_hd.i)                            | `build/downloads/xfeatures2d/boostdesc_bgm_hd.i`       |
| [boostdesc_binboost_064.i](https://raw.githubusercontent.com/opencv/opencv_3rdparty/34e4206aef44d50e6bbcd0ab06354b52e7466d26/boostdesc_binboost_064.i)                | `build/downloads/xfeatures2d/boostdesc_binboost_064.i` |
| [boostdesc_binboost_128.i](https://raw.githubusercontent.com/opencv/opencv_3rdparty/34e4206aef44d50e6bbcd0ab06354b52e7466d26/boostdesc_binboost_128.i)                | `build/downloads/xfeatures2d/boostdesc_binboost_128.i` |
| [boostdesc_binboost_256.i](https://raw.githubusercontent.com/opencv/opencv_3rdparty/34e4206aef44d50e6bbcd0ab06354b52e7466d26/boostdesc_binboost_256.i)                | `build/downloads/xfeatures2d/boostdesc_binboost_256.i` |
| [boostdesc_lbgm.i](https://raw.githubusercontent.com/opencv/opencv_3rdparty/34e4206aef44d50e6bbcd0ab06354b52e7466d26/boostdesc_lbgm.i)                                | `build/downloads/xfeatures2d/boostdesc_lbgm.i`         |
| [vgg_generated_48.i](https://raw.githubusercontent.com/opencv/opencv_3rdparty/fccf7cd6a4b12079f73bbfb21745f9babcd4eb1d/vgg_generated_48.i)                            | `build/downloads/xfeatures2d/vgg_generated_48.i`       |
| [vgg_generated_64.i](https://raw.githubusercontent.com/opencv/opencv_3rdparty/fccf7cd6a4b12079f73bbfb21745f9babcd4eb1d/vgg_generated_64.i)                            | `build/downloads/xfeatures2d/vgg_generated_64.i`       |
| [vgg_generated_80.i](https://raw.githubusercontent.com/opencv/opencv_3rdparty/fccf7cd6a4b12079f73bbfb21745f9babcd4eb1d/vgg_generated_80.i)                            | `build/downloads/xfeatures2d/vgg_generated_80.i`       |
| [vgg_generated_120.i](https://raw.githubusercontent.com/opencv/opencv_3rdparty/fccf7cd6a4b12079f73bbfb21745f9babcd4eb1d/vgg_generated_120.i)                          | `build/downloads/xfeatures2d/vgg_generated_120.i`      |
| [face_landmark_model.dat](https://raw.githubusercontent.com/opencv/opencv_3rdparty/8afa57abc8229d611c4937165d20e2a2d9fc5a12/face_landmark_model.dat)                  | `build/testdata/cv/face//face_landmark_model.dat`      | -->
<ul>
<li><a href="https://github.com/opencv/ade/archive/v0.1.1f.zip" target="_blank" rel="noopener noreferrer">v0.1.1f.zip<ExternalLinkIcon/></a>: 解压到 <code>build/3rdparty/ade/v0.1.1f</code></li>
<li><a href="https://raw.githubusercontent.com/opencv/opencv_3rdparty/629590c3ba09fb0c8eaa9ab858ff13d3a84ca1aa/ffmpeg/opencv_videoio_ffmpeg.dll" target="_blank" rel="noopener noreferrer">opencv_videoio_ffmpeg.dll<ExternalLinkIcon/></a>: <code>build/3rdparty/ffmpeg/opencv_videoio_ffmpeg.dll</code></li>
<li><a href="https://raw.githubusercontent.com/opencv/opencv_3rdparty/629590c3ba09fb0c8eaa9ab858ff13d3a84ca1aa/ffmpeg/opencv_videoio_ffmpeg_64.dll" target="_blank" rel="noopener noreferrer">opencv_videoio_ffmpeg_64.dll<ExternalLinkIcon/></a>: <code>build/3rdparty/ffmpeg/opencv_videoio_ffmpeg_64.dll</code></li>
<li><a href="https://raw.githubusercontent.com/opencv/opencv_3rdparty/629590c3ba09fb0c8eaa9ab858ff13d3a84ca1aa/ffmpeg/ffmpeg_version.cmake" target="_blank" rel="noopener noreferrer">ffmpeg_version.cmake<ExternalLinkIcon/></a>: <code>build/3rdparty/ffmpeg/ffmpeg_version.cmake</code></li>
<li><a href="https://raw.githubusercontent.com/WeChatCV/opencv_3rdparty/a8b69ccc738421293254aec5ddb38bd523503252/detect.caffemodel" target="_blank" rel="noopener noreferrer">detect.caffemodel<ExternalLinkIcon/></a>: <code>build/downloads/wechat_qrcode/detect.caffemodel</code></li>
<li><a href="https://raw.githubusercontent.com/WeChatCV/opencv_3rdparty/a8b69ccc738421293254aec5ddb38bd523503252/detect.prototxt" target="_blank" rel="noopener noreferrer">detect.prototxt<ExternalLinkIcon/></a>: <code>build/downloads/wechat_qrcode/detect.prototxt</code></li>
<li><a href="https://raw.githubusercontent.com/WeChatCV/opencv_3rdparty/a8b69ccc738421293254aec5ddb38bd523503252/sr.caffemodel" target="_blank" rel="noopener noreferrer">sr.caffemodel<ExternalLinkIcon/></a>: <code>build/downloads/wechat_qrcode/sr.caffemodel</code></li>
<li><a href="https://raw.githubusercontent.com/WeChatCV/opencv_3rdparty/a8b69ccc738421293254aec5ddb38bd523503252/sr.prototxt" target="_blank" rel="noopener noreferrer">sr.prototxt<ExternalLinkIcon/></a>: <code>build/downloads/wechat_qrcode</code></li>
<li><a href="https://raw.githubusercontent.com/opencv/opencv_3rdparty/34e4206aef44d50e6bbcd0ab06354b52e7466d26/boostdesc_bgm.i" target="_blank" rel="noopener noreferrer">boostdesc_bgm.i<ExternalLinkIcon/></a>: <code>build/downloads/xfeatures2d/boostdesc_bgm.i</code></li>
<li><a href="https://raw.githubusercontent.com/opencv/opencv_3rdparty/34e4206aef44d50e6bbcd0ab06354b52e7466d26/boostdesc_bgm_bi.i" target="_blank" rel="noopener noreferrer">boostdesc_bgm_bi.i<ExternalLinkIcon/></a>: <code>build/downloads/xfeatures2d/boostdesc_bgm_bi.i</code></li>
<li><a href="https://raw.githubusercontent.com/opencv/opencv_3rdparty/34e4206aef44d50e6bbcd0ab06354b52e7466d26/boostdesc_bgm_hd.i" target="_blank" rel="noopener noreferrer">boostdesc_bgm_hd.i<ExternalLinkIcon/></a>: <code>build/downloads/xfeatures2d/boostdesc_bgm_hd.i</code></li>
<li><a href="https://raw.githubusercontent.com/opencv/opencv_3rdparty/34e4206aef44d50e6bbcd0ab06354b52e7466d26/boostdesc_binboost_064.i" target="_blank" rel="noopener noreferrer">boostdesc_binboost_064.i<ExternalLinkIcon/></a>: <code>build/downloads/xfeatures2d/boostdesc_binboost_064.i</code></li>
<li><a href="https://raw.githubusercontent.com/opencv/opencv_3rdparty/34e4206aef44d50e6bbcd0ab06354b52e7466d26/boostdesc_binboost_128.i" target="_blank" rel="noopener noreferrer">boostdesc_binboost_128.i<ExternalLinkIcon/></a>: <code>build/downloads/xfeatures2d/boostdesc_binboost_128.i</code></li>
<li><a href="https://raw.githubusercontent.com/opencv/opencv_3rdparty/34e4206aef44d50e6bbcd0ab06354b52e7466d26/boostdesc_binboost_256.i" target="_blank" rel="noopener noreferrer">boostdesc_binboost_256.i<ExternalLinkIcon/></a>: <code>build/downloads/xfeatures2d/boostdesc_binboost_256.i</code></li>
<li><a href="https://raw.githubusercontent.com/opencv/opencv_3rdparty/34e4206aef44d50e6bbcd0ab06354b52e7466d26/boostdesc_lbgm.i" target="_blank" rel="noopener noreferrer">boostdesc_lbgm.i<ExternalLinkIcon/></a>: <code>build/downloads/xfeatures2d/boostdesc_lbgm.i</code></li>
<li><a href="https://raw.githubusercontent.com/opencv/opencv_3rdparty/fccf7cd6a4b12079f73bbfb21745f9babcd4eb1d/vgg_generated_48.i" target="_blank" rel="noopener noreferrer">vgg_generated_48.i<ExternalLinkIcon/></a>: <code>build/downloads/xfeatures2d/vgg_generated_48.i</code></li>
<li><a href="https://raw.githubusercontent.com/opencv/opencv_3rdparty/fccf7cd6a4b12079f73bbfb21745f9babcd4eb1d/vgg_generated_64.i" target="_blank" rel="noopener noreferrer">vgg_generated_64.i<ExternalLinkIcon/></a>: <code>build/downloads/xfeatures2d/vgg_generated_64.i</code></li>
<li><a href="https://raw.githubusercontent.com/opencv/opencv_3rdparty/fccf7cd6a4b12079f73bbfb21745f9babcd4eb1d/vgg_generated_80.i" target="_blank" rel="noopener noreferrer">vgg_generated_80.i<ExternalLinkIcon/></a>: <code>build/downloads/xfeatures2d/vgg_generated_80.i</code></li>
<li><a href="https://raw.githubusercontent.com/opencv/opencv_3rdparty/fccf7cd6a4b12079f73bbfb21745f9babcd4eb1d/vgg_generated_120.i" target="_blank" rel="noopener noreferrer">vgg_generated_120.i<ExternalLinkIcon/></a>: <code>build/downloads/xfeatures2d/vgg_generated_120.i</code></li>
<li><a href="https://raw.githubusercontent.com/opencv/opencv_3rdparty/8afa57abc8229d611c4937165d20e2a2d9fc5a12/face_landmark_model.dat" target="_blank" rel="noopener noreferrer">face_landmark_model.dat<ExternalLinkIcon/></a>: <code>build/testdata/cv/face//face_landmark_model.dat</code>
--&gt;</li>
</ul>
<p>如果将上述文件下载后，放置到与编译脚本 <code>build-opencv.*</code> 同级的目录 <code>download</code> 下，就可以很方便的用脚本进行编译</p>
<p>编译前请仔细查看<a href="docs/opencv/build-opencv.sh">编译脚本<code>opencv/build-opencv.*</code></a>，需要修改：</p>
<ul>
<li>OpenCV的版本 <code>OPENCV_VERSION</code></li>
<li><strong>CMake的编译选项 <code>-D</code>，可以参考 <a href="https://docs.opencv.org/4.5.2/db/d05/tutorial_config_reference.html" target="_blank" rel="noopener noreferrer">OpenCV compile configuration options reference<ExternalLinkIcon/></a> 。</strong><br>
有一些编译选项在官方也并没有列举出来，那么这时候，为了查看完整的编译选项，可以使用<code>cmake-gui</code>来构建项目，并且可以通过UI界面来查看当前版本下全部编译选项。<br>
比较重要的几个编译选项，例如：
<ul>
<li><code>-D CMAKE_INSTALL_PREFIX=~/Programs/opencv</code>: <strong>Opencv需要安装的位置</strong>（这里推荐安装到用户目录下），便于之后CMake项目链接OpenCV库</li>
<li><code>-D BUILD_opencv_python2=OFF</code>,<code>-D BUILD_opencv_python3=OFF</code>: 该项目不编译python版本的opencv，如果需要为python安装opencv，建议<code>pip3 install opencv-python</code>，如果需要处理与视频相关的操作，那么才需要用该项目编译python版本的opencv</li>
</ul>
</li>
<li><strong>编译使用的线程数<code>-j</code></strong>，默认是8线程编译<code>make -j8</code>，根据电脑配置进行修改，单线程则是<code>make</code>，十六线程则是<code>make -j16</code>。<strong>当出现编译错误的时候，首先考虑修改编译线程数为单线程编译，重新进行编译，有概率能够解决问题。</strong></li>
</ul>
<p>Windows下脚本 <code>build-opencv.bat</code> 内容</p>
<div class="language-bat ext-bat line-numbers-mode"><pre v-pre class="language-bat"><code>set CV_VERSION=4.5.3

set HOME=%cd%

cd opencv-%CV_VERSION%

md build

md build\3rdparty\ade
copy ..\download\ade*.zip build\3rdparty\ade\
cd %HOME%\opencv-%CV_VERSION%\build\3rdparty\ade
unzip -o ade*.zip
rename ade-0.1.1f v0.1.1f
cd %HOME%\opencv-%CV_VERSION%

md build\3rdparty\ffmpeg
copy ..\download\*.cmake build\3rdparty\ffmpeg\
copy ..\download\*.dll  build\3rdparty\ffmpeg\

md build\downloads\wechat_qrcode
copy ..\download\*.caffemodel   build\downloads\wechat_qrcode
copy ..\download\*.prototxt     build\downloads\wechat_qrcode

md build\downloads\xfeatures2d\
copy ..\download\*.i build\downloads\xfeatures2d\

md build\testdata\cv\face\
copy ..\download\face_landmark_model.dat build\testdata\cv\face\

cd build

cmake .. ^
    -G &quot;MinGW Makefiles&quot; ^
    -D CMAKE_INSTALL_PREFIX=&quot;~/Programs/opencv&quot; ^
    -D OPENCV_EXTRA_MODULES_PATH=&quot;%HOME%/opencv_contrib-%CV_VERSION%/modules&quot; ^
    -D OPENCV_GENERATE_PKGCONFIG=ON ^
    -D CMAKE_BUILD_TYPE=Release ^
    -DBUILD_opencv_python2=OFF ^
    -DBUILD_opencv_python3=OFF ^
    -D BUILD_SHARED_LIBS=OFF ^
    -D WITH_CUDA=OFF ^
    -D OPENCV_DNN_CUDA=OFF ^
    -D WITH_ONNX=ON ^
    -D WITH_1394=OFF
make -j8
make install
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>修改脚本以适配你的设备，随后可以简单的用脚本进行编译：</p>
<div class="language-bat ext-bat line-numbers-mode"><pre v-pre class="language-bat"><code>./build-opencv.bat
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>编译完成之后需要检查安装目录，也就是编译选项中的<code>CMAKE_INSTALL_PREFIX</code> (<code>~/Programs/opencv</code>)，安装目录应该如下：</p>
<div class="language-bat ext-bat line-numbers-mode"><pre v-pre class="language-bat"><code>.
├─bin
├─etc
├─include
├─x64
├─LICENSE
├─OpenCVConfig.cmake
├─OpenCVConfig-version.cmake
└─setup_vars_opencv4.cmd
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>其中<code>OpenCVConfig.cmake</code>和<code>OpenCVConfig-version.cmake</code>是非常重要的两个文件，CMake能够链接到OpenCV库就是寻找这两个文件。<code>setup_vars_opencv4.cmd</code>是设置OpenCV环境变量的脚本</p>
<h1 id="链接opencv到项目中" tabindex="-1"><a class="header-anchor" href="#链接opencv到项目中" aria-hidden="true">#</a> 链接OpenCV到项目中</h1>
<!-- 在CＭake项目中使用参考 [Cmake+OpenCV 模板](templates/with-opencv) --></template>
