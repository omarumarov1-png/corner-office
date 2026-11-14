# Corner Office

English for work in one app, with five courses to choose from:

- **Job Interview**: 6 stages, from your first hello to accepting the offer (A1 → C1). 387 sentences and a spoken **mock interview**.
- **Business English**: 8 units that follow a working day, from first meetings to boardroom dinners (B1 → C1). 338 sentences and **Say it like a leader** rewrites.
- **Journalism**: 8 stages from newsroom basics to features and broadcast, with a deep focus on sports journalism (A2 → C1). 346 sentences and the **Headline desk**. All teams, players and events are fictional.
- **Tech & Vibe Coding**: 8 stages from everyday tech English to Git, debugging and shipping software with an AI assistant (A2 → C1). 404 sentences and the **Prompt lab**.
- **IT Student English**: 6 stages following the IT side of the *Breaking Through* course book, Part 1 (A2 → B1): university and digital jobs, your digital day, tech news, skills and trends, the internship interview. 306 sentences and **Fix the mistake**.

Every sentence can be practised four ways: missing word (choose or type), multiple choice, word order, and translate (Russian → English). Each answer shows a Russian translation, a short tip and an audio button (the device's own British-English text-to-speech voice).

Settings: activity, **word order on/off** (one switch for all courses, for shorter sessions), typed or chosen missing words, session length, Russian help. **Reset progress** clears the current course's progress after a confirmation; settings are kept.

**Open:** https://omarumarov1-png.github.io/corner-office/
Direct links to a course: `#interview`, `#business`, `#journalism`, `#tech` or `#itstudent` at the end of the address.

Progress is saved in the browser (separately for each course). No accounts, no tracking, no build step: plain HTML, CSS and JavaScript.

## Files

- `index.html`, `app.js`: the app.
- `courses.js`: course setup (stages/units, texts, special mode).
- `i1–i6.js`, `b1–b8.js`, `j1–j8.js`, `t1–t8.js`, `s1–s6.js`: sentences. Row format: `[type, text, answer, [3 wrong options], russian, tip]`, with type `g` (missing word, `___` in the text), `m` (multiple choice), `q` (interviewer question → best answer), `u` (too-direct sentence → leader-style version), `h` (news story → best headline), `p` (goal → best AI prompt) or `e` (sentence with a mistake → corrected sentence).
- `source/`: the scripts that assembled the courses (see `source/README.md`).

To add sentences, append rows to the right file and keep exactly 3 wrong options per row.
