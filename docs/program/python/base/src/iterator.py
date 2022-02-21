# 1、字符创创建迭代器对象
from _typeshed import Self


str_ = 'Iterator'
iter_str = iter(str_)
print(type(iter_str))

for c in iter_str:
    print(c, end=' ')
print()


list_ = [1, 2, 3, 4]
iter_list = iter(list_)
print(type(iter_list))

while True:
    try:
        print(next(iter_list), end=' ')
    except StopIteration:
        break
print()


class CustomIterator(object):
    def __init__(self) -> None:
        super().__init__()

    def __iter__(self):
        return self
    
    def next():
        pass