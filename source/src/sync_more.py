# Copy the united app (unite/site) into the git repo ~/corner-office as a standalone page, and refresh source/.
import os, shutil, glob
D = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/'; R = '/Users/omar/corner-office/.claude/worktrees/more-courses/'
for f in glob.glob(D + 'unite/site/*.js'): shutil.copy(f, R)
page = open(D + 'unite/site/index.html').read(); e = page.index('</style>') + len('</style>')
open(R + 'index.html', 'w').write('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
    + page[:e] + '\n</head>\n<body>\n' + page[e:] + '\n</body>\n</html>\n')
for d in ('src', 'engine', 'build', 'unite'):
    shutil.rmtree(R + 'source/' + d, ignore_errors=True)
    shutil.copytree(D + d, R + 'source/' + d, ignore=shutil.ignore_patterns('site'))
for p in ['app/index.html', 'app/app.js'] + ['app/d%d.js' % n for n in range(1, 7)]: shutil.copy(D + p, R + 'source/' + p)
print('synced', len(glob.glob(R + '*.js')), 'js files')
