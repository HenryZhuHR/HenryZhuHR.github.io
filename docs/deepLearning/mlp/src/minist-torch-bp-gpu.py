import os
import tqdm

import torch
import torchvision
import torch.nn as nn
import torch.optim as optim
from torch.utils import data

BATCH_SIZE = 4096 # 2048 for 2G GPU
device = 'cuda:0' if torch.cuda.is_available() else 'cpu'  # 训练设备: 单卡GPU or CPU

DATASET_PATH = os.path.join(os.path.dirname(__file__), 'datasets')
MODEL_SAVE_PATH = os.path.join(os.path.dirname(__file__), 'checkpoint')


class BP(nn.Module):
    def __init__(self,input_node):
        super(BP, self).__init__()
        self.fc1 = nn.Linear(input_node, 400)  # Input Layer 
        self.fc2 = nn.Linear(400, 200)  
        self.fc3 = nn.Linear(200, 100)  
        self.fc_last = nn.Linear(100, 10)  # Output Layer 
        self.avticate = nn.Sigmoid()

    def forward(self, x):
        x = self.avticate(self.fc1(x))
        x = self.avticate(self.fc2(x))
        x = self.avticate(self.fc3(x))
        x = self.fc_last(x)
        return x


if __name__ == '__main__':
    if not os.path.exists(MODEL_SAVE_PATH):
        os.makedirs(MODEL_SAVE_PATH)
    if not os.path.exists(DATASET_PATH):
        os.makedirs(DATASET_PATH)

    # 加载模型    
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
        train_loader = data.dataloader.DataLoader(train_set,
                                                  batch_size=BATCH_SIZE,
                                                  shuffle=True)
        valid_loader = data.dataloader.DataLoader(valid_set,
                                                  batch_size=BATCH_SIZE,
                                                  shuffle=True)
    except:
        print("因为网络问题，无法成功下载数据集，重复运行文件，直到不再出现此消息为止！")
        exit()

    # 加载模型和训练参数
    model = BP(784).to(device)# 28*28 = 784
    criterion = nn.CrossEntropyLoss()  # define: loss function -- MSE
    optimizer = optim.Adam(model.parameters())

    # 开始训练
    f_train = open(os.path.join(MODEL_SAVE_PATH, 'mnist-bp.txt'),
                   'w')  # 保存训练结果到文件
    MAX_EPOCH = 5000
    for epoch in range(1, MAX_EPOCH):  # Strat Training
        print("[Epoch] %d/%d"%(epoch, MAX_EPOCH))
        train_loss = 0.0
        train__acc = 0
        model.train()
        pbar_train = tqdm.tqdm(train_loader)
        for image, label in pbar_train:
            image, label = image.to(device), label.to(device)
            input=torch.reshape(image,(image.shape[0],image.shape[1],-1))
            optimizer.zero_grad()  # 梯度归零
            output = model(input)  # 前向传播 (推理)
            output=torch.reshape(output,(output.shape[0],-1))
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
            input=torch.reshape(image,(image.shape[0],image.shape[1],-1))
            with torch.no_grad():
                output = model(input)
            output=torch.reshape(output,(output.shape[0],-1))
            loss = criterion(output, label)

            valid_loss += loss.item()
            _, pred = torch.max(output, 1)
            valid__acc += torch.sum(pred == label).item()

            show_mesg = "  Valid [loss] %.6f [acc] %.6f" % (valid_loss / len(
                valid_loader.dataset), valid__acc / len(valid_loader.dataset))
            pbar_valid.set_description(show_mesg)

        print()

        if (train__acc / len(train_loader.dataset) >= 0.94):
            break

        save_mesg = "[Epoch] %d/%d" % (epoch, MAX_EPOCH)
        save_mesg += "  [train loss] %.6f  [train acc] %.6f" % (
            train_loss / len(train_loader.dataset),
            train__acc / len(train_loader.dataset))
        save_mesg += "  [valid loss] %.6f  [valid acc] %.6f" % (
            valid_loss / len(valid_loader.dataset),
            valid__acc / len(valid_loader.dataset))
        save_mesg += '\n'
        f_train.write(save_mesg)
    f_train.close()

    # 保存模型
    torch.save(model, os.path.join(MODEL_SAVE_PATH, 'mnist-bp.pkl'))
    torch.save(model.state_dict(),
               os.path.join(MODEL_SAVE_PATH, 'mnist-bp-param.pkl'))

    print(" -- 训练过程保存至",os.path.join(MODEL_SAVE_PATH, 'mnist-bp.txt'))
    print(" -- 完整模型保存至",os.path.join(MODEL_SAVE_PATH, 'mnist-bp.pkl'))
    print(" -- 模型参数保存至",os.path.join(MODEL_SAVE_PATH, 'mnist-bp-param.pkl'))