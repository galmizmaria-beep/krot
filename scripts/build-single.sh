#!/bin/sh
set -eu
root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
out="$root/index.html"
tmp="$root/.index.generated.html"
{
  printf '%s\n' '<!doctype html>' '<html lang="ru">' '<head>' '<meta charset="UTF-8">' '<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">' '<meta name="theme-color" content="#090d1c">' '<title>Бей крота — редактор игры</title>' '<link rel="preconnect" href="https://fonts.googleapis.com">' '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' '<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Montserrat:wght@400;600;800&family=Nunito:wght@400;700;900&family=Oswald:wght@400;600&family=Playfair+Display:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet">' '<script>window.MathJax={tex:{inlineMath:[["$","$"]],displayMath:[["$$","$$"]]},svg:{fontCache:"global"},startup:{typeset:false}}</script>' '<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>' '<style>'
  sed -n '1,99999p' "$root/src/styles.css"
  sed -n '1,99999p' "$root/src/enhancements.css"
  printf '%s\n' '</style>' '</head>' '<body>' '<div id="app"></div>' '<script type="module">'
  printf '%s\n' 'window.GAME_ART={backgrounds:{adventure:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/bg-adventure-hq.jpg",tropics:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/bg-tropics-hq.jpg",desert:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/bg-desert-hq.jpg",space:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/bg-space-hq.jpg",water:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/bg-water-hq.jpg",fantasy:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/bg-fantasy-hq.jpg"},holes:{stones:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/hole-stones.svg",neon:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/hole-neon.svg",grass:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/hole-grass.svg",portal:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/hole-portal.svg",snow:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/hole-snow.svg",lava:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/hole-lava.svg"}};window.GAME_ART.teenCharacters="https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/teen-characters-v1.png";'
  printf '%s\n' 'window.GAME_ART.tools="https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/tools-atlas.jpg";window.GAME_ART.premiumMole="https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/mole-premium-v3.png";window.GAME_ART.premiumHammer="https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/hammer-premium-v3.png";window.GAME_ART.hammers=[{name:"Энергомолот",url:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/hammer-premium-v3.png"},{name:"Дерево и латунь",url:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/hammer-wood-v4.png"},{name:"Ледяной кристалл",url:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/hammer-ice-v4.png"},{name:"Вулканический",url:"https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/hammer-lava-v4.png"}];window.GAME_ART.backgrounds.adventure="https://raw.githubusercontent.com/galmizmaria-beep/krot/main/assets/bg-adventure-single-v3.jpg";'
  sed 's/^export const /const /' "$root/src/defaults.js"
  sed 's/^export const /const /' "$root/src/i18n.js"
  sed '/^import .*;$/d' "$root/src/app.js"
  printf '%s\n' '</script>' '</body>' '</html>'
} > "$tmp"
mv "$tmp" "$out"
cp "$out" "$root/bei-krota-editor.html"
