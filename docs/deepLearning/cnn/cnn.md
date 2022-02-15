# 卷积神经网络CNN
- [卷积神经网络CNN](#卷积神经网络cnn)
  - [卷积神经网络的产生](#卷积神经网络的产生)
  - [卷积计算过程](#卷积计算过程)
    - [1D 卷积过程](#1d-卷积过程)
    - [2D 卷积过程](#2d-卷积过程)
    - [3D 卷积过程](#3d-卷积过程)
  - [Relu 函数](#relu-函数)
  - [感受野](#感受野)
  - [全零填充 (Padding)](#全零填充-padding)
  - [批标准化 (Batch Normalization, BN)](#批标准化-batch-normalization-bn)
  - [池化 (Pooling)](#池化-pooling)
  - [CNN 网络架构](#cnn-网络架构)
  - [基于CNN的手写数字识别](#基于cnn的手写数字识别)


<!-- https://www.zybuluo.com/hanbingtao/note/485480 -->
## 卷积神经网络的产生
全连接神经网络在处理图像有明显的缺点：
- **待训练参数量太多**。 图像大小为 100×100 时，输入参数为 100×100×3(channel)=30000，并且待优化参数过多容易导致模型过拟合。
- **丢失了像素的位置信息，破坏了图像的空间信息**。 如果使用全连接网络的话，输入值就是按照离散的像素点进行输入，相邻像素点直接的相关性就被破坏了。
- **网络层数不可能太多**。 参数太多，训练时容易过拟合，就导致了网络的层数不可能太深。

图像特征的提取需要采用卷积的方法，因此，**卷积神经网络** (CNN, Convolutional Neural Network) 就出现了。
- **局部连接**。 神经元不再和上一层的**全部**神经元相连，而只和**部分**神经元相连，以此来减少了网络参数。
- **权值共享**。 两组神经元的连接可以共享同一个权重，而不是每个连接有一个不同的权重，以此进一步减少网络参数。
- **下采样**。 可以使用下采样 (Pooling) 的方法来减少每层的样本数，进一步减少参数数量，同时还可以提升模型的鲁棒性，防止过拟合。 

卷积神经网络更加适用于**图像**任务。

CNN概念包括：
- 二维[卷积计算过程](#卷积计算过程)
- 全新的激活函数 [Relu 函数](#relu-函数)
- [感受野](#感受野)
- [全零填充 (Padding)](#全零填充-padding)
- [批标准化 (BN)](#批标准化-batch-normalization-bn)
- [池化 (Pooling)](#池化-pooling)


## 卷积计算过程
### 1D 卷积过程
详见《数字信号处理》课程

### 2D 卷积过程
一个 5×5 的图像和一个 3×3 的 **2D卷积核** (**kernel**) 进行**步长** (**stride**) 为1的卷积计算可以得到一个 3×3 的**特性图** (**Feature Maps**)，卷积计算过程如下

![Conv2D](./images/con2d.gif)

图像 $x_{i,j}$ 和 kernel $\omega_{m,n}$ 进行卷积，$\omega_b$表示 kernel 的偏置项 

$$\begin{aligned}
  a_{p,q}=f(\sum_{m=0}^{2} \sum_{n=0}^{2} w_{m,n} x_{(m+1\times p),(n+1\times q)}+\omega_b)
\end{aligned}$$
$$\begin{aligned}
  \quad 0 \leq p,q \leq 2 ,
  \quad 0 \leq m,n \leq 2 ,
\end{aligned}$$

例如，计算 $a_{0,1}$ （这里不考虑激活函数的作用）
$$\begin{aligned}
  a_{0,1} &= \sum_{m=0}^{2} \sum_{n=0}^{2} w_{m,n} x_{(m+1\times 0),(n+1\times 1)}+\omega_b \\
          &= \sum_{m=0}^{2} \sum_{n=0}^{2} w_{m,n} x_{(m),(n+1)}+0 \\
          &= (2\times 0+3\times 1+1\times 0+
              3\times 1+3\times 0+0\times 1+
              0\times 0+1\times 1+2\times 0)+0 \\
          &= 7
\end{aligned}$$

上面的卷积过程是步长为 1 的卷积过程，当步长为 2 的时候，卷积过程如下

![Conv2D](./images/con2d-stride_2.gif)

$$\begin{aligned}
  a_{p,q}=f(\sum_{m=0}^{2} \sum_{n=0}^{2} w_{m,n} x_{(m+2\times p),(n+2\times q)}+\omega_b)
\end{aligned}$$

### 3D 卷积过程
![Conv3d](./images/con3d-stride_1.gif)

RGB图像一般包含三个颜色通道 (channel) ，因此对于RGB图像的卷积过程就变成了三维卷积。

图像矩阵变成了 **长度×宽度×深度** ，滤波器也会增加一个**深度**维度

## Relu 函数
在全连接神经网络中，我们使用了 `Sigmoid`函数 作为激活函数来解决阶跃函数 `sgn` 不连续的特点。

但是 `Sigmoid`函数 包含了指数运算 $e^{-x}$ ，计算复杂度就比较大了。

在全连接网络的反向传播的过程中，每经过一层 `Sigmoid`激活层，就会乘上一个`Sigmoid`的导数，其导数最大值为$0.25$，这就导致在`Sigmoid`函数作为激活函数的**深度**神经网络中，会产生梯度消失的问题。

因此几年来，新的激活函数 `Relu` 使用得越来越多了。

**Relu** 函数的定义是
$$\begin{aligned}
    f(X)=max(0,x)
\end{aligned}$$
![Relu](./images/relu.png)

Relu函数的有如下优势
- **计算速度快**
- **减轻梯度消失**，
  ![d(sigmod)/dx](./images/derivativeOfSigmoid.png)


- **稀疏性**，通过对大脑的研究发现，大脑在工作的时候只有大约5%的神经元是激活的，而采用sigmoid激活函数的人工神经网络，其激活率大约是50%。有论文声称人工神经网络在15%-30%的激活率时是比较理想的。因为relu函数在输入小于0时是完全不激活的，因此可以获得一个更低的激活率。


## 感受野
**感受野（Receptive Field）** 定义是卷积神经网络每一层输出的特征图（feature map）上的像素点在输入图片上映射的区域大小。即，特征图上的一个点对应输入图上的区域的尺寸。

**神经元的感受野越大，表示它提取特征的范围也就越大**，也就是可以提取到**更加全局的特征**。相反,**感受野越小,表示提取特征的范围越小**，表示包含的特征更加趋于表示**局部和细节的特征**。因此感受野的值可以用来大致判断每一层的抽象层次

![cnn](./images/cnn-3x3_5x5conv.png)

> 假定图片的长、宽均为 $m$ ，卷积计算步长为 $1$

对于两个计算过程都可以得到一个 1×1 的特征图，其感受野都是 **5**， 虽然是结果两个不同过程.
- 左边过程中，第一次卷积，每个像素点可以"看到"上一层的 3×3 ，全部像素点可以"看到"的是 5×5 的范围. 第二次卷积之后，得到的特征图是 1×1 ，它可以"看到"上层的特征图的 3×3 的范围，而 3×3 总共9个像素点又可以"看到" 5×5 的像素点， 所以其感受野是 **5**。
- 右边过程的 filter 是 5×5 ，因此其感受野是 **5**。


我们来计算一下两种情况下的计算量
- $3 \times 3$ 卷积核的参数量：$3 \times 3 + 3 \times 3=18$（两次卷积过程，各有一个$3 \times 3$卷积核），计算量：$9(m-2)^2+9(m-4)^2=m^2-108m+180$
- $5 \times 5$ 卷积核的参数量：$5 \times 5=25$，计算量：$25(m-4)^2=25m^2-200ml+400$

得出一个结论是当 $m>10$ 时，两层 3×3 卷积核的计算性能优于 一层 $5×5$ 卷积核

<!-- https://www.bilibili.com/video/BV1B7411L7Qt?p=27 -->


## 全零填充 (Padding)
输出图片边长
<!-- - 全零填充: $\frac{输入图片边长}{步长}$ -->
<!-- - 非全零填充: $\frac{输入图片边长-核边长+1}{步长}$ -->
- 全零填充: $\frac{with}{stides}$
- 非全零填充: $\frac{w-filter\_size+1}{stides}$

## 批标准化 (Batch Normalization, BN)
## 池化 (Pooling)
**池化层**的作用主要是进行**下采样**，以减少参数量。

池化的方式一般有
- Max Pooling : 
- Mean Pooling : 

![pooling](./images/Pooling.png)

## CNN 网络架构
![CNN Architecture](./images/NetworkArchitecture.png)

CNN 网络架构 (Architecture) 包括:
- **输入层**。
- **卷积层** (Convolution Layer)，输入层是需要激活的，通常使用 `Relu` 函数进行激活。
- **池化层** (Polling Layer)。
- **全连接层** (Fully Connected Layer)。


<!-- ## 卷积 -->

<!-- 1. 滤波器的作用或者说是卷积的作用。卷积层的参数是有一些可学习的滤波器集合构成的。每个滤波器在空间上（宽度和高度）都比较小，但是深度和输入数据一致（这一点很重要，后面会具体介绍）。直观地来说，网络会让滤波器学习到当它看到某些类型的视觉特征时就激活，具体的视觉特征可能是某些方位上的边界，或者在第一层上某些颜色的斑点，甚至可以是网络更高层上的蜂巢状或者车轮状图案。

2. 可以被看做是神经元的一个输出。神经元只观察输入数据中的一小部分，并且和空间上左右两边的所有神经元共享参数（因为这些数字都是使用同一个滤波器得到的结果）。

3. 降低参数的数量。这个由于卷积具有“权值共享”这样的特性，可以降低参数数量，达到降低计算开销，防止由于参数过多而造成过拟合。 -->


<!-- # 经典的 CNN 网络
下面是卷积神经网络领域中比较有名的几种结构：

- **LeNet** ，第一个成功的卷积神经网络应用，是Yann LeCun在上世纪90年代实现的。当然，最著名还是被应用在识别数字和邮政编码等的LeNet结构。
- **AlexNet** ，AlexNet卷积神经网络在计算机视觉领域中受到欢迎，它由Alex Krizhevsky，Ilya Sutskever和Geoff Hinton实现。AlexNet在2012年的ImageNet ILSVRC 竞赛中夺冠，性能远远超出第二名（16%的top5错误率，第二名是26%的top5错误率）。这个网络的结构和LeNet非常类似，但是更深更大，并且使用了层叠的卷积层来获取特征（之前通常是只用一个卷积层并且在其后马上跟着一个汇聚层）。
- **ZF Net** ，Matthew Zeiler和Rob Fergus发明的网络在ILSVRC 2013比赛中夺冠，它被称为 ZFNet（Zeiler & Fergus Net的简称）。它通过修改结构中的超参数来实现对AlexNet的改良，具体说来就是增加了中间卷积层的尺寸，让第一层的步长和滤波器尺寸更小。
- **GoogLeNet** ，ILSVRC 2014的胜利者是谷歌的Szeged等实现的卷积神经网络。它主要的贡献就是实现了一个奠基模块，它能够显著地减少网络中参数的数量（AlexNet中有60M，该网络中只有4M）。还有，这个论文中没有使用卷积神经网络顶部使用全连接层，而是使用了一个平均汇聚，把大量不是很重要的参数都去除掉了。GooLeNet还有几种改进的版本，最新的一个是Inception-v4。
- **VGGNet** ，ILSVRC 2014的第二名是Karen Simonyan和 Andrew Zisserman实现的卷积神经网络，现在称其为VGGNet。它主要的贡献是展示出网络的深度是算法优良性能的关键部分。他们最好的网络包含了16个卷积/全连接层。网络的结构非常一致，从头到尾全部使用的是3x3的卷积和2x2的汇聚。他们的预训练模型是可以在网络上获得并在Caffe中使用的。VGGNet**不好的一点是它耗费更多计算资源，并且使用了更多的参数，导致更多的内存占用（140M）。其中绝大多数的参数都是来自于第一个全连接层。后来发现这些全连接层即使被去除，对于性能也没有什么影响**，这样就显著降低了参数数量。
- **ResNet** ，残差网络（Residual Network）是ILSVRC2015的胜利者，由何恺明等实现。它使用了特殊的跳跃链接，大量使用了批量归一化（batch normalization）。这个结构同样在最后没有使用全连接层。读者可以查看何恺明的的演讲（视频，PPT），以及一些使用Torch重现网络的实验。ResNet当前最好的卷积神经网络模型（2016年五月）。何开明等最近的工作是对原始结构做一些优化，可以看论文Identity Mappings in Deep Residual Networks，2016年3月发表。 -->


<!-- # CNN 应用
- **图像分类、检索**    

图像分类是比较基础的应用，他可以节省大量的人工成本，将图像进行有效的分类。对于一些特定领域的图片，分类的准确率可以达到 95%+，已经算是一个可用性很高的应用了。   

典型场景：图像搜索…

- **目标定位检测**

可以在图像中定位目标，并确定目标的位置及大小。

典型场景：自动驾驶、安防、医疗…

- **目标分割**

简单理解就是一个像素级的分类。

他可以对前景和背景进行像素级的区分、再高级一点还可以识别出目标并且对目标进行分类。

典型场景：美图秀秀、视频后期加工、图像生成…

- **人脸识别**

人脸识别已经是一个非常普及的应用了，在很多领域都有广泛的应用。

典型场景：安防、金融、生活…

- **骨骼识别**

骨骼识别是可以识别身体的关键骨骼，以及追踪骨骼的动作。

典型场景：安防、电影、图像视频生成、游戏… -->


## 基于CNN的手写数字识别

MLP虽然可以实现手写数字识别，但是MLP无法对图像的二维特征进行提取和处理，而卷积操作可以很好提取图像的二维特征，因此我们希望采用[卷积神经网络（convolutional neural network，CNN）](https://zh-v2.d2l.ai/chapter_convolutional-neural-networks/index.html)会取得比MLP更好的效果。

对于CNN的搭建，我们采用[`torch.nn.Sequential`](https://pytorch.org/docs/stable/generated/torch.nn.Sequential.html?highlight=sequen#torch.nn.Sequential)
```python
from torch import nn
class CNN(nn.Module):
    def __init__(self):
        super(CNN, self).__init__()
        self.conv1 = nn.Sequential(nn.Conv2d(1, 32, 3, 1, 1), nn.ReLU(),nn.MaxPool2d(2))
        self.conv2 = nn.Sequential(nn.Conv2d(32, 64, 3, 1, 1), nn.ReLU(),nn.MaxPool2d(2))
        self.conv3 = nn.Sequential(nn.Conv2d(64, 64, 3, 1, 1), nn.ReLU(),nn.MaxPool2d(2))
        self.dense = nn.Sequential(nn.Linear(64 * 3 * 3, 128), nn.ReLU(),nn.Linear(128, 10))

    def forward(self, x:torch.Tensor):
        x = self.conv1(x)
        x = self.conv2(x)
        x = self.conv3(x)
        x = x.view(x.size(0), -1)
        x = self.dense(x)
        return x
```

加载训练设备
```python
device = 'cuda:0' if torch.cuda.is_available() else 'cpu'  # 训练设备: 单卡GPU or CPU
```
> GPU的高带宽、多线程并行计算能力能显著加快神经网络的训练速度       
> [【知乎】CPU和GPU跑深度学习差别有多大？](https://www.zhihu.com/question/273812506)

加载数据集
```python
BATCH_SIZE = 2048 # 2048 for 2G GPU(MX250)
import os
DATASET_PATH = os.path.join(os.path.dirname(__file__), 'datasets')
if not os.path.exists(DATASET_PATH):
  os.makedirs(DATASET_PATH)
import torchvision
try:  
  train_set = torchvision.datasets.MNIST(
      DATASET_PATH,
      train=True,
      download=True,
      transform=torchvision.transforms.Compose(
          [torchvision.transforms.ToTensor()]))
  valid_set = torchvision.datasets.MNIST(
      DATASET_PATH,
      train=False,
      download=True,
      transform=torchvision.transforms.Compose(
          [torchvision.transforms.ToTensor()]))
except:
  print("因网络问题无法成功下载数据集，重复运行直至不报错！")
  exit()
from torch.utils import data
train_loader = data.dataloader.DataLoader(train_set,
                                         batch_size=BATCH_SIZE,
                                         shuffle=True)
valid_loader = data.dataloader.DataLoader(valid_set,
                                         batch_size=BATCH_SIZE,
                                         shuffle=True)
```

加载模型和训练模型的损失函数和优化器
```python
model = CNN().to(device)
criterion = nn.CrossEntropyLoss().to(device)  # loss function
import torch.optim as optim
optimizer = optim.Adam(model.parameters())
```



训练代码
```python
import tqdm
MAX_EPOCH = 5000
for epoch in range(MAX_EPOCH):  # Start Training
  print("[Epoch] %d/%d"%(epoch, MAX_EPOCH))
  train_loss = 0.0
  train__acc = 0
  model.train()
  pbar_train = tqdm.tqdm(train_loader)
  for image, label in pbar_train:
      image, label = image.to(device), label.to(device)
      optimizer.zero_grad()  # 梯度归零
      output = model(image)  # 前向传播 (推理)
      loss = criterion(output, label)  # 计算损失/误差
      loss.backward()  # 反向传播
      optimizer.step()  # 根据反向传播更新参数

      train_loss += loss.item()
      _, pred = torch.max(output, 1)
      train__acc += torch.sum(pred == label).item()

      show_mesg = "  Train [loss] %.6f [acc] %.6f" % (train_loss / len(
          train_loader.dataset), train__acc / len(train_loader.dataset))
      pbar_train.set_description(show_mesg)

  valid_loss = 0.0
  valid__acc = 0
  model.eval()
  pbar_valid = tqdm.tqdm(valid_loader)
  for image, label in pbar_valid:
      image, label = image.to(device), label.to(device)
      with torch.no_grad():
          output = model(image)
      loss = criterion(output, label)

      valid_loss += loss.item()
      _, pred = torch.max(output, 1)
      valid__acc += torch.sum(pred == label).item()

      show_mesg = "  Valid [loss] %.6f [acc] %.6f" % (valid_loss / len(
          valid_loader.dataset), valid__acc / len(valid_loader.dataset))
      pbar_valid.set_description(show_mesg)
```

测试网络
```python
IMGAE_DIR='minist-img'
import os,cv2
for file_name in os.listdir(IMGAE_DIR):
    img=cv2.imread(os.path.join(IMGAE_DIR,file_name))
    '''
    Add your code here to classify all images read from directory `IMGAE_DIR='minist-img'`,for example:
    ---
    1. swap dimension from opencv format [height,width,channel] to input format [batch,channel,height]
    2. modify input shape
    3. change data into a Tensor
    4. inference Tensor data
    5. get output, select the max value index of the output
    '''
```
> 该部分代码自行填充，需要实现与[基于MLP的手写数字识别](#基于MLP的手写数字识别)中的测试结果相同的结果：
> 
<!-- > ![Result](./images/minist-res.png) -->


