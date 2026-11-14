# One app, two courses: turn engine/app.js into unite/app.js, which boots a course at runtime and shows a course chooser.
import os
D = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/'
s = open(D + 'engine/app.js').read()
def sub(a, b):
    global s
    assert s.count(a) == 1, (a[:70], s.count(a)); s = s.replace(a, b)

sub('''// Practice engine shared by the two courses. Course setup comes from course.js (window.COURSE);
// data rows come from f1…fN.js: [type, text, answer, wrong[3], russian, tip]; type g|m|q|u.''',
'''// Corner Office — one app with two courses. courses.js defines window.COURSES; i*.js / b*.js fill window.BANKS[course].
// Rows: [type, text, answer, wrong[3], russian, tip]; type g (missing word) | m (choice) | q (interviewer question) | u (say it like a leader).''')
sub('''  const C = window.COURSE;
  const FLOORS = C.floors, NF = FLOORS.length;

  // ---------- data ----------
  const ITEMS = [];
  (window.BANK || []).sort((a, b) => a.floor - b.floor).forEach(f => f.items.forEach((r, i) => {
    ITEMS.push({ id: f.floor + "-" + (i + 1), floor: f.floor, idx: i, t: r[0], s: r[1], a: r[2], d: r[3], ru: r[4], x: r[5] });
  }));
  const byFloor = n => ITEMS.filter(it => it.floor === n);

  // ---------- storage (safe) ----------
  const KEY = C.key;
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
  let S = Object.assign({ prog: {}, mode: "choose", len: 10, ru: "on", act: "mix", days: [], }, load());
  const save''',
'''  const COURSES = window.COURSES, ORDER = Object.keys(COURSES);
  let C, FLOORS, NF, ITEMS = [], KEY, S;
  const itemsOf = id => {
    const out = [];
    (window.BANKS[id] || []).slice().sort((a, b) => a.floor - b.floor).forEach(f => f.items.forEach((r, i) => {
      out.push({ id: f.floor + "-" + (i + 1), floor: f.floor, idx: i, t: r[0], s: r[1], a: r[2], d: r[3], ru: r[4], x: r[5] });
    }));
    return out;
  };
  const byFloor = n => ITEMS.filter(it => it.floor === n);

  // ---------- storage (safe) ----------
  const read = k => { try { return JSON.parse(localStorage.getItem(k)) || {}; } catch (e) { return {}; } };
  const load = () => read(KEY);
  const save''')
sub('''  function show(id) { for (const s of ["home", "practice", "results"]) $("#" + s).hidden = s !== id; window.scrollTo({ top: 0 }); }''',
'''  function show(id) { for (const s of ["courses", "home", "practice", "results"]) $("#" + s).hidden = s !== id; $("#btn-courses").hidden = id === "courses";
    document.querySelectorAll(".stats .pill:not(.pill-btn)").forEach(el => el.hidden = id === "courses"); window.scrollTo({ top: 0 }); }

  // ---------- courses ----------
  function boot(id) {
    C = COURSES[id]; FLOORS = C.floors; NF = FLOORS.length; ITEMS = itemsOf(id); KEY = C.key;
    S = Object.assign({ prog: {}, mode: "choose", len: 10, ru: "on", act: "mix", days: [] }, load());
    document.documentElement.dataset.course = id;
    try { localStorage.setItem("corner-office-active", id); } catch (e) {}
    const txt = (sel, v) => { const el = $(sel); if (el) el.textContent = v; };
    txt("#brand-sub", C.name); txt("#hero-eyebrow", C.eyebrow); $("#hero-h1").innerHTML = C.h1; txt("#hero-lead", C.lead);
    txt("#choose-h", "Choose your " + C.unit.toLowerCase()); txt("#mix-sub", "10 sentences from every " + C.unit.toLowerCase() + " you've started");
    txt("#special-title", C.special.title); txt("#special-sub", C.special.sub); $("#special-icon").innerHTML = C.special.icon;
    $("#dial").setAttribute("aria-label", C.unit + " indicator");
    renderHome(); show("home");
  }
  function renderCourses() {
    document.documentElement.dataset.course = "business";
    $("#course-cards").innerHTML = ORDER.map(id => {
      const c = COURSES[id], items = itemsOf(id), prog = read(c.key).prog || {};
      const done = items.filter(it => (prog[it.id] || {}).last === 1).length, pct = Math.round(done / items.length * 100);
      return `<a class="course" data-course="${id}" href="#${id}">
        <span class="course-top"><span class="mark">${c.mark}</span><span class="eyebrow">${esc(c.level)}</span></span>
        <span class="course-name">${esc(c.name)}</span>
        <span class="course-tag">${c.h1}</span>
        <span class="course-desc">${esc(c.lead)}</span>
        <span class="course-facts"><span><b>${NFof(c)}</b> ${c.unit.toLowerCase()}s</span><span><b>${items.length}</b> sentences</span><span>${esc(c.special.title)}</span></span>
        <span class="bar"><i style="width:${pct}%"></i></span>
        <span class="course-go"><span>${done ? done + " of " + items.length + " mastered" : "Not started yet"}</span><span class="btn primary">${done ? "Continue" : "Start"} →</span></span>
      </a>`;
    }).join("");
    show("courses");
  }
  const NFof = c => c.floors.length;
  function route() {
    const h = location.hash.slice(1);
    if (COURSES[h]) return boot(h);
    renderCourses();
  }''')
sub('''  renderHome();
})();''', '''  $("#btn-courses").onclick = () => { if (location.hash === "#courses") route(); else location.hash = "courses"; };
  window.addEventListener("hashchange", route);
  // First visit: the chooser. Returning visitor with no link: the course they used last.
  (() => { let last = null; try { last = localStorage.getItem("corner-office-active"); } catch (e) {}
    if (!location.hash && COURSES[last]) boot(last); else route(); })();
})();''')
# keyboard: ignore keys while the chooser is open
sub('''    if ($("#practice").hidden) { if (e.key === "Escape" && !$("#results").hidden) home(); return; }''',
    '''    if (!$("#courses").hidden) return;
    if ($("#practice").hidden) { if (e.key === "Escape" && !$("#results").hidden) home(); return; }''')
# Headline desk (type h) for the journalism course, and a generic builder for single-type drills
sub('const buildLeader = () => shuffle(ITEMS.filter(it => it.t === "u")).slice(0, +S.len).map(it => Object.assign({}, it, { kind: "mc" }));',
    'const buildType = t => shuffle(ITEMS.filter(it => it.t === t)).slice(0, +S.len).map(it => Object.assign({}, it, { kind: "mc" }));')
sub('it.t === "u" ? "Say it like a leader" :', 'it.t === "u" ? "Say it like a leader" : it.t === "h" ? "Headline desk · choose the best headline" :')
sub(': it.t === "u" ? `<span class="direct"><b>Too direct</b><s>${esc(it.s)}</s></span>How would a leader say it?`',
    ': it.t === "u" ? `<span class="direct"><b>Too direct</b><s>${esc(it.s)}</s></span>How would a leader say it?`\n        : it.t === "h" ? `<span class="story"><b>The story</b>${esc(it.s)}</span>Which headline would you run?`')
sub('(cur.t === "q" || cur.t === "u") ? "✕ Not quite — here is the strongest answer"', '(cur.t === "q" || cur.t === "u" || cur.t === "h") ? "✕ Not quite — here is the strongest " + (cur.t === "h" ? "headline" : "answer")')
sub('<span class="full${cur.t === "q" || cur.t === "u" ? " answer" : ""}">${cur.t === "q" || cur.t === "u" ? esc(cur.a) : full}</span>',
    '<span class="full${"quh".includes(cur.t) ? " answer" : ""}">${"quh".includes(cur.t) ? esc(cur.a) : full}</span>')
s = s.replace('() => start(buildLeader(), "Say it like a leader"); again(); };',
    '() => start(buildType({ headline: "h", prompt: "p" }[C.special.kind] || "u"), C.special.title); again(); };')
# Prompt lab (type p) for the tech course
sub('it.t === "h" ? "Headline desk · choose the best headline" :', 'it.t === "h" ? "Headline desk · choose the best headline" : it.t === "p" ? "Prompt lab · choose the best prompt" :')
sub(': it.t === "h" ? `<span class="story"><b>The story</b>${esc(it.s)}</span>Which headline would you run?`',
    ': it.t === "h" ? `<span class="story"><b>The story</b>${esc(it.s)}</span>Which headline would you run?`\n        : it.t === "p" ? `<span class="story"><b>Your goal</b>${esc(it.s)}</span>Which prompt gets the best result?`')
sub('(cur.t === "q" || cur.t === "u" || cur.t === "h") ? "✕ Not quite — here is the strongest " + (cur.t === "h" ? "headline" : "answer")',
    '"quhp".includes(cur.t) ? "✕ Not quite — here is the strongest " + ({ h: "headline", p: "prompt" }[cur.t] || "answer")')
sub('<span class="full${"quh".includes(cur.t) ? " answer" : ""}">${"quh".includes(cur.t) ? esc(cur.a) : full}</span>',
    '<span class="full${"quhp".includes(cur.t) ? " answer" : ""}">${"quhp".includes(cur.t) ? esc(cur.a) : full}</span>')
assert 'buildType({ headline: "h", prompt: "p" }' in s
# Fix the mistake (type e) for the IT Student course
sub('it.t === "p" ? "Prompt lab · choose the best prompt" :', 'it.t === "p" ? "Prompt lab · choose the best prompt" : it.t === "e" ? "Fix the mistake · choose the correct sentence" :')
sub(': it.t === "p" ? `<span class="story"><b>Your goal</b>${esc(it.s)}</span>Which prompt gets the best result?`',
    ': it.t === "p" ? `<span class="story"><b>Your goal</b>${esc(it.s)}</span>Which prompt gets the best result?`\n        : it.t === "e" ? `<span class="direct"><b>Find the mistake</b><s>${esc(it.s)}</s></span>Which sentence is correct?`')
sub('"quhp".includes(cur.t) ? "✕ Not quite — here is the strongest " + ({ h: "headline", p: "prompt" }[cur.t] || "answer")',
    '"quhpe".includes(cur.t) ? "✕ Not quite — here is the " + ({ h: "strongest headline", p: "strongest prompt", e: "correct sentence" }[cur.t] || "strongest answer")')
sub('<span class="full${"quhp".includes(cur.t) ? " answer" : ""}">${"quhp".includes(cur.t) ? esc(cur.a) : full}</span>',
    '<span class="full${"quhpe".includes(cur.t) ? " answer" : ""}">${"quhpe".includes(cur.t) ? esc(cur.a) : full}</span>')
s = s.replace('buildType({ headline: "h", prompt: "p" }[C.special.kind] || "u")', 'buildType({ headline: "h", prompt: "p", fix: "e" }[C.special.kind] || "u")')
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
sub('S = Object.assign({ prog: {}, mode: "choose", len: 10, ru: "on", act: "mix", order: "on", days: [] }, load());',
    'S = Object.assign({ prog: {}, mode: "choose", len: 10, ru: "on", act: "mix", order: "on", days: [] }, load());\n    try { const g = localStorage.getItem("corner-office-order"); if (g === "on" || g === "off") S.order = g; } catch (e) {}')
sub('if (S.order === "off" && S.act === "order") S.act = "mix"; save(); renderHome(); });',
    'if (S.order === "off" && S.act === "order") S.act = "mix"; if (key === "order") { try { localStorage.setItem("corner-office-order", S.order); } catch (e) {} } save(); renderHome(); });')
sub('      document.querySelectorAll(id + " button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.v) === String(S[key])));',
    '      document.querySelectorAll(id + " button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.v) === String(S[key])));\n    const ob = document.querySelector(\'#set-act button[data-v="order"]\'); if (ob) ob.hidden = S.order === "off";')
# reset progress for the current course (in-page confirmation; settings are kept)
sub('$("#dial").setAttribute("aria-label", C.unit + " indicator");',
    '$("#dial").setAttribute("aria-label", C.unit + " indicator");\n    $("#reset-confirm").hidden = true; $("#reset-done").hidden = true; $("#btn-reset").hidden = false;')
sub('  $("#btn-courses").onclick =', '''  $("#btn-reset").onclick = () => { $("#reset-name").textContent = C.name; $("#reset-confirm").hidden = false; $("#btn-reset").hidden = true; $("#reset-done").hidden = true; $("#btn-reset-cancel").focus(); };
  $("#btn-reset-cancel").onclick = () => { $("#reset-confirm").hidden = true; $("#btn-reset").hidden = false; };
  $("#btn-reset-yes").onclick = () => {
    S.prog = {}; S.days = []; save();
    $("#reset-confirm").hidden = true; $("#btn-reset").hidden = false; renderHome(); $("#reset-done").hidden = false;
  };
  $("#btn-courses").onclick =''')
os.makedirs(D + 'unite', exist_ok=True)
open(D + 'unite/app.js', 'w').write(s)
print('unite engine ok')
