# 实验1 Linux基础
- [实验1 Linux基础](#实验1-linux基础)
- [实验目的](#实验目的)
- [实验环境](#实验环境)
- [Linux基本命令](#linux基本命令)
  - [文件目录](#文件目录)
  - [进程管理的命令](#进程管理的命令)
- [vi编辑器的使用](#vi编辑器的使用)
  - [vi/vim 简介](#vivim-简介)
  - [vi编辑器练习](#vi编辑器练习)
- [补充知识](#补充知识)
  - [Linux 文件系统](#linux-文件系统)
    - [Linux 目录结构](#linux-目录结构)
  - [Linux C编程基础](#linux-c编程基础)
    - [Linux 编译器 gcc](#linux-编译器-gcc)

# 实验目的
1. 熟悉Linux下的基本操作，学会使用Shell命令去操作Linux。
2. 学习和掌握vi编辑器的基本使用方法。
3. 学会使用vi编辑器编辑简单的C语言程序，学习和掌握gcc等Linux的开发调试环境。

# 实验环境
选择其中一个环境做实验即可
1. VMware虚拟机
2. [Windows WLS2](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)(推荐)，可在**Microsoft 应用商店**中下载，并按照[官方教程](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)安装运行
3. MacOS，MacOS可运行大部分Unix命令，但是部分命令无法运行


# Linux基本命令
## 文件目录
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

# vi编辑器的使用
## vi/vim 简介
vi编辑器是所有Unix及Linux系统下（包括MacOS）标准的编辑器

![vi/vim键盘图](https://www.runoob.com/wp-content/uploads/2015/10/vi-vim-cheat-sheet-sch.gif)

vi编辑器下的三种模式：
- **命令行模式 (command mode)**      
  按`esc`进入命令行模式    
  控制屏幕光标的移动，字符、字或行的删除，移动复制某区段及进入Insert mode下，或者到 last line mode。
- **插入模式 (insert mode)**   
  按`i`进入插入模式，进行文本输入，底部会出现如下字样，表示当前模式     
  ```bash
  -- INSERT --
  ```
  字符按键以及Shift组合，输入字符
  - `ENTER`，回车键，换行
  - `BACK SPACE`，退格键，删除光标前一个字
  - `DEL`，删除键，删除光标后一个字符
  - `方向键`，在文本中移动光标
  - `HOME/END`，移动光标到行首/行尾
  - `Page Up/Page Down`，上/下翻页
  - `Insert`，切换光标为输入/替换模式，光标将变成竖线/下划线
  - `ESC`，退出输入模式，切换到命令模式

- **最后行模式 (last line mode)**   
  在命令行模式下，输入`:`即可进入最后行模式
  ```bash
  :w  # 保存文件
  :w <filename> # 保存文件，并且命名为 <filename>
  :wq # 保存并且退出
  :w! # 不保存，强行退出
  ```

## vi编辑器练习
使用vi编辑代码
```bash
touch hello.c
vi hello.c
```
按下`i`进入插入模式，输入代码
```c
#include "stdio.h"
int main()
{
    printf("hello world\n");
    return 0;
}
```
按下`esc`进入命令模式，按下`:`进入最后行模型，输入`wq`保存并且退出

安装gcc编译器
```bash
sudo apt install -y gcc
```
编译源代码，输出可执行文件`app`
```bash
gcc main.c -o app
```
运行可执行文件`app`
```bash
./app
```

# 补充知识
## Linux 文件系统
### Linux 目录结构
Linux 文件系统是树状的结构，系统中每个分区都是一个文件系统，都有自己的目录层次。Linux 会将这些分属不同分区的、单独的文件系统按树型的方式形成一个系统的总的目录层次结构。目录提供了一个管理文件方便而有效的途径，最上层是根目录，其他的所有目录都是从根目录出发而生成的。微软的DOS 和Windows 也是采用树型结构，但是在DOS 和Windows 中这样的树型结构的根是磁盘分区的盘符，有几个分区就有几个树型结构，它们之间的关系是并列的。但在Linux 中，无论操作系统管理几个磁盘分区，这样的目录树都只有一个。

Linux 使用标准的目录结构，在安装的时候，安装程序就已经为用户创建了文件系统和完整而固定的目录结构，并指定了每个目录的作用和其中的文件类型。

- `/bin` 存放常用的二进制可执行命令，如：ls, mv, rm, mkdir, rmdir, gzip, tar, telnet, 及 ftp 等等。通常它与 /usr/bin 的内容是一样的。
- `/dev` 存放与设备有关的特殊文件，基本上 Unix 或 Linux 系统都将设备当成文件，如/dev/fd0 代表软盘，/dev/cdrom 则表示光盘。
- `/etc` 存放系统管理和配置文件，如LILO 的参数、用户的帐号和密码以及系统的主要设置。
- `/home` 为用户设置的目录，比如用户user 的主目录就是/home/user ，可以用~user 表示。
- `/lib` 标准程序设计库，又叫动态链接共享库，在 Linux 执行或编译内核时，均会用到。
- `/sbin` 系统管理命令，这里存放的是系统管理员使用的管理程序，如： fdisk, mke2fs, fsck, mkswap, mount 等等。
- `/boot` 放置 Linux 核心与启动和关闭系统有关的文档，一个在后面的实验中会使用的非常重要的目录。
- `/tmp` 公用的临时文件存储点。
- `/root` 系统管理员的主目录。
- `/mnt` 系统提供这个目录是让用户临时装载其他的文件系统，如装载软盘的文件系统。/lost+found 这个目录平时是空的，系统非正常关机时而留下的文件会放这里。类似于windows 下的*.chk 文件。/proc 虚拟的目录，是系统内存的映射。可直接访问这个目录来获取系统信息。
- `/var` 这是系统在工作时，预先设置的工作目录，比方说各种服务的日志文件和收发的邮件等。
- `/usr` 最庞大和最重要的目录之一，要用到的应用程序和文件几乎都在这个目录。其中包含：
  - `/usr/X11R6` 存放X window 的目录。
  - `/usr/bin` 众多的应用程序。
  - `/usr/sbin` 超级用户的一些管理程序。
  - `/usr/doc` Linux 系统的说明文档（RedHat 7.0 以后改放在 /usr/share/doc 下）。
  - `/usr/include` Linux 下开发和编译应用程序所需要的头文件。
  - `/usr/lib` 存放常用的动态链接库和软件包的配置文件。
  - `/usr/man` 存放帮助文档（RedHat 7.0 以后放在 /usr/share/man 底下）。
  - `/usr/src` Linux 内核的源代码就放在这里，编译内核时必须用到。
  - `/usr/local/bin` 本地增加的命令，通常用于软件的升级。
  - `/usr/local/lib` 本地增加的库。


## Linux C编程基础
### Linux 编译器 gcc
C 语言是Linux 下的最常用的程序设计语言，Linux 上的很多应用程序就是用C 语言写的。我们实验中的编程都是使用C 或C++来实现的。Linux 系统上运行的GNU C 编译器（GCC）是一个全功能的 ANSI C 兼容编译器。虽然GCC 没有集成的开发环境，但堪称是目前效率很高的C/C++编译器。

GCC 安装后目录结构：/usr/lib/gcc-lib/target/version/ （及子目录）编译器就在这个目录下。/usr/bin/gcc 可以从命令行执行的二进制程序在这个目录下。/usr/target/(bin|lib|include)/ 库和头文件在这个目录下。/lib/、/usr/lib 和其他目录，系统的库在这些目录下。

**命令格式**： `gcc [选项] 源文件 [目标文件] `

**选项含义**：
- `-o` FILE：指定输出文件名，在编译为目标代码时，这一选项不是必须的。如果FILE 没有指定，缺省文件名是a.out. 
- `-c`：GCC 仅把源代码编译为目标代码。缺省时 GCC 建立的目标代码文件有一个 .o 的扩展名。
- `-O`：GCC 对源代码进行基本优化。这些优化在大多数情况下都会使程序执行得更快。
- `-g`：在可执行程序中包含标准调试信息。GCC 产生能被 GNU 调试器使用的调试信息，以便调试你的程序。GCC 提供了一个很多其他 C 编译器里没有的特性, 在 GCC 里可以使-g 和 -O （产生优化代码）联用。
- `-w` ：关闭所有警告，建议不要使用此项
- `-Wall` ：允许发出gcc 能提供的所有有用的警告，也可以用-W（warning ）来标记指定的警告
- `-v`：显示在编译过程中的每一步用到的命令
