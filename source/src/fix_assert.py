p = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/src/patch_unite.py'
s = open(p).read()
s = s.replace("assert 'buildType(C.special.kind' in s", "assert 'buildType({ headline: \"h\", prompt: \"p\" }' in s")
open(p, 'w').write(s); print('ok')
