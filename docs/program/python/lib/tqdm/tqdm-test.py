import time
from tqdm import tqdm
from tqdm.std import Bar
for i in tqdm(range(10)):
    time.sleep(0.1)     # your code here
    if i>8-1:
        break

import time
from tqdm import trange
for i in trange(10):
    time.sleep(0.1)     # your code here
    if i>8-1:
        break

# import time
# from tqdm.gui import tqdm
# pbar=tqdm(range(337))
# for i in pbar:
#     time.sleep(0.1)     # your code here
#     pbar.set_description("iter %d"%i)

import time
from random import random,randint
from tqdm import tqdm
pbar=tqdm(range(10))
for i in pbar:
    time.sleep(0.1)     # your code here
    pbar.set_description("iter %d"%i)
    pbar.set_postfix(int=random(),gen=randint(1,10),str="h",lst=[1,2])
    if i>6-1:
        break


import time
from tqdm import tqdm
pbar=tqdm(range(10))
for i in pbar:
    time.sleep(0.1)     # your code here
    tqdm.write("%d"%i)
    if i>3-1:
        break


import time
from tqdm import tqdm
pbar=tqdm(total=100)
for i in range(10):
    time.sleep(0.1)     # your code here
    pbar.update(10)
    if i>6:
        break
pbar.close()