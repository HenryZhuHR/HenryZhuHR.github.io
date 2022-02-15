# tqdm
**tqdm** 是一个快速、可扩展的进度条

![tqdm](./logo.gif)

如果希望循环能够显示进度，那么只需要将循环中的`可迭代对象`用 tqdm 封装 `tqdm(iterable)`，例如
```python
import time
from tqdm import tqdm
for i in tqdm(range(10)):
    time.sleep(0.1)     # your code here
```
就可以实现进度条的显示
```bash
80%|████████████████▍  | 8/10 [00:00<00:00,  8.22it/s]
```

> tqdm 在阿拉伯语中是“进度条”(taqadum تقدّم)的意思，而在西班牙语中tqdm 是**t**e **q**uiero **d**e**m**asiado(I love you so much)的缩写。

# tqdm 安装
对于python，我们可以用pip进行安装
```bash
pip3 install tqdm
```
我们也可以从GitHub上获取[tqdm源码](https://github.com/tqdm/tqdm)，并自己编译安装最新版本

而对于C++，tqdm也有C++的版本[tqdm](https://github.com/tqdm/tqdm.cpp)

# 在Python 中 tqdm 使用
## tqdm.tqdm
除了上面提到的使用方式，如果对于`range()`生成的可迭代对象，我们还可以将`tqdm(range(10000))`替换为`trange()`
```python
import time
from tqdm import trange
for i in trange(10):
    time.sleep(0.1)     # your code here
```

`tqdm.tqdm`的构造函数
```python
tqdm(iterable=None, desc=None, total=None, leave=True, file=None, ncols=None, mininterval=0.1, maxinterval=10, miniters=None, ascii=None, disable=False, unit='it', unit_scale=False, dynamic_ncols=False, smoothing=0.3, bar_format=None, initial=0, position=None, postfix=None, unit_divisor=1000, write_bytes=None, lock_args=None, nrows=None, colour=None, delay=0, gui=False, **kwargs)
```
节选一些常用的，
- `total` 进度条总进度，默认`len(iterable)`
- `leave` 结束是是否保留进度条，默认`True`
- `file` 进度条输出到文件，默认`sys.stderr`，可用`file.write(str)`和`file.flush()`写入文件
- `ascii` 编码方式
- `unit` 进度单位，`str`类型，默认`'it'`。如果是处理图像，可以设置为`'images'`，则输出`8.13images/s`表示，每秒处理多少张图片，来显示进度条速度

例如
```python
pbar=tqdm(range(337),total=337,unit='images',leave=False)
```

### 动态数据信息输出
如果想观察在循环中的一些数据，那么`set_description`可以打印出一些信息
```python
import time
from tqdm import tqdm
pbar=tqdm(range(10))
for i in pbar:
    time.sleep(0.1)     # your code here
    pbar.set_description("iter %d"%i)
```
```bash
iter 8:  80%|████████████████████████      | 8/10 [00:00<00:00,  8.03it/s]
```
进度条中的右边所展示的信息也是可以控制的
```python
import time
from random import random,randint
from tqdm import tqdm
pbar=tqdm(range(10))
for i in pbar:
    time.sleep(0.1)     # your code here
    pbar.set_description("iter %d"%i)
    pbar.set_postfix(int=random(),str="h",lst=[1,2])
```
```bash
iter 8:  iter 6:  60%|▌| 6/10 [00:00<00:00, 7.87it/s, int=0.72, lst=[1, 2], str=h]
```

你还可以在单独的gui中打印进度条
```python
import time
from tqdm.gui import tqdm
pbar=tqdm(range(337))
for i in pbar:
    time.sleep(0.01)     # your code here
    pbar.set_description("iter %d"%i)
```
![GUI中显示进度条](./tqdmgui.png)

如果在tqdm循环中用print打印信息，可能会导致输出错位
```bash
  0%|                             | 0/10 [00:00<?, ?it/s]
0
 10%|██                   | 1/10 [00:00<00:00,  9.78it/s] 
1
 20%|████▏                | 2/10 [00:00<00:00,  9.32it/s] 
2
 30%|██████▎              | 3/10 [00:00<00:00,  9.17it/s] 
3
 30%|██████▎              | 3/10 [00:00<00:01,  6.93it/s]
```
我们可以用`tqdm.write`解决
```python
import time
from tqdm import tqdm
pbar=tqdm(range(10))
for i in pbar:
    time.sleep(0.1)     # your code here
    pbar.write("%d"%i)
```
这时候，进度条会在最后进行显示
```bash
0
1
2
3
 30%|██████▉                | 3/10 [00:00<00:01,  6.98it/s] 
```
### 进度条手动控制更新
上述的方法，都是tqdm自动更新进度条，当然，我们也可以手动控制进度条的更新
```python
import time
from tqdm import tqdm
pbar=tqdm(total=100)
for i in range(10):
    time.sleep(0.1)     # your code here
    pbar.update(10)
pbar.close()
```
这时候，初始化tqdm的总进度设为为100，也就是100%计数，循环的可迭代对象有10个数值，也就是每次需要更新10%的进度
```bash
80%|██████████████████████▍     | 80/100 [00:00<00:00, 91.99it/s] 
```

