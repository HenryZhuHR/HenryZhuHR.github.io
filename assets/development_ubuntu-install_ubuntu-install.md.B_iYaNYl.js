import{_ as t,c as s,o as a,a2 as n}from"./chunks/framework.bdxXucLJ.js";const i="/assets/install-2404-step-0-boot.0A9d_cgZ.png",e="/assets/install-2404-step-1-choose_language.CVD19i5v.png",p="/assets/install-2404-step-2-accessibility.CRJzawA5.png",l="/assets/install-2404-step-3-keyboard_layout.Db019NiP.png",r="/assets/install-2404-setp-4-connect_network.D43GlvuY.png",o="/assets/install-2404-setp-5-install_type.BNK_l-WK.png",h="/assets/install-2404-setp-6-app.BYLyNIIg.png",g="/assets/install-2404-setp-7-optimize_computer.Cusj4run.png",d="/assets/install-2404-setp-8-install_type.BImhHQ3R.png",u="/assets/install-2404-setp-9-manual_partition_1.VDMenHfN.png",c="/assets/install-2404-setp-9-manual_partition_2.CGJX8Qis.png",_="/assets/install-2404-setp-9-manual_partition_3.YXcsnvDq.png",m="/assets/install-2404-setp-10-setup_account.DwIA_1aO.png",k="/assets/install-2404-setp-11-time_zone.BQmix9hT.png",b="/assets/install-2404-setp-12-ready_to_install.DauwpPg9.png",f="/assets/install-2404-setp-13-installing.BfsjZI_1.png",F="/assets/install-2404-setp-14-finish.CkGRh25k.png",y="/assets/install-2204-step-1-choose_language.RYdKL1q-.png",C="/assets/install-2204-step-2-keyboard_layout.B2n5mNn1.png",D="/assets/install-2204-step-3-updates_and_other_software.BODc-T4J.png",x="/assets/install-2204-step-4-install_partition.D_Gdh9VI.png",S="/assets/install-2204-step-4-install_partition_1.Ca7q1wDr.png",v="/assets/install-2204-step-4-install_partition_2.MtrLP8x9.png",B="/assets/install-2204-step-4-install_partition_3.CZp2iT2x.png",z="/assets/install-2204-step-4-install_partition_4.Db7j_yGm.png",q="/assets/install-2204-step-4-install_partition_5.BaCJCOKv.png",P="/assets/install-2204-step-4-install_partition_6.BH85Pd3m.png",j="/assets/install-2204-step-5-time_zone.C1cL6w6m.png",E="/assets/install-2204-step-6-account.Df95Uisf.png",U="/assets/install-2204-step-7-installing.CPCccXmT.png",L=JSON.parse('{"title":"Ubuntu 系统安装和初始化","description":"","frontmatter":{"outline":"deep","tags":["linux","软件开发"]},"headers":[],"relativePath":"development/ubuntu-install/ubuntu-install.md","filePath":"development/ubuntu-install/ubuntu-install.md","lastUpdated":1715704845000}'),H={name:"development/ubuntu-install/ubuntu-install.md"},w=n('<h1 id="ubuntu-xi-tong-an-zhuang-he-chu-shi-hua" tabindex="-1">Ubuntu 系统安装和初始化 <a class="header-anchor" href="#ubuntu-xi-tong-an-zhuang-he-chu-shi-hua" aria-label="Permalink to &quot;Ubuntu 系统安装和初始化&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#xi-tong-an-zhuang">⛵️ 系统安装</a><ul><li><a href="#xi-tong-jia-zai-jing-xiang">系统加载镜像</a></li><li><a href="#ubuntu-2404-desktop-de-an-zhuang">Ubuntu 24.04 Desktop 的安装</a></li><li><a href="#ubuntu-2004-desktop-de-an-zhuang">Ubuntu 20.04 Desktop 的安装</a></li><li><a href="#shou-dong-fen-qu">手动分区</a></li></ul></li><li><a href="#chu-shi-hua-pei-zhi">🚀 初始化配置</a><ul><li><a href="#geng-huan-ruan-jian-yuan">更换软件源</a></li><li><a href="#geng-xin-ruan-jian-bao">更新软件包</a></li><li><a href="#an-zhuang-chang-yong-ruan-jian">安装常用软件</a></li><li><a href="#pei-zhi-ssh">配置 SSH</a></li></ul></li></ul></nav><h2 id="xi-tong-an-zhuang" tabindex="-1">⛵️ 系统安装 <a class="header-anchor" href="#xi-tong-an-zhuang" aria-label="Permalink to &quot;⛵️ 系统安装&quot;">​</a></h2><p>可以在 <a href="https://releases.ubuntu.com" target="_blank" rel="noreferrer"><em>These releases of Ubuntu are available</em></a> 界面找到 Ubuntu(64-bit PC (AMD64)) 的各个版本的下载链接。</p><h3 id="xi-tong-jia-zai-jing-xiang" tabindex="-1">系统加载镜像 <a class="header-anchor" href="#xi-tong-jia-zai-jing-xiang" aria-label="Permalink to &quot;系统加载镜像&quot;">​</a></h3><p><img src="'+i+'" alt="install-2404-step-0-boot.png"></p><h3 id="ubuntu-2404-desktop-de-an-zhuang" tabindex="-1">Ubuntu 24.04 Desktop 的安装 <a class="header-anchor" href="#ubuntu-2404-desktop-de-an-zhuang" aria-label="Permalink to &quot;Ubuntu 24.04 Desktop 的安装&quot;">​</a></h3><p>「<strong>选择语言</strong>」</p><p><img src="'+e+'" alt="install-2404-step-1-choose_language.png"></p><p>「<strong>可访问性</strong>」设置可以跳过</p><p><img src="'+p+'" alt="install-2404-step-2-accessibility.png"></p><p>「<strong>键盘布局</strong>」选择默认</p><p><img src="'+l+'" alt="install-2404-step-3-keyboard_layout.png"></p><p>在最后安装过程中，可能会从原始软件源更新软件，如果网络不好，会导致安装过程极慢，因此建议在「<strong>连接到互联网</strong>」设置中，（建议）暂时不连接互联网，等安装完成进入系统后，（如果有必要）换源后再进行更新</p><p><img src="'+r+'" alt="install-2404-setp-4-connect_network.png"></p><p>「<strong>安装类型</strong>」中，选择下「优化您的计算机」，「自动安装」应该是 Ubuntu24.04新加入的功能，可以通过配置文件自动安装</p><p><img src="'+o+'" alt="install-2404-setp-5-install_type.png"></p><p>「<strong>应用程序和更新</strong>」选择默认集合进行最小安装，需要的软件可以在安装完成后手动安装需求的软件</p><p><img src="'+h+'" alt="install-2404-setp-6-app.png"></p><p>「<strong>优化您的计算机</strong>」中勾选全部选项，</p><p><img src="'+g+'" alt="install-2404-setp-7-optimize_computer.png"></p><p>「<strong>安装类型</strong>」选择手动分区</p><p><img src="'+d+'" alt="install-2404-setp-8-install_type.png"></p><p>接下来，是非常重要的分区设置</p><ol><li>查看可用的安装空间，选择剩余空间中，点击左下角的「➕」键，新建分区</li></ol><p><img src="'+u+'" alt="install-2404-setp-9-manual_partition_1.png"></p><ol start="2"><li>分区的选择，需要根据电脑的存储配置进行分配</li></ol><p>一般有这几种情况：</p><ul><li>只有一个硬盘，假定为「SSD」</li><li>有两个硬盘「 SSD+ HDD」，如果是「SSD+SSD」，那么选择读写较快的硬盘为「SSD」，另一个慢速硬盘假定为「HDD」</li><li>三个硬盘「 SSD+ HDD1+HDD2」，其中还是将最快速的硬盘作为「SSD」</li></ul><p>根据上述的情况假设，可以安装如下情况进行分区（仅供参考）：</p><table><thead><tr><th>分区</th><th>格式</th><th>分配盘</th><th>备注</th></tr></thead><tbody><tr><td><code>/boot</code></td><td><code>Ext4</code></td><td>SSD</td><td>内核及引导系统程序所需要的空间，一般预留 512/1024MB 即可</td></tr><tr><td><code>Swap</code></td><td>交换空间</td><td>SSD</td><td>根据需求配置，也可以不给。因为 swap 可以后续自己创建（创建在SSD上）</td></tr><tr><td><code>/</code></td><td><code>Ext4</code></td><td>SSD</td><td>剩余全部分配给根目录</td></tr><tr><td><code>/home</code></td><td><code>Ext4</code></td><td>HDD/HDD1</td><td>全部分配</td></tr><tr><td><code>/opt</code></td><td><code>Ext4</code></td><td>HDD2</td><td>全部分配，一般是第三方软件默认安装位置，也可以安装一些自己的软件</td></tr><tr><td><code>/opt/data</code></td><td><code>Ext4</code></td><td>HDD3</td><td>如果还有硬盘，一般就是用来存放训练数据集</td></tr></tbody></table><p><img src="'+c+'" alt="install-2404-setp-9-manual_partition_2.png"></p><ol start="3"><li>完成分区后，Ubuntu 24.04会自动设置 <code>/boot</code> 引导分区，相比于前代更加方便了</li></ol><p><img src="'+_+'" alt="install-2404-setp-9-manual_partition_3.png"></p><p>「<strong>设置您的账户</strong>」中，设置用户名</p><p><img src="'+m+'" alt="install-2404-setp-10-setup_account.png"></p><p>「<strong>选择时区</strong>」，默认即可</p><p><img src="'+k+'" alt="install-2404-setp-11-time_zone.png"></p><p>「<strong>准备安装</strong>」确认安装类型，点击安装进入下一步</p><p><img src="'+b+'" alt="install-2404-setp-12-ready_to_install.png"></p><p>「<strong>安装</strong>」比较久，建议断掉所有网络连接（有线），避免从互联网下载或更新软件，增加安装时间，安装或者更新软件都可以在安装完成后进行</p><p><img src="'+f+'" alt="install-2404-setp-13-installing.png"></p><p>「<strong>安装完成</strong>」，点击「立即启动」，按照提示「Please remove the installation medium, then press ENTER:」，移除安装介质，按下回车键重启</p><p><img src="'+F+'" alt="install-2404-setp-14-finish.png"></p><h3 id="ubuntu-2004-desktop-de-an-zhuang" tabindex="-1">Ubuntu 20.04 Desktop 的安装 <a class="header-anchor" href="#ubuntu-2004-desktop-de-an-zhuang" aria-label="Permalink to &quot;Ubuntu 20.04 Desktop 的安装&quot;">​</a></h3><p>在系统加载镜像后，Ubuntu 22.04 会执行 <code>Checking disks</code>（检查完整性），然后进入安装流程</p><p>「<strong>选择语言</strong>」英文或者中文均可</p><p><img src="'+y+'" alt="install-2204-step-1-choose_language.png"></p><p>「<strong>键盘布局</strong>」选择默认</p><p><img src="'+C+'" alt="install-2204-step-2-keyboard_layout.png"></p><p>「<strong>更新和其他软件</strong>」选择「最小安装」避免过多无用软件，取消勾选「安装Ubuntu时下载更新」加快安装，勾选☑️「为图形或无线。。。」确保驱动自动安装</p><p><img src="'+D+'" alt="install-2204-step-3-updates_and_other_software.png"></p><p>「<strong>安装类型</strong>」（推荐）选择「其他选项」确保清楚如何分区，参考 <a href="#手动分区">手动分区</a> 进行分区</p><p><img src="'+x+'" alt="install-2204-step-4-install_partition.png"></p><p>「<strong>手动分区</strong>」</p><p><img src="'+S+'" alt="install-2204-step-4-install_partition_1.png"></p><p>「<strong>手动分区</strong>」</p><p><img src="'+v+'" alt="install-2204-step-4-install_partition_2.png"></p><p>「<strong>手动分区</strong>」</p><p><img src="'+B+'" alt="install-2204-step-4-install_partition_3.png"></p><p>「<strong>手动分区</strong>」</p><p><img src="'+z+'" alt="install-2204-step-4-install_partition_4.png"></p><p>「<strong>手动分区</strong>」</p><p><img src="'+q+'" alt="install-2204-step-4-install_partition_5.png"></p><p>「<strong>手动分区</strong>」</p><p><img src="'+P+'" alt="install-2204-step-4-install_partition_6.png"></p><p>「<strong>选择时区</strong>」选择默认</p><p><img src="'+j+'" alt="install-2204-step-5-time_zone.png"></p><p>「<strong>设置您的账户</strong>」设置用户名</p><p><img src="'+E+'" alt="install-2204-step-6-account.png"></p><p>「<strong>准备安装</strong>」确认安装类型，点击安装进入下一步</p><p><img src="'+U+`" alt="install-2204-step-7-installing.png"></p><h3 id="shou-dong-fen-qu" tabindex="-1">手动分区 <a class="header-anchor" href="#shou-dong-fen-qu" aria-label="Permalink to &quot;手动分区&quot;">​</a></h3><span id="手动分区"></span><h2 id="chu-shi-hua-pei-zhi" tabindex="-1">🚀 初始化配置 <a class="header-anchor" href="#chu-shi-hua-pei-zhi" aria-label="Permalink to &quot;🚀 初始化配置&quot;">​</a></h2><h3 id="geng-huan-ruan-jian-yuan" tabindex="-1">更换软件源 <a class="header-anchor" href="#geng-huan-ruan-jian-yuan" aria-label="Permalink to &quot;更换软件源&quot;">​</a></h3><p>事实上，更换软件源不是必须的，如果能稳定地连接到原始默认的源，那么是没有必要换源的，但是，如果连接不稳定的情况，那么换源是有必要的。</p><p>因此在换源之前应该先测试一下原始源的连接情况，即跳转至步骤 <a href="#inner-link-geng-xin-ruan-jian-bao">“更新软件包”</a></p><p>更换软件源应该按照对应源的手册进行操作：</p><table><thead><tr><th>ubuntu 软件源</th><th>软件源使用帮助</th><th>ports 源使用帮助</th></tr></thead><tbody><tr><td>清华大学开源软件镜像站(<a href="https://mirrors.tuna.tsinghua.edu.cn" target="_blank" rel="noreferrer">TUNA</a>)</td><td><a href="https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/" target="_blank" rel="noreferrer">x86, x86_64</a></td><td><a href="https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu-ports/" target="_blank" rel="noreferrer">ARM(arm64, armhf)、PowerPC(ppc64el)、RISC-V(riscv64) 和 S390x 等</a></td></tr><tr><td>中国科学技术大学开源软件镜像(<a href="https://mirrors.ustc.edu.cn" target="_blank" rel="noreferrer">USTC</a>)</td><td><a href="https://mirrors.ustc.edu.cn/help/ubuntu.html" target="_blank" rel="noreferrer">AMD64(x86_64), Intel x86</a></td><td><a href="https://mirrors.ustc.edu.cn/help/ubuntu-ports.html" target="_blank" rel="noreferrer">arm64, armhf, PowerPC, ppc64el, s390x</a></td></tr><tr><td>上海交通大学 Linux 用户组 (<a href="https://mirrors.sjtug.sjtu.edu.cn" target="_blank" rel="noreferrer">SJTUG</a>)</td><td><a href="https://mirrors.sjtug.sjtu.edu.cn/docs/ubuntu" target="_blank" rel="noreferrer">ubuntu</a></td><td></td></tr></tbody></table><p>可以从上述软件源中选择一个进行更换，在更换之前，需要先备份原始的软件源：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list.bak</span></span></code></pre></div><p>更换完成后，按照 <a href="#inner-link-geng-xin-ruan-jian-bao">“更新软件包”</a> 步骤更新软件包。</p><h3 id="geng-xin-ruan-jian-bao" tabindex="-1">更新软件包 <a class="header-anchor" href="#geng-xin-ruan-jian-bao" aria-label="Permalink to &quot;更新软件包&quot;">​</a></h3><div id="inner-link-geng-xin-ruan-jian-bao"></div><p>从软件源获取最新的软件包列表</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div><p>更新（全部）已安装的软件包</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><h3 id="an-zhuang-chang-yong-ruan-jian" tabindex="-1">安装常用软件 <a class="header-anchor" href="#an-zhuang-chang-yong-ruan-jian" aria-label="Permalink to &quot;安装常用软件&quot;">​</a></h3><p>安装基本的软件</p><ul><li><code>net-tools</code>：网络工具，可以通过 <code>ifconfig</code> 查看网络信息</li><li><code>openssh-server</code>：SSH 服务端，安装后，可以通过 SSH 远程连接到该设备</li><li><code>git</code>：版本控制工具，获取项目</li><li><code>curl</code> 和 <code>wget</code>：网络工具，可以通过网络下载文件</li><li><code>vim</code> 和 <code>nano</code>：文本编辑器</li></ul><p>其中有一些软件已经默认安装了，安装命令如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    net-tools</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssh-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nano</span></span></code></pre></div><h3 id="pei-zhi-ssh" tabindex="-1">配置 SSH <a class="header-anchor" href="#pei-zhi-ssh" aria-label="Permalink to &quot;配置 SSH&quot;">​</a></h3><p>需要配置</p>`,96),T=[w];function I(A,N,R,V,G,J){return a(),s("div",null,T)}const K=t(H,[["render",I]]);export{L as __pageData,K as default};