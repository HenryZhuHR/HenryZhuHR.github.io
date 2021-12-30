



<!-- 
Linux基础知识、基本命令（起源、组成、常用命令如cp、ls、file、mkdir等常见操作命令）
Linux用户及权限基础
Linux系统进程管理进阶
Linux高效文本、文件处理命令（vim、grep、sed、awk、find等命令）
shell脚本入门（可边练习边学习） 
-->

# Linux 文件系统
- `/`
- `/bin` 	二进制可执行命令
- `/sbin` 系统管理命令，这里存放的是系统管理员使用的管理程序
- `/dev`	设备特殊文件
- `/etc`	系统管理和配置文件
- `/etc/rc.d`	启动的配置文件和脚本
- `/usr`
  - `/usr/bin`
  - `/usr/sbin`
<!-- 
/bin：是系统的一些指令。bin为binary的简写，主要放置一些系统的必备执行档例如:cat、cp、chmod df、dmesg、gzip、kill、ls、mkdir、more、mount、rm、su、tar等。
/sbin：一般是指超级用户指令。主要放置一些系统管理的必备程式例如:cfdisk、dhcpcd、dump、e2fsck、fdisk、halt、ifconfig、ifup、 ifdown、init、insmod、lilo、lsmod、mke2fs、modprobe、quotacheck、reboot、rmmod、 runlevel、shutdown等。
/usr：
/usr/bin：是你在后期安装的一些软件的运行脚本。主要放置一些应用软体工具的必备执行档例如c++、g++、gcc、chdrv、diff、dig、du、eject、elm、free、gnome*、 gzip、htpasswd、kfm、ktop、last、less、locale、m4、make、man、mcopy、ncftp、 newaliases、nslookup passwd、quota、smb*、wget等。
/usr/sbin：放置一些用户安装的系统管理的必备程式例如:dhcpd、httpd、imap、in.*d、inetd、lpd、named、netconfig、nmbd、samba、sendmail、squid、swap、tcpd、tcpdump等。
/dev：任何设备均以文件形式存在于该文件夹内(通过mount命令挂载成用户直接可用的文件系统)
/media：挂载的可移动设备
/etc：配置文件所在目录
/proc：是一种内核和内核模块用来向进程(process) 发送信息的机制(所以叫做/proc)。这个伪文件系统让你可以和内核内部数据结构进行交互，获取 有关进程的有用信息，在运行中(on the fly) 改变设置(通过改变内核参数)。 与其他文件系统不同，/proc 存在于内存之中而不是硬盘上。
/tmp：临时文件，关机时自动销毁
/var：系统产生的不可自动销毁的缓存文件、日志记录。（系统和程序运行后产生的数据、 -->

<!-- 
/bin	二进制可执行命令
/dev	设备特殊文件
/etc	系统管理和配置文件
/etc/rc.d	启动的配置文件和脚本
/home	用户主目录的基点，比如用户abc的主目录就是/home/user，可以用~abc表示
/lib	标准程序设计库
/sbin	系统管理命令，这里存放的是系统管理员使用的管理程序
/tmp	公用的临时文件存储点
/root	系统管理员的主目录
/mnt	系统提供这个目录是让用户临时挂载其他的文件系统。
/lost+found	这个目录平时是空的，系统非正常关机而留下“无家可归”的文件
/proc	虚拟的目录，是系统内存的映射。可直接访问这个目录来获取系统信息。
/var	某些大文件的溢出区，比方说各种服务的日志文件
/usr	最庞大的目录，要用到的应用程序和文件几乎都在这个目录。其中包含：
/usr/X11R6 存放X window的目录
/usr/bin 众多的应用程序
/usr/sbin 超级用户的一些管理程序
/usr/doc linux文档
/usr/include linux下开发和编译应用程序所需要的头文件
/usr/lib 常用的动态链接库和软件包的配置文件
/usr/man 帮助文档
/usr/src 源代码，linux内核的源代码就放在/usr/src/linux里
/usr/local/bin 本地增加的命令
/usr/local/lib 本地增加的库
 -->
# Linux 常用命令


## Linux 文件与目录管理
1. `ls` list files, 列出当前目录下的文件和文件名       

格式 `ls [选项] [目录或是文件]`  
```bash
# 列出文件
ls
# 列出包括隐藏文件在内的全部文件和目录
ls -a
# 列出全部目录而不列出文件
ls -d
# 递归列出目录及其子目录
ls -R 
# 列出文件权限、文件名等信息
ls -l
# 下面两个命令都是 列出包括隐藏文件在内的文件权限、文件名等信息
ls -al
ll

# . 表示当前目录
ls .  # 列出当前目录
# .. 表示当前目录
ls .. # 列出上一级目录
```
1. `mkdir` make directory,  创建目录
```bash
# 创建目录
mkdir newdir
```

2. `cd` change directory, 切换目录     
```bash
cd newdir
```

3. `pwd` print work directory, 显示当前工作目录   
```bash
pwd
```
得到输出结果
```bash
/home/ubuntu/newdir
```

4. `touch` 新建文件
```bash
# 新建一个名为 main.cpp 的文件
touch main.cpp
```

5. `cp` copy, 复制文件或目录
```bash
# 把当前目录的main.cpp复制一份，并且保存到上一级目录的m.cpp中
# 内容一样，名字可以修改
cp main.cpp ../m.cpp
# 用ls查看刚刚复制的文件
ls ..
```
复制目录的话需要加上`-r`，`-r`表示递归复制目录内的全部文件
```bash
# 切换到上一级目录
cd ..
cp -r newdir dir_cp
# 查看复制的目录
ls
```

6.  `mv` move, 移动文件或目录
```bash
mkdir test
ls
mv main.cpp
ls test
```

7.  `rm` remove, 删除文件或目录
```bash
rm -rf dir_cp
rm -rf test
```

8.  `cat` concatenate, 打印
```bash
# 打印文件内容
cat /etc/apt/sources.list
# 打印文件内容，显示行号
cat -n /etc/apt/sources.list
```

9. 文件备份、压缩与解压

`tar` tape archive, 用来建立，还原备份文件的工具程序，它可以加入、解开备份文件内的文件。
```bash
# 将文件 main.cpp 压缩，并且压缩文件命名为 m.tar.gz
tar -czvf m.tar.gz main.cpp
# 将目录 newdir 压缩，并且压缩文件命名为 newdir.tar.gz
tar -czvf newdir.tar.gz newdir
```
```bash
# 列出压缩文件内容
tar -tzvf m.tar.gz
```
```bash
# 将 m.tar.gz 解压
tar -xzvf m.tar.gz
```
对上述命令中出现的选项进行说明

- `tar -czvf m.tar.gz main.cpp` 中，`-c`是主选项，放在最前面，后面跟着`zvf`是辅助选项
- `-c`表示创建备份文件（压缩），`-x`表示从备份文件中还原（解压），共有**5个主命令**，主命令必选且互斥（每次调用tar文件必须选择一个主目录且只能选一个）：
  - `-c` 建立压缩档案
  - `-x` 解压
  - `-t` 查看内容
  - `-r` 在不重新打包的情况下，向压缩归档文件中追加文件
  - `-u` 更新原压缩包的文件
- `z` 表示通过gzip指令处理备份文件，文件后缀一般为`.tar.gz`，此外还有：
  - `-z` gzip属性的文件`tar.gz`
  - `-j` bz2属性的文件`tar.bz2`
  - `-Z` compress属性的文件`tar.Z`
- `v`表示可视化过程，显示压缩/解压文件的全部过程
- `f`表示文件，后面跟着备份文件名


## 进程管理的命令

1. `ps` process status, 查看您当前启动的进程
```bash
ps
```
`PID`表示进程号
```bash
  PID TTY          TIME CMD
   85 pts/0    00:00:00 bash
  117 pts/0    00:00:00 ps
```
2. `top` 打印当前系统运行的状态
```bash
top - 14:29:27 up 16 min,  0 users,  load average: 0.00, 0.00, 0.00
Tasks:   5 total,   1 running,   4 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0.0 us,  0.0 sy,  0.0 ni,100.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :   6223.4 total,   6096.6 free,     70.9 used,     56.0 buff/cache
MiB Swap:   2048.0 total,   2048.0 free,      0.0 used.   6002.0 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
    1 root      20   0     896    552    492 S   0.0   0.0   0:00.03 init
   83 root      20   0     904     80     20 S   0.0   0.0   0:00.00 init
   84 root      20   0     904     88     20 S   0.0   0.0   0:00.02 init
   85 ubuntu    20   0   10124   5236   3448 S   0.0   0.1   0:00.13 bash
```
> - 第一行`top - 14:29:27 up 16 min,  0 users,  load average: 0.00, 0.00, 0.00`依次是当前时间、系统启动时间、当前登录系统的用户数和系统平均负载信息。   
> - 第二行`Tasks:   5 total,   1 running,   4 sleeping,   0 stopped,   0 zombie`依次是进程总数、休眠进程数、运行进程数、僵死的进程数和停止的进程数。  
> - 第三行的CPU状态`%Cpu(s):  0.0 us,  0.0 sy,  0.0 ni,100.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st`依次为用户进程、系统进程、优先进程、输入/出等待进程和空闲进程占用的百分比数。  
> - 第四行的内存使用情况`MiB Mem :   6223.4 total,   6096.6 free,     70.9 used,     56.0 buff/cache`依次为平均可用内存、已用内存、空闲内存、共享内存和缓冲内存等。   
> - 第五行交换空间使用情况`MiB Swap:   2048.0 total,   2048.0 free,      0.0 used.   6002.0 avail Mem`依次为平均可用交换容量、已使用量、空闲数量和高速缓存数量。
> - 第六行以后`PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND`为各个进程的部分状态字段信息列表。
3. `top&` 启动进程
```bash
ps
top& 
```
4. `kill` 终止进程。超级用户可终止所有的进程，普通用户只能终止自己启动的进程。
```bash
# 启动一个新进程，并记录进程id：PID
top&
# 查看刚刚启动的进程及其id
ps
# 终止刚刚启动的进程，<PID>为其进程号
kill -9 <PID>
# 再次查看
ps
```


