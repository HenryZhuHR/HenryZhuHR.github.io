import os
from os.path import join
from pprint import pprint
import yaml
import cv2

CONFIG_FILE='config/config.yaml'

configs=None
with open(CONFIG_FILE,'r') as f:
    configs=yaml.full_load(f)


img_dir = os.path.join(configs['dataset'],'src')
imgresize_dir = os.path.join(configs['dataset'],'labeled')



for dir_content in os.walk(img_dir):    
    # pprint(dir_content[2])
    if not (len(dir_content[2])>0):     # no file in dir
        continue
    
    root=dir_content[0]
    files=dir_content[2]  
    className=os.path.split(root)[-1]

    # filter all images
    imgs=[]     # need to be renamed
    n_renamed_img=0
    print("====== Matched List ======")
    for file in files:  
        name=file.split('.')[0]
        suffixes=file.split('.')[-1]
        if suffixes in ['jpg','jpeg']:      # is image file
            namesplit=name.split('-')
            nameMatch=(namesplit[0]==className)and(namesplit[1].isalnum())
            if nameMatch:   # match, has been renamed
                n_renamed_img+=1
                print(root+'/'+file,'\t',nameMatch)
            else:           # no match, has not been renamed
                imgs.append(file)

    nimg=len(imgs)
    print(" -- Class: ",className, len(imgs),'\t',root)

    print("====== to be Matched List ======")
    for img in imgs:
        dstName=className+"-"+str("%05d.jpg"%n_renamed_img)
        print(img,'\t',dstName)
        print(root)
        os.rename(root+'/'+img,root+'/'+dstName)
        img=cv2.imread(root+'/'+dstName)
        print(img.shape)
        n_renamed_img+=1

for root,dirs,files in os.walk(img_dir):    
    for dir in dirs:
        if not os.path.exists(os.path.join(imgresize_dir,dir)):
            os.makedirs(os.path.join(imgresize_dir,dir))
        else:
            continue
    for file in files:
        className=os.path.split(root)[-1]
        root_new=os.path.join(imgresize_dir,className)

        # cv2 img read
        img=cv2.imread(os.path.join(root,file))

        # cv2 img resize
        w=configs['img_size']['width']
        h=int(w*img.shape[0]/img.shape[1])
        img_resize=cv2.resize(img,(w,h))

        # cv2 img write
        cv2.imwrite(os.path.join(root_new,file),img_resize)
        print(os.path.join(root,file),"-->",os.path.join(root_new,file))
        