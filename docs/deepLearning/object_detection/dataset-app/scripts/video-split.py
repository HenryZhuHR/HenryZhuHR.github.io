import os
import cv2

VIDEO_SRC='G:/dataSet/traffic/video-src/'
IMAGE_SRC='G:/dataSet/traffic/src/'
SAVE_INTERVAL=10


for root,dirs,files in os.walk(VIDEO_SRC):
    if len(files) ==0:
        continue
    # print(root,files)
    classname=os.path.split(root)[-1]
    print(classname)
    if not os.path.exists(os.path.join(IMAGE_SRC,classname)):
        os.makedirs(os.path.join(IMAGE_SRC,classname))

    frame_index = 0
    frame_count = 0
    for file in files:
        path=os.path.join(root,file)
        print(path)
        if os.path.splitext(file)[-1] not in [".MP4", ".MOV"]:
            continue

        cap=cv2.VideoCapture(path)
        
        if cap.isOpened():
            success = True
        else:
            success = False
            print("VideoCapture open failed!")

        while(success):
            success, frame = cap.read()

            if frame_index % SAVE_INTERVAL == 0:
                save_path=os.path.join(IMAGE_SRC,classname,"%s-%04d.jpg"%(classname,frame_count))
                cv2.imwrite(save_path,frame)
                frame_count+=1

            frame_index += 1