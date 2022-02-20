<template><h1 id="home-assistant" tabindex="-1"><a class="header-anchor" href="#home-assistant" aria-hidden="true">#</a> Home Assistant</h1>
<p><a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">Home Assistant<ExternalLinkIcon/></a> 是一款基于 Python 的智能家居开源系统，支持多品牌的智能家居设备，用于实现设备的语音控制、自动化等。</p>
<p>动机：苹果的家居好是好，但是又贵又少；小米的东西便宜，但是不能直接加到苹果家庭内</p>
<p>解决：将 Home Assistant 安装到树莓派上，作为中枢控制</p>
<p>支持列表：https://www.jianguoyun.com/p/DbzdYzoQp5HMBhjZ4IkB</p>
<ul>
<li><a href="#home-assistant">Home Assistant</a>
<ul>
<li><a href="#home-assistant-%E5%AE%89%E8%A3%85-docker">Home Assistant 安装 (Docker)</a>
<ul>
<li><a href="#%E9%87%8D%E5%90%AF-home-assistant">重启 Home Assistant</a></li>
<li><a href="#%E8%AE%BF%E9%97%AE-home-assistant">访问 Home Assistant</a></li>
</ul>
</li>
<li><a href="#hacs-%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85">HACS 插件安装</a></li>
<li><a href="#%E5%9C%A8-hacs-%E4%B8%AD%E5%AE%89%E8%A3%85-mi-mlot">在 HACS 中安装 Mi MLoT</a></li>
<li><a href="#%E6%B7%BB%E5%8A%A0%E7%B1%B3%E5%AE%B6%E8%AE%BE%E5%A4%87">添加米家设备</a></li>
<li><a href="#%E6%B7%BB%E5%8A%A0%E5%88%B0-homekit-%E4%B8%AD">添加到 Homekit 中</a></li>
<li><a href="#%E4%B8%BB%E9%A2%98">主题</a></li>
</ul>
</li>
</ul>
<h2 id="home-assistant-安装-docker" tabindex="-1"><a class="header-anchor" href="#home-assistant-安装-docker" aria-hidden="true">#</a> Home Assistant 安装 (Docker)</h2>
<p>采用 docker 的方式在树莓派上安装 Home Assistant</p>
<p>终端运行以安装docker</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> -sSL https://get.docker.com <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>启动docker，并且将 Docker 设置为自动启动。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sudo service docker start
sudo systemctl enable docker
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后重新启动 Pi，或者通过以下方式启动 Docker 守护程序：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl start docker
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装完 docker 后，直接安装 Home Assistant，其中需要修改 <code>-v</code> 参数 <code>/home/pi/homeassistant:/config</code> 为 Home Assistant 配置文件所在目录，修改为 <code>&lt;路径&gt;:/config</code> ，其余可以不改变</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> docker run -d <span class="token punctuation">\</span>
  --name homeassistant <span class="token punctuation">\</span>
  --privileged <span class="token punctuation">\</span>
  --restart<span class="token operator">=</span>unless-stopped <span class="token punctuation">\</span>
  -e <span class="token assign-left variable">TZ</span><span class="token operator">=</span>MY_TIME_ZONE <span class="token punctuation">\</span>
  -v /home/pi/homeassistant:/config <span class="token punctuation">\</span>
  --network<span class="token operator">=</span>host <span class="token punctuation">\</span>
  ghcr.io/home-assistant/raspberrypi4-homeassistant:stable
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="重启-home-assistant" tabindex="-1"><a class="header-anchor" href="#重启-home-assistant" aria-hidden="true">#</a> 重启 Home Assistant</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> docker restart homeassistant
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="访问-home-assistant" tabindex="-1"><a class="header-anchor" href="#访问-home-assistant" aria-hidden="true">#</a> 访问 Home Assistant</h3>
<p>通过 <code>http://&lt;raspberry-ip&gt;:8123</code> 访问</p>
<p>http://192.168.3.223:8123</p>
<h2 id="hacs-插件安装" tabindex="-1"><a class="header-anchor" href="#hacs-插件安装" aria-hidden="true">#</a> HACS 插件安装</h2>
<p><a href="https://github.com/hacs/integration" target="_blank" rel="noopener noreferrer">HACS<ExternalLinkIcon/></a></p>
<p>然后我们在<code>Home assistant</code>的根目录下新建“custom_components”和“www”这2个文件夹。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> homeassistant/custom_components
<span class="token function">sudo</span> <span class="token function">mkdir</span> homeassistant/www
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上传</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">scp</span> -r hacs pi@192.168.3.215:~/homeassistant/custom_components
<span class="token function">scp</span> -r C:/Users/henryzhu/Downloads/xiaomi_miot_raw/custom_components/xiaomi_miot_raw pi@192.168.3.215:~/homeassistant/custom_components
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>scp -r hacs pi@192.168.3.220:~/homeassistant/custom_components</p>
<p>打开高级设置确保可以安装HACS
<img src="@source/homeAssistant/images/hacs-install-setting.png" alt="打开高级设置"></p>
<p>配置 -&gt; 通用 -&gt; 服务控制 -&gt; 服务管理  -&gt; 重新启动</p>
<p>如果无效则需要在树莓派终端重启docker</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> docker restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="在-hacs-中安装-mi-mlot" tabindex="-1"><a class="header-anchor" href="#在-hacs-中安装-mi-mlot" aria-hidden="true">#</a> 在 HACS 中安装 Mi MLoT</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">scp</span> -r xiaomi_miot_raw/custom_components/xiaomi_miot_raw pi@192.168.3.220:~/homeassistant/custom_components
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="添加米家设备" tabindex="-1"><a class="header-anchor" href="#添加米家设备" aria-hidden="true">#</a> 添加米家设备</h2>
<h2 id="添加到-homekit-中" tabindex="-1"><a class="header-anchor" href="#添加到-homekit-中" aria-hidden="true">#</a> 添加到 Homekit 中</h2>
<h2 id="主题" tabindex="-1"><a class="header-anchor" href="#主题" aria-hidden="true">#</a> 主题</h2>
<p>themes/ios-themes/ios-themes.yaml</p>
</template>
