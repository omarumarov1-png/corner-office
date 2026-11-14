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
open(OUT + 'courses.js', 'w').write('// The two courses. Order here = order on the chooser.\nwindow.COURSES = ' +
  json.dumps({'interview': interview, 'business': business}, ensure_ascii=False, indent=1) + ';\nwindow.BANKS = { interview: [], business: [] };\n')

for name, pre in (('interview', 'i'), ('business', 'b')):
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
    '<meta name="description" content="Two English courses in one app: job interview English and business English, with missing words, multiple choice, word order, translation, a mock interview and leader-style rewrites.">')
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
      <div class="eyebrow">Two courses · one place</div>
      <h1>Which door are you <em>walking through</em> today?</h1>
      <p class="muted">Pick a course. Each one keeps its own progress, and you can switch at any time from the Courses button.</p>
    </div>
    <div class="course-cards" id="course-cards"></div>
    <p class="foot">Missing words · multiple choice · word order · translate · with Russian help and audio.</p>
  </section>

  <!-- HOME -->''')
sub('<section id="home" class="wrap" style="gap:22px">', '<section id="home" class="wrap" style="gap:22px" hidden>')
a = h.index('<script src="course.js"></script>'); b = h.index('<script src="app.js"></script>')
h = h[:a] + '<script src="courses.js"></script>\n' + ''.join('<script src="i%d.js"></script>\n' % n for n in range(1, 7)) + ''.join('<script src="b%d.js"></script>\n' % n for n in range(1, 9)) + h[b:]

# palettes scoped by data-course (on <html> for the active course, on each chooser card for its own look)
BIZ_D = dict(bg='#0E1714', glow='#163029', panel='#15201C', panel2='#1B2924', line='rgba(201,165,91,.24)', muted='#A3AE9F', brass='#C9A55B', hi='#E9CF8C', bink='#1A140A', deep='#8a6a2c', tint='rgba(201,165,91,.13)')
BIZ_L = dict(bg='#ECEFE8', glow='#DCE6DD', panel='#F8F8F3', panel2='#F0F2EB', line='rgba(140,108,40,.32)', ink='#14211D', muted='#5A6760', brass='#9C7A32', hi='#7D5F1F', bink='#FFF8E6')
INT_D = dict(bg='#0D1221', glow='#1D2747', panel='#141B2E', panel2='#1A2340', line='rgba(214,163,115,.26)', muted='#A7ADBF', brass='#D6A373', hi='#F2CDA4', bink='#1E1208', deep='#8f5a33', tint='rgba(214,163,115,.14)')
INT_L = dict(bg='#ECEEF4', glow='#DDE2EE', panel='#FAFAFC', panel2='#F1F2F7', line='rgba(150,95,50,.32)', ink='#141A2C', muted='#5A6070', brass='#A0663A', hi='#80491F', bink='#FFF6EC')
def dark(p): return ('--bg:%(bg)s; --bg-glow:%(glow)s; --panel:%(panel)s; --panel-2:%(panel2)s; --line:%(line)s; --ink:#EFE8D8; --muted:%(muted)s; '
                     '--brass:%(brass)s; --brass-hi:%(hi)s; --brass-ink:%(bink)s; --brass-deep:%(deep)s; --tint:%(tint)s;' % p)
def light(p): return ('--bg:%(bg)s; --bg-glow:%(glow)s; --panel:%(panel)s; --panel-2:%(panel2)s; --line:%(line)s; --ink:%(ink)s; --muted:%(muted)s; '
                      '--brass:%(brass)s; --brass-hi:%(hi)s; --brass-ink:%(bink)s;' % p)
PAL = ''
for cid, d_, l_ in (('business', BIZ_D, BIZ_L), ('interview', INT_D, INT_L)):
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
@media (max-width:680px){ .course-cards{grid-template-columns:1fr} }
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
open(OUT + 'index.html', 'w').write(h)
print('built', sorted(os.listdir(OUT)))
