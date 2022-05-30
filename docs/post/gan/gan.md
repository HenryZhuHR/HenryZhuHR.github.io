

## GAN
Goodfellow 等人<sup>[1](#2014NIPS_Goodfellow_GAN)</sup>在2014年首先提出了生成对抗网络(Generative Adversarial Nets, GAN) 的概念。

GAN 通常有两个部分组成：生成器和鉴别器。
- 生成器(Generator,G)会根据一组随机噪声向量来生成数据，随机噪声向量需要符合一定的数据分布 $z \sim p_z$，例如高斯分布 $z \sim N(\mu,\sigma^2)$ 或者均匀分布 $z \sim U(a,b)$。
- 鉴别器(Discriminator,D)则会对生成的数据进行判别，判断数据是真实数据还是生成数据，并且会输出一个概率。

训练 GAN 的时候，生成器 G 不断生成数据，鉴别器 D 判断生成的数据是否真实，交替进行训练。生成器 G 会不断改进生成的数据，使得鉴别器 D 无法判断生成的数据是否真实，鉴别器 D 不断训练鉴别的能力。当鉴别器 D 无法判断生成的数据是否真实的时候，那么可以认为生成器 G 学习到了真实数据的样本分布，生成的图像和真实数据分布相似，达到了[纳什均衡](https://zh.wikipedia.org/wiki/纳什均衡)



以往的生成模型都是通过寻找真实的概率分布函数，但是这个概率分布不是这么好找的。因此可以通过极大似然估计的思路，训练一个模型尽可能近似真实数据的分布

真实数据 $\{ x^1,x^2,...,x^m \}$ 的数据分布为 $p_{data}(x)$ ，真实数据的分布一般是未知的、复杂的，也很难找到这样一个分布。





$$
\begin{equation}
    \begin{aligned}
        \min_{G} \max_{D} V(D, G)=
        & \mathbb{E}_{\boldsymbol{x} \sim p_{\text{data}}(\boldsymbol{x})}[\log D(\boldsymbol{x})]\\
        + & \mathbb{E}_{\boldsymbol{z} \sim p_{\boldsymbol{z}}(\boldsymbol{z})}[\log(1-D(G(\boldsymbol{z})))]
    \end{aligned}
\end{equation}
$$




## 参考
- <span id="2014NIPS_Goodfellow_GAN"></span>[1] I. Goodfellow et al., “Generative Adversarial Nets,” in Advances in Neural Information Processing Systems (NeurIPS), 2014