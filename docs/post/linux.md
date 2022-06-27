---
layout: Post
title: Ubuntu Go!
subtitle: 一些 Ubuntu 系统使用小技巧，一些技巧同样适用于其他 Linux 发行版本
author: HenryZhu
date: 2022-06-26
useHeaderImage: true
headerImage: /images/home-background/terraform-studios-021122-totem-entrance-qm.jpg
headerMask: rgb(0,0,0, .5)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - web
---


# Ubutnu Go


## Linux 环境变量

### 如何查看环境变量

查看环境变量有三个命令：

- `env`: 列出所有的环境变量
- `export`: 列出所有的环境变量，但 export 可以指定列出某一环境变量
- `echo $PATH`: 列出指定变量，例如列出变量 `PATH` 的值，里面包含了已添加的目录。

有一些十分有用的环境变量，例如
- `USER`: 当前登陆用户，例如 `ubuntu`。
- `HOME`: 当前登陆用户的用户目录，例如等价于 `/home/ubuntu`。
- `PWD`: 当前工作目录

### 设置环境变量

以下两条命令效果一样的，区别在于系统查找路径的顺序
```shell
export PATH=$PATH:/path/to/your/dir       # 加到 PATH 末尾
export PATH=/path/to/your/dir:$PATH       # 加到 PATH 开头
```
添加路径后，可以运行 `echo $PATH` 查看路径，这是

<!-- 例如 `PATH` 中包含了两个 python 路径：
```shell
$ echo $PATH
/usr/bin/python:/home/zhr/miniconda3/bin/python
```
那么这时候，运行 python 先找到 /usr/bin/python -->

同时，也可以新建变量供其他程序使用，例如设置 `OpenCV_DIR` 供 CMake 编译查找使用
```shell
OpenCV_HOME=$HOME/program/opencv-4.5.5
export OpenCV_DIR=$OpenCV_HOME/lib/cmake/opencv4
```


相较于 Windows 操作系统来说，

### 环境变量的作用域

- **终端作用域**

在当前终端下，直接添加环境变量，只对当前终端生效，退出终端后失效
```shell
export JAVA_HOME=$HOME/program/jdk-17.0.2.jdk/Contents/Home
```

- **当前用户作用域** <span id="env-var-for-user"></span>

编辑用户目录下的 `~/.bashrc` 文件
```shell
vim ~/.bashrc
```
添加环境变量
```shell
export JAVA_HOME=$HOME/program/jdk-17.0.2.jdk/Contents/Home
```
然后重启终端或者运行命令激活：
```shell
source ~/.bashrc
```

> - `~` 与 `$HOME` 变量的值一致，表示当前用户目录
> - `.bashrc` 文件指的是 bash 的配置文件，如果系统使用的是其他 shell ，例如使用 zsh 应该修改 `.zshrc` 

- **全部用户作用域**

编辑系统目录下的 `/etc/profile` 文件，流程[当前用户作用域](#env-var-for-user)




<!-- 
在linux系统的环境下，不管是root用户还是其它的用户只有登陆系统后用进入操作我们都可以通过命令history来查看历史记录，可是假如一台服务器多人登陆，一天因为某人误操作了删除了重要的数据。这时候通过查看历史记录（命令：history）是没有什么意义了（因为history只针对登录用户下执行有效，即使root用户也无法得到其它用户histotry历史）。那有没有什么办法实现通过记录登陆后的IP地址和某用户名所操作的历史记录呢？答案：有的。

通过在/etc/profile里面加入以下代码就可以实现：


```sh
PS1="`whoami`@`hostname`:"'[$PWD]'

history
USER_IP=`who -u am i 2>/dev/null| awk '{print $NF}'|sed -e 's/[()]//g'`


if [ "$USER_IP" = "" ]
then
USER_IP=`hostname`
fi

if [ ! -d /tmp/dbasky ]
then
mkdir /tmp/dbasky
chmod 777 /tmp/dbasky
fi

if [ ! -d /tmp/dbasky/${LOGNAME} ]
then
mkdir /tmp/dbasky/${LOGNAME}
chmod 300 /tmp/dbasky/${LOGNAME}
fi
export HISTSIZE=4096
DT=`date "+%Y-%m-%d_%H:%M:%S"`
export HISTFILE="/tmp/dbasky/${LOGNAME}/${USER_IP} dbasky.$DT"
chmod 600 /tmp/dbasky/${LOGNAME}/*dbasky* 2>/dev/null
```


source /etc/profile 使用脚本生效

退出用户，重新登录

上面脚本在系统的/tmp新建个dbasky目录，记录所有登陆过系统的用户和IP地址（文件名），每当用户登录/退出会创建相应的文件，该文件保存这段用户登录时期内操作历史，可以用这个方法来监测系统的安全性。

root@zsc6:[/tmp/dbasky/root]ls 
10.1.80.47 dbasky.2013-10-24_12:53:08 
root@zsc6:[/tmp/dbasky/root]cat 10.1.80.47 dbasky.2013-10-24_12:53:08

查看在12:53:08从10.1.80.47登录的root用户操作命令历史


Linux - 查看用户登录记录: https://blog.csdn.net/m0_37470701/article/details/105950702 -->