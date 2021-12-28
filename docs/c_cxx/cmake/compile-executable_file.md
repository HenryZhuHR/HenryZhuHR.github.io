# 【CMake】编译可执行文件
- [【CMake】编译可执行文件](#cmake编译可执行文件)
- [项目结构](#项目结构)
- [配置项目](#配置项目)
- [配置编译可执行文件](#配置编译可执行文件)
- [构建项目和生成构建器](#构建项目和生成构建器)
- [编译项目](#编译项目)

# 项目结构
```bash
.
├─app
│  ├─CMakeLists.txt
|  └─main.cpp
└─CMakeLists.txt
```

# 配置项目
在当前目录下的 `CMakeLists.txt `为整个项目做一些基本配置，包括项目所需CMake最低版本、项目名称、编译器等，文件内容如下
```cmake
# ./CMakeLists.txt
cmake_minimum_required(VERSION 3.5 FATAL_ERROR)
project(Compile_Executable_File LANGUAGES CXX)
add_subdirectory(app)
```
`cmake_minimum_required` 规定构建当前项目的所需CMake的最低版本，当构建项目使用的CMake不满足做个最低版本要求，则会出现报错，添加 `FATAL_ERROR` 则在不满足条件的情况下产生致命报错
```cmake
cmake_minimum_required(VERSION 3.5)
cmake_minimum_required(VERSION 3.5 FATAL_ERROR)
```
> CMake语法不区分大小写（即 `cmake_minimum_required `与 `CMAKE_MINIMUN_REQUIRED` 是一样的），但是参数区分大小写的

`project` 声明项目名称(`Compile_Executable_File`)，同时也可以添加参数 `LANGUAGES` 来显式声明项目的编程语言
```cmake
project(Compile_Executable_File)
project(Compile_Executable_File LANGUAGES CXX)
```
> CXX代表C++，C++是CMake默认的编程语言

完成对整个项目的基本配置，我们就可以添加子目录 `add_subdirectory` 来进行编译，我们添加子目录 `app` 来编译可执行文件
```cmake
add_subdirectory(app)
```


# 配置编译可执行文件
在 `app/CMakeLists.txt` 配置编译可执行文件
  
设置可执行文件输出路径 `EXECUTABLE_OUTPUT_PATH` 为 `${PROJECT_SOURCE_DIR}/bin`
```cmake
set(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)
```
> `PROJECT_SOURCE_DIR` 是一个默认的变量，这个变量是和根目录下的 `CMakeLists.txt` 相同目录，或者说是与包含了设置项目名称 `project()` 的 `CMakeLists.txt` 目录是相同的

`add_executable` 将通过编译源文件 `main.cpp` 来创建一个可执行文件 `compile-executable_file(.exe)`
```bash
add_executable(compile-executable_file main.cpp)
add_executable(${PROJECT_NAME} main.cpp)
```
> 你也可以指定输出的名称为项目名称 `${PROJECT_NAME}` ，也就是在 `project()` 指定的项目名称

编写完项目的全部 `CMakeLists.txt` 文件后，接下来就是如何构建并且编译项目


# 构建项目和生成构建器
CMake是一个**构建系统生成器**。将描述构建系统(如：Unix Makefile、Ninja、Visual Studio等)应当如何操作才能编译代码。然后，CMake为所选的构建系统生成相应的指令。默认情况下，
- GNU/Linux和macOS系统上，`Unix Makefile` 是默认的生成器
- Windows上，`Visual Studio` 是默认的生成器

使用CMake配置项目并生成构建器 (generator) ，我们可以通过命令行界面 (CLI) 进行，也可以通过GUI进行。CMake CLI 提供了许多选项，可以通过 `cmake -h` 查看。


在根目录下，新建目录 `build` 并且进入该目录，在 `build` 目录下，通过指定上级目录的 `CMakeLists.txt` 来调用 CMake 配置项目并生成构建器
```bash
mkdir -p build
cd build
cmake ..
# or specify a generator available the platform
cmake .. -G "MinGW Makefiles"
```
> 你可以直接在项目根目录下中执行 `cmake .`，这是源代码内构建，但是这种做法会在根目录（源代码目录）下生成配置文件，会将源代码和项目的生成树混合，这是非常不推荐的。我们依然会选择源外(out of source)构建项目，即新建目录 `build` ，并且在目录 `build` 下构建。

> 你可以看到这里使用了参数 `-G` 来指定生成器为 `"MinGW Makefiles"` （需要有双引号），你可以通过 `cmake -h` 来查看全部可用的生成器。

当出现如下输出，则已经成功配置项目(`Configuring done`)，并且生成了构建器(`Generating done`)
```bash
-- Configuring done
-- Generating done
```
你可以在 `build` 目录下，看到下列文件：
```bash
.
├─CMakefiles
├─cmake_install.cmake
├─CMakeCache.txt
└─Makefile
```
- `CMakefiles` ：临时文件目录，CMake用于检测操作系统、编译器等。
- `cmake_install.cmake` ：处理安装规则的CMake脚本，在项目安装时使用。
- `CMakeCache.txt` ：如文件名所示，CMake缓存。CMake在重新运行配置时使用这个文件。
- `Makefile` : 命令 `make` 将运行指令来编译项目。



# 编译项目
随后就可以开始编译可执行文件
```bash
make
# or
cmake --build .
```

生成的项目就会在 `${PROJECT_SOURCE_DIR}/bin` 下，也就是 `bin`。如果不通过 `set(EXECUTABLE_OUTPUT_PATH ...)` 来指定输出目录，那么文件会被输出到 `build` 目录下


