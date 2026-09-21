"""Create non-generative gallery derivatives; never change Drive originals.

Requires Pillow. Run from the repository root. Sources are cached outside the repo.
"""
import json
import tempfile
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from PIL import Image, ImageOps, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
CACHE = Path(tempfile.gettempdir()) / 'success-gym-gallery-originals'
CACHE.mkdir(exist_ok=True)
OUT = ROOT / 'public/gallery'
OUT.mkdir(exist_ok=True)
photos = json.loads((ROOT / 'public/gallery-albums.json').read_text())[0]['photos']
if any(photo.get('rawId') for photo in photos):
    raise SystemExit('This gallery uses RAW sources. Use develop-gallery-raw.py instead.')

def prepare(photo):
    source = CACHE / photo['name']
    if not source.exists():
        urllib.request.urlretrieve('https://lh3.googleusercontent.com/d/' + photo['id'] + '=w2400', source)
    with Image.open(source) as original:
        im = ImageOps.exif_transpose(original).convert('RGB')
    # Open shadows without clipping lamps or changing geometry.
    gamma = 0.66 if photo['name'] == 'DSC02414.JPG' else 0.73
    curve = [round(255 * (v / 255) ** gamma) for v in range(256)]
    im = im.point(curve * 3)
    im = ImageEnhance.Color(im).enhance(0.97)
    im.thumbnail((2000, 2000), Image.Resampling.LANCZOS)
    im = im.filter(ImageFilter.UnsharpMask(radius=0.7, percent=65, threshold=3))
    im.save(ROOT / 'public' / photo['src'].lstrip('/'), 'WEBP', quality=88, method=6)
    im.thumbnail((800, 800), Image.Resampling.LANCZOS)
    im.save(ROOT / 'public' / photo['thumbnail'].lstrip('/'), 'WEBP', quality=83, method=6)
    print(photo['name'], flush=True)

if __name__ == '__main__':
    with ThreadPoolExecutor(max_workers=5) as pool:
        list(pool.map(prepare, photos))
