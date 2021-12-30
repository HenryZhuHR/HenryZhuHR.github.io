# 线性空间与线性变换
## 线性空间
### 线性空间的定义
**线性空间**：对于非空集合 $V$ 以及给定数域 $P$，集合 $V$ 对于加法和数乘运算具有封闭性，则 $V$ 是域 $P$ 上的一个**线性空间**或者**向量空间**. 线性空间 $V$ 中的元素称为向量
1. 加法封闭性: $\forall x,y,z\in V$，有唯一元素 $(x+y)\in V$，并且满足性质
   - 交换律 $x+y=y+x$
   - 结合律 $x+(y+z)=(x+y)+z$
   - 存在零元素 $\exist \theta \in V,\text{s.t. }  x+\theta=x$
   - 存在负元素 $\forall x\in V ,\exist(-x)\in V,\text{s.t. } x+(-x)=\theta$
2. 乘法封闭性: $\forall x,y \in V,\forall \alpha,\beta,1 \in P$，有唯一元素$(x+y)\in V$，并且满足性质
   - 分配律 $\alpha(x+y)=\alpha x+\alpha y$
   - 分配律 $(\alpha+\beta)x=\alpha x+\beta x$
   - 结合律 $\alpha(\beta x)=(\alpha\beta)x$
   - 存在单位数 $1x=x$
3. 线性空间中的零元素唯一，线性空间中的任意负元素唯一

### 线性组合与相关性
**线性组合**: 向量 $x\in V$ 可以由一个向量组 $\alpha_i\in V$ 以及对应的坐标 $\lambda_i\in P$ 表示为 $x=\lambda_1\alpha_1+\lambda_2\alpha_2+...+\lambda_n\alpha_n$ ，那么称 $x$ 是 $\alpha_i$ 的线性组合，或者 $x$ 可以由 $\alpha_i$ 线性表示

- **线性相关**: 若有 $\lambda_1,\lambda_2,...,\lambda_n$ 不全为零，使得 $\lambda_1\alpha_1+\lambda_2\alpha_2+...+\lambda_n\alpha_n=\theta$ ，则向量组 $\alpha_1,\alpha_2,...,\alpha_n$ 是线性相关的
- **线性无关**: 仅当 $\lambda_1,\lambda_2,...,\lambda_n$ 全部为零，使得 $\lambda_1\alpha_1+\lambda_2\alpha_2+...+\lambda_n\alpha_n=\theta$ ，则向量组 $\alpha_1,\alpha_2,...,\alpha_n$ 是线性无关的

> [!Note|label:线性相关的集合意义]
> 线性相关的 $n$ 个向量处于同一个平面内，例如线性相关的两个向量共线、线性相关的三个向量共面


### 线性空间的维数
定义线性空间 $V$ 中，线性无关的向量组中所含元素最大的个数 $n$ 称为 $V$ 的维数，记为 $\text{dim}V=n$.     
此时的线性空间称为数域 $P$ 上的 $n$ 维线性空间，记为 $V^n$
 
> 当 $n=+\infty$ ，线性空间称为无限维线性空间


### 基
线性空间 $V$ 中，向量组 $\alpha_1,\alpha_2,...,\alpha_n$ 满足
- 向量组 $\alpha_1,\alpha_2,...,\alpha_n$ 线性无关
-  $\forall x\in V$  都可以由向量组 $\alpha_1,\alpha_2,...,\alpha_n$ 线性表示     

那么向量组 $\alpha_1,\alpha_2,...,\alpha_n$ 称为线性空间 $V$ 中的一个**基**，并且称 $\alpha_i$ 为基向量

- 向量组中向量的个数 $n$ 为 $V$ 的维数($\text{dim}V=n$ or  $V^n$)


## 双基变换
线性空间 $V$ 中的两个基 $A\{\alpha_1,\alpha_2,...,\alpha_n\}$ 和 $B\{\beta_1,\beta_2,...,\beta_n\}$ 满足
$$\left\{\begin{aligned}
   \beta_1 &= k_{11}\alpha_1+k_{12}\alpha_2+...+k_{1n}\alpha_n \\
   \beta_2 &= k_{21}\alpha_1+k_{22}\alpha_2+...+k_{2n}\alpha_n \\
   ... \\
   \beta_n &= k_{n1}\alpha_1+k_{n2}\alpha_2+...+k_{nn}\alpha_n \\
\end{aligned}\right.$$
矩阵 $K_{AB}=\begin{bmatrix}
   k_{11} & k_{12} & ... & k_{1n} \\
   k_{21} & k_{22} & ... & k_{2n} \\
     ...  &   ...  & ... &  ...   \\
   k_{n1} & k_{n2} & ... & k_{nn} \\
\end{bmatrix}$ 满足 $B=AK_{AB}$，则称 $K_{AB}$ 为双基变换的过渡矩阵
