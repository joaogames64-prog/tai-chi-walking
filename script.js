// ── STATE ──
const answers = {};
let currentStep = 1;
const TOTAL_STEPS = 16; // steps with progress (exclude loading step in count display)

// ── NAVIGATION ──
function showStep(n) {
  document.querySelectorAll('.step').forEach(s => s.classList.add('hidden'));
  const el = document.getElementById('step-' + n);
  if (el) { el.classList.remove('hidden'); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

  // Header
  const displaySteps = 12; // total "question" steps shown to user
  const visibleNum = Math.min(n, displaySteps);
  document.getElementById('step-num').textContent = visibleNum;
  document.getElementById('step-total').textContent = displaySteps;
  document.getElementById('btn-back').style.visibility = n > 1 ? 'visible' : 'hidden';

  // Progress bar
  const pct = Math.min((n - 1) / (TOTAL_STEPS - 1) * 100, 100);
  document.getElementById('progress-bar').style.width = pct + '%';

  // Special steps
  if (n === 12) startLoading();
  if (n === 13) renderProfile();
  if (n === 15) initScratch();
}

function nextStep() {
  currentStep++;
  showStep(currentStep);
}

function goBack() {
  if (currentStep > 1) { currentStep--; showStep(currentStep); }
}

// ── SINGLE SELECT ──
function selectAnswer(key, val) {
  answers[key] = val;
  nextStep();
}

// ── MULTI SELECT ──
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.multi-opt');
  if (!btn) return;
  // "none" clears others
  const container = btn.closest('[id$="-opts"]');
  if (btn.dataset.val === 'none' || btn.dataset.val === 'None of the above') {
    container.querySelectorAll('.multi-opt').forEach(b => b.classList.remove('selected'));
    btn.classList.toggle('selected');
  } else {
    container.querySelector('[data-val="none"]')?.classList.remove('selected');
    btn.classList.toggle('selected');
  }
});

function submitMulti(key, containerId) {
  const selected = [];
  document.querySelectorAll('#' + containerId + ' .multi-opt.selected').forEach(b => selected.push(b.dataset.val));
  answers[key] = selected.length ? selected : ['none'];
  nextStep();
}

// ── NUMBER INPUT ──
function submitNumber(key, inputId, min, max) {
  const inp = document.getElementById(inputId);
  const val = parseFloat(inp.value);
  // remove old error
  inp.classList.remove('error');
  let errEl = inp.parentElement.parentElement.querySelector('.input-error');
  if (errEl) errEl.remove();

  if (!inp.value || isNaN(val) || val < min || val > max) {
    inp.classList.add('error');
    const err = document.createElement('p');
    err.className = 'input-error';
    err.textContent = 'Por favor, insira um valor válido entre ' + min + ' e ' + max + '.';
    inp.parentElement.after(err);
    return;
  }
  answers[key] = val;
  nextStep();
}

// ── EMAIL ──
function submitEmail() {
  const inp = document.getElementById('input-email');
  const val = inp.value.trim();
  inp.classList.remove('error');
  let errEl = inp.parentElement.querySelector('.input-error');
  if (errEl) errEl.remove();

  if (!val || !val.includes('@') || !val.includes('.')) {
    inp.classList.add('error');
    const err = document.createElement('p');
    err.className = 'input-error';
    err.textContent = 'Por favor, insira um e-mail válido.';
    inp.after(err);
    return;
  }
  answers.email = val;
  nextStep();
}

// ── LOADING ──
function startLoading() {
  const items = [
    { id: 'li-1', delay: 800 },
    { id: 'li-2', delay: 1800 },
    { id: 'li-3', delay: 2800 },
    { id: 'li-4', delay: 3600 },
  ];
  const fill = document.getElementById('loading-fill');
  let pct = 0;
  const interval = setInterval(() => {
    pct = Math.min(pct + 1.2, 100);
    fill.style.width = pct + '%';
    if (pct >= 100) clearInterval(interval);
  }, 50);

  items.forEach(item => {
    setTimeout(() => {
      const el = document.getElementById(item.id);
      if (el) { el.classList.add('done'); el.querySelector('.li-check').textContent = '✓'; }
    }, item.delay);
  });

  setTimeout(() => { currentStep = 13; showStep(13); }, 5000);
}

// ── PROFILE RENDER ──
function renderProfile() {
  const h = answers.height || 160;
  const w = answers.weight || 70;
  const bmi = (w / ((h / 100) * (h / 100))).toFixed(1);
  document.getElementById('bmi-value').textContent = bmi;

  let cat = 'Normal';
  if (bmi < 18.5) cat = 'Abaixo do peso';
  else if (bmi < 25) cat = 'Normal';
  else if (bmi < 30) cat = 'Sobrepeso';
  else cat = 'Obeso';
  document.getElementById('bmi-cat').textContent = cat;

  // Energy display
  const energyMap = { low: 'Baixa ⚠️', 'post-lunch': 'Moderada ⚠️', 'before-meals': 'Instável ⚠️', high: 'Alta ✅' };
  const energyEl = document.getElementById('energy-display');
  if (energyEl) {
    energyEl.textContent = energyMap[answers.energy] || 'Baixa ⚠️';
    if (answers.energy === 'high') { energyEl.className = 'ps-val'; energyEl.style.color = '#16a34a'; }
  }
}

// ── SCRATCH CARD ──
function initScratch() {
  const canvas = document.getElementById('scratch-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;

  // Silver overlay
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#b0b0b0');
  grad.addColorStop(0.5, '#e8e8e8');
  grad.addColorStop(1, '#a0a0a0');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Text on scratch
  ctx.fillStyle = '#888';
  ctx.font = 'bold 14px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('👆 Raspe aqui', w / 2, h / 2 - 6);
  ctx.font = '12px Inter, sans-serif';
  ctx.fillText('para revelar seu desconto', w / 2, h / 2 + 14);

  let scratching = false;
  let totalPx = 0;

  function scratch(x, y) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    // Check reveal %
    const data = ctx.getImageData(0, 0, w, h).data;
    let cleared = 0;
    for (let i = 3; i < data.length; i += 4) { if (data[i] === 0) cleared++; }
    const pct = cleared / (w * h) * 100;
    if (pct > 40) revealDone();
  }

  function getPos(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if (e.touches) {
      return { x: (e.touches[0].clientX - rect.left) * scaleX, y: (e.touches[0].clientY - rect.top) * scaleY };
    }
    return { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY };
  }

  canvas.addEventListener('mousedown', e => { scratching = true; const p = getPos(e, canvas); scratch(p.x, p.y); });
  canvas.addEventListener('mousemove', e => { if (!scratching) return; const p = getPos(e, canvas); scratch(p.x, p.y); });
  canvas.addEventListener('mouseup', () => { scratching = false; });
  canvas.addEventListener('touchstart', e => { e.preventDefault(); scratching = true; const p = getPos(e, canvas); scratch(p.x, p.y); }, { passive: false });
  canvas.addEventListener('touchmove', e => { e.preventDefault(); if (!scratching) return; const p = getPos(e, canvas); scratch(p.x, p.y); }, { passive: false });
  canvas.addEventListener('touchend', () => { scratching = false; });
}

let revealed = false;
function revealDone() {
  if (revealed) return;
  revealed = true;
  document.getElementById('scratch-hint').textContent = '🎉 Parabéns! Seu desconto foi desbloqueado!';
  document.getElementById('btn-after-scratch').classList.remove('hidden');
  // Clear canvas entirely
  const canvas = document.getElementById('scratch-canvas');
  if (canvas) { const ctx = canvas.getContext('2d'); ctx.clearRect(0, 0, canvas.width, canvas.height); }
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  showStep(1);
});
