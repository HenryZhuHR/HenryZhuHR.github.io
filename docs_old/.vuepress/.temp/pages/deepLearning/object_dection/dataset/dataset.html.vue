<template><h1 id="目标检测数据集" tabindex="-1"><a class="header-anchor" href="#目标检测数据集" aria-hidden="true">#</a> 目标检测数据集</h1>
<ul>
<li><a href="#%E7%9B%AE%E6%A0%87%E6%A3%80%E6%B5%8B%E6%95%B0%E6%8D%AE%E9%9B%86">目标检测数据集</a>
<ul>
<li><a href="#%E6%95%B0%E6%8D%AE%E9%9B%86%E5%88%B6%E4%BD%9C">数据集制作</a>
<ul>
<li><a href="#%E6%95%B0%E6%8D%AE%E6%90%9C%E9%9B%86%E4%B8%8E%E5%BD%92%E6%A1%A3">数据搜集与归档</a></li>
<li><a href="#%E6%95%B0%E6%8D%AE%E9%A2%84%E5%A4%84%E7%90%86">数据预处理</a></li>
</ul>
</li>
<li><a href="#%E6%95%B0%E6%8D%AE%E6%A0%87%E6%B3%A8">数据标注</a></li>
</ul>
</li>
</ul>
<p>目标检测数据集有两类</p>
<ol>
<li><strong>单目标数据集</strong> 指的是数据集中每一张图片中仅有一个目标</li>
<li><strong>多目标数据集</strong> 指的是数据集中每一张图片中有多个目标（可以是同类目标也可以是不同类的目标）</li>
</ol>
<p>在处理这两种数据的思路上略有不同</p>
<h2 id="数据集制作" tabindex="-1"><a class="header-anchor" href="#数据集制作" aria-hidden="true">#</a> 数据集制作</h2>
<p>下面假设数据集命名为 <code>dataset-custom</code> ，可以根据实际情况修改</p>
<h3 id="数据搜集与归档" tabindex="-1"><a class="header-anchor" href="#数据搜集与归档" aria-hidden="true">#</a> 数据搜集与归档</h3>
<p>将采集到的数据放置在 <code>dataset-custom/src</code> 目录下面，并且按照类别归档至对应文件夹下，参考的文件目如下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>·
└── dataset-custom  <span class="token comment"># dataset directory</span>
    └── src         <span class="token comment"># source images directory</span>
        ├─ A        <span class="token comment"># class A</span>
        ├─ B        <span class="token comment"># class B</span>
        └─ <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="数据预处理" tabindex="-1"><a class="header-anchor" href="#数据预处理" aria-hidden="true">#</a> 数据预处理</h3>
<p>一般用于训练的图片不会超过 1920*1080 的大小，所以需要对图像进行预处理，包括</p>
<ol>
<li>图像压缩大小 （等比例压缩，不改变原始图像的比例）</li>
<li>按照 <code>类名+编号</code> 文件重命名</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>·
└── dataset-custom  <span class="token comment"># dataset directory</span>
    └── src           --<span class="token operator">></span>   labeled
        ├─ A          --<span class="token operator">></span>   ├─A
        │ ├ ****.jpg  --<span class="token operator">></span>   │ ├ A-0001.jpg <span class="token punctuation">(</span><span class="token number">1920</span>*1080<span class="token punctuation">)</span>
        │ ├ ****.jpg  --<span class="token operator">></span>   │ ├ A-0002.jpg <span class="token punctuation">(</span><span class="token number">1920</span>*1080<span class="token punctuation">)</span>
        │ └─ <span class="token punctuation">..</span>.            │ └─  <span class="token punctuation">..</span>.
        ├─ B          --<span class="token operator">></span>   ├─ B
        └─ <span class="token punctuation">..</span>.              └─ <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>处理完成后得到 <code>labeled</code> 的目录</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>·
└── dataset-custom  <span class="token comment"># dataset directory</span>
  ├── src           <span class="token comment"># source images directory</span>
  │ ├─ A            <span class="token comment"># class A</span>
  │ ├─ B            <span class="token comment"># class B</span>
  │ └─ <span class="token punctuation">..</span>.
  └─ labeled        <span class="token comment"># preprocess</span>
    ├─ A
    ├─ B
    └─ <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>labeled</code> 目录是用于后续步骤<a href="#%E6%95%B0%E6%8D%AE%E6%A0%87%E6%B3%A8">数据标注</a>的目录，这样我们可以在不破坏原始数据对情况下完成数据处理，如果不再需要原始数据，在完成此步骤后，可以删除 <code>src</code> 目录</p>
<h2 id="数据标注" tabindex="-1"><a class="header-anchor" href="#数据标注" aria-hidden="true">#</a> 数据标注</h2>
<p>在前面步骤中生成的 <code>labeled</code> 目录是用于数据标注的目录，你可以选择使用图像注释工具 labelImg 来快速进行标注。</p>
<p><a href="https://github.com/tzutalin/labelImg" target="_blank" rel="noopener noreferrer">labelImg<ExternalLinkIcon/></a> 是 Python 编写、基于 Qt 图形界面的软件，标注以 <code>PASCAL VOC</code> 格式（ImageNet 使用的格式）另存为 <code>.xml</code> 文件。</p>
<blockquote>
<p>此外，它还支持 <code>YOLO</code>, <code>CreateML</code> 格式。但是实际标注的时候仍然推荐使用 <code>PASCAL VOC</code> 格式进行标准，然后将 <code>PASCAL VOC</code> 格式转换成其他格式的数据</p>
</blockquote>
<p>通过 <code>pip3</code> 安装 (或<a href="https://github.com/tzutalin/labelImg" target="_blank" rel="noopener noreferrer">源码编译<ExternalLinkIcon/></a>的方式)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip3 <span class="token function">install</span> labelImg
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>某些新架构的芯片可能出现 <code>pyqt5</code> 安装失败的情况，需要借助 <a href="https://brew.sh" target="_blank" rel="noopener noreferrer"><code>brew</code><ExternalLinkIcon/></a> 来<a href="https://formulae.brew.sh/formula/pyqt#default" target="_blank" rel="noopener noreferrer">安装<ExternalLinkIcon/></a></p>
</blockquote>
<p>安装后，可以在命令行启动</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>labelImg
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>启动界面如下
<img src="@source/deepLearning/object_dection/dataset/images/labelImg-start.png" alt="start"></p>
<!-- ![start](./images/labelImg-start-1.png) -->
<ul>
<li>打开文件 : 标注单张图像（不推荐使用）</li>
<li><strong>打开目录</strong> : 打开数据集存放的目录，目录下应该是图像的位置</li>
<li><strong>改变存放目录</strong>: 标注文件 <code>.xml</code> 存放的目录</li>
<li>下一个图片:</li>
<li>上一个图像:</li>
<li><strong>验证图像</strong>: 验证标记无误，用于全部数据集标记完成后的检查工作</li>
<li><strong>保存</strong>: 保存标记结果，快捷键 <code>Ctrl+s</code></li>
<li><strong>数据集格式</strong>: <code>PascalVOC</code> 和 <code>YOLO</code> 可选，一般选择 <code>PascalVOC</code> 即可，需要 <code>YOLO</code> 可以之后进行转换</li>
</ul>
<p>点击 <code>创建区块</code> 创建一个 矩形框，画出范围
<img src="@source/deepLearning/object_dection/dataset/images/labelImg-rect-1.png" alt="rect"></p>
<p>每个类别都有对应的颜色加以区分
<img src="@source/deepLearning/object_dection/dataset/images/labelImg-rect-3.png" alt="rect"></p>
<p>完成一张图片的标注后，点击 <code>下一个图片</code></p>
<ul>
<li>labelImg 快捷键</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">快捷键</th>
<th style="text-align:center">功能</th>
<th style="text-align:center">快捷键</th>
<th style="text-align:center">功能</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Ctrl+u</td>
<td style="text-align:center">从目录加载所有图像</td>
<td style="text-align:center">w</td>
<td style="text-align:center">创建一个矩形框</td>
</tr>
<tr>
<td style="text-align:center">Ctrl+R</td>
<td style="text-align:center">更改默认注释目标目录</td>
<td style="text-align:center">d</td>
<td style="text-align:center">下一张图片</td>
</tr>
<tr>
<td style="text-align:center">Ctrl+s</td>
<td style="text-align:center">保存当前标注结果</td>
<td style="text-align:center">a</td>
<td style="text-align:center">上一张图片</td>
</tr>
<tr>
<td style="text-align:center">Ctrl+d</td>
<td style="text-align:center">复制当前标签和矩形框</td>
<td style="text-align:center">del</td>
<td style="text-align:center">删除选定的矩形框</td>
</tr>
<tr>
<td style="text-align:center">space</td>
<td style="text-align:center">将当前图像标记为已验证</td>
<td style="text-align:center">Ctrl+</td>
<td style="text-align:center">放大</td>
</tr>
<tr>
<td style="text-align:center">↑→↓←</td>
<td style="text-align:center">键盘箭头移动选定的矩形框</td>
<td style="text-align:center">Ctrl–</td>
<td style="text-align:center">缩小</td>
</tr>
</tbody>
</table>
</template>
