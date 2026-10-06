"""Draw the app icons: "do" in white on the tomato accent, with a small rising
three-note figure (do-re-mi). Re-run if the design changes:  python tools/make-icons.py"""
from PIL import Image, ImageDraw, ImageFont
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "icons")
ACCENT, CREAM = (196, 70, 43), (255, 250, 240)
FONTS = ["C:/Windows/Fonts/COOPBL.TTF", "C:/Windows/Fonts/georgiab.ttf"]

def font(px):
    for f in FONTS:
        if os.path.exists(f):
            return ImageFont.truetype(f, px)
    return ImageFont.load_default()

def draw(size):
    S = 4 * size                                   # supersample, then shrink
    im = Image.new("RGB", (S, S), ACCENT)
    d = ImageDraw.Draw(im)
    # full-bleed square so the maskable crop is safe; keep content in the middle 70%
    f = font(int(S * 0.36))
    text = "do"
    l, t, r, b = d.textbbox((0, 0), text, font=f)
    x, y = (S - (r - l)) / 2 - l, S * 0.50 - (b - t) / 2 - t + S * 0.03
    d.text((x, y), text, font=f, fill=CREAM)
    # three rising dots above the word: do, re, mi
    rad = S * 0.035
    for i in range(3):
        cx = S * (0.36 + 0.14 * i)
        cy = S * (0.33 - 0.045 * i)
        d.ellipse([cx - rad, cy - rad, cx + rad, cy + rad], fill=CREAM)
    return im.resize((size, size), Image.LANCZOS)

for px in (180, 192, 512):
    draw(px).save(os.path.join(OUT, f"icon-{px}.png"))
    print("icon", px)
