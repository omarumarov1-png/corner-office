// Validate the journalism rows and write build/journalism/f1..f8.js (same format as the other courses).
const fs = require("fs"), path = require("path");
const D = path.join(__dirname, ".."), J1 = require("./new-tech.js"), J2 = require("./new-tech2.js"), J3 = require("./new-tech3.js");
const J = {}; for (const k of Object.keys(J1)) J[k] = [...J1[k], ...(J2[k] || []), ...(J3[k] || [])];
const dir = path.join(D, "build", "tech"); fs.mkdirSync(dir, { recursive: true });
const errs = [], seen = new Set(); let total = 0;
for (const [fl, rows] of Object.entries(J)) {
  // keep the floor's natural order inside each type: missing words first, then choice, then headline desk
  const items = [...rows.filter(r => r[0] === "g"), ...rows.filter(r => r[0] === "m"), ...rows.filter(r => r[0] === "p")];
  items.forEach((r, i) => {
    const [t, s, a, d, ru, x] = r, id = "tech " + fl + "#" + (i + 1);
    if (!["g", "m", "p"].includes(t)) errs.push(id + " type");
    if (t === "g" && (s.match(/___/g) || []).length !== 1) errs.push(id + " gap: " + s);
    if (!Array.isArray(d) || d.length !== 3) errs.push(id + " wrong count");
    if (d.some(z => z.toLowerCase() === a.toLowerCase())) errs.push(id + " answer in wrong: " + s);
    if (new Set(d.map(z => z.toLowerCase())).size !== 3) errs.push(id + " dup wrong");
    if (!ru || !x) errs.push(id + " ru/tip");
    const k = (s + "|" + a).toLowerCase(); if (seen.has(k)) errs.push(id + " dup: " + s); seen.add(k);
  });
  total += items.length;
  console.log("stage", fl, items.length, JSON.stringify(items.reduce((m, r) => (m[r[0]] = (m[r[0]] || 0) + 1, m), {})));
  fs.writeFileSync(path.join(dir, "f" + fl + ".js"), "window.BANK = window.BANK || [];\nwindow.BANK.push(" + JSON.stringify({ floor: +fl, items }).replace(/\],\[/g, "],\n[") + ");\n");
}
console.log("TOTAL", total); console.log(errs.length ? "ERRORS:\n" + errs.join("\n") : "checks OK");
