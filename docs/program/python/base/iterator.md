# 目录
- [目录](#目录)
- [迭代器](#迭代器)
  - [创建迭代器 `iter()`](#创建迭代器-iter)
  - [访问迭代器](#访问迭代器)
  - [自定义迭代器](#自定义迭代器)
- [生成器](#生成器)
- [可迭代对象](#可迭代对象)

<!-- https://zhuanlan.zhihu.com/p/82787357 -->
# 迭代器
迭代器(Iterator)是用于迭代操作的对象

迭代器通过 `iter()` 来创建迭代器，并且通过 `next()` 迭代访问
 
## 创建迭代器 `iter()`
```python
str_ = 'Iterator'
iter_str = iter (str_)
```

查看其类型
```python
print(type(iter_str))
```
可以看到是一个字符串迭代器类型
```python
<class 'str_iterator'>
```

我们可以通过 `for` 循环来遍历这个迭代器
```python
for c in iter_str:
    print(c, end=' ')
```

输出
```bash
I t e r a t o r
```

## 访问迭代器
我们创建一个列表迭代器
```python
list_ = [1,2,3,4]
iter_list = iter (list_)
print(type(iter_list))
```
输出为
```python
<class 'list_iterator'>
```

我们可以通过 `next()` 循环来遍历这个迭代器，并且这个方法的迭代方向是单向的
```python
while True:
    try:
        print(next(iter_list), end=' ')
    except StopIteration:
        break
```
输出为
```python
1 2 3 4
```

`StopIteration` 是一个用于标识完成迭代的异常，当完成全部元素的遍历之后，会抛出该异常

## 自定义迭代器
自定义一个迭代器，必须实现 `__iter__` 和 `next()` 方法。


# 生成器


# 可迭代对象
如果一个对象实现了 `__iter__` 方法，那么这个对象就是一个可迭代对象