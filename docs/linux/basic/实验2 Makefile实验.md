# 实验1 Makefile实验
- [实验1 Makefile实验](#实验1-makefile实验)
- [实验目的](#实验目的)
- [实验环境](#实验环境)
- [实验内容](#实验内容)
  - [1 使用命令编译程序](#1-使用命令编译程序)
  - [2 使用预定义变量编译程序](#2-使用预定义变量编译程序)
  - [3 使用预定义变量编译程序](#3-使用预定义变量编译程序)

# 实验目的
1. 了解makefile的概念和构成。
2. 会使用GNU make编译一个或者多个文件。
3. 掌握Makefile文件的编写。


# 实验环境
选择其中一个环境做实验即可
1. VMware虚拟机
2. [Windows WLS2](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)(推荐)，可在**Microsoft 应用商店**中下载，并按照[官方教程](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)安装运行
3. MacOS，MacOS可运行大部分Unix命令，但是部分命令无法运行

# 实验内容
## 1 使用命令编译程序
安装`make`
```bash
sudo apt install make
```

创建文件`hello.c`
```bash
vi hello.c
```
写入以下内容
```c
#include <stdio.h>
int main()
{
    printf("hello world\n");
    return 0;
}
```
创建makefile文件
```bash
vi makefile
```
写入以下内容
```makefile
# test for makefile
CC = gcc
CFLAGS = 
all : hello
hello: hello.o
	$(CC) $(CFLAGS) hello.o -o hello
hello.o: hello.c
	$(CC) $(CFLAGS) -c hello.c -o hello.o
clean:
	rm -rf hello *.o
```
在将上述Makefile文件与源文件hello.c保存到同一目录之后，就可以在命令行中输入“make”命令来编译整个项目了。

make在执行过程中，首先会查找到Makefile文件第一条规则中的目标，即上述文件中的all。根据设定好的规则，该目标需要依赖于hello。由于all并不是一个已经存在的文件，所以每次在make被调用的时候，显然都需要先检查hello。继续往下不难发现，hello目标是依赖于hello.o。当make处理到目标hello.o时，会先查看其对应的依赖对象,这个以来对象是hello.c，此时就会对hello.c进行编译，得到目标文件hello.o，然后是目标文件hello.o被连接，得到可执行文件hello。

利用make编译程序
```bash
$ make
gcc  -c hello.c -o hello.o
gcc  hello.o -o hello
# 查看生成的文件
$ ls
hello  hello.c  hello.o  makefile
# 执行文件
$ ./hello
hello world
```
> 上面的命令中，`$ make`表示需要执行的命令，其他没有`$ `则表示运行输出结果。之后的代码就按照这个方式进行表示

在Makefile中，并不是所有的目标都对应于磁盘上的文件。有的目标存在只是为了形成一条规则，从而完成特定的工作，并不生成新的目标文件，这样的目标称为伪目标。它并不是真正意义上的目标文件，只是一个标签，为了满足Makefile的语法规则而存在的。 
在已经给出的Makefile文件中，最后一个目标clean就是伪目标。它规定了make应该执行的命令。当make处理到目标clean时，会先查看其对应的依赖对象。由于clean没有任何依赖对象，所以make会认为该目标是最新的而不会执行任何操作。为了编译这个目标体，必须手工执行如下命令：
```bash
$ ls
hello  hello.c  hello.o  makefile
$ make clean
$ ls
hello.c  makefile
```
可以看到目标文件hello.o和可执行文件hello被清除。

## 2 使用预定义变量编译程序
保持`hello.c`文件不变，修改`makefile`文件
```bash
vi makefile
```
为
```makefile
# test for makefile
CC = gcc
CFLAGS = 
OBJS = hello.o
all : hello
hello: hello.o
	$(CC) $(CFLAGS) $^ -o $@
hello.o: hello.c
	$(CC) $(CFLAGS) -c $< -o $@
clean:
	rm -rf hello *.o
```
命令中的`$<`, `$^`和`$@`则是预定义变量，`$<`表示当前的依赖目标文件（也就是`hello.c`），`$@`表示当前目标文件，`$^`表示所有的依赖文件。

利用make编译程序
```bash
$ make
gcc  -c hello.c -o hello.o
gcc  hello.o -o hello
# 查看生成的文件
$ ls
hello  hello.c  hello.o  makefile
# 执行文件
$ ./hello
hello world
```
清理文件
```bash
make clean
```

## 3 使用预定义变量编译程序
创建`hello1.c`写入
```c

```