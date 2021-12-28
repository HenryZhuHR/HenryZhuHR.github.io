# 目录
- [目录](#目录)
- [编译命令](#编译命令)
- [配置环境](#配置环境)
  - [配置 OpenCV 动态库环境](#配置-opencv-动态库环境)
  - [配置 pkg-config 环境](#配置-pkg-config-环境)
- [解决编译时出现的错误](#解决编译时出现的错误)
  - [boostdesc_bgm.i 等文件缺失](#boostdesc_bgmi-等文件缺失)

以 `opencv-4.5.1` 的版本为例

# 编译命令
将下列内容写入一个脚本 `install-opencv4.sh` 中
```bash
sudo apt update
sudo apt -y upgrade

sudo apt install -y build-essential

sudo apt install -y cmake
sudo apt install -y git
sudo apt install -y libgtk2.0-dev
sudo apt install -y pkg-config
sudo apt install -y libavcodec-dev
sudo apt install -y libavformat-dev 
sudo apt install -y libswscale-dev

sudo apt install -y python3-dev
sudo apt install -y python3-numpy

sudo apt install -y libtbb2
sudo apt install -y libtbb-dev
sudo apt install -y libjpeg-dev
sudo apt install -y libpng-dev
sudo apt install -y libtiff-dev
sudo apt install -y libjasper-dev
sudo apt install -y libdc1394-22-dev

sudo apt install -y ffmpeg # if ffmpeg needed


ROOT_PATH=$(pwd)
echo ${ROOT_PATH}

cd opencv-4.5.1
mkdir build
cd build

cmake \
    -D CMAKE_BUILD_TYPE=RELEASE \
    -D CMAKE_INSTALL_PREFIX=/usr/local/opencv4 \
    -D OPENCV_GENERATE_PKGCONFIG=YES \
    -D BUILD_EXAMPLES=OFF \
    -D INSTALL_C_EXAMPLES=OFF \
    -D INSTALL_CXX_EXAMPLES=OFF \
    -D INSTALL_PYTHON_EXAMPLES=OFF \
    -D WITH_TBB=ON \
    -D WITH_V4L=ON \
    -D WITH_QT=ON \
    -D WITH_OPENGL=ON \
    -D WITH_CUDA=ON \
    -D OPENCV_EXTRA_MODULES_PATH=${ROOT_PATH}/opencv_contrib-4.5.1/modules \
    ..

# -D OPENCV_GENERATE_PKGCONFIG=YES: 
# OpenCV4以上版本默认不使用pkg-config
# 该编译选项开启生成opencv4.pc文件，支持pkg-config功能

make -j8

sudo make install
```

然后运行脚本
```bash
bash ./install-opencv4.sh
```
编译过程中可能会出现错误，具体解决方法可以参考 [解决编译时出现的错误](#解决编译时出现的错误)

```bash
-- Set runtime path of "/usr/local/opencv4/bin/opencv_version" to "/usr/local/opencv4/lib:/usr/local/cuda-11.0/lib64"
```



# 配置环境
## 配置 OpenCV 动态库环境
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

此时可能会报错 `"/sbin/ldconfig.real: /usr/local/cuda-11.0/targets/x86_64-linux/lib/libcudnn.so.8 不是符号链接"` ，但是可以不管，不影响使用。

## 配置 pkg-config 环境
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

> 建议对于用户级的环境 `~/.bashrc` 也配置一次，在 `~/.bashrc` 中添加上述内容
```bash
vim ~/.bashrc

source ~/.bashrc
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
## boostdesc_bgm.i 等文件缺失
```bash
.../opencv/opencv_contrib-4.5.1/modules/xfeatures2d/src/boostdesc.cpp:654:20: fatal error: boostdesc_bgm.i: 没有那个文件或目录
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
.../opencv/opencv_contrib-4.5.1/modules/xfeatures2d/test/test_features2d.cpp:51:10: fatal error: features2d/test/test_detectors_regression.impl.hpp: 没有那个文件或目录
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

修改项目的 `CMakeLists.txt` 来实现的，简单暴力 的那种：
```bash
vim opencv-4.5.1/CMakeLists.txt
```

在 573 行添加：
```txt
include_directories("modules")
```

这就完成了！！