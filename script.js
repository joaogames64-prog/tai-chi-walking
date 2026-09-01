const A = {};
let cur = 1;
const TOTAL = 22;
const Q_STEPS = 16; // visible question count for counter

function showStep(n) {
  document.querySelectorAll('.step').forEach(s => s.classList.add('hidden'));
  const el = document.getElementById('s' + n);
  if (!el) return;
  el.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // counter (only count non-info steps)
  const INFO = [3, 5, 7, 11, 13, 18, 19, 21, 22];
  const qNum = n - INFO.filter(i => i < n).length;
  document.getElementById('step-num').textContent = Math.max(1, Math.min(qNum, Q_STEPS));
  document.getElementById('step-total').textContent = Q_STEPS;
  document.getElementById('btn-back').style.visibility = n > 1 ? 'visible' : 'hidden';

  // progress
  document.getElementById('prog-bar').style.width = ((n - 1) / (TOTAL - 1) * 100) + '%';

  if (n === 18) startLoading();
  if (n === 19) renderProfile();
  if (n === 21) initScratch();
}

function next() { cur++; showStep(cur); }

function goBack() { if (cur > 1) { cur--; showStep(cur); } }

function ans(k, v) { A[k] = v; cur++; showStep(cur); }

// Multi-select
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.mo');
  if (!btn) return;
  const wrap = btn.closest('[id$="-opts"]');
  if (btn.dataset.val === 'none') {
    wrap.querySelectorAll('.mo').forEach(b => b.classList.remove('sel'));
    btn.classList.toggle('sel');
  } else {
    wrap.querySelector('[data-val="none"]')?.classList.remove('sel');
    btn.classList.toggle('sel');
  }
});

function submitMulti(k, id) {
  const sel = [];
  document.querySelectorAll('#' + id + ' .mo.sel').forEach(b => sel.push(b.dataset.val));
  A[k] = sel.length ? sel : ['none'];
  cur++; showStep(cur);
}

// Number input
function numAns(k, id, mn, mx) {
  const inp = document.getElementById(id);
  inp.classList.remove('err');
  document.getElementById(id + '-err')?.remove();
  const v = parseFloat(inp.value);
  if (!inp.value || isNaN(v) || v < mn || v > mx) {
    inp.classList.add('err');
    const e = document.createElement('p');
    e.id = id + '-err'; e.className = 'ierr';
    e.textContent = 'Insira um valor entre ' + mn + ' e ' + mx + '.';
    inp.parentElement.after(e);
    return;
  }
  A[k] = v; cur++; showStep(cur);
}

// Email
function emailAns() {
  const inp = document.getElementById('i-e');
  inp.classList.remove('err');
  document.getElementById('i-e-err')?.remove();
  const v = inp.value.trim();
  if (!v || !v.includes('@') || !v.includes('.')) {
    inp.classList.add('err');
    const e = document.createElement('p');
    e.id = 'i-e-err'; e.className = 'ierr';
    e.textContent = 'Por favor, insira um e-mail válido.';
    inp.after(e);
    return;
  }
  A.email = v; cur++; showStep(cur);
}

// Loading
function startLoading() {
  const steps = [
    { id: 'li1', t: 900 }, { id: 'li2', t: 2000 },
    { id: 'li3', t: 3100 }, { id: 'li4', t: 4000 }
  ];
  const fill = document.getElementById('lb-fill');
  let p = 0;
  const iv = setInterval(() => {
    p = Math.min(p + 1.5, 100);
    fill.style.width = p + '%';
    if (p >= 100) clearInterval(iv);
  }, 60);
  steps.forEach(s => {
    setTimeout(() => {
      const el = document.getElementById(s.id);
      if (el) { el.classList.add('done'); el.querySelector('.lic').textContent = '✓'; }
    }, s.t);
  });
  setTimeout(() => { cur = 19; showStep(19); }, 5500);
}

// Profile
function renderProfile() {
  const h = A.height || 160, w = A.weight || 70;
  const bmi = (w / ((h / 100) ** 2)).toFixed(1);
  document.getElementById('bmi-v').textContent = bmi;
  let cat = 'Normal';
  if (bmi < 18.5) cat = 'Abaixo do peso';
  else if (bmi < 25) cat = 'Normal';
  else if (bmi < 30) cat = 'Sobrepeso';
  else cat = 'Obeso';
  document.getElementById('bmi-c').textContent = cat;
  const em = { low: 'Baixa ⚠️', 'post-lunch': 'Moderada ⚠️', 'before-meals': 'Instável ⚠️', high: 'Alta ✅' };
  const eEl = document.getElementById('e-disp');
  if (eEl) {
    eEl.textContent = em[A.energy] || 'Baixa ⚠️';
    if (A.energy === 'high') { eEl.className = 'psv'; eEl.style.color = '#16a34a'; }
  }
}

// Scratch card
let scratchDone = false;
function initScratch() {
  if (scratchDone) return;
  const cv = document.getElementById('sc-canvas');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, '#b8b8b8'); g.addColorStop(.5, '#e0e0e0'); g.addColorStop(1, '#a0a0a0');
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#777'; ctx.font = 'bold 13px Inter,sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('👆 Raspe aqui', W / 2, H / 2 - 8);
  ctx.font = '11px Inter,sans-serif';
  ctx.fillText('para revelar seu desconto', W / 2, H / 2 + 12);

  let down = false;
  function pos(e) {
    const r = cv.getBoundingClientRect();
    const sx = cv.width / r.width, sy = cv.height / r.height;
    if (e.touches) return { x: (e.touches[0].clientX - r.left) * sx, y: (e.touches[0].clientY - r.top) * sy };
    return { x: (e.clientX - r.left) * sx, y: (e.clientY - r.top) * sy };
  }
  function scratch(x, y) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath(); ctx.arc(x, y, 24, 0, Math.PI * 2); ctx.fill();
    const d = ctx.getImageData(0, 0, W, H).data;
    let clear = 0;
    for (let i = 3; i < d.length; i += 4) if (d[i] === 0) clear++;
    if (clear / (W * H) > 0.4) reveal();
  }
  cv.addEventListener('mousedown', e => { down = true; const p = pos(e); scratch(p.x, p.y); });
  cv.addEventListener('mousemove', e => { if (!down) return; const p = pos(e); scratch(p.x, p.y); });
  cv.addEventListener('mouseup', () => down = false);
  cv.addEventListener('touchstart', e => { e.preventDefault(); down = true; const p = pos(e); scratch(p.x, p.y); }, { passive: false });
  cv.addEventListener('touchmove', e => { e.preventDefault(); if (!down) return; const p = pos(e); scratch(p.x, p.y); }, { passive: false });
  cv.addEventListener('touchend', () => down = false);
}

function reveal() {
  if (scratchDone) return; scratchDone = true;
  const cv = document.getElementById('sc-canvas');
  if (cv) { const ctx = cv.getContext('2d'); ctx.clearRect(0, 0, cv.width, cv.height); }
  document.getElementById('sc-hint').textContent = '🎉 Seu desconto foi desbloqueado!';
  document.getElementById('btn-sc').classList.remove('hidden');
}

// INIT
document.addEventListener('DOMContentLoaded', () => showStep(1));
