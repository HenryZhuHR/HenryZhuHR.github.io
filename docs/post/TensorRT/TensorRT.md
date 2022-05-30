---
layout: Post
title: TensorRT
subtitle: Tips
author: HenryZhu
date: 2022-04-27
useHeaderImage: true
headerImage: /images/home-background/terraform.jpg
headerMask: rgb(67,65,47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - 摸鱼
---



[NVIDIA Official Documentation](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/)


NVIDIA TensorRT 是一个高性能机器学习推理框架。

It is designed to work in a complementary fashion with training frameworks such as TensorFlow, PyTorch, and MXNet. 

It focuses specifically on running an already-trained network quickly and efficiently on NVIDIA hardware.


## 安装
> 环境是 Linux 环境


安装 [pycuda](https://docs.nvidia.com/deeplearning/tensorrt/install-guide/index.html#installing-pycuda)
```shell
pip3 install pycuda 
```

安装 [tensorrt](https://docs.nvidia.com/deeplearning/tensorrt/install-guide/index.html#installing-pip)
```shell
pip3 install nvidia-pyindex
pip3 install nvidia-tensorrt
```
如果是写在 `requirements.txt` 内
```txt
nvidia-pyindex --extra-index-url https://pypi.ngc.nvidia.com
```

测试安装
```shell
python3
>>> import tensorrt
>>> print(tensorrt.__version__)
>>> assert tensorrt.Builder(tensorrt.Logger())
```


## 模型部署
### ONNX 模型导出和推理
### Engine 模型导出和推理
