// Build the two courses' floor data files from the old bank (d1–d6) + new rows.
// Output: build/interview/f1..f6.js and build/business/f1..f8.js, each `window.BANK.push({floor, items})`.
const fs = require("fs"), path = require("path");
const D = path.join(__dirname, "..");
global.window = {};
for (const n of [1, 2, 3, 4, 5, 6]) require(D + "/app/d" + n + ".js");
const old = {}; for (const f of window.BANK) f.items.forEach((r, i) => old[f.floor + "." + (i + 1)] = r);
const take = ids => ids.map(id => { if (!old[id]) throw new Error("missing " + id); used.add(id); return old[id]; });
const used = new Set();
const rng = (fl, a, b) => Array.from({ length: b - a + 1 }, (_, k) => fl + "." + (a + k));
const NI = require("./new-interview.js"), NB = require("./new-business.js");

const interview = {
  1: take(rng(1, 1, 81)),
  2: take(rng(2, 1, 80)),
  3: [...take(rng(3, 1, 79)), ...take(["4.73"]), ...NI[3]],
  4: [...NI[4].filter(r => r[0] === "g"), ...take(rng(5, 28, 38)), ...NI[4].filter(r => r[0] !== "g"), ...take(["5.53", "5.74"])],
  5: [...NI[5].filter(r => r[0] === "g"), ...NI[5].filter(r => r[0] === "q"), ...take(["5.48", "5.60"]), ...NI[5].filter(r => r[0] === "m")],
  6: [...NI[6].filter(r => r[0] === "g"), ...take(rng(6, 26, 34)), ...NI[6].filter(r => r[0] !== "g"), ...take(["6.49", "6.50", "6.58", "6.76"])],
};
const business = {
  1: [...take(["4.1", "4.2", "4.3"]), ...NB[1].filter(r => r[0] === "g"), ...take(["4.45", "4.46", "4.54"]), ...NB[1].filter(r => r[0] !== "g")],
  2: [...take(["4.5", "4.6", "4.12", "4.13", "4.14", "4.15", "4.16", "4.17"]), ...NB[2].filter(r => r[0] === "g"),
      ...take(["4.7", "4.8", "4.10", "4.11", "4.40", "4.61", "4.62", "4.63", "4.64", "4.65", "4.66", "4.67", "4.70", "4.47", "4.49", "4.71", "4.72"]), ...NB[2].filter(r => r[0] !== "g")],
  3: [...take(["4.18", "4.19", "4.20", "4.21", "4.4", "4.22", "4.23", "4.24", "4.25", "4.26", "4.27", "4.28", "4.29", "4.30", "4.31", "4.32", "4.33", "4.34", "4.35", "4.9", "4.68", "4.69", "6.71"]),
      ...NB[3].filter(r => r[0] === "g"),
      ...take(["4.41", "4.42", "4.43", "4.44", "4.50", "4.51", "4.52", "4.53", "4.55", "4.56", "4.59", "4.60", "4.74", "4.75", "4.76", "6.73"]), ...NB[3].filter(r => r[0] !== "g")],
  4: [...take(rng(5, 1, 10)), ...NB[4].filter(r => r[0] === "g"), ...take(["5.39", "5.40", "5.61", "5.62", "5.69", "5.70", "6.70"]),
      ...take(["5.41", "5.44", "5.45", "5.49", "5.50", "5.51", "5.52", "5.57", "5.58", "5.59", "5.71", "5.73", "5.76", "5.77", "5.78", "6.55"]), ...NB[4].filter(r => r[0] !== "g")],
  5: [...take(rng(5, 11, 19)), ...NB[5].filter(r => r[0] === "g"), ...take(["5.68", "6.3", "6.10", "6.11", "6.12", "6.13", "6.38", "6.65", "6.66", "6.68", "6.69"]),
      ...take(["5.42", "5.43", "5.54", "5.55", "6.45", "6.54", "6.60", "6.74"]), ...NB[5].filter(r => r[0] !== "g")],
  6: [...take(["4.36", "4.37", "4.38", "4.39"]), ...take(rng(6, 14, 24)), ...take(["6.25", "6.35", "6.36", "6.37", "6.39", "6.40", "6.62", "6.63", "6.64", "6.67", "6.1", "6.6", "6.7"]),
      ...take(["4.48", "4.57", "4.58", "4.77", "6.46", "6.47", "6.48", "6.51", "6.52", "6.53", "6.56", "6.57", "6.59", "6.61", "6.72", "6.41", "6.42", "6.43", "6.44", "6.75"]), ...NB[6]],
  7: [...take(rng(5, 20, 27)), ...NB[7].filter(r => r[0] === "g"), ...take(["5.63", "5.64", "5.65", "5.66", "5.67", "6.2", "6.4", "6.5", "6.9"]),
      ...take(["5.46", "5.56", "5.47", "5.72", "5.75"]), ...NB[7].filter(r => r[0] !== "g")],
  8: [...NB[8].filter(r => r[0] === "g"), ...take(["6.8"]), ...NB[8].filter(r => r[0] !== "g")],
};
const unused = Object.keys(old).filter(k => !used.has(k));
console.log("old items not placed:", unused.length ? unused.join(" ") : "none");

const errs = [];
for (const [name, course] of [["interview", interview], ["business", business]]) {
  const dir = path.join(D, "build", name); fs.mkdirSync(dir, { recursive: true });
  const seen = new Set(); let total = 0;
  for (const [fl, items] of Object.entries(course)) {
    items.forEach((r, i) => {
      const [t, s, a, d, ru, x] = r, id = name + " " + fl + "#" + (i + 1);
      if (!["g", "m", "q", "u"].includes(t)) errs.push(id + " type");
      if (t === "g" && (s.match(/___/g) || []).length !== 1) errs.push(id + " gap: " + s);
      if (!Array.isArray(d) || d.length !== 3) errs.push(id + " wrong count");
      if (d.some(z => z.toLowerCase() === a.toLowerCase())) errs.push(id + " answer in wrong");
      if (new Set(d.map(z => z.toLowerCase())).size !== 3) errs.push(id + " dup wrong");
      if (!ru || !x) errs.push(id + " ru/tip");
      const k = (s + "|" + a).toLowerCase(); if (seen.has(k)) errs.push(id + " dup: " + s); seen.add(k);
    });
    total += items.length;
    const kinds = items.reduce((m, r) => (m[r[0]] = (m[r[0]] || 0) + 1, m), {});
    console.log(name, "floor", fl, items.length, JSON.stringify(kinds));
    fs.writeFileSync(path.join(dir, "f" + fl + ".js"), "window.BANK = window.BANK || [];\nwindow.BANK.push(" + JSON.stringify({ floor: +fl, items }, null, 0).replace(/\],\[/g, "],\n[") + ");\n");
  }
  console.log(name, "TOTAL", total);
}
console.log(errs.length ? "ERRORS:\n" + errs.join("\n") : "checks OK");
