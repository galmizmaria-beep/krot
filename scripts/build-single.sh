#!/bin/sh
set -eu
root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
out="$root/index.html"
tmp="$root/.index.generated.html"
{
  printf '%s\n' '<!doctype html>' '<html lang="ru">' '<head>' '<meta charset="UTF-8">' '<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">' '<meta name="theme-color" content="#090d1c">' '<title>Бей крота — редактор игры</title>' '<link rel="preconnect" href="https://fonts.googleapis.com">' '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' '<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">' '<script>window.MathJax={tex:{inlineMath:[["$","$"]],displayMath:[["$$","$$"]]},svg:{fontCache:"global"},startup:{typeset:false}}</script>' '<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>' '<style>'
  sed -n '1,99999p' "$root/src/styles.css"
  sed -n '1,99999p' "$root/src/enhancements.css"
  printf '%s\n' '</style>' '</head>' '<body>' '<div id="app"></div>' '<script type="module">'
  sed 's/^export const /const /' "$root/src/defaults.js"
  sed 's/^export const /const /' "$root/src/i18n.js"
  sed '/^import .*;$/d' "$root/src/app.js"
  printf '%s\n' '</script>' '</body>' '</html>'
} > "$tmp"
mv "$tmp" "$out"
cp "$out" "$root/bei-krota-editor.html"
