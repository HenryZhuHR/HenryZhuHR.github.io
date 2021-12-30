# 配置OpenCV动态库环境(程序执行时加载动态库*.so的路径)
首先将OpenCV的库添加到路径：
```bash
sudo vim /etc/ld.so.conf.d/opencv.conf
```
打开的可能是一个空白的文件，不用管，只需要在文件末尾一行添加：
```bash
/usr/local/opencv4/lib
```
然后使得刚才的配置路径生效
```bash
sudo ldconfig
```
此时可能会报错"/sbin/ldconfig.real: /usr/local/cuda-11.0/targets/x86_64-linux/lib/libcudnn.so.8 不是符号链接"，但是可以不管，不影响使用。

# 配置pkg-config环境
配置bash：
```bash
sudo vim /etc/bash.bashrc
```
在文件末尾添加：
```bash
PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/opencv4/lib/pkgconfig
export PKG_CONFIG_PATH
```
注意这里的路径以cmake时候设置的为准。

保存后需要激活一下：
```bash
source /etc/profile
```
验证是否配置完成：
```bash
pkg-config --libs opencv4
```
输出结果如下：
```bash
-L/usr/local/opencv4/lib -lopencv_world
```

# 解决编译时出现的错误

```bash
/home/***/lib/opencv/opencv_contrib-4.5.1/modules/xfeatures2d/src/boostdesc.cpp:654:20: fatal error: boostdesc_bgm.i: 没有那个文件或目录
           #include "boostdesc_bgm.i"
                    ^~~~~~~~~~~~~~~~~
compilation terminated.
make[2]: *** [modules/xfeatures2d/CMakeFiles/opencv_xfeatures2d.dir/build.make:417：modules/xfeatures2d/CMakeFiles/opencv_xfeatures2d.dir/src/boostdesc.cpp.o] 错误 1
make[1]: *** [CMakeFiles/Makefile2:8170：modules/xfeatures2d/CMakeFiles/opencv_xfeatures2d.dir/all] 错误 2
make[1]: *** 正在等待未完成的任务....
```

解压[`boostdesc_vgg_an_so_on.tar.gz`](./boostdesc_vgg_an_so_on.tar.gz)文件，复制里面的文件到 `opencv_contrib/modules/xfeatures2d/src/` 下即可。

```bash
tar -xzvf boostdesc_vgg_an_so_on.tar.gz
cp \
    ./boostdesc_vgg_an_so_on/* \
    ./opencv_contrib-4.5.1/modules/xfeatures2d/src

ls opencv_contrib-4.5.1/modules/xfeatures2d/src/*.i
```

```bash
/home/henryzhu/lib/opencv/opencv_contrib-4.5.1/modules/xfeatures2d/test/test_features2d.cpp:51:10: fatal error: features2d/test/test_detectors_regression.impl.hpp: 没有那个文件或目录
 #include "features2d/test/test_detectors_regression.impl.hpp"
          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compilation terminated.
make[2]: *** [modules/xfeatures2d/CMakeFiles/opencv_test_xfeatures2d.dir/build.make:76：modules/xfeatures2d/CMakeFiles/opencv_test_xfeatures2d.dir/test/test_features2d.cpp.o] 错误 1
make[2]: *** 正在等待未完成的任务....
```

```bash
find -name test_detectors_regression.impl.hpp
```
发现
```bash
./opencv-4.5.1/modules/features2d/test/test_detectors_regression.impl.hpp
```

修改项目的 CMakeLists.txt 来实现的，简单暴力 的那种：
```bash
vim opencv/CMakeLists.txt
```
在 573 行添加：
```txt
include_directories("modules")
```
这就完成了！！