import{b as e}from"./app.cdc06c7c.js";import{_ as a,a as s,b as n,c as o,d as t,e as r,f as c,g as i,h as p,i as l,j as d,k as h,l as u,m}from"./jtop.5fc0aee6.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";const v={},f=e('<p>#! https://zhuanlan.zhihu.com/p/612694211</p><h1 id="nvidia-xavier-nx-\u5B89\u88C5\u7CFB\u7EDF\u548C\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nvidia-xavier-nx-\u5B89\u88C5\u7CFB\u7EDF\u548C\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> Nvidia Xavier NX \u5B89\u88C5\u7CFB\u7EDF\u548C\u57FA\u672C\u914D\u7F6E</h1><p>Nvidia Xavier NX \u7684\u5B98\u65B9\u6587\u6863\u53EF\u4EE5\u53C2\u8003\u5982\u4E0B\uFF1A</p><ul><li><a href="https://developer.nvidia.com/embedded/downloads#?search=Developer%20Kit%20User%20Guide" target="_blank" rel="noopener noreferrer">Jetson Download Center</a> \u4E2D\u7684 <em>Jetson Xavier NX Developer Kit User Guide</em></li><li><a href="https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/index.html" target="_blank" rel="noopener noreferrer">NVIDIA Jetson Guide</a></li></ul><h2 id="\u5B89\u88C5-jetson-jetpack" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-jetson-jetpack" aria-hidden="true">#</a> \u5B89\u88C5 Jetson Jetpack</h2><p>\u5982\u679C\u662F EMMC \u7248\u672C\u7684 Jetson Xavier NX \uFF0C\u9700\u8981\u4E0B\u8F7D\u5B89\u88C5 <a href="https://developer.nvidia.com/drive/sdk-manager" target="_blank" rel="noopener noreferrer">SDK Manager</a>\u8FDB\u884C JetPack \u7CFB\u7EDF\u5B89\u88C5</p><blockquote><p>\u5B98\u65B9\u5B89\u88C5\u6559\u7A0B <a href="https://docs.nvidia.com/sdk-manager/install-with-sdkm-jetson/index.html" target="_blank" rel="noopener noreferrer"><em>NVIDIA SDK Manager Documentation</em></a></p></blockquote><p>\u901A\u8FC7 SDK Manager \u5B89\u88C5 JetPack \u9700\u8981\u8BA9 Jetson Xavier NX \u5904\u4E8E\u201C\u5F3A\u5236\u6062\u590D\u6A21\u5F0F\u201D(Force Recovery mode)\uFF0C<strong>\u7ED9 Xavier \u4E0A\u7535\u524D</strong>\u4F7F\u7528\u675C\u90A6\u7EBF\u5C06 <strong>FC REC \u5F15\u811A(9)</strong> \u548C <strong>GND \u5F15\u811A(10)</strong> \u77ED\u63A5\u5373\u53EF</p><blockquote><p>\u5F15\u811A\u53EF\u80FD\u56E0\u578B\u53F7\u800C\u5F02\uFF0C\u6240\u4EE5\u5EFA\u8BAE\u7FFB\u5230\u677F\u5B50\u80CC\u9762\u67E5\u770B\u5F15\u811A\u540D\u79F0 <img src="'+a+'" alt="FC Rec"></p></blockquote><h3 id="\u6B65\u9AA4\u4E00-\u5F00\u53D1\u73AF\u5883\u914D\u7F6E-step-01-development-environmen" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4\u4E00-\u5F00\u53D1\u73AF\u5883\u914D\u7F6E-step-01-development-environmen" aria-hidden="true">#</a> \u6B65\u9AA4\u4E00\uFF1A\u5F00\u53D1\u73AF\u5883\u914D\u7F6E (STEP 01: DEVELOPMENT ENVIRONMEN)</h3><p>\u6253\u5F00 SDK Manager \uFF0C\u6839\u636E\u63D0\u793A\u767B\u5F55 NVIDIA \u8D26\u53F7\u3002</p><ul><li><code>HARDWARE CONFIGURATION</code>: \u7528 micro\u2014USB \u8FDE\u63A5\u4E3B\u673A(Host)\u548C\u76EE\u6807\u786C\u4EF6(Target Hardware)\uFF0C\u8F6F\u4EF6\u4F1A\u81EA\u52A8\u8BC6\u522B\u5DF2\u7ECF\u8FDE\u63A5\u4E0A\u7684\u5F00\u53D1\u677F\u578B\u53F7\uFF0C\u786E\u4FDD\u5904\u4E8E\u201C\u5F3A\u5236\u6062\u590D\u6A21\u5F0F\u201D(Force Recovery mode)\uFF1A</li><li><code>TARGET OPREATING SYSTEM</code>: \u64CD\u4F5C\u7CFB\u7EDF\u9009\u62E9\uFF0C\u8FD9\u91CC\u9009\u62E9\u4E86 JetPack 5.1</li><li><code>ADDITIONAL SDKS</code>: \u53EF\u9009\u662F\u5426\u5B89\u88C5 DeepStream 6.2</li></ul><p><img src="'+s+'" alt="start"></p><h3 id="\u6B65\u9AA4\u4E8C-\u9009\u62E9\u7EC4\u4EF6-step-02-details-and-license" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4\u4E8C-\u9009\u62E9\u7EC4\u4EF6-step-02-details-and-license" aria-hidden="true">#</a> \u6B65\u9AA4\u4E8C\uFF1A\u9009\u62E9\u7EC4\u4EF6 (STEP 02: DETAILS AND LICENSE)</h3><p>\u8FD9\u91CC\u9009\u62E9\u597D\u9700\u8981\u5B89\u88C5\u7684 components\uFF0C\u9ED8\u8BA4\u662F\u5168\u9009\u4E86\uFF0C\u5982\u679C EMMC \u4E0A\u7A7A\u95F4\u4E0D\u591F\uFF0C\u90A3\u5C31\u53EF\u4EE5\u53D6\u6D88 <code>Jetson SDK Components</code> \uFF0C\u7B49\u5F85\u7CFB\u7EDF\u5B89\u88C5\u597D\u540E\uFF0C\u5B89\u88C5\u81F3 NVME \u4E2D\u3002</p><p>\u9009\u62E9\u597D\u540E\uFF0C\u9009\u62E9\u63A5\u53D7\u534F\u8BAE\uFF0C\u70B9\u51FB CONTINUE to STEP 03 \u8FDB\u884C\u4E0B\u4E00\u6B65\u8BBE\u7F6E</p><p><img src="'+n+'" alt="choose-modules"></p><h3 id="\u6B65\u9AA4\u4E09-\u7CFB\u7EDF\u8BBE\u7F6E-step-03-setup-process" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4\u4E09-\u7CFB\u7EDF\u8BBE\u7F6E-step-03-setup-process" aria-hidden="true">#</a> \u6B65\u9AA4\u4E09\uFF1A\u7CFB\u7EDF\u8BBE\u7F6E (STEP 03: SETUP PROCESS)</h3><p>\u8FD9\u4E00\u6B65\u7684\u8BBE\u7F6E\u6BD4\u8F83\u91CD\u8981\uFF0C\u9700\u8981\u4FEE\u6539\u5982\u4E0B\u7684\u914D\u7F6E\uFF1A</p><ol><li>\u4FEE\u6539\u4E3A <code>Manual Setup - Jetson Xavier NX</code></li><li>\u8BBE\u7F6E\u8FDB\u5165\u7CFB\u7EDF\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u8FD9\u91CC\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A <code>xavier</code>/<code>xavier</code> \u5373\u53EF</li><li>Storage Device \u9009\u62E9 <code>EMMC/SD Card (default)</code> \uFF0C\u4E4B\u540E\u4F1A\u5C06\u7CFB\u7EDF\u8FC1\u79FB\u81F3 NVME \u4E2D\u8FDB\u884C\u6269\u5BB9</li></ol><p><img src="'+o+'" alt="system-setting"></p><p>\u7136\u540E\u8FDB\u5165\u6F2B\u957F\u7684\u7B49\u5F85\uFF0C\u5B89\u88C5\u5230</p><p><img src="'+t+'" alt="JetsonPack-install-installprocess"></p><p>\u5927\u7EA6\u8FDB\u884C\u5230\u4E00\u534A\uFF0C\u4F1A\u5F39\u51FA\u4E00\u4E2A\u5B89\u88C5 SDK components \u7684\u786E\u8BA4\u9009\u9879\uFF0C\u8FD9\u91CC\u5982\u679C\u53EF\u4EE5\u6210\u529F\u5B89\u88C5\u5C31 install \uFF0C\u5426\u5219\u53EF\u4EE5\u8DF3\u8FC7</p><blockquote><p>\u6682\u65F6\u6CA1\u6709\u6210\u529F\u5B89\u88C5\u8FD9\u4E00\u6B65\uFF0C\u4F46\u662F\u8C8C\u4F3C\u4E0D\u5F71\u54CD\u540E\u7EED\u7684\u7CFB\u7EDF\u5B89\u88C5</p></blockquote><p><img src="'+r+`" alt="JetsonPack-install-installprocess"></p><p>\u7136\u540E\u7EE7\u7EED\u6F2B\u957F\u7684\u7B49\u5F85\uFF0C\u76F4\u5230\u7ED3\u675F</p><h3 id="\u6B65\u9AA4\u56DB-\u542F\u52A8-jetson-xavier" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4\u56DB-\u542F\u52A8-jetson-xavier" aria-hidden="true">#</a> \u6B65\u9AA4\u56DB\uFF1A\u542F\u52A8 Jetson Xavier</h3><p>\u8FDB\u5165\u7CFB\u7EDF\u540E</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> -y update
<span class="token function">sudo</span> <span class="token function">apt</span> -y upgrade
</code></pre></div><blockquote><p>\u5B89\u88C5\u51FA\u73B0 <code>Unable to fetch some archives, maybe run apt-get update or try with --fix-missing?</code> \u5219\u6267\u884C <code>sudo apt -y update --fix-missing</code> \u518D\u7EE7\u7EED</p></blockquote><h3 id="\u6B65\u9AA4\u4E94-\u7CFB\u7EDF\u76D8\u8FC1\u79FB" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4\u4E94-\u7CFB\u7EDF\u76D8\u8FC1\u79FB" aria-hidden="true">#</a> \u6B65\u9AA4\u4E94\uFF1A\u7CFB\u7EDF\u76D8\u8FC1\u79FB</h3><p>\u7531\u4E8E Jetson Xavier \u81EA\u5E26\u7684 EMMC \u8F83\u5C0F\uFF0C\u53EA\u6709 16G\uFF0C\u6240\u4EE5\u8003\u8651\u5C06 NVMe SSD \u786C\u76D8\u4F5C\u4E3A\u7CFB\u7EDF\u76D8\uFF08rootfs\u548C\u7528\u6237\u533A\uFF09\uFF0C\u7CFB\u7EDF\u7684\u542F\u52A8\u5F15\u5BFC\u4F9D\u7136\u662F\u901A\u8FC7 EMMC\uFF0C\u6BD4\u5982\u5347\u7EA7\u8BBE\u5907\u6811dtb \u8FD8\u662F\u5728 EMMC\u4E2D\u3002</p><p>\u51C6\u5907M.2 SSD\uFF08NX\u652F\u6301NVME\u63A5\u53E3\uFF09</p><ol><li>\u6253\u5F00 Ubuntu \u81EA\u5E26 Disks \u5DE5\u5177\uFF0C\u70B9\u51FB\u53F3\u4E0A\u89D2\u9009\u62E9 <code>Format Disk</code> \u5E76\u5C06\u5176\u683C\u5F0F\u5316\u4E3A GPT \u683C\u5F0F</li></ol><p><img src="`+c+'" alt="format"><img src="'+i+'" alt="format-disk"></p><ol start="2"><li>\u683C\u5F0F\u5316\u540E\u8FDB\u884C\u78C1\u76D8\u5206\u533A\uFF0C\u5EFA\u8BAE\u5206\u6210\u4E3B\u5206\u533A\u548C\u4E00\u4E2A16GB\u7684\u4EA4\u6362\u6587\u4EF6\u533A\uFF1B\u5E76\u5728\u4E0B\u4E00\u6B65\u8FDB\u884C\u547D\u540D</li></ol><p><img src="'+p+'" alt="create-partition"></p><p><img src="'+l+'" alt="FormatVolume"></p><ol start="3"><li>\u70B9\u51FB\u4E0B\u65B9 \u2018\u4E09\u89D2\u6309\u94AE\u2019 \u5C06 SSD \u6302\u8F7D(mount)\u5230\u56FA\u5B9A\u76EE\u5F55\u5982 <code>/media/nvidia/&lt;name&gt;</code> (<code>&lt;name&gt;</code> \u662F\u521A\u521A\u7684\u547D\u540D)</li></ol><p><img src="'+d+`" alt="system2NVMe-finish"></p><p>\u5B8C\u6210\u540E\u5C06\u7CFB\u7EDF\u76D8\u8FC1\u79FB\u81F3 SSD \u4E2D</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/jetsonhacks/rootOnNVMe.git
<span class="token builtin class-name">cd</span> rootOnNVMe
./copy-rootfs-ssd.sh  <span class="token comment"># \u590D\u5236\u5230 ssd</span>
./setup-service.sh    <span class="token comment"># ssd \u8BBE\u7F6E\u4E3A\u542F\u52A8\u76D8</span>
<span class="token function">sudo</span> <span class="token function">reboot</span>
</code></pre></div><p>\u9700\u8981\u5728 Xavier \u67E5\u770B jetpack \u7248\u672C\uFF0C\u5E76\u8BB0\u4F4F\u7248\u672C\u53F7</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-cache</span> show nvidia-jetpack
</code></pre></div><p>\u7EE7\u7EED\u4F7F\u7528 micro-USB \u8FDE\u63A5\u8FDE\u63A5 Host \u4E3B\u673A\u548C Xavier \uFF0C\u7136\u540E\u5728\u4E3B\u673A\u4E0A\u8FD0\u884C SDKManager</p><h2 id="\u529F\u8017\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u529F\u8017\u6A21\u5F0F" aria-hidden="true">#</a> \u529F\u8017\u6A21\u5F0F</h2><p>\u5728 <a href="https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonXavierNxSeriesAndJetsonAgxXavierSeries.html#supported-modes-and-power-efficiency" target="_blank" rel="noopener noreferrer">Supported Modes and Power Efficiency</a> \u4E2D\u6709\u8BE6\u7EC6\u4ECB\u7ECD\u4E86 Jetson Xavier NX \u76849\u79CD\u529F\u8017\u6A21\u5F0F</p><img src="`+h+`" width="50%"><h3 id="\u529F\u8017\u6A21\u5F0F\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u529F\u8017\u6A21\u5F0F\u8BBE\u7F6E" aria-hidden="true">#</a> \u529F\u8017\u6A21\u5F0F\u8BBE\u7F6E</h3><p>\u547D\u4EE4 <code>nvpmodel</code> \u7528\u4E8E\u67E5\u770B\u548C\u4FEE\u6539\u529F\u8017\u6A21\u5F0F\uFF0C\u5404\u4E2A\u529F\u8017\u6A21\u5F0F\u914D\u7F6E\u5728 <code>/etc/nvpmodel.conf</code> \u4E2D</p><p>\u67E5\u770B Xavier \u7684\u529F\u8017\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u6A21\u5F0F\u4E3A 5(<code>MODE_10W</code>)</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> nvpmodel --query
$ <span class="token function">sudo</span> /usr/sbin/nvpmodel -q
NV Power Mode: MODE_10W_DESKTOP
<span class="token number">5</span>
</code></pre></div><p>\u4FEE\u6539\u529F\u8017\u6A21\u5F0F\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7 <a href="https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonXavierNxSeriesAndJetsonAgxXavierSeries.html#nvpmodel-gui" target="_blank" rel="noopener noreferrer">nvpmodel GUI</a> \uFF08\u754C\u9762\uFF09\u8BBE\u7F6E</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> /usr/sbin/nvpmodel -m <span class="token operator">&lt;</span>ModeID<span class="token operator">&gt;</span>
</code></pre></div><h3 id="\u98CE\u6247\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u98CE\u6247\u914D\u7F6E" aria-hidden="true">#</a> \u98CE\u6247\u914D\u7F6E</h3><p>\u53C2\u8003 <a href="https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonXavierNxSeriesAndJetsonAgxXavierSeries.html#fan-profile-control" target="_blank" rel="noopener noreferrer">Fan Profile Control</a></p><img src="`+u+`" width="50%"><p>\u8BE5\u6846\u67B6\u5B9E\u73B0\u4E86\u6EDE\u540E\uFF0C\u4EE5\u9632\u6B62\u98CE\u6247\u901F\u5EA6\u7684\u9891\u7E41\u53D8\u5316\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8EJetson Xavier\uFF0C\u5F53\u98CE\u6247\u914D\u7F6E\u6587\u4EF6\u8BBE\u7F6E\u4E3A\u5177\u6709\u4E0A\u8FF0\u9ED8\u8BA4\u8BBE\u7F6E\u7684\u201C\u5B89\u9759\u201D\u65F6\uFF0C\u6846\u67B6\u4F1A\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</p><ul><li>\u6E29\u5EA6\u8FBE\u5230 46 \xB0C \uFF0C\u5F00\u98CE\u6247</li><li>\u6E29\u5EA6\u4F4E\u4E8E 38 \xB0C \uFF0C\u5173\u98CE\u6247 (46-8= Trip temperature - Hysteresis)</li></ul><p>\u8BBE\u7F6E\u98CE\u6247\u6A21\u5F0F\u6709\u4E24\u79CD\u65B9\u5F0F:</p><ol><li>\u4E00\u79CD\u662F\u5982\u4E0B\u7684\u7CFB\u7EDF\u8BBE\u7F6E</li><li>\u8FD8\u6709\u4E00\u79CD\u662F\u5728 <a href="#jtop-%E7%9B%91%E6%8E%A7%E8%BD%AF%E4%BB%B6">jtop</a> \u4E2D\u624B\u52A8\u8BBE\u7F6E\uFF08\u63A8\u8350\uFF09</li></ol><p>\u67E5\u770B\u5F53\u524D\u98CE\u6247\u6A21\u5F0F</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> nvfancontrol -q
</code></pre></div><p>\u4FEE\u6539\u98CE\u6247\u914D\u7F6E\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><ol><li>\u505C\u6B62\u98CE\u6247\u63A7\u5236\u7684\u7CFB\u7EDF\u670D\u52A1</li></ol><div class="language-text ext-text"><pre class="language-text"><code>sudo systemctl stop nvfancontrol
</code></pre></div><ol><li>\u8BBE\u7F6E\u9ED8\u8BA4\u98CE\u6247\u914D\u7F6E\u6587\u4EF6\uFF0C\u5C06\u4EE5\u4E0B\u5C5E\u6027\u653E\u5165<code>/etc/nvfancontrol.conf</code>\uFF0C <code>&lt;fan_profile&gt;</code> \u4FEE\u6539\u4E3A <code>quiet</code> \u6216 <code>cool</code>.</li></ol><div class="language-text ext-text"><pre class="language-text"><code>FAN_DEFAULT_PROFILE &lt;fan_profile&gt;
</code></pre></div><ol><li>\u79FB\u9664\u72B6\u6001\u6587\u4EF6</li></ol><div class="language-text ext-text"><pre class="language-text"><code>sudo rm /var/lib/nvfancontrol/status
</code></pre></div><ol><li>\u542F\u52A8\u98CE\u6247\u63A7\u5236\u7684\u7CFB\u7EDF\u670D\u52A1</li></ol><div class="language-text ext-text"><pre class="language-text"><code>sudo systemctl start nvfancontrol
</code></pre></div><h3 id="jtop-\u76D1\u63A7\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#jtop-\u76D1\u63A7\u8F6F\u4EF6" aria-hidden="true">#</a> jtop \u76D1\u63A7\u8F6F\u4EF6</h3><p><code>jtop</code> \u5DE5\u5177\u7528\u4E8E\u76D1\u63A7 Xavier</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y python3-pip
<span class="token function">sudo</span> python3 -m pip <span class="token function">install</span> jetson-stats  <span class="token comment"># \u5B89\u88C5 jtop</span>
<span class="token function">sudo</span> systemctl restart jtop.service       <span class="token comment"># \u6FC0\u6D3B jtop.service</span>
<span class="token function">sudo</span> jtop                                 <span class="token comment"># \u542F\u52A8</span>
</code></pre></div><p><img src="`+m+`" alt="jtop"></p><p>\u4FEE\u6539\u8BBE\u7F6E\uFF0C\u8F6C\u5230 <code>6CTRL</code>\uFF1A</p><ul><li>\u6309\u952E <code>m</code>/<code>p</code> \u63A7\u5236\u98CE\u6247\u8F6C\u901F</li><li>\u6309\u952E <code>s</code> \u548C <code>e</code> \u8BBE\u7F6E <code>jetson_clocks Running</code> \u548C <code>boot Enable</code> \u8FDB\u884C\u98CE\u6247\u5F00\u673A\u81EA\u542F\u52A8</li><li>\u6309\u952E <code>+</code>/<code>-</code> \u4FEE\u6539 NVP Model \uFF08\u529F\u8017\u6A21\u5F0F\uFF09 \u4FEE\u6539\u8BBE\u7F6E\uFF0C\u8F6C\u5230 <code>6CTRL</code>\uFF1A</li><li>\u6309\u952E <code>m</code>/<code>p</code> \u63A7\u5236\u98CE\u6247\u8F6C\u901F</li><li>\u6309\u952E <code>s</code> \u548C <code>e</code> \u8BBE\u7F6E <code>jetson_clocks Running</code> \u548C <code>boot Enable</code> \u8FDB\u884C\u98CE\u6247\u5F00\u673A\u81EA\u542F\u52A8</li><li>\u6309\u952E <code>+</code>/<code>-</code> \u4FEE\u6539 NVP Model \uFF08\u529F\u8017\u6A21\u5F0F\uFF09</li></ul><h2 id="\u8F6F\u4EF6\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u73AF\u5883" aria-hidden="true">#</a> \u8F6F\u4EF6\u73AF\u5883</h2><h3 id="miniforge" tabindex="-1"><a class="header-anchor" href="#miniforge" aria-hidden="true">#</a> miniforge</h3><p><a href="https://github.com/conda-forge/miniforge/releases" target="_blank" rel="noopener noreferrer">miniforge</a></p><p>\u4E0B\u8F7D\u9002\u7528\u4E8E ARM \u67B6\u6784\u7684 <code>Mambaforge-xx.xx.x-x-Linux-aarch64.sh</code></p><h3 id="pytorch" tabindex="-1"><a class="header-anchor" href="#pytorch" aria-hidden="true">#</a> Pytorch</h3><p><a href="https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html" target="_blank" rel="noopener noreferrer">PyTorch on Jetson Platform</a></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span>/usr/lib/llvm-8/lib:<span class="token variable">$LD_LIBRARY_PATH</span>
pip3 <span class="token function">install</span> aiohttp
conda <span class="token function">install</span> -y <span class="token assign-left variable">numpy</span><span class="token operator">==</span><span class="token number">1.19</span>.4
pip3 <span class="token function">install</span> <span class="token assign-left variable">scipy</span><span class="token operator">==</span><span class="token number">1.5</span>.3
pip3 <span class="token function">install</span> protobuf
pip3 <span class="token function">install</span> --upgrade protobuf



<span class="token builtin class-name">export</span> <span class="token assign-left variable">TORCH_INSTALL</span><span class="token operator">=</span>https://developer.download.nvidia.cn/compute/redist/jp/v51/pytorch/torch-1.14.0a0+44dac51c.nv23.01-cp38-cp38-linux_aarch64.whl
<span class="token comment"># https://developer.download.nvidia.com/compute/redist/jp/v$JP_VERSION/pytorch/$PYT_VERSION</span>
pip3 <span class="token function">install</span> --no-cache <span class="token variable">$TORCH_INSTALL</span>
</code></pre></div>`,86);function k(b,x){return f}var N=g(v,[["render",k]]);export{N as default};
