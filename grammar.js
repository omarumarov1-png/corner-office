// Grammar course layer for Corner Office — works like a classic grammar book, app style.
// A unit = a two-page spread: the rule (sections A, B, C… with examples and tables) + numbered exercises (1.1, 1.2…).
// Data: window.GRAMMAR.units.push({ n, floor, title, cefr, rule: { sections: [{ k, h, p, ex: [], table: [[…]] }], mistakes: [[wrong, right, why]] },
//        ex: [{ task, items: [rows] }] })   rows = [type, text, answer, wrong[3], russian, tip] — same as the other courses.
// The engine (app.js) calls GR.* hooks only when the active course has `units: true`.
(function () {
  "use strict";
  const G = window.GRAMMAR = window.GRAMMAR || { units: [] };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // inline markup in rule text: **bold**, _italic_, [[form]] highlighted form
  const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/(^|[\s(«])_(.+?)_(?=[\s.,;:!?)»]|$)/g, "$1<i>$2</i>").replace(/\[\[(.+?)\]\]/g, '<span class="form">$1</span>');

  // Flatten units into the bank format the engine already reads (one bank entry per exercise, tagged with unit + exercise number).
  G.toBanks = function () {
    const out = [];
    G.units.slice().sort((a, b) => a.n - b.n).forEach(u => u.ex.forEach((e, k) => out.push({ floor: u.floor, unit: u.n, exn: k + 1, task: e.task, items: e.items })));
    return out;
  };
  G.unit = n => G.units.find(u => u.n === n);
  G.unitsOf = floor => G.units.filter(u => u.floor === floor).sort((a, b) => a.n - b.n);

  // ---------- rule page (left page of the spread) ----------
  G.renderRule = function (u, ctx) {
    const sec = u.rule.sections.map(s => `
      <section class="g-sec">
        <div class="g-sec-h"><span class="g-k">${esc(s.k)}</span><h3>${md(s.h)}</h3></div>
        ${s.p ? s.p.split("\n").map(x => `<p>${md(x)}</p>`).join("") : ""}
        ${s.table ? `<div class="g-table-wrap"><table class="g-table">${s.table.map((r, i) => `<tr>${r.map(c => i === 0 && s.thead !== false ? `<th>${md(c)}</th>` : `<td>${md(c)}</td>`).join("")}</tr>`).join("")}</table></div>` : ""}
        ${s.ex && s.ex.length ? `<ul class="g-ex">${s.ex.map(x => `<li><span>${md(x)}</span>${ctx.canSpeak ? `<button class="g-say" data-say="${esc(x.replace(/\*\*|\[\[|\]\]|_/g, "").replace(/\s*\(.*?\)\s*$/, ""))}" aria-label="Listen">▶</button>` : ""}</li>`).join("")}</ul>` : ""}
        ${s.note ? `<p class="g-note">${md(s.note)}</p>` : ""}
      </section>`).join("");
    const mis = u.rule.mistakes && u.rule.mistakes.length ? `
      <section class="g-sec g-mis"><div class="g-sec-h"><span class="g-k">!</span><h3>Типичные ошибки</h3></div>
        <ul>${u.rule.mistakes.map(m => `<li><s>${esc(m[0])}</s><b>${esc(m[1])}</b>${m[2] ? `<span>${md(m[2])}</span>` : ""}</li>`).join("")}</ul></section>` : "";
    const total = u.ex.reduce((s, e) => s + e.items.length, 0);
    return `
      <div class="g-head"><span class="eyebrow">Unit ${u.n} · ${esc(ctx.floorName)} · ${esc(u.cefr)}</span><h2>${md(u.title)}</h2>${u.sub ? `<p class="muted">${md(u.sub)}</p>` : ""}</div>
      ${sec}${mis}
      <div class="g-exlist"><span class="eyebrow">Exercises</span>${u.ex.map((e, k) => `<button class="g-exbtn" data-ex="${k + 1}"><span class="g-exn">${u.n}.${k + 1}</span><span>${md(e.task)}</span><span class="g-exc">${ctx.done(u.n, k + 1)}/${e.items.length}</span></button>`).join("")}</div>
      <div class="res-actions"><button class="btn primary" id="g-practice">Practise unit ${u.n} · ${total} sentences →</button>${ctx.next ? `<button class="btn" id="g-next">Unit ${ctx.next.n}: ${esc(ctx.next.title.replace(/\*\*|\[\[|\]\]/g, ""))} →</button>` : ""}<button class="btn" id="g-back">All units</button></div>`;
  };

  // ---------- section page: the units of one part ----------
  G.renderSection = function (f, ctx) {
    return `
      <div class="g-head"><span class="eyebrow">${esc(ctx.unitLabel)} ${f.n} · ${esc(f.cefr)}</span><h2>${esc(f.name)}</h2><p class="muted">${esc(f.desc)}</p></div>
      <div class="g-units">${G.unitsOf(f.n).map(u => { const p = ctx.unitProg(u.n); return `
        <button class="g-unit" data-unit="${u.n}"><span class="g-un">${u.n}</span><span class="g-ut"><b>${md(u.title)}</b><span class="bar"><i style="width:${p.pct}%"></i></span></span><span class="g-uc">${p.m}/${p.t}</span></button>`; }).join("")}</div>
      <div class="res-actions"><button class="btn primary" id="g-sec-mix">Additional exercises · mixed ${esc(f.short || f.name)} →</button><button class="btn" id="g-sec-back">Back to the menu</button></div>`;
  };
  G.md = md;
})();
