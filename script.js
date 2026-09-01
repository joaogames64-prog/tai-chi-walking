const A = {};
let cur = 1;
const TOTAL = 22;
const Q_STEPS = 16; // visible question count for counter

// ── STEPS QUE SÃO INFO (não contam no counter) ──
const INFO_STEPS = [3, 5, 7, 11, 13, 18, 19, 21, 22];

function showStep(n) {
  document.querySelectorAll('.step').forEach(s => s.classList.add('hidden'));
  const el = document.getElementById('s' + n);
  if (!el) return;
  el.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // counter (só conta steps de perguntas)
  const qNum = n - INFO_STEPS.filter(i => i < n).length;
  document.getElementById('step-num').textContent = Math.max(1, Math.min(qNum, Q_STEPS));
  document.getElementById('step-total').textContent = Q_STEPS;
  document.getElementById('btn-back').style.visibility = n > 1 ? 'visible' : 'hidden';

  // barra de progresso
  document.getElementById('prog-bar').style.width = ((n - 1) / (TOTAL - 1) * 100) + '%';

  // hooks por step
  if (n === 3)  renderS3();
  if (n === 5)  renderS5();
  if (n === 7)  renderS7();
  if (n === 11) renderS11();
  if (n === 13) renderS13();
  if (n === 18) startLoading();
  if (n === 19) renderProfile();
  if (n === 21) initScratch();
}

function next() { cur++; showStep(cur); }
function goBack() { if (cur > 1) { cur--; showStep(cur); } }
function ans(k, v) { A[k] = v; cur++; showStep(cur); }

// ── MULTI-SELECT ──
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

// ── INPUT NUMÉRICO ──
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

// ── EMAIL ──
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

// ──────────────────────────────────────────
// FLUXOS CONDICIONAIS — ADAPTAÇÃO POR RESPOSTA
// ──────────────────────────────────────────

// S3: Social proof — adapta para gênero (se já respondido via S2)
function renderS3() {
  const isMale = A.gender === 'male';
  const num = document.querySelector('#s3 .info-num');
  const title = document.querySelector('#s3 .s-title');
  const sub = document.querySelector('#s3 .s-sub');
  if (num) num.textContent = '1.000.000+';
  if (title) title.textContent = isMale
    ? 'homens já transformaram seus corpos'
    : 'mulheres já transformaram seus corpos';
  if (sub) sub.textContent = isMale
    ? 'No seu grupo de idade, homens já experimentaram o Tai Chi Walking e conseguiram resultados reais.'
    : 'No seu grupo de idade já experimentaram o programa de Tai Chi Walking e conseguiram resultados reais.';
}

// S5: "Você vai arrasar!" — adapta se já praticou
function renderS5() {
  const practiced = A.practiced;
  const badge = document.querySelector('#s5 .badge-green');
  const title = document.querySelector('#s5 .s-title');
  const sub = document.querySelector('#s5 .s-sub');
  if (practiced === 'yes') {
    if (badge) badge.textContent = '🔁 Bem-vindo de volta!';
    if (title) title.textContent = 'Sua experiência é uma vantagem!';
    if (sub) sub.textContent = 'Quem já praticou Tai Chi Walking avança até 40% mais rápido. Você está à frente da maioria.';
  } else {
    if (badge) badge.textContent = '💪 Perfeito para você!';
    if (title) title.textContent = 'Você vai arrasar!';
    if (sub) sub.textContent = 'Nosso programa é para todos os níveis. Sem equipamento, 10-15 min por dia — e os resultados aparecem rápido.';
  }
}

// S7: Info "solução ideal" — adapta pelo objetivo
function renderS7() {
  const goal = A.goal;
  const badge = document.querySelector('#s7 .badge-green');
  const title = document.querySelector('#s7 .s-title');
  const sub = document.querySelector('#s7 .s-sub');
  const isMale = A.gender === 'male';
  const pronoun = isMale ? 'homens' : 'mulheres';
  const pronoun2 = isMale ? 'emagrecer' : 'emagrecer';

  if (goal === 'lose-weight') {
    if (badge) badge.textContent = '🎯 Temos a solução ideal para você!';
    if (title) title.textContent = '10-15 minutos por dia para ver as primeiras mudanças';
    if (sub) sub.textContent = `Para ${pronoun} na sua faixa etária, o Tai Chi Walking é a opção mais eficaz para ${pronoun2} com o mínimo de esforço e sem impacto nas articulações.`;
  } else {
    // get-fit / manter peso
    if (badge) badge.textContent = '💪 Forma e vitalidade garantidas!';
    if (title) title.textContent = '10 minutos por dia para manter o peso e se sentir mais forte';
    if (sub) sub.textContent = `Para ${pronoun} na sua faixa etária, o Tai Chi Walking é a forma mais sustentável de manter o condicionamento físico sem sobrecarga.`;
  }
}

// S11: "Pode contar com a gente!" — adapta por problemas físicos
function renderS11() {
  const pain = A.pain || [];
  const badge = document.querySelector('#s11 .badge-green');
  const title = document.querySelector('#s11 .s-title');
  const sub = document.querySelector('#s11 .s-sub');

  const hasPain = !pain.includes('none') && pain.length > 0;

  if (hasPain) {
    const painMap = { shoulders: 'ombros', back: 'costas', knees: 'joelhos', ankles: 'tornozelos' };
    const parts = pain.map(p => painMap[p]).filter(Boolean).join(', ');
    if (badge) badge.textContent = '🛡️ Exercícios adaptados para você!';
    if (title) title.textContent = `Diga adeus ao desconforto nos ${parts}`;
    if (sub) sub.textContent = 'Nossos movimentos de baixo impacto são desenvolvidos para aliviar tensão e fortalecer o corpo sem machucar as articulações.';
  } else {
    if (badge) badge.textContent = '💪 Pode contar com a gente!';
    if (title) title.textContent = 'Diga adeus à tensão e olá para uma postura melhor';
    if (sub) sub.textContent = 'Nossos exercícios de baixo impacto são desenvolvidos especificamente para apoiar e fortalecer seu corpo sem machucar articulações.';
  }
}

// S13: Info energia — adapta pelo nível de energia respondido
function renderS13() {
  const energy = A.energy;
  const badge = document.querySelector('#s13 .badge-green');
  const title = document.querySelector('#s13 .s-title');
  const sub = document.querySelector('#s13 .s-sub');

  if (energy === 'high') {
    if (badge) badge.textContent = '⚡ Mantenha sua energia no topo!';
    if (title) title.textContent = 'Você já tem energia — agora canaliza ela certo';
    if (sub) sub.textContent = 'Com o Tai Chi Walking, você vai transformar essa vitalidade em resultado físico real. Sem desgaste, sem impacto, máximo rendimento.';
  } else if (energy === 'post-lunch') {
    if (badge) badge.textContent = '😪 Acabe com a queda do almoço!';
    if (title) title.textContent = 'Elimine o cansaço pós-almoço de vez';
    if (sub) sub.textContent = 'O Tai Chi Walking regula o metabolismo e estabiliza os níveis de energia ao longo do dia — sem café extra, sem suplementos.';
  } else if (energy === 'before-meals') {
    if (badge) badge.textContent = '😑 Estabilize sua energia!';
    if (title) title.textContent = 'Sem mais instabilidade energética';
    if (sub) sub.textContent = 'Movimentos lentos e controlados do Tai Chi Walking regulam o açúcar no sangue e eliminam a queda de energia antes das refeições.';
  } else {
    // low energy
    if (badge) badge.textContent = '⚡ Acabe com o cansaço de uma vez!';
    if (title) title.textContent = 'Recupere sua energia — e mantenha ela';
    if (sub) sub.textContent = 'Com o Tai Chi Walking, a maioria relata aumento de energia já na primeira semana. Sem café extra, sem suplementos.';
  }
}

// ── LOADING ──
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

// ── PERFIL (S19) ──
function renderProfile() {
  const h = A.height || 160, w = A.weight || 70, t = A.target || 65;
  const bmi = (w / ((h / 100) ** 2)).toFixed(1);
  document.getElementById('bmi-v').textContent = bmi;

  let cat = 'Normal';
  if (bmi < 18.5) cat = 'Abaixo do peso';
  else if (bmi < 25) cat = 'Normal';
  else if (bmi < 30) cat = 'Sobrepeso';
  else cat = 'Obeso';
  document.getElementById('bmi-c').textContent = cat;

  // energia display
  const em = { low: 'Baixa ⚠️', 'post-lunch': 'Moderada ⚠️', 'before-meals': 'Instável ⚠️', high: 'Alta ✅' };
  const eEl = document.getElementById('e-disp');
  if (eEl) {
    eEl.textContent = em[A.energy] || 'Baixa ⚠️';
    if (A.energy === 'high') { eEl.className = 'psv'; eEl.style.color = '#16a34a'; }
    else { eEl.className = 'psv red'; }
  }

  // potencial de perda
  const diff = Math.abs(w - t);
  const potEl = document.getElementById('profile-potential');
  if (potEl) {
    if (diff <= 3) potEl.innerHTML = '🎯 Potencial: <strong>2 a 4kg</strong> em 28 dias';
    else if (diff <= 7) potEl.innerHTML = '🎯 Potencial: <strong>5 a 7kg</strong> em 28 dias';
    else potEl.innerHTML = '🎯 Potencial: <strong>7 a 10kg</strong> em 28 dias';
  }

  // alerta por IMC
  const alertEl = document.getElementById('profile-alert');
  if (alertEl) {
    if (bmi >= 30) {
      alertEl.textContent = '⚠️ Seu metabolismo está muito lento. Sem ação, a tendência é ganhar +5-8kg em poucos meses.';
    } else if (bmi >= 25) {
      alertEl.textContent = '⚠️ Seu metabolismo está lento. Sem ação, a tendência é ganhar +3-5kg em poucos meses.';
    } else {
      alertEl.textContent = '⚠️ Manter o peso ideal requer consistência. Sem exercício, o metabolismo desacelera progressivamente.';
    }
  }

  // previsão de timeline adaptada pelo objetivo
  const goal = A.goal;
  const tl = document.getElementById('timeline-items');
  if (tl) {
    if (goal === 'get-fit') {
      tl.innerHTML = `
        <div class="ti"><span class="tw">Sem 1</span><span class="tr">Corpo mais ativo e leve</span></div>
        <div class="ti"><span class="tw">Sem 2</span><span class="tr">Postura e força melhoram</span></div>
        <div class="ti"><span class="tw">Sem 3</span><span class="tr">Roupas ficam mais folgadas</span></div>
        <div class="ti thl"><span class="tw">Sem 4</span><span class="tr">🎉 Condicionamento notável!</span></div>`;
    } else {
      tl.innerHTML = `
        <div class="ti"><span class="tw">Sem 1</span><span class="tr">Energia triplicada</span></div>
        <div class="ti"><span class="tw">Sem 2</span><span class="tr">Roupas ficam soltas</span></div>
        <div class="ti"><span class="tw">Sem 3</span><span class="tr">Até 3kg eliminados</span></div>
        <div class="ti thl"><span class="tw">Sem 4</span><span class="tr">🎉 Corpo transformado!</span></div>`;
    }
  }

  // provas sociais no perfil — adapta pelo gênero
  const isMale = A.gender === 'male';
  const proofSec = document.querySelector('#s19 .proof-section');
  if (proofSec && isMale) {
    // substitui a primeira prova social para nome masculino
    const firstCard = proofSec.querySelector('.proof-card p');
    if (firstCard) firstCard.textContent = '"Nunca achei que 10 minutos fizessem diferença. Em 4 semanas minha barriga diminuiu e minha energia está incrível."';
    const firstName = proofSec.querySelector('.proof-card strong');
    if (firstName) firstName.textContent = 'Carlos M.';
  }
}

// ── RASPADINHA ──
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
