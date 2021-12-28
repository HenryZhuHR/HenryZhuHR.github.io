import os
import shutil
from tqdm import tqdm
import yaml
import xml.etree.ElementTree as ET
# ========================================
#   Read config file
# ========================================
CONFIG_FILE='config/config.yaml'

configs=None
with open(CONFIG_FILE,'r') as f:
    configs=yaml.full_load(f)

VOC_DIR = os.path.join(configs['src_img_dir'],'VOC2012')
LABLED_DIR=os.path.join(configs['src_img_dir'],'labeled')
TRAIN_PERCENT=configs['trainset_percent']
VALLID_PERCENT=1-TRAIN_PERCENT
CLASSES=[]

# ---------------------------------------------
#   Generate classes txt
# ---------------------------------------------
print()
print('===================================')
print('==> Generate classes txt ')
for root,dirs,files in os.walk(os.path.join(VOC_DIR,'JPEGImages')):
    pbar = tqdm(files)
    for file in pbar:        
        classname=file.split('-')[0]        
        if classname not in CLASSES:
            CLASSES.append(classname)

with open(os.path.join(VOC_DIR,'ImageSets/Main','classes.names'),'w') as f_class:
    for classname in CLASSES:
        f_class.write(classname+'\n')