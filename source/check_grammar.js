// Validate the grammar course: node source/check_grammar.js
// Checks every unit: rule sections, exercises, each row (gap present, 3 distinct distractors, answer not among them, Russian + tip).
global.window = {};
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
require(path.join(root, "grammar.js")); fs.readdirSync(root).filter(f => /^gr\d+b?\.js$/.test(f)).sort().forEach(f => require(path.join(root, f)));
fs.readdirSync(root).filter(f => /^grx\d+\.js$/.test(f)).sort().forEach(f => require(path.join(root, f)));
const U = window.GRAMMAR.units, errs = [], seenN = new Set(), seenQ = new Set();
// Additional exercises are checked like unit exercises: wrap each one as a pseudo-unit after the real units.
const X = (window.GRAMMAR.extraList ? window.GRAMMAR.extraList() : []);
let items = 0, minPer = 1e9, maxPer = 0;
for (const u of U) {
  const where = "Unit " + u.n;
  if (seenN.has(u.n)) errs.push(where + ": duplicate unit number"); seenN.add(u.n);
  if (!u.title || !u.floor || !u.cefr) errs.push(where + ": missing title/floor/cefr");
  if (!u.rule || !u.rule.sections || u.rule.sections.length < 2) errs.push(where + ": rule needs at least 2 sections");
  let per = 0;
  u.ex.forEach((e, k) => {
    if (!e.task) errs.push(where + "." + (k + 1) + ": no task");
    e.items.forEach((r, i) => {
      const w = where + "." + (k + 1) + " #" + (i + 1);
      if (r.length !== 6) return errs.push(w + ": row must have 6 fields");
      const [t, s, a, d, ru, tip] = r;
      if (!"ge".includes(t)) errs.push(w + ": type must be g or e");
      const gaps = (s.match(/___/g) || []).length, aparts = a.split(/\s*…\s*/).length;
      if (t === "g" && (gaps < 1 || gaps > 2 || (gaps === 2 && aparts !== 2))) errs.push(w + ": gaps and answer parts must match (" + gaps + " gaps, " + aparts + " parts)");
      if (t === "g" && gaps === 2) d.forEach(x => { if (x.split(/\s*…\s*/).length !== 2) errs.push(w + ": distractor needs 2 parts: " + x); });
      if (!Array.isArray(d) || d.length !== 3) errs.push(w + ": needs 3 distractors");
      const all = [a, ...d].map(x => x.trim().toLowerCase());
      if (new Set(all).size !== 4) errs.push(w + ": answer and distractors must all differ: " + all.join(" | "));
      if (!ru || !tip) errs.push(w + ": missing Russian or tip");
      const key = (t === "g" ? s.replace("___", a) : a).toLowerCase();
      if (seenQ.has(key)) errs.push(w + ": duplicate sentence: " + key); seenQ.add(key);
      per++; items++;
    });
  });
  minPer = Math.min(minPer, per); maxPer = Math.max(maxPer, per);
}
const unitItems = items; let xItems = 0;
for (const x of X) {
  const where = "Additional " + x.xn;
  if (!x.task || !x.units || !x.units.length) errs.push(where + ": needs task and units");
  (x.units || []).forEach(n => { const u = U.find(v => v.n === n); if (!u) errs.push(where + ": no unit " + n); else if (u.floor !== x.floor) errs.push(where + ": unit " + n + " is not in part " + x.floor); });
  if (x.items.length < 8) errs.push(where + ": fewer than 8 items");
  x.items.forEach((r, i) => {
    const w = where + " #" + (i + 1);
    if (r.length !== 6) return errs.push(w + ": row must have 6 fields");
    const [t, s, a, d, ru, tip] = r;
    if (!"ge".includes(t)) errs.push(w + ": type must be g or e");
    const gaps = (s.match(/___/g) || []).length, aparts = a.split(/\s*…\s*/).length;
    if (t === "g" && (gaps < 1 || gaps > 2 || (gaps === 2 && aparts !== 2))) errs.push(w + ": gaps and answer parts must match");
    if (t === "g" && gaps === 2) d.forEach(z => { if (z.split(/\s*…\s*/).length !== 2) errs.push(w + ": distractor needs 2 parts: " + z); });
    if (!Array.isArray(d) || d.length !== 3) errs.push(w + ": needs 3 distractors");
    const all = [a, ...d].map(z => z.trim().toLowerCase());
    if (new Set(all).size !== 4) errs.push(w + ": answer and distractors must all differ: " + all.join(" | "));
    if (!ru || !tip) errs.push(w + ": missing Russian or tip");
    const key = (t === "g" ? s.replace("___", a) : a).toLowerCase();
    if (seenQ.has(key)) errs.push(w + ": duplicate sentence: " + key); seenQ.add(key);
    xItems++;
  });
}
console.log("units", U.length, "| items", unitItems, "| per unit min", minPer, "max", maxPer, "| additional exercises", X.length, "| their items", xItems);
if (errs.length) { console.log(errs.join("\n")); process.exit(1); } else console.log("OK");
