p = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/src/build_unite.py'
s = open(p).read()
if 'id="set-order"' not in s:
    a = "open(OUT + 'index.html', 'w').write(h)"
    assert s.count(a) == 1
    s = s.replace(a, '''sub('<div class="set"><span class="eyebrow">Missing word</span>', '<div class="set"><span class="eyebrow">Word order</span><div class="seg" id="set-order"><button data-v="on">On</button><button data-v="off">Off</button></div></div>\\n      <div class="set"><span class="eyebrow">Missing word</span>')
''' + a)
    open(p, 'w').write(s)
print('ok')
