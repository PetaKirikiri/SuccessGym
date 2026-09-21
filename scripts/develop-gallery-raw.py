"""Develop real Sony RAW photographs with no generative reconstruction.

Requires rawpy, numpy, opencv-python-headless, Pillow.
Usage: python scripts/develop-gallery-raw.py /path/to/downloaded/ARW/files
Drive source IDs are retained in the gallery manifest. Originals are read-only.
"""
import json
import sys
from pathlib import Path
import rawpy
import cv2
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
source = Path(sys.argv[1])
photos = json.loads((ROOT/'public/gallery-albums.json').read_text())[0]['photos']
if len(sys.argv) > 2:
    photos = [p for p in photos if p['name'] in sys.argv[2:]]

for photo in photos:
    number = int(photo['name'][3:8])
    # Match white balance within each lighting zone, not across different lamps.
    wb = [2776,1024,1515,1024] if number >= 2462 else [2330,1024,1810,1024]
    with rawpy.imread(str(source/photo['name'].replace('.JPG','.ARW'))) as raw:
        rgb = raw.postprocess(user_wb=wb, no_auto_bright=False, auto_bright_thr=.01,
                              bright=1.25, output_bps=16, noise_thr=300,
                              highlight_mode=rawpy.HighlightMode.Blend)
    # Retain the camera's 16:9 composition without stretching the RAW sensor frame.
    h,w = rgb.shape[:2]
    crop_h = round(w*9/16)
    rgb = rgb[(h-crop_h)//2:(h-crop_h)//2+crop_h]
    rgb = cv2.resize(rgb,(2400,1350),interpolation=cv2.INTER_AREA).astype(np.float32)/65535
    lum = rgb[:,:,0]*.2126+rgb[:,:,1]*.7152+rgb[:,:,2]*.0722
    # Match midtones; preserve highlight roll-off and genuine black equipment.
    p60 = float(np.percentile(lum,60))
    gamma = float(np.clip(np.log(.43)/np.log(max(p60,.02)),.88,1.12))
    rgb = np.clip(rgb,0,1)**gamma
    out = np.uint8(rgb*255)
    out = cv2.fastNlMeansDenoisingColored(out,None,4,7,7,21)
    out = cv2.resize(out,(2000,1125),interpolation=cv2.INTER_AREA)
    blurred = cv2.GaussianBlur(out,(0,0),.7)
    out = cv2.addWeighted(out,1.4,blurred,-.4,0)
    im = Image.fromarray(out)
    im.save(ROOT/'public'/photo['src'].lstrip('/'),'WEBP',quality=90,method=6)
    im.thumbnail((800,800),Image.Resampling.LANCZOS)
    im.save(ROOT/'public'/photo['thumbnail'].lstrip('/'),'WEBP',quality=85,method=6)
    print(photo['name'], 'tone curve',round(gamma,3),flush=True)
