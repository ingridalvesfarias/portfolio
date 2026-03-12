const botaoTema = document.getElementById('botaoTema');
const corpo = document.body;

// Verificar se o usuário já tem uma preferência salva
if (localStorage.getItem('tema') === 'escuro') {
  corpo.classList.add('dark-mode');
  botaoTema.textContent = 'Modo Claro';
}

// Ação do botão
botaoTema.addEventListener('click', () => {
  corpo.classList.toggle('dark-mode');
  
  // Salvar a preferência do usuário
  if (corpo.classList.contains('dark-mode')) {
    localStorage.setItem('tema', 'escuro');
    botaoTema.textContent = 'Modo Claro';
  } else {
    localStorage.setItem('tema', 'claro');
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
