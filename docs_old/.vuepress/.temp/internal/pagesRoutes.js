import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-529e3579","/content.html",{"title":""},["/content","/content.md"]],
  ["v-65f93cba","/deepLearning/deeplearning.html",{"title":"深度学习"},["/deepLearning/deeplearning","/deepLearning/deeplearning.md"]],
  ["v-369d7c7a","/homeAssistant/homeAssistant.html",{"title":"Home Assistant"},["/homeAssistant/homeAssistant","/homeAssistant/homeAssistant.md"]],
  ["v-9c812d4e","/linux/linux.html",{"title":"Linux"},["/linux/linux","/linux/linux.md"]],
  ["v-7d597f43","/vscode/vscode.html",{"title":"VScode"},["/vscode/vscode","/vscode/vscode.md"]],
  ["v-e9ca8e14","/deepLearning/classification/classification.html",{"title":"图像分类任务"},["/deepLearning/classification/classification","/deepLearning/classification/classification.md"]],
  ["v-4b4c296e","/deepLearning/cnn/cnn.html",{"title":"卷积神经网络CNN"},["/deepLearning/cnn/cnn","/deepLearning/cnn/cnn.md"]],
  ["v-0121d15c","/deepLearning/mlp/mlp.html",{"title":"深度学习入门"},["/deepLearning/mlp/mlp","/deepLearning/mlp/mlp.md"]],
  ["v-54e5b9f6","/deepLearning/norm/norm.html",{"title":"范数、正则化"},["/deepLearning/norm/norm","/deepLearning/norm/norm.md"]],
  ["v-29f4fef6","/deepLearning/object_dection/object_dection.html",{"title":""},["/deepLearning/object_dection/object_dection","/deepLearning/object_dection/object_dection.md"]],
  ["v-4a3c87e0","/linux/basic/basic.html",{"title":"目录"},["/linux/basic/basic","/linux/basic/basic.md"]],
  ["v-dd2a52ce","/linux/basic/linux-basic.html",{"title":"Linux 文件系统"},["/linux/basic/linux-basic","/linux/basic/linux-basic.md"]],
  ["v-b7bc9f16","/linux/basic/linux-file_system.html",{"title":""},["/linux/basic/linux-file_system","/linux/basic/linux-file_system.md"]],
  ["v-71f469d3","/linux/basic/%E5%AE%9E%E9%AA%8C1%20Linux.html",{"title":"实验1 Linux基础"},["/linux/basic/实验1 Linux.html","/linux/basic/%E5%AE%9E%E9%AA%8C1%20Linux","/linux/basic/实验1 Linux.md","/linux/basic/%E5%AE%9E%E9%AA%8C1%20Linux.md"]],
  ["v-502be49b","/linux/basic/%E5%AE%9E%E9%AA%8C2%20Makefile%E5%AE%9E%E9%AA%8C.html",{"title":"实验1 Makefile实验"},["/linux/basic/实验2 Makefile实验.html","/linux/basic/%E5%AE%9E%E9%AA%8C2%20Makefile%E5%AE%9E%E9%AA%8C","/linux/basic/实验2 Makefile实验.md","/linux/basic/%E5%AE%9E%E9%AA%8C2%20Makefile%E5%AE%9E%E9%AA%8C.md"]],
  ["v-74643ab4","/linux/frp/frp.html",{"title":"使用 frp 进行内网穿透"},["/linux/frp/frp","/linux/frp/frp.md"]],
  ["v-bbe256d2","/linux/nvidia/cuda_cudnn.html",{"title":"Ubuntu 配置 CUDA + cuDNN 环境"},["/linux/nvidia/cuda_cudnn","/linux/nvidia/cuda_cudnn.md"]],
  ["v-71eaf2fe","/linux/tmux/tmux.html",{"title":"tmux"},["/linux/tmux/tmux","/linux/tmux/tmux.md"]],
  ["v-2475001e","/linux/ubuntu/ubuntu.html",{"title":"Ubuntu"},["/linux/ubuntu/ubuntu","/linux/ubuntu/ubuntu.md"]],
  ["v-73742348","/linux/vim/vim.html",{"title":"Vi/Vim"},["/linux/vim/vim","/linux/vim/vim.md"]],
  ["v-7ff0ea6c","/program/cmake/cmake.html",{"title":"CMake"},["/program/cmake/cmake","/program/cmake/cmake.md"]],
  ["v-a62073b8","/program/cmake/compile-executable_file.html",{"title":"【CMake】编译可执行文件"},["/program/cmake/compile-executable_file","/program/cmake/compile-executable_file.md"]],
  ["v-695a500c","/program/cmake/compile-library.html",{"title":"【CMake】编译和链接静态库和动态库"},["/program/cmake/compile-library","/program/cmake/compile-library.md"]],
  ["v-a1e4e24c","/program/cmake/opencv.html",{"title":"从源码编译 Opencv"},["/program/cmake/opencv","/program/cmake/opencv.md"]],
  ["v-9a0c4bb4","/program/cpp/cpp.html",{"title":"C++"},["/program/cpp/cpp","/program/cpp/cpp.md"]],
  ["v-17425524","/program/java/java.html",{"title":"Java"},["/program/java/java","/program/java/java.md"]],
  ["v-65969024","/program/python/python.html",{"title":"Python"},["/program/python/python","/program/python/python.md"]],
  ["v-1d762485","/deepLearning/object_dection/dataset/dataset.html",{"title":"目标检测数据集"},["/deepLearning/object_dection/dataset/dataset","/deepLearning/object_dection/dataset/dataset.md"]],
  ["v-0c789358","/deepLearning/object_dection/dataset-yolo/",{"title":"基于目标检测的数据集制作"},["/deepLearning/object_dection/dataset-yolo/index.html","/deepLearning/object_dection/dataset-yolo/README.md"]],
  ["v-66fedbe8","/program/cmake/opencv/opencv.html",{"title":"目录"},["/program/cmake/opencv/opencv","/program/cmake/opencv/opencv.md"]],
  ["v-a99557cc","/program/cpp/GenericProgramming/GenericProgramming.html",{"title":"【C++】泛型编程(GenericProgramming)"},["/program/cpp/GenericProgramming/GenericProgramming","/program/cpp/GenericProgramming/GenericProgramming.md"]],
  ["v-54e10a82","/program/java/project/project.html",{"title":"Java 安装与项目配置"},["/program/java/project/project","/program/java/project/project.md"]],
  ["v-4fe626dc","/program/python/base/iterator.html",{"title":"目录"},["/program/python/base/iterator","/program/python/base/iterator.md"]],
  ["v-f4e8c5a8","/program/python/base/list.html",{"title":"列表"},["/program/python/base/list","/program/python/base/list.md"]],
  ["v-6fe30bb0","/program/cmake/opencv/opencv4/",{"title":"配置OpenCV动态库环境(程序执行时加载动态库*.so的路径)"},["/program/cmake/opencv/opencv4/index.html","/program/cmake/opencv/opencv4/README.md"]],
  ["v-79be44a3","/program/python/lib/argparse/argparse.html",{"title":"argparse: Python 内置的命令行接口"},["/program/python/lib/argparse/argparse","/program/python/lib/argparse/argparse.md"]],
  ["v-5bf6c2fa","/program/python/lib/tabulate/tabulate.html",{"title":""},["/program/python/lib/tabulate/tabulate","/program/python/lib/tabulate/tabulate.md"]],
  ["v-beb431fa","/program/python/lib/tqdm/tqdm.html",{"title":"tqdm"},["/program/python/lib/tqdm/tqdm","/program/python/lib/tqdm/tqdm.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
