// Corner Office — practice engine. Data rows come from d1–d6.js: [type, text, answer, wrong[3], russian, tip].
(function () {
  "use strict";
  const FLOORS = [
    { n: 1, name: "Lobby", cefr: "A1–A2", desc: "Greetings, introductions, your job in simple words" },
    { n: 2, name: "Reception", cefr: "A2", desc: "Work history, shifts, documents, survival phrases" },
    { n: 3, name: "Interview Room", cefr: "B1", desc: "The core interview questions and STAR stories" },
    { n: 4, name: "Meeting Room", cefr: "B1+", desc: "Small talk, presenting, leading a meeting" },
    { n: 5, name: "Negotiation Table", cefr: "B2", desc: "Price and terms, pushing back, complaints" },
    { n: 6, name: "Boardroom", cefr: "C1", desc: "Idioms, diplomacy, reporting up, salary talks" },
  ];

  // ---------- data ----------
  const ITEMS = [];
  (window.BANK || []).sort((a, b) => a.floor - b.floor).forEach(f => f.items.forEach((r, i) => {
    ITEMS.push({ id: f.floor + "-" + (i + 1), floor: f.floor, idx: i, t: r[0], s: r[1], a: r[2], d: r[3], ru: r[4], x: r[5] });
  }));
  const byFloor = n => ITEMS.filter(it => it.floor === n);

  // ---------- storage (safe) ----------
  const KEY = "corner-office-v1";
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
  let S = Object.assign({ prog: {}, mode: "choose", len: 10, ru: "on", act: "mix", days: [], }, load());
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
  const fullSentence = it => it.t === "g" ? it.s.replace("___", it.a) : it.a;

  // ---------- dial ----------
  function drawDial(floor) {
    const cx = 130, cy = 140, r = 100;
    const ang = n => Math.PI - (n - 1) * (Math.PI / 5); // floor 1 at left, 6 at right
    let g = `<defs><linearGradient id="br" x1="0" x2="1"><stop offset="0" stop-color="var(--brass)"/><stop offset="1" stop-color="var(--brass-hi)"/></linearGradient></defs>`;
    g += `<path d="M ${cx - r - 14} ${cy} A ${r + 14} ${r + 14} 0 0 1 ${cx + r + 14} ${cy}" fill="none" stroke="var(--line)" stroke-width="1"/>`;
    g += `<path d="M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}" fill="none" stroke="url(#br)" stroke-width="2"/>`;
    for (let k = 0; k <= 25; k++) { const a = Math.PI - k * Math.PI / 25, l = k % 5 ? 6 : 12;
      g += `<line x1="${cx + Math.cos(a) * r}" y1="${cy - Math.sin(a) * r}" x2="${cx + Math.cos(a) * (r - l)}" y2="${cy - Math.sin(a) * (r - l)}" stroke="var(--brass)" stroke-width="${k % 5 ? 1 : 1.6}"/>`; }
    for (let n = 1; n <= 6; n++) { const a = ang(n), x = cx + Math.cos(a) * (r - 28), y = cy - Math.sin(a) * (r - 28);
      g += `<text x="${x}" y="${y + 6}" text-anchor="middle" font-family="Bodoni Moda, Georgia, serif" font-size="${n === floor ? 21 : 16}" font-weight="700" fill="${n === floor ? "var(--brass-hi)" : "var(--muted)"}">${n}</text>`; }
    const rot = (5 - (floor - 1)) * 36 * -1; // needle rest points left (floor 1), rotate clockwise
    g += `<g class="needle" style="transform:rotate(${(floor - 1) * 36}deg)"><line x1="${cx}" y1="${cy}" x2="${cx - r + 40}" y2="${cy}" stroke="var(--brass-hi)" stroke-width="3" stroke-linecap="round"/><path d="M ${cx - r + 34} ${cy} l 10 -5 v 10 z" fill="var(--brass-hi)"/></g>`;
    g += `<circle cx="${cx}" cy="${cy}" r="11" fill="var(--panel)" stroke="var(--brass)" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="4" fill="var(--brass-hi)"/>`;
    g += `<text x="${cx}" y="${cy + 26}" text-anchor="middle" font-family="DM Mono, monospace" font-size="10" letter-spacing="2.5" fill="var(--muted)">FLOOR ${floor} · ${FLOORS[floor - 1].name.toUpperCase()}</text>`;
    const svg = $("#dial"); svg.setAttribute("viewBox", "0 0 260 172"); svg.innerHTML = g;
    void rot;
  }

  // ---------- home ----------
  function nextFloor() {
    for (const f of FLOORS) { const items = byFloor(f.n); const m = items.filter(mastered).length; if (m / items.length < 0.7) return f.n; }
    return 6;
  }
  function renderHome() {
    const nf = nextFloor();
    $("#st-total").textContent = ITEMS.length;
    $("#st-mastered").textContent = ITEMS.filter(mastered).length;
    $("#st-days").textContent = streak();
    $("#floor-hint").textContent = "Recommended: floor " + nf;
    drawDial(nf);
    $("#floors").innerHTML = FLOORS.map(f => {
      const items = byFloor(f.n), m = items.filter(mastered).length, pct = Math.round(m / items.length * 100);
      return `<button class="floor ${f.n === nf ? "next" : ""}" data-floor="${f.n}" aria-label="Floor ${f.n}, ${f.name}">
        <span class="lift-btn">${f.n}</span>
        <span class="meta"><span class="name">${f.name}</span><span class="desc" style="display:block">${f.desc}</span><span class="bar"><i style="width:${pct}%"></i></span></span>
        <span class="right">${f.n === nf ? '<span class="tag-next">Next</span>' : ""}<span class="cefr">${f.cefr}</span><span>${m}/${items.length}</span></span>
      </button>`;
    }).join("");
    const nMiss = ITEMS.filter(missed).length;
    $("#review-sub").textContent = nMiss ? nMiss + " sentence" + (nMiss > 1 ? "s" : "") + " to fix" : "Nothing to review yet";
    $("#btn-review").disabled = !nMiss;
    for (const [id, key] of [["#set-act", "act"], ["#set-mode", "mode"], ["#set-len", "len"], ["#set-ru", "ru"]])
      document.querySelectorAll(id + " button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.v) === String(S[key])));
  }

  // ---------- session building ----------
  // Activities: gap (missing word), mc (multiple choice), order (word order), ru (translate: Russian → right English).
  const ACTS = { gap: "Missing word", mc: "Multiple choice", order: "Word order", ru: "Translate" };
  const words = it => fullSentence(it).split(" ");
  function kindsFor(it) {
    if (it.t === "m") return ["mc"];
    const k = ["gap", "ru"]; if (words(it).length >= 4 && words(it).length <= 14) k.push("order"); return k;
  }
  const fits = it => S.act === "mix" || kindsFor(it).includes(S.act);
  // Mix: rotate through the activities an item allows; missing word comes up most often.
  function assign(list) {
    let r = Math.floor(Math.random() * 4);
    return list.map(it => {
      let kind = S.act;
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
  const buildReview = () => assign(shuffle(ITEMS.filter(it => missed(it) && fits(it))).slice(0, +S.len));

  // ---------- practice ----------
  let Q = [], qi = 0, res = [], label = "", answered = false, cur = null;
  function show(id) { for (const s of ["home", "practice", "results"]) $("#" + s).hidden = s !== id; window.scrollTo({ top: 0 }); }

  function start(list, lab) {
    if (!list.length) return;
    Q = list; qi = 0; res = []; label = lab; show("practice"); renderQ();
  }
  function renderSegs() {
    $("#segs").innerHTML = Q.map((_, i) => `<i class="${i < res.length ? (res[i] ? "ok" : "bad") : i === qi ? "cur" : ""}"></i>`).join("");
    $("#count").textContent = (qi + 1) + "/" + Q.length;
  }
  const optsHtml = opts => `<div class="opts ${opts.some(o => o.length > 34) ? "long" : ""}">${opts.map((o, i) => `<button class="opt" data-i="${i}"><span class="k">${i + 1}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
  function renderQ() {
    answered = false; cur = Q[qi]; renderSegs();
    const it = cur, f = FLOORS[it.floor - 1], head = lab => `<div class="card-h"><span class="kind">${lab}</span><span class="eyebrow">Floor ${f.n} · ${f.name}</span></div>`;
    let html = "";
    if (it.kind === "gap" && S.mode === "type") {
      html = head("Type the missing word") +
        `<p class="prompt rise">${esc(it.s).replace("___", `<span class="gap" id="gap"><input id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Missing word" size="${Math.max(4, it.a.length)}"></span>`)}</p>
        <div class="type-row"><button class="btn primary" id="btn-check">Check</button><button class="btn" id="btn-hint">Hint</button><span class="hint-txt" id="hint"></span></div>`;
    } else if (it.kind === "gap" || it.kind === "mc") {
      cur.opts = shuffle([it.a, ...it.d]); cur.right = it.a;
      html = head(it.kind === "gap" ? "Choose the missing word" : "Multiple choice") +
        `<p class="prompt rise">${it.kind === "gap" ? esc(it.s).replace("___", `<span class="gap" id="gap">&nbsp;</span>`) : esc(it.s)}</p>` + optsHtml(cur.opts);
    } else if (it.kind === "ru") {
      cur.right = fullSentence(it); cur.opts = shuffle([it.a, ...it.d].map(w => it.s.replace("___", w)));
      html = head("Translate · choose the right English") + `<p class="prompt rise ru-prompt">${esc(it.ru)}</p>` + optsHtml(cur.opts);
    } else { // order
      const w = words(it); let sh = shuffle(w); for (let k = 0; k < 5 && sh.join(" ") === w.join(" "); k++) sh = shuffle(w);
      cur.pool = sh.map((t, i) => ({ t, i })); cur.built = [];
      html = head("Word order · build the sentence") + (S.ru === "on" ? `<p class="order-ru">${esc(it.ru)}</p>` : "") +
        `<div class="built rise" id="built" aria-live="polite"></div><div class="pool" id="pool"></div>
         <div class="type-row"><button class="btn primary" id="btn-check" disabled>Check</button><button class="btn" id="btn-undo">Undo</button><span class="hint-txt">Tap the words in order</span></div>`;
    }
    $("#card").innerHTML = html + `<div id="fb"></div>`;
    if (it.kind === "gap" && S.mode === "type") {
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
    if (cur.kind === "gap") { const g = $("#gap"); g.textContent = cur.a; g.classList.add(ok ? "ok" : "bad"); }
    if (!ok) document.querySelector(`.opt[data-i="${i}"]`).classList.add("shake");
    finish(ok);
  }
  function finish(ok) {
    answered = true; res.push(ok);
    const p = S.prog[cur.id] || { c: 0, w: 0 }; ok ? p.c++ : p.w++; p.last = ok ? 1 : 0; S.prog[cur.id] = p;
    const today = new Date().toISOString().slice(0, 10); if (!S.days.includes(today)) S.days.push(today); S.days = S.days.slice(-60);
    save(); renderSegs();
    const full = cur.t === "g" ? esc(cur.s).replace("___", `<mark>${esc(cur.a)}</mark>`) : `<mark>${esc(cur.a)}</mark>`;
    const praise = ["Correct", "Well done", "Exactly right", "Spot on", "Perfect"][Math.floor(Math.random() * 5)];
    $("#fb").innerHTML = `<div class="fb ${ok ? "ok" : "bad"} rise" role="status">
        <span class="verdict">${ok ? "✓ " + praise : (cur.kind === "order" || cur.kind === "ru") ? "✕ Not quite — here is the right sentence" : "✕ Not quite — the answer is “" + esc(cur.a) + "”"}</span>
        <span class="full">${full}</span>
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
    $("#res").innerHTML = `
      <span class="eyebrow">${esc(label)}</span>
      <div class="score">${ok}<small> / ${n}</small></div>
      <h2>${title}</h2>
      <p class="muted" style="margin:0;max-width:46ch">${misses.length ? "These sentences go to your review list. Fix them to master the floor." : "Every answer was right. Try the next session or move up a floor."}</p>
      ${misses.length ? `<div class="miss">${misses.map(it => `<div>${it.t === "g" ? esc(it.s).replace("___", `<b>${esc(it.a)}</b>`) : esc(it.s) + " → <b>" + esc(it.a) + "</b>"}</div>`).join("")}</div>` : ""}
      <div class="res-actions">
        <button class="btn primary" id="btn-again">Next session →</button>
        ${misses.length ? `<button class="btn" id="btn-fix">Fix these ${misses.length}</button>` : ""}
        <button class="btn" id="btn-home">Back to the menu</button>
      </div>`;
    show("results");
    $("#btn-home").onclick = home;
    $("#btn-again").onclick = () => again();
    if (misses.length) $("#btn-fix").onclick = () => start(shuffle(misses), "Fixing mistakes");
    $("#btn-again").focus({ preventScroll: true });
  }
  let again = () => home();
  function home() { renderHome(); show("home"); }

  // ---------- wiring ----------
  $("#floors").addEventListener("click", e => { const b = e.target.closest(".floor"); if (!b) return; const n = +b.dataset.floor;
    again = () => start(buildFloor(n), "Floor " + n + " · " + FLOORS[n - 1].name); again(); });
  $("#btn-mix").onclick = () => { again = () => start(buildMix(), "Mixed interview"); again(); };
  $("#btn-review").onclick = () => { again = () => { const l = buildReview(); l.length ? start(l, "Review mistakes") : home(); }; again(); };
  $("#btn-exit").onclick = home;
  for (const [id, key] of [["#set-act", "act"], ["#set-mode", "mode"], ["#set-len", "len"], ["#set-ru", "ru"]])
    $(id).addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; S[key] = key === "len" ? +b.dataset.v : b.dataset.v; save(); renderHome(); });
  document.addEventListener("keydown", e => {
    if ($("#practice").hidden) { if (e.key === "Escape" && !$("#results").hidden) home(); return; }
    if (e.key === "Escape") return home();
    if (e.key === "Enter") { e.preventDefault(); if (answered) return next(); if ($("#ans")) checkTyped(); else if (cur && cur.kind === "order") checkOrder(); return; }
    if (e.key === "Backspace" && cur && cur.kind === "order" && !answered) { e.preventDefault(); return undoOrder(); }
    if (!answered && /^[1-4]$/.test(e.key) && !$("#ans")) choose(+e.key - 1);
  });
  try { speechSynthesis && speechSynthesis.getVoices(); } catch (e) {}
  renderHome();
})();
