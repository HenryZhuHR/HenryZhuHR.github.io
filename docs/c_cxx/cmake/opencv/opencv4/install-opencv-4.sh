# sudo apt update
# sudo apt -y upgrade

# sudo apt install -y build-essential

# sudo apt install -y cmake
# sudo apt install -y git
# sudo apt install -y libgtk2.0-dev
# sudo apt install -y pkg-config
# sudo apt install -y libavcodec-dev
# sudo apt install -y libavformat-dev 
# sudo apt install -y libswscale-dev

# sudo apt install -y python3-dev
# sudo apt install -y python3-numpy

# sudo apt install -y libtbb2
# sudo apt install -y libtbb-dev
# sudo apt install -y libjpeg-dev
# sudo apt install -y libpng-dev
# sudo apt install -y libtiff-dev
# sudo apt install -y libjasper-dev
# sudo apt install -y libdc1394-22-dev

# sudo apt install -y ffmpeg # if ffmpeg needed

# sudo apt autoremove -y

opencv_src_path=$(pwd)
echo ${opencv_src_path}


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
    -D OPENCV_EXTRA_MODULES_PATH=${opencv_src_path}/opencv_contrib-4.5.1/modules \
    ..

# -D OPENCV_GENERATE_PKGCONFIG=YES: 
# OpenCV4以上版本默认不使用pkg-config，该编译选项开启生成opencv4.pc文件，支持pkg-config功能。

# make
make -j8

sudo make install