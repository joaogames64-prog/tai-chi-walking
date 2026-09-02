const weeksData = [
    {
        week: 1, title: 'Semana 1', subtitle: 'Fundamentos', cover: '/app/cover_week1.png',
        days: [
            { day: 1,  title: 'O Primeiro Passo', duration: '~10 min', vid: 'ZUyX8ujn9X0', instructions: 'Mantenha os ombros relaxados e a coluna reta. Concentre-se em respirar profundamente. Hoje é sobre conectar a mente ao corpo, sem pressa.' },
            { day: 2,  title: 'Despertando a Circulação', duration: '~10 min', vid: 'CDl2eYRzhnM', instructions: 'Sinta o peso sendo transferido de um pé para o outro suavemente. Mantenha os joelhos levemente destravados para garantir zero impacto.' },
            { day: 3,  title: 'Equilíbrio e Leveza', duration: '~10 min', vid: '_QY2vKGf-vU', instructions: 'O seu foco hoje é a estabilidade. Se precisar, faça os movimentos perto de uma parede ou cadeira para se apoiar.' },
            { day: 4,  title: 'Soltando as Tensões', duration: '~15 min', vid: 'Veu9kvYi8NE', instructions: 'Movimente os braços com fluidez. Deixe qualquer estresse ir embora a cada expiração.' },
            { day: 5,  title: 'Conexão Postural', duration: '~10 min', vid: 'ULMIzFOPmv0', instructions: 'Levante o olhar e abra o peito. Comece o dia com leveza e energia.' },
            { day: 6,  title: 'Fluidez Corporal', duration: '~10 min', vid: 'qRyx1BP4q_A', instructions: 'Foque na sua respiração. A respiração correta melhora a circulação e relaxa o sistema nervoso.' },
            { day: 7,  title: 'Fechamento da Semana 1', duration: '~15 min', vid: 'FxlVf_9zIG4', instructions: 'Celebre! Você completou sua primeira semana. Reflita sobre como sua energia já começou a mudar.' },
        ]
    },
    {
        week: 2, title: 'Semana 2', subtitle: 'Queima & Mobilidade', cover: '/app/cover_week2.png',
        days: [
            { day: 8,  title: 'Centro de Força', duration: '~15 min', vid: 'D26kMza-8JI', instructions: 'Contraia levemente o abdômen ao caminhar. Isso protege sua lombar e ativa a queima abdominal.' },
            { day: 9,  title: 'Pernas Seguras', duration: '~15 min', vid: 'H4EejjO0-h8', instructions: 'Apoie o calcanhar primeiro, depois a ponta do pé. Seus joelhos sempre protegidos.' },
            { day: 10, title: 'Oxigenação Total', duration: '~15 min', vid: 'UnAB3jxIj5g', instructions: 'Inspire em 2 passos, expire em 2 passos. Oxigênio = metabolismo acelerado.' },
            { day: 11, title: 'Energia Vital', duration: '~15 min', vid: 'p--htl7-CYo', instructions: 'Sequência de Qigong para ativar a energia vital e melhorar o ânimo.' },
            { day: 12, title: 'Abertura & Fluxo', duration: '~15 min', vid: 'WER0Gjw0zuE', instructions: 'Foco na abertura e no alongamento. Diminua o passo se cansar, mas não pare.' },
            { day: 13, title: 'Corpo Inteiro', duration: '~30 min', vid: 'EhN-Mga9DBs', instructions: 'Sessão completa de 30 minutos! Mantenha ritmo constante e respire fundo.' },
            { day: 14, title: 'Metade da Jornada', duration: '~11 min', vid: 'M339Cq6oJ6U', instructions: 'Parabéns! Você chegou na metade. Aproveite essa prática para recarregar.' },
        ]
    },
    {
        week: 3, title: 'Semana 3', subtitle: 'Articulações & Calma', cover: '/app/cover_week3.png',
        days: [
            { day: 15, title: 'Cuidado Articular', duration: '~10 min', vid: 'kwkCZ91pzCA', instructions: 'Movimentos suaves desenvolvidos para joelhos e quadril. Flua com cuidado.' },
            { day: 16, title: 'Equilíbrio Profundo', duration: '~10 min', vid: 'BTHbqxrT96Q', instructions: 'Continue os movimentos básicos com foco total no equilíbrio e estabilidade.' },
            { day: 17, title: 'Core Suave', duration: '~15 min', vid: '9hlEQyWgnO8', instructions: 'Rotina suave e eficiente. Barriga firme, movimentos fluindo sem esforço.' },
            { day: 18, title: 'Acalmando a Mente', duration: '~10 min', vid: 'gdxwhab5ALI', instructions: 'Tai Chi poderoso para ansiedade. Foque apenas na respiração e no ritmo.' },
            { day: 19, title: 'Mente & Corpo', duration: '~15 min', vid: 'OnVYfWBd8Fc', instructions: 'Entenda a conexão mente-corpo. Acolha qualquer emoção com gentileza.' },
            { day: 20, title: 'Paz Interior', duration: '~10 min', vid: 'oaG7sNplpQU', instructions: 'Dia de cuidado interno. Pratique acalmar a mente através do movimento.' },
            { day: 21, title: 'Renovação Total', duration: '~15 min', vid: 'nxt4hx2O2jo', instructions: 'Último dia da 3ª semana! Sinta como seu corpo está mais ágil e leve.' },
        ]
    },
    {
        week: 4, title: 'Semana 4', subtitle: 'Resultado Final', cover: '/app/cover_week4.png',
        days: [
            { day: 22, title: 'Queima Abdominal', duration: '~15 min', vid: 'eEKxILjthas', instructions: 'Bem-vinda à reta final! Beba água antes. Mantenha ritmo sustentável.' },
            { day: 23, title: 'Movimento Constante', duration: '~20 min', vid: '0cLLejSM2fo', instructions: 'Músculos mais resistentes. Foque na técnica para articulações sempre seguras.' },
            { day: 24, title: 'Leveza Matinal', duration: '~15 min', vid: '1kp_oOAD__s', instructions: 'Rotina matinal de Qigong. Inspire fundo e abrace o movimento.' },
            { day: 25, title: 'Energia Expandida', duration: '~15 min', vid: 'M_UA6k2SEi4', instructions: 'Você domina o método. Sinta seu corpo em perfeita sintonia.' },
            { day: 26, title: 'Tai Chi & Automassagem', duration: '~15 min', vid: 'xvQOpnEtVqE', instructions: 'Combine Tai Chi com alongamento e automassagem. Cuide de cada músculo.' },
            { day: 27, title: 'Penúltima Conquista', duration: '~15 min', vid: 'LFxLuPUVw3A', instructions: 'Perceba como seu fôlego melhorou desde o Dia 1. Você está mais forte.' },
            { day: 28, title: '🏆 Celebração Final', duration: '~15 min', vid: 'Er4Xx9plLo8', instructions: 'A coroação da sua jornada! Um corpo mais leve, sem dores e renovado. Você conseguiu!' },
        ]
    }
];

const daysData = weeksData.flatMap(w => w.days);

// ─── STATE ────────────────────────────────────────────────────────────────────
let currentDay = null;

// ─── LOCK LOGIC ───────────────────────────────────────────────────────────────
function getStartDate() {
    let s = localStorage.getItem('startDate');
    if (!s) { s = new Date().toISOString(); localStorage.setItem('startDate', s); }
    return new Date(s);
}
function daysSinceStart() {
    return Math.floor((new Date() - getStartDate()) / (1000*60*60*24));
}
function isWeekUnlocked(weekNum) {
    if (weekNum === 1) return true;
    return daysSinceStart() >= (weekNum - 1) * 7;
}
function daysUntilUnlock(weekNum) {
    return Math.max(0, (weekNum - 1) * 7 - daysSinceStart());
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    getStartDate();
    navigate('home');
});

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function navigate(viewName) {
    const content = document.getElementById('app-content');
    const nav = document.getElementById('bottom-nav');

    // Show/hide nav
    const hideNav = ['day-detail', 'extra-detail'].includes(viewName);
    if (nav) nav.className = 'bottom-nav' + (hideNav ? ' hidden' : '');

    // Update nav active state
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const activeNav = document.getElementById('nav-' + viewName);
    if (activeNav) activeNav.classList.add('active');

    const tpl = document.getElementById('tpl-' + viewName);
    if (tpl) {
        content.innerHTML = tpl.innerHTML;
    }

    if (viewName === 'home') renderHome();
    if (viewName === 'days') renderWeeksGrid();
    if (viewName === 'progress') renderProgress();

    content.scrollTop = 0;
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function renderHome() {
    // Greeting
    const h = new Date().getHours();
    const greet = h < 12 ? 'Bom dia ☀️' : h < 18 ? 'Boa tarde 🌤️' : 'Boa noite 🌙';
    const el = document.getElementById('home-greeting');
    if (el) el.textContent = greet;

    // Stats
    const completed = JSON.parse(localStorage.getItem('completedDays') || '[]');
    const done = completed.length;
    const days = daysSinceStart();

    const stDone = document.getElementById('stat-done');
    const stStreak = document.getElementById('stat-streak');
    const stLeft = document.getElementById('stat-left');
    if (stDone) stDone.textContent = done;
    if (stStreak) stStreak.textContent = days;
    if (stLeft) stLeft.textContent = Math.max(0, 28 - done);

    // Continue Card - find next incomplete day
    const nextDay = daysData.find(d => !completed.includes(d.day)) || daysData[27];
    const cdDay = document.getElementById('continue-day-label');
    const cdTitle = document.getElementById('continue-day-title');
    if (cdDay) cdDay.textContent = `Dia ${nextDay.day}`;
    if (cdTitle) cdTitle.textContent = nextDay.title;
}

function goToNextDay() {
    const completed = JSON.parse(localStorage.getItem('completedDays') || '[]');
    const nextDay = daysData.find(d => !completed.includes(d.day)) || daysData[27];
    openDay(nextDay.day);
}

// ─── WEEKS GRID ───────────────────────────────────────────────────────────────
function renderWeeksGrid() {
    const container = document.getElementById('days-container');
    if (!container) return;

    const completed = JSON.parse(localStorage.getItem('completedDays') || '[]');
    let html = '';

    weeksData.forEach(week => {
        const unlocked = isWeekUnlocked(week.week);
        const doneCount = week.days.filter(d => completed.includes(d.day)).length;
        const pct = Math.round((doneCount / week.days.length) * 100);
        const daysLeft = daysUntilUnlock(week.week);

        html += `<div class="week-section">`;
        html += `<div class="week-cover" style="background-image:url('${week.cover}')"><div class="week-cover-overlay"></div></div>`;

        if (unlocked) {
            html += `
                <div class="week-body">
                    <p class="week-title">${week.title}</p>
                    <p class="week-subtitle">${week.subtitle}</p>
                    <div class="week-progress-bar"><div class="week-progress-fill" style="width:${pct}%"></div></div>
                    <p class="week-progress-text">${doneCount} de ${week.days.length} dias</p>
                    <div class="days-grid">
            `;
            week.days.forEach(d => {
                const done = completed.includes(d.day);
                html += `<div class="day-chip ${done ? 'completed' : ''}" onclick="openDay(${d.day})">${done ? '✓' : d.day}</div>`;
            });
            html += `</div></div>`;
        } else {
            html += `
                <div class="week-lock-overlay">
                    <div class="lock-icon">🔒</div>
                    <div class="lock-title">${week.title}</div>
                    <div class="lock-msg">Libera em <strong>${daysLeft} dia${daysLeft !== 1 ? 's' : ''}</strong></div>
                </div>
            `;
        }
        html += `</div>`;
    });

    container.innerHTML = html;
}

// ─── DAY DETAIL ───────────────────────────────────────────────────────────────
function openDay(dayNumber) {
    currentDay = daysData.find(d => d.day === dayNumber);
    if (!currentDay) return;

    const weekObj = weeksData.find(w => w.days.some(d => d.day === dayNumber));
    if (weekObj && !isWeekUnlocked(weekObj.week)) return;

    const content = document.getElementById('app-content');
    const tpl = document.getElementById('tpl-day-detail');
    content.innerHTML = tpl.innerHTML;

    document.getElementById('video-wrapper').innerHTML = getEmbed(currentDay.vid);
    document.getElementById('day-badge').textContent = `Dia ${currentDay.day}`;
    document.getElementById('day-duration').textContent = currentDay.duration;
    document.getElementById('day-title').textContent = currentDay.title;
    document.getElementById('day-instructions').textContent = currentDay.instructions;

    const completed = JSON.parse(localStorage.getItem('completedDays') || '[]');
    const btn = document.getElementById('btn-complete');
    if (completed.includes(currentDay.day)) {
        btn.textContent = '✓ Aula concluída';
        btn.disabled = true;
    }

    content.scrollTop = 0;
    document.getElementById('bottom-nav').className = 'bottom-nav hidden';
}

function completeDay() {
    if (!currentDay) return;
    const completed = JSON.parse(localStorage.getItem('completedDays') || '[]');
    if (!completed.includes(currentDay.day)) {
        completed.push(currentDay.day);
        localStorage.setItem('completedDays', JSON.stringify(completed));
    }
    navigate('days');
}

// ─── EXTRAS ───────────────────────────────────────────────────────────────────
function openExtra(extraId) {
    const content = document.getElementById('app-content');
    const tpl = document.getElementById('tpl-extra-detail');
    content.innerHTML = tpl.innerHTML;

    document.getElementById('bottom-nav').className = 'bottom-nav hidden';

    const wrapper = document.getElementById('extra-content-wrapper');

    const covers = { sleep: '/app/cover_sleep.png', stretch: '/app/cover_stretch.png', diet: '/app/cover_diet.png' };
    const cover = covers[extraId];
    let heroHtml = cover
        ? `<div class="extra-detail-hero" style="background-image:url('${cover}')"><div class="extra-detail-hero-overlay"></div></div>`
        : `<div class="extra-detail-hero" style="background:linear-gradient(135deg,var(--green),#0A1506)"><div class="extra-detail-hero-overlay"></div></div>`;

    let bodyHtml = '';

    if (extraId === 'stretch') {
        bodyHtml = `
            <h2 class="extra-detail-title">Alongamento Revitalizante</h2>
            <p class="extra-detail-text">Use antes ou depois dos vídeos diários — ou ao acordar. Segure cada posição com suavidade. Nunca force além do conforto. O alongamento não deve doer.</p>
        `;
    } else if (extraId === 'sleep') {
        bodyHtml = `
            <h2 class="extra-detail-title">Sono Profundo</h2>
            <p class="extra-detail-text">Use na cama antes de dormir. Coloque fones, feche os olhos e permita-se desligar.</p>
            <div class="extra-video-wrap">${getEmbed('g4hRkFh7ykw')}</div>
        `;
    } else if (extraId === 'diet') {
        bodyHtml = `
            <h2 class="extra-detail-title">Plano Anti-inchaço</h2>
            <p class="extra-detail-text">7 dias de alimentação leve e anti-inflamatória. Sem contagem de calorias. Beba 2L de água por dia.</p>
            <div class="extra-video-wrap">${getEmbed('qt4IOxfSq4c')}</div>
            <table class="diet-table">
                <tr><th>Refeição</th><th>Opção 1</th><th>Opção 2</th></tr>
                <tr><td>Café</td><td>Ovos + espinafre + chá verde</td><td>Aveia com maçã e canela</td></tr>
                <tr><td>Almoço</td><td>Peixe + salada com azeite</td><td>Frango + brócolis + arroz integral</td></tr>
                <tr><td>Lanche</td><td>Maçã ou pera</td><td>Castanhas ou iogurte com chia</td></tr>
                <tr><td>Jantar</td><td>Sopa de legumes</td><td>Salada morna com grão de bico</td></tr>
            </table>
        `;
    } else if (extraId === 'faq') {
        heroHtml = `<div class="extra-detail-hero" style="background:linear-gradient(135deg,var(--green),#0A1506)"><div class="extra-detail-hero-overlay"></div></div>`;
        bodyHtml = `
            <h2 class="extra-detail-title">Dúvidas Frequentes</h2>
            <div class="faq-item"><div class="faq-q">Funciona para mulheres acima de 50 anos?</div><div class="faq-a">Com certeza! Desenhado para metabolismos 40-50+, sem pressão nas articulações.</div></div>
            <div class="faq-item"><div class="faq-q">Preciso de equipamento?</div><div class="faq-a">Zero. Apenas roupas confortáveis e um espaço pequeno.</div></div>
            <div class="faq-item"><div class="faq-q">Tenho artrose, posso fazer?</div><div class="faq-a">O método tem zero impacto e ajuda a lubrificar articulações. Consulte seu médico se tiver quadros severos.</div></div>
            <div class="faq-item"><div class="faq-q">Quando vejo resultados?</div><div class="faq-a">Mais energia na 1ª semana. Mudanças físicas visíveis a partir da 2ª–3ª semana de constância.</div></div>
        `;
    }

    wrapper.innerHTML = heroHtml + `<div class="extra-detail-body">${bodyHtml}</div>`;
    content.scrollTop = 0;
}

// ─── PROGRESS ─────────────────────────────────────────────────────────────────
function renderProgress() {
    const container = document.getElementById('progress-container');
    if (!container) return;

    const weeks = ['Início (Dia 1)', 'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
    container.innerHTML = weeks.map((label, i) => {
        const saved = JSON.parse(localStorage.getItem('prog_' + i) || '{}');
        return `
            <div class="progress-card">
                <div class="progress-header">${label}</div>
                <div class="input-group"><span class="input-label">Peso (kg)</span><input type="number" class="input-field" placeholder="—" id="w_${i}_peso" value="${saved.peso||''}" onchange="saveProg(${i})"></div>
                <div class="input-group"><span class="input-label">Cintura (cm)</span><input type="number" class="input-field" placeholder="—" id="w_${i}_cintura" value="${saved.cintura||''}" onchange="saveProg(${i})"></div>
                <div class="input-group"><span class="input-label">Energia 1-10</span><input type="number" class="input-field" placeholder="—" id="w_${i}_energia" value="${saved.energia||''}" onchange="saveProg(${i})"></div>
                <div class="input-group"><span class="input-label">Sono 1-10</span><input type="number" class="input-field" placeholder="—" id="w_${i}_sono" value="${saved.sono||''}" onchange="saveProg(${i})"></div>
            </div>
        `;
    }).join('');
}

function saveProg(i) {
    localStorage.setItem('prog_' + i, JSON.stringify({
        peso: document.getElementById(`w_${i}_peso`).value,
        cintura: document.getElementById(`w_${i}_cintura`).value,
        energia: document.getElementById(`w_${i}_energia`).value,
        sono: document.getElementById(`w_${i}_sono`).value
    }));
}

function resetProgress() {
    if (confirm('Apagar todo o progresso?')) { localStorage.clear(); navigate('progress'); }
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function getEmbed(vid) {
    return `<iframe src="https://www.youtube-nocookie.com/embed/${vid}?modestbranding=1&rel=0&showinfo=0" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>`;
}
