# argparse: Python 内置的命令行接口

[`argparse`](https://docs.python.org/zh-cn/3/library/argparse.html) 模块可以让人轻松编写用户友好的命令行接口。程序定义它需要的参数，然后 `argparse` 将弄清如何从 `sys.argv` 解析出那些参数。 `argparse` 模块还会自动生成帮助和使用手册，并在用户给程序传入无效参数时报出错误信息

- [argparse: Python 内置的命令行接口](#argparse-python-内置的命令行接口)
- [创建一个命令行参数解析器](#创建一个命令行参数解析器)
- [位置参数](#位置参数)
- [可选参数](#可选参数)
- [参数类型](#参数类型)
- [参数的默认值](#参数的默认值)
- [添加帮助信息](#添加帮助信息)
- [action](#action)
- [nargs](#nargs)
- [命令行参数解析器是如何工作的](#命令行参数解析器是如何工作的)

# 创建一个命令行参数解析器
使用 `argparse` 的第一步是创建一个 `ArgumentParser` 对象，并且调用 `ArgumentParser` 对象的方法 `parse_args()` 对参数进行解析
```python
import argparse
parser = argparse.ArgumentParser()
parser.parse_args()
```

直接运行 `test.py` 并不会有什么输出。但是如果我们运行 `test.py` 后加上参数 `-h` 或 `--help` ，就会得到输出
```shell
$ python3 test.py

$ python3 test.py
usage: test.py [-h]

optional arguments:
  -h, --help  show this help message and exit
```

当附加其他的的命令行参数，会报错
```shell
$ python3 test.py --verbose
usage: test.py [-h]
test.py: error: unrecognized arguments: --verbose

$ python3 test.py foo
usage: test.py [-h]
test.py: error: unrecognized arguments: foo
```

那么命令行的参数是如何被解析的呢？ [命令行参数解析器是如何工作的](#命令行参数解析器是如何工作的) ？


# 位置参数
为程序添加一个位置参数 (positional arguments)
```python
# test.py
import argparse
parser = argparse.ArgumentParser()
parser.add_argument("num")
parser.parse_args()
```

直接运行 `test.py` 会报错，因为缺少参数
```
usage: lib-argparse.py [-h] num
lib-argparse.py: error: the following arguments are required: num
```

我们可以通过启动时添加参数 `-h` 或 `--help` 获取该文件有哪些参数
```shell
usage: lib-argparse.py [-h] num

positional arguments:
  num

optional arguments:
  -h, --help  show this help message and exit
```

# 可选参数
为程序添加一个位置参数 (optional arguments)
```python
# test.py
import argparse
parser = argparse.ArgumentParser()
parser.add_argument("--name")
args = parser.parse_args()
print(args)
print(args.name)
```

和固定位置参数的用法不同，可选参数的位置需要将参数名和参数值完整写入
```shell
$ python3 test.py --name java
Namespace(name='java')
java
```

否则会出现报错
```shell
$ python3 test.py java 

usage: optional-arguments.py [-h] [--name NAME]
optional-arguments.py: error: unrecognized arguments: java
```

可选参数还有一个有意思的特点，就是可选参数具有短选项 (short options)
```python
import argparse
parser = argparse.ArgumentParser()
parser.add_argument('--name')
parser.add_argument('-a','--age')
args = parser.parse_args()
print(args)
print(args.age)
```

在命令行中可以使用短的参数名进行输入
```shell
python3 test.py --name java -a 8
Namespace(name='java', age='8')
8
```

但是在程序中调用参数值，仍然需要其完整的名称 `args.age` ，如果试图采用其短选项 `args.a` 进行调用则会出现以下报错
```shell
python3 test.py --name java -a 8
Namespace(name='java', age='8')
Traceback (most recent call last):
  File "~/test.py", line 16, in <module>
    print(args.a)
AttributeError: 'Namespace' object has no attribute 'a'
```

可选位置参数的位置是可以不固定的，对于上面的脚步，运行下面的两个脚本都可以得到相同的结果
```shell
python3 test.py --name java -a 8
python3 test.py --age 8 --name java
```

# 参数类型

# 参数的默认值

# 添加帮助信息

# action

# nargs




# 命令行参数解析器是如何工作的
我们进入 python 的命令行下
```shell
% python3
Python 3.9.8 (main, Nov 10 2021, 03:48:35) 
[Clang 13.0.0 (clang-1300.0.29.3)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
```

我们创建一个 `ArgumentParser` 对象，并且通过调用 `add_argument()` 方法添加两个固定位置参数 `integers` 和 `float`
```shell
>>> import argparse
>>> parser = argparse.ArgumentParser()
>>> parser.add_argument('integers')
_StoreAction(option_strings=[], dest='integers', nargs=None, const=None, default=None, type=None, choices=None, help=None, metavar=None)
>>> parser.add_argument('float')
_StoreAction(option_strings=[], dest='float', nargs=None, const=None, default=None, type=None, choices=None, help=None, metavar=None)
```

通常，这些调用指定 `ArgumentParser` 如何获取命令行字符串并将其转换为对象。这些信息在 `parse_args()` 调用时被存储和使用。
```shell
>>> args = parser.parse_args(['8','0.618'])
>>> print(args)
Namespace(integers='8', float='0.618')
>>> print(args.integers)
8
```

在脚本 ( `.py` 文件) 中，通常 `parse_args()` 会被不带参数调用，而 `ArgumentParser` 将自动从 `sys.argv` 中确定命令行参数。
```python
import argparse
parser = argparse.ArgumentParser()
parser.add_argument('integers')
parser.add_argument('float')
args = parser.parse_args()
```

相当于在命令行输入命令调用脚本的时候
```shell
python3 test.py 8 0.618
```
`python3 test.py` 后的全部参数 `8 0.618` 会被存储为一个列表 ['8','0.618'] 并且作为 `parser.parse_args()` 的参数使用 