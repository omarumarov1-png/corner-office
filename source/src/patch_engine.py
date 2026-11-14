# Turn the single-course app.js into a course-driven engine (reads window.COURSE).
D = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/'
s = open(D + 'app/app.js').read()
def sub(a, b, n=1):
    global s
    assert s.count(a) == n, (a[:60], s.count(a)); s = s.replace(a, b)

a = s.index('  const FLOORS = ['); b = s.index('  // ---------- data ----------')
s = s[:a] + '  const C = window.COURSE;\n  const FLOORS = C.floors, NF = FLOORS.length;\n\n' + s[b:]
sub('// Corner Office — practice engine. Data rows come from d1–d6.js: [type, text, answer, wrong[3], russian, tip].',
    '// Practice engine shared by the two courses. Course setup comes from course.js (window.COURSE);\n// data rows come from f1…fN.js: [type, text, answer, wrong[3], russian, tip]; type g|m|q|u.')
sub('const KEY = "corner-office-v1";', 'const KEY = C.key;')
# dial for N floors
sub('const ang = n => Math.PI - (n - 1) * (Math.PI / 5); // floor 1 at left, 6 at right', 'const step = Math.PI / (NF - 1), ang = n => Math.PI - (n - 1) * step; // floor 1 at left, last at right')
sub('for (let k = 0; k <= 25; k++) { const a = Math.PI - k * Math.PI / 25,', 'const T = (NF - 1) * 5; for (let k = 0; k <= T; k++) { const a = Math.PI - k * Math.PI / T,')
sub('for (let n = 1; n <= 6; n++) {', 'for (let n = 1; n <= NF; n++) {')
sub('font-size="${n === floor ? 21 : 16}"', 'font-size="${(n === floor ? 21 : 16) - (NF > 6 ? 2 : 0)}"')
sub('    const rot = (5 - (floor - 1)) * 36 * -1; // needle rest points left (floor 1), rotate clockwise\n', '')
sub('style="transform:rotate(${(floor - 1) * 36}deg)"', 'style="transform:rotate(${(floor - 1) * 180 / (NF - 1)}deg)"')
sub('FLOOR ${floor} · ${FLOORS[floor - 1].name.toUpperCase()}', '${C.unit.toUpperCase()} ${floor} · ${(FLOORS[floor - 1].short || FLOORS[floor - 1].name).toUpperCase()}')
sub('    void rot;\n', '')
sub('    return 6;\n  }', '    return NF;\n  }')
sub('"Recommended: floor " + nf', '"Recommended: " + C.unit.toLowerCase() + " " + nf')
sub('aria-label="Floor ${f.n}, ${f.name}"', 'aria-label="${C.unit} ${f.n}, ${f.name}"')
# item types q (interview question) and u (say it like a leader) are multiple choice
sub('    if (it.t === "m") return ["mc"];', '    if (it.t !== "g") return ["mc"];')
sub('''      let kind = S.act;
      if (kind === "mix") {''', '''      let kind = kindsFor(it).includes(S.act) ? S.act : "mix";
      if (kind === "mix") {''')
sub('''  const buildReview = () =>''', '''  // Mock interview: opening question first, "Any questions for us?" last, six random questions between.
  function buildMock() {
    const q = ITEMS.filter(it => it.t === "q");
    const first = q.find(it => /^Tell me about yourself/.test(it.s)), last = q.find(it => /any questions for us/i.test(it.s));
    const mid = shuffle(q.filter(it => it !== first && it !== last)).slice(0, 6);
    return [first, ...mid, last].filter(Boolean).map(it => Object.assign({}, it, { kind: "mc" }));
  }
  const buildLeader = () => shuffle(ITEMS.filter(it => it.t === "u")).slice(0, +S.len).map(it => Object.assign({}, it, { kind: "mc" }));
  const buildReview = () =>''')
# headers + prompts
sub('''      html = head(it.kind === "gap" ? "Choose the missing word" : "Multiple choice") +
        `<p class="prompt rise">${it.kind === "gap" ? esc(it.s).replace("___", `<span class="gap" id="gap">&nbsp;</span>`) : esc(it.s)}</p>` + optsHtml(cur.opts);''',
'''      const lab = it.kind === "gap" ? "Choose the missing word" : it.t === "q" ? "The interviewer asks · choose the strongest answer" : it.t === "u" ? "Say it like a leader" : "Multiple choice";
      const pr = it.kind === "gap" ? esc(it.s).replace("___", `<span class="gap" id="gap">&nbsp;</span>`)
        : it.t === "q" ? `<span class="q-line">“${esc(it.s)}”</span>${canSpeak ? `<button class="say-q" id="btn-sayq" aria-label="Hear the question"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H3v6h3l5 4zM16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/></svg>Hear it</button>` : ""}`
        : it.t === "u" ? `<span class="direct"><b>Too direct</b><s>${esc(it.s)}</s></span>How would a leader say it?`
        : esc(it.s);
      html = head(lab) + `<p class="prompt rise">${pr}</p>` + optsHtml(cur.opts);''')
sub('''      document.querySelectorAll(".opt").forEach(b => b.onclick = () => choose(+b.dataset.i));
    }
  }''', '''      document.querySelectorAll(".opt").forEach(b => b.onclick = () => choose(+b.dataset.i));
      const sq = $("#btn-sayq"); if (sq) sq.onclick = () => speak(it.s);
      if (mock && it.t === "q") setTimeout(() => speak(it.s), 250);
    }
  }''')
sub('''(cur.kind === "order" || cur.kind === "ru") ? "✕ Not quite — here is the right sentence"''',
    '''(cur.t === "q" || cur.t === "u") ? "✕ Not quite — here is the strongest answer" : (cur.kind === "order" || cur.kind === "ru") ? "✕ Not quite — here is the right sentence"''')
# mock flag
sub('let Q = [], qi = 0, res = [], label = "", answered = false, cur = null;', 'let Q = [], qi = 0, res = [], label = "", answered = false, cur = null, mock = false;')
sub('''  function start(list, lab) {
    if (!list.length) return;
    Q = list;''', '''  function start(list, lab, isMock) {
    if (!list.length) return;
    mock = !!isMock; Q = list;''')
sub('"Floor " + n + " · " + FLOORS[n - 1].name', 'C.unit + " " + n + " · " + FLOORS[n - 1].name')
sub('''  $("#btn-review").onclick =''', '''  $("#btn-special").onclick = () => { again = C.special.kind === "mock" ? () => start(buildMock(), "Mock interview", true) : () => start(buildLeader(), "Say it like a leader"); again(); };
  $("#btn-review").onclick =''')
sub('<span class="eyebrow">Floor ${f.n} · ${f.name}</span>', '<span class="eyebrow">${C.unit} ${f.n} · ${f.name}</span>')
sub('<span class="full">${full}</span>', '<span class="full${cur.t === "q" || cur.t === "u" ? " answer" : ""}">${cur.t === "q" || cur.t === "u" ? esc(cur.a) : full}</span>')
sub('"Back to the lobby"', '"Back to the menu"') if s.count('"Back to the lobby"') else None
open(D + 'engine/app.js', 'w').write(s)
print('engine ok')
