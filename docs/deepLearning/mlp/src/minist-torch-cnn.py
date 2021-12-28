import os
import tqdm
import cv2
import numpy as np

import torch
import torchvision
import torch.nn as nn
import torch.optim as optim



DATASET_PATH    = os.path.join(os.path.dirname(__file__),'datasets')
MODEL_SAVE_PATH = os.path.join(os.path.dirname(__file__),'checkpoint')
    

class CNN(nn.Module):
    def __init__(self):
        super(CNN, self).__init__()
        self.conv1 = nn.Sequential(
            nn.Conv2d(1, 32, 3, 1, 1),
            nn.ReLU(),
            nn.MaxPool2d(2))
        self.conv2 = nn.Sequential(
            nn.Conv2d(32, 64, 3, 1, 1),
            nn.ReLU(),
            nn.MaxPool2d(2)
        )
        self.conv3 = nn.Sequential(
            nn.Conv2d(64, 64, 3, 1, 1),
            nn.ReLU(),
            nn.MaxPool2d(2)
        )
        self.dense = nn.Sequential(
            nn.Linear(64 * 3 * 3, 128),
            nn.ReLU(),
            nn.Linear(128, 10)
        )

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
        train_set=torchvision.datasets.MNIST(DATASET_PATH,train=False,download=True)
    except:
        print("因为网络问题，无法成功下载数据集，重复运行文件，直到不再出现此消息为止！")
        exit()

    # -- Check Dataset
    i=0
    for dataSample in train_set:
        image=dataSample[0]
        label=dataSample[1]
        cv2.imshow('img',cv2.resize((cv2.cvtColor(np.asarray(image),cv2.COLOR_RGB2BGR)),dsize=(200,200)))
        cv2.waitKey(100)
        if i>=10: break 
        else: i+=1
    cv2.destroyAllWindows()

    model = CNN()
    criterion = nn.CrossEntropyLoss()  # define: loss function -- MSE
    optimizer = optim.Adam(model.parameters())
    MAX_EPOCH = 5000
    f_train=open(os.path.join(MODEL_SAVE_PATH,'mnist-cnn.txt'),'w') # 保存训练结果到文件
    for epoch in range(MAX_EPOCH):  # Strat Training
        run_loss=0.0
        run__acc=0

        pbar_train=tqdm.tqdm(train_set)
        for data_train in pbar_train:
            image=data_train[0]
            label=data_train[1]
            input_tensor=torch.Tensor([[np.array(image)]])
            label_tensor=torch.Tensor([label]).long()
            outputs=model(input_tensor)
            _, pred = torch.max(outputs.data, 1)
            optimizer.zero_grad()
            loss=criterion(outputs,label_tensor)
            loss.backward()
            optimizer.step()
            run_loss+=loss.item()
            run__acc+=torch.sum(pred==label)

            show_mesg="Train [Epoch] %d/%d [loss] %.5f loss:%.5f acc:%.5f"%(epoch, MAX_EPOCH,loss,run_loss/len(train_set),run__acc/len(train_set))
            pbar_train.set_description(show_mesg)
        if(run__acc/len(train_set)>=0.95):
            break
        f_train.write("%5d %5d %.8lf %.8lf"%(epoch,MAX_EPOCH,run_loss,run__acc))
    f_train.close()


    # --- Test Model ---
    i=0
    result=[]
    for dataSample in train_set:
        image=dataSample[0]
        label=dataSample[1]
        input_tensor=torch.Tensor([[np.array(image)]])
        outputs=model(input_tensor)
        _, pred = torch.max(outputs.data, 1)
        imgzi = cv2.putText(cv2.resize((cv2.cvtColor(np.array(image),cv2.COLOR_RGB2BGR)),dsize=(300,300)), 'label:%d pred:%d '%(label,pred), (0, 30), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (255, 255, 255), 2)
        cv2.imshow("img",imgzi)
        cv2.waitKey(1000)
        if i>=10: break 
        else: i+=1
    

    # 保存模型
    torch.save(model,os.path.join(MODEL_SAVE_PATH,'mnist-cnn.pkl'))
    torch.save(model.state_dict(),os.path.join(MODEL_SAVE_PATH,'mnist-cnn-param.pkl'))
