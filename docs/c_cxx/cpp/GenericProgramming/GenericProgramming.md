# 【C++】泛型编程(GenericProgramming)
- [【C++】泛型编程(GenericProgramming)](#c泛型编程genericprogramming)
- [函数模板](#函数模板)


# 函数模板

典型的[交换模板](https://github.com/HenryZhuHR/happy-Cpp/blob/master/app/generic_programming.cpp)
```cpp
template <typename T> // or template <class T>
void Swap(T& a, T& b)
{
    T temp;
    temp = a;
    a    = b;
    b    = temp;
}
```

关键字 `template` 表明要创建模板，`typename`/`class` 表面这是一个可以任意选择的符合C++命名规则的变量类型，并且用尖括号 `<>` 包括起来，尖括号内参数不一定全都要求是 `T` 类型，可以是确定的类型
> 标准 C++98 加入关键字 `typename`之前，是使用 `class` 创建模板的。不考虑向后兼容，建议使用关键字 `typename`

+模板不创建任何函数，只是告知编译器如何定义函数，在编译阶段，会根据使用的参数类型来替换掉函数模板中的 `typename` ，因此实际的代码并不会减少