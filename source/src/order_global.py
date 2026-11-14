# Make the word-order toggle one shared setting across all courses (localStorage "corner-office-order").
p = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/src/patch_unite.py'
s = open(p).read()
if 'corner-office-order' not in s:
    a = "    'S[key] = key === \"len\" ? +b.dataset.v : b.dataset.v; if (S.order === \"off\" && S.act === \"order\") S.act = \"mix\"; save(); renderHome(); });')"
    assert s.count(a) == 1
    s = s.replace(a, a + '''
sub('S = Object.assign({ prog: {}, mode: "choose", len: 10, ru: "on", act: "mix", order: "on", days: [] }, load());',
    'S = Object.assign({ prog: {}, mode: "choose", len: 10, ru: "on", act: "mix", order: "on", days: [] }, load());\\n    try { const g = localStorage.getItem("corner-office-order"); if (g === "on" || g === "off") S.order = g; } catch (e) {}')
sub('if (S.order === "off" && S.act === "order") S.act = "mix"; save(); renderHome(); });',
    'if (S.order === "off" && S.act === "order") S.act = "mix"; if (key === "order") { try { localStorage.setItem("corner-office-order", S.order); } catch (e) {} } save(); renderHome(); });')''')
    open(p, 'w').write(s)
print('ok')
