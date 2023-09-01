import{b as s}from"./app.2770ee4c.js";import{_ as a}from"./hacs-install-setting.051e625f.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const e={},t=s(`<h1 id="home-assistant" tabindex="-1"><a class="header-anchor" href="#home-assistant" aria-hidden="true">#</a> Home Assistant</h1><p><a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">Home Assistant</a> \u662F\u4E00\u6B3E\u57FA\u4E8E Python \u7684\u667A\u80FD\u5BB6\u5C45\u5F00\u6E90\u7CFB\u7EDF\uFF0C\u652F\u6301\u591A\u54C1\u724C\u7684\u667A\u80FD\u5BB6\u5C45\u8BBE\u5907\uFF0C\u7528\u4E8E\u5B9E\u73B0\u8BBE\u5907\u7684\u8BED\u97F3\u63A7\u5236\u3001\u81EA\u52A8\u5316\u7B49\u3002</p><p>\u52A8\u673A\uFF1A\u82F9\u679C\u7684\u5BB6\u5C45\u597D\u662F\u597D\uFF0C\u4F46\u662F\u53C8\u8D35\u53C8\u5C11\uFF1B\u5C0F\u7C73\u7684\u4E1C\u897F\u4FBF\u5B9C\uFF0C\u4F46\u662F\u4E0D\u80FD\u76F4\u63A5\u52A0\u5230\u82F9\u679C\u5BB6\u5EAD\u5185</p><p>\u89E3\u51B3\uFF1A\u5C06 Home Assistant \u5B89\u88C5\u5230\u6811\u8393\u6D3E\u4E0A\uFF0C\u4F5C\u4E3A\u4E2D\u67A2\u63A7\u5236</p><p>\u652F\u6301\u5217\u8868\uFF1Ahttps://www.jianguoyun.com/p/DbzdYzoQp5HMBhjZ4IkB</p><ul><li><a href="#home-assistant">Home Assistant</a><ul><li><a href="#home-assistant-%E5%AE%89%E8%A3%85">Home Assistant \u5B89\u88C5</a><ul><li><a href="#docker-%E7%9A%84%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F">Docker \u7684\u5B89\u88C5\u65B9\u5F0F</a><ul><li><a href="#%E9%87%8D%E5%90%AF-home-assistant">\u91CD\u542F Home Assistant</a></li></ul></li><li><a href="#supervised-%E7%89%88%E6%9C%AC%E5%AE%89%E8%A3%85">Supervised \u7248\u672C\u5B89\u88C5</a></li><li><a href="#networkmanager">NetworkManager</a><ul><li><a href="#%E5%AE%89%E8%A3%85%E4%BE%9D%E8%B5%96">\u5B89\u88C5\u4F9D\u8D56</a></li><li><a href="#%E5%AE%89%E8%A3%85-docker-ce">\u5B89\u88C5 Docker-CE</a></li><li><a href="#%E5%AE%89%E8%A3%85-os-agent">\u5B89\u88C5 OS Agent</a></li><li><a href="#%E5%AE%89%E8%A3%85-supervised">\u5B89\u88C5 Supervised</a></li></ul></li><li><a href="#%E8%AE%BF%E9%97%AE-home-assistant">\u8BBF\u95EE Home Assistant</a></li></ul></li><li><a href="#hacs-%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85">HACS \u63D2\u4EF6\u5B89\u88C5</a></li><li><a href="#%E5%9C%A8-hacs-%E4%B8%AD%E5%AE%89%E8%A3%85-mi-miot">\u5728 HACS \u4E2D\u5B89\u88C5 Mi MioT</a></li><li><a href="#%E6%B7%BB%E5%8A%A0%E7%B1%B3%E5%AE%B6%E8%AE%BE%E5%A4%87">\u6DFB\u52A0\u7C73\u5BB6\u8BBE\u5907</a></li><li><a href="#%E6%B7%BB%E5%8A%A0%E5%88%B0-homekit-%E4%B8%AD">\u6DFB\u52A0\u5230 Homekit \u4E2D</a></li><li><a href="#%E4%B8%BB%E9%A2%98">\u4E3B\u9898</a></li></ul></li></ul><h2 id="home-assistant-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#home-assistant-\u5B89\u88C5" aria-hidden="true">#</a> Home Assistant \u5B89\u88C5</h2><h3 id="docker-\u7684\u5B89\u88C5\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#docker-\u7684\u5B89\u88C5\u65B9\u5F0F" aria-hidden="true">#</a> Docker \u7684\u5B89\u88C5\u65B9\u5F0F</h3><p>\u91C7\u7528 docker \u7684\u65B9\u5F0F\u5728\u6811\u8393\u6D3E\u4E0A\u5B89\u88C5 Home Assistant</p><p>\u7EC8\u7AEF\u8FD0\u884C\u4EE5\u5B89\u88C5docker</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> -sSL https://get.docker.com <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre></div><p>\u542F\u52A8docker\uFF0C\u5E76\u4E14\u5C06 Docker \u8BBE\u7F6E\u4E3A\u81EA\u52A8\u542F\u52A8\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>sudo service docker start
sudo systemctl enable docker
</code></pre></div><p>\u7136\u540E\u91CD\u65B0\u542F\u52A8 Pi\uFF0C\u6216\u8005\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u542F\u52A8 Docker \u5B88\u62A4\u7A0B\u5E8F\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre></div><p>\u5B89\u88C5\u5B8C docker \u540E\uFF0C\u76F4\u63A5\u5B89\u88C5 Home Assistant\uFF0C\u5176\u4E2D\u9700\u8981\u4FEE\u6539 <code>-v</code> \u53C2\u6570 <code>/home/pi/homeassistant:/config</code> \u4E3A Home Assistant \u914D\u7F6E\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF0C\u4FEE\u6539\u4E3A <code>&lt;\u8DEF\u5F84&gt;:/config</code> \uFF0C\u5176\u4F59\u53EF\u4EE5\u4E0D\u6539\u53D8</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run -d <span class="token punctuation">\\</span>
  --name homeassistant <span class="token punctuation">\\</span>
  --privileged <span class="token punctuation">\\</span>
  --restart<span class="token operator">=</span>unless-stopped <span class="token punctuation">\\</span>
  -e <span class="token assign-left variable">TZ</span><span class="token operator">=</span>MY_TIME_ZONE <span class="token punctuation">\\</span>
  -v /home/pi/homeassistant:/config <span class="token punctuation">\\</span>
  --network<span class="token operator">=</span>host <span class="token punctuation">\\</span>
  ghcr.io/home-assistant/raspberrypi4-homeassistant:stable
</code></pre></div><h4 id="\u91CD\u542F-home-assistant" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542F-home-assistant" aria-hidden="true">#</a> \u91CD\u542F Home Assistant</h4><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> restart homeassistant
</code></pre></div><h3 id="supervised-\u7248\u672C\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#supervised-\u7248\u672C\u5B89\u88C5" aria-hidden="true">#</a> Supervised \u7248\u672C\u5B89\u88C5</h3><blockquote><p>\u53C2\u8003 <a href="https://github.com/home-assistant/supervised-installer" target="_blank" rel="noopener noreferrer">Install Home Assistant Supervised</a> \u83B7\u53D6\u66F4\u591A\u7684\u4FE1\u606F</p></blockquote><p>\u67E5\u770B\u6811\u8393\u6D3E\u7248\u672C</p><div class="language-bash ext-sh"><pre class="language-bash"><code>lsb_release -a
</code></pre></div><h3 id="networkmanager" tabindex="-1"><a class="header-anchor" href="#networkmanager" aria-hidden="true">#</a> NetworkManager</h3><p>HomeAssistantSupervised\u9700\u8981NetworkManager\u7684\u652F\u6301\uFF0C\u6811\u8393\u6D3E\u5B98\u65B9\u4F7F\u7528\u7684\u662FModemManager\u3001openresolv\u548Cdhcpcd5\u3002</p><p>\u539F\u672C\u7684\u914D\u7F6E\u53EF\u4EE5\u4E0D\u52A8\uFF0C\u4F46\u662F\u9700\u8981\u56FA\u5B9AMac\u5730\u5740\u5E76\u7981\u7528ModemManger\u3002</p><p>\u56E0\u4E3ANetworkManager\u4E00\u65E6\u5B89\u88C5\u5C31\u4F1A\u5F00\u59CB\u5DE5\u4F5C\u3002\u6240\u4EE5\u6211\u4EEC\u5148\u521B\u5EFA\u4E00\u4E2ANetworkManager\u7684\u914D\u7F6E\u6587\u4EF6\u6765\u56FA\u5B9AMac\u5730\u5740\uFF0C\u9632\u6B62\u6211\u4EEC\u540E\u7EED\u64CD\u4F5C\u91CD\u542F\u65F6\u5019\uFF0C\u6811\u8393\u6D3E\u7684Mac\u5730\u5740\u9891\u7E41\u53D8\u66F4\u3002</p><p>\u9884\u7F16\u5199NetworkManager\u7684\u914D\u7F6E\uFF1A</p><p>\u521B\u5EFA\u914D\u7F6E\u76EE\u5F55\u548C\u6587\u4EF6</p><div class="language-text ext-text"><pre class="language-text"><code>sudo mkdir -p /etc/NetworkManager/conf.d/
</code></pre></div><p>\u5BF9\u6587\u4EF6\u8FFD\u52A0\u5185\u5BB9</p><div class="language-text ext-text"><pre class="language-text"><code>sudo nano /etc/NetworkManager/conf.d/100-disable-wifi-mac-randomization.conf
</code></pre></div><p>\u8FFD\u52A0\u7684\u5185\u5BB9\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>[connection]
wifi.mac-address-randomization=1

[device]
wifi.scan-rand-mac-address=no
</code></pre></div><p>\u4E4B\u540E\u5C31\u53EF\u4EE5\u5B89\u88C5network-manager\u4E86\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>sudo apt install -y network-manager
</code></pre></div><p>\u4E4B\u540E\uFF0C\u9700\u8981\u7981\u7528ModeManager\uFF1A</p><p>\u505C\u6B62ModemManager</p><div class="language-text ext-text"><pre class="language-text"><code>sudo systemctl stop ModemManager
</code></pre></div><p>\u7981\u6B62ModemManager\u5F00\u673A\u81EA\u542F</p><div class="language-text ext-text"><pre class="language-text"><code>sudo systemctl disable ModemManager
</code></pre></div><p>\u5230\u6B64\uFF0CNetworkManager\u90E8\u5206\u5C31\u51C6\u5907\u597D\u4E86\u3002</p><h4 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h4><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y apparmor jq <span class="token function">wget</span> <span class="token function">curl</span> udisks2 libglib2.0-bin network-manager dbus systemd-journal-remote
</code></pre></div><p>\u4F46\u662F\u9700\u8981\u6CE8\u610F\uFF0C\u9700\u8981\u628Aapparmor\u7684\u542F\u52A8\u914D\u7F6E\u53C2\u6570\u52A0\u5230\u6811\u8393\u6D3E\u7684\u542F\u52A8\u53C2\u6570\u5185\uFF08\u53C2\u8003\u81EA\uFF1Ahttps://github.com/Kanga-Who/home-assistant/issues/25\uFF09\uFF1A add\xA0<code>apparmor=1 security=apparmor</code>\xA0to\xA0<code>/boot/cmdline.txt</code></p><h4 id="\u5B89\u88C5-docker-ce" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-docker-ce" aria-hidden="true">#</a> \u5B89\u88C5 Docker-CE</h4><p>\u5B89\u88C5 Docker-CE (Community Edition)\u3002Docker CE (Community Edition) is the only supported containerization method for Home Assistant Supervised.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -fsSL https://get.docker.com -o get-docker.sh
<span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh --mirror Aliyun
</code></pre></div><p>\u628A\u6211\u4EEC\u81EA\u5E26\u7684\u7528\u6237\u6DFB\u52A0\u5230docker\u7528\u6237\u7EC4\u5185\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>sudo usermod -aG docker pi
</code></pre></div><h4 id="\u5B89\u88C5-os-agent" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-os-agent" aria-hidden="true">#</a> \u5B89\u88C5 OS Agent</h4><p>\u5B89\u88C5 <a href="https://github.com/home-assistant/os-agent/tree/main#using-home-assistant-supervised-on-debian" target="_blank" rel="noopener noreferrer">OS-Agent</a>\u3002\u4ECE [GitHub Release](<a href="https://github.com/home-assistant/os-agent/releases/latest" target="_blank" rel="noopener noreferrer">https://github.com/home-assistant/os-agent/releases/latest</a> \u4E0B\u8F7D\u6700\u65B0\u7684 OS Agent Debian package (linux_aarch64)\uFF0C\u5E76\u5B89\u88C5</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg -i os-agent_1.4.1_linux_aarch64.deb
</code></pre></div><blockquote><p><code>uname -a</code> \u67E5\u770B\u5F53\u524D\u6811\u8393\u6D3E\u67B6\u6784\uFF0C\u6811\u8393\u6D3E4B\u4E3A ARM v8 \u6307\u4EE4\u96C6</p></blockquote><p>You can test if the installation was successful by running:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>gdbus introspect --system --dest io.hass.os --object-path /io/hass/os
</code></pre></div><blockquote><p>You might need to install\xA0<code>libglib2.0-bin</code>\xA0to get the\xA0<code>gdbus</code>\xA0command. \u51FA\u73B0\u4EE5\u4E0B\u5185\u5BB9</p></blockquote><details><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">node</span> /io/hass/os <span class="token punctuation">{</span>

  interface org.freedesktop.DBus.Introspectable <span class="token punctuation">{</span>

    methods:

      Introspect<span class="token punctuation">(</span>out s out<span class="token punctuation">)</span><span class="token punctuation">;</span>

    signals:

    properties:

  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  interface org.freedesktop.DBus.Properties <span class="token punctuation">{</span>

    methods:

      Get<span class="token punctuation">(</span>in  s interface,

          <span class="token keyword">in</span>  s property,

          out <span class="token function">v</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

      GetAll<span class="token punctuation">(</span>in  s interface,

             out a<span class="token punctuation">{</span>sv<span class="token punctuation">}</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>

      Set<span class="token punctuation">(</span>in  s interface,

          <span class="token keyword">in</span>  s property,

          <span class="token keyword">in</span>  <span class="token function">v</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    signals:

      PropertiesChanged<span class="token punctuation">(</span>s interface,

                        a<span class="token punctuation">{</span>sv<span class="token punctuation">}</span> changed_properties,

                        as invalidates_properties<span class="token punctuation">)</span><span class="token punctuation">;</span>

    properties:

  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  interface io.hass.os <span class="token punctuation">{</span>

    methods:

    signals:

    properties:

      @org.freedesktop.DBus.Property.EmitsChangedSignal<span class="token punctuation">(</span><span class="token string">&quot;invalidates&quot;</span><span class="token punctuation">)</span>

      <span class="token builtin class-name">readonly</span> s Version <span class="token operator">=</span> <span class="token string">&#39;1.4.1&#39;</span><span class="token punctuation">;</span>

      @org.freedesktop.DBus.Property.EmitsChangedSignal<span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span>

      readwrite b Diagnostics <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></details><h4 id="\u5B89\u88C5-supervised" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-supervised" aria-hidden="true">#</a> \u5B89\u88C5 Supervised</h4><p>\u5B89\u88C5 Home Assistant Supervised Debian Package</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/home-assistant/supervised-installer/releases/latest/download/homeassistant-supervised.deb

<span class="token function">sudo</span> dpkg -i homeassistant-supervised.deb
</code></pre></div><blockquote><p><code>homeassistant-supervised.deb</code> \u9700\u8981\u79D1\u5B66\u4E0A\u7F51</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>info<span class="token punctuation">]</span> Restarting NetworkManager
<span class="token punctuation">[</span>info<span class="token punctuation">]</span> Enable systemd-resolved
<span class="token punctuation">[</span>info<span class="token punctuation">]</span> Enable systemd-journal-gatewayd
<span class="token punctuation">[</span>info<span class="token punctuation">]</span> Restarting <span class="token function">docker</span> <span class="token function">service</span>
PING checkonline.home-assistant.io <span class="token punctuation">(</span><span class="token number">172.67</span>.68.90<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.67</span>.68.90: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">46</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">101</span> ms

--- checkonline.home-assistant.io <span class="token function">ping</span> statistics ---
<span class="token number">1</span> packets transmitted, <span class="token number">1</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 0ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">100.631</span>/100.631/100.631/0.000 ms
<span class="token punctuation">[</span>info<span class="token punctuation">]</span> Install supervisor startup scripts
<span class="token punctuation">[</span>info<span class="token punctuation">]</span> Install AppArmor scripts
<span class="token punctuation">[</span>info<span class="token punctuation">]</span> Start Home Assistant Supervised
<span class="token punctuation">[</span>info<span class="token punctuation">]</span> Installing the <span class="token string">&#39;ha&#39;</span> cli
<span class="token punctuation">[</span>warn<span class="token punctuation">]</span> Could not <span class="token function">find</span> /etc/default/grub or /boot/firmware/cmdline.txt failed to switch to cgroup v1
<span class="token punctuation">[</span>info<span class="token punctuation">]</span> Within a few minutes you will be able to reach Home Assistant at:
<span class="token punctuation">[</span>info<span class="token punctuation">]</span> http://homeassistant.local:8123 or using the IP address of your
<span class="token punctuation">[</span>info<span class="token punctuation">]</span> machine: http://192.168.1.7:8123
</code></pre></div><p>\u7B49\u5F85\u4E00\u4F1A\u513F\u5C31\u53EF\u4EE5<a href="#%E8%AE%BF%E9%97%AE-home-assistant">\u8BBF\u95EE Home Assistant</a></p><p>\u5B89\u88C5\u540E <code>raspberrypi.local</code> \u4F1A\u5931\u6548</p><p><strong>\u67E5\u770B\u5B89\u88C5\u65E5\u5FD7</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl -f
</code></pre></div><p>\u67E5\u770BDocker\u5BB9\u5668\u6570\u91CF\uFF0C\u5B8C\u5168\u88C5\u5B8C\u597D\u50CF\u662F8\u4E2A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> -a
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>
</code></pre></div><p>\u67E5\u770B\u72B6\u6001 docker logs -f hassio_supervisor</p><h3 id="\u8BBF\u95EE-home-assistant" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE-home-assistant" aria-hidden="true">#</a> \u8BBF\u95EE Home Assistant</h3><p>\u901A\u8FC7 <code>http://&lt;raspberry-ip&gt;:8123</code> \u8BBF\u95EE</p><ul><li>homeassistant.local:8123</li><li>raspberrypi.local:8123</li><li></li></ul><p>http://192.168.1.7:8123</p><p>\u5B89\u88C5\u540E homeassistant \u7684\u76EE\u5F55\u4E3A <code>/usr/share/hassio/homeassistant/</code></p><h2 id="hacs-\u63D2\u4EF6\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#hacs-\u63D2\u4EF6\u5B89\u88C5" aria-hidden="true">#</a> HACS \u63D2\u4EF6\u5B89\u88C5</h2><p>Github \u4E0A <a href="https://github.com/hacs/integration" target="_blank" rel="noopener noreferrer">HACS</a></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">wget</span> -O - https://get.hacs.xyz <span class="token operator">|</span> <span class="token function">bash</span> -
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code>INFO: Creating HACS directory<span class="token punctuation">..</span>.
INFO: Unpacking HACS<span class="token punctuation">..</span>.
INFO: Removing HACS <span class="token function">zip</span> file<span class="token punctuation">..</span>.
INFO: Installation complete.

INFO: Remember to restart Home Assistant before you configure it
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> restart homeassistant
</code></pre></div><p>\u6253\u5F00\u9AD8\u7EA7\u8BBE\u7F6E\u786E\u4FDD\u53EF\u4EE5\u5B89\u88C5HACS <img src="`+a+`" alt="\u6253\u5F00\u9AD8\u7EA7\u8BBE\u7F6E"></p><p>\u914D\u7F6E -&gt; \u901A\u7528 -&gt; \u670D\u52A1\u63A7\u5236 -&gt; \u670D\u52A1\u7BA1\u7406 -&gt; \u91CD\u65B0\u542F\u52A8</p><p>\u5982\u679C\u65E0\u6548\u5219\u9700\u8981\u5728\u6811\u8393\u6D3E\u7EC8\u7AEF\u91CD\u542Fdocker</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> restart
</code></pre></div><p>\u6309\u7167 https://hacs.xyz/docs/configuration/basic \u8BBE\u7F6E HACS</p><h2 id="\u5728-hacs-\u4E2D\u5B89\u88C5-mi-miot" tabindex="-1"><a class="header-anchor" href="#\u5728-hacs-\u4E2D\u5B89\u88C5-mi-miot" aria-hidden="true">#</a> \u5728 HACS \u4E2D\u5B89\u88C5 Mi MioT</h2><p>https://gitee.com/al-one/hass-xiaomi-miot</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">wget</span> -q -O - https://raw.githubusercontent.com/al-one/hass-xiaomi-miot/master/install.sh <span class="token operator">|</span> <span class="token assign-left variable">ARCHIVE_TAG</span><span class="token operator">=</span>latest <span class="token function">bash</span> -
<span class="token comment"># \u5982\u679C\u9047\u5230\u4E0B\u8F7D\u7F13\u6162\u6216\u4E0B\u8F7D\u5931\u8D25\u53EF\u4EE5\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4</span>
<span class="token function">wget</span> -q -O - https://ghproxy.com/raw.githubusercontent.com/al-one/hass-xiaomi-miot/master/install.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token assign-left variable">HUB_DOMAIN</span><span class="token operator">=</span>ghproxy.com/github.com <span class="token assign-left variable">ARCHIVE_TAG</span><span class="token operator">=</span>latest <span class="token function">bash</span> -
<span class="token comment"># \u6216\u8005</span>
<span class="token function">wget</span> -q -O - https://raw.fastgit.org/al-one/hass-xiaomi-miot/master/install.sh <span class="token operator">|</span> <span class="token assign-left variable">HUB_DOMAIN</span><span class="token operator">=</span>hub.fastgit.xyz <span class="token assign-left variable">ARCHIVE_TAG</span><span class="token operator">=</span>latest <span class="token function">bash</span> -
</code></pre></div><h2 id="\u6DFB\u52A0\u7C73\u5BB6\u8BBE\u5907" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u7C73\u5BB6\u8BBE\u5907" aria-hidden="true">#</a> \u6DFB\u52A0\u7C73\u5BB6\u8BBE\u5907</h2><h2 id="\u6DFB\u52A0\u5230-homekit-\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5230-homekit-\u4E2D" aria-hidden="true">#</a> \u6DFB\u52A0\u5230 Homekit \u4E2D</h2><h2 id="\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898" aria-hidden="true">#</a> \u4E3B\u9898</h2><p>\u8BBE\u7F6E\u4E3B\u9898\u4E4B\u524D\uFF0C\u9700\u8981\u4FEE\u6539 <code>homeassistant</code> \u76EE\u5F55\u4E0B\u7684 <code>configuration.yaml</code> \u6587\u4EF6\uFF0C\u7136\u540E\u91CD\u542F homeassistant (docker \u5B89\u88C5\u65B9\u5F0F\u4E3A <code>/usr/share/hassio/homeassistant/configuration.yaml</code>)</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># Loads default set of integrations. Do not remove.</span>
<span class="token key atrule">default_config</span><span class="token punctuation">:</span>

<span class="token comment"># Text to speech</span>
<span class="token key atrule">tts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">platform</span><span class="token punctuation">:</span> google_translate

<span class="token comment"># \u6DFB\u52A0\u4E0B\u9762\u4E24\u884C\u914D\u7F6E\uFF0C\u7B2C\u4E8C\u884C\u6700\u524D\u9762\u662F\u4E24\u4E2A\u7A7A\u683C</span>
<span class="token key atrule">frontend</span><span class="token punctuation">:</span>
  <span class="token key atrule">themes</span><span class="token punctuation">:</span> <span class="token tag">!include_dir_merge_named</span> themes

<span class="token key atrule">automation</span><span class="token punctuation">:</span> <span class="token tag">!include</span> automations.yaml
<span class="token key atrule">script</span><span class="token punctuation">:</span> <span class="token tag">!include</span> scripts.yaml
<span class="token key atrule">scene</span><span class="token punctuation">:</span> <span class="token tag">!include</span> scenes.yaml
</code></pre></div><p>themes/ios-themes/ios-themes.yaml</p><p>Mushroom \u5361\u7247\uFF1A <a href="https://github.com/piitaya/lovelace-mushroom" target="_blank" rel="noopener noreferrer">piitaya/lovelace-mushroom</a> \u5728 HACS \u5185\u7684\u524D\u7AEF\u9009\u9879\uFF0C\u641C\u7D22 Mushroom \u5373\u53EF</p><p>\u53C2\u8003\uFF1A https://www.bilibili.com/read/cv15938967</p>`,97);function o(p,c){return t}var u=n(e,[["render",o]]);export{u as default};
