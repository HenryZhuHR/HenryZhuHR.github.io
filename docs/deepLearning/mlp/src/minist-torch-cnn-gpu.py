import os
import tqdm
import cv2
import numpy as np

import torch
import torchvision
import torch.nn as nn
import torch.optim as optim
from torch.utils import data

BATCH_SIZE = 2048 # 2048 for 2G GPU
device = 'cuda:0' if torch.cuda.is_available() else 'cpu'  # 训练设备: 单卡GPU or CPU

DATASET_PATH = os.path.join(os.path.dirname(__file__), 'datasets')
MODEL_SAVE_PATH = os.path.join(os.path.dirname(__file__), 'checkpoint')


class CNN(nn.Module):
    def __init__(self):
        super(CNN, self).__init__()
        self.conv1 = nn.Sequential(nn.Conv2d(1, 32, 3, 1, 1), nn.ReLU(),
                                   nn.MaxPool2d(2))
        self.conv2 = nn.Sequential(nn.Conv2d(32, 64, 3, 1, 1), nn.ReLU(),
                                   nn.MaxPool2d(2))
        self.conv3 = nn.Sequential(nn.Conv2d(64, 64, 3, 1, 1), nn.ReLU(),
                                   nn.MaxPool2d(2))
        self.dense = nn.Sequential(nn.Linear(64 * 3 * 3, 128), nn.ReLU(),
                                   nn.Linear(128, 10))

    def forward(self, x):
        conv1_out = self.conv1(x)
        conv2_out = self.conv2(conv1_out)
        conv3_out = self.conv3(conv2_out)
        res = conv3_out.view(conv3_out.size(0), -1)
        out = self.dense(res)
        return out


if __name__ == '__main__':
    if not os.path.exists(MODEL_SAVE_PATH):
        os.makedirs(MODEL_SAVE_PATH)
    if not os.path.exists(DATASET_PATH):
        os.makedirs(DATASET_PATH)
    # 28*28 = 784
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

    model = CNN().to(device)
    criterion = nn.CrossEntropyLoss()  # define: loss function -- MSE
    optimizer = optim.Adam(model.parameters())

    f_train = open(os.path.join(MODEL_SAVE_PATH, 'mnist-cnn.txt'),
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
            optimizer.zero_grad()  # 梯度归零
            output = model(image)  # 前向传播 (推理)
            print(output.shape)
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

        print()

        if (train__acc / len(train_loader.dataset) >= 0.98):
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
    torch.save(model, os.path.join(MODEL_SAVE_PATH, 'mnist-cnn.pkl'))
    torch.save(model.state_dict(),
               os.path.join(MODEL_SAVE_PATH, 'mnist-cnn-param.pkl'))


    print(" -- 训练过程保存至",os.path.join(MODEL_SAVE_PATH, 'mnist-cnn.txt'))
    print(" -- 完整模型保存至",os.path.join(MODEL_SAVE_PATH, 'mnist-cnn.pkl'))
    print(" -- 模型参数保存至",os.path.join(MODEL_SAVE_PATH, 'mnist-cnn-param.pkl'))