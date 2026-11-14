# Build the united app (unite/site/): one page, a course chooser, both courses' data.
import json, os, shutil, re
D = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/'; OUT = D + 'unite/site/'
shutil.rmtree(OUT, ignore_errors=True); os.makedirs(OUT)

def course_json(name): return json.loads(open(D + 'build/%s/course.js' % name).read().split('=', 1)[1].rstrip().rstrip(';'))
interview, business = course_json('interview'), course_json('business')
interview.update(name='Job Interview', mark='I', level='A1 → C1 · 6 stages', eyebrow='Job interview English · 6 stages',
  h1='From <em>hello</em> to <em>hired</em>.',
  lead='Introduce yourself, tell your story with STAR, handle the hard questions and accept the offer.',
  special=dict(kind='mock', title='Mock interview', sub='8 real questions, read aloud, in interview order',
    icon='<path d="M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3"/>'))
business.update(name='Business English', mark='B', level='B1 → C1 · 8 units', eyebrow='Business English · 8 units',
  h1='Speak like the leader <em>you already are</em>.',
  lead='Meetings, presentations, negotiations and dinners. Eight units follow a real working day, from the first handshake to the final toast.',
  special=dict(kind='leader', title='Say it like a leader', sub='Turn too-direct sentences into polished ones',
    icon='<path d="M4 18h16M6 18l2-9 4 4 4-7 2 12"/>'))
journalism = dict(key='corner-office-journalism-v1', unit='Stage', name='Journalism', mark='J', level='A2 → C1 · 8 stages', eyebrow='Journalism & sports media · 8 stages',
  h1='Get the story. <em>Tell it right.</em>',
  lead='News English from your first headline to the post-match press conference, with a special focus on sports journalism.',
  special=dict(kind='headline', title='Headline desk', sub='Read the story, pick the headline an editor would run',
    icon='<path d="M4 5h13v14H6a2 2 0 0 1-2-2zM17 9h3v8a2 2 0 0 1-2 2M7 9h7M7 13h7M7 16h4"/>'),
  floors=[
    dict(n=1, name='Newsroom Basics', short='Newsroom', cefr='A2', desc='Media words, news sections, past simple for news'),
    dict(n=2, name='Headlines & 5W1H', short='Headlines', cefr='A2–B1', desc='Headline language, the lead, the inverted pyramid'),
    dict(n=3, name='Interviewing', short='Interviews', cefr='B1', desc='Open and follow-up questions, recording, quotes'),
    dict(n=4, name='Match Day', short='Match day', cefr='B1', desc='Football, boxing, tennis, athletics, Olympics, esports'),
    dict(n=5, name='Commentary & Match Reports', short='Commentary', cefr='B1+', desc='Live commentary, strong verbs, writing the report'),
    dict(n=6, name='Press Conferences & Transfers', short='Press room', cefr='B2', desc='Reported speech, rumours, contracts, quotes'),
    dict(n=7, name='Ethics & Fact-checking', short='Ethics', cefr='B2+', desc='Sources, bias, corrections, doping and match-fixing stories'),
    dict(n=8, name='Features, Opinion & Broadcast', short='Features', cefr='C1', desc='Human stories, columns, radio and podcast language'),
  ])
tech = dict(key='corner-office-tech-v1', unit='Stage', name='Tech & Vibe Coding', mark='T', level='A2 → C1 · 8 stages', eyebrow='IT, tech & vibe coding · 8 stages',
  h1='Talk tech. <em>Build with AI.</em>',
  lead='Everyday tech English, code and teamwork words, and how to prompt, debug and ship software with an AI assistant.',
  special=dict(kind='prompt', title='Prompt lab', sub='Pick the prompt that gets the best result from an AI',
    icon='<path d="M4 6l5 6-5 6M12 18h8"/>'),
  floors=[
    dict(n=1, name='Digital Basics', short='Digital basics', cefr='A2', desc='Devices, apps, accounts, everyday tech verbs'),
    dict(n=2, name='Tech Problems & Support', short='Tech support', cefr='A2–B1', desc='Freezes, crashes, error messages, asking for help'),
    dict(n=3, name='Code & Software Words', short='Code words', cefr='B1', desc='Bugs, functions, frontend, backend, APIs'),
    dict(n=4, name='Working in a Tech Team', short='Tech team', cefr='B1+', desc='Git, pull requests, stand-ups, code review'),
    dict(n=5, name='Vibe Coding: Prompting AI', short='Vibe coding', cefr='B1+', desc='Clear prompts, context, constraints, iterating'),
    dict(n=6, name='Debugging with AI', short='Debugging', cefr='B2', desc='Bug reports, errors, testing, narrowing down'),
    dict(n=7, name='Shipping & Product', short='Shipping', cefr='B2', desc='Launches, metrics, privacy, accessibility'),
    dict(n=8, name='Tech Talk & Careers', short='Tech careers', cefr='C1', desc='Explaining tech, demos, interviews, trade-offs'),
  ])
itstudent = dict(key='corner-office-itstudent-v1', unit='Stage', name='IT Student English', mark='&lt;/&gt;', level='A2 → B1 · 6 stages', eyebrow='IT student English · based on Breaking Through, Part 1',
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
open(OUT + 'courses.js', 'w').write('// The five courses. Order here = order on the chooser.\nwindow.COURSES = ' +
  json.dumps({'interview': interview, 'business': business, 'journalism': journalism, 'tech': tech, 'itstudent': itstudent}, ensure_ascii=False, indent=1) + ';\nwindow.BANKS = { interview: [], business: [], journalism: [], tech: [], itstudent: [] };\n')

for name, pre in (('interview', 'i'), ('business', 'b'), ('journalism', 'j'), ('tech', 't'), ('itstudent', 's')):
    for f in sorted(os.listdir(D + 'build/' + name)):
        m = re.match(r'f(\d+)\.js$', f)
        if not m: continue
        src = open(D + 'build/%s/%s' % (name, f)).read()
        src = src.replace('window.BANK = window.BANK || [];\nwindow.BANK.push(', 'window.BANKS.%s.push(' % name)
        assert 'window.BANKS.' in src
        open(OUT + pre + m.group(1) + '.js', 'w').write(src)
shutil.copy(D + 'unite/app.js', OUT + 'app.js')

h = open(D + 'build/business/index.html').read()
def sub(a, b):
    global h
    assert h.count(a) == 1, (a[:70], h.count(a)); h = h.replace(a, b)
sub('<title>Corner Office</title>', '<title>Corner Office</title>')
sub(re.search(r'<meta name="description" content="[^"]*">', h).group(0),
    '<meta name="description" content="Five English courses in one app: job interview, business, journalism (with sports journalism), tech & vibe coding and IT student English, with missing words, multiple choice, word order, translation, a mock interview and leader-style rewrites.">')
sub('<div class="mark">C</div><div><b>Corner Office</b><small>Business English for leaders</small></div>',
    '<div class="mark">C</div><div><b>Corner Office</b><small id="brand-sub">English for work</small></div>')
sub('<div class="stats">', '<div class="stats">\n      <button class="pill pill-btn" id="btn-courses" hidden><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h10"/></svg>Courses</button>')
sub('<div class="eyebrow">Business English · 8 units</div>', '<div class="eyebrow" id="hero-eyebrow"></div>')
sub('<h1>Speak like the leader <em>you already are</em>.</h1>', '<h1 id="hero-h1"></h1>')
sub(re.search(r'<p>Meetings, presentations[^<]*</p>', h).group(0), '<p id="hero-lead"></p>')
sub('<h2>Choose your unit</h2>', '<h2 id="choose-h">Choose your unit</h2>')
sub(re.search(r'<span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 18h16M6 18l2-9 4 4 4-7 2 12"/></svg></span><span><b>Say it like a leader</b><span>Turn too-direct sentences into polished ones</span></span>', h).group(0),
    '<span class="ic"><svg id="special-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"></svg></span><span><b id="special-title"></b><span id="special-sub"></span></span>')
sub("<b>Mixed practice</b><span>10 sentences from every unit you've started</span>", '<b>Mixed practice</b><span id="mix-sub"></span>')
# the chooser screen, before the course home
sub('  <!-- HOME -->', '''  <!-- COURSES -->
  <section id="courses" class="wrap" style="gap:22px">
    <div class="intro">
      <div class="eyebrow">Five courses · one place</div>
      <h1>Which door are you <em>walking through</em> today?</h1>
      <p class="muted">Pick a course. Each one keeps its own progress, and you can switch at any time from the Courses button.</p>
    </div>
    <div class="course-cards" id="course-cards"></div>
    <p class="foot">Missing words · multiple choice · word order · translate · with Russian help and audio.</p>
  </section>

  <!-- HOME -->''')
sub('<section id="home" class="wrap" style="gap:22px">', '<section id="home" class="wrap" style="gap:22px" hidden>')
a = h.index('<script src="course.js"></script>'); b = h.index('<script src="app.js"></script>')
h = h[:a] + '<script src="courses.js"></script>\n' + ''.join('<script src="i%d.js"></script>\n' % n for n in range(1, 7)) + ''.join('<script src="b%d.js"></script>\n' % n for n in range(1, 9)) + ''.join('<script src="j%d.js"></script>\n' % n for n in range(1, 9)) + ''.join('<script src="t%d.js"></script>\n' % n for n in range(1, 9)) + ''.join('<script src="s%d.js"></script>\n' % n for n in range(1, 7)) + h[b:]

# palettes scoped by data-course (on <html> for the active course, on each chooser card for its own look)
BIZ_D = dict(bg='#0E1714', glow='#163029', panel='#15201C', panel2='#1B2924', line='rgba(201,165,91,.24)', muted='#A3AE9F', brass='#C9A55B', hi='#E9CF8C', bink='#1A140A', deep='#8a6a2c', tint='rgba(201,165,91,.13)')
BIZ_L = dict(bg='#ECEFE8', glow='#DCE6DD', panel='#F8F8F3', panel2='#F0F2EB', line='rgba(140,108,40,.32)', ink='#14211D', muted='#5A6760', brass='#9C7A32', hi='#7D5F1F', bink='#FFF8E6')
INT_D = dict(bg='#0D1221', glow='#1D2747', panel='#141B2E', panel2='#1A2340', line='rgba(214,163,115,.26)', muted='#A7ADBF', brass='#D6A373', hi='#F2CDA4', bink='#1E1208', deep='#8f5a33', tint='rgba(214,163,115,.14)')
JOU_D = dict(bg='#150F11', glow='#3A1A1E', panel='#1D1517', panel2='#261B1E', line='rgba(226,114,91,.26)', muted='#B5A6A6', brass='#E2725B', hi='#F6A891', bink='#22100B', deep='#9E3B28', tint='rgba(226,114,91,.14)')
JOU_L = dict(bg='#F1EEEA', glow='#EBDDD8', panel='#FCFBF9', panel2='#F5F1EE', line='rgba(170,60,40,.30)', ink='#1E1517', muted='#6A5B5B', brass='#B23A2A', hi='#8E2A1C', bink='#FFF4EF')
TEC_D = dict(bg='#0D1517', glow='#14343A', panel='#131D20', panel2='#18262A', line='rgba(79,195,201,.26)', muted='#A1B3B5', brass='#4FC3C9', hi='#A3E7EA', bink='#06191B', deep='#1F7C82', tint='rgba(79,195,201,.13)')
TEC_L = dict(bg='#ECF1F2', glow='#D6E7E9', panel='#FAFCFC', panel2='#F0F5F6', line='rgba(19,124,132,.30)', ink='#122023', muted='#556A6D', brass='#137C84', hi='#0D5E64', bink='#F2FDFE')
ITS_D = dict(bg='#12101B', glow='#2A2245', panel='#191626', panel2='#201C31', line='rgba(167,139,250,.26)', muted='#ADA6C2', brass='#A78BFA', hi='#D6C8FF', bink='#140D2A', deep='#5B3FB8', tint='rgba(167,139,250,.14)')
ITS_L = dict(bg='#F0EEF5', glow='#E2DCF2', panel='#FCFBFE', panel2='#F4F2FA', line='rgba(109,79,194,.30)', ink='#191427', muted='#615A75', brass='#6D4FC2', hi='#533A9E', bink='#F7F3FF')
INT_L = dict(bg='#ECEEF4', glow='#DDE2EE', panel='#FAFAFC', panel2='#F1F2F7', line='rgba(150,95,50,.32)', ink='#141A2C', muted='#5A6070', brass='#A0663A', hi='#80491F', bink='#FFF6EC')
def dark(p): return ('--bg:%(bg)s; --bg-glow:%(glow)s; --panel:%(panel)s; --panel-2:%(panel2)s; --line:%(line)s; --ink:#EFE8D8; --muted:%(muted)s; '
                     '--brass:%(brass)s; --brass-hi:%(hi)s; --brass-ink:%(bink)s; --brass-deep:%(deep)s; --tint:%(tint)s;' % p)
def light(p): return ('--bg:%(bg)s; --bg-glow:%(glow)s; --panel:%(panel)s; --panel-2:%(panel2)s; --line:%(line)s; --ink:%(ink)s; --muted:%(muted)s; '
                      '--brass:%(brass)s; --brass-hi:%(hi)s; --brass-ink:%(bink)s;' % p)
PAL = ''
for cid, d_, l_ in (('business', BIZ_D, BIZ_L), ('interview', INT_D, INT_L), ('journalism', JOU_D, JOU_L), ('tech', TEC_D, TEC_L), ('itstudent', ITS_D, ITS_L)):
    PAL += ('[data-course="%s"]{%s}\n' % (cid, dark(d_)) +
            '@media (prefers-color-scheme: light){ :root:not([data-theme="dark"])[data-course="%s"], :root:not([data-theme="dark"]) [data-course="%s"]{%s} }\n' % (cid, cid, light(l_)) +
            ':root[data-theme="light"][data-course="%s"], :root[data-theme="light"] [data-course="%s"]{%s}\n' % (cid, cid, light(l_)))
sub('*{box-sizing:border-box}', '''/* course palettes: business = emerald + brass, interview = navy + copper */
:root{--brass-deep:#8a6a2c; --tint:rgba(201,165,91,.13)}
''' + PAL + '''*{box-sizing:border-box}''')
# literal colours that must follow the course
h = h.replace('var(--brass) 55%, #8a6a2c)', 'var(--brass) 55%, var(--brass-deep))')
h = h.replace('linear-gradient(90deg, rgba(201,165,91,.13), var(--panel) 60%)', 'linear-gradient(90deg, var(--tint), var(--panel) 60%)')
h = h.replace('linear-gradient(135deg, rgba(201,165,91,.12), var(--panel) 70%)', 'linear-gradient(135deg, var(--tint), var(--panel) 70%)')
sub('/* results */', '''/* course chooser */
.intro{display:flex; flex-direction:column; gap:10px; padding-top:6px}
.intro h1{font-family:var(--display); font-weight:500; font-size:clamp(32px, 6vw, 52px); line-height:1.04; margin:0; text-wrap:balance}
.intro h1 em{color:var(--brass-hi)}
.intro p{margin:0; max-width:52ch}
.course-cards{display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:14px}
.course:last-child:nth-child(odd){grid-column:1 / -1}
@media (max-width:720px){ .course-cards{grid-template-columns:1fr} }
.story{display:flex; flex-direction:column; gap:6px; margin-bottom:12px; font-family:var(--body); font-size:16.5px; font-weight:500; line-height:1.5; border-left:3px solid var(--brass); padding:2px 0 2px 12px}
.story b{font-family:var(--mono); font-size:11px; letter-spacing:.16em; text-transform:uppercase; font-weight:500; color:var(--brass-hi)}
.course{display:flex; flex-direction:column; gap:12px; text-decoration:none; color:var(--ink); border:1px solid var(--line); border-radius:22px; padding:24px;
  background:radial-gradient(420px 220px at 100% 0, var(--bg-glow), transparent 70%), linear-gradient(180deg, var(--panel), var(--panel-2)); position:relative; transition:transform .2s, border-color .2s}
.course::before{content:""; position:absolute; inset:9px; border:1px solid var(--line); opacity:.45; border-radius:15px; pointer-events:none}
.course:hover{transform:translateY(-3px); border-color:var(--brass)}
.course:focus-visible{outline:2px solid var(--brass-hi); outline-offset:3px}
.course-top{display:flex; justify-content:space-between; align-items:center; gap:10px}
.course .mark{color:var(--brass-hi); border-color:var(--brass)}
.course-name{font-family:var(--display); font-size:30px; font-weight:700; line-height:1.05}
.course-tag{font-family:var(--display); font-size:19px; color:var(--muted)} .course-tag em{color:var(--brass-hi)}
.course-desc{font-size:14.5px; color:var(--muted); max-width:46ch}
.course-facts{display:flex; flex-wrap:wrap; gap:6px 16px; font-family:var(--mono); font-size:12px; color:var(--muted)} .course-facts b{color:var(--ink); font-weight:500}
.course .bar{max-width:none}
.course-go{display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap; font-size:13.5px; color:var(--muted); margin-top:auto; padding-top:4px}
.pill-btn{background:var(--panel); cursor:pointer; color:var(--ink)} .pill-btn:hover{border-color:var(--brass)}

/* results */''')
sub('<div class="set"><span class="eyebrow">Missing word</span>', '<div class="set"><span class="eyebrow">Word order</span><div class="seg" id="set-order"><button data-v="on">On</button><button data-v="off">Off</button></div></div>\n      <div class="set"><span class="eyebrow">Missing word</span>')
sub('<p class="foot">Keys:', '''<div class="reset-row">
      <button class="btn" id="btn-reset">Reset progress</button>
      <div class="reset-confirm" id="reset-confirm" role="alertdialog" aria-live="polite" hidden><span>Reset all progress in <b id="reset-name"></b>? Your settings stay. This can't be undone.</span><span class="reset-actions"><button class="btn danger" id="btn-reset-yes">Yes, reset</button><button class="btn" id="btn-reset-cancel">Cancel</button></span></div>
      <span class="reset-done" id="reset-done" role="status" hidden>✓ Progress reset. Start again from stage 1.</span>
    </div>
    <p class="foot">Keys:''')
sub('</style>', '''.reset-row{display:flex; flex-wrap:wrap; gap:10px; align-items:center; justify-content:center}
.reset-confirm{display:flex; flex-wrap:wrap; gap:10px 14px; align-items:center; justify-content:center; text-align:center; border:1px solid var(--bad); background:var(--bad-bg); border-radius:14px; padding:12px 16px; font-size:14px; max-width:520px}
.reset-actions{display:flex; gap:8px}
.btn.danger{background:var(--bad); border-color:var(--bad); color:var(--bg); font-weight:700}
.btn.danger:hover{filter:brightness(1.08)}
.reset-done{color:var(--ok); font-size:14px; font-weight:600}
</style>''')
open(OUT + 'index.html', 'w').write(h)
print('built', sorted(os.listdir(OUT)))
