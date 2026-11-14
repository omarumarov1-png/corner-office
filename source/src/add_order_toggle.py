# Word-order on/off toggle for Corner Office: engine patch (via patch_unite.py) + settings control (via build_unite.py).
D = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/src/'
p = D + 'patch_unite.py'; s = open(p).read()
if 'word-order toggle' not in s:
    anchor = "s = s.replace('buildType({ headline: \"h\", prompt: \"p\" }[C.special.kind] || \"u\")', 'buildType({ headline: \"h\", prompt: \"p\", fix: \"e\" }[C.special.kind] || \"u\")')"
    assert s.count(anchor) == 1
    s = s.replace(anchor, anchor + '''
# word-order toggle: S.order "on"/"off"; when off, sessions never use the word-order activity
sub('const k = ["gap", "ru"]; if (words(it).length >= 4 && words(it).length <= 14) k.push("order"); return k;',
    'const k = ["gap", "ru"]; if (S.order !== "off" && words(it).length >= 4 && words(it).length <= 14) k.push("order"); return k;')
sub('S = Object.assign({ prog: {}, mode: "choose", len: 10, ru: "on", act: "mix", days: [] }, load());',
    'S = Object.assign({ prog: {}, mode: "choose", len: 10, ru: "on", act: "mix", order: "on", days: [] }, load());')
s = s.replace('[["#set-act", "act"], ["#set-mode", "mode"], ["#set-len", "len"], ["#set-ru", "ru"]]',
              '[["#set-act", "act"], ["#set-order", "order"], ["#set-mode", "mode"], ["#set-len", "len"], ["#set-ru", "ru"]]')
assert s.count('["#set-order", "order"]') == 2
sub('S[key] = key === "len" ? +b.dataset.v : b.dataset.v; save(); renderHome(); });',
    'S[key] = key === "len" ? +b.dataset.v : b.dataset.v; if (S.order === "off" && S.act === "order") S.act = "mix"; save(); renderHome(); });')
sub('      document.querySelectorAll(id + " button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.v) === String(S[key])));',
    '      document.querySelectorAll(id + " button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.v) === String(S[key])));\\n    const ob = document.querySelector(\\'#set-act button[data-v="order"]\\'); if (ob) ob.hidden = S.order === "off";')''')
    open(p, 'w').write(s)
p = D + 'build_unite.py'; s = open(p).read()
if 'id="set-order"' not in s:
    a = "sub('<div class=\"eyebrow\">Five courses · one place</div>'"
    assert s.count(a) == 1
    s = s.replace(a, '''sub('<div class="set"><span class="eyebrow">Missing word</span>', '<div class="set"><span class="eyebrow">Word order</span><div class="seg" id="set-order"><button data-v="on">On</button><button data-v="off">Off</button></div></div>\\n      <div class="set"><span class="eyebrow">Missing word</span>')
''' + a)
    open(p, 'w').write(s)
print('ok')
