# 从.mat中读取
import os
import cv2
import yaml
import xml
import xml.dom.minidom
import tqdm

CONFIG_FILE='config/config.yaml'

configs=None
with open(CONFIG_FILE,'r') as f:
    configs=yaml.full_load(f)

DATASET_DIR=configs['dataset']
VIDEO_SRC=os.path.join(DATASET_DIR,'video-src')
LABELED_DIR=os.path.join(DATASET_DIR,'labeled')


for root,dirs,files in os.walk(VIDEO_SRC):
    if len(dirs)>0:
        continue
    class_name=os.path.split(root)[-1]
    # if class_name not in ['stop']:continue
        

    print('====== %s'%class_name)
    count_of_img=0
    for file in files:
        if os.path.splitext(file)[-1] not in ['.mp4','.MP4']:
            continue
        file_name=os.path.splitext(file)[0]
        if not os.path.exists(os.path.join(root,file_name+'.label')):# 没有label标签文件的视频不做处理
            continue
        # if os.path.exists(os.path.join(root,file_name+'.exported')):# 没有label标签文件的视频不做处理
        #     continue

        print(file,file_name)
        # -------------------------------------
        #       read label from .label file
        #       把标签从.label文件中读取出来
        # -------------------------------------
        label_file_content=[]
        label_info=[]
        with open(os.path.join(root,file_name+'.label'),'r')as f_label:
            label_file_content=list(f_label)
        for i in range(len(label_file_content)):
            # 解析坐标
            label_file_content[i]=label_file_content[i].rstrip('\n')
            append_content_=label_file_content[i].split(' ')
            append_content=[]
            for i in append_content_:
                if i!='':
                    append_content.append(i)
            time=float(append_content[0])
            x=float(append_content[1])
            y=float(append_content[2])
            w=float(append_content[3])
            h=float(append_content[4])
            ''' 坐标系转换
                ------------------+x
                |  x1,y1 ------
                |  |          |
                |  |          |
                |  |          |
                |  --------x2,y2
                +y
                cv2  matlab
                x1 = x
                y1 = y
                x2 = x+w
                y2 = y+h
            '''
            label_info.append([time,[int(x),int(y),int(x+w),int(y+h)]])

        # -------------------------------------
        #       draw bbox
        # -------------------------------------
        video_file=os.path.join(root,file)
        cap=cv2.VideoCapture(os.path.join(root,file))
        for (time,(x1,y1,x2,y2)) in tqdm.tqdm(label_info):
            save_file_name=os.path.join(LABELED_DIR,class_name)
            if not os.path.exists(save_file_name):
                os.makedirs(save_file_name)
            save_file_name=os.path.join(save_file_name,os.path.splitext(os.path.split(video_file)[-1])[0].split('_')[0])
            save_file_name+='-%05d'%count_of_img
            count_of_img+=1

            # print(save_file_name,class_name,(x1,y1,x2,y2))

            _, frame = cap.read()
            frame_H=frame.shape[0]
            frame_W=frame.shape[1]
            # Normalization
            x1/=frame_W
            x2/=frame_W
            y1/=frame_H
            y2/=frame_H

            frame=cv2.resize(frame,dsize=(int(frame_W/frame_H*800),800))
            cv2.imwrite(save_file_name+'.jpg',frame)

            frame_H=frame.shape[0]
            frame_W=frame.shape[1]
            x1*=frame_W
            x2*=frame_W
            y1*=frame_H
            y2*=frame_H
            frame_rectangle=cv2.rectangle(frame, (int(x1),int(y1)), (int(x2),int(y2)), (0, 255, 0), 2)
            # 字体粗细
            frame_rectangle=cv2.putText(
                frame_rectangle,# 图片
                class_name,# 添加的文字
                (int(x1),int(y1)), # 位置
                cv2.FONT_HERSHEY_SIMPLEX, # 字体
                0.75,# 字体大小
                (0, 0, 255),# 字体颜色
                2# 字体粗细
                )
            cv2.imshow('frame',frame_rectangle)
            cv2.waitKey(1)
            
            
            # -------------------------------------
            #   write to xml
            # -------------------------------------            
            doc = xml.dom.minidom.Document()
            #2. 创建根结点，并用dom对象添加根结点
            if 1==1:
                node_annotation = doc.createElement("annotation")
                node_annotation.setAttribute('verified','no')
                doc.appendChild(node_annotation)

                node_folder=doc.createElement('folder')
                node_annotation.appendChild(node_folder)
                node_folder_value=doc.createTextNode(class_name)
                node_folder.appendChild(node_folder_value)

                node_filename=doc.createElement('filename')
                node_annotation.appendChild(node_filename)
                node_filename_value=doc.createTextNode(os.path.split(save_file_name)[-1]+'.jpg')
                node_filename.appendChild(node_filename_value)

                node_size=doc.createElement('size')
                node_annotation.appendChild(node_size)
                node_width=doc.createElement('width')
                node_size.appendChild(node_width)
                node_width_value=doc.createTextNode(str(frame.shape[1]))
                node_width.appendChild(node_width_value)
                node_height=doc.createElement('height')
                node_size.appendChild(node_height)
                node_height_value=doc.createTextNode(str(frame.shape[0]))
                node_height.appendChild(node_height_value)
                node_depth=doc.createElement('depth')
                node_size.appendChild(node_depth)
                node_depth_value=doc.createTextNode(str(frame.shape[2]))
                node_depth.appendChild(node_depth_value)
                
                node_object=doc.createElement('object')
                node_annotation.appendChild(node_object)
                node=doc.createElement('name')
                node_object.appendChild(node)
                node_value=doc.createTextNode(class_name)
                node.appendChild(node_value)
                node=doc.createElement('pose')
                node_object.appendChild(node)
                node_value=doc.createTextNode('Unspecified')
                node.appendChild(node_value)
                node=doc.createElement('truncated')
                node_object.appendChild(node)
                node_value=doc.createTextNode(str(0))
                node.appendChild(node_value)
                node=doc.createElement('difficult')
                node_object.appendChild(node)
                node_value=doc.createTextNode(str(0))
                node.appendChild(node_value)

                node_bbox=doc.createElement('bndbox')
                node_object.appendChild(node_bbox)
                node=doc.createElement('xmin')
                node_bbox.appendChild(node)
                node_value=doc.createTextNode(str(x1))
                node.appendChild(node_value)
                node=doc.createElement('xmax')
                node_bbox.appendChild(node)
                node_value=doc.createTextNode(str(x2))
                node.appendChild(node_value)
                node=doc.createElement('ymin')
                node_bbox.appendChild(node)
                node_value=doc.createTextNode(str(y1))
                node.appendChild(node_value)
                node=doc.createElement('ymax')
                node_bbox.appendChild(node)
                node_value=doc.createTextNode(str(y2))
                node.appendChild(node_value)

            with open(save_file_name+'.xml', "w", encoding="utf-8") as f:
                # 4.writexml()第一个参数是目标文件对象，第二个参数是根节点的缩进格式，第三个参数是其他子节点的缩进格式，
                # 第四个参数制定了换行格式，第五个参数制定了xml内容的编码。
                doc.writexml(f, indent='', addindent='\t', newl='\n', encoding="utf-8")

            with open(os.path.join(root,file_name+'.exported'),'w') as f:
                pass