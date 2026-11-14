# "Reset progress" for the current course: engine wiring (patch_unite.py) + button/confirm markup and CSS (build_unite.py).
D = '/Users/omar/.claude/jobs/dfef7de3/tmp/iv/src/'
p = D + 'patch_unite.py'; s = open(p).read()
if 'btn-reset-yes' not in s:
    a = "os.makedirs(D + 'unite', exist_ok=True)"
    assert s.count(a) == 1
    s = s.replace(a, '''# reset progress for the current course (in-page confirmation; settings are kept)
sub('$("#dial").setAttribute("aria-label", C.unit + " indicator");',
    '$("#dial").setAttribute("aria-label", C.unit + " indicator");\\n    $("#reset-confirm").hidden = true; $("#reset-done").hidden = true; $("#btn-reset").hidden = false;')
sub('  $("#btn-courses").onclick =', \'\'\'  $("#btn-reset").onclick = () => { $("#reset-name").textContent = C.name; $("#reset-confirm").hidden = false; $("#btn-reset").hidden = true; $("#reset-done").hidden = true; $("#btn-reset-cancel").focus(); };
  $("#btn-reset-cancel").onclick = () => { $("#reset-confirm").hidden = true; $("#btn-reset").hidden = false; };
  $("#btn-reset-yes").onclick = () => {
    S.prog = {}; S.days = []; save();
    $("#reset-confirm").hidden = true; $("#btn-reset").hidden = false; renderHome(); $("#reset-done").hidden = false;
  };
  $("#btn-courses").onclick =\'\'\')
''' + a)
    open(p, 'w').write(s)
p = D + 'build_unite.py'; s = open(p).read()
if 'id="btn-reset"' not in s:
    a = "open(OUT + 'index.html', 'w').write(h)"
    assert s.count(a) == 1
    s = s.replace(a, '''sub('<p class="foot">Keys:', \'\'\'<div class="reset-row">
      <button class="btn" id="btn-reset">Reset progress</button>
      <div class="reset-confirm" id="reset-confirm" role="alertdialog" aria-live="polite" hidden><span>Reset all progress in <b id="reset-name"></b>? Your settings stay. This can't be undone.</span><span class="reset-actions"><button class="btn danger" id="btn-reset-yes">Yes, reset</button><button class="btn" id="btn-reset-cancel">Cancel</button></span></div>
      <span class="reset-done" id="reset-done" role="status" hidden>✓ Progress reset. Start again from stage 1.</span>
    </div>
    <p class="foot">Keys:\'\'\')
sub('</style>', \'\'\'.reset-row{display:flex; flex-wrap:wrap; gap:10px; align-items:center; justify-content:center}
.reset-confirm{display:flex; flex-wrap:wrap; gap:10px 14px; align-items:center; justify-content:center; text-align:center; border:1px solid var(--bad); background:var(--bad-bg); border-radius:14px; padding:12px 16px; font-size:14px; max-width:520px}
.reset-actions{display:flex; gap:8px}
.btn.danger{background:var(--bad); border-color:var(--bad); color:var(--bg); font-weight:700}
.btn.danger:hover{filter:brightness(1.08)}
.reset-done{color:var(--ok); font-size:14px; font-weight:600}
</style>\'\'\')
''' + a)
    open(p, 'w').write(s)
print('ok')
