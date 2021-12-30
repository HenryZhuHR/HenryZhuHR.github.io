import os
import tqdm
import cv2
import numpy as np

import torch
import torchvision
import torch.nn as nn
import torch.optim as optim


DATASET_PATH = os.path.join(os.path.dirname(__file__), 'datasets')


class BP(nn.Module):
    def __init__(self,input_node):
        super(BP, self).__init__()
        self.fc1 = nn.Linear(input_node, 400)  # Hidden Layer 
        self.fc2 = nn.Linear(400, 200)  # Hidden Layer 
        self.fc3 = nn.Linear(200, 100)  # Hidden Layer 
        self.fc4 = nn.Linear(100, 10)  # Output Layer 
        self.avticate = nn.Sigmoid()

    def forward(self, x):
        x = self.avticate(self.fc1(x))
        x = self.avticate(self.fc2(x))
        x = self.avticate(self.fc3(x))
        x = self.avticate(self.fc4(x))
        return x

if __name__ == '__main__':
    if not os.path.exists(DATASET_PATH):
        os.makedirs(DATASET_PATH)
    # 28*28 = 784
    # 加载模型
    train_set=torchvision.datasets.MNIST(DATASET_PATH,train=True,download=True)

    # 查看数据集
    i=0
    for dataSample in train_set:
        image=dataSample[0]
        label=dataSample[1]
        cv2.imshow('img',cv2.resize((cv2.cvtColor(np.asarray(image),cv2.COLOR_RGB2BGR)),dsize=(200,200)))
        cv2.waitKey(100)
        if i>=10: break 
        else: i+=1
    cv2.destroyAllWindows()

    # 加载网络
    model = BP(784)
    criterion = nn.CrossEntropyLoss()  # define: loss function -- MSE
    optimizer = optim.Adam(model.parameters())

    # 开始训练
    loss_list = []
    MAX_EPOCH = 5000
    for epoch in range(MAX_EPOCH):  # Strat Training
        run_loss=0.0
        run__acc=0

        pbar_train=tqdm.tqdm(train_set)
        for data_train in pbar_train:
            image=data_train[0]
            label=data_train[1]
            input_tensor=torch.Tensor(np.array(image))
            input_tensor=torch.reshape(input_tensor,(1,-1))
            label_tensor=torch.Tensor([label]).long()
            outputs=model(input_tensor)
            _, pred = torch.max(outputs.data, 1)
            optimizer.zero_grad()
            loss=criterion(outputs,label_tensor)
            loss.backward()
            optimizer.step()
            run_loss+=loss.item()
            run__acc+=torch.sum(pred==label)
            show_mesg="Train [Epoch] %d/%d [loss] %.5f train_loss:%.5f acc:%.5f"%(
                epoch, MAX_EPOCH,loss,run_loss/len(train_set),run__acc/len(train_set))
            pbar_train.set_description(show_mesg)
        if(run__acc/len(train_set)>=0.98):  # 达到某一精度就结束训练
            break


    # 测试模型
    i=0
    result=[]
    for dataSample in train_set:
        image=dataSample[0]
        label=dataSample[1]
        input_tensor=torch.Tensor(np.array(image))
        input_tensor=torch.reshape(input_tensor,(1,-1))
        outputs=model(input_tensor)
        _, pred = torch.max(outputs.data, 1)

        imgzi = cv2.putText(
            cv2.resize((cv2.cvtColor(np.array(image),cv2.COLOR_RGB2BGR)),dsize=(300,300)),
            'label:%d pred:%d '%(label,int(pred)), (0, 30), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (255, 255, 255), 2)
        cv2.imshow("img",imgzi)
        cv2.waitKey(0)
        if i>=100: break 
        else: i+=1