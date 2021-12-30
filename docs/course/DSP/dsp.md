<!-- $ \xleftrightarrow{\mathcal{F}} $ -->

# 数字信号处理


# 线性时不变系统


# 离散时间信号
## 时域离散信号



# 时域离散信号的频域分析

## DTFT
连续时间信号 $x_a(t)$ 的傅里叶变换为 $X_a(j\Omega)=\int_{-\infty}^{+\infty} x_a(t) e^{-j\Omega t} \mathrm{d}t$

将连续时间信号按照时间间隔 $T$ 进行采样之后，可以得到时域离散信号 $\hat{x_a}(t)=\sum_{n=-\infty}^{\infty} x_a(nT)\delta(t-nT)$

根据连续时间傅里叶变换公式$F(\omega)=\int_{-\infty}^{\infty}f(t)e^{-j\omega t} \mathrm{d}t$
$$\begin{aligned}
    \hat{X_a}(j\Omega)
    &= \int_{-\infty}^{+\infty}[\sum_{n=-\infty}^{\infty} x_a(nT)\delta(t-nT)]e^{-j\Omega t}\mathrm{d}t \\
    &= \sum_{n=-\infty}^{\infty}[x_a(nT)
    \underbrace{\int_{-\infty}^{+\infty}\delta(t-nT)e^{-j\Omega t}\mathrm{d}t}_{\text{property of }\delta(t) :\int_{-\infty}^{+\infty}\delta(t-t_0)f(t)\mathrm{d}t=f(t_0)}] \\
    &= \sum_{n=-\infty}^{\infty} 
    \underbrace{x_a(nT)}_{x_a(nT)=x[n]}
    e^{-jn\underbrace{\Omega T}_{\Omega T=\omega}} \\
    X(e^{j\omega})&= \sum_{n=-\infty}^{\infty} x[n] e^{-jn\omega}
\end{aligned}$$

就可以得到，时域离散信号 $x[n]$ 的傅里叶变换
$$\begin{aligned}
    X(e^{j\omega})=\sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}
\end{aligned}$$
上述公式就是**离散时间傅里叶变换** (Discrete-time Fourier transform, **DTFT**)

同时,我们可以得到一个很重要的关系，即**模拟频率** $\Omega$ 、**归一化角频率** $\omega\in[-\pi,\pi)$ 以及**采样间隔** $T$ 之间的关系
$$\begin{aligned}
    \Omega T=\omega
\end{aligned}$$

## 常见信号的DTFT
$$\begin{aligned}
    \delta[n]   &\xleftrightarrow{\mathcal{F}} 1 \\
    1           &\xleftrightarrow{\mathcal{F}} \sum_{n=-\infty}^{\infty} 2\pi\delta(\omega+2\pi k) \\
    \mu[n]      &\xleftrightarrow{\mathcal{F}} \frac{1}{1-e^{-j\omega}}+\sum_{n=-\infty}^{\infty} \pi\delta(\omega+2\pi k) \\
    e^{j\omega_0}&\xleftrightarrow{\mathcal{F}} \sum_{n=-\infty}^{\infty} 2\pi\delta(\omega-\omega_0+2\pi k)\\
    \alpha^n\mu[n]&\xleftrightarrow{\mathcal{F}}\frac{1}{1-\alpha e^{-j\omega}} (0<\alpha<1) \\
    (n+1)\alpha^n\mu[n]&\xleftrightarrow{\mathcal{F}} \frac{1}{(1-\alpha e^{-j\omega})^2}(0<\alpha<1)
\end{aligned}$$


## DTFT的性质
- **连续性** : $X(e^{j\omega})$ 是归一化角频率 $\omega\in[-\pi,\pi)$ 的连续函数
  > 这是因为，离散信号的傅里叶变换是连续的

- **周期性** : $X(e^{j(\omega+2k\pi)})=X(e^{j\omega})$
  > $X(e^{j(\omega+2k\pi)})=\sum x[n]e^{-j(\omega+2\pi k)n}=\sum e^{-j\omega n} e^{-j2\pi kn}=\sum x[n]e^{-j\omega n}$

- **线性性质** : $\alpha x[n]+\beta y[n] \xleftrightarrow{\mathcal{F}} \alpha X(e^{j\omega})+\beta Y(e^{j\omega})$

- **时间反转性质** : $x[-n] \xleftrightarrow{\mathcal{F}} X(e^{-j\omega})$

- **时移性质** : $x[n-n_0] \xleftrightarrow{\mathcal{F}} e^{-j\omega n_0}X(e^{j\omega})$

- **频移性质** : $e^{j\omega_0n} x[n] \xleftrightarrow{\mathcal{F}} X(e^{j(\omega-\omega_0)})$

- **频域微分性质** : $nx[n] \xleftrightarrow{\mathcal{F}} j\frac{\mathrm{d}X(e^{j\omega})}{\mathrm{d}\omega}$

- **卷积** : $x[n]*y[n] \xleftrightarrow{\mathcal{F}} X(e^{j\omega})Y(e^{j\omega})$

- **调制** : $x[n]y[n] \xleftrightarrow{\mathcal{F}} \frac{1}{2\pi}X(e^{j\omega})*Y(e^{j\omega})$

- **实序列DTFT的对称关系**
  - $X_{re} = \frac{1}{2} [X(e^{j\omega}) + X^*(e^{j\omega})]$ , $X^*(e^{j\omega})$ 是 $X(e^{j\omega})$ 的复数共轭
  - $X_{im} = \frac{1}{2} [X(e^{j\omega}) - X^*(e^{j\omega})]$
  <!-- - $x[n]=x_{ev}[n]+x_{od}[n] \xleftrightarrow{\mathcal{F}} X(e^{j\omega})=X_{re}(e^{j\omega})+jX_{im}(e^{j\omega})$
    - $x_{ev}[n] \xleftrightarrow{\mathcal{F}} X_{re}(e^{j\omega})$
    - $x_{od}[n] \xleftrightarrow{\mathcal{F}} X_{im}(e^{j\omega})$ -->

# 离散时间系统
## 卷积

## 离散傅里叶变换DFT


$N$ 个点序列的DFT
$$\begin{aligned}
    X[k] = \sum_{n=0}^{N-1} e^{-j \frac{2\pi kn}{N}}
    \quad ,0\leq k\leq N-1
\end{aligned}$$
