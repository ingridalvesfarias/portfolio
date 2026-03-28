const botaoTema = document.getElementById('botaoTema');
const iconeTema = document.getElementById('iconeTema');
const body = document.body;

// Função para atualizar o ícone baseado no tema
function atualizarIcone() {
    if (body.classList.contains('dark-mode')) {
        // Se estiver no dark mode, mostra o SOL para voltar ao claro
        iconeTema.className = 'fa-regular fa-sun'; 
    } else {
        // Se estiver no light mode, mostra a LUA para ir ao escuro
        iconeTema.className = 'fa-regular fa-moon';
    }
}

// Verifica se já tinha preferência salva
if (localStorage.getItem('tema-preferido') === 'dark') {
    body.classList.add('dark-mode');
}

// Inicializa o ícone correto
atualizarIcone();

botaoTema.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Salva a escolha
    const modoAtivo = body.classList.contains('dark-mode');
    localStorage.setItem('tema-preferido', modoAtivo ? 'dark' : 'light');
    
    // Troca o ícone
    atualizarIcone();
});

// Efeito do mouse personalizado 
const cursor = document.querySelector('.cursor')

    document.addEventListener('mousemove', function (info) {
        cursor.style.left = info.clientX + 'px'
        cursor.style.top = info.clientY + 'px'
    })

// Voltar ao topo (Home)
function backToHome() {
  const inicioPagina = document.getElementById('Home');
  inicioPagina.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Mostrar seção Projetos
function showProject() {
  const secao = document.getElementById('Projetos');
  secao.scrollIntoView({ behavior: 'smooth' });
}

// Mostrar seção Sobre Mim
function showAbout() {
  const secao = document.getElementById('Sobre');
  secao.scrollIntoView({ behavior: 'smooth' });
}

// Mostrar seção Contato
function showContact() {
  const secao = document.getElementById('Contato');
  secao.scrollIntoView({ behavior: 'smooth' });
}
