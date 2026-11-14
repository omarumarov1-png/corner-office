# Corner Office

English for work in one app, with two courses to choose from:

- **Job Interview**: 6 stages, from your first hello to accepting the offer (A1 → C1). 387 sentences and a spoken **mock interview**.
- **Business English**: 8 units that follow a working day, from first meetings to boardroom dinners (B1 → C1). 338 sentences and **Say it like a leader** rewrites.

Every sentence can be practised four ways: missing word (choose or type), multiple choice, word order, and translate (Russian → English). Each answer shows a Russian translation, a short tip and an audio button.

**Open:** https://omarumarov1-png.github.io/corner-office/
Direct links to a course: `#interview` or `#business` at the end of the address.

Progress is saved in the browser (separately for each course). No accounts, no tracking, no build step: plain HTML, CSS and JavaScript.

## Files

- `index.html`, `app.js`: the app.
- `courses.js`: course setup (stages/units, texts, special mode).
- `i1–i6.js`, `b1–b8.js`: sentences. Row format: `[type, text, answer, [3 wrong options], russian, tip]`, with type `g` (missing word, `___` in the text), `m` (multiple choice), `q` (interviewer question → best answer) or `u` (too-direct sentence → leader-style version).
- `source/`: the scripts that assembled the courses from the original sentence bank (see `source/README.md`).

To add sentences, append rows to the right `i*.js` / `b*.js` file and keep exactly 3 wrong options per row.
