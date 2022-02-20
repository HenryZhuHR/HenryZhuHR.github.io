<template><h1 id="ubuntu-配置-cuda-cudnn-环境" tabindex="-1"><a class="header-anchor" href="#ubuntu-配置-cuda-cudnn-环境" aria-hidden="true">#</a> Ubuntu 配置 CUDA + cuDNN 环境</h1>
<ul>
<li><a href="#ubuntu-%E9%85%8D%E7%BD%AE-cuda--cudnn-%E7%8E%AF%E5%A2%83">Ubuntu 配置 CUDA + cuDNN 环境</a>
<ul>
<li><a href="#nvidia-%E9%A9%B1%E5%8A%A8%E5%AE%89%E8%A3%85">Nvidia 驱动安装</a></li>
<li><a href="#cuda-%E5%AE%89%E8%A3%85">CUDA 安装</a>
<ul>
<li><a href="#deblocal%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F">deb(local)安装方式</a></li>
<li><a href="#debnetwork%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F">deb(network)安装方式</a></li>
<li><a href="#runfilelocal%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F">runfile(local)安装方式</a></li>
</ul>
</li>
<li><a href="#%E9%85%8D%E7%BD%AE-cuda-%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">配置 CUDA 环境变量</a></li>
<li><a href="#%E5%8D%B8%E8%BD%BD-cuda">卸载 CUDA</a></li>
<li><a href="#cudnn%E5%AE%89%E8%A3%85">cuDNN安装</a></li>
</ul>
</li>
</ul>
<h2 id="nvidia-驱动安装" tabindex="-1"><a class="header-anchor" href="#nvidia-驱动安装" aria-hidden="true">#</a> Nvidia 驱动安装</h2>
<p>检查自己的电脑是否有 Nvidia 的独立显卡，可以在 <code>NVIDA X Server Settings</code> 中看到自己的显卡信息</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nvidia-settings
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="@source/linux/nvidia/images/nvidia-settings.png" alt="nvidia-settings"></p>
<p><img src="@source/linux/nvidia/images/nvidia-settings-gpu.png" alt="nvidia-settings"></p>
<p>以及英伟达系统管理接口（NVIDIA System Management Interface, 简称 nvidia-smi）。这是是基于NVIDIA Management Library (NVML) 的命令行管理组件,旨在(intened to )帮助管理和监控NVIDIA GPU设备。<br>
可以查看GPU使用情况，<code>-l</code>可以实时刷新</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ nvidia-smi 
Tue Jan  <span class="token number">5</span> <span class="token number">20</span>:42:59 <span class="token number">2021</span>       
+-----------------------------------------------------------------------------+
<span class="token operator">|</span> NVIDIA-SMI <span class="token number">455.38</span>       Driver Version: <span class="token number">455.38</span>       CUDA Version: <span class="token number">11.1</span>     <span class="token operator">|</span>
<span class="token operator">|</span>-------------------------------+----------------------+----------------------+
<span class="token operator">|</span> GPU  Name        Persistence-M<span class="token operator">|</span> Bus-Id        Disp.A <span class="token operator">|</span> Volatile Uncorr. ECC <span class="token operator">|</span>
<span class="token operator">|</span> Fan  Temp  Perf  Pwr:Usage/Cap<span class="token operator">|</span>         Memory-Usage <span class="token operator">|</span> GPU-Util  Compute M. <span class="token operator">|</span>
<span class="token operator">|</span>                               <span class="token operator">|</span>                      <span class="token operator">|</span>               MIG M. <span class="token operator">|</span>
<span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">|</span>
<span class="token operator">|</span>   <span class="token number">0</span>  GeForce MX250       Off  <span class="token operator">|</span> 00000000:01:00.0 Off <span class="token operator">|</span>                  N/A <span class="token operator">|</span>
<span class="token operator">|</span> N/A   50C    P3    N/A /  N/A <span class="token operator">|</span>    447MiB /  2002MiB <span class="token operator">|</span>      <span class="token number">3</span>%      Default <span class="token operator">|</span>
<span class="token operator">|</span>                               <span class="token operator">|</span>                      <span class="token operator">|</span>                  N/A <span class="token operator">|</span>
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
<span class="token operator">|</span> Processes:                                                                  <span class="token operator">|</span>
<span class="token operator">|</span>  GPU   GI   CI        PID   Type   Process name                  GPU Memory <span class="token operator">|</span>
<span class="token operator">|</span>        ID   ID                                                   Usage      <span class="token operator">|</span>
<span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">|</span>
<span class="token operator">|</span>    <span class="token number">0</span>   N/A  N/A      <span class="token number">1109</span>      G   /usr/lib/xorg/Xorg                 61MiB <span class="token operator">|</span>
<span class="token operator">|</span>    <span class="token number">0</span>   N/A  N/A      <span class="token number">1656</span>      G   /usr/lib/xorg/Xorg                190MiB <span class="token operator">|</span>
<span class="token operator">|</span>    <span class="token number">0</span>   N/A  N/A      <span class="token number">1830</span>      G   /usr/bin/gnome-shell               55MiB <span class="token operator">|</span>
<span class="token operator">|</span>    <span class="token number">0</span>   N/A  N/A      <span class="token number">3382</span>      G   <span class="token punctuation">..</span>.AAAAAAAAA<span class="token operator">=</span> --shared-files      101MiB <span class="token operator">|</span>
<span class="token operator">|</span>    <span class="token number">0</span>   N/A  N/A      <span class="token number">3734</span>      G   <span class="token punctuation">..</span>.gAAAAAAAAA --shared-files       28MiB <span class="token operator">|</span>
+-----------------------------------------------------------------------------+
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>我们可以看到我们显卡的型号 <code>GeForce MX250</code>，显存大小及使用情况 <code>447MiB /  2002MiB</code>，驱动版本 <code>Driver Version: 455.38</code> 及 CUDA 版本 <code>CUDA Version: 11.1 </code></p>
<p>查看 GPU 和推荐的驱动版本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ubuntu-drivers devices
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后进行自动安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> ubuntu-drivers autoinstall
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="cuda-安装" tabindex="-1"><a class="header-anchor" href="#cuda-安装" aria-hidden="true">#</a> CUDA 安装</h2>
<p>到<a href="https://developer.nvidia.com/" target="_blank" rel="noopener noreferrer">NVIDIA官网<ExternalLinkIcon/></a>下载<a href="https://developer.nvidia.com/cuda-toolkit-archive" target="_blank" rel="noopener noreferrer">CUDA toolkit<ExternalLinkIcon/></a>，如果有需要可以参考阅读<a href="https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html" target="_blank" rel="noopener noreferrer">cuda toolkit release notes<ExternalLinkIcon/></a></p>
<p>Ubuntu下有三种安装方式</p>
<ul>
<li>[x] <a href="#deblocal%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F">deb(local)安装方式</a></li>
<li>[x] <a href="#debnetwork%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F">deb(network)安装方式</a></li>
<li>[x] <a href="#runfilelocal%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F">runfile(local)安装方式</a></li>
</ul>
<blockquote>
<p>如果需要安装TensorRT，貌似必须使用<a href="#deblocal%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F"><code>deb(local)</code></a>方式安装，这种安装方式非常简单，只需要按照命令即可，并且<strong>强烈推荐这种安装方式</strong></p>
</blockquote>
<h3 id="deb-local-安装方式" tabindex="-1"><a class="header-anchor" href="#deb-local-安装方式" aria-hidden="true">#</a> deb(local)安装方式</h3>
<p>选择好需要安装的<a href="https://developer.nvidia.com/cuda-toolkit-archive" target="_blank" rel="noopener noreferrer">CUDA toolkit<ExternalLinkIcon/></a>版本，再选择好对应系统、架构、发行版本及其版本、安装方式，安装对应命令即可</p>
<p><img src="@source/linux/nvidia/images/cuda-install-deb.png" alt="cuda-install-deb"></p>
<p>例如，<code>x86_64</code>架构下的<code>Ubuntu 20.04</code>通过<code>deb(local)</code>的方式安装<code>CUDA 11.4</code>的命令如下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/cuda-ubuntu2004.pin
<span class="token function">sudo</span> <span class="token function">mv</span> cuda-ubuntu2004.pin /etc/apt/preferences.d/cuda-repository-pin-600
<span class="token function">wget</span> https://developer.download.nvidia.com/compute/cuda/11.4.0/local_installers/cuda-repo-ubuntu2004-11-4-local_11.4.0-470.42.01-1_amd64.deb
<span class="token function">sudo</span> dpkg -i cuda-repo-ubuntu2004-11-4-local_11.4.0-470.42.01-1_amd64.deb
<span class="token function">sudo</span> apt-key <span class="token function">add</span> /var/cuda-repo-ubuntu2004-11-4-local/7fa2af80.pub
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> -y <span class="token function">install</span> cuda
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="deb-network-安装方式" tabindex="-1"><a class="header-anchor" href="#deb-network-安装方式" aria-hidden="true">#</a> deb(network)安装方式</h3>
<p>选择好需要安装的<a href="https://developer.nvidia.com/cuda-toolkit-archive" target="_blank" rel="noopener noreferrer">CUDA toolkit<ExternalLinkIcon/></a>版本，再选择好对应系统、架构、发行版本及其版本、安装方式，安装对应命令即可</p>
<p>例如，<code>x86_64</code>架构下的<code>Ubuntu 20.04</code>通过<code>deb(network)</code>的方式安装<code>CUDA 11.4</code>的命令如下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/cuda-ubuntu2004.pin
<span class="token function">sudo</span> <span class="token function">mv</span> cuda-ubuntu2004.pin /etc/apt/preferences.d/cuda-repository-pin-600
<span class="token function">sudo</span> apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/7fa2af80.pub
<span class="token function">sudo</span> add-apt-repository <span class="token string">"deb https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/ /"</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> -y <span class="token function">install</span> cuda
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="runfile-local-安装方式" tabindex="-1"><a class="header-anchor" href="#runfile-local-安装方式" aria-hidden="true">#</a> runfile(local)安装方式</h3>
<p>选择好需要安装的<a href="https://developer.nvidia.com/cuda-toolkit-archive" target="_blank" rel="noopener noreferrer">CUDA toolkit<ExternalLinkIcon/></a>版本，再选择好对应系统、架构、发行版本及其版本、安装方式，安装对应命令即可
例如，<code>x86_64</code>架构下的<code>Ubuntu 20.04</code>通过<code>runfile(network)</code>的方式安装<code>CUDA 11.4</code>的命令如下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://developer.download.nvidia.com/compute/cuda/11.4.0/local_installers/cuda_11.4.0_470.42.01_linux.run
<span class="token function">sudo</span> <span class="token function">sh</span> cuda_11.4.0_470.42.01_linux.run
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>下面的配图是安装CUDA 11.0的版本
修改执行权限</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">777</span> cuda_<span class="token operator">&lt;</span>cuda_version<span class="token operator">></span>_<span class="token operator">&lt;</span>driver_version<span class="token operator">></span>_linux.run
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="@source/linux/nvidia/images/cuda-install-1.png" alt="cuda install 1"></p>
<p>执行安装程序</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> ./cuda_<span class="token operator">&lt;</span>cuda_version<span class="token operator">></span>_<span class="token operator">&lt;</span>driver_version<span class="token operator">></span>_linux.run
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="@source/linux/nvidia/images/cuda-install-2.png" alt="cuda install 2"></p>
<p>选择 <code>Continue</code>
<img src="@source/linux/nvidia/images/cuda-install-3.png" alt="cuda install 3"></p>
<p>输入 <code>accept</code> 确认安装</p>
<p><img src="@source/linux/nvidia/images/cuda-install-4.png" alt="cuda install 4"></p>
<p>这里不要勾选 <code>Drive</code> ，因为这里安装的驱动可能低于系统自带的驱动，根据 <a href="#nvidia-%E9%A9%B1%E5%8A%A8%E5%AE%89%E8%A3%85">驱动安装</a></p>
<p><img src="@source/linux/nvidia/images/cuda-install-5.png" alt="cuda install 5"></p>
<p>安装结束后，出现安装概要</p>
<p><img src="@source/linux/nvidia/images/cuda-install-6.png" alt="cuda install 6"></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token operator">=</span> Summary <span class="token operator">=</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>

Driver:   Not Selected
Toolkit:  Installed <span class="token keyword">in</span> /usr/local/cuda-11.0/
Samples:  Installed <span class="token keyword">in</span> /home/henryzhu/, but missing recommended libraries

Please <span class="token function">make</span> sure that
 -   <span class="token environment constant">PATH</span> includes /usr/local/cuda-11.0/bin
 -   LD_LIBRARY_PATH includes /usr/local/cuda-11.0/lib64, or, <span class="token function">add</span> /usr/local/cuda-11.0/lib64 to /etc/ld.so.conf and run ldconfig as root

To uninstall the CUDA Toolkit, run cuda-uninstaller <span class="token keyword">in</span> /usr/local/cuda-11.0/bin

Please see CUDA_Installation_Guide_Linux.pdf <span class="token keyword">in</span> /usr/local/cuda-11.0/doc/pdf <span class="token keyword">for</span> detailed information on setting up CUDA.
***WARNING: Incomplete installation<span class="token operator">!</span> This installation did not <span class="token function">install</span> the CUDA Driver. A driver of version at least .00 is required <span class="token keyword">for</span> CUDA <span class="token number">11.0</span> functionality to work.
To <span class="token function">install</span> the driver using this installer, run the following command, replacing <span class="token operator">&lt;</span>CudaInstaller<span class="token operator">></span> with the name of this run file:
    <span class="token function">sudo</span> <span class="token operator">&lt;</span>CudaInstaller<span class="token operator">></span>.run --silent --driver

Logfile is /var/log/cuda-installer.log
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><blockquote>
<p>这里的安装版本是CUDA 11.0，请根据自己的CUDA版本进行处理</p>
</blockquote>
<h2 id="配置-cuda-环境变量" tabindex="-1"><a class="header-anchor" href="#配置-cuda-环境变量" aria-hidden="true">#</a> 配置 CUDA 环境变量</h2>
<p>CUDA环境要求我们</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Please <span class="token function">make</span> sure that
 -   <span class="token environment constant">PATH</span> includes /usr/local/cuda-11.0/bin
 -   LD_LIBRARY_PATH includes /usr/local/cuda-11.0/lib64, or, <span class="token function">add</span> /usr/local/cuda-11.0/lib64 to /etc/ld.so.conf and run ldconfig as root
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>编辑环境变量文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vim</span> ~/.bashrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>添加以下内容</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># ------ CUDA 11.0 ------</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span><span class="token variable">$LD_LIBRARY_PATH</span>:/usr/local/cuda-11.0/lib64
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/cuda-11.0/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CUDA_HOME</span><span class="token operator">=</span><span class="token variable">$CUDA_HOME</span>:/usr/local/cuda-11.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>这里以 CUDA 11.0 为例，请根据自己安装的CUDA版本进行对应修改<code>cuda-11.0</code> 修改为 <code>cuda-&lt;version&gt;</code></p>
</blockquote>
<p>执行命令使其生效</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>验证是否安装成功</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ nvcc -V
nvcc: NVIDIA <span class="token punctuation">(</span>R<span class="token punctuation">)</span> Cuda compiler driver
Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2005</span>-2020 NVIDIA Corporation
Built on Thu_Jun_11_22:26:38_PDT_2020
Cuda compilation tools, release <span class="token number">11.0</span>, V11.0.194
Build cuda_11.0_bu.TC445_37.28540450_0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="卸载-cuda" tabindex="-1"><a class="header-anchor" href="#卸载-cuda" aria-hidden="true">#</a> 卸载 CUDA</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> /usr/local/cuda-11.0/bin/cuda-uninstaller
<span class="token function">sudo</span> <span class="token function">rm</span> -rf /usr/local/cuda-11.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="cudnn安装" tabindex="-1"><a class="header-anchor" href="#cudnn安装" aria-hidden="true">#</a> cuDNN安装</h2>
<p>下载 <a href="https://developer.nvidia.com/zh-cn/cudnn" target="_blank" rel="noopener noreferrer">cuDNN<ExternalLinkIcon/></a>（需要注册NVIDIA账号并登录）</p>
<p><img src="@source/linux/nvidia/images/cuDNN-download.png" alt="cuDNN-download"></p>
<p>下载解压之后</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ tree
<span class="token builtin class-name">.</span>
└── cuda
    ├── include
    │   ├── cudnn_adv_infer.h
    │   ├── cudnn_adv_train.h
    │   ├── cudnn_backend.h
    │   ├── cudnn_cnn_infer.h
    │   ├── cudnn_cnn_train.h
    │   ├── cudnn.h
    │   ├── cudnn_ops_infer.h
    │   ├── cudnn_ops_train.h
    │   └── cudnn_version.h
    ├── lib64
    │   ├── <span class="token punctuation">..</span>.
    │   ├── libcudnn_ops_train.so.8.0.4
    │   ├── libcudnn.so -<span class="token operator">></span> libcudnn.so.8
    │   ├── libcudnn.so.8 -<span class="token operator">></span> libcudnn.so.8.0.4
    │   ├── libcudnn.so.8.0.4
    │   └── libcudnn_static.a
    └── NVIDIA_SLA_cuDNN_Support.txt

<span class="token number">3</span> directories, <span class="token number">32</span> files
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>将解压目录中的 <code>cuda/include/cudnn.h</code> 文件复制到 <code>/usr/local/cuda-11.0/include</code> 文件夹， <code>cuda/lib64/</code> 下所有文件复制到 <code>/usr/local/cuda-11.0/lib64</code> 文件夹中</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cp</span> cuda/include/* /usr/local/cuda-11.5/include
<span class="token function">sudo</span> <span class="token function">cp</span> cuda/lib64/* /usr/local/cuda-11.5/lib64
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>并添加读取权限</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> a+r /usr/local/cuda-11.5/include/cudnn*
<span class="token function">sudo</span> <span class="token function">chmod</span> a+r /usr/local/cuda-11.5/lib64/libcudnn*
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><!-- # 参考
- [Linux安装NVIDIA显卡驱动](https://blog.csdn.net/wf19930209/article/details/81877822)
- [Linux安装CUDA GCC版本不兼容](https://blog.csdn.net/HaoZiHuang/article/details/109544443) --></template>
