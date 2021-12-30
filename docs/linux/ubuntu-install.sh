sudo apt install -y tree
sudo apt install -y htop
sudo apt install -y vim gedit
sudo apt install -y git
sudo apt install -y cmake
sudo apt install -y gcc-8
sudo apt install -y g++-8
sudo ln -s /usr/bin/gcc-6 /usr/local/cuda/bin/gcc
sudo ln -s /usr/bin/g++-6 /usr/local/cuda/bin/g++

# ------ time sync ----------------------------
sudo apt update
timedatectl set-local-rtc 1 --adjust-system-clock
sudo apt install -y ntpdate
sudo ntpdate time.windows.com
sudo hwclock --localtime --systohc
# ---------------------------------------------


# ------ Python -------------------------------
sudo apt install -y python3
sudo apt install -y python3-pip
sudo ln -s /usr/bin/python3 /usr/bin/python
sudo ln -s /usr/bin/pip3 /usr/bin/pip
pip3 install numpy
# ---------------------------------------------


# ------ SouGouPinYin -------------------------
# https://www.jb51.net/article/186808.htm
sudo apt install -y fcitx-bin
sudo apt install -y fcitx-table
# sudo dpkg -i sogoupinyin_2.3.1.0112_amd64.deb
# sudo apt install -f
# -- settings–>Region&language–>Manage Installed Languages
# -- 更改输入框架为fcitx，然后点击上面的Apply System-Wide应用到全局
# sudo apt-get remove indicator-keyboard # 卸载顶部面板任务栏上的键盘指示。（根据个人需要）
# sudo apt-get purge sogoupinyin
# ---------------------------------------------


# ------ Qt -----------------------------------
# wegt https://mirrors.tuna.tsinghua.edu.cn/qt/archive/qt/5.14/5.14.2/qt-opensource-linux-x64-5.14.2.run
# https://wdl1.cache.wps.cn/wps/download/ep/Linux2019/9719/wps-office_11.1.0.9719_amd64.deb
sudo apt install -y g++
sudo apt install -y build-essential 
sudo apt install -y libgl1-mesa-dev
sudo apt install -y libglu1-mesa-dev freeglut3-dev 
# ---------------------------------------------


# ------ JetBrains ----------------------------
sudo snap install clion --classic

sudo snap install intellij-idea-community --classic
# sudo snap install intellij-idea-educational --classic

sudo snap install pycharm-professional --classic	# For both Scientific and Web Python development. With HTML, JS, and SQL support.
sudo snap install pycharm-community --classic		# For pure Python development
# ---------------------------------------------

sudo apt autoremove



