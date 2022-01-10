import os
import yaml
import tqdm
import cv2
import argparse
from PIL import Image


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('--conf', type=str, default='config/custom.yaml')
    parser.add_argument('--not_rename', action='store_true')
    args = parser.parse_args()
    if not os.path.exists(args.conf):
        raise FileNotFoundError('"%s" not found' % args.conf)
    return args


ARGS = parse_args()
CONFIG_FILE: str = ARGS.conf
IS_RENAME: bool = not ARGS.not_rename


def isImage(file_path: str) -> bool:
    return True if os.path.splitext(file_path)[-1][1:] in ['jpg', 'jpeg', 'png'] else False


with open(CONFIG_FILE, 'r') as f:
    configs = yaml.full_load(f)
    if 'dataset' not in configs:
        raise KeyError("key 'dataset' is not defined in '%s'" % CONFIG_FILE)
    print(chr(128640),'Process dataset: %s' % configs['dataset'])
    img_dir = os.path.join(configs['dataset'], 'src')
    ren_dir = os.path.join(configs['dataset'], 'labeled')
    if 'img_size' not in configs:
        raise KeyError("key 'img_size' is not defined in '%s'" % CONFIG_FILE)
    else:
        if 'height' not in configs['img_size']:
            raise KeyError(
                "key 'img_size:height' is not defined in '%s'" % CONFIG_FILE)


def copy_file(file, class_name, index, is_rename=True):
    os.makedirs(os.path.join(ren_dir, class_name), exist_ok=True)
    file_name = '%s-%05d.jpg' % (class_name, index) if is_rename else file
    img = Image.open(os.path.join(img_dir, class_name, file))
    h = configs['img_size']['height']
    w = int(h*img.width/img.height)
    img = img.resize((w, h))
    img.save(os.path.join(ren_dir, class_name, file_name))


for class_name in os.listdir(img_dir):
    print()
    print(' -- Process Class: %s' % class_name)
    src_class_dir = os.path.join(img_dir, class_name)
    ren_class_dir = os.path.join(ren_dir, class_name)

    pbar = tqdm.tqdm(os.listdir(src_class_dir))
    not_image_list = []
    n_renamed = 0
    for file in pbar:
        if isImage(file):
            copy_file(
                file=file,
                class_name=class_name,
                index=n_renamed,
                is_rename=IS_RENAME
            )
            n_renamed += 1
        else:
            not_image_list.append(os.path.join(src_class_dir, file))
        pbar.set_description('[%s] %s' % (class_name, file))
