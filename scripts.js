/* ============ TEMA CLARO / ESCURO ============ */
const botaoTema = document.getElementById('botaoTema');
const iconeSol = document.getElementById('iconeSol');
const iconeLua = document.getElementById('iconeLua');
const body = document.body;

// Mostra o ícone correto de acordo com o tema atual
function atualizarIcone() {
    const escuro = body.classList.contains('dark-mode');
    iconeSol.style.display = escuro ? 'none' : 'block';
    iconeLua.style.display = escuro ? 'block' : 'none';
}

// Verifica se já existe preferência salva e aplica antes de renderizar o ícone
if (localStorage.getItem('tema-preferido') === 'dark') {
    body.classList.add('dark-mode');
}

// Define o ícone correto já na carga da página
atualizarIcone();

// Alterna o tema ao clicar no botão
botaoTema.addEventListener('click', () => {
    const escuro = body.classList.toggle('dark-mode');
    localStorage.setItem('tema-preferido', escuro ? 'dark' : 'light');
    atualizarIcone();
});

/* ============ MENU HAMBÚRGUER ============ */
const botaoHamburguer = document.getElementById('botaoHamburguer');
const navPrincipal = document.getElementById('navPrincipal');

botaoHamburguer.addEventListener('click', () => {
    const aberto = navPrincipal.classList.toggle('nav-aberto');
    botaoHamburguer.classList.toggle('ativo');
    botaoHamburguer.setAttribute('aria-expanded', aberto);
});

navPrincipal.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navPrincipal.classList.remove('nav-aberto');
        botaoHamburguer.classList.remove('ativo');
        botaoHamburguer.setAttribute('aria-expanded', 'false');
    });
});

/* ============ CARROSSEL DE PROJETOS ============ */
const gradeProjetos = document.getElementById('gradeProjetos');
const carrosselAnterior = document.getElementById('carrosselAnterior');
const carrosselProximo = document.getElementById('carrosselProximo');

function rolarCarrossel(direcao) {
    const card = gradeProjetos.querySelector('.card-projeto');
    if (!card) return;
    const gap = parseInt(window.getComputedStyle(gradeProjetos).gap) || 20;
    const distancia = card.offsetWidth + gap;
    gradeProjetos.scrollBy({ left: direcao * distancia, behavior: 'smooth' });
}

carrosselAnterior.addEventListener('click', () => rolarCarrossel(-1));
carrosselProximo.addEventListener('click', () => rolarCarrossel(1));

/* ============ CURSOR PERSONALIZADO ============ */
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (info) => {
    cursor.style.left = info.clientX + 'px';
    cursor.style.top = info.clientY + 'px';
});

/* ============ NAVEGAÇÃO ENTRE SEÇÕES ============ */
function backToHome() {
    document.getElementById('Home').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showProject() {
    document.getElementById('Projetos').scrollIntoView({ behavior: 'smooth' });
}

function showAbout() {
    document.getElementById('Sobre').scrollIntoView({ behavior: 'smooth' });
}

function showContact() {
    document.getElementById('Contato').scrollIntoView({ behavior: 'smooth' });
}