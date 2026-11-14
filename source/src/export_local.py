# Write standalone offline copies (with doctype/charset) to ~/corner-office/<course>/ and keep the build source.
import os, shutil, glob
D = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/'; H = os.path.expanduser('~/corner-office/')
for f in ['index.html', 'app.js'] + glob.glob(H + 'd[1-6].js'):
    p = f if f.startswith('/') else H + f
    if os.path.exists(p): os.remove(p)   # old single-course files from the first version
for c in ('business', 'interview'):
    out = H + c + '/'; shutil.rmtree(out, ignore_errors=True); shutil.copytree(D + 'build/' + c, out)
    page = open(out + 'index.html').read()
    style_end = page.index('</style>') + len('</style>')
    open(out + 'index.html', 'w').write('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        + page[:style_end] + '\n</head>\n<body>\n' + page[style_end:] + '\n</body>\n</html>\n')
src = H + 'source/'; shutil.rmtree(src, ignore_errors=True); os.makedirs(src)
for p in ['app/index.html', 'app/app.js'] + ['app/d%d.js' % n for n in range(1, 7)]:
    os.makedirs(src + os.path.dirname(p), exist_ok=True); shutil.copy(D + p, src + p)
shutil.copytree(D + 'src', src + 'src')
open(src + 'README.md', 'w').write('''# Corner Office (business) + Hired (interview): build source

- `app/d1–d6.js` – original sentence bank (first single-course version).
- `src/new-interview.js`, `src/new-business.js` – new rows per floor/unit.
- `src/assemble.js` – sorts old + new rows into the two courses, validates, writes `build/<course>/f*.js`.
- `src/patch_engine.py` – turns `app/app.js` into the course-driven engine (`engine/app.js`).
- `src/build_pages.py` – makes each course page from the template `app/index.html`.
- `src/export_local.py` – writes these offline copies.

Paths in the scripts point at the original build folder; copy this folder there (or edit `D = ...`) before rebuilding.
''')
print(sorted(os.listdir(H)))
