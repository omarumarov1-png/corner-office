# Make the tech and itstudent assemblers merge their third batches.
D = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/src/'
for f, a, b in [
    ('assemble_tech.js', 'J2 = require("./new-tech2.js");\nconst J = {}; for (const k of Object.keys(J1)) J[k] = [...J1[k], ...(J2[k] || [])];',
     'J2 = require("./new-tech2.js"), J3 = require("./new-tech3.js");\nconst J = {}; for (const k of Object.keys(J1)) J[k] = [...J1[k], ...(J2[k] || []), ...(J3[k] || [])];'),
    ('assemble_itstudent.js', 'J2 = require("./new-itstudent2.js");\nconst J = {}; for (const k of Object.keys(J1)) J[k] = [...J1[k], ...(J2[k] || [])];',
     'J2 = require("./new-itstudent2.js"), J3 = require("./new-itstudent3.js");\nconst J = {}; for (const k of Object.keys(J1)) J[k] = [...J1[k], ...(J2[k] || []), ...(J3[k] || [])];'),
]:
    s = open(D + f).read()
    if 'J3' not in s:
        assert s.count(a) == 1, f; open(D + f, 'w').write(s.replace(a, b))
print('ok')
