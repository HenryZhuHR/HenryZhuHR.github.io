
# Pytorch基础

[pytorch官方文档](https://pytorch.org/tutorials/)提供了全部的api使用方法，也提供了深度学习工作流程的介绍

- [Pytorch基础](#pytorch基础)
- [用PyTorch处理数据集](#用pytorch处理数据集)
  - [数据集定义](#数据集定义)
  - [数据集加载](#数据集加载)
- [用PyTorch搭建深度学习模型](#用pytorch搭建深度学习模型)
  - [搭建模型](#搭建模型)
- [训练网络](#训练网络)
- [模型保存与加载](#模型保存与加载)

# 用PyTorch处理数据集
深度学习的模型训练中需要将数据集中的数据读取到模型中进行训练，在pytorch中，提供了 `torch.utils.data.Dataset` 来自定义数据集和 `torch.utils.data.DataLoader` 来加载数据集，官方文档也对[ Datasets & Dataloaders ](https://pytorch.org/tutorials/beginner/basics/data_tutorial.html)作了介绍。

## 数据集定义
`torch.utils.data.Dataset` 是自定义数据集方法的抽象类，你可以自己定义你的数据类继承这个抽象类，只需要定义`__len__`和`__getitem__`这两个方法就可以。重写这个类之后，就可以使用pytorch中的api对自定义的数据集进行操作。
```python
import torch
class CustomDataset(torch.utils.data.dataset.Dataset):
    def __init__(self) -> None:
        pass

    def __getitem__(self, index:int):
        image=torch.Tensor()
        label=torch.Tensor()
        return image,label

    def __len__(self):
        return # length of your dataset 
```
- `__len__` 将返回整个数据集的大小。在新版本中，这个类不是必须要重写 (override) 的
- `__getitem__` 则根据输入参数数据集序号 `index` 返回其数据 `data` 和数据标签 `label`


## 数据集加载
DataLoader是用于加载数据集进行训练的类，将Dataset生成的数据集根据batch_size进行划分，生成一个新的可迭代对象
```python
trainset=Dataset(...)
train_loader = DataLoader(dataset=trainset,batch_size=32,shuffle=True)
```



# 用PyTorch搭建深度学习模型
## 搭建模型
pytorch中通过继承`torch.nn.Module`类来构建自己的网络，官方文档：[Build the Neural Network](https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html)

```python
from torch import nn
class MyModel(nn.Module):
    def __init__(self,**kwargs):
        # define Layer

    def forward(self,x):
        # Model Inference
        return y
```
`__init__`内是定义和管理网络的各个层(layer)，`forward`是定义网络前向推理的结构，也就是真正搭建网络的部分

创建模型后，初始化模型并进行模型的推理
```python
model = MyModel()
y = model(x)    # forward(x)
```


# 训练网络
训练模型需要一个**损失函数**和**模型优化器(optimizer)**
```python
loss_fn = nn.CrossEntropyLoss()
optimizer = torch.optim.SGD(model.parameters(), lr=1e-3)
```
有了数据、模型、损失函数、优化器，就可以进行简单的网络训练了
```python
def train(dataloader, model, loss_fn, optimizer):
    size = len(dataloader.dataset)
    for batch, (X, y) in enumerate(dataloader):
        X, y = X.to(device), y.to(device)

        # Compute prediction error
        pred = model(X)
        loss = loss_fn(pred, y)

        # Backpropagation
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
```
同时我们也需要对网络的精度进行验证，验证部分不需要对网络参数进行更新，所以需要对网络进行`model.eval()` `torch.no_grad()`操作，主要是固定BN层和dropout层，不需要进行反向传播`loss.backward()`，优化器也不需要更新`optimizer.step()`
```python
def test(dataloader, model, loss_fn):
    size = len(dataloader.dataset)
    num_batches = len(dataloader)
    model.eval()
    test_loss, correct = 0, 0
    with torch.no_grad():
        for X, y in dataloader:
            X, y = X.to(device), y.to(device)
            pred = model(X)
            test_loss += loss_fn(pred, y).item()
            correct += (pred.argmax(1) == y).type(torch.float).sum().item()
    test_loss /= num_batches
    correct /= size
    print(f"Test Error: \n Accuracy: {(100*correct):>0.1f}%, Avg loss: {test_loss:>8f} \n")
```
> `model.eval()`会

# 模型保存与加载
完成模型训练后，我们需要保存训练完成的模型，这里推荐提供`model.state_dict()`保存模型的参数，而不是整个模型
```python
torch.save(model.state_dict(), "model.pth")
```
加载刚刚保存完成的模型，我们先要加载网络结构，然后再读取网络参数`torch.load("model.pth")`，并加载到网络中`model.load_state_dict`
```python
model = MyModel()
model.load_state_dict(torch.load("model.pth"))
```

