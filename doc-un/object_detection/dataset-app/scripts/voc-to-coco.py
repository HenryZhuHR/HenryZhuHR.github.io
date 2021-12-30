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


VOC_DIR = os.path.join(configs['src_img_dir'],'VOC2012')
COCO_DIR = os.path.join(configs['src_img_dir'],'coco')
LABLED_DIR=os.path.join(configs['src_img_dir'],'labeled')
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
    
    
    