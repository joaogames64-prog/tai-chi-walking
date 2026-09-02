// ─── DATA ────────────────────────────────────────────────────────────────────

const weeksData = [
    {
        week: 1,
        title: 'Semana 1',
        subtitle: 'Fundamentos — foco em aprender a base',
        days: [
            { day: 1, title: 'O Primeiro Passo para a Transformação', duration: '~10 min', vid: 'ZUyX8ujn9X0', instructions: 'Mantenha os ombros relaxados e a coluna reta. Concentre-se em respirar profundamente. Hoje é sobre conectar a mente ao corpo, sem pressa.' },
            { day: 2, title: 'Despertando a Circulação', duration: '~10 min', vid: 'CDl2eYRzhnM', instructions: 'Sinta o peso sendo transferido de um pé para o outro suavemente. Mantenha os joelhos levemente destravados para garantir zero impacto.' },
            { day: 3, title: 'Equilíbrio e Leveza', duration: '~10 min', vid: '_QY2vKGf-vU', instructions: 'O seu foco hoje é a estabilidade. Se precisar, faça os movimentos perto de uma parede ou cadeira para se apoiar. Respire no ritmo dos seus passos.' },
            { day: 4, title: 'Soltando as Tensões', duration: '~15 min', vid: 'Veu9kvYi8NE', instructions: 'Movimente os braços com fluidez. Deixe qualquer estresse ir embora a cada expiração. A caminhada de hoje prepara os braços e o tronco.' },
            { day: 5, title: 'Conexão Postural', duration: '~10 min', vid: 'ULMIzFOPmv0', instructions: 'Levante o olhar e abra o peito. Comece o dia com leveza e energia. Sinta-se forte e presente desde a primeira respiração.' },
            { day: 6, title: 'Fluidez Corporal', duration: '~10 min', vid: 'qRyx1BP4q_A', instructions: 'Foque na sua respiração. A respiração correta melhora a circulação e relaxa o sistema nervoso, trazendo bem-estar.' },
            { day: 7, title: 'Fechamento da Primeira Semana', duration: '~15 min', vid: 'FxlVf_9zIG4', instructions: 'Celebre! Você completou sua primeira semana. Use este momento para refletir sobre como sua energia já começou a mudar.' },
        ]
    },
    {
        week: 2,
        title: 'Semana 2',
        subtitle: 'Corpo Todo — consolidação, foco em queima e mobilidade',
        days: [
            { day: 8, title: 'Ativando o Centro de Força', duration: '~15 min', vid: 'D26kMza-8JI', instructions: 'Contraia levemente o abdômen ao caminhar. Isso protege sua lombar e ativa a musculatura que queima a gordurinha da barriga.' },
            { day: 9, title: 'Pernas Fortes, Articulações Seguras', duration: '~15 min', vid: 'H4EejjO0-h8', instructions: 'Foque em apoiar o calcanhar primeiro e depois a ponta do pé. Isso garante que seus joelhos fiquem sempre protegidos.' },
            { day: 10, title: 'Oxigenação Total', duration: '~15 min', vid: 'UnAB3jxIj5g', instructions: 'Inspire em dois passos, expire em dois passos. O aumento de oxigênio nas células é o segredo para melhorar o metabolismo hoje.' },
            { day: 11, title: 'Desenhando os Braços', duration: '~15 min', vid: 'p--htl7-CYo', instructions: 'Essa sequência de Qigong ativa a energia vital e melhora o ânimo. Deixe o corpo fluir com naturalidade.' },
            { day: 12, title: 'Acelerando o Ritmo Interno', duration: '~15 min', vid: 'WER0Gjw0zuE', instructions: 'Hoje o foco é a abertura e o alongamento. Se sentir cansaço, diminua o tamanho do passo, mas tente não parar.' },
            { day: 13, title: 'Harmonia e Mobilidade', duration: '~30 min', vid: 'EhN-Mga9DBs', instructions: 'Uma sessão de corpo inteiro! Mantenha o ritmo constante e respire profundamente durante os 30 minutos.' },
            { day: 14, title: 'Metade do Caminho Concluída', duration: '~11 min', vid: 'M339Cq6oJ6U', instructions: 'Parabéns! Você chegou na metade. Respire fundo e aproveite essa prática de Qigong para recarregar as energias.' },
        ]
    },
    {
        week: 3,
        title: 'Semana 3',
        subtitle: 'Foco articular, idosos e ansiedade — rotinas suaves',
        days: [
            { day: 15, title: 'Caminhada de Liberação', duration: '~10 min', vid: 'kwkCZ91pzCA', instructions: 'Sessão especialmente desenvolvida para articulações saudáveis. Movimentos suaves e seguros para cuidar de joelhos e quadril.' },
            { day: 16, title: 'Flexibilidade Dinâmica', duration: '~10 min', vid: 'BTHbqxrT96Q', instructions: 'Continue os movimentos básicos com foco no equilíbrio. Respire com calma e sinta seu corpo ganhar segurança.' },
            { day: 17, title: 'Fortalecendo o Core', duration: '~15 min', vid: '9hlEQyWgnO8', instructions: 'Rotina suave e eficiente. Mantenha a barriga firme e permita que os movimentos fluam sem esforço excessivo.' },
            { day: 18, title: 'Passos de Saúde', duration: '~10 min', vid: 'gdxwhab5ALI', instructions: 'O Tai Chi é poderoso para acalmar a mente. Se sentir ansiedade, foque apenas na sua respiração e no ritmo dos passos.' },
            { day: 19, title: 'O Despertar da Mobilidade', duration: '~15 min', vid: 'OnVYfWBd8Fc', instructions: 'Entenda a conexão entre a mente e o corpo. Use essa aula para acolher qualquer emoção com gentileza.' },
            { day: 20, title: 'Mente Calma, Corpo Ativo', duration: '~10 min', vid: 'oaG7sNplpQU', instructions: 'Prática de acalmar a mente através do movimento. Um dia de cuidado interno — perfeito para o final da semana.' },
            { day: 21, title: 'Renovação Total', duration: '~15 min', vid: 'nxt4hx2O2jo', instructions: 'Último dia da terceira semana! Inicie com energia e gratidão. Sinta como seu corpo está mais ágil e leve.' },
        ]
    },
    {
        week: 4,
        title: 'Semana 4',
        subtitle: 'Consistência e Resultado — queima e encerramento',
        days: [
            { day: 22, title: 'Intensificando a Queima', duration: '~15 min', vid: 'eEKxILjthas', instructions: 'Bem-vinda à reta final! Foco na queima abdominal. Beba água antes de começar e mantenha um ritmo sustentável.' },
            { day: 23, title: 'Movimento Constante', duration: '~20 min', vid: '0cLLejSM2fo', instructions: 'Aula aberta de Tai Chi Chuan. Seus músculos já estão mais resistentes — foque na técnica para manter as articulações seguras.' },
            { day: 24, title: 'Queima de Gordura Profunda', duration: '~15 min', vid: '1kp_oOAD__s', instructions: 'Rotina matinal de Qigong para começar o dia com leveza e energia. Inspire fundo e abrace o movimento.' },
            { day: 25, title: 'Resistência e Graciosidade', duration: '~15 min', vid: 'M_UA6k2SEi4', instructions: 'Exercícios para expandir sua energia vital. Você já domina o método — sinta como seu corpo trabalha em perfeita sintonia.' },
            { day: 26, title: 'O Poder do Foco', duration: '~15 min', vid: 'xvQOpnEtVqE', instructions: 'Quase lá! Combine Tai Chi com alongamento e automassagem. Cuide de cada músculo com carinho nessa etapa final.' },
            { day: 27, title: 'A Penúltima Conquista', duration: '~15 min', vid: 'LFxLuPUVw3A', instructions: 'Perceba como seu fôlego melhorou desde o Dia 1. Você está mais forte, mais ágil e mais disposta.' },
            { day: 28, title: 'Celebração Tai Chi Walking', duration: '~15 min', vid: 'Er4Xx9plLo8', instructions: 'A coroação da sua jornada! Durma melhor, viva melhor. Um corpo mais leve, sem dores e renovado. Você conseguiu!' },
        ]
    }
];

// Flatten all days for easy lookup
const daysData = weeksData.flatMap(w => w.days);

// ─── STATE ───────────────────────────────────────────────────────────────────

let currentDay = null;

// ─── INIT ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    navigate('home');
});

// ─── NAVIGATION ──────────────────────────────────────────────────────────────

function navigate(viewName) {
    const content = document.getElementById('app-content');

    // Update bottom nav
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const btn = document.querySelector(`.nav-item[onclick="navigate('${viewName}')"]`);
    if (btn) btn.classList.add('active');

    const tpl = document.getElementById(`tpl-${viewName}`);
    if (tpl) {
        content.innerHTML = tpl.innerHTML;
    }

    if (viewName === 'days') renderWeeksGrid();
    if (viewName === 'progress') renderProgress();

    window.scrollTo(0, 0);
}

// ─── EMBED ───────────────────────────────────────────────────────────────────

function getEmbedHtml(vid) {
    return `<iframe src="https://www.youtube-nocookie.com/embed/${vid}?modestbranding=1&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

// ─── WEEKS GRID ──────────────────────────────────────────────────────────────

function renderWeeksGrid() {
    const container = document.getElementById('days-container');
    if (!container) return;

    const completedDays = JSON.parse(localStorage.getItem('completedDays') || '[]');
    let html = '';

    weeksData.forEach(week => {
        const completedInWeek = week.days.filter(d => completedDays.includes(d.day)).length;
        const total = week.days.length;

        html += `
            <div class="week-section">
                <h3 class="week-title">${week.title}</h3>
                <p class="week-subtitle">${week.subtitle}</p>
                <div class="week-progress-bar">
                    <div class="week-progress-fill" style="width: ${Math.round((completedInWeek / total) * 100)}%"></div>
                </div>
                <p class="week-progress-text">${completedInWeek} de ${total} dias concluídos</p>
                <div class="days-grid mt-1">
        `;

        week.days.forEach(d => {
            const isCompleted = completedDays.includes(d.day);
            html += `
                <div class="day-card ${isCompleted ? 'completed' : ''}" onclick="openDay(${d.day})">
                    <div class="day-number">${isCompleted ? '✓' : d.day}</div>
                </div>
            `;
        });

        html += `</div></div>`;
    });

    container.innerHTML = html;
}

// ─── DAY DETAIL ──────────────────────────────────────────────────────────────

function openDay(dayNumber) {
    currentDay = daysData.find(d => d.day === dayNumber);
    if (!currentDay) return;

    const content = document.getElementById('app-content');
    const tpl = document.getElementById('tpl-day-detail');
    content.innerHTML = tpl.innerHTML;

    document.getElementById('video-wrapper').innerHTML = getEmbedHtml(currentDay.vid);
    document.getElementById('day-badge').textContent = `Dia ${currentDay.day}`;
    document.getElementById('day-duration').textContent = currentDay.duration;
    document.getElementById('day-title').textContent = currentDay.title;
    document.getElementById('day-instructions').textContent = currentDay.instructions;

    const completedDays = JSON.parse(localStorage.getItem('completedDays') || '[]');
    const btn = document.getElementById('btn-complete');
    if (completedDays.includes(currentDay.day)) {
        btn.textContent = '✓ Aula já concluída';
        btn.disabled = true;
    } else if (currentDay.day === 28) {
        btn.textContent = '🏆 Concluir o Programa!';
    }

    window.scrollTo(0, 0);
}

function completeDay() {
    if (!currentDay) return;
    const completedDays = JSON.parse(localStorage.getItem('completedDays') || '[]');
    if (!completedDays.includes(currentDay.day)) {
        completedDays.push(currentDay.day);
        localStorage.setItem('completedDays', JSON.stringify(completedDays));
    }
    navigate('days');
}

// ─── EXTRAS ──────────────────────────────────────────────────────────────────

function openExtra(extraId) {
    const content = document.getElementById('app-content');
    const tpl = document.getElementById('tpl-extra-detail');
    content.innerHTML = tpl.innerHTML;

    const wrapper = document.getElementById('extra-content-wrapper');
    let extraHtml = '';

    if (extraId === 'stretch') {
        extraHtml = `
            <h2 class="extra-title">Alongamento Revitalizante</h2>
            <div class="card mt-1">
                <p>Pode ser feito antes ou depois dos vídeos diários, ou até mesmo ao acordar. É perfeito para relaxar a musculatura, melhorar a postura e evitar o encurtamento causado por longas horas sentada.</p>
                <p class="mt-05"><strong>Como usar:</strong> Segure cada posição com suavidade. Respire fundo e nunca force além do ponto de conforto. O alongamento não deve doer. Se sentir dor aguda, diminua a amplitude.</p>
            </div>
        `;
    } else if (extraId === 'sleep') {
        extraHtml = `
            <h2 class="extra-title">Meditação para o Sono</h2>
            <div class="video-container mt-1">${getEmbedHtml('g4hRkFh7ykw')}</div>
            <div class="card mt-1">
                <p>O sono é fundamental para regular os hormônios do estresse e do apetite. Use este áudio na cama, quando estiver pronta para dormir, para ajudar seu corpo a relaxar e descansar.</p>
                <p class="mt-05"><strong>Dica:</strong> Coloque os fones de ouvido, deite-se em uma posição confortável e feche os olhos. Permita-se desligar dos problemas do dia.</p>
            </div>
        `;
    } else if (extraId === 'diet') {
        extraHtml = `
            <h2 class="extra-title">Plano Anti-inchaço de 7 Dias</h2>
            <div class="video-container mt-1">${getEmbedHtml('qt4IOxfSq4c')}</div>
            <div class="card mt-1 mb-1">
                <p>Esqueça as dietas restritivas! Esse plano foca em alimentos simples e anti-inflamatórios para eliminar o excesso de líquidos. Beba pelo menos 2 litros de água por dia.</p>
            </div>
            <div style="overflow-x: auto;">
                <table class="diet-table">
                    <tr><th>Refeição</th><th>Opção 1</th><th>Opção 2</th><th>Opção 3</th></tr>
                    <tr><td><strong>Café da Manhã</strong></td><td>Ovos mexidos com espinafre + Chá verde</td><td>Aveia com maçã e canela</td><td>Pão integral com queijo branco e tomate</td></tr>
                    <tr><td><strong>Almoço</strong></td><td>Peixe grelhado + salada de folhas com azeite</td><td>Frango + brócolis no vapor + arroz integral</td><td>Omelete com legumes + salada de pepino</td></tr>
                    <tr><td><strong>Lanche</strong></td><td>Maçã ou pera</td><td>Castanhas ou nozes</td><td>Iogurte natural com chia</td></tr>
                    <tr><td><strong>Jantar</strong></td><td>Sopa de legumes leve</td><td>Peixe assado com espargos</td><td>Salada morna com grão de bico e abobrinha</td></tr>
                </table>
            </div>
        `;
    } else if (extraId === 'faq') {
        extraHtml = `
            <h2 class="extra-title">Dúvidas Frequentes</h2>
            <div class="card mt-1">
                <div class="faq-item">
                    <div class="faq-q">O Tai Chi Walking funciona para mulheres acima de 50 anos?</div>
                    <div class="faq-a">Com certeza! Ele foi desenhado especialmente para mulheres 40+ e 50+, focando num metabolismo que precisa ser reacendido de forma gentil, sem pressão nas articulações.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q">Preciso comprar algum equipamento?</div>
                    <div class="faq-a">Zero equipamento! Apenas roupas confortáveis e um pequeno espaço na sua casa.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q">Tenho problema no joelho / artrose, posso fazer?</div>
                    <div class="faq-a">O método tem zero impacto e ajuda a lubrificar as articulações. Porém, consulte seu médico se tiver quadros severos.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q">Quando começo a ver resultados?</div>
                    <div class="faq-a">Muitas alunas relatam mais energia logo na 1ª semana. Mudanças físicas visíveis costumam aparecer a partir da 2ª ou 3ª semana de constância. Os resultados variam de pessoa para pessoa.</div>
                </div>
            </div>
        `;
    }

    wrapper.innerHTML = extraHtml;
    window.scrollTo(0, 0);
}

// ─── PROGRESS ────────────────────────────────────────────────────────────────

function renderProgress() {
    const container = document.getElementById('progress-container');
    if (!container) return;

    const weeks = ['Início (Dia 1)', 'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
    let html = '';

    weeks.forEach((week, i) => {
        const key = 'prog_' + i;
        const saved = JSON.parse(localStorage.getItem(key) || '{"peso":"","cintura":"","energia":"","sono":""}');

        html += `
            <div class="progress-card">
                <div class="progress-header">${week}</div>
                <div class="input-group">
                    <span class="input-label">Peso (kg)</span>
                    <input type="number" class="input-field" placeholder="ex: 70" id="w_${i}_peso" value="${saved.peso}" onchange="saveProg(${i})">
                </div>
                <div class="input-group">
                    <span class="input-label">Cintura (cm)</span>
                    <input type="number" class="input-field" placeholder="ex: 85" id="w_${i}_cintura" value="${saved.cintura}" onchange="saveProg(${i})">
                </div>
                <div class="input-group">
                    <span class="input-label">Energia (1-10)</span>
                    <input type="number" class="input-field" placeholder="0-10" id="w_${i}_energia" value="${saved.energia}" onchange="saveProg(${i})">
                </div>
                <div class="input-group">
                    <span class="input-label">Sono (1-10)</span>
                    <input type="number" class="input-field" placeholder="0-10" id="w_${i}_sono" value="${saved.sono}" onchange="saveProg(${i})">
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function saveProg(index) {
    const data = {
        peso: document.getElementById(`w_${index}_peso`).value,
        cintura: document.getElementById(`w_${index}_cintura`).value,
        energia: document.getElementById(`w_${index}_energia`).value,
        sono: document.getElementById(`w_${index}_sono`).value
    };
    localStorage.setItem('prog_' + index, JSON.stringify(data));
}

function resetProgress() {
    if (confirm('Tem certeza que deseja apagar todos os dados de progresso e aulas concluídas?')) {
        localStorage.clear();
        navigate('progress');
    }
}
