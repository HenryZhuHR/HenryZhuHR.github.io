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

VOC_DIR = os.path.join(configs['dataset'],'VOC2012')
LABLED_DIR=os.path.join(configs['dataset'],'labeled')
TRAIN_PERCENT=configs['trainset_percent']
VALLID_PERCENT=1-TRAIN_PERCENT
CLASSES=[]

# ========================================
#   Create VOC2012 dir
# ========================================
print('===================================')
print('==> Create VOC2012 dir ')
voc_dir_list = [
    'Annotations',
    'ImageSets','ImageSets/Main',
    'JPEGImages'
]
for dir in voc_dir_list:
    dir_name=os.path.join(VOC_DIR,dir)    
    if not os.path.exists(dir_name):
        os.makedirs(dir_name)
        print('-- Create  ',dir_name)
    else:
        print('-- Exists  ',dir_name)


# ========================================
#   Copy labeled files to voc2012
# ========================================
print()
print('===================================')
print('==> Copy labeled files to voc2012 ')
for root,dirs,files in os.walk(LABLED_DIR):
    nfiles = len(files)
    className=os.path.split(root)[-1]
    if not nfiles > 0:
        continue    
    print(" --- copy files in class [%s]" % className)
    for file in tqdm(files):
        if os.path.splitext(file)[-1] in ['.jpg', '.jpeg']:   # is image file
            if os.path.exists(os.path.join(root,file.split('.')[0]+'.xml')):
                srcpath=os.path.join(root,file.split('.')[0]+'.jpg')
                dstpath=os.path.join(VOC_DIR,'JPEGImages',file.split('.')[0]+'.jpg')
                shutil.copyfile(srcpath,dstpath)

                srcpath=os.path.join(root,file.split('.')[0]+'.xml')
                dstpath=os.path.join(VOC_DIR,'Annotations',file.split('.')[0]+'.xml')
                shutil.copyfile(srcpath,dstpath)
            else:
                print(os.path.join(root,file.split('.')[0]+'.jpg'),'is unlabeld')
                exit()

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
        if classname.split('_')[0] not in CLASSES:
            CLASSES.append(classname.split('_')[0])

with open(os.path.join(VOC_DIR,'ImageSets/Main','classes.names'),'w') as f_class:
    for classname in CLASSES:
        f_class.write(classname+'\n')


# ---------------------------------------------
#   Generate train val txt
# ---------------------------------------------
print()
print('===================================')
print('==> Generate train val txt ')
for root,dirs,files in os.walk(os.path.join(VOC_DIR,'JPEGImages')):
    for class_ in CLASSES:
        with open(VOC_DIR +'/ImageSets/Main/%s.txt' % class_,'w') as f_txt:
            for file in files:
                if file.split('-')[0]==class_:
                    content=os.path.abspath(root+'/'+file)
                    # print(file,class_,content)
                    f_txt.write(content+"\n")

f_traintxt=open(VOC_DIR +'/ImageSets/Main/train.txt','w')
f_validtxt=open(VOC_DIR +'/ImageSets/Main/val.txt','w')

for class_ in CLASSES:       
    f_txt= open(VOC_DIR +'/ImageSets/Main/%s.txt' % class_,'r')
    files=list(f_txt)
    f_txt.close()
    for i in range(len(files)):
        files[i]=files[i].replace('\n','')

    for content in files[:int(len(files)*0.8)]:
        f_traintxt.write(content+'\n')

    for content in files[int(len(files)*0.8):]:
        f_validtxt.write(content+'\n')
f_traintxt.close()
f_validtxt.close()


sets = ['train', 'val']
classes=[]
with open(VOC_DIR+'/ImageSets/Main'+'/classes.names','r') as f_class:
    classes=list(f_class)
for i in range(len(classes)):
        classes[i]=classes[i].replace('\n','')
print(classes)

# ---------------------------------------------
#   Convert VOC to YOLO
# ---------------------------------------------
print()
print('===================================')
print('==> Convert VOC to YOLO')
def convert(size, box):
    dw = 1./size[0]
    dh = 1./size[1]
    x = (box[0] + box[1])/2.0
    y = (box[2] + box[3])/2.0
    w = box[1] - box[0]
    h = box[3] - box[2]
    x = x*dw
    w = w*dw
    y = y*dh
    h = h*dh
    return (x, y, w, h)


def convert_annotation(image_id):
    in_file = open(VOC_DIR + '/Annotations/%s.xml' % (image_id))
    out_file = open(VOC_DIR + '/labels/%s.txt' % (image_id), 'w')
    tree = ET.parse(in_file)
    root = tree.getroot()
    size = root.find('size')
    w = int(size.find('width').text)
    h = int(size.find('height').text)

    for obj in root.iter('object'):
        difficult = obj.find('difficult').text
        cls = obj.find('name').text
        if cls not in classes or int(difficult) == 1:
            continue
        cls_id = classes.index(cls)
        xmlbox = obj.find('bndbox')
        b = (float(xmlbox.find('xmin').text), float(xmlbox.find('xmax').text), float(
            xmlbox.find('ymin').text), float(xmlbox.find('ymax').text))
        bb = convert((w, h), b)
        out_file.write(str(cls_id) + " " +
                       " ".join([str(a) for a in bb]) + '\n')

for image_set in sets:
    if not os.path.exists(VOC_DIR + '/labels/'):
        os.makedirs(VOC_DIR + '/labels/')

    image_ids =[]
    with open(VOC_DIR + '/ImageSets/Main/%s.txt'%image_set,'r') as f_txt:
        image_ids=f_txt.read().split('\n')[:-1]
    
    for i in range(len(image_ids)):
        image_ids[i] = os.path.split(image_ids[i])[-1]
        image_ids[i] = image_ids[i].split('.')[0]

    for image_id in tqdm(image_ids):
        convert_annotation(image_id)
    pbar.close()
