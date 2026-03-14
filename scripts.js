const botaoTema = document.getElementById('botaoTema');
const body = document.body;

botaoTema.addEventListener('click', () => {
    // Alterna a class dark-mode no body
    body.classList.toggle('dark-mode');
    
    // Altera o texto do botão conforme o modo
    if (body.classList.contains('dark-mode')) {
        botaoTema.textContent = 'Modo Claro';
    } else {
        botaoTema.textContent = 'Modo Escuro';
    }
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
