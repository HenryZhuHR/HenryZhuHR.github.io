# 机器学习中的散度 divergence on Machine Learning

散度(divergence)是一种衡量两个概率分布的匹配程度的指标，两个分布差异越大，散度越大。
## KL散度

考虑某个随机变量 $x$ 的未知分布(目标分布) $P(x)$，假定用一个近似的分布(匹配分布) $Q(x)$ 对它进行建模，那么可以使用[公式 (1)](#KL_divergence) 衡量两个概率分布之间的差异，被称为分布 $P(x)$ 和分布 $Q(x)$ 之间的**相对熵(relative entropy)**或者**KL散度(Kullback-Leibler (KL) divergence)**。

<div id="KL_divergence"></div>

$$
\begin{equation}
  D_{KL}(P\|Q) 
  = \mathbb{E}_{x\sim P} \left[ \log\frac{P(x)}{Q(x)} \right] 
  = \sum_{i=1}^N P(x_i) \log\frac{P(x_i)}{Q(x_i)}
\end{equation}
$$

KL 散度有如下性质：

- **非对称。** $D_{KL}(P\|Q) \neq D_{KL}(Q\|P)$ ，所以 KL 散度不是一个真正的距离或者度量。由于非对称的特点，KL 散度通常选择正态分布而不是均匀分布。
> 参见[机器学习中常见散度距离](https://zhuanlan.zhihu.com/p/93853664)
- **非负。** $D_{KL}(P\|Q) \geq 0$ ，当且仅当 $P(x)=Q(x)$ 时等号成立。
> 使用Jensen不等式证明
- **三角不等式。** $D_{KL}(P\|Q) \geq D_{KL}(P\|R) + D_{KL}(R\|Q)$。
- **最小化 KL 散度等价于最大化似然函数。** 假设对未知分布 $p(x)$ 建模，可以使用一些参数分布(例如一个多元高斯分布) $q(x|\theta)$ 来近似 $p(x)$，$q(x|\theta)$ 由可调节的参数 $\theta$ 控制。通过最小化 $p(x)$ 和 $q(x|\theta)$ 之间关于 $\theta$ 的 KL散度可以确定 $\theta$ 。
> 参考[KL散度理解](https://zhuanlan.zhihu.com/p/39682125)


将KL散度与神经网络相结合，可以让我们学习非常复杂的数据近似分布。一种常见的解决方法称为“变分自编码器”，它学习了近似数据集中信息的最佳方法。以下链接一个很棒的教程，[深入探讨了构建变分自编码器的细节](https://arxiv.org/abs/1606.05908)

