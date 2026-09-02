// Data for the 28 days
const daysData = [
    { day: 1, title: 'O Primeiro Passo para a Transformação', duration: '10 min', vid: 'Eo1h4M-ZrWQ', instructions: 'Mantenha os ombros relaxados e a coluna reta. Concentre-se em respirar profundamente. Hoje é sobre conectar a mente ao corpo, sem pressa.' },
    { day: 2, title: 'Despertando a Circulação', duration: '10 min', vid: 'MCZOB9pxZy4', instructions: 'Sinta o peso sendo transferido de um pé para o outro suavemente. Mantenha os joelhos levemente destravados para garantir zero impacto.' },
    { day: 3, title: 'Equilíbrio e Leveza', duration: '10 min', vid: '3aaUcn9XG_U', instructions: 'O seu foco hoje é a estabilidade. Se precisar, faça os movimentos perto de uma parede ou cadeira para se apoiar. Respire no ritmo dos seus passos.' },
    { day: 4, title: 'Soltando as Tensões', duration: '10 min', vid: 'rbxR5gU4xgI', instructions: 'Movimente os braços com fluidez. Deixe qualquer estresse ir embora a cada expiração. A caminhada de hoje prepara os braços e o tronco para uma queima maior.' },
    { day: 5, title: 'Conexão Postural', duration: '10 min', vid: 'AmujiO9KEY4', instructions: 'Levante o olhar e abra o peito. Uma postura correta melhora a digestão e ajuda na redução da gordura abdominal. Sinta-se forte e presente.' },
    { day: 6, title: 'Fluidez Corporal', duration: '10 min', vid: 's5Xj_egcYBI', instructions: 'Deixe os movimentos fluírem como água. Não trave o quadril; permita que ele acompanhe os passos suavemente.' },
    { day: 7, title: 'Fechamento da Primeira Semana', duration: '10 min', vid: 'TfZorUtZQ3c', instructions: 'Celebre! Você completou sua primeira semana. Use este momento para refletir sobre como sua energia já começou a mudar. Mantenha o movimento suave.' },
    { day: 8, title: 'Ativando o Centro de Força', duration: '15 min', vid: 'CU2HShiQkmg', instructions: 'Contraia levemente o abdômen ao caminhar. Isso protege sua lombar e ativa a musculatura que queima a gordurinha da barriga.' },
    { day: 9, title: 'Pernas Fortes, Articulações Seguras', duration: '15 min', vid: 'Tf_guicmJdc', instructions: 'Foque em apoiar o calcanhar primeiro e depois a ponta do pé. Isso garante que seus joelhos fiquem sempre protegidos e livres de impacto.' },
    { day: 10, title: 'Oxigenação Total', duration: '15 min', vid: '2PWmVzsl2UU', instructions: 'Inspire em dois passos, expire em dois passos. O aumento de oxigênio nas células é o segredo para melhorar o seu metabolismo hoje.' },
    { day: 11, title: 'Desenhando os Braços', duration: '15 min', vid: 'bkwa6-6cYlk', instructions: 'Preste atenção na movimentação dos braços junto com as pernas. Mantenha-os firmes, mas sem rigidez, para começar a tonificar sem pesar.' },
    { day: 12, title: 'Acelerando o Ritmo Interno', duration: '15 min', vid: 'h0xtaWY3kb4', instructions: 'Hoje o fluxo é um pouquinho mais constante. Se sentir cansaço, diminua o tamanho do passo, mas tente não parar o movimento.' },
    { day: 13, title: 'Harmonia e Mobilidade', duration: '15 min', vid: 'uataEHLhfwk', instructions: 'Deixe as pernas e o tronco trabalharem juntos. Visualize suas articulações sendo lubrificadas e curadas a cada movimento.' },
    { day: 14, title: 'Metade do Caminho Concluída', duration: '20 min', vid: '8YrdoKe6820', instructions: 'Parabéns por chegar até aqui! Respire fundo e aproveite cada minuto dessa sessão. Você deve estar sentindo a energia fluindo muito melhor.' },
    { day: 15, title: 'Caminhada de Liberação', duration: '5-10 min', vid: 'pj8yc5uoUic', instructions: 'Uma sessão um pouco mais curta hoje para focar totalmente na qualidade do seu passo. Alivie o peso da caminhada imaginando que você flutua.' },
    { day: 16, title: 'Flexibilidade Dinâmica', duration: '15 min', vid: 'de5hJtE0FmE', instructions: 'Permita que seus ombros e pescoço girem suavemente acompanhando a caminhada. Libere qualquer tensão acumulada nos músculos.' },
    { day: 17, title: 'Fortalecendo o Core', duration: '15 min', vid: 'tyPHkgq7sXI', instructions: 'Mantenha a barriga firme. Toda a força do Tai Chi Walking vem do centro do seu corpo. Isso ajuda na queima localizada.' },
    { day: 18, title: 'Passos de Saúde', duration: '15 min', vid: 'SzjRJTlmKcg', instructions: 'Sinta o toque completo da sola do pé no chão. Essa conexão aumenta seu equilíbrio e segurança no dia a dia.' },
    { day: 19, title: 'O Despertar da Mobilidade', duration: '20 min', vid: 'CeG5WShAwjc', instructions: 'Aumente ligeiramente a amplitude dos braços se for confortável para os seus ombros. Respeite os seus limites.' },
    { day: 20, title: 'Mente Calma, Corpo Ativo', duration: '20 min', vid: 'VIk6A-ND8cE', instructions: 'Hoje, preste atenção apenas no som da sua respiração enquanto se move. É um momento de meditação ativa para abaixar o cortisol.' },
    { day: 21, title: 'Renovação Total', duration: '20 min', vid: 'rEWepKgLjX4', instructions: 'Último dia da terceira semana. Aproveite para agradecer ao seu corpo por acompanhar você nesta transformação de saúde e leveza.' },
    { day: 22, title: 'Intensificando a Queima', duration: '30 min', vid: 'Ou15PD5CcgY', instructions: 'Bem-vinda à reta final! A duração aumentou, então beba um pouco de água antes de começar. Mantenha um ritmo que seja agradável e sustentável para você.' },
    { day: 23, title: 'Movimento Constante', duration: '30 min', vid: 'Nh8iFVsYHWU', instructions: 'Seus músculos já estão mais resistentes. Foque na técnica dos passos para manter a proteção das articulações intacta durante todo o tempo.' },
    { day: 24, title: 'Queima de Gordura Profunda', duration: '30 min', vid: '0bGpFQHftlg', instructions: 'Manter o movimento fluido por esse tempo sinaliza ao seu corpo para usar os estoques de gordura como energia. Continue respirando profundamente!' },
    { day: 25, title: 'Resistência e Graciosidade', duration: '30 min', vid: 'Iy4Joju9bjU', instructions: 'Você já domina o método. Feche os olhos por alguns segundos (se estiver segura) e sinta como seu corpo trabalha em perfeita sintonia.' },
    { day: 26, title: 'O Poder do Foco', duration: '30 min', vid: 'u1DSm8box9Y', instructions: 'Quase lá! Encontre seu centro. Sinta a barriga, braços e pernas trabalhando juntos, trazendo os resultados que você buscou.' },
    { day: 27, title: 'A Penúltima Conquista', duration: '30 min', vid: 'vK7atpxdRJ8', instructions: 'Aproveite a sessão de hoje para perceber como seu fôlego melhorou desde o primeiro dia. Você está mais forte e disposta.' },
    { day: 28, title: 'Celebração Tai Chi Walking', duration: '35 min', vid: 'PzLEpLepGuM', instructions: 'A coroação da sua jornada! Uma reconexão com os movimentos do Dia 1, agora executados por um corpo mais leve, sem dores e renovado. Você conseguiu!' }
];

// App State
let currentView = 'home';
let currentDay = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    navigate('home');
});

// Navigation Logic
function navigate(viewName) {
    currentView = viewName;
    const content = document.getElementById('app-content');
    
    // Update bottom nav
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const btn = document.querySelector(`.nav-item[onclick="navigate('${viewName}')"]`);
    if(btn) btn.classList.add('active');

    // Render template
    const tpl = document.getElementById(`tpl-${viewName}`);
    if (tpl) {
        content.innerHTML = tpl.innerHTML;
    }

    // specific logic for views
    if (viewName === 'days') renderDaysGrid();
    if (viewName === 'progress') renderProgress();
    
    window.scrollTo(0, 0);
}

// Generate the iframe HTML safely
function getEmbedHtml(vid) {
    return `<iframe src="https://www.youtube-nocookie.com/embed/${vid}?modestbranding=1&rel=0&controls=0&showinfo=0" frameborder="0" allowfullscreen></iframe>`;
}

// Render Days List
function renderDaysGrid() {
    const container = document.getElementById('days-container');
    if (!container) return;

    let html = '';
    const completedDays = JSON.parse(localStorage.getItem('completedDays') || '[]');

    daysData.forEach(d => {
        const isCompleted = completedDays.includes(d.day);
        html += `
            <div class="day-card ${isCompleted ? 'completed' : ''}" onclick="openDay(${d.day})">
                <div class="day-number">Dia ${d.day}</div>
                <div class="day-short-title">${d.title}</div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Open a specific day
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
        btn.textContent = 'Aula já concluída';
        btn.disabled = true;
    } else {
        if(currentDay.day === 28) {
            btn.textContent = 'Concluir o Programa!';
        }
    }
    window.scrollTo(0, 0);
}

// Complete day logic
function completeDay() {
    if (!currentDay) return;
    const completedDays = JSON.parse(localStorage.getItem('completedDays') || '[]');
    if (!completedDays.includes(currentDay.day)) {
        completedDays.push(currentDay.day);
        localStorage.setItem('completedDays', JSON.stringify(completedDays));
    }
    navigate('days');
}

// Open Extras
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
                <p class="mt-1"><strong>Como usar:</strong> Segure cada posição com suavidade. Respire fundo e nunca force além do ponto de conforto. O alongamento não deve doer. Se sentir dor aguda nas articulações, diminua a amplitude.</p>
            </div>
        `;
    } else if (extraId === 'sleep') {
        extraHtml = `
            <h2 class="extra-title">Meditação para o Sono</h2>
            <div class="video-container mt-1">
                ${getEmbedHtml('nyeG96HVv8w')}
            </div>
            <div class="card mt-1">
                <p>O sono é fundamental para regular os hormônios do estresse e do apetite. Use este áudio na cama, quando estiver pronta para dormir, para ajudar seu corpo a relaxar e descansar.</p>
                <p class="mt-1"><strong>Instruções:</strong> Coloque os fones de ouvido, deite-se em uma posição confortável e feche os olhos. Permita-se desligar dos problemas do dia.</p>
            </div>
        `;
    } else if (extraId === 'diet') {
        extraHtml = `
            <h2 class="extra-title">Plano Anti-inchaço</h2>
            <p class="text-muted">Alimentação leve para 7 dias</p>
            
            <div class="card mt-1 mb-1">
                Esqueça as dietas restritivas! Esse plano foca em alimentos simples e anti-inflamatórios que ajudam a eliminar o excesso de líquidos e acelerar seus resultados. Beba pelo menos 2 litros de água por dia.
            </div>

            <div style="overflow-x: auto;">
                <table class="diet-table">
                    <tr><th>Refeição</th><th>Opção 1</th><th>Opção 2</th><th>Opção 3</th></tr>
                    <tr>
                        <td><strong>Café da Manhã</strong></td>
                        <td>Ovos mexidos com espinafre + Chá verde</td>
                        <td>Aveia com pedaços de maçã e canela</td>
                        <td>Pão integral com queijo branco e tomate</td>
                    </tr>
                    <tr>
                        <td><strong>Almoço</strong></td>
                        <td>Peixe grelhado + salada de folhas escuras com azeite</td>
                        <td>Peito de frango + brócolis cozido no vapor + arroz integral</td>
                        <td>Omelete com legumes + salada de pepino</td>
                    </tr>
                    <tr>
                        <td><strong>Lanche</strong></td>
                        <td>Uma maçã ou pera</td>
                        <td>Punhado de castanhas ou nozes</td>
                        <td>Iogurte natural sem açúcar com chia</td>
                    </tr>
                    <tr>
                        <td><strong>Jantar</strong></td>
                        <td>Sopa leve de legumes (cenoura, abóbora)</td>
                        <td>Filé de peixe assado com espargos</td>
                        <td>Salada morna com grão de bico e abobrinha</td>
                    </tr>
                </table>
            </div>
        `;
    } else if (extraId === 'faq') {
        extraHtml = `
            <h2 class="extra-title">Dúvidas Frequentes</h2>
            <div class="card mt-1">
                <div class="faq-item">
                    <div class="faq-q">O Tai Chi Walking funciona mesmo para mulheres acima de 50 anos?</div>
                    <div class="faq-a">Com certeza! Ele foi desenhado especialmente para mulheres 40+ e 50+, focando num metabolismo que precisa ser reacendido de forma gentil, sem pressão nas articulações.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q">Preciso comprar algum equipamento?</div>
                    <div class="faq-a">Zero equipamento! Apenas roupas confortáveis e um pequeno espaço.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q">Tenho problema no joelho / artrose, posso fazer?</div>
                    <div class="faq-a">O método tem zero impacto e ajuda a lubrificar as articulações. Porém, recomendamos mostrar ao seu médico se tiver quadros graves.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q">Quando vejo resultados?</div>
                    <div class="faq-a">Muitas alunas relatam mais energia logo na 1ª semana. As mudanças físicas visíveis começam a partir da 2ª ou 3ª semana de constância. Os resultados variam de corpo para corpo.</div>
                </div>
            </div>
        `;
    }

    wrapper.innerHTML = extraHtml;
    window.scrollTo(0, 0);
}

// Progress Table rendering and saving
function renderProgress() {
    const container = document.getElementById('progress-container');
    if (!container) return;

    const weeks = ['Início', 'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
    let html = '';

    weeks.forEach((week, i) => {
        const key = 'prog_' + i;
        const saved = JSON.parse(localStorage.getItem(key) || '{"peso":"","cintura":"","energia":"","sono":""}');
        
        html += `
            <div class="progress-card">
                <div class="progress-header">${week}</div>
                <div class="input-group">
                    <span class="input-label">Peso Atual (kg)</span>
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
    if(confirm('Tem certeza que deseja apagar todos os dados de progresso e aulas concluídas?')) {
        localStorage.clear();
        navigate('progress');
    }
}
