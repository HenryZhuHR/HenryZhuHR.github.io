---
layout: Post
title: 分类问题的损失函数
subtitle: CE & BCE
author: HenryZhu
date: 2022-04-23
useHeaderImage: true
headerImage: /images/home-background/terraform-studios-030322-totem-xeda-shot4-qm.jpg
headerMask: rgb(67,65,47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - 深度学习
---

<!-- https://zhuanlan.zhihu.com/p/421830591 -->

# 分类问题的损失函数
分类问题中通常采用交叉熵损失函数，在二分类问题中，BCE+Sigmoid ，多分类问题中，CE+Softmax
## BCE
BCE (Binary Cross Entropy) 一般用于**二分类任务**，是计算模型预测输出 $\hat{y}=f(x)$ 和真实标签 $y$ 之间的误差

$$
\mathcal{L}_{BCE}(y,\hat{y})=-\frac{1}{N}\sum_{i=1}^N 
\left[ 
    y_i\cdot\log\hat{y}_i + (1-y_i)\cdot\log(1-\hat{y}_i) 
\right]
$$


## BCE 与 Sigmoid 函数
网络进行反向传播的时候，BCE 求导
$$
\begin{aligned}
    \frac{\partial\mathcal{L}_{BCE}}{\partial x_i}
    &= \frac{\partial\mathcal{L}_{BCE}}{\partial \hat{y}_i}\cdot\frac{\partial\hat{y}_i}{\partial x_i} \\
    &= -\left[ \frac{y_i}{\hat{y}_i} - \frac{1-y_i}{1-\hat{y}_i}\right]\frac{\partial\hat{y}_i}{\partial x_i} 
\end{aligned}
$$
当网络的激活函数选择 Sigmoid 函数 $S(x)=\frac{1}{1+e^{-x}}$ 时，根据 Sigmoid 函数求导的性质 $\frac{\partial\hat{y}_i}{\partial x_i} = S(x_i)(1-S(x_i))$ ，则
$$
\begin{aligned}
    \frac{\partial\mathcal{L}_{BCE}}{\partial x_i}
    &= \frac{\partial\mathcal{L}_{BCE}}{\partial \hat{y}_i}\cdot\frac{\partial\hat{y}_i}{\partial x_i} \\
    &= -\left[ \frac{y_i}{S(x_i)} - \frac{1-y_i}{1-S(x_i)}\right]S(x_i)(1-S(x_i)) \\
    &= S(x_i) - y_i
\end{aligned}
$$
所以当网络采样 Sigmoid 函数和 BCE 损失函数进行训练时，网络反向传播的梯度与误差是正相关的。所以在二分类问题中，常采用 Sigmoid 函数作为损失函数。


在 Pytorch 中，[BCE (Binary Cross Entropy)](https://pytorch.org/docs/stable/generated/torch.nn.BCELoss.html#torch.nn.BCELos)
$$
\begin{equation}
    \ell(x, y) = L = \{l_1,\dots,l_N\}^\top, \quad
    l_n = - w_n \left[ y_n \cdot \log x_n + (1 - y_n) \cdot \log (1 - x_n) \right]
\end{equation}
$$

$$
\begin{equation}
    \ell(x, y) = 
    \begin{cases}
        \operatorname{mean}(L), & \text{if reduction} = \text{`mean';}\\
        \operatorname{sum}(L),  & \text{if reduction} = \text{`sum'.}
    \end{cases}
\end{equation}
$$