# Corner Office (business) + Hired (interview): build source

- `app/d1–d6.js` – original sentence bank (first single-course version).
- `src/new-interview.js`, `src/new-business.js` – new rows per floor/unit.
- `src/assemble.js` – sorts old + new rows into the two courses, validates, writes `build/<course>/f*.js`.
- `src/patch_engine.py` – turns `app/app.js` into the course-driven engine (`engine/app.js`).
- `src/build_pages.py` – makes each course page from the template `app/index.html`.
- `src/export_local.py` – writes these offline copies.

Paths in the scripts point at the original build folder; copy this folder there (or edit `D = ...`) before rebuilding.

- `src/patch_unite.py` + `src/build_unite.py` – the united app (course chooser, both courses) → `unite/site/`; `src/export_unite.py` writes `~/corner-office/app/`.
