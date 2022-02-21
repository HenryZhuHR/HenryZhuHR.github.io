
# 使用 frp 进行内网穿透
内网穿透 (Intranet penetration) 

## 下载软件
在 [Github](https://github.com/fatedier/frp) 的 [Release](https://github.com/fatedier/frp/releases) 页面中下载到最新版本的客户端和服务端二进制文件，所有文件被打包在一个压缩包中
## 常用参数


## 基于 ssh 部署
参考 [文档](https://gofrp.org/docs/) 进行配置和部署

解压缩下载的压缩包，将其中的 frpc 拷贝到内网服务所在的机器上，将 frps 拷贝到具有公网 IP 的机器上，放置在任意目录。

### 配置服务端
1. 这个示例通过简单配置 TCP 类型的代理让用户访问到内网的服务器。
在具有公网 IP 的机器上部署 frps，修改 frps.ini 文件，这里使用了最简化的配置，设置了 frp 服务器用户接收客户端连接的端口：

```ini
[common]
bind_port = 7000
```
`bind_port` 是绑定的端口号，
- 端口可以自定义，但是需要客户端和服务端进行统一。
- 服务器需要在esc管理中配置安全组规则中暴露该端口


先启动服务端(具有公网 IP 的机器)
```sh
./frps -c ./frps.ini
```

### 配置客户端
2. 在需要被访问的内网机器上（SSH 服务通常监听在 22 端口）部署 frpc，修改 `frpc.ini` 文件，假设 frps 所在服务器的公网 IP 为 `x.x.x.x`：
```ini
[common]
server_addr = x.x.x.x
server_port = 7000

[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 6000
```

`local_ip` 和 `local_port` 配置为本地需要暴露到公网的服务地址和端口。

`remote_port` 表示在 frp 服务端监听的端口，访问此端口的流量将会被转发到本地服务对应的端口。

(先启动服务端，再) 启动客户端(需要被访问的内网机器)
```sh
./frpc -c ./frpc.ini
```

### 多个客户端的配置
```ini
[common]
server_addr = x.x.x.x
server_port = 7000

[ssh001]   # 唯一 不可重复
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 6001  # 唯一 不可重复
```      

### ssh 远程访问
如果需要在后台长期运行，建议结合其他工具使用，例如 systemd 和 supervisor。

通过 SSH 访问内网机器，假设用户名为 test：
```sh
ssh -oPort=6000 test@x.x.x.x
```
frp 会将请求 `x.x.x.x:6000` 的流量转发到内网机器的 22 端口。


<!-- 参考 https://www.cnblogs.com/anonymous-test/p/13645148.html -->