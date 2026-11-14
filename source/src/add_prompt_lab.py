# Fix one ambiguous tech item (in both copies) and teach patch_unite.py the Prompt lab (type p).
D = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/'
W = '/Users/omar/corner-office/.claude/worktrees/new-courses/source/src/new-tech2.js'
a = '["g","In the interview, I ___ through my portfolio project.","walked them",["walked to them","walked","walking them"],"На собеседовании я провёл их по своему проекту из портфолио.","walk someone through something."],'
b = '["g","In the interview, I ___ the panel through my portfolio project.","walked",["walking","walk to","went"],"На собеседовании я провёл комиссию по своему проекту из портфолио.","walk someone through something."],'
for p in (W, D + 'src/new-tech2.js'):
    s = open(p).read()
    if a in s: open(p, 'w').write(s.replace(a, b))
p = D + 'src/patch_unite.py'; s = open(p).read()
if 'Prompt lab' not in s:
    old = """s = s.replace('() => start(buildLeader(), "Say it like a leader"); again(); };',
    '() => start(buildType(C.special.kind === "headline" ? "h" : "u"), C.special.title); again(); };')"""
    new = """s = s.replace('() => start(buildLeader(), "Say it like a leader"); again(); };',
    '() => start(buildType({ headline: "h", prompt: "p" }[C.special.kind] || "u"), C.special.title); again(); };')
# Prompt lab (type p) for the tech course
sub('it.t === "h" ? "Headline desk · choose the best headline" :', 'it.t === "h" ? "Headline desk · choose the best headline" : it.t === "p" ? "Prompt lab · choose the best prompt" :')
sub(': it.t === "h" ? `<span class="story"><b>The story</b>${esc(it.s)}</span>Which headline would you run?`',
    ': it.t === "h" ? `<span class="story"><b>The story</b>${esc(it.s)}</span>Which headline would you run?`\\n        : it.t === "p" ? `<span class="story"><b>Your goal</b>${esc(it.s)}</span>Which prompt gets the best result?`')
sub('(cur.t === "q" || cur.t === "u" || cur.t === "h") ? "✕ Not quite — here is the strongest " + (cur.t === "h" ? "headline" : "answer")',
    '"quhp".includes(cur.t) ? "✕ Not quite — here is the strongest " + ({ h: "headline", p: "prompt" }[cur.t] || "answer")')
sub('<span class="full${"quh".includes(cur.t) ? " answer" : ""}">${"quh".includes(cur.t) ? esc(cur.a) : full}</span>',
    '<span class="full${"quhp".includes(cur.t) ? " answer" : ""}">${"quhp".includes(cur.t) ? esc(cur.a) : full}</span>')"""
    assert s.count(old) == 1
    open(p, 'w').write(s.replace(old, new))
print('ok')
