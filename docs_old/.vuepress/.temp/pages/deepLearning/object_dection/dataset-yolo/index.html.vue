<template><h1 id="基于目标检测的数据集制作" tabindex="-1"><a class="header-anchor" href="#基于目标检测的数据集制作" aria-hidden="true">#</a> 基于目标检测的数据集制作</h1>
<ul>
<li>
<p>[x] <a href="#%E6%95%B0%E6%8D%AE%E9%9B%86%E7%9A%84%E5%88%B6%E4%BD%9C">数据集的制作</a></p>
</li>
<li>
<p>[x] <a href="#%E5%9B%BE%E5%83%8F%E6%A0%87%E6%B3%A8">图像标注</a></p>
</li>
<li>
<p>[ ] <a href="#%E8%BD%AC%E6%8D%A2%E8%87%B3%E5%8F%AF%E8%AE%AD%E7%BB%83%E7%9A%84%E6%A0%87%E5%87%86%E6%95%B0%E6%8D%AE%E9%9B%86">转换至可训练的标准数据集</a></p>
<ul>
<li>[x] <a href="#%E8%BD%AC%E6%8D%A2%E6%88%90-VOC-%E6%A0%BC%E5%BC%8F">转换成 VOC 格式</a></li>
<li>[x] <a href="#%E8%BD%AC%E6%8D%A2%E6%88%90%E7%94%A8%E4%BA%8E-YOLOv5-%E7%9A%84-COCO-%E6%A0%BC%E5%BC%8F">转换成用于 YOLOv5 的 COCO 格式</a></li>
</ul>
</li>
<li>
<p>[ ] <a href="#%E5%BC%80%E6%BA%90%E6%95%B0%E6%8D%AE%E9%9B%86%E4%B8%8B%E8%BD%BD">开源数据集下载</a></p>
</li>
<li>
<p><a href="#%E5%9F%BA%E4%BA%8E%E7%9B%AE%E6%A0%87%E6%A3%80%E6%B5%8B%E7%9A%84%E6%95%B0%E6%8D%AE%E9%9B%86%E5%88%B6%E4%BD%9C">基于目标检测的数据集制作</a></p>
</li>
<li>
<p><a href="#notes">Notes</a></p>
</li>
<li>
<p><a href="#%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E4%B8%8E%E5%BD%92%E6%A1%A3">数据采集与归档</a></p>
</li>
<li>
<p><a href="#%E6%95%B0%E6%8D%AE%E9%9B%86%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">数据集配置文件</a></p>
</li>
<li>
<p><a href="#%E6%95%B0%E6%8D%AE%E9%A2%84%E5%A4%84%E7%90%86">数据预处理</a></p>
</li>
<li>
<p><a href="#%E6%95%B0%E6%8D%AE%E6%A0%87%E6%B3%A8">数据标注</a></p>
</li>
<li>
<p><a href="#%E8%BD%AC%E6%8D%A2%E8%87%B3%E5%8F%AF%E8%AE%AD%E7%BB%83%E7%9A%84%E6%A0%87%E5%87%86%E6%95%B0%E6%8D%AE%E9%9B%86">转换至可训练的标准数据集</a></p>
<ul>
<li><a href="#%E8%BD%AC%E6%8D%A2%E6%88%90-voc-%E6%A0%BC%E5%BC%8F">转换成 VOC 格式</a></li>
<li><a href="#%E8%BD%AC%E6%8D%A2%E6%88%90%E7%94%A8%E4%BA%8E-yolov5-%E7%9A%84-coco-%E6%A0%BC%E5%BC%8F">转换成用于 YOLOv5 的 COCO 格式</a></li>
</ul>
</li>
<li>
<p><a href="#%E5%9F%BA%E4%BA%8E%E8%A7%86%E9%A2%91%E7%9A%84%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86">基于视频的数据处理</a></p>
<ul>
<li><a href="#%E8%A7%86%E9%A2%91%E5%BD%95%E5%88%B6%E4%B8%8E%E6%96%87%E4%BB%B6%E5%BD%92%E6%A1%A3">视频录制与文件归档</a></li>
<li><a href="#matlab%E4%B8%AD%E5%A4%84%E7%90%86%E8%A7%86%E9%A2%91%E6%96%87%E4%BB%B6">matlab中处理视频文件</a></li>
<li><a href="#matlab%E6%95%B0%E6%8D%AE%E6%96%87%E4%BB%B6%E8%BD%AClabel%E6%A0%87%E6%B3%A8%E6%96%87%E4%BB%B6">matlab数据文件转label标注文件</a></li>
</ul>
</li>
</ul>
<h1 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h1>
<ul>
<li>需要说明的是，脚本只能按照标注进行分类的数据进行处理，如果一张图片有多个标注，是无法处理的</li>
</ul>
<h1 id="数据采集与归档" tabindex="-1"><a class="header-anchor" href="#数据采集与归档" aria-hidden="true">#</a> 数据采集与归档</h1>
<blockquote>
<p>首先要明确的是，该项目仅仅是脚本库，不包括数据集。</p>
</blockquote>
<p>将采集到的数据放置在 <code>dataset-custom/src</code> 目录下面，并且按照类别归档至对应文件夹下，参考的文件目如下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>·
└── dataset-custom  <span class="token comment"># 数据集文件夹</span>
    └── src         <span class="token comment"># 原始图片文件，按照文件夹分类</span>
        ├─ A        <span class="token comment"># 类别 A</span>
        ├─ B
        └─ <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote>
<p>必须保证原始数据都在 <code>src</code> 内，否则脚本无法自动化处理</p>
</blockquote>
<h1 id="数据集配置文件" tabindex="-1"><a class="header-anchor" href="#数据集配置文件" aria-hidden="true">#</a> 数据集配置文件</h1>
<p>为了便于对多个数据集进行操作，我们采用配置文件 <code>config/*.yaml</code> 对多个数据集进行配置</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">dataset</span><span class="token punctuation">:</span> ~/dataset/dataset<span class="token punctuation">-</span>custom

<span class="token key atrule">img_size</span><span class="token punctuation">:</span>
    <span class="token key atrule">width</span><span class="token punctuation">:</span> <span class="token number">1920</span>

<span class="token key atrule">trainset_percent</span><span class="token punctuation">:</span> <span class="token number">0.9</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>你可以参考 <code>config/custom.yaml</code> 新建一个 <code>config/custom.yaml</code> ，并将配置参数 <code>dataset </code>修改成对应目录即可，例如</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">dataset</span><span class="token punctuation">:</span> ~/dataset/dataset<span class="token punctuation">-</span>custom
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在运行脚本的时候，只要加上参数 <code>--conf config/custom.yaml</code> 就可以处理多个不同的文件夹，如果不添加额外参数，则默认配置文件为 <code>config/custom.yaml</code></p>
<h1 id="数据预处理" tabindex="-1"><a class="header-anchor" href="#数据预处理" aria-hidden="true">#</a> 数据预处理</h1>
<p>数据集的图片的大小不能太大，需要预先压缩尺寸</p>
<p>在配置文件 <code>config/custom.yaml</code> 中添加压缩后的图像大小，这里仅需要给定压缩后的图片</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">img_size</span><span class="token punctuation">:</span>
    <span class="token key atrule">height</span><span class="token punctuation">:</span> <span class="token number">640</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>执行 <code>scripts/resize.py</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>python3 scripts/resize.py <span class="token punctuation">[</span>--conf config/custom.yaml<span class="token punctuation">]</span> <span class="token punctuation">[</span>--not_rename<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>运行成功后，目录内全部文件会按照目录名进行重命名并且压缩数据集，并且在 <code>src</code> 同级目录下产生 <code>labeled</code> 目录，在这里进行标注，例如</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>·
└── dataset-custom <span class="token comment"># 数据集文件夹</span>
  ├── src         <span class="token comment"># 原始图片文件，按照文件夹分类</span>
  │ ├─ A        <span class="token comment"># 类别 A</span>
  │ ├─ B
  │ └─ <span class="token punctuation">..</span>.
  └─ labeled     <span class="token comment"># 压缩、重命名后的文件，在这里进行标注</span>
    ├─ A
    ├─ B
    └─ <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>labeled</code> 目录是用于后续步骤<a href="#%E6%95%B0%E6%8D%AE%E6%A0%87%E6%B3%A8">数据标注</a>的目录，这样我们可以在不破坏原始数据对情况下完成数据处理，如果不再需要原始数据，在完成此步骤后，可以删除 <code>src</code> 目录</p>
<h1 id="数据标注" tabindex="-1"><a class="header-anchor" href="#数据标注" aria-hidden="true">#</a> 数据标注</h1>
<p>在前面步骤中生成的 <code>labeled</code> 目录是用于数据标注的目录，你可以选择使用图像注释工具 labelImg 来快速进行标注。</p>
<p><a href="https://github.com/tzutalin/labelImg" target="_blank" rel="noopener noreferrer">labelImg<ExternalLinkIcon/></a> 是 Python 编写、基于 Qt 图形界面的软件，标注以 PASCAL VOC 格式（ImageNet 使用的格式）另存为 <code>.xml</code> 文件。此外，它还支持 YOLO 格式。</p>
<p>你可以通过从<a href="https://github.com/tzutalin/labelImg" target="_blank" rel="noopener noreferrer">源码编译<ExternalLinkIcon/></a>的方式安装，也可以通过 pip3 快速安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> labelImg
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装后，可以在命令行启动</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>labelImg
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在 Ubuntu 下启动后的界面如下（Windows 版本可能略有差异）
<img src="@source/deepLearning/object_dection/dataset-yolo/images/labelImg-start.png" alt="start"></p>
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
<img src="@source/deepLearning/object_dection/dataset-yolo/images/labelImg-rect-1.png" alt="rect"></p>
<p>每个类别都有对应的颜色加以区分
<img src="@source/deepLearning/object_dection/dataset-yolo/images/labelImg-rect-3.png" alt="rect"></p>
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
<h1 id="转换至可训练的标准数据集" tabindex="-1"><a class="header-anchor" href="#转换至可训练的标准数据集" aria-hidden="true">#</a> 转换至可训练的标准数据集</h1>
<p>当标注完成后，我们就需要将图像和标注文件转换为我们所需要的数据格式</p>
<ul>
<li>[x] <a href="#%E8%BD%AC%E6%8D%A2%E6%88%90-VOC-%E6%A0%BC%E5%BC%8F">转换成 VOC 格式</a></li>
<li>[x] <a href="#%E8%BD%AC%E6%8D%A2%E6%88%90%E7%94%A8%E4%BA%8E-YOLOv5-%E7%9A%84-COCO-%E6%A0%BC%E5%BC%8F">转换成用于 YOLOv5 的 COCO 格式</a></li>
</ul>
<h2 id="转换成-voc-格式" tabindex="-1"><a class="header-anchor" href="#转换成-voc-格式" aria-hidden="true">#</a> 转换成 VOC 格式</h2>
<p>制作过程由脚本自动完成</p>
<!-- **VOC2012** 数据集描述：
- **Annotations**: 存放了数据`xml`格式存储的标签，里面包含了每张图片的`bounding box`信息，主要用于**目标检测**。
- **ImageSets**: ImageSets中的Segmentation目录下存放了用于分割的train, val, trainval数据集的索引。
- **JPEGImages**: 这里存放的就是JPG格式的原图，包含17125张彩色图片，但只有一部分(2913张)是用于分割的。
- **SegmentationClass**: 语义分割任务中用到的label图片，PNG格式，共2913张，与原图的每一张图片相对应。
- **SegmentationObject**: 实例分割任务用到的label图片，在语义分割中用不到，这里不详解介绍。
--- -->
<ul>
<li>生成VOC格式的数据集空目录。在当前目录下，执行</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>python3 ./scripts/labeled-to-voc.py
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>生成类别文件 <code>classes.names</code> 和训练集文件 <code>train.txt</code> 、数据集文件 <code>val.txt</code></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>·
└── dataset-custom <span class="token comment"># 数据集文件夹</span>
  ├── src         <span class="token comment"># 原始图片文件，按照文件夹分类</span>
  │ ├─ A        <span class="token comment"># 类别 A</span>
  │ ├─ B
  │ └─ <span class="token punctuation">..</span>.
  ├─ labeled     <span class="token comment"># 压缩、重命名后的文件，在这里进行标注</span>
  │ ├─ A
  │ ├─ B
  │ └─ <span class="token punctuation">..</span>.
  ├─ VOC2012     <span class="token comment"># VOC 标准数据集，用于训练</span>
  └─ COCO        <span class="token comment"># COCO 标准数据集，用于训练</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="转换成用于-yolov5-的-coco-格式" tabindex="-1"><a class="header-anchor" href="#转换成用于-yolov5-的-coco-格式" aria-hidden="true">#</a> 转换成用于 YOLOv5 的 COCO 格式</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>python3 ./scripts/labeled-to-voc.py
python3 ./scripts/labeled-to-coco.py
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h1 id="基于视频的数据处理" tabindex="-1"><a class="header-anchor" href="#基于视频的数据处理" aria-hidden="true">#</a> 基于视频的数据处理</h1>
<h2 id="视频录制与文件归档" tabindex="-1"><a class="header-anchor" href="#视频录制与文件归档" aria-hidden="true">#</a> 视频录制与文件归档</h2>
<h2 id="matlab中处理视频文件" tabindex="-1"><a class="header-anchor" href="#matlab中处理视频文件" aria-hidden="true">#</a> matlab中处理视频文件</h2>
<h2 id="matlab数据文件转label标注文件" tabindex="-1"><a class="header-anchor" href="#matlab数据文件转label标注文件" aria-hidden="true">#</a> matlab数据文件转label标注文件</h2>
<p>运行脚本 <code>scripts/read_label_from_mat.py</code>，将视频目录下全部的<code>.label</code>文件转换成<code>labelImg</code>格式的<code>.jpg</code>、<code>.xml</code>文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>python3 scripts/read_label_from_mat.py
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>运行的时候会看到视频标注的过程，如果使用的时没有界面的服务器端，需要自行修改代码</p>
</blockquote>
<p>至此，就完成了视频文件的标注，接下来需要进行<a href="#%E8%BD%AC%E6%8D%A2%E8%87%B3%E5%8F%AF%E8%AE%AD%E7%BB%83%E7%9A%84%E6%A0%87%E5%87%86%E6%95%B0%E6%8D%AE%E9%9B%86">转换至可训练的标准数据集</a></p>
</template>
