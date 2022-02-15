
# Home Assistant
[Home Assistant](https://www.home-assistant.io/) 是一款基于 Python 的智能家居开源系统，支持多品牌的智能家居设备，用于实现设备的语音控制、自动化等。

动机：苹果的家居好是好，但是又贵又少；小米的东西便宜，但是不能直接加到苹果家庭内

解决：将 Home Assistant 安装到树莓派上，作为中枢控制

支持列表：https://www.jianguoyun.com/p/DbzdYzoQp5HMBhjZ4IkB

- [Home Assistant](#home-assistant)
  - [Home Assistant 安装 (Docker)](#home-assistant-安装-docker)
    - [重启 Home Assistant](#重启-home-assistant)
    - [访问 Home Assistant](#访问-home-assistant)
  - [HACS 插件安装](#hacs-插件安装)
  - [在 HACS 中安装 Mi MLoT](#在-hacs-中安装-mi-mlot)
  - [添加米家设备](#添加米家设备)
  - [添加到 Homekit 中](#添加到-homekit-中)
  - [主题](#主题)



## Home Assistant 安装 (Docker)
采用 docker 的方式在树莓派上安装 Home Assistant

终端运行以安装docker
```bash
sudo curl -sSL https://get.docker.com | sh
```

启动docker，并且将 Docker 设置为自动启动。
```
sudo service docker start
sudo systemctl enable docker
```

然后重新启动 Pi，或者通过以下方式启动 Docker 守护程序：
```bash
sudo systemctl start docker
```


安装完 docker 后，直接安装 Home Assistant，其中需要修改 `-v` 参数 `/home/pi/homeassistant:/config` 为 Home Assistant 配置文件所在目录，修改为 `<路径>:/config` ，其余可以不改变
```bash
sudo docker run -d \
  --name homeassistant \
  --privileged \
  --restart=unless-stopped \
  -e TZ=MY_TIME_ZONE \
  -v /home/pi/homeassistant:/config \
  --network=host \
  ghcr.io/home-assistant/raspberrypi4-homeassistant:stable
```


### 重启 Home Assistant
```bash
sudo docker restart homeassistant
```


### 访问 Home Assistant
通过 `http://<raspberry-ip>:8123` 访问

http://192.168.3.223:8123

## HACS 插件安装
[HACS](https://github.com/hacs/integration)

然后我们在`Home assistant`的根目录下新建“custom_components”和“www”这2个文件夹。

```bash
sudo mkdir homeassistant/custom_components
sudo mkdir homeassistant/www
```

上传

```bash
scp -r hacs pi@192.168.3.215:~/homeassistant/custom_components
scp -r C:/Users/henryzhu/Downloads/xiaomi_miot_raw/custom_components/xiaomi_miot_raw pi@192.168.3.215:~/homeassistant/custom_components
```
scp -r hacs pi@192.168.3.220:~/homeassistant/custom_components

打开高级设置确保可以安装HACS
![打开高级设置](./hacs-install-setting.png)

配置 -> 通用 -> 服务控制 -> 服务管理  -> 重新启动


如果无效则需要在树莓派终端重启docker
```bash
sudo service docker restart
```

## 在 HACS 中安装 Mi MLoT


```bash
scp -r xiaomi_miot_raw/custom_components/xiaomi_miot_raw pi@192.168.3.220:~/homeassistant/custom_components
```

## 添加米家设备

## 添加到 Homekit 中

## 主题

themes/ios-themes/ios-themes.yaml