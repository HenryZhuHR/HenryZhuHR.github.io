import os
import shutil
import tqdm
import yaml
from shutil import copyfile
import random

CONFIG_FILE='config/config.yaml'

configs=None
with open(CONFIG_FILE,'r') as f:
    configs=yaml.full_load(f)


VOC_DIR = os.path.join(configs['dataset'],'VOC2012')
COCO_DIR = os.path.join(configs['dataset'],'coco')
LABLED_DIR=os.path.join(configs['dataset'],'labeled')
TRAIN_PERCENT=configs['trainset_percent']

coco_dir_list=[
    'images','images/train','images/val',
    'labels','labels/train','labels/val'
]

for path in coco_dir_list:
    dir_name=os.path.join(COCO_DIR,path)

    if not os.path.exists(dir_name):
        os.makedirs(dir_name)
    #     print("-- create",dir_name)
    # else:
    #     print("-- exist",dir_name)


# -----------------------------------
# Convert to COCO dataset
# -----------------------------------
print(" ==> Convert dataset VOC to COCO")
for root,dirs,files in os.walk(LABLED_DIR):
    if len(dirs)!=0:
        continue
    
    class_name=os.path.split(root)[-1]
    
    imgs_list=[]
    for file in files:
        if os.path.splitext(file)[-1] in ['.jpg','.jpeg']:
            imgs_list.append(file)
    
    # TODO:打乱数据集
    # random.shuffle()

    train_list=imgs_list[0:int(len(imgs_list)*TRAIN_PERCENT)]
    valid_list=imgs_list[int(len(imgs_list)*TRAIN_PERCENT):]

    pbar=tqdm.tqdm(train_list)
    for file in pbar:
        file_name=os.path.splitext(file)[0]
        # print(file_name)
        
        # from labeled
        jpg_file=os.path.join(VOC_DIR,'JPEGImages',file_name+'.jpg')
        xml_file=os.path.join(VOC_DIR,'labels',file_name+'.txt')
        # print(jpg_file,xml_file)

        # to coco
        image_file=os.path.join(COCO_DIR,'images','train',file_name+'.jpg')
        label_file=os.path.join(COCO_DIR,'labels','train',file_name+'.txt')
        # print(image_file,label_file)

        # Copy
        shutil.copyfile(jpg_file,image_file)
        shutil.copyfile(xml_file,label_file)
        pbar.set_description('%s %s'%(class_name,'train'))

    pbar=tqdm.tqdm(valid_list)
    for file in pbar:
        file_name=os.path.splitext(file)[0]
        # print(file_name)
        
        # from labeled
        jpg_file=os.path.join(VOC_DIR,'JPEGImages',file_name+'.jpg')
        xml_file=os.path.join(VOC_DIR,'labels',file_name+'.txt')
        # print(jpg_file,xml_file)

        # to coco
        image_file=os.path.join(COCO_DIR,'images','val',file_name+'.jpg')
        label_file=os.path.join(COCO_DIR,'labels','val',file_name+'.txt')
        # print(image_file,label_file)

        # Copy
        shutil.copyfile(jpg_file,image_file)
        shutil.copyfile(xml_file,label_file)
        pbar.set_description('%s %s'%(class_name,'valid'))
    
    