# 对抗样本综述

- [对抗样本综述](#对抗样本综述)
- [对抗样本发展](#对抗样本发展)
- [对抗样本需要解决的问题](#对抗样本需要解决的问题)
- [对抗样本术语定义](#对抗样本术语定义)
- [综述论文列表](#综述论文列表)
- [引用](#引用)

# 对抗样本发展

2013年 Szegedy 等人发表了对抗样本研究的领域的开山之作 _Intriguing properties of neural networks_[<sup>[1]</sup>](#refer-anchor-1)，他们表示深度神经网络在极低的输入扰动下产生错误的预测结果，然而这些扰动可以被限制在人类视觉系统不可感知的范围内。

这是一个框约束 (box-constrained) 的优化问题
$$\begin{aligned}
    & \text{Minimize } ||r||_2 \text{ subject to}: \\
    & f(x+r)=l \\
    & x+r \in [0,1]^m
\end{aligned}$$


# 对抗样本需要解决的问题
深度视觉模型 $M(.)$ 可以预测输入图像 $x \in \mathbb{R}^m$ ，产生其预测输出标签 $l \in \mathbb{Z}^+$ ， $M(x)=l$ 。

在最常见的对抗攻击中，一般是寻找一个扰动信号 $r\in \mathbb{R}^m$ ，使得分类结果产生错误的 $\tilde{l}$ ， $M(x+r)=\tilde{l}\neq l$ 。
为了确保添加扰动后的对抗样本是人眼无法感知到差异的，扰动 $r$ 通常有范数限制(norm-bounded)， $||r||_p<\eta$ 。
$$\begin{aligned}
    M(x+r)=\tilde{l} \text{ s.t. } \tilde{l}\neq l, ||r||_p<\eta
\end{aligned}$$


# 对抗样本术语定义

- **Adversarial example/image** : 对抗样本/对抗图像，是，与之对应的则是干净样本(clean, natural or benign image)
- **Adversarial perturbation** : 对抗扰动，是一个低幅度的加性噪声
- **Adversarial training** : 在训练模型的时候加入对抗样本，增强模型的对抗 robustness
- **Fooling rate/ratio** : 欺骗率是常用的评价指标，定义为目标模型预测错误的对抗性图像的百分比。
- 是常用的评价指标，定义为目标模型预测错误的对抗图像的百分比。
- **Gradient-based attacks** : 基于梯度的攻击，涉及到模型代价面(或中间内部表示)相对于输入的梯度计算。白盒攻击主要是基于梯度的。
- **Gradient-free attacks** : 无梯度攻击，不涉及任何模型的梯度计算的攻击方法
- **Adversarialperturbation** : 


# 综述论文列表
- [Advances in adversarial attacks and defenses in computer vision: A survey](https://arxiv.org/abs/2108.00401)
- [Threat of Adversarial Attacks on Deep Learning in Computer Vision: A Survey](https://arxiv.org/abs/1801.00553)
- [Threat of Adversarial Attacks on Deep Learning in Computer Vision: Survey II](https://arxiv.org/abs/2108.00401)



# 引用

<div id="refer-anchor-1"></div>

- [1] C. Szegedy, W. Zaremba, I. Sutskever, J. Bruna, D. Erhan, I. Goodfellow, and R. Fergus, “Intriguing properties of neural networks,” arXiv
preprint [arXiv:1312.6199, 2013](https://arxiv.org/abs/1312.6199v4).

<div id="refer-anchor-2"></div>