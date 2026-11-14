# Generate build/<course>/index.html + course.js + app.js from the shared template (app/index.html) and engine.
import json, shutil, os
D = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/'
T = open(D + 'app/index.html').read()

COURSES = {
 'business': dict(
   title='Corner Office', mark='C', brandsub='Business English for leaders',
   desc='Business English practice in 8 units, from first meetings to boardroom dinners: missing words, multiple choice, word order, translation and leader-style rewrites.',
   eyebrow='Business English · 8 units',
   h1='Speak like the leader <em>you already are</em>.',
   lead='Meetings, presentations, negotiations and dinners, one sentence at a time. Eight units follow a real working day, from the first handshake to the final toast.',
   choose='Choose your unit', mixtitle='Mixed practice', mixsub='10 sentences from every unit you\'ve started',
   special=('Say it like a leader', 'Turn too-direct sentences into polished ones'),
   special_icon='<path d="M4 18h16M6 18l2-9 4 4 4-7 2 12"/>',
   palette=None,
   course=dict(key='corner-office-business-v1', unit='Unit', special=dict(kind='leader'), floors=[
     dict(n=1, name='First Meetings & Small Talk', short='First meetings', cefr='B1', desc='Introductions, small talk, networking, business cards'),
     dict(n=2, name='Presenting Your Company', short='Presenting', cefr='B1', desc='Company profile, market, numbers, signposting'),
     dict(n=3, name='Leading a Meeting', short='Meetings', cefr='B1+', desc='Opening, agenda, interrupting, clarifying, closing'),
     dict(n=4, name='Negotiating Price & Terms', short='Negotiating', cefr='B2', desc='Offers, conditions, concessions, closing the deal'),
     dict(n=5, name='Disagreeing Politely', short='Pushing back', cefr='B2', desc='Diplomatic language, doubt, saying no'),
     dict(n=6, name='Reporting to Head Office', short='Reporting', cefr='B2+', desc='Results, trends, forecasts, idioms for the board'),
     dict(n=7, name='Problems & Complaints', short='Problems', cefr='B2', desc='Delays, damaged goods, apologies, solutions'),
     dict(n=8, name='Hospitality & Dinners', short='Dinners', cefr='B2', desc='Inviting, ordering, toasts, thanking your host'),
   ])),
 'interview': dict(
   title='Hired', mark='H', brandsub='Job interview English',
   desc='Job interview English in six stages, from your first hello to accepting the offer: missing words, multiple choice, word order, translation and a spoken mock interview.',
   eyebrow='Job interview English · 6 stages',
   h1='From <em>hello</em> to <em>hired</em>.',
   lead='Practise the English of a real job interview, one sentence at a time: introduce yourself, tell your story, answer the hard questions and accept the offer.',
   choose='Choose your stage', mixtitle='Mixed practice', mixsub='10 sentences from every stage you\'ve started',
   special=('Mock interview', '8 real questions, read aloud, in interview order'),
   special_icon='<path d="M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3"/>',
   palette={  # navy + copper instead of emerald + brass
     '#0E1714':'#0D1221', '#163029':'#1D2747', '#15201C':'#141B2E', '#1B2924':'#1A2340', 'rgba(201,165,91,.24)':'rgba(214,163,115,.26)',
     '#A3AE9F':'#A7ADBF', '#C9A55B':'#D6A373', '#E9CF8C':'#F2CDA4', '#1A140A':'#1E1208', '#8a6a2c':'#8f5a33',
     '#ECEFE8':'#ECEEF4', '#DCE6DD':'#DDE2EE', '#F8F8F3':'#FAFAFC', '#F0F2EB':'#F1F2F7', 'rgba(140,108,40,.32)':'rgba(150,95,50,.32)',
     '#14211D':'#141A2C', '#5A6760':'#5A6070', '#9C7A32':'#A0663A', '#7D5F1F':'#80491F', 'rgba(201,165,91,.13)':'rgba(214,163,115,.14)'},
   course=dict(key='hired-interview-v1', unit='Stage', special=dict(kind='mock'), floors=[
     dict(n=1, name='Introductions', short='Introductions', cefr='A1–A2', desc='Greetings, about you, your job in simple words'),
     dict(n=2, name='Your Experience', short='Experience', cefr='A2', desc='Work history, duties, shifts, documents'),
     dict(n=3, name='The Key Questions', short='Key questions', cefr='B1', desc='The 12 classic questions and strong answers'),
     dict(n=4, name='Behavioural & STAR', short='STAR stories', cefr='B1+', desc='"Tell me about a time…" answered with STAR'),
     dict(n=5, name='Tough Questions', short='Tough questions', cefr='B2', desc='Weakness, gaps, failure, salary, conflict'),
     dict(n=6, name='Final Round & Offer', short='Final round', cefr='B2–C1', desc='Leadership interviews, negotiating and accepting'),
   ])),
}

EXTRA_CSS = '''
/* interview question, leader rewrite, special tile */
.q-line{display:block}
.say-q{margin-top:12px; display:inline-flex; gap:7px; align-items:center; font-family:var(--body); font-size:13.5px; font-weight:600; border:1px solid var(--line); background:var(--bg); color:var(--brass-hi); border-radius:999px; padding:6px 12px}
.say-q:hover{border-color:var(--brass)}
.direct{display:flex; flex-direction:column; gap:4px; margin-bottom:10px; font-family:var(--body); font-size:16px; font-weight:500; color:var(--bad)}
.direct b{font-family:var(--mono); font-size:11px; letter-spacing:.16em; text-transform:uppercase; font-weight:500}
.direct s{font-size:19px; text-decoration-thickness:1px; color:var(--ink); opacity:.75}
.row3{display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:10px}
@media (max-width:720px){ .row3{grid-template-columns:1fr} }
.tile.special{border-color:var(--brass); background:linear-gradient(135deg, rgba(201,165,91,.12), var(--panel) 70%)}

/* results */'''

for name, c in COURSES.items():
    h = T
    def sub(a, b):
        global h
        assert h.count(a) >= 1, (name, a[:50]); h = h.replace(a, b)
    if c['palette']:
        head, rest = h.split('*{box-sizing:border-box}', 1)
        for k, v in c['palette'].items(): head = head.replace(k, v)
        rest = rest.replace('#8a6a2c', c['palette']['#8a6a2c']).replace('rgba(201,165,91,.13)', c['palette']['rgba(201,165,91,.13)']).replace('rgba(201,165,91,.12)', 'rgba(214,163,115,.12)')
        h = head + '*{box-sizing:border-box}' + rest
    sub('<title>Corner Office</title>', '<title>%s</title>' % c['title'])
    sub('content="Interview and business English practice: missing words and multiple choice, from the lobby to the boardroom."', 'content="%s"' % c['desc'])
    sub('/* results */', EXTRA_CSS.strip('\n').replace('/* results */', '/* results */', 1) if False else EXTRA_CSS.lstrip('\n'))
    if c['palette']: h = h.replace('rgba(201,165,91,.12), var(--panel) 70%', 'rgba(214,163,115,.12), var(--panel) 70%')
    sub('<div class="mark">C</div><div><b>Corner Office</b><small>Interview &amp; business English</small></div>',
        '<div class="mark">%s</div><div><b>%s</b><small>%s</small></div>' % (c['mark'], c['title'], c['brandsub']))
    sub('<div class="eyebrow">Missing words · choice · word order · translate</div>', '<div class="eyebrow">%s</div>' % c['eyebrow'])
    sub('<h1>Take the lift from the <em>lobby</em> to the <em>boardroom</em>.</h1>', '<h1>%s</h1>' % c['h1'])
    sub('<p>Practise real interview and meeting English, one sentence at a time. Six floors, from your first “Nice to meet you” to negotiating your salary.</p>', '<p>%s</p>' % c['lead'])
    sub('<h2>Choose your floor</h2>', '<h2>%s</h2>' % c['choose'])
    sub('<span class="eyebrow" id="floor-hint">Start on floor 1</span>', '<span class="eyebrow" id="floor-hint">Start with %s 1</span>' % c['course']['unit'].lower())
    sub('aria-label="Floor indicator"', 'aria-label="%s indicator"' % c['course']['unit'])
    sub('<div class="row2">', '<div class="row3">')
    sub('<b>Mixed interview</b><span>10 sentences from every floor you\'ve started</span>', '<b>%s</b><span>%s</span>' % (c['mixtitle'], c['mixsub']))
    sub('<button class="tile" id="btn-mix">',
        '<button class="tile special" id="btn-special"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">%s</svg></span><span><b>%s</b><span>%s</span></span></button>\n      <button class="tile" id="btn-mix">' % (c['special_icon'], c['special'][0], c['special'][1]))
    scripts = '<script src="course.js"></script>\n' + ''.join('<script src="f%d.js"></script>\n' % f['n'] for f in c['course']['floors'])
    a = h.index('<script src="d1.js"></script>'); b = h.index('<script src="app.js"></script>')
    h = h[:a] + scripts + h[b:]
    out = D + 'build/' + name + '/'
    os.makedirs(out, exist_ok=True)
    open(out + 'index.html', 'w').write(h)
    open(out + 'course.js', 'w').write('// Course setup read by app.js.\nwindow.COURSE = ' + json.dumps(c['course'], ensure_ascii=False, indent=1) + ';\n')
    shutil.copy(D + 'engine/app.js', out + 'app.js')
    print(name, 'ok', len(h))
