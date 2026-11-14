# Offline copy of the united app at ~/corner-office/app/ (standalone page), and refresh the build source.
import os, shutil
D = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/'; H = os.path.expanduser('~/corner-office/')
for old in ('business', 'interview'): shutil.rmtree(H + old, ignore_errors=True)   # separate copies from the previous step
out = H + 'app/'; shutil.rmtree(out, ignore_errors=True); shutil.copytree(D + 'unite/site', out)
page = open(out + 'index.html').read(); e = page.index('</style>') + len('</style>')
open(out + 'index.html', 'w').write('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
    + page[:e] + '\n</head>\n<body>\n' + page[e:] + '\n</body>\n</html>\n')
src = H + 'source/'
shutil.rmtree(src + 'src', ignore_errors=True); shutil.copytree(D + 'src', src + 'src')
for d in ('engine', 'build'):
    shutil.rmtree(src + d, ignore_errors=True); shutil.copytree(D + d, src + d)
r = open(src + 'README.md').read()
if 'build_unite.py' not in r:
    r += '\n- `src/patch_unite.py` + `src/build_unite.py` – the united app (course chooser, both courses) → `unite/site/`; `src/export_unite.py` writes `~/corner-office/app/`.\n'
    open(src + 'README.md', 'w').write(r)
print(sorted(os.listdir(H)), len(os.listdir(out)), 'files in app/')
