 HEAD
// Verificar se o tema foi previamente escolhido pelo usuário, caso contrário, usar tema padrão
var tema = localStorage.getItem('tema') === 'escuro' ? 'escuro' : 'claro';
aplicarTema(tema); // Aplicar o tema ao carregar a página

// Verifica se já existe um valor salvo para tema no localStorage
var tema = localStorage.getItem('tema') === 'true';

var elementos = document.querySelectorAll('.texto');
var especialidades = document.querySelectorAll('.especialidades');
var convenios = document.querySelectorAll('.convenios');
var medicos = document.querySelectorAll('.medicos');
var rede = document.querySelectorAll('.rede');
var rodap = document.querySelectorAll('.deadsec');
var espec = document.querySelectorAll('.espec');
var link = document.querySelectorAll('.lin');

// Função para atualizar o tema da página
function atualizarTema() {
    if (tema) {
        document.body.style.backgroundImage = 'url(images/home-background2.png)';
        elementos.forEach(function(elemento) {
            elemento.style.color = 'white';
        });
        especialidades.forEach(function(especialidade) {
            especialidade.src = 'images/icon/item 1 pbaixo home 2.png';
        });
        convenios.forEach(function(convenio) {
            convenio.src = 'images/icon/item 2 pbaixo home 2.png';
            convenio.style.color = 'white';
        });
        medicos.forEach(function(medico) {
            medico.src = 'images/icon/item 3 pbaixo home 2.png';
        });
        rede.forEach(function(rede) {
            rede.style.color = 'white';
        });
        rodap.forEach(function(rodap) {
            rodap.style.color = 'white';
        });
        espec.forEach(function(espec) {
            espec.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        });
        link.forEach(function(link) {
            link.style.color = 'white';
        });
    } else {
        document.body.style.backgroundImage = 'url(images/home-background.png)';
        elementos.forEach(function(elemento) {
            elemento.style.color = '#A93A2F';
        });
        especialidades.forEach(function(especialidade) {
            especialidade.src = 'images/icon/item 1 pbaixo home.png';
        });
        convenios.forEach(function(convenio) {
            convenio.src = 'images/icon/item 2 pbaixo home.png';
            convenio.style.color = '#A93A2F';
        });
        medicos.forEach(function(medico) {
            medico.src = 'images/icon/item 3 pbaixo home.png';
        });
        rede.forEach(function(rede) {
            rede.style.color = '#A93A2F';
        });
        rodap.forEach(function(rodap) {
            rodap.style.color = 'black';
        });
        espec.forEach(function(espec) {
            espec.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        });
        link.forEach(function(link) {
            link.style.color = '#A93A2F';
        });
    }
}

// Chamada inicial para atualizar o tema ao carregar a página
atualizarTema();
 c95350a7cd030dd558fe59204184daebc17bd540

// Função para aplicar o tema escolhido pelo usuário
function aplicarTema(temaEscolhido) {
    var elementos = document.querySelectorAll('.texto');
    var especialidades = document.querySelectorAll('.especialidades');
    var convenios = document.querySelectorAll('.convenios');
    var medicos = document.querySelectorAll('.medicos');
    var rede = document.querySelectorAll('.rede');

    if (temaEscolhido === 'escuro') {
        document.body.style.backgroundImage = 'url(images/home-background2.png)';
        elementos.forEach(function(elemento) {
            elemento.style.color = 'white';
        });
        especialidades.forEach(function(especialidade) {
            especialidade.src = 'images/icon/item 1 pbaixo home 2.png';
        });
        convenios.forEach(function(convenio) {
            convenio.src = 'images/icon/item 2 pbaixo home 2.png';
        });
        medicos.forEach(function(medico) {
            medico.src = 'images/icon/item 3 pbaixo home 2.png';
        });
        rede.forEach(function(redeItem) {
            redeItem.style.color = 'white';
        });
    } else {
        document.body.style.backgroundImage = 'url(images/home-background.png)';
        elementos.forEach(function(elemento) {
            elemento.style.color = '#A93A2F';
        });
        especialidades.forEach(function(especialidade) {
            especialidade.src = 'images/icon/item 1 pbaixo home.png';
        });
        convenios.forEach(function(convenio) {
            convenio.src = 'images/icon/item 2 pbaixo home.png';
        });
        medicos.forEach(function(medico) {
            medico.src = 'images/icon/item 3 pbaixo home.png';
        });
        rede.forEach(function(redeItem) {
            redeItem.style.color = '#A93A2F';
        });
    }
}

// Adicionar evento para alterar o estilo quando necessário
window.addEventListener('message', function(event) {
    if (event.data === 'alterarEstilo') {
 HEAD
        // Alternar o tema
        tema = tema === 'escuro' ? 'claro' : 'escuro';
        // Armazenar o estado do tema no localStorage
        localStorage.setItem('tema', tema);
        // Aplicar o tema escolhido
        aplicarTema(tema);

        // Altera o estilo da página como desejado
        tema = !tema; // Inverte o valor de tema
        localStorage.setItem('tema', tema); // Salva o valor de tema no localStorage
        atualizarTema(); // Atualiza o tema da página conforme o novo valor de tema
c95350a7cd030dd558fe59204184daebc17bd540
    }
});


