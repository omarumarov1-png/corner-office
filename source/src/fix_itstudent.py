p = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/src/new-itstudent.js'
s = open(p).read()
for a, b in [
    ('["m","Where is the stress in \\"developer\\"?","de-VEL-op-er",["DE-vel-op-er","de-vel-OP-er","de-vel-op-ER"],',
     '["m","Where is the stress in \\"developer\\"?","2nd syllable: de-VEL-op-er",["1st syllable: DE-vel-op-er","3rd syllable: de-vel-OP-er","4th syllable: de-vel-op-ER"],'),
    ('"I wake ___ at seven and get ___ at half past seven."', '"I wake ___ at seven and get up at half past seven."'),
]:
    assert s.count(a) == 1, a[:50]; s = s.replace(a, b)
open(p, 'w').write(s); print('ok')
