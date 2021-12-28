# 【CMake】编译和链接静态库和动态库
- [【CMake】编译和链接静态库和动态库](#cmake编译和链接静态库和动态库)
- [项目结构](#项目结构)
- [工作原理](#工作原理)
  - [配置项目](#配置项目)
  - [编译库](#编译库)
# 项目结构
```bash
.
├─include
│  └─myClass.h
├─src
│  ├─CMakeLists.txt
│  └─myClass.cpp
└─CMakeLists.txt
```

# 工作原理
## 配置项目
在当前目录下的 `CMakeLists.txt` 为整个项目做一些基本配置，包括项目所需CMake最低版本、项目名称、编译器等
```cmake
# ./CMakeLists.txt
cmake_minimum_required(VERSION 3.10)
project(Compile_Library)
add_subdirectory(src)
```
> `myClass.h` 和 `myClass.cpp` 随便写一个类就行

## 编译库
命令 `add_library(<lib_name> STATIC <file>.h <file>.cpp)` 用于将指定的源码编译成库
- `<lib_name>` 是生成的库名，该库名可以看成一个变量，可以在其他地方通过库名进行引用
- 第二个参数 `STATIC` 可以设置生成的库的类型
  - **动态库**为 `SHARED`
  - **静态库**为 `STATIC`
- 剩下的参数是需要编译进库的源码

在 `src/CMakeLists.txt` 中我们可以看到编译 `myClass` 为一个库
```cmake
# ./src/CMakeLists.txt
aux_source_directory(.  myLib)
include_directories(${PROJECT_SOURCE_DIR}/include)

# ------ dynamic-link-library ------
add_library(myLib_shared SHARED ${myLib})
set(LIBRARY_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)

# ------ static-link-library ------
add_library(myLib STATIC ${myLib})
set(LIBRARY_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/lib)

# -- link other 3rd-party lib to this lib if need
# target_link_libraries(myLib <>)
```

当代码有多个源代码之后，为了方便，我们将全部源代码添加到一个变量下。例如将 `src` 目录下的全部源码添加到变量 `myLib`内 
```cmake
aux_source_directory(.  myLib_src)
```

同时设置源码所对应的头文件所在目录，使得编译的时候可以正确地找到头文件
```cmake
include_directories(${PROJECT_SOURCE_DIR}/include)
```

接下来就可以编译库了，我们以编译动态库为例
```cmake
add_library(myLib_shared SHARED ${myLib_src})
```

并且我们设置库的输出目录
```cmake
set(LIBRARY_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)
```

如果当前的库还使用了一些第三方库（例如OpenCV），需要链接到当前的库，需要通过 `target_link_libraries` 链接；如果链接多个库，以空格分开即可
```cmake
target_link_libraries(myLib <other_libaray> [<other_libaray_2>])
```
