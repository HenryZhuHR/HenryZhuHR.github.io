import os
import shutil
import tqdm
import yaml
from shutil import copyfile
import random
import argparse


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('--conf', type=str, default='config/custom.yaml')
    args = parser.parse_args()
    if not os.path.exists(args.conf):
        raise FileNotFoundError('"%s" not found' % args.conf)
    return args


ARGS = parse_args()
CONFIG_FILE: str = ARGS.conf


with open(CONFIG_FILE, 'r') as f:
    configs = yaml.full_load(f)
    if 'dataset' not in configs:
        raise KeyError("%s key 'dataset' is not defined in '%s'" %
                       (chr(128561), CONFIG_FILE))
    DATASET = configs['dataset']
    print(chr(128640), 'Process dataset: %s' % DATASET, os.linesep)


VOC_DIR = os.path.join(DATASET, 'VOC')
if not os.path.exists(VOC_DIR):
    raise FileNotFoundError('%s No such directory %s' %
                            (chr(128561), VOC_DIR))
COCO_DIR = os.path.join(DATASET, 'coco')
os.makedirs(COCO_DIR)

os.makedirs(os.path.join(COCO_DIR, 'images','train'), exist_ok=True)
os.makedirs(os.path.join(COCO_DIR, 'images','val'), exist_ok=True)
os.makedirs(os.path.join(COCO_DIR, 'labels','train'), exist_ok=True)
os.makedirs(os.path.join(COCO_DIR, 'labels','val'), exist_ok=True)

sets = ['train', 'val']
for set_type in sets:
    print(chr(128640),'%6s set'%set_type)
    with open(os.path.join(VOC_DIR, 'ImageSets', 'Main', '%s.txt' % set_type), 'r')as f:
        file_names=f.read().split('\n')[:-1]
        for i in range(len(file_names)): # ignore data like 'img_00 -1', convert to 'img_00'
            file_names[i]=str(file_names[i]).split(' ')[0]


    pbar=tqdm.tqdm(file_names)
    for file_name in pbar:
        pbar.set_description(file_name)
        # from VOC
        jpg_file = os.path.join(VOC_DIR, 'JPEGImages', file_name+'.jpg')
        xml_file = os.path.join(VOC_DIR, 'labels', file_name+'.txt')
        if not os.path.exists(jpg_file):
            raise FileNotFoundError('%s %s' %(chr(128561), jpg_file))
        if not os.path.exists(xml_file):
            raise FileNotFoundError('%s %s' %(chr(128561), xml_file))

        # to coco
        image_file=os.path.join(COCO_DIR,'images',set_type,file_name+'.jpg')
        label_file=os.path.join(COCO_DIR,'labels',set_type,file_name+'.txt')

        # Copy
        shutil.copyfile(jpg_file,image_file)
        shutil.copyfile(xml_file,label_file)
        

        