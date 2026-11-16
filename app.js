// Corner Office — one app with two courses. courses.js defines window.COURSES; i*.js / b*.js fill window.BANKS[course].
// Rows: [type, text, answer, wrong[3], russian, tip]; type g (missing word) | m (choice) | q (interviewer question) | u (say it like a leader).
(function () {
  "use strict";
  const COURSES = window.COURSES, ORDER = Object.keys(COURSES);
  let C, FLOORS, NF, ITEMS = [], KEY, S;
  const itemsOf = id => {
    const out = [];
    const banks = COURSES[id].units && window.GRAMMAR ? window.GRAMMAR.toBanks() : (window.BANKS[id] || []);
    banks.slice().sort((a, b) => a.floor - b.floor || (a.unit || 0) - (b.unit || 0) || (a.exn || 0) - (b.exn || 0)).forEach(f => f.items.forEach((r, i) => {
      out.push({ id: f.unit ? f.floor + "-" + f.unit + "-" + f.exn + "-" + (i + 1) : f.floor + "-" + (i + 1), floor: f.floor, idx: i, u: f.unit, exn: f.exn, task: f.task,
        t: r[0], s: r[1], a: r[2], d: r[3], ru: r[4], x: r[5] });
    }));
    return out;
  };
  const byFloor = n => ITEMS.filter(it => it.floor === n);

  // ---------- storage (safe) ----------
  const read = k => { try { return JSON.parse(localStorage.getItem(k)) || {}; } catch (e) { return {}; } };
  const load = () => read(KEY);
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
  // prog[id] = { c: correct count, w: wrong count, last: 1|0 }
  const mastered = it => (S.prog[it.id] || {}).last === 1;
  const missed = it => (S.prog[it.id] || {}).last === 0;
  const touched = n => byFloor(n).some(it => S.prog[it.id]);

  function streak() {
    const d = [...new Set(S.days)].sort().reverse(); if (!d.length) return 0;
    const day = t => new Date(t).toISOString().slice(0, 10);
    let cur = new Date(), n = 0;
    if (d[0] !== day(cur)) { cur.setDate(cur.getDate() - 1); if (d[0] !== day(cur)) return 0; }
    for (const x of d) { if (x === day(cur)) { n++; cur.setDate(cur.getDate() - 1); } else break; }
    return n;
  }

  // ---------- helpers ----------
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const norm = s => s.toLowerCase().replace(/[’‘`]/g, "'").replace(/[.,!?;:]+$/g, "").replace(/\s+/g, " ").trim();
  function speak(text) {
    try {
      const u = new SpeechSynthesisUtterance(text); u.lang = "en-GB"; u.rate = 0.92;
      const v = speechSynthesis.getVoices().find(v => /en-GB/i.test(v.lang)) || speechSynthesis.getVoices().find(v => /^en/i.test(v.lang));
      if (v) u.voice = v; speechSynthesis.cancel(); speechSynthesis.speak(u);
    } catch (e) {}
  }
  const canSpeak = (() => { try { return "speechSynthesis" in window; } catch (e) { return false; } })();
  // Several gaps: the answer "Are … listening" fills each ___ in order. wrap(part) adds markup around each filled part.
  const parts = a => String(a).split(/\s*…\s*/);
  const fill = (s, a, wrap) => { const p = parts(a); let k = 0; return s.replace(/___/g, () => { const x = p[Math.min(k++, p.length - 1)]; return wrap ? wrap(x) : x; }); };
  const fillEsc = (s, a, wrap) => { const p = parts(a); let k = 0; return esc(s).replace(/___/g, () => wrap(esc(p[Math.min(k++, p.length - 1)]))); };
  const nGaps = s => (String(s).match(/___/g) || []).length;
  const noHint = x => String(x).replace(/\s*\([^()]*\)\s*$/, "");
  const fullSentence = it => it.t === "g" ? noHint(fill(it.s, it.a)) : it.a;

  // ---------- dial ----------
  function drawDial(floor) {
    const cx = 130, cy = 140, r = 100;
    const step = Math.PI / (NF - 1), ang = n => Math.PI - (n - 1) * step; // floor 1 at left, last at right
    let g = `<defs><linearGradient id="br" x1="0" x2="1"><stop offset="0" stop-color="var(--brass)"/><stop offset="1" stop-color="var(--brass-hi)"/></linearGradient></defs>`;
    g += `<path d="M ${cx - r - 14} ${cy} A ${r + 14} ${r + 14} 0 0 1 ${cx + r + 14} ${cy}" fill="none" stroke="var(--line)" stroke-width="1"/>`;
    g += `<path d="M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}" fill="none" stroke="url(#br)" stroke-width="2"/>`;
    const T = (NF - 1) * 5; for (let k = 0; k <= T; k++) { const a = Math.PI - k * Math.PI / T, l = k % 5 ? 6 : 12;
      g += `<line x1="${cx + Math.cos(a) * r}" y1="${cy - Math.sin(a) * r}" x2="${cx + Math.cos(a) * (r - l)}" y2="${cy - Math.sin(a) * (r - l)}" stroke="var(--brass)" stroke-width="${k % 5 ? 1 : 1.6}"/>`; }
    for (let n = 1; n <= NF; n++) { const a = ang(n), x = cx + Math.cos(a) * (r - 28), y = cy - Math.sin(a) * (r - 28);
      g += `<text x="${x}" y="${y + 6}" text-anchor="middle" font-family="Bodoni Moda, Georgia, serif" font-size="${(n === floor ? 21 : 16) - (NF > 6 ? 2 : 0)}" font-weight="700" fill="${n === floor ? "var(--brass-hi)" : "var(--muted)"}">${n}</text>`; }
    g += `<g class="needle" style="transform:rotate(${(floor - 1) * 180 / (NF - 1)}deg)"><line x1="${cx}" y1="${cy}" x2="${cx - r + 40}" y2="${cy}" stroke="var(--brass-hi)" stroke-width="3" stroke-linecap="round"/><path d="M ${cx - r + 34} ${cy} l 10 -5 v 10 z" fill="var(--brass-hi)"/></g>`;
    g += `<circle cx="${cx}" cy="${cy}" r="11" fill="var(--panel)" stroke="var(--brass)" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="4" fill="var(--brass-hi)"/>`;
    g += `<text x="${cx}" y="${cy + 26}" text-anchor="middle" font-family="DM Mono, monospace" font-size="10" letter-spacing="2.5" fill="var(--muted)">${C.unit.toUpperCase()} ${floor} · ${(FLOORS[floor - 1].short || FLOORS[floor - 1].name).toUpperCase()}</text>`;
    const svg = $("#dial"); svg.setAttribute("viewBox", "0 0 260 172"); svg.innerHTML = g;
  }

  // ---------- home ----------
  function nextFloor() {
    for (const f of FLOORS) { const items = byFloor(f.n); const m = items.filter(mastered).length; if (m / items.length < 0.7) return f.n; }
    return NF;
  }
  function renderHome() {
    const nf = nextFloor();
    $("#st-total").textContent = ITEMS.length;
    $("#st-mastered").textContent = ITEMS.filter(mastered).length;
    $("#st-days").textContent = streak();
    $("#floor-hint").textContent = "Recommended: " + C.unit.toLowerCase() + " " + nf;
    drawDial(nf);
    $("#floors").innerHTML = FLOORS.map(f => {
      const items = byFloor(f.n), m = items.filter(mastered).length, pct = Math.round(m / items.length * 100);
      return `<button class="floor ${f.n === nf ? "next" : ""}" data-floor="${f.n}" aria-label="${C.unit} ${f.n}, ${f.name}">
        <span class="lift-btn">${f.n}</span>
        <span class="meta"><span class="name">${f.name}</span><span class="desc" style="display:block">${f.desc}</span><span class="bar"><i style="width:${pct}%"></i></span></span>
        <span class="right">${f.n === nf ? '<span class="tag-next">Next</span>' : ""}<span class="cefr">${f.cefr}</span><span>${m}/${items.length}</span></span>
      </button>`;
    }).join("");
    const nMiss = ITEMS.filter(missed).length;
    $("#review-sub").textContent = nMiss ? nMiss + " sentence" + (nMiss > 1 ? "s" : "") + " to fix" : "Nothing to review yet";
    $("#btn-review").disabled = !nMiss;
    for (const [id, key] of [["#set-act", "act"], ["#set-order", "order"], ["#set-mode", "mode"], ["#set-len", "len"], ["#set-ru", "ru"]])
      document.querySelectorAll(id + " button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.v) === String(S[key])));
    const ob = document.querySelector('#set-act button[data-v="order"]'); if (ob) ob.hidden = S.order === "off";
  }

  // ---------- session building ----------
  // Activities: gap (missing word), mc (multiple choice), order (word order), ru (translate: Russian → right English).
  const ACTS = { gap: "Missing word", mc: "Multiple choice", order: "Word order", ru: "Translate" };
  const words = it => fullSentence(it).split(" ");
  function kindsFor(it) {
    if (it.t !== "g") return ["mc"];
    const k = ["gap", "ru"]; if (S.order !== "off" && words(it).length >= 4 && words(it).length <= 14) k.push("order"); return k;
  }
  const fits = it => S.act === "mix" || kindsFor(it).includes(S.act);
  // Mix: rotate through the activities an item allows; missing word comes up most often.
  function assign(list) {
    let r = Math.floor(Math.random() * 4);
    return list.map(it => {
      let kind = kindsFor(it).includes(S.act) ? S.act : "mix";
      if (kind === "mix") { const k = kindsFor(it); const wheel = k.length === 1 ? k : ["gap", ...k]; kind = wheel[r++ % wheel.length]; }
      return Object.assign({}, it, { kind });
    });
  }
  // Inside a floor: unanswered first, in book order (easy → hard), then missed, then the rest.
  function buildFloor(n) {
    const items = byFloor(n).filter(fits), len = +S.len;
    const fresh = items.filter(it => !S.prog[it.id]);
    const miss = shuffle(items.filter(missed));
    const rest = shuffle(items.filter(mastered));
    return assign([...fresh, ...miss, ...rest].slice(0, len));
  }
  function buildMix() {
    const floors = FLOORS.filter(f => touched(f.n)).map(f => f.n); if (!floors.length) floors.push(1);
    return assign(shuffle(ITEMS.filter(it => floors.includes(it.floor) && fits(it))).slice(0, +S.len).sort((a, b) => a.floor - b.floor));
  }
  // Mock interview: opening question first, "Any questions for us?" last, six random questions between.
  function buildMock() {
    const q = ITEMS.filter(it => it.t === "q");
    const first = q.find(it => /^Tell me about yourself/.test(it.s)), last = q.find(it => /any questions for us/i.test(it.s));
    const mid = shuffle(q.filter(it => it !== first && it !== last)).slice(0, 6);
    return [first, ...mid, last].filter(Boolean).map(it => Object.assign({}, it, { kind: "mc" }));
  }
  // Grammar: a unit's exercises in book order (unanswered first), one exercise, a part's mixed review, the study-guide test.
  const byUnit = u => ITEMS.filter(it => it.u === u);
  function buildUnit(u) { const items = byUnit(u).filter(fits); const fresh = items.filter(it => !S.prog[it.id]);
    return assign([...fresh, ...shuffle(items.filter(missed)), ...shuffle(items.filter(mastered))].slice(0, +S.len)); }
  const buildExercise = (u, k) => assign(ITEMS.filter(it => it.u === u && it.exn === k));
  const buildPartMix = n => assign(shuffle(byFloor(n).filter(fits)).slice(0, +S.len));
  function buildGuide() { // one question per unit, weakest units first, at most 25
    const units = [...new Set(ITEMS.map(it => it.u))];
    const score = u => byUnit(u).filter(mastered).length / byUnit(u).length;
    const pick = units.sort((a, b) => score(a) - score(b) || a - b).slice(0, 25).sort((a, b) => a - b);
    return pick.map(u => { const c = byUnit(u).filter(it => it.t === "g" || it.t === "e"); return Object.assign({}, c[Math.floor(Math.random() * c.length)], { kind: "mc" }); }).filter(x => x.id);
  }
  let guide = false;
  const buildType = t => shuffle(ITEMS.filter(it => it.t === t)).slice(0, +S.len).map(it => Object.assign({}, it, { kind: "mc" }));
  const buildReview = () => assign(shuffle(ITEMS.filter(it => missed(it) && fits(it))).slice(0, +S.len));

  // ---------- practice ----------
  let Q = [], qi = 0, res = [], label = "", answered = false, cur = null, mock = false;
  function show(id) { for (const s of ["courses", "home", "section", "rule", "practice", "results"]) { const el = $("#" + s); if (el) el.hidden = s !== id; } $("#btn-courses").hidden = id === "courses";
    document.querySelectorAll(".stats .pill:not(.pill-btn)").forEach(el => el.hidden = id === "courses"); window.scrollTo({ top: 0 }); }

  // ---------- courses ----------
  function boot(id) {
    C = COURSES[id]; FLOORS = C.floors; NF = FLOORS.length; ITEMS = itemsOf(id); KEY = C.key;
    S = Object.assign({ prog: {}, mode: "choose", len: 10, ru: "on", act: "mix", order: "on", days: [] }, load());
    try { const g = localStorage.getItem("corner-office-order"); if (g === "on" || g === "off") S.order = g; } catch (e) {}
    document.documentElement.dataset.course = id;
    try { localStorage.setItem("corner-office-active", id); } catch (e) {}
    const txt = (sel, v) => { const el = $(sel); if (el) el.textContent = v; };
    txt("#brand-sub", C.name); txt("#hero-eyebrow", C.eyebrow); $("#hero-h1").innerHTML = C.h1; txt("#hero-lead", C.lead);
    txt("#choose-h", "Choose your " + C.unit.toLowerCase()); txt("#mix-sub", "10 sentences from every " + C.unit.toLowerCase() + " you've started");
    txt("#special-title", C.special.title); txt("#special-sub", C.special.sub); $("#special-icon").innerHTML = C.special.icon;
    $("#dial").setAttribute("aria-label", C.unit + " indicator");
    $("#reset-confirm").hidden = true; $("#reset-done").hidden = true; $("#btn-reset").hidden = false;
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
  }

  function start(list, lab, isMock, isGuide) {
    if (!list.length) return; guide = !!isGuide;
    mock = !!isMock; Q = list; qi = 0; res = []; label = lab; show("practice"); renderQ();
  }
  function renderSegs() {
    $("#segs").innerHTML = Q.map((_, i) => `<i class="${i < res.length ? (res[i] ? "ok" : "bad") : i === qi ? "cur" : ""}"></i>`).join("");
    $("#count").textContent = (qi + 1) + "/" + Q.length;
  }
  const optsHtml = opts => `<div class="opts ${opts.some(o => o.length > 34) ? "long" : ""}">${opts.map((o, i) => `<button class="opt" data-i="${i}"><span class="k">${i + 1}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
  function renderQ() {
    answered = false; cur = Q[qi]; renderSegs();
    const it = cur, f = FLOORS[it.floor - 1], head = lab => it.u ? `<div class="card-h"><span class="kind">${esc(it.task)}</span><span class="eyebrow">Exercise ${it.u}.${it.exn} · ${lab}</span></div>`
        : `<div class="card-h"><span class="kind">${lab}</span><span class="eyebrow">${C.unit} ${f.n} · ${f.name}</span></div>`;
    let html = "";
    if (it.kind === "gap" && S.mode === "type" && nGaps(it.s) === 1) {
      html = head("Type the missing word") +
        `<p class="prompt rise">${esc(it.s).replace("___", `<span class="gap" id="gap"><input id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Missing word" size="${Math.max(4, it.a.length)}"></span>`)}</p>
        <div class="type-row"><button class="btn primary" id="btn-check">Check</button><button class="btn" id="btn-hint">Hint</button><span class="hint-txt" id="hint"></span></div>`;
    } else if (it.kind === "gap" || it.kind === "mc") {
      cur.opts = shuffle([it.a, ...it.d]); cur.right = it.a;
      const lab = it.kind === "gap" ? "Choose the missing word" : it.t === "q" ? "The interviewer asks · choose the strongest answer" : it.t === "u" ? "Say it like a leader" : it.t === "h" ? "Headline desk · choose the best headline" : it.t === "p" ? "Prompt lab · choose the best prompt" : it.t === "e" ? "Fix the mistake · choose the correct sentence" : "Multiple choice";
      const pr = it.kind === "gap" ? (() => { let k = 0; return esc(it.s).replace(/___/g, () => `<span class="gap" ${k++ ? "" : 'id="gap"'}>&nbsp;</span>`); })()
        : it.t === "q" ? `<span class="q-line">“${esc(it.s)}”</span>${canSpeak ? `<button class="say-q" id="btn-sayq" aria-label="Hear the question"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H3v6h3l5 4zM16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/></svg>Hear it</button>` : ""}`
        : it.t === "u" ? `<span class="direct"><b>Too direct</b><s>${esc(it.s)}</s></span>How would a leader say it?`
        : it.t === "h" ? `<span class="story"><b>The story</b>${esc(it.s)}</span>Which headline would you run?`
        : it.t === "p" ? `<span class="story"><b>Your goal</b>${esc(it.s)}</span>Which prompt gets the best result?`
        : it.t === "e" ? `<span class="direct"><b>Find the mistake</b><s>${esc(it.s)}</s></span>Which sentence is correct?`
        : esc(it.s);
      html = head(lab) + `<p class="prompt rise">${pr}</p>` + optsHtml(cur.opts);
    } else if (it.kind === "ru") {
      cur.right = fullSentence(it); cur.opts = shuffle([it.a, ...it.d].map(w => noHint(fill(it.s, w))));
      html = head("Translate · choose the right English") + `<p class="prompt rise ru-prompt">${esc(it.ru)}</p>` + optsHtml(cur.opts);
    } else { // order
      const w = words(it); let sh = shuffle(w); for (let k = 0; k < 5 && sh.join(" ") === w.join(" "); k++) sh = shuffle(w);
      cur.pool = sh.map((t, i) => ({ t, i })); cur.built = [];
      html = head("Word order · build the sentence") + (S.ru === "on" ? `<p class="order-ru">${esc(it.ru)}</p>` : "") +
        `<div class="built rise" id="built" aria-live="polite"></div><div class="pool" id="pool"></div>
         <div class="type-row"><button class="btn primary" id="btn-check" disabled>Check</button><button class="btn" id="btn-undo">Undo</button><span class="hint-txt">Tap the words in order</span></div>`;
    }
    $("#card").innerHTML = html + `<div id="fb"></div>`;
    if (it.kind === "gap" && S.mode === "type" && nGaps(it.s) === 1) {
      const inp = $("#ans"); setTimeout(() => inp.focus(), 30);
      let hints = 0;
      $("#btn-check").onclick = () => checkTyped();
      $("#btn-hint").onclick = () => { hints++; const a = it.a; $("#hint").textContent = hints === 1 ? `Starts with “${a[0]}” · ${a.length} letters` : `“${a.slice(0, Math.ceil(a.length / 2))}…”`; inp.focus(); };
    } else if (it.kind === "order") {
      renderOrder();
      $("#btn-check").onclick = () => answered ? next() : checkOrder();
      $("#btn-undo").onclick = () => undoOrder();
    } else {
      document.querySelectorAll(".opt").forEach(b => b.onclick = () => choose(+b.dataset.i));
      const sq = $("#btn-sayq"); if (sq) sq.onclick = () => speak(it.s);
      if (mock && it.t === "q") setTimeout(() => speak(it.s), 250);
    }
  }
  function renderOrder() {
    $("#built").innerHTML = cur.built.length ? cur.built.map((p, k) => `<button class="chip in" data-k="${k}">${esc(p.t)}</button>`).join("") : `<span class="built-ph">Your sentence appears here</span>`;
    $("#pool").innerHTML = cur.pool.map((p, k) => `<button class="chip" data-k="${k}">${esc(p.t)}</button>`).join("");
    $("#built").querySelectorAll(".chip").forEach(b => b.onclick = () => { if (answered) return; cur.pool.push(cur.built.splice(+b.dataset.k, 1)[0]); renderOrder(); });
    $("#pool").querySelectorAll(".chip").forEach(b => b.onclick = () => { if (answered) return; cur.built.push(cur.pool.splice(+b.dataset.k, 1)[0]); renderOrder(); });
    $("#btn-check").disabled = !!cur.pool.length && !answered;
  }
  function undoOrder() { if (answered || !cur.built.length) return; cur.pool.push(cur.built.pop()); renderOrder(); }
  function checkOrder() {
    if (cur.pool.length) { $("#pool").classList.add("shake"); setTimeout(() => $("#pool") && $("#pool").classList.remove("shake"), 400); return; }
    const ok = norm(cur.built.map(p => p.t).join(" ")) === norm(fullSentence(cur));
    $("#built").classList.add(ok ? "ok" : "bad"); if (!ok) $("#built").classList.add("shake");
    $("#pool").hidden = true; $("#btn-undo").hidden = true;
    finish(ok);
  }
  function checkTyped() {
    if (answered) return next();
    const inp = $("#ans"); const v = inp.value;
    if (!norm(v)) { $("#gap").classList.add("shake"); setTimeout(() => $("#gap") && $("#gap").classList.remove("shake"), 400); return; }
    const ok = norm(v) === norm(cur.a);
    $("#gap").innerHTML = ok ? esc(cur.a) : `<s style="opacity:.6">${esc(v)}</s> ${esc(cur.a)}`;
    $("#gap").classList.add(ok ? "ok" : "bad"); if (!ok) $("#gap").classList.add("shake");
    finish(ok);
  }
  function choose(i) {
    if (answered || !cur.opts) return;
    const pick = cur.opts[i], ok = pick === cur.right;
    document.querySelectorAll(".opt").forEach(b => { const o = cur.opts[+b.dataset.i]; b.disabled = true;
      if (o === cur.right) b.classList.add("ok"); else if (+b.dataset.i === i) b.classList.add("bad"); });
    if (cur.kind === "gap") { const p = parts(cur.a); document.querySelectorAll("#card .prompt .gap").forEach((g, k) => { g.textContent = p[Math.min(k, p.length - 1)]; g.classList.add(ok ? "ok" : "bad"); }); }
    if (!ok) document.querySelector(`.opt[data-i="${i}"]`).classList.add("shake");
    finish(ok);
  }
  function finish(ok) {
    answered = true; res.push(ok);
    const p = S.prog[cur.id] || { c: 0, w: 0 }; ok ? p.c++ : p.w++; p.last = ok ? 1 : 0; S.prog[cur.id] = p;
    const today = new Date().toISOString().slice(0, 10); if (!S.days.includes(today)) S.days.push(today); S.days = S.days.slice(-60);
    save(); renderSegs();
    const full = cur.t === "g" ? fillEsc(noHint(cur.s), cur.a, x => `<mark>${x}</mark>`) : `<mark>${esc(cur.a)}</mark>`;
    const praise = ["Correct", "Well done", "Exactly right", "Spot on", "Perfect"][Math.floor(Math.random() * 5)];
    $("#fb").innerHTML = `<div class="fb ${ok ? "ok" : "bad"} rise" role="status">
        <span class="verdict">${ok ? "✓ " + praise : "quhpe".includes(cur.t) ? "✕ Not quite — here is the " + ({ h: "strongest headline", p: "strongest prompt", e: "correct sentence" }[cur.t] || "strongest answer") : (cur.kind === "order" || cur.kind === "ru") ? "✕ Not quite — here is the right sentence" : "✕ Not quite — the answer is “" + esc(cur.a) + "”"}</span>
        <span class="full${"quhpe".includes(cur.t) ? " answer" : ""}">${"quhpe".includes(cur.t) ? esc(cur.a) : full}</span>
        ${S.ru === "on" && cur.kind !== "ru" ? `<span class="ru">${esc(cur.ru)}</span>` : ""}
        <span class="tip"><b>Tip</b><span>${esc(cur.x)}</span></span>
      </div>
      <div class="actions">
        ${canSpeak ? `<button class="btn" id="btn-say"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H3v6h3l5 4zM16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/></svg>Listen</button>` : "<span></span>"}
        <span style="display:flex;gap:10px;align-items:center"><span class="kbd">Enter ↵</span><button class="btn primary" id="btn-next">${qi + 1 < Q.length ? "Next" : "See results"} →</button></span>
      </div>`;
    if (canSpeak) $("#btn-say").onclick = () => speak(fullSentence(cur));
    $("#btn-next").onclick = next; setTimeout(() => $("#btn-next") && $("#btn-next").focus({ preventScroll: true }), 30);
    const tb = $("#btn-check"); if (tb) { tb.hidden = true; const h = $("#btn-hint"); if (h) h.hidden = true; }
  }
  function next() { if (!answered) return; qi++; if (qi < Q.length) renderQ(); else results(); }

  function results() {
    const ok = res.filter(Boolean).length, n = res.length, pct = ok / n;
    const title = pct === 1 ? "Flawless. Doors open." : pct >= 0.8 ? "Strong performance." : pct >= 0.5 ? "Good progress." : "Keep climbing.";
    const misses = Q.filter((_, i) => !res[i]);
    const weak = guide ? [...new Set(misses.map(it => it.u))].sort((a, b) => a - b) : [];
    $("#res").innerHTML = `
      ${guide ? `<div class="g-guide"><span class="eyebrow">Study guide</span>${weak.length ? `<p>Изучите эти юниты — в них были ошибки:</p><div class="g-guide-units">${weak.map(n => `<button class="btn" data-gunit="${n}">Unit ${n} · ${window.GRAMMAR.md(window.GRAMMAR.unit(n).title)}</button>`).join("")}</div>` : `<p>Все ответы верные — переходите к следующему разделу.</p>`}</div>` : ""}
      <span class="eyebrow">${esc(label)}</span>
      <div class="score">${ok}<small> / ${n}</small></div>
      <h2>${title}</h2>
      <p class="muted" style="margin:0;max-width:46ch">${misses.length ? "These sentences go to your review list. Fix them to master the floor." : "Every answer was right. Try the next session or move up a floor."}</p>
      ${misses.length ? `<div class="miss">${misses.map(it => `<div>${it.t === "g" ? fillEsc(it.s, it.a, x => `<b>${x}</b>`) : esc(it.s) + " → <b>" + esc(it.a) + "</b>"}</div>`).join("")}</div>` : ""}
      <div class="res-actions">
        <button class="btn primary" id="btn-again">Next session →</button>
        ${misses.length ? `<button class="btn" id="btn-fix">Fix these ${misses.length}</button>` : ""}
        <button class="btn" id="btn-home">Back to the menu</button>
      </div>`;
    show("results");
    $("#btn-home").onclick = home;
    document.querySelectorAll("[data-gunit]").forEach(b => b.onclick = () => openRule(+b.dataset.gunit));
    $("#btn-again").onclick = () => again();
    if (misses.length) $("#btn-fix").onclick = () => start(shuffle(misses), "Fixing mistakes");
    $("#btn-again").focus({ preventScroll: true });
  }
  let again = () => home();
  let backTo = null; // where "exit" goes from practice: the rule page of the unit we came from
  function unitProg(u) { const it = byUnit(u), m = it.filter(mastered).length; return { m, t: it.length, pct: it.length ? Math.round(m / it.length * 100) : 0 }; }
  function openSection(n) {
    const f = FLOORS[n - 1];
    $("#section-body").innerHTML = window.GRAMMAR.renderSection(f, { unitLabel: C.unit, unitProg });
    $("#section-body").querySelectorAll("[data-unit]").forEach(b => b.onclick = () => openRule(+b.dataset.unit));
    $("#g-sec-mix").onclick = () => { backTo = () => openSection(n); again = () => start(buildPartMix(n), "Additional exercises · " + f.name); again(); };
    $("#g-sec-back").onclick = home;
    show("section");
  }
  function openRule(n) {
    const u = window.GRAMMAR.unit(n), f = FLOORS[u.floor - 1], all = window.GRAMMAR.units.map(x => x.n).sort((a, b) => a - b), nx = all[all.indexOf(n) + 1];
    $("#rule-body").innerHTML = window.GRAMMAR.renderRule(u, { floorName: f.name, canSpeak, next: nx ? window.GRAMMAR.unit(nx) : null,
      done: (un, k) => ITEMS.filter(it => it.u === un && it.exn === k && mastered(it)).length });
    const b = $("#rule-body");
    b.querySelectorAll("[data-say]").forEach(x => x.onclick = () => speak(x.dataset.say));
    b.querySelectorAll("[data-ex]").forEach(x => x.onclick = () => { const k = +x.dataset.ex; backTo = () => openRule(n); again = () => start(buildExercise(n, k), "Exercise " + n + "." + k); again(); });
    $("#g-practice").onclick = () => { backTo = () => openRule(n); again = () => start(buildUnit(n), "Unit " + n + " · practice"); again(); };
    if (nx) $("#g-next").onclick = () => openRule(nx);
    $("#g-back").onclick = () => openSection(u.floor);
    show("rule");
  }
  function home() { if (backTo && C.units) { const b = backTo; backTo = null; return b(); } renderHome(); show("home"); }

  // ---------- wiring ----------
  $("#floors").addEventListener("click", e => { const b = e.target.closest(".floor"); if (!b) return; const n = +b.dataset.floor;
    if (C.units) return openSection(n);
    again = () => start(buildFloor(n), C.unit + " " + n + " · " + FLOORS[n - 1].name); again(); });
  $("#btn-mix").onclick = () => { again = () => start(buildMix(), "Mixed interview"); again(); };
  $("#btn-special").onclick = () => { if (C.special.kind === "guide") { backTo = null; again = () => start(buildGuide(), "Study guide test", false, true); return again(); }
    again = C.special.kind === "mock" ? () => start(buildMock(), "Mock interview", true) : () => start(buildType({ headline: "h", prompt: "p", fix: "e" }[C.special.kind] || "u"), C.special.title); again(); };
  $("#btn-review").onclick = () => { again = () => { const l = buildReview(); l.length ? start(l, "Review mistakes") : home(); }; again(); };
  $("#btn-exit").onclick = home;
  for (const [id, key] of [["#set-act", "act"], ["#set-order", "order"], ["#set-mode", "mode"], ["#set-len", "len"], ["#set-ru", "ru"]])
    $(id).addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; S[key] = key === "len" ? +b.dataset.v : b.dataset.v; if (S.order === "off" && S.act === "order") S.act = "mix"; if (key === "order") { try { localStorage.setItem("corner-office-order", S.order); } catch (e) {} } save(); renderHome(); });
  document.addEventListener("keydown", e => {
    if (!$("#courses").hidden) return;
    if ($("#practice").hidden) { if (e.key === "Escape" && !$("#results").hidden) home(); return; }
    if (e.key === "Escape") return home();
    if (e.key === "Enter") { e.preventDefault(); if (answered) return next(); if ($("#ans")) checkTyped(); else if (cur && cur.kind === "order") checkOrder(); return; }
    if (e.key === "Backspace" && cur && cur.kind === "order" && !answered) { e.preventDefault(); return undoOrder(); }
    if (!answered && /^[1-4]$/.test(e.key) && !$("#ans")) choose(+e.key - 1);
  });
  try { speechSynthesis && speechSynthesis.getVoices(); } catch (e) {}
  $("#btn-reset").onclick = () => { $("#reset-name").textContent = C.name; $("#reset-confirm").hidden = false; $("#btn-reset").hidden = true; $("#reset-done").hidden = true; $("#btn-reset-cancel").focus(); };
  $("#btn-reset-cancel").onclick = () => { $("#reset-confirm").hidden = true; $("#btn-reset").hidden = false; };
  $("#btn-reset-yes").onclick = () => {
    S.prog = {}; S.days = []; save();
    $("#reset-confirm").hidden = true; $("#btn-reset").hidden = false; renderHome(); $("#reset-done").hidden = false;
  };
  $("#btn-courses").onclick = () => { if (location.hash === "#courses") route(); else location.hash = "courses"; };
  window.addEventListener("hashchange", route);
  // First visit: the chooser. Returning visitor with no link: the course they used last.
  (() => { let last = null; try { last = localStorage.getItem("corner-office-active"); } catch (e) {}
    if (!location.hash && COURSES[last]) boot(last); else route(); })();
})();
