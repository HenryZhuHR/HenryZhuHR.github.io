---
layout: Post
title: Nginx 
subtitle: Web 服务器必备的好东西
author: HenryZhu
date: 2022-03-31
useHeaderImage: true
headerImage: /images/home-background/quentin-mabille-26.jpg
headerMask: rgb(0,0,0, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - web
---

# Nginx
[Nginx](https://nginx.org) 是毛子出品的高性能 HTTP 和反向代理 web 服务器

## install Nginx
在 Linux 服务器上安装 Nginx
<CodeGroup>
  <CodeGroupItem title="Debian/Ubuntu">

```sh
sudo apt update
sudo apt install -y nginx
```
  </CodeGroupItem>
  <CodeGroupItem title="RHEL/CentOS">

```sh
sudo yum installnginx
```
  </CodeGroupItem>
</CodeGroup>

[官方文档](https://nginx.org/en/docs/)

## Nginx 命令

- `sudo nginx -s stop` — fast shutdown
- `sudo nginx -s quit` — graceful shutdown
- `sudo nginx -s reload` — reloading the configuration file
- `sudo nginx -s reopen` — reopening the log files
- `sudo nginx -c /etc/nginx/nginx.conf`

## 配置文件
<!-- https://nginx.org/en/docs/beginners_guide.html -->
Nginx 的配置文件 `nginx.conf` 可能会在这几个地方: `/usr/local/nginx/conf`, `/etc/nginx`, `/usr/local/etc/nginx`
 
> 在我的 ubuntu server 上，配置文件在 `/etc/nginx/nginx.conf`

配置文件 `nginx.conf` 的结构
```conf
user ubuntu;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
	worker_connections 768;
	# multi_accept on;
}

http {
    ...   
}

#mail {
#	...
#}
```


## HTTP 端口转发
以 http 常用的 80 端口为例，基本配置文件为
```conf
server {
    listen 80;
    server_name localhost; 
    access_log /home/ubuntu/nginx/logs/access.log combined;
    error_log /home/ubuntu/nginx/logs/error.log;
}
```
- `listen` 监听端口，`http` 一般是 `80`
- `server_name` 监听ip。换成服务器 **公网IP** 或者 **域名**
- `access_log` 和 `error_log` 是日志文件，需要保证目录存在 `/home/ubuntu/nginx/logs/` ，否则就无法生存日志文件

这时候重新加载数据文件 `sudo nginx -s reload`