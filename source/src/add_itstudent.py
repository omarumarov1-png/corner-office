# Teach the engine the "Fix the mistake" type (e) and add the IT Student English course to the united build.
D = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/src/'
# --- engine patch (patch_unite.py) ---
p = D + 'patch_unite.py'; s = open(p).read()
if 'Fix the mistake' not in s:
    old = "assert 'buildType({ headline: \"h\", prompt: \"p\" }' in s"
    new = old + '''
# Fix the mistake (type e) for the IT Student course
sub('it.t === "p" ? "Prompt lab · choose the best prompt" :', 'it.t === "p" ? "Prompt lab · choose the best prompt" : it.t === "e" ? "Fix the mistake · choose the correct sentence" :')
sub(': it.t === "p" ? `<span class="story"><b>Your goal</b>${esc(it.s)}</span>Which prompt gets the best result?`',
    ': it.t === "p" ? `<span class="story"><b>Your goal</b>${esc(it.s)}</span>Which prompt gets the best result?`\\n        : it.t === "e" ? `<span class="direct"><b>Find the mistake</b><s>${esc(it.s)}</s></span>Which sentence is correct?`')
sub('"quhp".includes(cur.t) ? "✕ Not quite — here is the strongest " + ({ h: "headline", p: "prompt" }[cur.t] || "answer")',
    '"quhpe".includes(cur.t) ? "✕ Not quite — here is the " + ({ h: "strongest headline", p: "strongest prompt", e: "correct sentence" }[cur.t] || "strongest answer")')
sub('<span class="full${"quhp".includes(cur.t) ? " answer" : ""}">${"quhp".includes(cur.t) ? esc(cur.a) : full}</span>',
    '<span class="full${"quhpe".includes(cur.t) ? " answer" : ""}">${"quhpe".includes(cur.t) ? esc(cur.a) : full}</span>')
s = s.replace('buildType({ headline: "h", prompt: "p" }[C.special.kind] || "u")', 'buildType({ headline: "h", prompt: "p", fix: "e" }[C.special.kind] || "u")')'''
    assert s.count(old) == 1
    s = s.replace(old, new); open(p, 'w').write(s)
# --- build patch (build_unite.py) ---
p = D + 'build_unite.py'; s = open(p).read()
def sub(a, b):
    global s
    assert s.count(a) == 1, (a[:70], s.count(a)); s = s.replace(a, b)
if "corner-office-itstudent-v1" not in s:
    sub("open(OUT + 'courses.js', 'w').write('// The four courses.", '''itstudent = dict(key='corner-office-itstudent-v1', unit='Stage', name='IT Student English', mark='&lt;/&gt;', level='A2 → B1 · 6 stages', eyebrow='IT student English · based on Breaking Through, Part 1',
  h1='Hello, <em>World!</em>',
  lead='The IT side of the Breaking Through book: university and digital jobs, your digital day, tech news, skills and trends, and your first internship interview.',
  special=dict(kind='fix', title='Fix the mistake', sub='Spot the typical error and pick the correct sentence',
    icon='<path d="M5 12l4 4 10-10"/><path d="M5 5h6M5 19h14"/>'),
  floors=[
    dict(n=1, name='Hello, World!', short='Hello, World', cefr='A2', desc='University life, digital jobs, to be, questions'),
    dict(n=2, name='My Digital Life', short='Digital life', cefr='A2', desc='Devices, online actions, routines, how often'),
    dict(n=3, name='Right Now', short='Right now', cefr='A2+', desc='Present continuous vs simple, chats, tech problems'),
    dict(n=4, name='Tech in the News', short='Tech news', cefr='A2–B1', desc='Past simple, tech headlines, opinions'),
    dict(n=5, name='Skills & Trends', short='Skills & trends', cefr='B1', desc='Personality, good at + -ing, AI, data, privacy'),
    dict(n=6, name='The Internship Interview', short='Interview', cefr='B1', desc='can/could, polite questions, will vs going to'),
  ])
open(OUT + 'courses.js', 'w').write('// The five courses.''')
    sub("'journalism': journalism, 'tech': tech}, ensure_ascii=False, indent=1) + ';\\nwindow.BANKS = { interview: [], business: [], journalism: [], tech: [] };\\n')",
        "'journalism': journalism, 'tech': tech, 'itstudent': itstudent}, ensure_ascii=False, indent=1) + ';\\nwindow.BANKS = { interview: [], business: [], journalism: [], tech: [], itstudent: [] };\\n')")
    sub("('journalism', 'j'), ('tech', 't')):", "('journalism', 'j'), ('tech', 't'), ('itstudent', 's')):")
    sub("''.join('<script src=\"t%d.js\"></script>\\n' % n for n in range(1, 9)) + h[b:]",
        "''.join('<script src=\"t%d.js\"></script>\\n' % n for n in range(1, 9)) + ''.join('<script src=\"s%d.js\"></script>\\n' % n for n in range(1, 7)) + h[b:]")
    sub("INT_L = dict(", "ITS_D = dict(bg='#12101B', glow='#2A2245', panel='#191626', panel2='#201C31', line='rgba(167,139,250,.26)', muted='#ADA6C2', brass='#A78BFA', hi='#D6C8FF', bink='#140D2A', deep='#5B3FB8', tint='rgba(167,139,250,.14)')\nITS_L = dict(bg='#F0EEF5', glow='#E2DCF2', panel='#FCFBFE', panel2='#F4F2FA', line='rgba(109,79,194,.30)', ink='#191427', muted='#615A75', brass='#6D4FC2', hi='#533A9E', bink='#F7F3FF')\nINT_L = dict(")
    sub("('tech', TEC_D, TEC_L)):", "('tech', TEC_D, TEC_L), ('itstudent', ITS_D, ITS_L)):")
    sub('<div class="eyebrow">Four courses · one place</div>', '<div class="eyebrow">Five courses · one place</div>')
    sub("@media (max-width:720px){ .course-cards{grid-template-columns:1fr} }", ".course:last-child:nth-child(odd){grid-column:1 / -1}\n@media (max-width:720px){ .course-cards{grid-template-columns:1fr} }")
    sub("'<meta name=\"description\" content=\"Four English courses in one app: job interview, business, journalism (with sports journalism) and tech & vibe coding,",
        "'<meta name=\"description\" content=\"Five English courses in one app: job interview, business, journalism (with sports journalism), tech & vibe coding and IT student English,")
open(p, 'w').write(s); print('ok')
