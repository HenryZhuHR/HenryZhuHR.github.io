import torch
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
import numpy as np
import matplotlib.pyplot as plt
import tqdm

MAX_EPOCH = 5000  # 修改最大训练轮数,观察损失函数及输出结果
LR = 0.1  # 修改学习率,观察损失函数及输出结果

XOR_RESLLUT = (
    (1, 0, 1),  # (x1,x2,y)
    (0, 1, 1),
    (1, 1, 0),
    (0, 0, 0))


class BP(nn.Module):
    def __init__(self):
        super(BP, self).__init__()
        self.fc1 = nn.Linear(2, 3)  # Hidden Layer : 3 neuron
        self.fc2 = nn.Linear(3, 3)  # Hidden Layer : 4 neuron
        self.fc3 = nn.Linear(3, 1)  # Output Layer : 1 neuron
        self.avticate = nn.Sigmoid()

    def forward(self, x):
        x = self.avticate(self.fc1(x))
        x = self.avticate(self.fc2(x))
        x = self.avticate(self.fc3(x))
        return x


if __name__ == '__main__':
    data = np.array(XOR_RESLLUT, dtype='float32')
    x = data[:, 0:2]
    y = data[:, 2]

    model = BP()
    x = torch.Tensor(x.reshape(-1, 2))
    y = torch.Tensor(y.reshape(-1, 1))

    criterion = nn.BCELoss()  # define: loss function -- MSE
    optimizer = optim.SGD(model.parameters(), lr=LR,
                          momentum=0.9)  # define: optimizer -- SGD
    loss_list = []
    pbar=tqdm.tqdm(range(MAX_EPOCH))
    for epoch in pbar:  # Strat Training
        optimizer.zero_grad()  # CLear Gradient Buffer
        out = model(x)
        loss = criterion(out, y)  # Compute Loss
        loss_list.append(float(loss))
        loss.backward()  # Back propagation
        optimizer.step()  # update
        pbar.set_description("Train Loss:%.10f"%(float(loss)))

    # Test model
    y = model(x)
    input = x.detach().numpy()
    output = y.detach().numpy()
    print(" === Train data === ")
    for i in range(len(x)):
        print("    %d xor %d = %d" % (x[i][0], x[i][1], y[i]))
    print(" === Train Result (Epoch:%d)=== " % MAX_EPOCH)
    for i in range(len(input)):
        print("    %d xor %d = %.5f" % (input[i][0], input[i][1], output[i]))

    # pLot
    plt.plot(loss_list)
    plt.title("Loss")
    plt.xlabel("epoch")
    plt.show()