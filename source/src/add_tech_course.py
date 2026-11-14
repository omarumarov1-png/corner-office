# Add the Tech & Vibe Coding course to build_unite.py (setup, palette, data files).
p = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/src/build_unite.py'
s = open(p).read()
def sub(a, b):
    global s
    assert s.count(a) == 1, (a[:70], s.count(a)); s = s.replace(a, b)
if "key='corner-office-tech-v1'" not in s:
    sub("open(OUT + 'courses.js', 'w').write('// The three courses.", '''tech = dict(key='corner-office-tech-v1', unit='Stage', name='Tech & Vibe Coding', mark='T', level='A2 → C1 · 8 stages', eyebrow='IT, tech & vibe coding · 8 stages',
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
open(OUT + 'courses.js', 'w').write('// The four courses.''')
    sub("json.dumps({'interview': interview, 'business': business, 'journalism': journalism}, ensure_ascii=False, indent=1) + ';\\nwindow.BANKS = { interview: [], business: [], journalism: [] };\\n')",
        "json.dumps({'interview': interview, 'business': business, 'journalism': journalism, 'tech': tech}, ensure_ascii=False, indent=1) + ';\\nwindow.BANKS = { interview: [], business: [], journalism: [], tech: [] };\\n')")
    sub("for name, pre in (('interview', 'i'), ('business', 'b'), ('journalism', 'j')):", "for name, pre in (('interview', 'i'), ('business', 'b'), ('journalism', 'j'), ('tech', 't')):")
    sub("''.join('<script src=\"j%d.js\"></script>\\n' % n for n in range(1, 9)) + h[b:]",
        "''.join('<script src=\"j%d.js\"></script>\\n' % n for n in range(1, 9)) + ''.join('<script src=\"t%d.js\"></script>\\n' % n for n in range(1, 9)) + h[b:]")
    sub("INT_L = dict(", "TEC_D = dict(bg='#0D1517', glow='#14343A', panel='#131D20', panel2='#18262A', line='rgba(79,195,201,.26)', muted='#A1B3B5', brass='#4FC3C9', hi='#A3E7EA', bink='#06191B', deep='#1F7C82', tint='rgba(79,195,201,.13)')\nTEC_L = dict(bg='#ECF1F2', glow='#D6E7E9', panel='#FAFCFC', panel2='#F0F5F6', line='rgba(19,124,132,.30)', ink='#122023', muted='#556A6D', brass='#137C84', hi='#0D5E64', bink='#F2FDFE')\nINT_L = dict(")
    sub("('journalism', JOU_D, JOU_L)):", "('journalism', JOU_D, JOU_L), ('tech', TEC_D, TEC_L)):")
    sub('<div class="eyebrow">Three courses · one place</div>', '<div class="eyebrow">Four courses · one place</div>')
    sub("'<meta name=\"description\" content=\"Three English courses in one app: job interview, business and journalism (with sports journalism),",
        "'<meta name=\"description\" content=\"Four English courses in one app: job interview, business, journalism (with sports journalism) and tech & vibe coding,")
open(p, 'w').write(s); print('ok')
